const API_BASE_URL = 'https://dummyjson.com';

export  const fetchData = async(query) => {
  const apiUrl = `${API_BASE_URL}/products/search?q=${query}&limit=15&delay=1000`;
  const response = await fetch(apiUrl);
  return response.json();
}