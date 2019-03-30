import React from 'react';
import handleLogin from "./api"

export default class Login extends React.Component {
  state = {
    username:"",
    password:""
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(this.state.username, this.state.password).
    then(user => this.props.update(user))
    .catch(err => this.setState({err}));
  }

  render() {
    // console.log(this.props)
    // console.log(this.state);
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <fieldset className="account-info">
          <label>
            Username
            <input value={this.state.username} className="username" onChange={this.handleChange} type="text" name="username" />
          </label>
          <label>
            Password
            <input value={this.state.password} className="password" onChange={this.handleChange} type="password" name="password" />
          </label>
        </fieldset>
        <label className="error-msg">{this.state.err}</label>
        <fieldset className="account-action">
          <input className="submit-btn" type="submit" name="submit" />
          <label className="signed-in">
            <input className="check-btn" type="checkbox" name="remember"/> Stay signed in
          </label>
        </fieldset>
      </form>
    );
  }
}