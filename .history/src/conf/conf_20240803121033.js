const conf={
  APPWRITE_URL: String(import.meta.env.),
  APPWRITE_PROJECT_ID: String(import.meta.env.),
  APPWRITE_DATABASE_ID: String(import.meta.env.APPWRITE_DATABASE_ID),
  APPWRITE_COLLECTION_ID: String(import.meta.env.APPWRITE_COLLECTION_ID) ,
  APPWRITE_BUCKET_ID:String(import.meta.env.APPWRITE_BUCKET_ID)

}

export default conf;