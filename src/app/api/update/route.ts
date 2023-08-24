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

export async function GET(){

    const client = new MongoClient(url);
    await client.connect();

    const db = client.db('updates')

    const updates = await db.collection('update').find().toArray();

    client.close()

    return NextResponse.json(updates[0])
}