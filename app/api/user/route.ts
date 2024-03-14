import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client=new PrismaClient();
export async function POST(req:NextRequest){
    //extract the body
    const body=await req.json();
    //store the body in database
    
    await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    return Response.json({
        message:"You are signed in"
    })
}

export async function GET() {
    const user = await client.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}