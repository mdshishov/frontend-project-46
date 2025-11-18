import formatStylish from './formatStylish.js'
import formatPlain from './formatPlain.js'
import formatJSON from './formatJSON.js'

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJSON,
}

const formatData = (data, formatName) => {
  const formatter = formatters[formatName]
  return formatter(data)
}

export default formatData
