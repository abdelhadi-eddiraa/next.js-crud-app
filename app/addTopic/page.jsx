"use client"


import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  console.log(10)
  const [formValues,setFormValue]=useState({
     title:"",
     description:""
  })

  const navigate = useRouter();


  const HandleChange=(e)=>{
    const {name,value}=e.target
    setFormValue({...formValues,[name]:value})
  }

  const HandleSubmit=async(e)=>{
    e.preventDefault()

    if (!formValues.title || !formValues.description) {
      alert('the inputs fields are required');
      return;
    }

    try {
      const { title, description } = formValues;
     const res=await fetch('http://localhost:3000/api/topics',{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({title,description})
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
    <div className='max-w-3xl mx-auto flex flex-col pt-16'>
       <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white uppercase text-center">add topic</h1>
        <div>
            
<form onSubmit={HandleSubmit}>
  <div className="mb-6">
    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input type="text" id="title" defaultValue={formValues.title} onChange={HandleChange}  name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <input type="text" id="description" defaultValue={formValues.description} onChange={HandleChange} name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div className="flex items-start mb-6">
    
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Topic</button>
</form>

        </div>
    </div>
  )
}

export default AddTopic