import TodoItem from './TodoItem';

const TodoList = ({ title, todos, setTodos }) => {
  console.log(todos);
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
