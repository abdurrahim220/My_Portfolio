import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* {logo} */}
        <Link to=''>
          <img src={logo} alt=''/>
        </Link>
        <button className='btn btn-sm'>Work With me</button>
      </div>
    </div>
    </header>;
};

export default Header;
