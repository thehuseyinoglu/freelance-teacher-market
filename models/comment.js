const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
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
    text: String,
    score: Number,
    
})
CommentSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Comment', CommentSchema)