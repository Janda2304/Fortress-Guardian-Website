document.addEventListener('DOMContentLoaded', function() {
    let search = document.getElementById('wiki-search');
    let searchButton = document.getElementById('wiki-search-button');
    let categoryButtons = document.getElementsByClassName('category');
    let resultsContainer = document.createElement('div');
    resultsContainer.id = 'search-results';
    resultsContainer.classList.add('search-results');
    document.querySelector('.search-bar').appendChild(resultsContainer);

    const wikiData = [
        { name: 'Red Goblin', url: 'wiki/red-goblin.html' },
        { name: 'Bear', url: 'wiki/bear.html' },
        { name: 'Training Grounds', url: 'wiki/training-grounds.html' },
    ];

    Array.from(categoryButtons).forEach((button) => {
        button.href = 'wiki/no-result.html?search=' + button.textContent;
    });

    function handleSearch() {
        let searchTerm = search.value.trim().toLowerCase();
        resultsContainer.innerHTML = '';

        if (searchTerm === '') {
            resultsContainer.innerHTML = '<p></p>';
            return;
        }

        let filteredResults = wikiData.filter(entry => entry.name.toLowerCase().includes(searchTerm));

        if (filteredResults.length > 0) {
            filteredResults.forEach(result => {
                let resultItem = document.createElement('a');
                resultItem.href = result.url;
                resultItem.textContent = result.name;
                resultItem.classList.add('search-result-item');
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = `<p>No results found for "${searchTerm}".</p>`;
        }
    }

    search.addEventListener('input', handleSearch);
});
