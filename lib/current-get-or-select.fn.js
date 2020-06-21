const { getCurrentContext } = require('./current-get.fn')
const { selectCurrentContext } = require('./current-select.fn')

const getOrSelectCurrentContext = async ({ directory }) => {
  if (!directory) throw new Error('context of what directory?')

  const context = await getCurrentContext({ directory })

  if (context) return context
  else return selectCurrentContext()
}

module.exports = { getOrSelectCurrentContext }