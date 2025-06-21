import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ShopCreate from "./pages/shop/ShopCreate"
import Shops from "./pages/shop/Shops"
import Register from "./pages/auth/Register"
import Users from "./pages/admin/Users"
import UserDetail from "./pages/admin/UserDetail"

const App = ()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/shop/create" element={<ShopCreate />}  />
        <Route path="/shops" element={<Shops />}  />
        <Route path="/register" element={<Register />}  />
        <Route path="/users" element={<Users />}  />
        <Route path="/user/detail/:id" element={<UserDetail />}  />


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App