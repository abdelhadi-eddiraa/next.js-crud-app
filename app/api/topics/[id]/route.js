import ConnectMongodb from "@/lips/mongodb"
import { NextResponse } from "next/server"
import Topic from "@/models/topic"

export async function PUT(request,{params}){
    const {id}= params
    const{NewTitle:title,NewDes:description}= await request.json()
    await ConnectMongodb()
    await Topic.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({message:'Topic Updated'},{status:201})
 }



 export async function GET(request,{params}){
    const {id}= params
        await ConnectMongodb()
       const data= await Topic.findOne({_id:id})
       if (!data) {
        return NextResponse.json({ message: 'Topic not found' }, { status: 404 });
      }
      
    return NextResponse.json({ data }, { status: 200 });

 }