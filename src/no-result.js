document.addEventListener('DOMContentLoaded', function()
{
    let searchTerm = window.location.search;

    let search = searchTerm.replace('?search=', '').replace(/%20/g, ' ');
    console.log(search);

    let searchElement = document.getElementById('no-result-title');
    searchElement.innerHTML = search;
});
