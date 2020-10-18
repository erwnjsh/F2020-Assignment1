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

/* GET ROUTE FOR DISPLAYING ADD PAGE - CREATE OPERATION */
router.get('/add', (req, res, next) => {
    res.render('add', {title: 'Add Contact'});
});

/* POST ROUTE FOR PROCESSING THE ADD PAGE - CREATE OPERATION */
router.post('/add', (req, res, next) => {
    let newContact = Contact({
        "Contact_Name": req.body.contactName,
        "Contact_Number": req.body.contactNumber,
        "Contact_Email": req.body.contactEmail
    });

    Contact.create(newContact, (err, Contact) => {
        if (err) 
        {
            console.log(err);
            res.end();
        } 
        else 
        {
            //REFRESH THE CONTACT LIST
            res.redirect('/contact-list');
        }
    });
});

/* GET ROUTE FOR DISPLAYING EDIT PAGE - UPDATE OPERATION */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err) 
        {
            console.log(err);
            res.end();
        }
        else 
        {
            //SHOW THE EDIT VIEW
            res.render('edit', {title: 'Edit Contact', contact: contactToEdit})
        }
    });
});

/* POST ROUTE FOR PROCESSING THE EDIT PAGE - UPDATE OPERATION */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "Contact_Name": req.body.contactName,
        "Contact_Number": req.body.contactNumber,
        "Contact_Email": req.body.contactEmail
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if (err) 
        {
            console.log(err);
            res.end();    
        } 
        else 
        {
            //REFRESH CONTACT LIST
            res.redirect('/contact-list');    
        }
    });
});

/* GET ROUTE TO PERFORM CONTACT DELETION - DELETE OPERATION */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if (err) 
        {
            console.log(err);
            res.end();    
        } 
        else 
        {
            //REFRESH CONTACT LIST
            res.redirect('/contact-list');    
        }
    });
});

module.exports = router;