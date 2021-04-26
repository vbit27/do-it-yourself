import React from 'react';
import Form from './Form';
import Todo from './Todo';

const TodoList = () => {
  const [list, setList] = React.useState<
    Array<{
      key: number;
      value: string;
    }>
  >([]);

  const addTodos = (todo: any) => {
    const newTodos = [todo, ...list];
    setList(newTodos);
    console.log(list);
  };

  function handleDelete(key: number) {
    setList(list.filter((x) => x.key !== key));
  }

  function handleEdit(todoId: number, newValue: string) {
    let updatedToDos = list.map((todo) =>
      todo.key === todoId
        ? {
            ...todo,
            value: newValue,
          }
        : todo
    );

    setList(updatedToDos);
  }

  return (
    <div>
      <Form onSubmit={addTodos} />
      <Todo list={list} deleteTask={handleDelete} editTask={handleEdit} />
    </div>
  );
};

export default TodoList;
