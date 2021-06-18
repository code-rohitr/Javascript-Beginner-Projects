// const input = document.querySelector(".input");
// const label = document.querySelector(".label");


// input.addEventListener("focus", animateSpan)
// input.addEventListener("blur", animateSpan)
// input.addEventListener("click", ()=>{

//     label.classList.add("animate");
// })

// function animateSpan()
// {

//     if(input.value === '')
//     {
//         label.classList.remove("animate");
//     }
//     else
//     {
//         label.classList.add("animate");
//     }
// }



const input = document.querySelectorAll("input");
const label = document.querySelector(".label");



input.forEach(Element => {

    Element.addEventListener("focus", animateSpan)
    Element.addEventListener("blur", animateSpan)
    Element.addEventListener("click", ()=>{

        Element.nextElementSibling.classList.add("animate");

    })
    

    function animateSpan()
    {
        if(Element.value === '')
        {
        Element.nextElementSibling.classList.remove("animate");   
        }
        else
        {
        Element.nextElementSibling.classList.add("animate");
        }
    }
})