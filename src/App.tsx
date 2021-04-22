import React from 'react';
import './App.css';
import Overview from './components/Overview';

export interface Task {
  id: number;
  title: string;
}

const App = (props: object) => {
  const [input, setInput] = React.useState<string>('');
  const [toDos, setTodos] = React.useState<Array<Task>>([]);

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...toDos, { id: Math.random(), title: input }]);
    setInput('');
  };

  return (
    <div>
      <h1>Do-It-Yourself</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" value={input} onChange={updateValue} />
        <button>Submit</button>
      </form>
      <Overview toDos={toDos} />
    </div>
  );
};

export default App;
