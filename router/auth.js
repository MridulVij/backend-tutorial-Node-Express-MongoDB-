const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World from the server - router js")
});


// for taking input data from user in server and also in database
router.post('/register', (req, res)=>{
    console.log(req.body);
    res.json({message:req.body});
})

module.exports = router;