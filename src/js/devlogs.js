document.addEventListener('DOMContentLoaded', function()
{
    let devlogTitle = document.getElementById("devlog-title");
    let devlogText = document.getElementById("devlog-text");

    let i = 0;
    fetch("../../data/news.json").then(response => response.json()).then(data =>
    {
        devlogTitle.innerHTML = data[i].devlogTitle;
        devlogText.innerHTML = data.text;
    });
});

