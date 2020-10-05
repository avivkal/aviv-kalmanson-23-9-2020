import React from 'react'
import Card from '../Card/card'
import './cardsList.scss'
import {arrayExists} from '../../UtilityFunctions/functions'

const cardsList = (props) => {
    if(props.isFav){
        return(
            <div className="container">
            <div className="row justify-content-center">
                {arrayExists(props.favorites) ? props.favorites.map(currentFavorite => {
                    return <Card
                        key={currentFavorite.key}
                        currentFavorite={currentFavorite}
                        click={() => props.click(currentFavorite)}
                        currentTemp={currentFavorite.currentTemp}
                        unit={props.unit} 
                        isFav= {props.isFav}/>
                }) : <h1 className={props.darkMode ? 'light-text no-favorites-h1' : 'dark-text no-favorites-h1'}>You don't have any favorites currently</h1>}
            </div>
        </div>

        );
       
    }
    return (
        <div className="row justify-content-center">
            {arrayExists(props.current.fiveDaysForecast) ? props.current.fiveDaysForecast.map((currentDay, index) => {
                return <Card currentDay={currentDay}
                    today={props.today}
                    index={index}
                    unit={props.unit}
                    key={currentDay.Date}
                    isFav={props.isFav} />
            }
            ) : null}
        </div>
    );
}

export default cardsList;
