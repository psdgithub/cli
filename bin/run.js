const path = require('path')
const root = path.join(__dirname, '..')
const pjson = require(path.join(root, 'package.json'))
const semver = require('semver')
const nodeVersion = process.version.split('v')[1]
if (!semver.satisfies(nodeVersion, pjson.engines.node)) {
  process.stderr.write(`WARNING\nWARNING Node version must be ${pjson.engines.node} to use the Heroku CLI\nWARNING\n`)
}

const {run} = require('cli-engine')
const config = {
  updateDisabled: 'Update CLI with `npm update -g heroku-cli`'
}
run({config})
