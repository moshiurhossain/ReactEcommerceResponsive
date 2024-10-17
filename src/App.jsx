import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}>
    <Route index element={<Home/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/productdetail/:id' element={<ProductDetail/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
  </Route>
  

));

const App = () => {
  return    <RouterProvider router={router} />
}

export default App
