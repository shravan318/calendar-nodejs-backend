const User = require('../../model/user')


module.exports = (req, res) => {
    User.findOne(({email: req.body.email}))
    .then(userData=>{
        if(userData){
			var x = "x"
            console.log("Email already taken",userData)            
        }else{
			// return User.create(req.body)
			return
        }
    })
    .then(savedData => {		
        console.log("savedData",x)
        res.send({
                savedData
            })
        })
    .catch(err => {
          console.log("err",err)
       })
}
