
import EditTopicForm from "@/components/EditTopicForm"

const GetTopicById=async(id)=>{
  try{
     const res=await fetch(`http://localhost:3000/api/topics/${id}`,{
    cache:"no-store"}
    )

    if (!res.ok) {
      throw new Error('error')
    }
    return res.json()
  }catch(err){
    console.log(err)
  }
 
  }


const EditTopic = async({params}) => {
  const {id}=params
  console.log('id:',id)
  const {data} =await GetTopicById(id);
  const {title,description}=data
  return (
    <div>
        <EditTopicForm id={id} title={title} description={description}/>
    </div>
  )
}

export default EditTopic