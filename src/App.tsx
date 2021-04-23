import React from 'react';
import './App.css';
import uniqid from 'uniqid';
import Overview from './components/Overview';
import Greeting from './Greeting';

export interface Task {
  id: string;
  title: string;
}

const App = () => {
  const [input, setInput] = React.useState<string>('');
  const [toDos, setTodos] = React.useState<Array<Task>>([]);
  const [logIn, setLogIn] = React.useState<boolean>(false);

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...toDos, { id: uniqid(), title: input }]);
    console.log(toDos);
    setInput('');
  };

  const deleteTask = (id: string) => {
    const newList = toDos.filter((taks) => taks.id !== id);
    setTodos(newList);
  };

  return (
    <div>
      <h1>Do-It-Yourself</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" value={input} onChange={updateValue} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setLogIn(!logIn)}>
        {logIn ? 'Log Out' : 'Log In'}
      </button>
      <Greeting />
      <Overview toDos={toDos} onClick={(id: string) => deleteTask(id)} />
    </div>
  );
};

export default App;
