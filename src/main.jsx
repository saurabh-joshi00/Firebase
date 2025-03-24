import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './Components/Home';
import Common from './Components/Common/Common';
import EnquiryData from './Components/EnquiryData';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Context from './MainContext/Context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Common />}>
        <Route path='/' element={<Home />}></Route>
      </Route>
      <Route path="/view-data" element={<Common />}>
        <Route path='/view-data' element={<EnquiryData />}></Route>
      </Route>
      <Route path="/login" element={<Common />}>
        <Route path='/login' element={<Login />}></Route>
      </Route>
      <Route path="/register" element={<Common />}>
        <Route path='/register' element={<Register />}></Route>
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>,
)
