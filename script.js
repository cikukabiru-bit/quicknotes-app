// Select the elements
const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const errorMessage = document.querySelector("#error-message");
const searchInput = document.querySelector("#search-input");
const noteCount = document.querySelector("#note-count");
const notesList = document.querySelector("#notes-list");

// The notes array (loaded from localStorage if there are saved notes)
let notes = [];

const savedNotes = localStorage.getItem("notes");
if (savedNotes !== null) {
  notes = JSON.parse(savedNotes);
}

// Save the notes array to localStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Update the note count message
function updateCount() {
  if (notes.length === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = "You have " + notes.length + " notes.";
  }
}

// Delete one note by its id
function deleteNote(id) {
  notes = notes.filter(function (note) {
    return note.id !== id;
  });
  saveNotes();
  render();
}

// Rebuild the list from the notes array
function render() {
  notesList.textContent = "";

  const searchText = searchInput.value.trim().toLowerCase();

  const visibleNotes = notes.filter(function (note) {
    return note.text.toLowerCase().includes(searchText);
  });

  if (searchText !== "" && visibleNotes.length === 0) {
    const message = document.createElement("li");
    message.classList.add("empty-message");
    message.textContent = "No notes match your search.";
    notesList.appendChild(message);
  }

  for (const note of visibleNotes) {
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
    deleteBtn.addEventListener("click", function () {
      deleteNote(note.id);
    });

    li.appendChild(text);
    li.appendChild(label);
    li.appendChild(date);
    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  }

  updateCount();
}

// Add a note when the form is submitted
noteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = noteInput.value.trim();

  if (text === "") {
    errorMessage.textContent = "Please type a note first.";
    return;
  }

  if (text.length > 200) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    return;
  }

  errorMessage.textContent = "";

  const note = {
    id: Date.now(),
    text: text,
    category: noteCategory.value,
    createdAt: new Date().toLocaleString()
  };

  notes.push(note);
  saveNotes();
  render();
  noteInput.value = "";
});

// Search as the user types
searchInput.addEventListener("input", function () {
  render();
});

// Show the notes when the page first loads
render();