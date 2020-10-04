import React from 'react'
import { Card } from 'react-bootstrap';
import './favoriteCard.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const favoriteCard = (props) => {
    return (
        <Card className="col-xl-2 favorites-cards" onClick={props.click}>
            <Card.Body>
                <Card.Title className="cards-text">{props.currentFavorite.cityName}</Card.Title>
                <Card.Text className="cards-text">
                    {props.currentTemp} °{props.unit}
                    <br /><br />
                    {props.currentFavorite.currentStateOfWeather}
                    <br /><br /><br /><br />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default favoriteCard;