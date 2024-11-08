import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import AddProduct from './Pages/AddProduct/AddProduct'
import Calculator from './Pages/Calculator/Calculator'
import RecordForm from './Pages/RecordForm/RecordForm'
import Records from './Pages/Records/Records'
import Installments from './Pages/Installments/Installments'
import Payments from './Pages/Payments/Payments'
// import './App.css' 

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "addproducts",
          element: <AddProduct/>
        },
        {
          path: "calculator",
          element: <Calculator/>
        },
        {
          path: "recordform",
          element: <RecordForm/>
        },
        {
          path: "records",
          element: <Records/>
        },
        {
          path: "installments",
          element: <Installments/>
        },
        {
          path: "payments",
          element: <Payments/>
        }
      ]
    }
  ])
  
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
