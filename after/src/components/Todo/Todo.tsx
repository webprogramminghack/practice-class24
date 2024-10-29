import React from 'react';
import { Link, useParams } from 'react-router-dom';

type TodoParam = {
  id: string;
};

export const Todo: React.FC = () => {
  const { id } = useParams<TodoParam>();

  return (
    <div>
      <Link to='..'>Back</Link>
      <h1>Todo - {id}</h1>
    </div>
  );
};
