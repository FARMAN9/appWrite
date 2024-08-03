const conf={
  APPWRITE_URL: String(import.meta.env.APPWRITE_URL),
  APPWRITE_PROJECT_ID: String(import.meta.env.APPWRITE_PROJECT_ID),
  APPWRITE_API_KEY: String(import.meta.env.APPWRITE_API_KEY),
  APPWRITE_DATABASE_ID: String(import.meta.env.APPWRITE_DATABASE_ID),
  APPWRITE_COLLECTION_ID: 'your-region' // Optional: 'us', 'eu', 'asia'

}

export default conf;