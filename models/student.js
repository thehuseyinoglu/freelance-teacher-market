const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    age: Number,
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        autopopulate: { maxDepth: 2 }
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        autopopulate: { maxDepth: 2 }
    }],

})

StudentSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Student', StudentSchema)