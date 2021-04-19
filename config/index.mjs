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
  , jwtSecret: process.env.JWT_SECRET
  , mailClientID: process.env.MAILING_SERVICE_CLIENT_ID
  , mailClientSecret: process.env.MAILING_SERVICE_CLIENT_SECRET
  , mailRefreshToken: process.env.MAILING_SERVICE_REFRESH_TOKEN
  , mailSender: process.env.MAILING_SENDER_EMAIL
  /*, host: process.env.DB_HOST
  , user: process.env.DB_USERNAME
  , password: process.env.DB_PASSWORD */
  
    // JWT expire time in seconds
  , pwdResetLink: `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.SERVER_PORT}/api/v1/resetpwd?accesstoken=`
  , jwtExpire: parseInt(process.env.JWT_EXPIRE, 10) || 3600
  , hostLink: `${process.env.PROTOCOL}://${process.env.HOST}`
  , appDir: process.cwd()

  // Python locations
  , python_interpreter: process.env.PYTHON_INTERPRETER
  , python_script: process.env.PYTHON_SCRIPT
} 

export default config