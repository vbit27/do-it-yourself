import React, { FormEvent, useState } from 'react';

function Form(props: any) {
  const [input, setInput] = useState('');

  function updateInput(e: any) {
    setInput(e.target.value);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    props.onSubmit({ key: Math.random(), value: input });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <div>
          <input
            type="text"
            name="firstName"
            value={input}
            onChange={updateInput}
          />
          <br />
          <button type="submit">Update</button>{' '}
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="firstName"
            value={input}
            onChange={updateInput}
          />
          <br />
          <button type="submit">Submit</button>{' '}
        </div>
      )}
    </form>
  );
}

export default Form;
