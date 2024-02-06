import { handleSearch } from './search.js';
import { debounce } from './debounce.js';

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('resultsContainer');
  const loadingIndicator = document.getElementById('loader');

  searchInput.addEventListener('input', debounce(() => handleSearch(searchInput.value, resultsContainer, loadingIndicator), 300));
});
