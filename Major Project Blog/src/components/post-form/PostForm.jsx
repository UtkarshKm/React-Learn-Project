import React, {useCallback, useEffect} from "react";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import appwriteService from "../../appwrite/config";
import Input from "../Input";
import Select from "../Select";
import Button from "../Btn";

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
	const userData = useSelector((state) => state.auth.userData);

	const submit = async (data) => {
		if (post) {
			const file = data.image[0]
				? await appwriteService.uploadFile(data.image[0])
				: null;

			if (file) {
				await appwriteService.deleteFile(post.Image); // name of image in database

				const dbpost = await appwriteService.updatePost(post.$id, {
					...data,
					Image: file?.$id || undefined,
				});

				if (dbpost) {
					navigate(`/post/${dbpost.$id}`);
				}
			}
		} else {
			const file = data.image[0]
				? await appwriteService.uploadFile(data.image)
				: null;

			if (file) {
				const fileId = file.$id;
				data.Image = fileId;
				const dbpost = await appwriteService.createPost({
					...data,
					UserId: userData.$id,
				});

				if (dbpost) {
					navigate(`/post/${dbpost.$id}`);
				}
			}
		}
	};

	const slugTransform = useCallback((value) => {
		if (value && typeof value === "string")
			return value
				.trim()
				.toLowerCase()
				.replace(/^[a-zA-Z\d\s]+/g, "-")
				.replace(/\s/g, "-");
		return "";
	}, []);

	useEffect(() => {
		const subscription = watch((value, {name}) => {
			if (name === "title") {
				setValue(slug, slugTransform(value.title), {shouldValidate: true});
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [watch, slugTransform, setValue]);
	return (
		<form
			onSubmit={handleSubmit(submit)}
			className="flex flex-wrap"
		>
			<div className="w-2/3 px-2">
				<Input
					label="Title :"
					placeholder="Title"
					className="mb-4"
					{...register("title", {required: true})}
				/>
				<Input
					label="Slug :"
					placeholder="Slug"
					className="mb-4"
					{...register("slug", {required: true})}
					onInput={(e) => {
						setValue("slug", slugTransform(e.currentTarget.value), {
							shouldValidate: true,
						});
					}}
				/>
				<RTE
					label="Content :"
					name="content"
					control={control}
					defaultValue={getValues("content")}
				/>
			</div>
			<div className="w-1/3 px-2">
				<Input
					label="Image :"
					type="file"
					className="mb-4"
					accept="image/png, image/jpg, image/jpeg, image/gif"
					{...register("image", {required: !post})}
				/>
				{post && (
					<div className="w-full mb-4">
						<img
							src={appwriteService.getFilePreview(post.Image)}
							alt={post.title}
							className="rounded-lg"
						/>
					</div>
				)}
				<Select
					options={["active", "inactive"]}
					label="Status"
					className="mb-4"
					{...register("status", {required: true})}
				/>
				<Button
					type="submit"
					bgColor={post ? "bg-green-500" : undefined}
					className="w-full"
				>
					{post ? "Update" : "Submit"}
				</Button>
			</div>
		</form>
	);
}
