var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//model created for ticket info
var TicketSchema = new Schema(
    {
        person_reporting: String,
        problem_description: String,
        date: Number,

    });

//Export model
module.exports = mongoose.model('Ticket', TicketSchema);