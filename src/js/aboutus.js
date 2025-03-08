document.addEventListener('DOMContentLoaded', function()
{
   let accelerusButton = document.getElementById('accelerus-button');
   let askisButton = document.getElementById('askis-button');
   let underglowButton = document.getElementById('underglow-button');
   let underglowItchButton = document.getElementById('underglow-itch-button');
    let accelerusItchButton = document.getElementById('accelerus-itch-button');
    let askisItchButton = document.getElementById('askis-itch-button');
   let fgButton = document.getElementById('fg-button');


   if (accelerusButton !== null)
   {
         accelerusButton.addEventListener('click', function()
         {
              window.location.href = "accelerus.html";
         });
   }

   if (askisButton !== null)
   {
       askisButton.addEventListener('click', function ()
       {
           window.location.href = "askis.html";
       });
   }


   if (underglowButton !== null)
   {
       underglowButton.addEventListener('click', function ()
       {
           window.location.href = "underglow.html";
       });
   }

   if (fgButton !== null)
   {
         fgButton.addEventListener('click', function()
         {
                window.location.href = "about-game.html";
         });
   }

    fetch("../data/aboutus.json").then(response => response.json()).then(data => {
        let aboutUsTitle = document.getElementById("aboutusTitle");
        let aboutUsText = document.getElementById("aboutusText")

        aboutUsTitle.innerHTML = data.title;
        aboutUsText.innerHTML = data.text;

    });

    if (underglowItchButton !== null)
    {
        underglowItchButton.addEventListener('click', function()
        {
            window.location.href = "https://turtledave501.itch.io/underglow";
        });
    }
    if (accelerusItchButton !== null)
    {
        accelerusItchButton.addEventListener('click', function()
        {
            window.location.href = "https://turtledave501.itch.io/accelerus";
        });
    }

    if (askisItchButton !== null)
    {
        askisItchButton.addEventListener('click', function()
        {
            window.location.href = "https://turtledave501.itch.io/askis-temporal-tangle";
        });
    }

});