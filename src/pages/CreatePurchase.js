import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreatePurchase = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/createRequest');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
//display PR form
    return (
        <div>
            <h1>Create Purchase Request</h1>
            <div className='card-body'>
                <form>
                    <div className='form-group mb-1'>
                    Name <input name="Name" type="name" required/><br></br>
                    Date <input name="date" type="date" required/><br></br>
                    Position <input name="position" type="text" required/><br></br>
                    Support <input name="support" type="text" required/><br></br>
                    Payment Term <input name="payment_term" type="int" required/><br></br>
                    EDD <input name="edd" type="text" required/><br></br>
                    </div>

                    <div className='form-group mb-1'>
                        <br></br>
                        <h4>Item Details</h4>
                        Item Code <input name="item_code" type="text" required/><br></br>
                        Description <input name="description" type="text" required/><br></br>
                        Supplier <input name="supplier" type="text" required/><br></br>
                        Quantity <input name="quantity" type="int" required/><br></br>
                        Claim <input name="claim" type="int" required/><br></br>
                        Unit Price <input name="unit_price" type="number" required/><br></br>
                        Total Price <input name="total_price" type="number" required/><br></br>
                        Reason <input name="reason" type="text" required/><br></br>
                        Attachment <input name="attachment" type="file" required/><br></br>
                    </div>

                    <div>
                    <br></br>
                    
                        <button className='btn btn-primary' type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePurchase;
