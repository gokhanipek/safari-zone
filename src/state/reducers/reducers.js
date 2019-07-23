import { combineReducers } from 'redux'
import { REGISTER } from './../actions/actions'

export default function safariZoneReducer( state = '', registerUserAction ){
    switch(registerUserAction.type){ 
        case REGISTER:
            return registerUserAction.payload.userName;
        default:
            return state
    }
}

export const allReducers = combineReducers({
    gameDetails: safariZoneReducer 
})