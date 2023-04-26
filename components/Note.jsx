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
    <div className="bg-white rounded-lg shadow p-4 flex items-center">
      <input
        type="checkbox"
        checked={note.isDone}
        onChange={handleCheck}
        className="mr-4"
      />
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-gray-300 border rounded-lg flex-1 mr-4 px-2 py-1"
        />
      ) : (
        <div className={`flex-1 ${note.isDone ? 'line-through text-gray-400' : ''} mr-4`}>{note.text}</div>
      )}
      {isEditing ? (
        <button
          onClick={handleSave}
          className="bg-green-500 text-white rounded-lg px-4 py-2"
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleEdit}
          className="bg-gray-300 text-gray-700 rounded-lg px-4 py-2"
        >
          Edit
        </button>
      )}
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white rounded-lg px-4 py-2"
      >
        Delete
      </button>
    </div>
  );
}

export default Note;