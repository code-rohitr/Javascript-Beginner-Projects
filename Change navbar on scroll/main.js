

// const nav = document.querySelector("#nav");

// document.addEventListener("scroll", () => {

//     if(window.scrollY > 10)
//     {
//         nav.classList.add("bg");
//     }
//     else
//     {
//         nav.classList.remove("bg");
//     }
    
// })

const nav = document.querySelector("#nav");
const main1 = document.querySelector("#main1");


const options = {
    root : null,
    rootMargin: "100px 0px",
    threshold: 1,
}

let observer = new IntersectionObserver(callback, options)

function callback(entries, observer)
{
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            nav.classList.remove("bg")
        }

        else
        {
            nav.classList.add("bg");
        }
    });
}

observer.observe(main1);