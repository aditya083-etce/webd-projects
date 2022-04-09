const User = require('../models/users')
exports.signUp = (req,res) => {
    let newUser = new User(req.body);

    newUser.save()
        .then((doc)=>{
            res.status(200).send({msg: "User created successfully......"})
        })
        .catch((err)=>{
            res.status(200).send({msg: "User creation failed......", errMsg: err.message})
        })

}