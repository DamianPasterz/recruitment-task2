import { fetchData } from './api.js';

export  const handleSearch = async (query, resultsContainer, loadingIndicator) => {

  if (query.length === 0) {
    resultsContainer.innerHTML = '';
    return;
  }

  loadingIndicator.style.display = 'block';
  resultsContainer.innerHTML = '';

  try {
    const data = await fetchData(query);
    displayResults(data, resultsContainer);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loadingIndicator.style.display = 'none';
  }
}

const displayResults = (data, resultsContainer) => {
  data.products.forEach((result) => {
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';

    const title = document.createElement('div');
    title.textContent = result.title;
    title.className = 'title';

    const price = document.createElement('div');
    price.textContent = `$ ${result.price}`;
    price.className = 'price';

    resultItem.appendChild(title);
    resultItem.appendChild(price);
    resultsContainer.appendChild(resultItem);
  });
}