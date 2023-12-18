import React from 'react'
import '../Header/header.scss'
import user from '../../assets/picter.png';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <div>Movie App</div>
      </Link>
      <div className="serach-img">
        <SearchBar/>
        <img src={user} />
      </div>
    </div>
  )
}

export default Header;