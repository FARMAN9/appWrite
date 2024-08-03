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
  async deletePost(<div class="btn-group dropup">
    <button type="button" class="btn btn-secondary">Split dropup</button>
    <button
      type="button"
      class="btn btn-secondary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item disabled" href="#">Disabled action</a>
      <h6 class="dropdown-header">Section header</h6>
      <a class="dropdown-item" href="#">Action</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">After divider action</a>
    </div>
  </div>
  ){

  } 
}

const service = new Service();

export default service;
