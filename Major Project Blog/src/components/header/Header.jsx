import React from "react";
import Container from "../container/Container";
import Logo from "../Logo";
import LogoutBtn from "./LogoutBtn";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
	const authStatus = useSelector((state) => state.auth.status);
	const navigate = useNavigate();
	const navItems = [
		{name: "Home", path: "/", active: true},
		{name: "Login", path: "/login", active: !authStatus}, // true if not logged in
		{name: "Signup", path: "/signup", active: !authStatus}, // true if not logged in
		{name: "All Posts", path: "/all-posts", active: authStatus}, // true if logged in
		{name: "Add Post", path: "/add-post", active: authStatus}, // true if logged in
	];

	return (
		<header className=" py-3 shadow bg-gray-500">
			<Container>
				<nav className=" flex">
					<div className=" flex">
						<Link to={"/"}>
							<Logo width="70px" />
						</Link>
					</div>
					<ul className=" flex ml-auto">
						{navItems.map((item) =>
							item.active ? (
								<li key={item.name}>
									<button
										onClick={() => {
											navigate(item.path);
										}}
										className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
									>
										{item.name}
									</button>
								</li>
							) : null
						)}
						{authStatus && (
							<li>
								<LogoutBtn />
							</li>
						
						)}
					</ul>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
