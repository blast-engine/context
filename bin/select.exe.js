#!/usr/bin/env node
const { red, blue } = require('chalk')

const { selectCurrentContext } = require('../lib')

;(async () => {

  let context
  try {
    context = await selectCurrentContext({ directory: __dirname })
  } catch (e) { return console.log(red(e)) }

  return console.log(blue(`set context "${context._name}"`))

})()