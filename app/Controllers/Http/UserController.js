'use strict'

//importacao usando o use - pacotes do adonis
const User = use('App/Models/User')

//Controler 
class UserController {
    async store ({request}){
        console.log(request)
        const data = request.only(['username','email','password'])
        console.log(data)
        const user = await User.create(data)
        return user
    }
}

module.exports = UserController
