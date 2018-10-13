import React, { Component } from 'react';
import "./Error.css";

class Error extends Component {
 constructor(props) {
     super(props)
 }

render() {
    return (
    	<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Oops! This Page Could Not Be Found</h2>
			<p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
			<a href="/">Go To Homepage</a>
		</div>
	</div>
    )
}


} 

export default Error;