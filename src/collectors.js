import { isObject } from './utils.js'
import _ from 'lodash'

const collectDiff = (data1, data2 = data1) => {
  if (!isObject(data1)) return data1

  const keys1 = Object.keys(data1)
  const keys2 = Object.keys(data2)
  const allKeys = [...new Set([...keys1, ...keys2])]
    .sort((a, b) => a.localeCompare(b))

  const result = allKeys.map((key) => {
    const isKeyIn1 = Object.hasOwn(data1, key)
    const isKeyIn2 = Object.hasOwn(data2, key)

    const value1 = data1[key]
    const value2 = data2[key]

    if (isKeyIn1 && isKeyIn2) {
      if (_.isEqual(value1, value2)) {
        return { status: 'unchanged', key, value: collectDiff(value1) }
      }

      if (isObject(value1) && isObject(value2)) {
        return { status: 'unchanged', key, value: collectDiff(value1, value2) }
      }

      return { status: 'updated', key, oldValue: collectDiff(value1), newValue: collectDiff(value2) }
    }

    const value = isKeyIn1 ? value1 : value2
    return { status: isKeyIn1 ? 'removed' : 'added', key, value: collectDiff(value) }
  })

  return result
}

export default collectDiff
