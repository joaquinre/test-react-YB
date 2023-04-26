import { useState } from 'react';

function AddNoteForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim() === '') {
      return
    }
    onAdd({ text, isDone: false });
    setText('');
  };
  const isButtonDisabled = text.trim() === ''
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-gray-300 border rounded-lg flex-1 mr-4 px-2 py-1"
      />
      <button
        type="submit"
        className={`bg-blue-500 text-white rounded-lg px-4 py-2 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isButtonDisabled}
      >
        Add
      </button>
    </form>
  );
}

export default AddNoteForm;