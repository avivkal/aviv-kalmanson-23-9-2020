import React from 'react';
import { ICON_PATH_1, ICON_PATH_2 } from '../../Constants/const';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { Button, Jumbotron, Row, Col } from 'react-bootstrap';
import CardsList from '../CardsList/cardsList';
import { existsInFavorites } from '../../UtilityFunctions/functions'
import './Jumbotron.scss'
import propTypes from 'prop-types';



const jumbotronContent = (props) => {
    const {darkModeText,current,favorites,click,unit} = props;
    if(current.icon === undefined){
        return(<div></div>)
    }
    return (
        <Jumbotron className={`jumbotron-${darkModeText} container fluid`}>
            <Row className="show-grid">
                <Col md={{ span: 6, offset: 3 }} className="justify-content-center">
                    <section >
                        <h3>{current.cityName}</h3>
                        <h3>{current.currentTemp} °{unit}</h3>
                        <img className="icons-images" src={ICON_PATH_1 + current.icon + ICON_PATH_2} alt="weather icon"></img>
                    </section>                        </Col>
                <Col md={3} className="d-flex justify-content-center">
                    <section>
                        {existsInFavorites(current, favorites) ? <BsHeartFill className="icons" onClick={click}/>  : <BsHeart className="icons" onClick={click}/>}
                        <Button variant="dark" className="add-to-favorites" onClick={click}>{existsInFavorites(current, favorites) ? 'Remove from favorites' : 'Add to favorites'}</Button>
                    </section>
                </Col>
            </Row>
            <h1 className="dark-text state-of-weather">{current.currentStateOfWeather}</h1>
            <div className="cards-list-home">
                <CardsList
                    current={current}
                    today={new Date().getDay()}
                    unit={unit}
                    isFav={false}
                />

            </div>

        </Jumbotron>
    );
}

jumbotronContent.propTypes = {
    unit: propTypes.string,
    current: propTypes.object,
    favorites: propTypes.array,
    click: propTypes.func,
    darkModeText: propTypes.string
}

export default jumbotronContent;
