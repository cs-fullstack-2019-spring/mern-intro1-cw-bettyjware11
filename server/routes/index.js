var express = require('express');
var router = express.Router();
var TicketCollection = require('../models/TicketSchema');

/* GET home page. */
router.get('/', (req,res)=>
{
  res.render("you made it to the index");
});

//creating route to add ticket information to the database
router.get('/tickets/seeddata/:person_reporting/:problem_description/:date', function(req, res, next) {
  TicketCollection.create({
    person_reporting: req.params.person_reporting,
    problem_description: req.params.problem_description,
    date: req.params.date

  }, (errors, results)=>{
    if (errors) res.send(errors);

    else res.send(results);

  });


});

//this function finds all of the ticket information available in the database
router.get('/tickets', (req, res)=>{
  TicketCollection.find({}, (errors, results)=>{
    if(errors) res.send(errors);
    else res.send(results);
  });
});






module.exports = router;
