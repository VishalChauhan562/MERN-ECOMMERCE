import app from "./app.js";
import dotenv from 'dotenv';
import { databaseConnect } from "./databaseConnect.js";

dotenv.config({path : './config/config.env'});

databaseConnect()

app.listen(process.env.PORT,()=>{
    console.log(`app is running at port ${process.env.PORT}`);
})