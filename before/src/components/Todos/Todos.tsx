import { useGetTodos } from '@/hooks/todos/useGetTodos';
import React from 'react';
import TrashIcon from '@/assets/svg/icon-trash.svg';
import styles from './Todos.module.scss';

export const Todos: React.FC = () => {
  const { todos, isFetching, queryKey } = useGetTodos({
    order: 'desc',
  });

  console.log(todos, isFetching, queryKey);

  return (
    <div className={styles.todoContainer}>
      {/* <form onSubmit={onSubmitForm}>
        <input
          type='text'
          value={newTodoText}
          className={styles.newTodoInput}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
      </form>
      <ul className={styles.todos}>
        {isFetching && <li>Data is Fetching...</li>}
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='text'
              defaultValue={todo.title}
              data-id={todo.id}
              onKeyDown={handleUpdateTodo}
            />
            <TrashIcon
              className={styles.deleteIcon}
              data-id={todo.id}
              onClick={handleDeleteTodo}
            />
          </li>
        ))}
      </ul> */}
    </div>
  );
};
