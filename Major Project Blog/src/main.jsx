import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {Provider} from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/Authlayout.jsx"
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import AllPost from "./pages/AllPost.jsx";

const router = createBrowserRouter([
{
	path: "/",
	element: <App />,	
	children:[
	{
		path: "/",
		element: <Home />,
	},
	{
		path : "/login",
		element: (
			<AuthLayout authentication={false}>
				<Login />
			</AuthLayout>
		)
	},
	{
		path : "/signup",
		element: (
			<AuthLayout authentication={false}>
				<SignUp />
			</AuthLayout>
		)
	},
	{
		path: "/add-post",
		element: (
			<AuthLayout authentication={true}>
				<AddPost />
			</AuthLayout>
		)
	},
	{
		path: "/edit-post/:slug",
		element: (
			<AuthLayout authentication={true}>
				<EditPost />
			</AuthLayout>
		)
	},
	{
		path: "/post/:slug",
		element: <Post />,
	},
	{
		path : "/all-posts",
		element:(
			<AuthLayout authentication>
				<AllPost/>
			</AuthLayout>
		)
	},

	// {
	// 	path: "/404",
	// 	element: <NotFound />,
	// },
	// {
	// 	path: "*",
	// 	element: <Navigate to="/404" />,
	// }
	]
}
]
)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>

		</Provider>
	</React.StrictMode>
);
