import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast"

const ShopsOwned = () => {
    const [shops, setShops] = useState([])
    const [editShop, setEditShop] = useState(null)
    const [editForm, setEditForm] = useState({
        name: '',
        address: '',
        phone: '',
        image: ''
    })

    const fetchOwnedShops = async () => {
        const raw = await fetch("http://localhost:3000/shop/owned", {
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const response = await raw.json()
        setShops(response.data)
    }

    useEffect(() => {
        fetchOwnedShops()
    }, [])

    const handleDelete = async (id) => {
        try {
            const isConfirm = confirm("Are You Sure You Want To Delete?")
            if (!isConfirm) {
                toast.error("Shop Deletion Cancelled")
                return
            }
            const res = await fetch(`http://localhost:3000/shop/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = await res.json()
            toast.success(data.message)
            fetchOwnedShops()
        } catch (error) {
            console.log("error : ", error)
            toast.error("Error deleting shop")
        }
    }

    const handleEdit = (shop) => {
        setEditShop(shop._id)
        setEditForm({
            name: shop.name,
            address: shop.address,
            phone: shop.phone,
            image: shop.image
        })
    }

    const handleUpdate = async () => {
        try {
            const res = await fetch(`http://localhost:3000/shop/${editShop}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(editForm)
            })
            const data = await res.json()
            toast.success(data.message)
            setEditShop(null)
            fetchOwnedShops()
        } catch (error) {
            toast.error("Update failed")
            console.log(error)
        }
    }

    return (
        <div className="container mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">Shops</h1>
                <Link to="/shop/create" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
                    Create Shop
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {shops.map((item) => (
                    <div key={item._id} className="flex flex-col border border-gray-300 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 bg-white">
                        <img src={item.image} alt={item.name} className="h-48 w-full object-cover rounded-t-lg" />
                        <h2 className="text-2xl font-semibold text-gray-800 mt-4">{item.name}</h2>
                        <h3 className="text-lg text-gray-600 mt-2">Address: {item.address}</h3>
                        <h5 className="text-md text-gray-500 mt-1">Phone: {item.phone}</h5>
                        <div className="flex gap-4 mt-4">
                            <button 
                                onClick={() => handleEdit(item)} 
                                className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 transition duration-200"
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => handleDelete(item._id)} 
                                className="bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-700 transition duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Modal */}
            {editShop && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                        <h2 className="text-2xl font-semibold mb-4">Edit Shop</h2>
                        <input
                            type="text"
                            value={editForm.name}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            placeholder="Shop Name"
                            className="w-full border px-4 py-2 mb-3 rounded"
                        />
                        <input
                            type="text"
                            value={editForm.address}
                            onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                            placeholder="Address"
                            className="w-full border px-4 py-2 mb-3 rounded"
                        />
                        <input
                            type="text"
                            value={editForm.phone}
                            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                            placeholder="Phone"
                            className="w-full border px-4 py-2 mb-3 rounded"
                        />
                        <input
                            type="text"
                            value={editForm.image}
                            onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                            placeholder="Image URL"
                            className="w-full border px-4 py-2 mb-4 rounded"
                        />
                        <div className="flex justify-end gap-4">
                            <button onClick={() => setEditShop(null)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
                            <button onClick={handleUpdate} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShopsOwned
