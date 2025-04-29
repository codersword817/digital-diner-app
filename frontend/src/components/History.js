import axios from 'axios';
import React, { useEffect, useState } from 'react';

const History = () => {
    const user = sessionStorage.getItem('user');
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/api/v2/history/${user}`);
            setData(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Purchase History</h1>

            {data?.length > 0 ? (
                <div className="grid gap-6 max-w-3xl mx-auto">
                    {data.map((entry, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border">
                            <h2 className="text-xl font-semibold mb-4 text-gray-700">Order #{index + 1}</h2>
                            <ul className="space-y-2">
                                {entry.items.map((item, idx) => (
                                    <li key={idx} className="flex justify-between text-gray-600">
                                        <span>{item.itemName}</span>
                                        <span className="font-medium">x{item.quantity}</span>
                                    </li>
                                ))}
                            </ul>
                            <hr className="my-4" />
                            <div className="text-right text-lg font-bold text-green-600">
                                Total: ₹{entry.totalAmount}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 text-lg">No purchase history found.</div>
            )}
        </div>
    );
};

export default History;
