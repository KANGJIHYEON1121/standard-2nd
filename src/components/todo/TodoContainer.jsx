import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '할일 제목 1',
      content: '할일 내용 1',
      isDone: false,
    },
    {
      id: 2,
      title: '할일 제목 2',
      content: '할일 내용 2',
      isDone: true,
    },
  ]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <main>
      <TodoForm setTodos={setTodos} />
      <div>
        <TodoList title="Working" todos={workingTodos} setTodos={setTodos} />
        <TodoList title="Done" todos={doneTodos} setTodos={setTodos} />
      </div>
    </main>
  );
};

export default TodoContainer;
