const mongoose = require("mongoose")

const AdversimentSchema = new mongoose.Schema({
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Teacher',
        autopopulate: {maxDepth: 1}
    },
    title: String,
    content: String,
    price: Number,    
})
AdversimentSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Adversiment', AdversimentSchema)

