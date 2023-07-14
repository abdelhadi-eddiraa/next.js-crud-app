

import RemoveBtn from "./RemoveBtn"
import Link from "next/link"
import axios from "axios"

const getTopics=async()=>{
  try {
    const responce=await fetch('http://localhost:3000/api/topics',{
      cache:'no-store'
    })
    if (!responce.ok) {
      throw new Error('faild to featch data')
    }
   return responce.json()
    
  } catch (error) {
    console.log(error)
  }
}

const TopicList = async() => {
  const {topics} = await getTopics()
  console.log("🚀 ~ file: TopicList.jsx:24 ~ TopicList ~ getTopics:", getTopics)
  console.log(topics)

  return (
   
   <div className="space-y-2">
      {topics.map((t,idx)=>(
<div class="p-4 border border-gray-300 rounded-lg">
             <h2 class="text-xl font-bold mb-2">{t.title}</h2>
             <p class="text-gray-600 mb-4">{t.description}</p>
             <div class="flex justify-end">
                  <RemoveBtn id={t._id}/>
                  <Link href={`/editTopic/${t._id}`} class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</Link>

            </div>
         </div>
      ))}
         
   
        

    </div>
  )
}

export default TopicList



