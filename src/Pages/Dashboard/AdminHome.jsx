import React from 'react';
import useAuth from '../../hooks/useAuth';

const AdminHome = () => {
    const {user}=useAuth()
    return (
        <div>
            <h4 className='text-lg font-bold'>Hi, {user?.displayName}</h4>
            <h2 className='text-4xl'>Welcome to Admin Dashboard</h2>
        </div>
    );
};

export default AdminHome;<h2>Hi</h2>