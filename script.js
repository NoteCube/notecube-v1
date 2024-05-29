

document.addEventListener("DOMContentLoaded", function() {
  var note = localStorage.getItem("note");
  var noteName = localStorage.getItem("noteName");

  if (note) {
    document.getElementById("text-box").value = note;
  } else {
    document.getElementById("text-box").value = "";
  }

  if (noteName) {
    document.getElementById("noteNameDisplay").textContent = noteName;
  } else {
    document.getElementById("noteNameDisplay").textContent = "[Untitled]";
  }
});

function saveNote() {
  var note = document.getElementById("text-box").value;
  localStorage.setItem("note", note);
  localStorage.setItem("noteName", document.getElementById("noteNameDisplay").textContent);
}

// Prompt user to name the note and display the note name
function nameNote() {
  var noteName = prompt("What do you want to name your note?");
  if (noteName) {
    localStorage.setItem("noteName", noteName);
    document.getElementById("noteNameDisplay").textContent = noteName;
  } else {
    localStorage.removeItem("noteName");
    document.getElementById("noteNameDisplay").textContent = "[Untitled]";
  }
}

function newNote() {
  document.getElementById("text-box").value = "";
  document.getElementById("noteNameDisplay").textContent = "[Untitled]";
}

function fontSize() {
  var fontSize = document.getElementById("font-size").value;
  if(fontSize < 101) {
    localStorage.setItem("fontSize", fontSize);
    document.getElementById("text-box").style.fontSize = localStorage.getItem("fontSize") + "px";
  }
  else {
    fontSize = localStorage.getItem("fontSize");
  }
}

