import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ContentFeedback() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/api/feedbacks')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error.response ? error.response.data : error.message);
                setError('Unable to fetch feedback data.');
            });
    }, []);

    return (
        <div className="feedback-container">
            <h1 className="feedback-header">User Feedback</h1>
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                <table className="feedback-table">
                    <thead>
                        <tr>
                            <th className="th-user">User</th>
                            <th className="th-feedback">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="td-user">{item.username}</td>
                                <td className="td-feedback">{item.content}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
