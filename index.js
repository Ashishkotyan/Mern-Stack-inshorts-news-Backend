
import  express  from "express";
import cors from 'cors';
import bodyParser from "body-parser";

//components
import Connection  from "./connection/db.js";
import Defaultdata from "./default.js";
import Route from './routes/route.js';


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json({extended: true}));
app.use('/', Route);


const PORT = 8000;
  


Connection();

app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ON PORT 8000")
})

Defaultdata();