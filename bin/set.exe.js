#!/usr/bin/env node
const yargs = require('yargs')
const { red, blue } = require('chalk')

const { setCurrentContext } = require('../lib')

;(async () => {

  const contextName = yargs.argv._[0] // first arg
  if (!contextName) return console.log(red('context name not given'))

  try {
    await setCurrentContext(contextName)
  } catch (e) { return console.log(red(e)) }

  return console.log(blue(`set context "${contextName}"`))

})()