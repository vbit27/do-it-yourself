import React from 'react';
import './App.css';

const App = (props: any) => {
  const [input, setInput] = React.useState<string>('');
  const [toDos, setTodos] = React.useState<Array<string>>([]);

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...toDos, input]);
    setInput('');
    console.log(toDos);
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
