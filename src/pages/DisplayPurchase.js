import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const DisplayPurchase = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/listPurchaseReq');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Purchase Request List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(purchase => (
                        <tr key={purchase.id}>
                            <td>{purchase.name}</td>
                            <td>{purchase.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to={"PRform"} className="btn btn-primary btn-sm float-end">Create New PR</Link>
        </div>
    );
};

export default DisplayPurchase;
