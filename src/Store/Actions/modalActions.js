import { actionTypes } from '../actionTypes'

const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL,
    }
}

const openModal = (title, text) => {
    return {
        type: actionTypes.OPEN_MODAL,
        title,
        text
    }
}

export{
    closeModal,
    openModal
}