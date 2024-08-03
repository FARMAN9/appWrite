import conf from "../conf/conf";
import { Client, Account, ID,Databases,Query } from "appwrite";



export class Service{
  client=new Client()
  databases;
  bucket;
  constructor(){
    this.client.setEndpoint(conf.APPWRITE_ENDPOINT).setProject(conf.APPWRITE_PROJECT_ID)
    this.databases=new Databases(this.client)
    this.bucket=new Storage(this.client)
  }
  async 

}



const service= new Service()

export default service;