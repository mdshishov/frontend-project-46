const formatValue = (value) => {
  if (typeof value === 'string') return `'${value}'`
  if (Array.isArray(value)) return '[complex value]'
  return `${value}`
}

const formatPlain = (data) => {
  const iter = (arr, path = '') => {
    return arr.flatMap(({ status, key, value, oldValue, newValue }) => {
      const fullName = path.length > 0 ? `${path}.${key}` : key

      switch (status) {
        case 'unchanged':
          if (Array.isArray(value)) return iter(value, fullName)
          return null
        case 'added':
          return `Property '${fullName}' was added with value: ${formatValue(value)}`
        case 'removed':
          return `Property '${fullName}' was removed`
        case 'updated':
          return `Property '${fullName}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`
        default:
          throw new Error(`Diff status '${status}' is not allowed!`)
      }
    })
  }

  return iter(data).filter(item => item).join('\n')
}

export default formatPlain
