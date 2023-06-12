export function useGetData() {
  const dataURL = '/data/data.json'
  async function fetchDataFromApi() {
    try {
      const response = await fetch(dataURL)
      if (response.ok) {
        const data = await response.json()
        return data
      }
    }
    catch (error) {
      console.warn(error)
    }
  }
  return { fetchDataFromApi }
}
