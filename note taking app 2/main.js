const textInput = document.querySelector(".text-input")
const addBtn = document.querySelector(".add-btn")
const notes = document.querySelector(".notes")

// emptyNotesCheck()    
textInput.focus();

addBtn.addEventListener("click", addNote)

document.addEventListener("DOMContentLoaded", updateUi)

function addNote() {
    if (textInput.value == '') {
        return
    }

    var newNote = {
        input: textInput.value,
        id: Math.random()
    }

    const div = document.createElement("div");
    div.classList.add("note");

    div.innerHTML = `
                <p class="note-para">${newNote.input}</p>
                <button class="note-btn">Delete Note</button>
                <span hidden id="id">${newNote.id}</span>
    `;

    notes.appendChild(div)
    setNotes(newNote);

    textInput.value = '';
    textInput.focus();

    return newNote;

}

// deleting the note div 

notes.addEventListener("click", (e) => {

    const currentTarget = e.target;
    if (currentTarget.classList.contains("note-btn")) {
        e.target.parentElement.remove();
    }


    var span = currentTarget.parentElement.querySelector("#id").textContent
    removeNote(span)

})






// adding to the local storage

function getNotes()
{
    var notes;
    if(localStorage.getItem("appNotes") === null)
    {
        notes = [];
    }
    else{
        notes = JSON.parse(localStorage.getItem("appNotes"))
    }
    return notes;
}

function setNotes(note)
{
    const notes = getNotes()
    notes.push(note)
    localStorage.setItem("appNotes", JSON.stringify(notes));
}

function updateUi()
{
    const temp = getNotes();
    temp.forEach(element => {
        

        const div = document.createElement("div");
        div.classList.add("note");

        div.innerHTML = `
                <p class="note-para">${element.input}</p>
                <button class="note-btn">Delete Note</button>
                <span hidden id="id">${element.id}</span>
        `;

        notes.appendChild(div)
    });
}


function removeNote(ide)
{
    let temp = getNotes();
    temp.forEach(function(element, index)
    {
        if(element.id == ide)
        {
            temp.splice(index, 1);
            localStorage.setItem("appNotes", JSON.stringify(temp))
        }
    })
}


