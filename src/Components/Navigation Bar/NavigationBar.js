import React, { Component } from 'react';
import '../../App.scss';
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import * as actions from '../../Actions/actions'
import { existsInFavorites, convertFavoritesToCelsius, convertFavoritesToFahrenheit, convertFahrenheitToCelsius, convertCelsiusToFahrenheit, forLoopconvertCelsiusToFahrenheit, forLoopconvertFahrenheitToCelsius } from '../../Utility Functions/functions';


class NavigationBar extends Component {
    toggleHandle = () => {
        if (this.props.unit === 'C') {
            if (!existsInFavorites(this.props.favorites, this.props.current)) {
                this.props.toggle(
                    convertCelsiusToFahrenheit(this.props.current.currentTemp),
                    'F',
                    forLoopconvertCelsiusToFahrenheit(this.props.current.fiveDaysForecast)
                );
            }
            this.props.updateFavorites(convertFavoritesToFahrenheit());

        }
        else {
            if (!existsInFavorites(this.props.favorites, this.props.current)) {
                this.props.toggle(
                    convertFahrenheitToCelsius(this.props.current.currentTemp),
                    'C',
                    forLoopconvertFahrenheitToCelsius(this.props.current.fiveDaysForecast)
                );
            }
            this.props.updateFavorites(convertFavoritesToCelsius());
        }

    }

    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg={this.props.darkMode ? "light" : "dark"} variant={this.props.darkMode ? "light" : "dark"} >
                <Navbar.Brand as={Link} to="/aviv-kalmanson-23-9-2020">Herolo Weather Task</Navbar.Brand>
                <Button
                    style={{ backgroundColor: '#343A40', border: '1px solid #343A40' }}
                    onClick={() => { this.toggleHandle() }}
                    variant="secondary"
                >
                <span className={this.props.unit === 'C' ? 'active' : null}>°C </span>
                <span>/</span>
                <span className={this.props.unit === 'F' ? 'active' : null }> °F</span>  
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
                        <Nav.Link as={Link} to="/aviv-kalmanson-23-9-2020">Home</Nav.Link>
                        <Nav.Link as={Link} to="/aviv-kalmanson-23-9-2020/favorites">
                            Favorites </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (newTemp, newUnit, fiveDays) => dispatch(actions.toggle(newTemp, newUnit, fiveDays)), //toggle C/F
        toggleDarkMode: () => dispatch(actions.toggleDarkMode()), //TOGGLE DARK MODE
        updateFavorites: (favorites) => dispatch(actions.updateFavorites(favorites)),

    }
}

const mapStateToProps = (state) => {
    return {
        darkMode: state.darkmode,
        unit: state.unit,
        current: state.current,
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

