import dotenv from 'dotenv'
dotenv.config()
const config = {

 connection : {
    host: process.env.DB_HOST
    , user: process.env.DB_USERNAME
    , password: process.env.DB_PASSWORD 
    , database: process.env.DB_DATABASE
  }
  , db : process.env.DB
  
  , env: process.env.NODE_ENV
    
    // App debug mode
  , debug: process.env.DEBUG ? process.env.DEBUG === 'true' : true
    
    // App secret for password encoding
  , appSecret: process.env.APP_SECRET

    // Server port
  , port: process.env.SERVER_PORT
    
    // JWT secret
} 

export default config