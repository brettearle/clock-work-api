import { MongoClient, ObjectId } from 'mongodb'
import env from 'dotenv'
env.config()

const url = process.env.DB_URI
let mongodb;

function connectDB(){
    MongoClient.connect(url, (err, client)=>{
        if (err) throw err
        mongodb = client.db('clock-work-gates')
        console.log("connected to DB")
    })
}

function getDB(){
    return mongodb
}

function MongoObjectID(id){
    return ObjectId(id)
}

export {
    connectDB,
    getDB,
    MongoObjectID
}