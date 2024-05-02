import React, {useEffect, useState} from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

const Home = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		appwriteService.getPosts().then((posts) =>{
		
		//checking for null
		if (posts) {
			setPosts(posts.documents);
		}}
		);
	}, []);
	console.log(posts.length);

	if (posts.length === 0) {
		return (
			<div className="w-full py-8 mt-8 text-center">
				<Container>
					<div className="flex flex-wrap">
						<div className="p-2 w-full">
							<h1 className="text-2xl font-bold hover:text-gray-500">
								Login to read Post
							</h1>
						</div>
					</div>
				</Container>
				
			</div>
		);
	} else {
		return (
			<div className="w-full py-8">
				<Container>
					<div className="flex flex-wrap">
						{posts.map((post) => (
							<div
								className="p-2 w-1/4"
								key={post.$id}
							>
								<PostCard post={post} />
								{/* // Another way to pass props to PostCard component is to use spread operator
                                // <PostCard {...post} /> */}
							</div>
						))}
					</div>
				</Container>
			</div>
		);
	}
};

export default Home;

// import  {useEffect, useState} from 'react'
// import Container from '../components/container/Container';
// import PostCard from '../components/PostCard';
// import appwriteService from '../appwrite/config';

// function Home() {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])
  
//     if (posts.length === 0) {
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }
//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default Home