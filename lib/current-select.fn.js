const inquirer = require('inquirer')

const { kv } = require('@blast-engine/utils')
const { getConfig } = require('./config-get.fn')
const { getCurrentContext } = require('./current-get.fn')
const { setCurrentContext } = require('./current-set.fn')

const selectCurrentContext = async ({ directory }) => {
  if (!directory) throw new Error('current context of what directory?')

  const config = await getConfig(directory)

  const currentContext = await getCurrentContext({ directory })

  const selectableContextIds = kv(config.contexts)
    .filter(({ v: contextConfig }) => !(contextConfig._showInSelect === false))
    .map(({ k: contextName }) => contextName)

  if (!selectableContextIds.length)
    throw new Error('there are no selectable contexts configured')

  const selected = currentContext 
    ? selectableContextIds.indexOf(currentContext._name)
    : null

  const { contextName } = await inquirer.prompt([
    {
      type: 'list',
      name: 'contextName',
      message: 'select context',
      choices: selectableContextIds,
      default: selected || 0
    }
  ])
  
  await setCurrentContext({ contextName, directory })

  return getCurrentContext({ directory })
}

module.exports = { selectCurrentContext }