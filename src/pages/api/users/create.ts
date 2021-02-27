import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';
import url from 'url';

let cachedDb = null;

async function connectToDatabase(uri: string){
  if(cachedDb){
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const dbName = url.parse(uri).pathname.substring(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async function CreateUser(req: NowRequest, res: NowResponse){
  const { data } = req.body;

  console.log(data)

  const db = await connectToDatabase(process.env.MONOGODB_URL);

  const collection = db.collection('data')

  await collection.insertOne( data )

  return res.status(201).json({message: "User created"});
}