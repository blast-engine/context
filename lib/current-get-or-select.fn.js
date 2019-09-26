const { getCurrentContext } = require('./current-get.fn')
const { selectCurrentContext } = require('./current-select.fn')

const getOrSelectCurrentContext = async () => {

  const context = await getCurrentContext()

  if (context) return context
  else return selectCurrentContext()

}

module.exports = { getOrSelectCurrentContext }