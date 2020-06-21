const fs = require('fs')
const path = require('path')

const { CURRENT_CONTEXT_FILE } = require('./constants')
const { getConfig } = require('./config-get.fn')
const { getCurrentContext } = require('./current-get.fn')

const setCurrentContext = async ({ contextName, directory }) => {
  if (!directory) throw new Error('set current context of what directory?')

  const config = await getConfig(directory)

  const context = config.contexts[contextName]

  if (!context) 
    throw new Error(`"${contextName}" is not a configured context`)

  fs.writeFileSync(path.resolve(config._dir, CURRENT_CONTEXT_FILE), contextName, 'utf8')

  if (config.onSelect) 
    await config.onSelect(await getCurrentContext({ directory }))

}

module.exports = { setCurrentContext }