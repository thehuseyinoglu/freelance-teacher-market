const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Teacher',
        autopopulate: {maxDepth: 1}
    },
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Student',
        autopopulate: {maxDepth: 1}
    },
    subject: String,
    date: String,
    
})
BookingSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Booking', BookingSchema)

