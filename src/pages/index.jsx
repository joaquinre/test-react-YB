import { useState } from 'react';
import NoteList from '../../components/NoteList';
import AddNoteForm from '../../components/AddNoteForm';

const initialNotes = [
  { id: '1', text: 'Buy milk', isDone: false },
  { id: '2', text: 'Take out the trash', isDone: false },
  { id: '3', text: 'Do laundry', isDone: true },
];

export default function Home() {
  const [notes, setNotes] = useState(initialNotes);

  const handleAddNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: Date.now().toString() }]);
  };

  const handleEditNote = (editedNote) => {
    setNotes(
      notes.map((note) =>
        note.id === editedNote.id ? { ...note, ...editedNote } : note
      )
    );
  };

  const handleDeleteNote = (deletedNoteId) => {
    setNotes(notes.filter((note) => note.id !== deletedNoteId));
  };

  const handleCheckNote = (checkedNote) => {
    setNotes(
      notes.map((note) =>
        note.id === checkedNote.id ? { ...note, isDone: checkedNote.isDone } : note
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-8">My Notes</h1>
      <AddNoteForm onAdd={handleAddNote} />
      <NoteList
        notes={notes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
        onCheck={handleCheckNote}
      />
    </div>
  );
}
