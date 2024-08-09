const Datas=require('../Model/addSchema')


exports.addDatas=async(req,res)=>{
  const {title,description,status}=req.body
  try{
    const newdatas=new Datas({
        title,description,status
    })
    await newdatas.save()
    res.status(200).json(newdatas)
  }
  catch(err){
res.status(401).json("Error" + err)
  }
}

exports.getAllData=async(req,res)=>{
  try{
    const allDatas=await Datas.find()
    res.status(200).json(allDatas)
  }
  catch(err){
    res.status(401).json(err)
  }
}

exports.deleteData=async(req,res)=>{

  const {id}=req.params
  try{
    const removeData=await Datas.findByIdAndDelete({_id:id})
    res.status(200).json(removeData)
  }
  catch(err){
    res.status(406).json(err)
  }
}

exports.updateData=async(req,res)=>{
  const {id}=req.params
  const {title,description,status}=req.body

  try{
    const editData=await Datas.findByIdAndUpdate({_id:id},{
      title,description,status},{new:true})

      await editData.save()
      res.status(200).json(editData)
  }
  catch(err){
    res.status(401).json(err)
  }
}