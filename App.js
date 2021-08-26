const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


app.set('view engine', 'ejs');
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/contacts', routes)



app.get('/', (req, res) => {
    res.render('home');
})
app.get('*', (req, res) => {
    res.render('error')
})


const port = process.env.PORT || 8080;
mongoose.connect('mongodb://127.0.0.1:27017/contactDB3', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
        app.listen(port, ()=>{
            console.log('listening on port' + port);
        });
}).catch(err =>{
    console.log(err);
})