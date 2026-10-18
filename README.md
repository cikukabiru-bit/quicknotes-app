# quicknotes-app

QuickNotes is a simple note-taking web app built with HTML, CSS and JavaScript for the PLP Web Foundations course (Project 1). With quicknotes, you can write short notes, put each one in a category (Personal, Work or Study), search through them, edit or delete them, or clear them all at once. Your notes stay saved in your browser even after you refresh or close the page.

## Features

- Add a note with a category: Personal, Work or Study
- Each category has its own colour on the note card
- Each note shows its text, category and the date and time it was added
- Validation: empty notes and notes over 200 characters show an error message
- Edit a note's text
- Delete a single note
- Clear all notes at once, with a confirmation message first (bonus feature)
- Search notes as you type (not case-sensitive)
- Note count that updates automatically ("You have 1 note.", "You have 3 notes.")
- Notes are saved in localStorage, so they survive a page refresh
- Responsive layout: the form stacks vertically on small screens

## How to use it

- Add a note: type your note, choose a category and click **Add Note**.
- Edit a note: click **Edit** on the note, change the text in the pop-up box and click **OK**. Click **Cancel** to keep the note as it was. The same rules apply as when adding: the note cannot be empty or longer than 200 characters.
- Delete a note: click **Delete** on the note you want to remove.
- Clear all notes: click **Clear all** at the bottom of the list. A message asks "Delete all notes?". Click **OK** to delete every note, or **Cancel** to keep them.
- Search: type in the search box to show only the notes that contain those words. If nothing matches, the list shows "No notes match your search."

## How to run it locally

1. Clone the repository:

```bash
   git clone https://github.com/cikukabiru-bit/quicknotes-app.git
```

2. Open the `quicknotes-app` folder.
3. Open `index.html` in your browser, or right-click it in VS Code and choose **Open with Live Server**.

No installation is needed.

## What I learned

- How to keep the notes in an array of objects and use a `render()` function to rebuild the list from that array every time something changes.
- How to create elements with `createElement` and fill them with `textContent`, and why `innerHTML` should not be used for text the user types.
- How to combine `if...else` with `classList.add` and `classList.remove` to change styles depending on the data.
- How to save data with `localStorage` using `JSON.stringify` and load it back with `JSON.parse`.
- How to use `event.preventDefault()` to stop a form from reloading the page.
- How to use `prompt()` to edit a note and `confirm()` to ask before deleting all notes.
- How to commit after each task with a clear message so the Git history shows how the project was built.
