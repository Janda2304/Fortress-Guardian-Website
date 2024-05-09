document.addEventListener('DOMContentLoaded', function()
{
   let accelerusButton = document.getElementById('accelerus-button');
   let askisButton = document.getElementById('askis-button');
   let underglowButton = document.getElementById('underglow-button');


    accelerusButton.addEventListener('click', function()
    {
         window.location.href = "https://turtledave501.itch.io/accelerus";
    });

    askisButton.addEventListener('click', function()
    {
         window.location.href = "https://turtledave501.itch.io/askis-temporal-tangle";
    });

    underglowButton.addEventListener('click', function()
    {
         window.location.href = "https://turtledave501.itch.io/underglow";
    });
});