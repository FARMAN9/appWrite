import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class Authservices{
  client=new Client()
  account;
  constructor() {
    this.client
    .setEndpoint(conf.APPWRITE_URL)
    .setProject(conf.APPWRITE_PROJECT_ID)
    this.account = new Account(this.client)
  }
  async register({email, password, name}) {
    try{

    }
    catch (error){

    }
  }

}

const authservices= new Authservices()
export default authservices;

