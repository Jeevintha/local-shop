import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { token } = useAuthStore();

  const fetchProducts = async () => {
    try {
      const rawResponse = await fetch(import.meta.env.VITE_API_URL + "/product/all", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const response = await rawResponse.json();
      setProducts(response.data);
    } catch (error) {
      console.log("Error:", error);
      alert("Failed to fetch products");
    }
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;
    try {
      const rawResponse = await fetch(`${import.meta.env.VITE_API_URL}/product/delete/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const response = await rawResponse.json();
      fetchProducts();
      alert(response.message);
    } catch (error) {
      console.log("Error:", error);
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-0">All Products</h1>
        <Link
          to="/product/create"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-5 rounded-xl shadow-md transition"
        >
          + Create Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center text-gray-500 mt-20 text-lg">No products available.</div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative group"
            >
              {/* Delete Button */}
              <button
                onClick={() => deleteProduct(item._id)}
                className="absolute top-3 right-3 z-10 bg-red-100 text-red-600 hover:bg-red-200 rounded-full p-1 px-2 text-sm font-bold transition"
                title="Delete Product"
              >
                ×
              </button>

              {/* Product Image */}
              <img
                src={item.image || "https://via.placeholder.com/300x200?text=No+Image"}
                alt={item.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Product Details */}
              <div className="p-5 space-y-2">
                <h2 className="text-lg font-bold text-gray-800 truncate">{item.name}</h2>
                <p className="text-indigo-600 font-semibold text-xl">₹{item.price}</p>
                <p className="text-sm text-gray-500">Stock: {item.stock}</p>

                {/* View Details */}
                <Link
                  to={`/product/detail/${item._id}`}
                  className="block mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
