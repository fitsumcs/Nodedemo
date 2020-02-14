const express = require('express');
const router = express.Router();



//rendiring json 
router.get('/:qu', (req, res, next)=>{
  
    //grab data from the url
   const a = req.params.qu
   const b = req.query.name   // ?name = "whatever name ,,,,,"
   const c = req.query.oc 
    const data = {
       
        querty : a,
        queryparameter : b ,
        sdsad : c

    };
    
    res.json(data);
});




module.exports = router ; 