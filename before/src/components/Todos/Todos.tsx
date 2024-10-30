import { useGetTodos } from '@/hooks/todos/useGetTodos';
import React from 'react';
// import styles from './Todos.module.scss';

export const Todos: React.FC = () => {
  const { todos, isFetching, queryKey } = useGetTodos({
    order: 'desc',
  });

  console.log(todos, isFetching, queryKey);

  return <h1>Todos</h1>;
};
