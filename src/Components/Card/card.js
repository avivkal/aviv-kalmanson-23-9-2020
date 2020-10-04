import React from 'react';
import { DAYS } from '../../Constants/const';
import { Card } from 'react-bootstrap';
import './card.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

const card = (props) => {
    return (
        <Card className="col-xl-2 cards-style" >
            <Card.Body >
                <Card.Title className="cards-title">{DAYS[(props.today + props.index) % 7]}</Card.Title>
                <br />
                <Card.Text className="cards-text">
                    {props.currentDay.Temperature.Minimum.Value}  - {props.currentDay.Temperature.Maximum.Value} °{props.unit}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default card;