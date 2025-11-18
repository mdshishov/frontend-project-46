import parseFile from './parsers.js'
import collectDiff from './collectors.js'
import formatData from './formatters.js'

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)

  const diffData = collectDiff(data1, data2)
  return formatData(diffData)
}

export default genDiff
