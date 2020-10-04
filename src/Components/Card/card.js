import React from 'react';
import { DAYS } from '../../Constants/const';
import { Card, NavLink } from 'react-bootstrap';
import './card.scss';
import {ICON_PATH_1, ICON_PATH_2} from '../../Constants/const'
import {convertIconPath} from '../../UtilityFunctions/functions'

const card = (props) => {
    if(props.isFav){
        return (
            <Card className="col-xl-2 favorites-cards" onClick={props.click} as={NavLink}>
            <Card.Body>
                <Card.Title className="cards-text">{props.currentFavorite.cityName}</Card.Title>
                <Card.Text className="cards-text">
                    {props.currentTemp} °{props.unit}
                    <br /><br />
                    {props.currentFavorite.currentStateOfWeather}
                    <br />
                    <img src={ICON_PATH_1 + props.currentFavorite.icon + ICON_PATH_2} alt="weather icon day"></img>
                    <br /><br /><br /><br />
                </Card.Text>
            </Card.Body>
        </Card>
        );
    }
    return (
        <Card className="col-xl-2 cards-style">
            <Card.Body >
                <Card.Title className="cards-title">{DAYS[(props.today + props.index) % 7]}</Card.Title>
                <br />
                <div className="cards-text">
                    {props.currentDay.Temperature.Minimum.Value}  - {props.currentDay.Temperature.Maximum.Value} °{props.unit}
                    <div className="row icons-day-night justify-content-center">
                        <span>Day:</span>
                        <img src={ICON_PATH_1 + convertIconPath(props.currentDay.Day.Icon) + ICON_PATH_2} alt="weather icon day"></img>
                        <span>Night:</span>
                        <img src={ICON_PATH_1 + convertIconPath(props.currentDay.Night.Icon)  + ICON_PATH_2} alt="weather icon night"></img>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default card;