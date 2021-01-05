'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
const _express = require('express')
const _express2 = _interopRequireDefault(_express)
const _cors = require('cors')
const _cors2 = _interopRequireDefault(_cors)
const _mongoose = require('mongoose')
const _mongoose2 = _interopRequireDefault(_mongoose)

const _routes = require('./routes')
const _routes2 = _interopRequireDefault(_routes)

class App {
  constructor () {
    this.express = _express2.default.call(void 0)

    this.middlewares()
    this.database()
    this.routes()
  }

  middlewares () {
    this.express.use(_express2.default.json())
    this.express.use(_cors2.default.call(void 0))
  }

  database () {
    _mongoose2.default.connect('mongodb://localhost:27017/tsnode', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  routes () {
    this.express.use(_routes2.default)
  }
}

exports.default = new App().express
