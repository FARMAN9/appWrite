const conf={
  APPWRITE_URL: String(import.meta.env.VITE_APPWRITE_URL),
  APPWRITE_PROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  APPWRITE_DATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  APPWRITE_COLLECTION_ID: String(import.meta.env.) ,
  APPWRITE_BUCKET_ID:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  app:String(import.meta.env.VITE_SOME_KEY)

}

export default conf;