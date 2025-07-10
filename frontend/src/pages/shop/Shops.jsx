import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast"

const Shops = () => {
    const [shops, setShops] = useState([]);

    const fetchData = async () => {
        try {
            const rawResponse = await fetch("http://localhost:3000/shop/all", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            const response = await rawResponse.json();
            setShops(response.data);
        } catch (error) {
            console.log("error : ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">Shops</h1>
                <Link to="/shop/create" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
                    Create Shop
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {shops.map((item) => {
                    return (
                        <div key={item._id} className="flex flex-col border border-gray-300 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 bg-white">
                            <img src={item.image} alt={item.name} className="h-48 w-full object-cover rounded-t-lg" />
                            <h2 className="text-2xl font-semibold text-gray-800 mt-4">{item.name}</h2>
                            <h3 className="text-lg text-gray-600 mt-2">Address: {item.address}</h3>
                            <h5 className="text-md text-gray-500 mt-1">Phone: {item.phone}</h5>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Shops;
