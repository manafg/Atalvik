import {BTC_UPDATE} from '../Actions/BTC-action';

export function BTCreducer (state = '', action) {
    switch (action.type) {
        case BTC_UPDATE :
         return action.payload.BTC
         default :
         return state;
    }
}