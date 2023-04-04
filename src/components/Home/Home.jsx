import React from 'react';
import App from '../../App';
import { Outlet } from 'react-router-dom';
import Fetch from '../fetch/Fetch';

const Home = () => {
    return (
        <div>
                
            <App></App>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;