import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class Authservices{
  client=new Client()
  account;
  constructor() {
    this.client
    this.client.setEndpoint(conf.API_ENDPOINT);
    this.client.setProject(conf.PROJECT_ID);
  }

}

const authservices= new Authservices()
export default authservices;

