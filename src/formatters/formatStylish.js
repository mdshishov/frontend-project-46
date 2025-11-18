const signs = {
  added: '  + ',
  removed: '  - ',
  unchanged: '    ',
}

const formatStylish = (data) => {
  const iter = (arr, depth = 0) => {
    const format = (padding, sign, key, value) => {
      if (Array.isArray(value)) return [
        `${padding}${sign}${key}: {`,
        ...iter(value, depth + 1),
        `${padding}    }`,
      ]
      return [`${padding}${sign}${key}: ${value}`]
    }

    const padding = '    '.repeat(depth)

    return arr.flatMap(({ status, key, value, oldValue, newValue }) => {
      if (status === 'updated') {
        return [
          ...format(padding, signs.removed, key, oldValue),
          ...format(padding, signs.added, key, newValue),
        ]
      }
      const sign = signs[status]
      return format(padding, sign, key, value)
    })
  }

  return `{\n${iter(data).join('\n')}\n}`
}

export default formatStylish
