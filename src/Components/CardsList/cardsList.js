import React from 'react'
import Card from '../Card/card'
import FavoriteCard from '../FavoriteCard/favoriteCard'
import './cardsList.scss'
import { arrayExists } from '../../UtilityFunctions/functions'
import propTypes from 'prop-types';

const CardsList = (props) => {
    const {favorites,click,today,current, unit} = props;
    if (props.isFav) {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {arrayExists(favorites) ? favorites.map(currentFavorite => {
                        return <FavoriteCard
                            key={currentFavorite.key}
                            currentFavorite={currentFavorite}
                            click={() => click(currentFavorite)}
                            currentTemp={currentFavorite.currentTemp}
                            unit={unit}/>
                    }) : <h1 className={`text-${props.darkModeText}-mode-active no-favorites-h1`}>You don't have any favorites currently</h1>}
                </div>
            </div>

        );

    }
    return (
        <div className="row justify-content-center">
            {arrayExists(current.fiveDaysForecast) && current.fiveDaysForecast.map((currentDay, index) => {
                return <Card currentDay={currentDay}
                    today={today}
                    index={index}
                    unit={unit}
                    key={currentDay.Date}
                    />
            }
            )}
        </div>
    );
}

CardsList.propTypes = {
    unit: propTypes.string,
    current: propTypes.object,
    favorites: propTypes.array,
    click: propTypes.func,
    darkModeText: propTypes.string,
    isFav: propTypes.bool,
    today: propTypes.number
}

export default CardsList;
