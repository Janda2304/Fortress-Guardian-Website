document.addEventListener('DOMContentLoaded', function() {
    let search = document.getElementById('wiki-search');
    let searchTerm = '';

    let searchButton = document.getElementById('wiki-search-button');
    let categoryButtons = document.getElementsByClassName('category');

    Array.from(categoryButtons).forEach((button) =>
    {
        button.href = 'wiki/no-result.html?search=' + button.textContent;
    });



    // Function to handle search
    function handleSearch() {
        searchTerm = search.value.trim();

        if (searchTerm.includes('goblin') || searchTerm.includes('Goblin'))
        {
            window.location.href = 'wiki/red-goblin.html';
        }
        else if (searchTerm.includes('bear') || searchTerm.includes('Bear'))
        {
            window.location.href = 'wiki/bear.html';
        }
        else if (searchTerm.includes('training') || searchTerm.includes('Training') || searchTerm.includes('grounds') || searchTerm.includes('Grounds'))
        {
            window.location.href = 'wiki/training-grounds.html';
        }
        else
        {
            window.location.href = 'wiki/no-result.html?search=' + searchTerm;
        }
    }

    // Event listener for search button click
    searchButton.addEventListener('click', handleSearch);

    // Event listener for Enter key press
    search.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });
});