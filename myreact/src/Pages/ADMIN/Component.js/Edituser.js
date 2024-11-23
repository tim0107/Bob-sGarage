import React, { useState, useEffect } from "react";
import axios from "axios";
import "./editUser.css"; // Ensure your CSS file is linked

export default function EditUser() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/api/admin/')
            .then((response) => {
                console.log('Fetched users successfully', response.status);
                setData(response.data);
            })
            .catch((error) => {
                console.log("Failed to load data", error.message);
            });
    }, []);

    function handleChangeUser(userId, currentRole) {
        const newRole = currentRole === 'user' ? 'admin' : 'user';

        axios
            .put(`http://localhost:3001/api/admin/${userId}`, { role: newRole })
            .then((response) => {
                console.log(`User role updated to ${newRole}`, response.status);

                const updatedData = data.map(user =>
                    user.id === userId ? { ...user, role: newRole } : user
                );
                setData(updatedData);
            })
            .catch((error) => {
                console.log("Failed to update user role", error.message);
            });
    }

    return (
        <div className="edit-user-container">
            <h1 className="edit-user-header">Manage User Roles</h1>
            <table className="edit-user-table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.role}</td>
                            <td>
                                <button
                                    className="edit-user-button"
                                    onClick={() => handleChangeUser(item.id, item.role)}
                                >
                                    Switch to {item.role === 'user' ? 'admin' : 'user'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
