import formatStylish from './formatStylish.js'
import formatPlain from './formatPlain.js'

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
}

const formatData = (data, formatName) => {
  const formatter = formatters[formatName]
  return formatter(data)
}

export default formatData
