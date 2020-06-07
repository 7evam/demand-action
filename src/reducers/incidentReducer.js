function incidentReducer(state = {}, action){
    switch(action.type){
        case "HYDRATE_INCIDENTS":
            return{
                ...state,
                incidents: action.payload
            }
        default:
            return state
    }
}

export default incidentReducer