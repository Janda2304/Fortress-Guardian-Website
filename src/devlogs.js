document.addEventListener('DOMContentLoaded', function()
{
    let devlogTitle = document.getElementById("devlogTitle");
    let devlogText = document.getElementById("devlogContent");

    let i = 0;
    fetch("../../data/news.json").then(response => response.json()).then(data =>
    {
        devlogTitle.innerHTML = data[i].devlogTitle;
        devlogText.innerHTML = data.text;
    });
});

