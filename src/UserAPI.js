var users = {
	username: "jack",
	password: "123",
	avatar: ""
}

export default function Fetch (users) {
	return new Promise((res, rej) => {
		if(users.username === "Jack" && users.password === "123"){
			return res(users).then(v => console.log(v))
		// }else {
		// 	return rej(err){
		// 		console.log(err)
		// 	}
		}
	})
}