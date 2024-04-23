import {Outlet} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import authService from "./appwrite/auth";
import {login, logout} from "./store/authSlice";

function App() {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	useEffect(() => {
		authService
			.getCurrentUser()
			.then((data) => {
				if (data) {
					dispatch(login({userData}));
				} else {
					logout();
				}
			})
			.catch((error) => {
				console.log("App :: getCurrentUser", error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	//conditional rendering

	//1. if (loading) {
	//	return <div>Loading...</div>;
	//}

	//2.
	return !loading ? (
		<div className="min-h-screen flex flex-wrap content-between bg-gray-400">
			<div className=" w-full block">
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</div>
	) : (
		<h1>Loading </h1>
	);
}

export default App;
