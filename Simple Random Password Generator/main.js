const btn = document.querySelector(".btn")
const passText = document.querySelector(".pass")

// event Listeners

btn.addEventListener("click", passWord)

// generating a random number, taking the range from the password function as a parameter
// returning the random number
function randNumber(range)
{
    let rand = Math.floor(Math.random()*range)
    return (Number(rand));
}


// storing the number of possible stirngs that can be present inside the password
// running the forloop for every letter out of the total number of characters in the password
// each iteration gets a random number from the randNumber function and a random letter is picked from the array
// each letter is then appended to the pass variable which is storing the main password string
// the pass variable is then passed inside the paragraph from DOM as text content

function passWord()
{
    const a = "abcdefghijklmnopqrstuvwxyz0123456789@!#*";
    let arr = Array.from(a);
    let range = arr.length;
    randNumber(range);

    var pass = ""
    for (let i = 0; i < 15; i++) {
        
        let randNum = randNumber(range);
        pass = pass + arr[randNum];
    }
    console.log(pass);
    passText.textContent = pass;
}
