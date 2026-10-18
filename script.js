// Select the elements
const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const errorMessage = document.querySelector("#error-message");
const searchInput = document.querySelector("#search-input");
const noteCount = document.querySelector("#note-count");
const notesList = document.querySelector("#notes-list");

// The notes array
let notes = [];

// Rebuild the list from the notes array
function render() {
  notesList.textContent = "";

  for (const note of notes) {
    const li = document.createElement("li");
    li.classList.add("note");
    li.classList.add("category-" + note.category);

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text;

    const label = document.createElement("span");
    label.classList.add("note-category");
    label.textContent = note.category;

    const date = document.createElement("span");
    date.classList.add("note-date");
    date.textContent = note.createdAt;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    li.appendChild(text);
    li.appendChild(label);
    li.appendChild(date);
    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  }
}

// Add a note when the form is submitted
noteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = noteInput.value.trim();

  const note = {
    id: Date.now(),
    text: text,
    category: noteCategory.value,
    createdAt: new Date().toLocaleString()
  };

  notes.push(note);
  render();
  noteInput.value = "";
});

// Show the notes when the page first loads
render();