import { combineReducers } from 'redux'
import { REGISTER } from './../actions/actions'

export default function safariZoneReducer( state = [], registerUser ){
    switch(registerUser.type){
        case REGISTER:
            return registerUser.userName;
        default:
            return state
    }
    return state;
}

export const allReducers = combineReducers({
    gameDetails: safariZoneReducer 
})