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
    <div class='flex flex-col'>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        class="w-80 border-b-2 border-gray-500 text-black"
        placeholder="Enter your task here"
        />
      <button
        type="submit"
        class={`ml-2 border-2 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isButtonDisabled}
        >
        Add
      </button>
    </form>
        </div>
  );
}

export default AddNoteForm;