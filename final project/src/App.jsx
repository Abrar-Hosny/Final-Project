import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Cart from './Components/Cart/Cart'
import About from './Components/About/About'
import Login from './Components/Login/Login'
import Brands from './Components/Brands/Brands'
import Products from './Components/Products/Products'
import Register from './Components/Register/Register'
import Notfound from './Components/Notfound/Notfound'
import Categories from './Components/Categories/Categories'
import Signout from './Components/Signout/Signout'
import{createBrowserRouter , RouterProvider} from "react-router-dom"


let paths = createBrowserRouter([
  {path:"" , element : <Layout/> , children : [
    {index:true , element : <Home/>},
    {path:"cart" , element:<Cart/> } , 
    {path:"categories" , element:<Categories/>} , 
    {path:"products" , element : <Products/>} , 
    {path : "signout" , element: <Signout/>} , 
    {path : "login" , element: <Login/>} , 
    {path : "brands" , element: <Brands/>} , 
    {path : "about" , element: <About/>} , 
    {path : "*" , element: <Notfound/>} , 
  
  ]}
])

function App() {
 
  return (
    <>
<RouterProvider router={paths}></RouterProvider>

    </>
  )
}

export default App
