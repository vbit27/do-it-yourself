import React, { useState, useEffect } from 'react';
import './App.css';

type Events = React.FormEvent<HTMLInputElement>;

const App = (props: any) => {
  const [input, setInput] = useState('');

  const updateValue = (e: Events) => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Do-It-Yourself</h1>
      <p>{input}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" value={input} onChange={updateValue} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
