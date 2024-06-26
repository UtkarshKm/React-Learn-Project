import React, {useState} from "react";
import authService from "../appwrite/auth";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../store/authSlice";
import Button from "./Btn";
import Input from "./Input";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import Logo from "./Logo";

const Signup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {register, handleSubmit} = useForm();
	const [ error , setError] = useState("");

	const createAccount = async (data) => {
		setError("");
		console.log("inside createAccount");
		try {
			const session = await authService.createAccount(data);
			console.log("hitted createAccount");
			if (session) {

				console.log("account created");
				const userData = await authService.getCurrentUser();
				if (userData) {
					console.log("inside userData");
					dispatch(login(userData));
					navigate("/");
				}
			}
		} catch (error) {
			setError(error.message);
			console.log(error);
		}
	};

	return (
		<div className="flex items-center justify-center">
			<div
				className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
			>
				<div className="mb-2 flex justify-center">
					<span className="inline-block w-full max-w-[100px]">
						<Logo width="100%" />
					</span>
				</div>
				<h2 className="text-center text-2xl font-bold leading-tight">
					Sign up to create account
				</h2>
				<p className="mt-2 text-center text-base text-black/60">
					Already have an account?&nbsp;
					<Link
						to="/login"
						className="font-medium text-primary transition-all duration-200 hover:underline"
					>
						Sign In
					</Link>
					{error && <p className="text-red-600 mt-8 text-center">{error}</p>}
					<form onSubmit={handleSubmit(createAccount)}>
						<div className=" space-y-5"></div>
						{/* 3 Input components for name , password and email */}
						<Input
							type="text"
							label="Name"
							{...register("name", {required: true})}
						/>
						<Input
							label="Email"
							type="email"
							placeholder="Enter your email"
							{...register("email", {
								required: true,
								validate: {
									matchPatern: (value) =>
										/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
										"Email address must be a valid address",
								},
							})}
						/>
						<Input
							type="password"
							label="Password"
							{...register("password", {required: true})}
						/>
						{/* Button component */}
						<Button
							type="submit"
							className="w-full"
						>
							Sign Up
						</Button>
					</form>
				</p>
			</div>
		</div>
	);
};

export default Signup;
