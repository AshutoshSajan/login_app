import React from 'react';

export default function Header(props){
	// console.log(props)
	return(
		<header className="header">
			<h1>Kalon</h1>
			<div className="logout-sec">
				<img src={""}  alt="user_avatar" />
				<button className="logout-btn" onClick={props.handleReset}>Logout</button>
			</div>
		</header>
	)
}