document.addEventListener('DOMContentLoaded', function()
{
    let mainNews = document.querySelectorAll('.main-news-item .news-label-container');
    let news = document.querySelectorAll('.news-item');


    let i = 0;

    mainNews.forEach((item) =>
    {
        let title = item.querySelector('h2');
        let date = item.querySelector('p');
        let image = item.querySelector('img');

        fetch('../data/news.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data =>
            {
                if (data[i].title === undefined)
                {
                    title.textContent = "NO-NEWS";
                }
                if (data[i].date === undefined)
                {
                    date.textContent = "January 1, 1970";
                }
                else
                {
                    title.textContent = data[i].title;
                    date.textContent = data[i].date;
                }
                i++;
            });
    });
});