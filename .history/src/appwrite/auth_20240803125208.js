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
        this.login({email,password})
      }
      else{
        return response;
      }
    }
    catch (error){
      throw error;

    }
  }


  async login({email,password}){
    try{
      const response = await this.account.createEmailPasswordSession(email, password);
      if (response)
      {
        console.log("User logged in successfully");
        return response;
      }
      else{

        return response;
      }
    }
    catch (error){
      throw error;

  }
}


async getCurrentUser(){
  try{
    
     return await this.account('account.getCurrent')
  }
  catch (error){
    throw error;
 }
}


}

const authservices= new Authservices()
export default authservices;

