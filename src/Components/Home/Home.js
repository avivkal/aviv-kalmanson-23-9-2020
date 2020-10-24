import React, { Component } from 'react'
import { connect } from 'react-redux'
import './home.scss';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { CSSTransitionGroup } from 'react-transition-group';
import * as generalActions from '../../Store/Actions/actions'
import * as homeActions from '../../Store/Actions/homeActions'
import * as searchActions from '../../Store/Actions/searchActions'
import * as favoriteActions from '../../Store/Actions/favoritesActions'
import * as modalActions from '../../Store/Actions/modalActions'
import { convertIconPath, existsInFavorites, findKeyByName } from '../../UtilityFunctions/functions'
import { getFavorites } from '../../UtilityFunctions/localStorageFunctions'
import CustomModal from '../Modal/customModal'
import JumbotronContent from '../Jumbotron/jumbotronContent'
import {debounce} from 'lodash';
import { Spinner } from 'react-bootstrap';


class Home extends Component {

   
    componentDidMount() {
        for(let i = 1; i<=44; i++){
            if(i!==9 && i!==10 && i!==27 && i!==28){
                let img = new Image();
                img.src = "https://www.accuweather.com/images/weathericons/" + convertIconPath(i) + ".svg";        
            }
        }
        const oldFavorites = getFavorites();
        this.props.updateFavorites(oldFavorites);
        if (this.props.firstTime) {  
            this.props.firstLoad();
        }
        
    }



    addToFavoritesHandler = () => {
        if (!existsInFavorites(this.props.current, this.props.favorites)) {  
            this.props.addToFavorites();
        }
        else {
            this.props.removeFromFavorites(this.props.current.key);
        }
    }

    changeHandlerDelay = debounce(event => {
        this.props.changeHandler(event);
    },500);
    
    render() {
        if(this.props.loading){
            return(
                <Spinner animation="border" className="spinner"/>
            );
        }
        return (
            <div className={this.props.darkModeText}>

                <section className="search">
                    <Dropdown
                        className='icon search-dropdown-style'
                        icon='world'
                        button
                        floating
                        labeled
                        options={this.props.searchArr}
                        search
                        placeholder="Enter City"
                        onSearchChange={(event)=> {
                            event.persist();
                            this.changeHandlerDelay(event)}}
                        onChange={(event) => { this.props.submit(findKeyByName(event.currentTarget.textContent, this.props.searchArr), event.currentTarget.textContent.split(',')[0]) }}
                    />
                </section>
                <CSSTransitionGroup transitionName="cards"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>

                    <JumbotronContent
                        unit={this.props.unit}
                        current={this.props.current}
                        favorites={this.props.favorites}
                        click={this.addToFavoritesHandler}
                        darkModeText={this.props.darkModeText}
                    />

                </CSSTransitionGroup>


                <CustomModal
                    modalTitle={this.props.modalTitle}
                    modalText={this.props.modalText}
                    closeModal={this.props.closeModal}
                    show={this.props.show}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {current,firstTime, unit,darkModeText} = state.home; 
    const {modalTitle, modalText, show} = state.modal;
    const {searchArr} = state.search;
    const {favorites} = state.favorites;
    const {loading} = state.loading;
    return {
        favorites,
        current,
        firstTime,
        show,
        modalText,
        modalTitle,
        searchArr,
        unit,
        darkModeText,
        loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (val) => dispatch(searchActions.updateText(val)),
        updateSearch: (arr) => dispatch(searchActions.updateSearch(arr)),
        setCurrentCityDetails: (data, cityKey, cityName) => dispatch(homeActions.setCurrentCityDetails(data, cityKey, cityName)),
        addToFavorites: () => dispatch(favoriteActions.addToFavorites()),
        firstTimeFinished: () => dispatch(homeActions.firstTimeFinished()),
        clearText: () => dispatch(generalActions.clear()),
        removeFromFavorites: (key) => dispatch(favoriteActions.removeFromFavorites(key)),
        closeModal: () => dispatch(modalActions.closeModal()),
        openModal: (title, text) => dispatch(modalActions.openModal(title, text)),
        updateFavorites: (favorites) => dispatch(generalActions.updateFavorites(favorites)),
        submit: (cityKey, cityName) => dispatch(homeActions.submit(cityKey, cityName)),
        changeHandler: (event) => dispatch(searchActions.changeHandler(event)),
        firstLoad: () => dispatch(homeActions.firstLoad()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);