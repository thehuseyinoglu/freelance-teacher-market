const uuid = require('uuid')

class Comment {
    constructor(commentId = uuid.v4(), teacher, student, text, score) {
        this.commentId = commentId
        this.teacher = teacher
        this.student = student
        this.text = text
        this.score = score
    }
}

module.exports = Comment