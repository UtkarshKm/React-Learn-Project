import React from "react";
import {useForm} from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PostForm(post) {
	const {register, handleSubmit, getValues, setValue, control, watch} = useForm(
		{
			defaultValues: {
				title: post?.Title || "",
                content: post?.Content || "",
                slug: post?.Slug || "",
                status: post?.Status || "active",
                
			},
		}
	);
    const navigate = useNavigate();
    const userData = useSelector((state)=>(state.auth.userData))

	return <div>PostForm</div>;
}
