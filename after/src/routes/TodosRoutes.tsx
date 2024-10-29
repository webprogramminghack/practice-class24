import { Todo } from '@/components/Todo';
import { Todos } from '@/components/Todos';
// import TodosLayout from '@/layout/TodosLayout';
import { Route, Routes } from 'react-router-dom';

export default function TodosRoutes() {
  return (
    <>
      {/* <TodosLayout /> */}
      <Routes>
        {/* <Route element={<TodosLayout />}> */}
        <Route index element={<Todos />} />
        <Route path=':id' element={<Todo />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}
