import React from 'react';
import { Outlet } from 'react-router-dom';
import TNavBar from '../Teacher/TNavBAr/TNavBar';

const TeacherLayout = () => {
    return (
        <div>
            <TNavBar></TNavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default TeacherLayout;