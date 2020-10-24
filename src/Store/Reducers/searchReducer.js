const initialState = {
    searchText: '', 
    searchArr: [], 
}


const searchReducer = (state = initialState, action) => { 
    switch (action.type) {
        
        case 'CLEAR': //search
            return {
                ...state,
                searchArr: [],
                searchText: ''
            }

        case 'UPDATE_TEXT': //search
            return {
                ...state,
                searchText: action.val
            }

        case 'UPDATE_SEARCH':  //search
            return {
                ...state,
                searchArr: action.arr
            }

        default:
            return state
    }
}

export default searchReducer;