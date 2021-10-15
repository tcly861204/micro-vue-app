export const get = key => {
  const value = localStorage.getItem(key)
  if (value) {
    try {
      const valueJson = JSON.parse(value)
      return valueJson
    } catch (e) {
      return value
    }
  } else {
    return false
  }
}

export const set = (key, value) => {
  if (['array', 'object'].includes(typeOf(value))) {
    localStorage.setItem(key, JSON.stringify(value))
    return
  }
  localStorage.setItem(key, value)
}

export const remove = (key) => {
  localStorage.removeItem(key)
}