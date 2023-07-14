"use client"
import { useRouter } from "next/navigation"
const RemoveBtn = ({id}) => {
  const navigate= useRouter()
  const DeleteTopic=async()=>{
    const confirmd=confirm('are you sure')
    if (confirmd) {
     const res= await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method:"DELETE",
     
      })
      if (res.ok) {
        navigate.refresh()
      }
      
    }
  }
  return (
    <div>
         <button onClick={DeleteTopic} class="px-4 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
    </div>
  )
}

export default RemoveBtn