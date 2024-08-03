import conf from "../conf/conf";
import { Client, Account, ID,Databases,Query } from "appwrite";



export class Service{
  client=new Client()
  databases;
  bucket;
  constructor(){
    this.client.setEndpoint(conf.APPWRITE_ENDPOINT)
    this.client.setProject(conf.APPWRITE_PROJECT_ID)
    this.databases=new Databases(this.client)
    this.bucket=new ID(this.client,conf.BUCKET_ID)
  }

}



const service= new Service()

export default service;