import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class Authservices{
  clin
  constructor() {
    this.client = new Client();
    this.client.setEndpoint(conf.API_ENDPOINT);
    this.client.setProject(conf.PROJECT_ID);
  }

}

const authservices= new Authservices()
export default authservices;

