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

export default async function SearchUser(req: NowRequest, res: NowResponse){
  const { username } = req.body;

  try{
    const db = await connectToDatabase(process.env.MONOGODB_URL);
  
    const collection = db.collection('data')
  
    const userExists = await collection.findOne({ username })
    
    if(userExists){
      return res.status(200).json(userExists);
    }
  
    return res.status(400).json({ error : "user does not exist"});
  }catch(err){
    return res.status(400).json({
      message: err.message || "Unexpected error."
    })
  }
}
