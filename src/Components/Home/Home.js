import React, { Component } from 'react'
import { Button, Jumbotron, Row, Col, Modal } from 'react-bootstrap';
import { connect } from 'react-redux'
import axios from 'axios'
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import './home.scss';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { CSSTransitionGroup } from 'react-transition-group';
import { ICON_PATH_1, ICON_PATH_2, API_PATH, DEFAULT_CITY_KEY, DEFAULT_CITY_NAME } from '../../Constants/const'
import * as generalActions from '../../Store/Actions/actions'
import * as homeActions from '../../Store/Actions/homeActions'
import { existsInFavorites, findKeyByName } from '../../UtilityFunctions/functions'
import CardsList from '../CardsList/cardsList'
import {getFavorites} from '../../UtilityFunctions/localStorageFunctions'



class Home extends Component {
    componentDidMount() {
        const oldFavorites = getFavorites();
        this.props.updateFavorites(oldFavorites);
        if (this.props.first) {
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
    errorLog = () => {
        //show toast message
        this.props.openModal('Note', 'Access denied to your location! No worries, we will use Tel Aviv as default.');
    }


    success = (pos) => {
        let crd = pos.coords;
        axios.get('locations/v1/cities/geoposition/search' + API_PATH + '&q='
            + crd.latitude + '%2C' + crd.longitude).then(data => {
                this.submit(data.data.Key, data.data.EnglishName);
                this.props.firstTimeFinished();
            }).catch(error => this.props.openModal('Error', error.toString()))
    }

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
                    <Jumbotron className={this.props.darkMode ? "jumbotron-dark container" : "jumbotron-light container"}>
                        <Row className="show-grid">
                            <Col xs={6} className="d-flex justify-content-start">
                                <section >
                                    <h3 className={'DarkText'}>{this.props.current.cityName}</h3>
                                    <h3 className={'DarkText'}>{this.props.current.currentTemp} °{this.props.unit}</h3>
                                    <img src={ICON_PATH_1 + this.props.current.icon + ICON_PATH_2} alt="weather icon"></img>
                                </section>                        </Col>
                            <Col xs={6} className="d-flex justify-content-end">
                                <section>
                                    {existsInFavorites(this.props.current, this.props.favorites) ? <BsHeartFill className="icons" /> : <BsHeart className="icons" />}
                                    <Button variant="dark" className="add-to-favorites" onClick={this.addToFavoritesHandler}>{existsInFavorites(this.props.current, this.props.favorites) ? 'Remove from favorites' : 'Add to favorites'}</Button>
                                </section>
                            </Col>
                        </Row>
                        <h1 className="dark-text state-of-weather">{this.props.current.currentStateOfWeather}</h1>
                        <div className="cards-list-home">
                        <CardsList
                            current={this.props.current}
                            today={new Date().getDay()}
                            unit={this.props.unit}
                            isFav={false}
                        />

                        </div>
                        
                    </Jumbotron>

                </CSSTransitionGroup>

                <Modal show={this.props.show} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.modalText}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeModal}>
                            Close
          </Button>
                    </Modal.Footer>
                </Modal>

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