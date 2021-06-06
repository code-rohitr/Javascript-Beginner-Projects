const number = document.querySelector("h2");
const dec = document.querySelector("#dec");
const reset = document.querySelector("#reset");
const inc = document.querySelector("#inc");
const btn = document.querySelector(".btn");
// var count = 0;
// number.innerHTML = count;


// //decrement

// dec.addEventListener("click", () =>{

//     count--;
//     number.innerHTML = count;

// })

// //reset

// reset.addEventListener("click", () =>{

//     count = 0;
//     number.innerHTML = count;
// })

// //increment

// inc.addEventListener("click", () =>{

//     count++;
//     number.innerHTML = count;
// })


//Methid 2


// var count = 0;
// number.innerHTML = count;

// btn.addEventListener("click", e=>{

//         if (e.target.id == "dec")
//         {
//             count--;
//         }

//         else if(e.target.id == "reset")
//         {
//             count = 0;
//         }

//         else if(e.target.id == "inc")
//         {
//             count++;
//         }

//         number.innerHTML = count;
//         if(count < 0)
//         {
//             number.style.color = "red";
//         }
//         else if(count > 0)
//         {
//             number.style.color = "green";
//         }
//         else
//         {
//             number.style.color = "black";
//         }
// })


//method 3


class Counter{
    
    constructor(count){
        this.count = count;
    }
    
    reset()
    {
        this.count = 0;
        number.innerHTML = this.count;
    }

    dec()
    {
        this.count--;
        number.innerHTML = this.count;
    }

    inc()
    {
        this.count++;
        number.innerHTML = this.count;
    }

    numbercheck()
    {
        if(this.count < 0)
        {
            number.style.color = "maroon";
        }
        else if(this.count > 0)
        {
            number.style.color = "green";
        }
        else{
            number.style.color = "black";
        }
    }
}


var count = 0;


const obj = new Counter(count);

btn.addEventListener("click", e=>{

    if(e.target.id === 'dec')
    {
        obj.dec();
    }

    else if(e.target.id === 'reset')
    {
        obj.reset();
    }

    else if(e.target.id === 'inc')
    {
        obj.inc();
    }

    obj.numbercheck();
})