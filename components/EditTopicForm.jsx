"use client"

import { useState } from "react"
import { useRouter } from "next/router"

const EditTopicForm = ({id,title,description}) => {
  const [newForm,setNewForm]=useState({
    NewTitle:"",
    NewDes:""
  })

  const navigate= useRouter()

  const HandleChange=(e)=>{
    const {name,value}=e.target
    setNewForm({...newForm,[name]:value})
  }

  const HandleSubmit=async(e)=>{
    e.preventDefault()

    

    try {
      const { NewTitle, NewDes } = newForm;
     const res=await fetch(`http://localhost:3000/api/topics/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({NewTitle,NewDes})
    }
     )
     if(res.ok){
      navigate.push('/')
     }else{
      throw new Error('faild to create a topics')
     }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div  className='max-w-3xl mx-auto flex flex-col pt-16'>
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white uppercase text-center">Edit topic</h1>
     <div>
         
<form onSubmit={HandleSubmit}>
<div className="mb-6">
 <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
 <input onChange={HandleChange} defaultValue={title} type="text" name="NewTitle" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
</div>
<div className="mb-6">
 <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
 <input onChange={HandleChange} defaultValue={description} type="text" name="NewDes" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
</div>
<div className="flex items-start mb-6">
 
</div>
<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Topic</button>
</form>

     </div>
 </div>
  )
}

export default EditTopicForm