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
            this.props.firstLoad();
        }
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
            <div className={this.props.darkModeText}>

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
                        onSearchChange={(event) => this.props.changeHandler(event)}
                        onChange={(event) => { this.props.submit(findKeyByName(event.currentTarget.textContent, this.props.searchText), event.currentTarget.textContent.split(',')[0]) }}
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
                    darkModeText={this.props.darkModeText}
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
        modalTitle: state.modalTitle,
        darkModeText: state.darkModeText
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
        submit: (cityKey, cityName) => dispatch(homeActions.submit(cityKey, cityName)),
        changeHandler : (event) => dispatch(homeActions.changeHandler(event)),
        firstLoad : () => dispatch(homeActions.firstLoad()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);