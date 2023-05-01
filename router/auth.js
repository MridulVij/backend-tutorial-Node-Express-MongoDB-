const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World from the server - router js")
});


// for taking input data from user in server and also in database
router.post('/register', (req, res)=>{

    const { name, email, phone, work, password, cpassword } = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "Please Fill Complete Details"});
    }
   // else console.log(name);
    // //res.json({});

    User.findOne({email: email})
    .then((userExist) => {
        if(userExist){
            return res.status(422).json({ error: "Email Already Exist!"});
        }
        const user = new User({name, email, work, password, cpassword});
        //
    })
});

// we can define routes here in which we can get api endpoints and working of Particular endpoint in it.


module.exports = router;