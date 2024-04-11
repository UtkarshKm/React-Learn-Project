import React from "react";
import {useContext} from "react";
import {useState} from "react";
import UserContext from "../context/UserContext";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext)
	const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username ,password})
    };
	return (
		<div >
			<h2>Login</h2>
			<input
            style={{margin:10}}
				type="text"
				placeholder="username"
				value={username}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<input
            style={{margin:10}}
				type="text"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button  style={{margin:10}}onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default Login;
