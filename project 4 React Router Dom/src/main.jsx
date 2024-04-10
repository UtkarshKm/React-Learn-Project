import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

import MainLayout from "./pages/mainlayout.jsx";
import {AboutUs, Contact, Home} from "./components/";
import User from "./components/User.jsx";
import Github from "./components/Github.jsx";
// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <MainLayout />,
// 		children: [
// 			{
// 				path: "",
// 				element: <Home />,
// 			},
// 			{
// 				path: "about",
// 				element: <AboutUs />,
// 			},
// 			{
// 				path: "contact-us",
// 				element: <Contact />,
// 			}
// 		],
// 	},
// ]);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<MainLayout />}
		>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="about"
				element={<AboutUs />}
			/>
			<Route
				path="contact-us"
      
				element={<Contact />}
			/>
      <Route path =  "github"  element = {<Github/>} />
			<Route path="user/:userId"
      element = {<User/>} />
		</Route>
	)
);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
