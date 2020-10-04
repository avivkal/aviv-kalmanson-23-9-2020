import React from 'react';
import { DAYS } from '../../Constants/const';
import { Card } from 'react-bootstrap';
import './card.scss';
import {ICON_PATH_1, ICON_PATH_2} from '../../Constants/const'
import {convertIconPath} from '../../Utility Functions/functions'

const card = (props) => {
    return (
        <Card className="col-xl-2 cards-style">
            <Card.Body >
                <Card.Title className="cards-title">{DAYS[(props.today + props.index) % 7]}</Card.Title>
                <br />
                <Card.Text className="cards-text">
                    {props.currentDay.Temperature.Minimum.Value}  - {props.currentDay.Temperature.Maximum.Value} °{props.unit}
                    <div className="row icons-day-night">
                    <p>Day:</p>
                    <img src={ICON_PATH_1 + convertIconPath(props.currentDay.Day.Icon) + ICON_PATH_2} alt="weather icon day"></img>
                    <p>Night:</p>
                    <img src={ICON_PATH_1 + convertIconPath(props.currentDay.Night.Icon)  + ICON_PATH_2} alt="weather icon night"></img>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default card;