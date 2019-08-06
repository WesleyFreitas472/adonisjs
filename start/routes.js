'use strict'

const Route = use('Route')

//cria uma rota (users) e indica o método que irá tratar a rota
Route.post('users','UserController.store')
Route.post('sessions','SessionController.store')

Route.resource('project','ProjectController').apiOnly()