import React from 'react';
import Header from './Header'

export default class Users extends React.Component {
  state = {
    user: "",
  }

  render() {
    return (
      <div className="App">
      	<Header state={this.state}/>
        <img src="" alt="User_avatar" />
        <p>{""}</p>
      </div>
    );
  }
}