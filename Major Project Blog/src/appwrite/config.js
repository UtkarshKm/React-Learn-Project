import conf from "../conf/conf";
import {Databases, ID, Storage, Query, Client} from "appwrite";

export class Service {
	client = new Client();
	databases;
	bucket;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);

		this.bucket = new Storage(this.client);
		this.databases = new Databases(this.client);
	}

	// database service

	async createPost(
		{Title, Content, Image, Status, UserId, slug} // same name as the attribute in collection (Article) , my names start with Capital letter
	) {
		try {
			const document = await this.databases.createDocument(
				conf.appwriteDataBaseId,
				conf.appwriteCollectionId,
				slug,
				{
					Title,
					Content,
					Image,
					Status,
					UserId,
				}
			);
			return document;
		} catch (error) {
			console.log("AppWrite service :: createPost", error);
		}
	}

	async updatePost(slug, {Title, Content, Image, Status}) {
		try {
			return await this.databases.updateDocument(
				conf.appwriteDataBaseId,
				conf.appwriteCollectionId,
				slug,
				{
					Title,
					Content,
					Image,
					Status,
				}
			);
		} catch (error) {
			console.log("AppWrite service :: updatePost", error);
		}
	}

	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				conf.appwriteDataBaseId,
				conf.appwriteCollectionId,
				slug
			);
			return true;
		} catch (error) {
			console.log("AppWrite service :: deletePost", error);
		}
		return false;
	}

	async getPost(slug) {
		try {
			return await this.databases.getDocument(
				conf.appwriteDataBaseId,
				conf.appwriteCollectionId,
				slug
			);
		} catch (error) {
			console.log("AppWrite service :: getPost", error);
		}
		return null;
	}

	async getPosts(queries = [Query.equal("Status", "Active")]) {
		try {
			return await this.databases.listDocuments(
				conf.appwriteDataBaseId,
				conf.appwriteCollectionId,
				queries
			);
		} catch (error) {
			console.log("AppWrite service :: getPosts", error);
		}
		return null;
	}

	//file upload Service

	async uploadFile(file) {
		try {
			return await this.bucket.createFile(
				conf.appwriteBucketId,
				ID.unique(),
				file
			);
		} catch (error) {
			console.log("AppWrite service :: uploadFile", error);
		}
		return false;
	}

	async deleteFile(fileId) {
		try {
			await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
			return true;
		} catch (error) {
			console.log("AppWrite service :: deleteFile", error);
		}
		return false;
	}

	getFilePreview(fileId) {
		this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
	}
}
const service = new Service();
export default service;
