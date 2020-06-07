const INITIAL_STATE = {
    modalContent: null
}

function modalReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case "SHOW_MODAL":
            return {
                ...state,
                modalInfo: action.payload.modalInfo
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                modalInfo: null
            }
        default: 
            return state
    }
}

export default modalReducer