import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ShopCreate from "./pages/shop/ShopCreate"
import Shops from "./pages/shop/Shops"
import Register from "./pages/auth/Register"
import Users from "./pages/admin/Users"
import UserDetail from "./pages/admin/UserDetail"
import Header from "./components/Header"
import Products from "./pages/product/Products"
import ProductCreate from "./pages/product/ProductCreate"
import ProductDetail from "./pages/product/ProductDetail"

const App = ()=>{
  return(
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/shop/create" element={<ShopCreate />}  />
        <Route path="/shops" element={<Shops />}  />
        <Route path="/register" element={<Register />}  />
        <Route path="/users" element={<Users />}  />
        <Route path="/user/detail/:id" element={<UserDetail />}  />
        <Route path="/products" element={<Products />}  />
        <Route path="/product/create" element={<ProductCreate />}  />
        <Route path="/product/detail/:id" element={<ProductDetail />}  />


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App