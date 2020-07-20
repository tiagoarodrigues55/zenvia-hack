'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Corrida = use('App/Models/Corrida')

/**
 * Resourceful controller for interacting with corridas
 */
class CorridaController {
  /**
   * Show a list of all corridas.
   * GET corridas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const corridas = await Corrida.all()
    return corridas
  }


  async store ({ request, auth }) {
    const data = request.only(['endereço0','endereço1', 'coordenada0', 'coordenada1'])
    const user = await Corrida.create({user_id: auth.user.id, cellNumber:auth.user.cellNumber, ...data })

    return user
  }

  /**
   * Display a single corrida.
   * GET corridas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show () {
    const corridas = await Corrida.all()
    var corridasNãoCompletas = []
    for(let i of corridas.rows){
      if(i.completa===false){
        corridasNãoCompletas.push(i)
      }
    }
    return corridasNãoCompletas
  }

  /**
   * Render a form to update an existing corrida.
   * GET corridas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update corrida details.
   * PUT or PATCH corridas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update (params) {
    console.log(params.params.id)
    const corrida = await Corrida.find(params.params.id)
    corrida.merge({completa: true})
    return corrida
  }

  /**
   * Delete a corrida with id.
   * DELETE corridas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CorridaController
