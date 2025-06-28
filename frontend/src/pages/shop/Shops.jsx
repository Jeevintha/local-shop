import { useEffect, useState } from "react"

const Shops = () => {
    const [shops, setShops] = useState([]);

    const fetchData = async () => {
        try {
            const rawResponse = await fetch("http://localhost:3000/shop/all", {
                headers: {
                    authorization : `Bearer ${localStorage.getItem("token")}`
                }
            });
            const response = await rawResponse.json();
            setShops(response.data);
        } catch (error) {
            console.log("error : ",error)
            alert(error)
        }
       
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Shops</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {shops.map((item) => {
                    return (
                        <div key={item._id} className="flex flex-col border-2 border-gray-300 rounded-lg p-4 shadow-lg">
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <h3 className="text-lg text-gray-700">Address: {item.address}</h3>
                            <h5 className="text-md text-gray-500">Phone: {item.phone}</h5>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Shops;
