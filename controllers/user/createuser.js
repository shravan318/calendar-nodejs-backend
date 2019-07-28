const User = require('../../model/user')
const bcrypt = require('bcrypt')
const saltRounds = 14;


module.exports = (req, res) => {
    User.findOne(({email: req.body.email}))
    .then(userData=>{
        if(userData){
			return Promise.reject("Email already taken")     
        }else{
			return bcrypt.hash(req.body.password,saltRounds)
        }
	})
	.then(hash  => {
		req.body.password = hash
		return User.create(req.body)
	})
	.then (savedObj => {
		console.log(savedObj)
		res.send({
			savedObj
		})
	})
    .catch(err => {
		  console.log("err",err)
		res.status(400).send({
			  err
		  })
       })
}

