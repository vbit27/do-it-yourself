import React, { useEffect } from 'react';
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
    console.log(toDos);
  };

  useEffect(() => {
    setInput('');
  }, [toDos]);

  return (
    <div>
      <h1>Do-It-Yourself</h1>
      <p>{input}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" value={input} onChange={updateValue} />
        <button>Submit</button>
      </form>
      <ul>
        {toDos.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
