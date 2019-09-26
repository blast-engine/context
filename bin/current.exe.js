#!/usr/bin/env node
const { red, blue } = require('chalk')

const { getCurrentContext } = require('../lib')

;(async () => {

  const context = getCurrentContext()

  if (!context) console.log(red('no context selected'))
  else console.log(blue(context._name))

})()