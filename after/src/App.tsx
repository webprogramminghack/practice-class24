import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodosRoutes from './routes/TodosRoutes';
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
// import { Todos } from './components/Todos';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos/*' element={<TodosRoutes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
