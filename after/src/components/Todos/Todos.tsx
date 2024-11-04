import { useGetTodos } from '@/hooks/todos/useGetTodos';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
// import styles from './Todos.module.scss';

export const Todos: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const completedParam = searchParams.get('completed');

  const completed =
    completedParam === 'true'
      ? true
      : completedParam === 'false'
      ? false
      : undefined;

  const { todos } = useGetTodos({
    order: 'desc',
    completed,
  });

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ completed: e.target.checked.toString() });
  };

  const handleReset = () => {
    setSearchParams({});
  };

  return (
    <>
      <label htmlFor='completed'>Is Completed?</label>
      <input
        type='checkbox'
        name='completed'
        id='completed'
        checked={completed}
        onChange={handleCheckbox}
      />
      <button onClick={handleReset}>Reset</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={todo.id}>{todo.title}</Link>
        </div>
      ))}
    </>
  );
};
