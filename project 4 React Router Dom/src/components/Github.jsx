import React, {useEffect, useState} from "react";

const Github = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://api.github.com/users/UtkarshKm")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data);
			});
	}, []);
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github info : 
            <div>
                Name : {data.name}
            </div>
            <img width={300} src={data.avatar_url} alt="profile image" />
        </div>
    );
};

export default Github;
