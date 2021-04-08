const mongoose = require('mongoose');
const schema = mongoose.Schema;

const QuestionSchema = Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        require: true
    },
    repo: {
        type: String,
    },
    live: {
        type: String
    },
    answered: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
})

module.exports = Question = mongoose.model('Question', QuestionSchema)