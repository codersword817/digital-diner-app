import React, { useEffect, useState } from 'react'
import Item from './Item';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [curr_data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const fetchData = async () => {
        fetch('https://digital-diner-app-backend.onrender.com/api/v2/items')
            .then(response => {
                if (!response.ok) {
                    response.text().then(text => console.error('Error response:', text));
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // console.log(data);
                setData(data);
                setFilteredData(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }

    useEffect(() => {
        fetchData();
    }, []);
    const searchHandler = (e) => {
        setSearchData(e.target.value.toLowerCase());
    };

    const searchButtonHandler = () => {
        setData(curr_data);
        setFilteredData(
            curr_data.filter((ele) =>
                ele.name?.toLowerCase().includes(searchData) || ele.category?.toLowerCase().includes(searchData)
            )
        );
    };


    return (
        <>
            <div className=" p-4 flex justify-center items-center bg-blue-100 box-border ">
                <input
                    className="mr-6 w-[24rem] p-3 border-black border-2"
                    type="text"
                    name="search"
                    id="search-text"
                    placeholder="Order your Fav Food at ur Nearby Stores"
                    value={searchData}
                    onChange={searchHandler}
                />
                <button
                    className=" rounded-md bg-blue-400 px-4 py-2 mr-2 text-white "
                    id="search-button"
                    onClick={searchButtonHandler}
                >
                    Search
                </button>
                <button
                    id="filter"
                    className="btn bg-blue-200 p-2 m-2 rounded-sm text-blue-700 hover:text-blue-950"
                    onClick={() => {
                        const data = filteredData.filter((res) => res.rating > 4.5);
                        setFilteredData(data);
                    }}
                >
                    top-rated places
                </button>
            </div>
            <div>
                <div className=" flex flex-wrap justify-around bg-blue-100">
                    {filteredData.map((e, idx) => (
                        <NavLink key={idx} >
                            <Item resData={e}></Item>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
