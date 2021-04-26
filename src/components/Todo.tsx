import React, { useState } from 'react';
import Form from './Form';

function Todo(props: any) {
  const [edit, setEdit] = useState({ key: null, value: '' });

  const { list, deleteTask, editTask } = props;

  const submitUpdate = (value: any) => {
    editTask(edit.key, value.value);
    setEdit({
      key: null,
      value: '',
    });
  };

  if (edit.key) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div>
      {list.map((task: any) => (
        <div key={task.key}>
          {task.value}
          <button onClick={() => deleteTask(task.key)}>Delete</button>
          <button onClick={() => setEdit({ key: task.key, value: task.value })}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
