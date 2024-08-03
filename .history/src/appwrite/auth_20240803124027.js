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
      const response = await this.account.create(ID.unique(),email, password, name);
      if (response)
      {
        console.log("User registered successfully");
        return response;
      }
      else{
        throw new Error("Failed to register user");
      }
    }
    catch (error){
      throw error;

    }
  }

}

const authservices= new Authservices()
export default authservices;
