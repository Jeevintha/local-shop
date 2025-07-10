import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"

import ShopCreate from "./pages/shop/ShopCreate"
import Shops from "./pages/shop/Shops"
import ShopsOwned from "./pages/shop/ShopsOwned"

import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"

import Users from "./pages/admin/Users"
import UserDetail from "./pages/admin/UserDetail"

import Products from "./pages/product/Products"
import ProductCreate from "./pages/product/ProductCreate"
import ProductDetail from "./pages/product/ProductDetail"

import {Toaster} from "react-hot-toast"
const App = ()=>{
  return(
    <>
    <BrowserRouter>
        <Toaster
          position="bottom-right"
          reverseOrder = {false}
          toastOptions={{
            duration:1500
          }}
        />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/shop/create" element={<ShopCreate />}  />
        <Route path="/shops" element={<Shops />}  />
        <Route path="/shops/owned" element={<ShopsOwned />}  />

        <Route path="/register" element={<Register />}  />
        <Route path="/login" element={<Login />}  />

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