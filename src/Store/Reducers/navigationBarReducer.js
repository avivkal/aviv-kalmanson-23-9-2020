const initialState = {
    unit: 'C',
    darkmode: false,
    darkModeText: 'light'
}


const navigationBarReducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'TOGGLE_DARK_MODE': //navigation
            return{
                ...state,
                darkmode: !state.darkmode,
                darkModeText: state.darkModeText==='light' ? 'dark' : 'light'
            }
            // return Object.assign({}, state, {
            //     darkmode: !state.darkmode,
            //     darkModeText: state.darkModeText==='light' ? 'dark' : 'light'
            // });

        case 'TOGGLE': //navigation
            return {
                ...state,
                unit: action.unit,
            }


        default:
            return state
    }
}

export default navigationBarReducer;