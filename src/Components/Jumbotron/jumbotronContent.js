import React from 'react';
import { ICON_PATH_1, ICON_PATH_2 } from '../../Constants/const';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { Button, Jumbotron, Row, Col, NavLink } from 'react-bootstrap';
import CardsList from '../CardsList/cardsList';
import { existsInFavorites } from '../../UtilityFunctions/functions'
import './Jumbotron.scss'

const jumbotronContent = (props) => {
    return (
        <Jumbotron className={"jumbotron-" + props.darkModeText + " container fluid"}>
            <Row className="show-grid">
                <Col md={{ span: 6, offset: 3 }} className="justify-content-center">
                    <section >
                        <h3 className="DarkText">{props.current.cityName}</h3>
                        <h3 className="DarkText">{props.current.currentTemp} °{props.unit}</h3>
                        <img className="icons-images" src={ICON_PATH_1 + props.current.icon + ICON_PATH_2} alt="weather icon"></img>
                    </section>                        </Col>
                <Col md={3} className="d-flex justify-content-center">
                    <section>
                        {existsInFavorites(props.current, props.favorites) ? <BsHeartFill className="icons" onClick={props.click}/>  : <BsHeart className="icons" onClick={props.click}/>}
                        <Button variant="dark" className="add-to-favorites" onClick={props.click}>{existsInFavorites(props.current, props.favorites) ? 'Remove from favorites' : 'Add to favorites'}</Button>
                    </section>
                </Col>
            </Row>
            <h1 className="dark-text state-of-weather">{props.current.currentStateOfWeather}</h1>
            <div className="cards-list-home">
                <CardsList
                    current={props.current}
                    today={new Date().getDay()}
                    unit={props.unit}
                    isFav={false}
                />

            </div>

        </Jumbotron>
    );
}
export default jumbotronContent;
