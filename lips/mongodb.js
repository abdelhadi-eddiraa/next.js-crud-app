import mongoose from "mongoose";

const ConnectMongodb=async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL)
           console.log('DB Connected Success')
        
    } catch (error) {
        console.log(error)
    }

}

export default ConnectMongodb