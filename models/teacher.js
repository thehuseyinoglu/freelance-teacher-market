// const Job = require('./job')
// const uuid = require('uuid')

const mongoose = require("mongoose")

const TeacherSchema = new mongoose.Schema({
    name:String,
    age:{type: Number, required:true, min: 18},
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        autopopulate: {maxDepth: 2}
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        autopopulate: {maxDepth: 2}
    }],
    adversiments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Adversiment',
        autopopulate: {maxDepth: 2}
    }]
})

TeacherSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Teacher', TeacherSchema)