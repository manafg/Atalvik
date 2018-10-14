import React , {Component} from 'react';
import {connect} from 'react-redux';
import {BTCUpdate, apiRequest} from '../../Actions/BTC-action';
import {Doughnut} from 'react-chartjs-2';



class Home extends Component {
    constructor(props){
        super(props);
        
    }

    componentDidMount() {
        this.props.onApiRequest()
    }

    render() {
        console.log(this.props)
        return (
              <div>
                  {this.props.BTC &&
                   <Doughnut data={this.props.BTC} />
                  }
             </div>
        )
    }
 }

 const mapStateToprops = state => ({
    BTC : state.BTC
  })
  
  const mapActionToprops ={
    onUpdateBTC : BTCUpdate,
    onApiRequest: apiRequest
  }

 export default connect(mapStateToprops, mapActionToprops)(Home);