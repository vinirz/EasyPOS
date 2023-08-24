import { NextResponse } from "next/server";
import {MongoClient} from 'mongodb'

const url:string = process.env.MONGODB_URI as string

export async function OPTIONS(request: Request) {
    const allowedOrigin = request.headers.get("origin");
    const response = new NextResponse(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin || "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
        "Access-Control-Max-Age": "86400",
      },
    });
  
    return response;
}

export async function POST(request: Request){
    const {key, cnpj} = await request.json()

    const client = new MongoClient(url);
    await client.connect();

    const db = client.db('licenses')

    const keys = await db.collection('keys').find({key: key, cnpj: cnpj}).toArray();

    client.close()

    if(keys.length > 0){
        return NextResponse.json({validated: true})
    }else{
        return NextResponse.json({validated: false})
    }

}