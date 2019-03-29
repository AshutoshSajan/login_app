import React from 'react';
import Fetch from "./UserAPI";

export default class Login extends React.Component {
  state = {
    username:"",
    password:""
  }

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    console.log(this.state, "user.js");
    console.log(this.props, "user.js")
    return (
      <form className="form">
        <fieldset className="account-info">
          <label>
            Username
            <input className="username" onChange={this.handleChange} type="text" name="username" autoComplete="jhon snow" />
          </label>
          <label>
            Password
            <input className="password" onChange={this.handleChange} type="password" name="password"/>
          </label>
        </fieldset>
        <fieldset className="account-action">
          <input className="submit-btn" type="submit" name="submit" value="Login" onClick={() => this.props.user(this.state)}/>
          <label className="signed-in">
            <input className="check-btn" type="checkbox" name="remember"/> Stay signed in
          </label>
        </fieldset>
      </form>
    );
  }
}