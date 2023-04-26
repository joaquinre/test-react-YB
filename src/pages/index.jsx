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
    <div class="w-full h-screen bg-gray-100 pt-8">
      <div class="bg-white p-3 max-w-md mx-auto">
          <h1 className="text-center text-3xl p-5">My Notes</h1>
          <div className='mx-auto w-[400px]'>
            <AddNoteForm onAdd={handleAddNote}/>
            <NoteList
              notes={notes}
              onEdit={handleEditNote}
              onDelete={handleDeleteNote}
              onCheck={handleCheckNote}
            />
          </div>
      </div>
    </div>
  );
}
