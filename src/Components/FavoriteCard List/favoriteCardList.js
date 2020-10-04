import React from 'react'
import FavoriteCard from '../FavoriteCard/favoriteCard'
import { convertCelsiusToFahrenheit } from '../../Utility Functions/functions'
import './favoriteCardList.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const favoriteCardList = (props) => {
    return (

        <div className="container">
            <div className="row justify-content-center">
                {(Array.isArray(props.favorites) && props.favorites.length) ? props.favorites.map(currentFavorite => {
                    return <FavoriteCard
                        key={currentFavorite.key}
                        currentFavorite={currentFavorite}
                        click={() => props.click(currentFavorite)}
                        currentTemp={props.unit === 'F' ? convertCelsiusToFahrenheit(currentFavorite.currentTemp) : currentFavorite.currentTemp}
                        unit={props.unit} />
                }) :<h1 className={props.darkMode ? 'light-text no-favorites-h1' : 'dark-text no-favorites-h1'}>You don't have any favorites currently</h1>}
            </div>
        </div>
    );
}

export default favoriteCardList;