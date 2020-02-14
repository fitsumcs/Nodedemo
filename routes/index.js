const express = require('express');
const router = express.Router();


router.get('/', (req, res, next)=>{

    res.send("Hello world adsadd ");
});
//rendiring json 
router.get('/json', (req, res, next)=>{

    const data = {
       
        greeting : "Hellow Man this is json !!!"

    };
    
    res.json(data);
});

//rendring html 

router.get('/home', (req, res, next)=>{

    res.render('home',null);
}); 


module.exports = router ; 