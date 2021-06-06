const darkBtn = document.querySelector(".btn");
let darkMode = localStorage.getItem("darkMode");
const main = document.querySelector(".main");



const enableDark = () =>{

    main.classList.add("darkModeStyle");
    darkMode = localStorage.setItem("darkMode", "enabled");

}

const DisableDark = () =>{

    main.classList.remove("darkModeStyle");
    darkMode = localStorage.setItem("darkMode", "disabled");

}

if(darkMode === "enabled")
{
    enableDark();
}

darkBtn.addEventListener("click", ()=>{
    
    darkMode = localStorage.getItem("darkMode");
    console.log(darkMode);
    if(darkMode !== "enabled")
    {
        enableDark();
    }
    else
    {
        DisableDark();
    }
})

