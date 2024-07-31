export const getData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (err) {
    // potentially add log here or in global catch statement
    throw new Error('Network layer errors out', err)
  }
}
