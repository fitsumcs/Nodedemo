const express = require ('express');
const path = require('path');
const hogan = require('hogan-middleware')

const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hogan.__express);

//setting static assests 
app.use(express.static(path.join(__dirname,'public')));

// adding new routes in orgainzized manner 
const indexrouter = require('./routes/index');
app.use('/', indexrouter);
const qrouter = require('./routes/query');
app.use('/query', qrouter);

app.listen(3000);

console.log("The server is runnning in port 3000 . ....enjoy !!!")