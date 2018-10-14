import axios from 'axios';
import { backgroundColor } from './color'

export const BTC_UPDATE = 'BTC:BTCUpdate';

export function BTCUpdate( newData ) {
    return ({
        type: BTC_UPDATE,
        payload: {
            BTC : newData
        }
    })   
}


export function apiRequest () {  
    return dispatch => {
        axios.get('https://api.cryptonator.com/api/full/btc-usd').
        then((res)=>{
            let latesData = ReduceData(res.data)
            dispatch(BTCUpdate(latesData))
        })
    }
}

function ReduceData(data) {
    let graph ={ 
            labels: [
        ],
        datasets: [{
            data:[],
            backgroundColor: backgroundColor
        }]
    }
    graph.labels = data.ticker.markets.map((data)=> data.market)
    graph.datasets[0].data = data.ticker.markets.map((data)=> data.volume)
    return graph;
    }