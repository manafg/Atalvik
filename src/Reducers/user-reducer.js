import {UPDATE_USER} from '../Actions/user-action';

export function userReducer (state = '', action) {
    switch (action.type) {
        case UPDATE_USER :
         return action.payload
         default :
         return state;
    }
}