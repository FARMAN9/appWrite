import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class Authservices{
  client=new Client()
  account;
  constructor() {
    this.client.setEndpoint(conf.app)
  }

}

const authservices= new Authservices()
export default authservices;
