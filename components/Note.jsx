import { useState } from 'react';

function Note({ note, onEdit, onDelete, onCheck }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(note.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit({ ...note, text });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(note.id);
  };

  const handleCheck = () => {
    onCheck({ ...note, isDone: !note.isDone });
  };

  return (
    <div className="">
      <input
        type="checkbox"
        checked={note.isDone}
        onChange={handleCheck}
        className=""
      />
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className=""
        />
      ) : (
        <div className={`flex-1 ${note.isDone ? 'line-through text-gray-400' : ''} mr-4`}>{note.text}</div>
      )}
      {isEditing ? (
        <button
          onClick={handleSave}
          className=""
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleEdit}
          className="mr-4"
        >
          Edit
        </button>
      )}
      <button
        onClick={handleDelete}
        className=""
      >
        Delete
      </button>
    </div>
    
  );
}

export default Note;