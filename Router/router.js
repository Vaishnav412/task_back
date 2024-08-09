const express=require('express')

const usercontroller=require('../Controller/Usercontroller')

const addcontroller=require('../Controller/addController')


const router=new express.Router()


router.post('/signup',usercontroller.signupcontroller)

router.post('/',usercontroller.logincontroller)

router.post('/add',addcontroller.addDatas)

router.get('/getdata',addcontroller.getAllData)

router.delete('/delete/:id',addcontroller.deleteData)

router.put('/edit/:id',addcontroller.updateData)


module.exports=router