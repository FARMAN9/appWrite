import conf from "../conf/conf";
import { Client, Account, ID, Databases, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_ENDPOINT)
      .setProject(conf.APPWRITE_PROJECT_ID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        slug, //id
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.error(error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.error(error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        slug
      );
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  async getPostsById(slug) {
    try {
      return await this.databases.getDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        slug
      );
    } catch (error) {
      console.error(error);
    }
  }
  async getPosts(Queries = [Query.equal("status", "active")]) {
    //one of the important
    try {
      return await this.databases.listDocuments(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        Queries
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  // file upload

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.APPWRITE_BUCKET_ID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  async deleteFile(id){
    try {
      await this.bucket.deleteFile(conf.APPWRITE_BUCKET_ID, id);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

const service = new Service();

export default service;
