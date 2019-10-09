const config = require('config')
const lodash = require('lodash')
const express = require('express')

module.exports = app => {
  lodash.merge(app.settings, config)
  // console.log(app.settings)
}
