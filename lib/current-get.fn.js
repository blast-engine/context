const fs = require('fs')

const { findFileRecursivelyUp } = require('@blast-engine/find-recursively-up')

const { CURRENT_CONTEXT_FILE } = require('./constants')
const { getConfig } = require('./config-get.fn')

const getCurrentContext = async ({ directory, errorOutIfNone = false } = {}) => {
  if (!directory) throw new Error('context of what directory?')

  const config = await getConfig(directory)

  const currentContextPath = await findFileRecursivelyUp(CURRENT_CONTEXT_FILE, directory)
  if (!currentContextPath) {
    if (errorOutIfNone) throw new Error('no context selected')
    else return null
  }

  const contextName = fs.readFileSync(currentContextPath, 'utf8')
  const context = config.contexts[contextName]

  if (!context) throw new Error(`"${contextName}" is not a configured context`)

  return {
    ...context,
    _name: contextName
  }

}

module.exports = { getCurrentContext }
