import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Purchase = () => {
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
//display list of purchase req
    return (
        <div>
            <h1>Purchase Request List</h1>
            <ul>
                {data.map(purchase => (
                    <li key={purchase.id}>{purchase.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Purchase;
