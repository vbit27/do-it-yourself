const Overview = (props: any) => {
  const { toDos } = props;

  return (
    <div>
      {toDos.map((task: any) => (
        <div>
          <p key={task.id}>{task.title}</p>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Overview;
