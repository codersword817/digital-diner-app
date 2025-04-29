import React, { useEffect } from 'react'

const Home = () => {

    const fetchData = async () => {
        fetch('http://localhost:4000/items')
            .then(response => {
                if (!response.ok) {
                    // Log response body if there's an error
                    response.text().then(text => console.error('Error response:', text));
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>

        </div>
    )
}

export default Home
