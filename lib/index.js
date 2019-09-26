const { getCurrentContext } = require('./current-get.fn')
const { setCurrentContext } = require('./current-set.fn')
const { selectCurrentContext } = require('./current-select.fn')
const { getOrSelectCurrentContext } = require('./current-get-or-select.fn')

module.exports = {
  getCurrentContext,
  setCurrentContext,
  selectCurrentContext,
  getOrSelectCurrentContext
}