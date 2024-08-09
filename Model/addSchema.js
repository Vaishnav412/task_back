const mongoose=require('mongoose')

const addSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        require:true
    },
    status:{
        type:String,
        required:true
    }
})

const datas=mongoose.model("data",addSchema)
module.exports=datas