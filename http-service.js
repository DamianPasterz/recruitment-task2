const API_BASE_URL = 'https://dummyjson.com';
console.log('jestem1');

export async function fetchData(query) {
  const apiUrl = `${API_BASE_URL}/products/search?q=${query}&limit=5&delay=1000`;
  const response = await fetch(apiUrl);
  return response.json();
}