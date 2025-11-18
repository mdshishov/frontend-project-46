const isObject = a => typeof a === 'object' && !Array.isArray(a) && a !== null

export { isObject }
