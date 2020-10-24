import React from 'react'
import { Card, NavLink } from 'react-bootstrap';
import './favoriteCard.scss';
import { ICON_PATH_1, ICON_PATH_2 } from '../../Constants/const'
import propTypes from 'prop-types';



const favoriteCard = (props) => {
    const {currentTemp,cityName,currentStateOfWeather, icon} = props.currentFavorite;
    const {click,unit} = props;
    return(
        <Card className="col-lg-2 favorites-cards" onClick={click} as={NavLink}>
                <Card.Body>
                    <Card.Title className="cards-text">{cityName}</Card.Title>
                    <div className="cards-text">
                        {currentTemp} °{unit}
                        <div className="current-state" >
                            {currentStateOfWeather}
                        </div>
                        <div className="image">
                            <img className="icons-images" src={`${ICON_PATH_1}${icon}${ICON_PATH_2}`} alt="weather icon day"></img>
                        </div>
                    </div>
                </Card.Body>
            </Card>
    );
}


favoriteCard.propTypes = {
    currentFavorite: propTypes.object,
    unit: propTypes.string,
    click: propTypes.func,
}

export default favoriteCard;