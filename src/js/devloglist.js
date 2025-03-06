async function loadDevlogs() {
    try {
        const response = await fetch('../data/news.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const devlogsData = await response.json();

        const devlogsContainer = document.getElementById("devlogs");

        devlogsData.forEach(devlog => {
            const article = document.createElement("article");
            article.className = "devlog-container";

            const link = document.createElement("a");
            link.className = "devlog";
            link.href = devlog.devlogUrl;

            const title = document.createElement("p");
            title.className = "title";
            title.textContent = devlog.title;

            const date = document.createElement("p");
            date.className = "date";
            date.textContent = devlog.date;

            link.appendChild(title);
            link.appendChild(date);
            article.appendChild(link);
            devlogsContainer.appendChild(article);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the function to load devlogs
loadDevlogs();
