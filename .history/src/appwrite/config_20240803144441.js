import conf from "../conf/conf";
import { Client, Account, ID,Databases,Query } from "appwrite";



export class Service{
  client=new Client()
  databases;
  bucket;

}



const service= new Service()

export default service;