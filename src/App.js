import React, { Component } from 'react';
import './App.css';
import Users from "./Users";
import Login from "./Login";

export default class App extends Component {
  state = {
    user:null
  }
  update = (user) => {
    if(user !==true){
      this.setState({user})
    }else return;
  }

  render() {
    console.log(this.state, "app.js")
    return (
      <div className="App">
        {
          this.state.user ? <Users state={this.state}/> : <Login user={this.update}/>
        }
      </div>
    );
  }
}
