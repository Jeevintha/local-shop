import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchProduct() {
    try {
      const rawResponse = await fetch(import.meta.env.VITE_API_URL + "/product/" + id,{
        headers :{
            
        }
      });
      const response = await rawResponse.json();
      setProduct(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to fetch product details");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center mt-10 text-red-500">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
        {/* Image */}
        <img
          src={product.image || "https://via.placeholder.com/400x300?text=No+Image"}
          alt={product.name}
          className="w-full md:w-1/2 h-72 object-cover"
        />

        {/* Details */}
        <div className="p-8 w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-xl text-indigo-600 font-semibold mb-2">₹{product.price}</p>
          <p className="text-gray-600 mb-2">Stock: <span className="font-medium">{product.stock}</span></p>
          <p className="text-sm text-gray-500 mb-6">Product ID: {product._id}</p>

          <Link
            to="/products"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
