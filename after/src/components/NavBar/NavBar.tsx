import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => {
              return isActive ? `${styles.active}` : '';
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to='/todos'
            className={({ isActive }) => {
              return isActive ? `${styles.active}` : '';
            }}
          >
            Todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
