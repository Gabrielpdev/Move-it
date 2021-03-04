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

export default async (req: NowRequest, res: NowResponse) => {
  try{
    const db = await connectToDatabase(process.env.MONOGODB_URL);
  
    const collection = db.collection('data')
  
    const myCursor = collection.find().sort( { level: -1 } );

    let users = []
    await myCursor.forEach((item) => {
      users = [...users, item]
    });

    if(users){
      return res.status(200).json(users);
    }
    return res.status(204).json({ message : "user does not exist"});
  
  }catch(err){
    return res.status(400).json({
      message: err.message || "Unexpected error."
    })
  }
}
