import React from 'react'
import Note from './Note'

function NoteList({ notes, onEdit, onDelete, onCheck}) {
  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onCheck={onCheck} 
      />
      ))}
    </div>
  )
}

export default NoteList