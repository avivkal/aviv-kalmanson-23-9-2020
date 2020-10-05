import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../App.scss'
import { CSSTransitionGroup } from 'react-transition-group';
import * as generalActions from '../../Store/Actions/actions'
import * as favoritesActions from '../../Store/Actions/favoritesActions'
import CardsList from '../CardsList/cardsList'
import { HOME_PATH } from '../../Constants/const'


class Favorites extends Component {

    componentDidMount() {
        if (this.props.firstTimeFavorites) {
            this.props.firstLoadFavorites();
        }
    }

    handleClickOnCard = (clickedFavorite) => {
        this.props.history.push(HOME_PATH);
        this.props.clearText();
        this.props.setFavoriteCityDetails(clickedFavorite);

    }

    render() {
        return (
            <div className={this.props.darkModeText}>
                <CSSTransitionGroup transitionName="cards"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>

                    <CardsList
                        click={(currentFavorite) => this.handleClickOnCard(currentFavorite)}
                        unit={this.props.unit}
                        favorites={this.props.favorites}
                        darkModeText={this.props.darkModeText}
                        isFav={true}
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
        firstTimeFavorites: state.firstTimeFavorites,
        darkModeText: state.darkModeText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFavoriteCityDetails: (clickedFavorite) => dispatch(favoritesActions.setFavoriteCityDetails(clickedFavorite)),
        clearText: () => dispatch(generalActions.clear()),
        firstTimeFinishedFavorites: () => dispatch(favoritesActions.firstTimeFinishedFavorites()),
        updateFavorites: (favorites) => dispatch(generalActions.updateFavorites(favorites)),
        firstLoadFavorites: () => dispatch(favoritesActions.firstLoadFavorites())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);