import React from 'react';
import { Outlet } from 'react-router-dom';
import SNavBar from '../Student/SNavBar/SNavBar';

const StudentLayout = () => {
    return (
        <div>
            <SNavBar></SNavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default StudentLayout;