const Contact = require('./Contact');
const controller = {};

controller.show = (req, res) => {
    Contact.find().then(contacts => {
        res.render('index', {contacts})
    }).catch(err => {
        console.log(err);
        res.json({message: 'error found'});
    })
}

controller.insertContact = (req, res) => {
    const {name, phone, email, id} = req.body;
    if(id)//update
    {
        Contact.findOneAndUpdate(
            {_id: id},
            {$set: {name, phone, email}}
        ).then(contact => {
            Contact.find().then(contacts => {
                res.render('index', {contacts})
            }).catch(err => {
                console.log(err);
                res.json({message: 'error found'});
            })
        }).catch(err => {
            console.log(err);
            res.json({message: 'error found'});
        })
    }
    else//create new
    {
        let contact = new Contact({name, phone, email});
        contact.save().then(contact => {
            Contact.find().then(contacts => {
                res.render('index', {contacts})
            }).catch(err => {
                console.log(err);
                res.json({message: 'error found'});
            })
        }).catch(err => {
            console.log(err);
            res.json({message: 'error found'});
        })
    }
}

controller.deleteContact = (req, res) => {
    const {id} = req.params;
    Contact.findOneAndDelete({_id: id}).then(contact=>{
        Contact.find().then(contacts => {
            res.render('index', {contacts})
        }).catch(err => {
            console.log(err);
            res.json({message: 'error found'});
        }).catch(err=> {
            console.log(err);
            res.json({message: 'error found'});
        })
    })
}

module.exports = controller;