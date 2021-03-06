import React, { Component } from 'react';
import '../../App.scss';
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import * as generalActions from '../../Store/Actions/actions'
import * as homeActions from '../../Store/Actions/homeActions'
import { existsInFavorites, convertFavoritesToCelsius, convertFavoritesToFahrenheit, convertFahrenheitToCelsius, convertCelsiusToFahrenheit, convertTemp } from '../../UtilityFunctions/functions';
import { HOME_PATH, FAVORITES_PATH, CELSIUS, FAHRENHEIT } from '../../Constants/const'


class NavigationBar extends Component {
    toggleHandle = () => {

        const unit = this.props.unit;
        let newUnit, currentNewTemp, newFavorites;
        if (unit === CELSIUS) {
            newUnit = FAHRENHEIT;
            currentNewTemp = convertCelsiusToFahrenheit(this.props.current.currentTemp);
            newFavorites = convertFavoritesToFahrenheit();
        }
        else {
            newUnit = CELSIUS;
            currentNewTemp = convertFahrenheitToCelsius(this.props.current.currentTemp);
            newFavorites = convertFavoritesToCelsius();
        }

        if (!existsInFavorites(this.props.favorites, this.props.current)) {
            this.props.toggle(
                currentNewTemp,
                newUnit,
                convertTemp(this.props.current.fiveDaysForecast, unit)
            );
        }
        this.props.updateFavorites(newFavorites);

    }

    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg={this.props.darkMode ? "light" : "dark"} variant={this.props.darkMode ? "light" : "dark"} >
                <Navbar.Brand as={Link} to={HOME_PATH}>Herolo Weather Task</Navbar.Brand>
                <Button
                    style={{ backgroundColor: '#343A40', border: '1px solid #343A40' }}
                    onClick={() => { this.toggleHandle() }}
                    variant="secondary"
                >
                    <span className={this.props.unit === CELSIUS ? 'active' : null}>°C </span>
                    <span>/</span>
                    <span className={this.props.unit === FAHRENHEIT ? 'active' : null}> °F</span>
                </Button>

                <Button
                    style={{ backgroundColor: '#343A40', border: '1px solid #343A40', marginLeft: '10px' }}
                    onClick={() => { this.props.toggleDarkMode() }}
                    variant="secondary"
                >
                    Dark Mode
                </Button>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to={HOME_PATH}>Home</Nav.Link>
                        <Nav.Link as={Link} to={FAVORITES_PATH}>
                            Favorites </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (newTemp, newUnit, fiveDays) => dispatch(homeActions.toggle(newTemp, newUnit, fiveDays)),
        toggleDarkMode: () => dispatch(homeActions.toggleDarkMode()),
        updateFavorites: (favorites) => dispatch(generalActions.updateFavorites(favorites)),

    }
}

const mapStateToProps = (state) => {
    return {
        darkMode: state.home.darkmode,
        unit: state.home.unit,
        current: state.home.current,
        favorites: state.favorites.favorites
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

