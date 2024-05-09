document.addEventListener('DOMContentLoaded', function()
{
    let mainNewsContainers = document.querySelectorAll('.main-news-item');
    let mainNewsLabels = document.querySelectorAll('.main-news-item .news-label-container');
    let mainNewsImages = document.querySelectorAll('.main-news-item img');
    let news = document.querySelectorAll('.news-item');
    let newsContainers = document.querySelectorAll('.news-item .news-label-container');


    let i = 0

    console.log(mainNewsImages.length);

    mainNewsLabels.forEach((item) =>
    {
        let title = item.querySelector('h2');
        let date = item.querySelector('p');

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
                    mainNewsImages[i].src = data[i].image;
                    mainNewsImages[i].alt = data[i].imageAlt;
                    mainNewsContainers[i].href = data[i].devlogUrl;
                }
                i++;
            });
    });

    news.forEach((item) => {
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
                    image.src = data[i].image;
                    image.alt = data[i].imageAlt;
                }
                i++;
            });
    });
});