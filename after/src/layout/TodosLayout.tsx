import { Link, Outlet } from 'react-router-dom';

export default function TodosLayout() {
  return (
    <>
      <Link to='/todos/1'>Todo 1</Link>
      <Link to='/todos/2'>Todo 2</Link>
      <Outlet />
    </>
  );
}
