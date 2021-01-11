import React from 'react';
import { Link } from 'react-router-dom';

const AdminScreen = () => {
    return (
        <div className="top">
            <div className="float">
                <button >Logout</button>
            </div>
            <div className="center">
                <h1>Home Page</h1>
                <button><Link to="/userlist">View Users</Link></button>
            </div>
        </div>


    );
}

export default AdminScreen;
