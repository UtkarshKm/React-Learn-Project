import React from "react";
import {useContext} from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
	const {user} = useContext(UserContext);
    if (!user) {          //conditional rendering
        return <h2>Not Logged In</h2>
    }
    else {
        return (
            <div>
                <h2>Profile</h2>
                <h3>Username: {user.username}</h3>
                <h3>Password: {user.password}</h3>
            </div>
        );
    }
};

export default Profile;
