const initialState = {}

export default function userinfo(state = initialState, action){
    switch(action.type){
        case 'login':
            return action.data
        case 'city':
            return action.data
        default:
            return state
    }
}