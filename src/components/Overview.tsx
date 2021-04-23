const Overview = (props: any) => {
  const { toDos } = props;

  function clicked() {
    console.log('yas');
  }

  function componenet() {
    return;
  }

  return (
    <div>
      {toDos.map((task: any, index: number) => (
        <div key={task.id}>
          <span>{index + 1}</span>
          <p>{task.title}</p>
          <button onClick={() => props.onClick(task.id)}>Delete</button>
          <button onClick={clicked}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Overview;
