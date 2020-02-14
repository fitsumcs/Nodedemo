const express = require ('express');

const path = require('path');

const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'mustache');
app.engine('mustache', require('hogan-middleware').__express);


//rendring some text 
app.get('/', (req, res, next)=>{

    res.send("Hello world ");
});

//rendiring json 
app.get('/json', (req, res, next)=>{

    const data = {
       
        greeting : "Hellow Man this is json !!!"

    };
    
    res.json(data);
});

//rendring html 

app.get('/home', (req, res, next)=>{

    res.render('home',null);
});

app.listen(3000);

console.log("The server is runnning in port 3000 . ....enjoy !!!")