import { handleSearch } from './modules/search.js';
import { debounce } from './modules/debounce.js';

document.addEventListener('DOMContentLoaded',  () => {
  const searchInput = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('resultsContainer');
  const loadingIndicator = document.getElementById('loader');

  searchInput.addEventListener('input', debounce(() => handleSearch(searchInput.value, resultsContainer, loadingIndicator), 300));
});
