import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../App.scss'
import { CSSTransitionGroup } from 'react-transition-group';
import * as actions from '../../Actions/actions'
import { axiosConfig } from '../../Axios/axiosConfig'
import axios from 'axios'
import { API_PATH } from '../../Constants/const'
import { forLoopconvertFahrenheitToCelsius } from '../../Utility Functions/functions'
import FavoriteCardList from '../FavoriteCard List/favoriteCardList'

class Favorites extends Component {

    componentDidMount() {
        const oldFavorites = JSON.parse(localStorage.getItem('favorites'));
        let requests = [];
        if (this.props.firstTimeFavorites) {
            if(Array.isArray(oldFavorites) && oldFavorites.length){
                for (const favorite of oldFavorites) {
                    requests.push(
                        axios.all([axiosConfig.get('forecasts/v1/daily/5day/' + favorite.key + API_PATH),
                        axiosConfig.get('currentconditions/v1/' + favorite.key + API_PATH)])
                    )
                }
                Promise.all(requests).then((response) => {
                    for (let i = 0; i < response.length; i++) {
                        oldFavorites[i].fiveDaysForecast = this.props.unit === 'C' ? forLoopconvertFahrenheitToCelsius(response[i][0].data.DailyForecasts) : response[i][0].data.DailyForecasts;
                        oldFavorites[i].currentStateOfWeather = response[i][1].data[0].WeatherText;
                        oldFavorites[i].currentTemp = Math.floor(response[i][1].data[0].Temperature.Metric.Value);
                        oldFavorites[i].icon = response[i][1].data[0].WeatherIcon < 10 ? '0' + response[i][1].data[0].WeatherIcon : response[i][1].data[0].WeatherIcon;
                    }
                    //at the end
                    this.props.updateFavorites(oldFavorites);
                    this.props.firstTimeFinishedFavorites();
                })
            }
           
        }
    }

    handleClickOnCard = (clickedFavorite) => {
        this.props.history.push('/aviv-kalmanson-23-9-2020');
        this.props.clearText();
        this.props.setFavoriteCityDetails(clickedFavorite);

    }

    render() {
        return (
            <div className={this.props.darkMode ? 'dark' : 'light'}>
                <CSSTransitionGroup transitionName="cards"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>

                    <FavoriteCardList
                        click={(currentFavorite) => this.handleClickOnCard(currentFavorite)}
                        unit={this.props.unit}
                        favorites={this.props.favorites}
                        darkMode={this.props.darkMode}
                    />
                </CSSTransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
        current: state.current,
        darkMode: state.darkmode,
        unit: state.unit,
        firstTimeFavorites: state.firstTimeFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFavoriteCityDetails: (clickedFavorite) => dispatch(actions.setFavoriteCityDetails(clickedFavorite)),
        firstTimeFinished: () => dispatch(actions.firstTimeFinished()),
        clearText: () => dispatch(actions.clear()),
        firstTimeFinishedFavorites: () => dispatch(actions.firstTimeFinishedFavorites()),
        updateFavorites: (favorites) => dispatch(actions.updateFavorites(favorites)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);