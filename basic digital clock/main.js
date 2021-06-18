var hour = document.querySelector(".hour");
var min = document.querySelector(".min");
var sec = document.querySelector(".sec");
var ampm = document.querySelector(".ampm");
var hour12 = document.querySelector(".hour12");
var hour24 = document.querySelector(".hour24");

setInterval(timeupdate, 1000);


function timeupdate()
{

    //getting the current time 

    var currentTime = new Date();

    var currentHour = currentTime.getHours();
    var currentMin = currentTime.getMinutes();
    var currentSec = currentTime.getSeconds();

    // checking for AM and Pm

    if(currentHour > 12)
    {
        ampm.textContent = "pm"
    }
    else
    {
        ampm.textContent = "am"
    }
    
    
    
    //condition checking for formatting time display
    if (currentHour > 12)
    {
        currentHour = currentHour%12;
    }

    if(currentHour < 10)
    {
        currentHour = "0" + currentHour;
    }
    
    if(currentMin < 10)
    {
        currentMin = "0" + currentMin;
    }
    
    if(currentSec < 10)
    {
        currentSec = "0" + currentSec;
    }

    // hour12.addEventListener("click", ()=>{

    //     currentHour = currentHour%12;
    // })


    //assigning the time to the DOM divs 
    hour.textContent = currentHour;
    min.textContent = currentMin;
    sec.textContent = currentSec;

}
