import  mongoose  from "mongoose";

const Connection = async() => {
    try{

    const URL = `mongodb://Ashish:ASHISH41@inshort-data-shard-00-00.rl3b5.mongodb.net:27017,inshort-data-shard-00-01.rl3b5.mongodb.net:27017,inshort-data-shard-00-02.rl3b5.mongodb.net:27017/INSHORTS?ssl=true&replicaSet=atlas-ll6fro-shard-0&authSource=admin&retryWrites=true&w=majority`
   await mongoose.connect(URL,{useNewUrlParser:true})

        console.log("Database is connected");
    } catch(error)
    {
        console.log(`ERROR IN MONGODB WHILE CONNECTING  `,error)
    }
}

export default Connection;
