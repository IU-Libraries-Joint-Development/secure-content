const config = require('config')
const lodash = require('lodash')
const express = require('express')

module.exports = app => {
  if (config.has('repoService')) {
    const fedoraHost = config.get('repoService.fedora.host');
    const fedoraPort = config.get('repoService.fedora.port');
    const fedoraContext = config.get('repoService.fedora.context');
  }

  lodash.merge(app.settings, config)
}
