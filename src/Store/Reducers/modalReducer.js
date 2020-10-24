const initialState = {
    modalTitle: '', 
    modalText: '',
    show: false
}


const modalReducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'CLOSE_MODAL': 
            return {
                ...state,
                show: false
            }
        case 'OPEN_MODAL': 
            return {
                ...state,
                show: true,
                modalTitle: action.title,
                modalText: action.text
            }

        default:
            return state
    }
}

export default modalReducer;