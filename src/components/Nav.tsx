import '@/styles/Nav.css'

import React from 'react';
import Search from '@/components/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Supplier } from './ListSuppliers';

interface NavProps {
  onSearch: (results: Supplier[]) => void;
}

const Nav: React.FC<NavProps> = ({ onSearch }) => {
  return (
    <nav className='nav'>
      <div className='nav-profile'>
        <h1>Hi there</h1>
        <figure>
          <FontAwesomeIcon icon={faUser} />
          {/* <img src="" alt="img text" /> */}
        </figure>
      </div>
      <Search onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;