let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//CONNECT TO CONTACT MODEL
let Contact = require('../models/contact');

//CONNECT TO CONTROLLER
let bookController = require('../controllers/contact');

// helper function for guard purpose
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next(); // a way to maintain a state as we move from to the next
}

/* GET ROUTE FOR THE CONTACTS LIST PAGE - READ OPERATION */
router.get('/', bookController.displayContactList);

/* GET ROUTE FOR DISPLAYING ADD PAGE - CREATE OPERATION */
router.get('/add', bookController.displayAddPage);

/* POST ROUTE FOR PROCESSING THE ADD PAGE - CREATE OPERATION */
router.post('/add', bookController.processAddPage);

/* GET ROUTE FOR DISPLAYING EDIT PAGE - UPDATE OPERATION */
router.get('/edit/:id', bookController.displayEditPage);

/* POST ROUTE FOR PROCESSING THE EDIT PAGE - UPDATE OPERATION */
router.post('/edit/:id', bookController.processEditPage);

/* GET ROUTE TO PERFORM CONTACT DELETION - DELETE OPERATION */
router.get('/delete/:id', bookController.performDelete);

module.exports = router;