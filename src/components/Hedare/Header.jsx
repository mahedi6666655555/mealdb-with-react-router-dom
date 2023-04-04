import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between h-20 px-20  bg-gray-800 text-white w-full items-center  '>
                <Link to="/" className='text-2xl font-bold' >Free Food</Link>
                <ul className='flex '>
                    <Link className='pl-5 hover:text-red-400 transition-all' to="/">Home</Link>
                    <Link className='pl-5 hover:text-red-400 transition-all' to="/foods">foods</Link>
                    <Link className='pl-5 hover:text-red-400 transition-all' to="/About">About</Link>
                    <Link className='pl-5 hover:text-red-400 transition-all' to="/Order">Order</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;