'use strict'; Object.defineProperty(exports, '__esModule', { value: true }); function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } } const _express = require('express')
const _UserController = require('./controllers/UserController'); const _UserController2 = _interopRequireDefault(_UserController)

const routes = _express.Router.call(void 0)

routes.get('/users', _UserController2.default.index)
routes.post('/users', _UserController2.default.store)

exports.default = routes
