

function funcadd() {
    const now = new Date();
const formattedDate = now.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});
   const time = document.getElementById("time");

   time.value = formattedDate;

   console.log("funcadd func");

//    const header = document.querySelector(".header");
   const body = document.querySelector(".body");
   const bottom = document.querySelector(".bottom");
   const adder = document.querySelector(".adder");
   const note = document.querySelector("#note");


   note.value = "";
   adder.style.display = 'flex';
//   header.style.display = 'none';
  body.style.display = 'none';
  bottom.style.display = 'none';


}

function back() {
    const body = document.querySelector(".body");
    const bottom = document.querySelector(".bottom");
    const adder = document.querySelector(".adder");
 console.log("back func");
 
   adder.style.display = 'none';
   body.style.display = 'flex';
   bottom.style.display = 'flex';
}


function saveFormData() {
    const body = document.querySelector(".body");
    const bottom = document.querySelector(".bottom");
    const adder = document.querySelector(".adder");
 console.log("back func");
 
   adder.style.display = 'none';
   body.style.display = 'flex';
   bottom.style.display = 'flex';
}

function saveFormData() {
    const note = document.getElementById("note").value;
    const time = document.getElementById("time").value;

    if (note && time) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push({ time, note });
        localStorage.setItem("notes", JSON.stringify(notes));
        displayNotes();
    }

    const body = document.querySelector(".body");
    const bottom = document.querySelector(".bottom");
    const adder = document.querySelector(".adder");

    adder.style.display = 'none';
    body.style.display = 'flex';
    bottom.style.display = 'flex';
}

function displayNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteview = document.getElementById("noteview");
    noteview.innerHTML = "";

    notes.forEach(note => {
        const noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.innerHTML = `<strong>${note.time}</strong><p>${note.note}</p>`;
        noteview.appendChild(noteElement);
    });
}

// Call displayNotes on page load to show any saved notes
document.addEventListener("DOMContentLoaded", displayNotes);
