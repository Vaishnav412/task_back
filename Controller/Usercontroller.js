const users = require('../Model/userSchema')
const jwt = require('jsonwebtoken')
const jwtsecret = process.env.JWTSECRET

// register

exports.signupcontroller = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const userDetails = await users.findOne({ email })
        if (userDetails) {
            res.status(406).json('user already exists')
            alert('User already exists')
        } else {
            const newUser = new users({
                username, email, password
            })

            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}

// login

exports.logincontroller = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUser = await users.findOne({ email, password })
        if(existingUser){
            const token= jwt.sign({userId:existingUser._id},jwtsecret)
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(406).json("Incorrect Email or Password")
        }
    }
    catch (err) {
      res.status(401).json(err)
      
    }
}
