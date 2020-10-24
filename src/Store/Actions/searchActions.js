import { actionTypes } from '../actionTypes'
import axios from 'axios'
import { API_PATH } from '../../Constants/const'
import {openModal} from './modalActions'
const updateText = (val) => {
    return {
        type: actionTypes.UPDATE_TEXT,
        val
    }
}

const updateSearch = (arr) => {
    return {
        type: actionTypes.UPDATE_SEARCH,
        arr
    }
}

const changeHandler = (event) => async dispatch => {
    try{
        dispatch(updateText(event.target.value));
        const response =  await axios.get('locations/v1/cities/autocomplete' + API_PATH + '&q=' + event.target.value)    
        let arr = [];
        for (let i = 0; i < response.data.length; i++) {
            arr[i] = {
                key: response.data[i].Key,
                text: response.data[i].LocalizedName + ',' + response.data[i].AdministrativeArea.LocalizedName + ',' + response.data[i].Country.ID,
                value: response.data[i].LocalizedName + ',' + response.data[i].AdministrativeArea.LocalizedName + ',' + response.data[i].Country.ID,
    
            }
        }
        dispatch(updateSearch(arr));
    }
    catch(error){
        dispatch(openModal('Error', error.toString()));
    }
}

export {
    updateText,
    updateSearch,
    changeHandler
}

