const routes = require('express').Router();
const {show, insertContact, deleteContact} = require('./controller');


routes.get('/', show);
routes.post('/', insertContact);
routes.get('/delete/:id', deleteContact);


module.exports = routes;