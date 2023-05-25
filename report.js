// Retrieve saved notes from local storage
function getNotes() {
  return JSON.parse(localStorage.getItem('notes')) || [];
}

// Save notes to local storage
function saveNotes(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Add a new note
function addNote() {
  const noteText = document.getElementById('note-text').value;
  if (noteText.trim() === '') {
    alert('Please enter a note!');
    return;
  }

  const notes = getNotes();
  notes.push(noteText);
  saveNotes(notes);

  displayNotes();
  document.getElementById('note-text').value = '';
}

// Delete a note
function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  saveNotes(notes);

  displayNotes();
}

// Display all notes
function displayNotes() {
  const notes = getNotes();
  const container = document.getElementById('note-container');
  container.innerHTML = '';

  notes.forEach((note, index) => {
    const noteElem = document.createElement('div');
    noteElem.className = 'note';

    const noteTextArea = document.createElement('textarea');
    noteTextArea.value = note;
    noteTextArea.addEventListener('input', () => {
      notes[index] = noteTextArea.value;
      saveNotes(notes);
    });

    noteTextArea.addEventListener('keydown', function(event) {
      if (event.keyCode === 9) {
        event.preventDefault();
      }
    });

    const deleteButton = document.createElement('i');
    deleteButton.className = 'fas fa-trash-alt';
    deleteButton.addEventListener('click', () => {
      deleteNote(index);
    });

    const editButton = document.createElement('i');
    editButton.className = 'fas fa-edit';
    editButton.addEventListener('click', () => {
      noteTextArea.focus();
    });

    const noteIcons = document.createElement('div');
    noteIcons.className = 'note-icons';
    noteIcons.appendChild(editButton);
    noteIcons.appendChild(deleteButton);

    noteElem.appendChild(noteTextArea);
    noteElem.appendChild(noteIcons);
    container.appendChild(noteElem);
  });
}

// Load initial notes and set up event listeners
function initialize() {
  displayNotes();
  document.getElementById('add-button').addEventListener('click', addNote);
}

initialize();
