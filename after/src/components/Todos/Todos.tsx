import { useGetTodos } from '@/hooks/todos/useGetTodos';
import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './Todos.module.scss';

export const Todos: React.FC = () => {
  const { todos } = useGetTodos({
    order: 'desc',
  });

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={todo.id}>{todo.title}</Link>
        </div>
      ))}
    </>
  );
};
