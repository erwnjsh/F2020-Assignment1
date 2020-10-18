let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//CONNECT TO CONTACT MODEL
let Contact = require('../models/contact');

/* GET ROUTE FOR THE CONTACTS LIST PAGE - READ OPERATION */
router.get('/', (req, res, next) => {
    Contact.find((err, ContactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ContactList);
            res.render('list', {title: 'Contact List', ContactList: ContactList});
        }
    });
});

module.exports = router;