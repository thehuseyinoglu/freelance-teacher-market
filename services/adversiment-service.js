const BaseService = require('./base-service')
const Adversiment = require('../models/adversiment')
const teacherService = require("./teacher-service")

class AdversimentService extends BaseService {
    async advertise(teacherId, title, content, price){
        const teacher = await teacherService.find(teacherId)

        const adversiment = await this.insert({teacher, title, content, price})
        teacher.adversiments.push(adversiment)
        await teacher.save()
    
        return adversiment
    }
}

module.exports = new AdversimentService(Adversiment)
