const mongoose=require("mongoose")
const connectToMongodb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(`connected to mongodb`)
        
    } catch (error) {
        console.log(`the error is ${error}`)
        
    }

}

module.exports={
    connectToMongodb,
}