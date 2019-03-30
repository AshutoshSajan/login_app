import React, { Component } from 'react';
import './App.css';
import Users from "./Users";
import Login from "./Login";

export default class App extends Component {
  state = {
    user: null
  }

  update = (user) => {
    console.log(user, "update");
    this.setState({user})
  }

  handleReset = () => {
    this.setState({user: null})
  }

  render() {
    return (
      <div className="App">
        {
          this.state.user ? <Users handleReset={this.handleReset} state={this.state}/> : <Login update={this.update}/>
        }
      </div>
    );
  }
}
