import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Registration from './components/Registration'
 const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home />} /> 
            <Route  path="/register" element={<Registration/>} />
        </Routes>
    </BrowserRouter>
  )
}


export default App