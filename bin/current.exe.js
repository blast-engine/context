#!/usr/bin/env node
const { red, blue } = require('chalk')

const { getCurrentContext } = require('../lib')

;(async () => {

  const context = await getCurrentContext({ directory: __dirname })

  if (!context) console.log(red('no context selected'))
  else console.log(blue(context._name))

})()