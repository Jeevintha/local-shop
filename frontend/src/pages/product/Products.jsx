import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const rawResponse = await fetch("http://localhost:3000/product/all");
      const response = await rawResponse.json();
      setProducts(response.data);
    } catch (error) {
      console.log("Error:", error);
      alert("Failed to fetch products");
    }
  };

  const deleteProduct = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this product?");
      if (!confirmDelete) return;

      const rawResponse = await fetch(`http://localhost:3000/product/delete/${id}`, {
        method: "DELETE",
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
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Products</h1>
        <Link
          to="/product/create"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
        >
          + Create Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">No products available.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <div
              key={item._id}
              className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {/* Delete Button */}
              <button
                onClick={() => deleteProduct(item._id)}
                className="absolute top-3 right-3 bg-red-100 text-red-600 hover:bg-red-200 rounded-full p-1 px-2 text-sm font-bold transition"
                title="Delete Product"
              >
                ×
              </button>

              {/* Product Info */}
              <div className="p-6 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-600">₹{item.price}</p>
                <p className="text-sm text-gray-500">Stock: {item.stock}</p>

                <Link
                  to={`/product/detail/${item._id}`}
                  className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition"
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
