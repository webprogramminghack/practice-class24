import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  });
  // return <Navigate to='/' />;
  return <h1>404 Page</h1>;
};
