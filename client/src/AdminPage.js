// src/AdminPage.js

import React from 'react';
import AdminUI from './AdminUI';

const AdminPage = () => {
    return (
        <div>
            {/* Az eddigi admin oldal tartalma */}
            <h1>Admin Page Content</h1>

            {/* Shadcn UI az admin oldalon */}
            <AdminUI />
        </div>
    );
};

export default AdminPage;
