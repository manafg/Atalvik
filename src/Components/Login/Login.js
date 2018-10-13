import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import {connect} from 'react-redux';
import {updateUser} from '../../Actions/user-action';

 class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  onUpdateUser = e => {
    e.preventDefault();
    this.props.onUpdateUser(this.state.email)
  }

  render() {
    console.log(this.props)
    return (
      <div className="Login">
        <form onSubmit={this.onUpdateUser}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
const mapStateToprops = state => ({
  user : state.user
})

const mapActionToprops ={
  onUpdateUser : updateUser,
}


export default connect(mapStateToprops, mapActionToprops)(Login)