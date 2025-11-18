import parseFile from './parsers.js'
import collectDiff from './collectors.js'
import formatData from './formatters/index.js'

const allowedFormats = ['stylish', 'plain', 'json']

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  if (!allowedFormats.includes(formatName)) return `Format '${formatName}' is not allowed!`

  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)

  const diffData = collectDiff(data1, data2)
  return formatData(diffData, formatName)
}

export default genDiff
