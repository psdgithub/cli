'use strict'

/* globals describe it context beforeEach */

const dirs = require('../lib/dirs')
const path = require('path')
const os = require('os')

describe('dirs', () => {
  context('nothing set', () => {
    beforeEach(() => {
      delete process.env.XDG_DATA_HOME
      delete process.env.XDG_CACHE_HOME
      delete process.env.XDG_CONFIG_HOME
    })

    it('sets config', () => {
      dirs.config.should.eq(path.join(os.homedir(), '.config', 'heroku'))
    })
    it('sets cache', () => {
      dirs.cache.should.eq(path.join(os.homedir(), '.cache', 'heroku'))
    })
    it('sets data', () => {
      dirs.data.should.eq(path.join(os.homedir(), '.local', 'share', 'heroku'))
    })
  })
})