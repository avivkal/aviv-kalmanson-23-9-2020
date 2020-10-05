import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './home.scss';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { CSSTransitionGroup } from 'react-transition-group';
import { API_PATH, DEFAULT_CITY_KEY, DEFAULT_CITY_NAME } from '../../Constants/const'
import * as generalActions from '../../Store/Actions/actions'
import * as homeActions from '../../Store/Actions/homeActions'
import { existsInFavorites, findKeyByName } from '../../UtilityFunctions/functions'
import {getFavorites} from '../../UtilityFunctions/localStorageFunctions'
import CustomModal from '../Modal/customModal'
import JumbotronContent from '../Jumbotron/jumbotronContent'

class Home extends Component {
    componentDidMount() {
        const oldFavorites = getFavorites();
        this.props.updateFavorites(oldFavorites);
        if (this.props.first) {  //actions async
            axios.all([axios.get('forecasts/v1/daily/5day/' + DEFAULT_CITY_KEY + API_PATH),
            axios.get('currentconditions/v1/' + DEFAULT_CITY_KEY + API_PATH)])
                .then(data => {
                    this.props.setCurrentCityDetails(data, DEFAULT_CITY_KEY, DEFAULT_CITY_NAME);
                    this.props.firstTimeFinished();
                }).then(() => {
                    navigator.geolocation.getCurrentPosition(this.success, this.errorLog, {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    });
                }).catch(error => this.props.openModal('Error', error.toString()));
        }

    }

    //actions async
    errorLog = () => {
        this.props.openModal('Note', 'Access denied to your location! No worries, we will use Tel Aviv as default.');
    }


    //actions async
    success = (pos) => {
        let crd = pos.coords;
        axios.get('locations/v1/cities/geoposition/search' + API_PATH + '&q='
            + crd.latitude + '%2C' + crd.longitude).then(data => {
                this.submit(data.data.Key, data.data.EnglishName);
                this.props.firstTimeFinished();
            }).catch(error => this.props.openModal('Error', error.toString()))
    }

    //actions async
    changeHandler = (event) => {
        this.props.updateText(event.target.value);
        axios.get('locations/v1/cities/autocomplete' + API_PATH + '&q=' + event.target.value)
            .then(response => {
                let arr = [];
                for (let i = 0; i < response.data.length; i++) {
                    arr[i] = {
                        key: response.data[i].Key,
                        text: response.data[i].LocalizedName + ',' + response.data[i].AdministrativeArea.LocalizedName + ',' + response.data[i].Country.ID,
                        value: response.data[i].LocalizedName + ',' + response.data[i].AdministrativeArea.LocalizedName + ',' + response.data[i].Country.ID,

                    }
                }
                this.props.updateSearch(arr);
            }
            ).catch(error => this.props.openModal('Error', error.toString()));
    }

    //actions async
    submit = (cityKey = this.props.searchText[0].key, cityName = this.props.searchText[0].text.split(',')[0]) => {
        axios.all([axios.get('forecasts/v1/daily/5day/' + cityKey + API_PATH),
        axios.get('currentconditions/v1/' + cityKey + API_PATH)])
            .then(data => {
                this.props.setCurrentCityDetails(data, cityKey, cityName);
                this.props.clearText();
            }).catch(errors => this.props.openModal('Error', errors.toString()))
    }

    addToFavoritesHandler = () => {
        if (!existsInFavorites(this.props.current, this.props.favorites)) {
            this.props.addToFavorites();
        }
        else {
            this.props.removeFromFavorites(this.props.current.key);
        }
    }

    render() {
        return (
            <div className={this.props.darkMode ? 'dark' : 'light'}>

                <section className="search">
                    <Dropdown
                        className='icon search-dropdown-style'
                        icon='world'
                        button
                        floating
                        labeled
                        options={this.props.searchText}
                        search
                        placeholder="Enter City"
                        onSearchChange={(event) => this.changeHandler(event)}
                        onChange={(event) => { this.submit(findKeyByName(event.currentTarget.textContent, this.props.searchText), event.currentTarget.textContent.split(',')[0]) }}
                    />
                </section>
                <CSSTransitionGroup transitionName="cards"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>

                    <JumbotronContent 
                    unit = {this.props.unit}
                    current = {this.props.current}
                    favorites = {this.props.favorites}
                    click={this.addToFavoritesHandler}
                    darkMode={this.props.darkMode}
                    />

                </CSSTransitionGroup>


                <CustomModal 
                modalTitle={this.props.modalTitle}
                modalText={this.props.modalText}
                closeModal={this.props.closeModal} //function
                show={this.props.show}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
        current: state.current,
        text: state.searchText,
        searchText: state.searchArr,
        unit: state.unit,
        first: state.firstTime,
        darkMode: state.darkmode,
        show: state.show,
        modalText: state.modalText,
        modalTitle: state.modalTitle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (val) => dispatch(homeActions.updateText(val)),
        updateSearch: (arr) => dispatch(homeActions.updateSearch(arr)),
        setCurrentCityDetails: (data, cityKey, cityName) => dispatch(homeActions.setCurrentCityDetails(data, cityKey, cityName)),
        updateForecast: (arr) => dispatch(homeActions.updateForecast(arr)),
        addToFavorites: () => dispatch(homeActions.addToFavorites()),
        firstTimeFinished: () => dispatch(homeActions.firstTimeFinished()),
        clearText: () => dispatch(generalActions.clear()),
        removeFromFavorites: (key) => dispatch(homeActions.removeFromFavorites(key)),
        closeModal: () => dispatch(homeActions.closeModal()),
        openModal: (title, text) => dispatch(homeActions.openModal(title, text)),
        updateFavorites: (favorites) => dispatch(generalActions.updateFavorites(favorites)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);