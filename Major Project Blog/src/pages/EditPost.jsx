import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm";

const EditPost = () => {
	const [post, setPost] = useState(null);
	const {slug} = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		// fetch post by slug
		if (slug) {
			appwriteService.getPost(slug).then((post) => {
				if (post) {
					setPost(post);
				} else {
					navigate("/");
				}
			});
		}
	}, [slug, navigate]);
	return post ? (
		<Container>
			<PostForm post={post} />
		</Container>
	) : null;
};

export default EditPost;
