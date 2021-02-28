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

export default async function UpdateUser(req: NowRequest, res: NowResponse){
  const { username, data } = req.body;

  const db = await connectToDatabase(process.env.MONOGODB_URL);

  const collection = db.collection('data')
  
  const user = await collection.findOneAndUpdate(
    { username },
    { $set: data },
    { returnOriginal: false },
  );
  
  return res.status(200).json(user);
}