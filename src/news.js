document.addEventListener('DOMContentLoaded', function() {
    let mainNewsLabels = document.querySelectorAll('.main-news-item .news-label-container');
    let mainNewsImages = document.querySelectorAll('.main-news-item img');

    let news = document.querySelectorAll('.news-item');
    let mainNews = document.querySelectorAll('.main-news-item');
    let mainNewsAmount = mainNews.length;



    mainNews.forEach((item, i) =>
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
            .then(data => {
                if (data[i].title === undefined) {
                    title.textContent = "NO-NEWS";
                }
                if (data[i].date === undefined) {
                    date.textContent = "January 1, 1970";
                } else {
                    title.textContent = data[i].title;
                    date.textContent = data[i].date;
                    image.src = data[i].image;
                    image.alt = data[i].imageAlt;
                    item.href = data[i].devlogUrl;
                }
            });
    });

    news.forEach((item, i) =>
    {
        i += mainNewsAmount;
        let title = item.querySelector('h2');
        let date = item.querySelector('p');
        let image = item.querySelector('img');

        fetch('../data/news.json').then(response =>
            {
                if (!response.ok)
                {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data =>
            {
                    title.textContent = data[i].title || "NO-NEWS";
                    date.textContent = data[i].date || "January 1, 1970"
                    image.src = data[i].image || "../img/placeholder.png";
                    image.alt = data[i].imageAlt;
                    item.href = data[i].devlogUrl;
            });
    });
});

