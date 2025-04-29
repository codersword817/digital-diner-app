import React from 'react'

const Item = (props) => {
    const { resData } = props;
    return (
        <div>
            <div className="container h-[23rem] w-[16rem] flex flex-col m-4 p-4 border-2 border-solid shadow-md bg-blue-50 hover:bg-blue-300 ">
                <img
                    className="food-item h-2/5 rounded-sm"
                    src={resData.imageUrl}
                    alt="food-item-img"
                />
                <div className=" font-bold text-center">{resData.name}</div>
                <div className="text-center">{resData.category}</div>
                <div className="text-center">
                    {resData.rating}⭐
                </div  >
                <h4 className='text-center' >₹{resData.price} </h4>
                <div className='flex items-center justify-center' >
                    <button className='p-2 mx-2 bg-red-400' >REMOVE</button>
                    <button className='p-2 bg-green-400' >ADD</button>
                </div>
            </div>
        </div>
    )
}

export default Item
