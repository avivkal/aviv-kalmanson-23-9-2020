import React from 'react'
import FavoriteCard from '../FavoriteCard/favoriteCard'
import { convertCelsiusToFahrenheit } from '../../Utility Functions/functions'
import './favoriteCardList.scss'

const favoriteCardList = (props) => {
    return (

        <div className="container">
            <div className="row">
                {(Array.isArray(props.favorites) && props.favorites.length) ? props.favorites.map(currentFavorite => {
                    return <FavoriteCard
                        key={currentFavorite.key}
                        currentFavorite={currentFavorite}
                        click={() => props.click(currentFavorite)}
                        currentTemp={currentFavorite.currentTemp}
                        unit={props.unit} />
                }) : <div className="justify-content-center"> <h1 className={props.darkMode ? 'light-text no-favorites-h1' : 'dark-text no-favorites-h1'}>You don't have any favorites currently</h1> </div>}
            </div>
        </div>
    );
}

export default favoriteCardList;