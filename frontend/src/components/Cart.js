import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../store/cartSlice";
import { useState } from "react";

const Cart = (props) => {
    const { items } = props;
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [summary, setSummary] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const deleteItemHandler = (id) => {
        dispatch(removeItem(id));
    };

    const placeOrder = () => {
        const freqMap = new Map();
        let total = 0;

        for (let item of items) {


            const key = item._id;
            if (freqMap.has(key)) {
                const existing = freqMap.get(key);
                existing.quantity += 1;
            } else {
                freqMap.set(key, {
                    id: item.id,
                    name: item.name,
                    price: Number(item.price),
                    quantity: 1,
                });
            }
        }

        const summaryArray = Array.from(freqMap.values());
        summaryArray.forEach((item) => {
            total += item.price * item.quantity;
        });
        console.log(total);

        setSummary(summaryArray);
        setTotalPrice(total);
        setIsOpen(true);
    };

    const closeOverlay = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="flex flex-row-reverse justify-between">
                {/* Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto">
                            <h2 className="text-2xl font-semibold mb-4 text-center">Order Summary</h2>
                            {summary.map((item, index) => (
                                <div key={index} className="mb-3 text-left border-b pb-2">
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-sm text-gray-700">
                                        Quantity: {item.quantity} × ₹{item.price}
                                    </div>
                                    <div className="text-sm font-semibold text-black">
                                        Subtotal: ₹{item.price * item.quantity}
                                    </div>
                                </div>
                            ))}
                            <div className="font-bold text-lg text-right mt-4">Total: ₹{totalPrice}</div>
                            <button
                                onClick={closeOverlay}
                                className="mt-6 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                <button
                    className="my-2 p-2 bg-green-500 text-white text-end mx-6"
                    onClick={placeOrder}
                >
                    Place Order
                </button>

                <button
                    className="my-2 p-2 bg-red-500 text-white text-end mx-6"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>

            {items.length === 0 && (
                <h1 className="text-center text-xl mt-4">Cart is Empty. Add to Cart</h1>
            )}

            {items.map((e) => (
                <div
                    className="bg-gray-50 flex justify-center w-2/4 m-auto my-4 shadow rounded"
                    key={e?.id}
                >
                    <div className="text-sm p-4 w-8/12">
                        <div className="font-medium text-lg">{e?.name}</div>
                        <div className="font-semibold text-gray-800">{e?.price} ₹</div>
                        <div className="font-thin text-gray-600">{e?.category}</div>
                        <button
                            className="bg-red-400 mt-2 px-3 py-1 rounded text-white hover:bg-red-500"
                            onClick={() => deleteItemHandler(e.id)}
                        >
                            Remove
                        </button>
                    </div>
                    <div className="w-4/12 flex items-center justify-center">
                        <img
                            className="rounded-md max-h-32 object-cover p-2"
                            src={e.imageUrl}
                            alt="Food Item"
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cart;
