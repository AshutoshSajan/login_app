var user = {
	username: "jhon",
	password: "1234",
	avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/AvatarCover.JPG/220px-AvatarCover.JPG"
}

export default function handleLogin (username, password) {
	return new Promise((res, rej) => {
		console.log("done");
		if(username == "Jack" && password == "1234"){
			console.log("done");
			return res(user)
		}else {
			rej("User does not exists!");	
		}
	})
}