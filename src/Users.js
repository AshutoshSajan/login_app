import React from 'react';
import Header from './Header'

export default class Users extends React.Component {
  state = {
    user: "",
  }

  render() {
    console.log(this.props, "Users.js")
    return (
      <div >
      	<Header handleReset={this.props.handleReset} state={this.state}/>
        <figure className="user-info">
          <img src="" alt="user_avatar"/>
          <figcaption>{""}</figcaption>
        </figure>
      </div>
    );
  }
}