import React from 'react';
import {Routes,Route} from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Gig from "./Pages/Gig";
import Gigs from "./Pages/Gigs";
import Order from "./Pages/Order";
import Message from "./Pages/Message";
import Add from "./Pages/Add";
import Messages from './Pages/Messages';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
         <Route path='/gig/:id' element={<Gig />} />
          <Route path='/gigs' element={<Gigs />} />
           <Route path='/order' element={<Order />} />
            <Route path='/add' element={<Add />} />
             <Route path='/message/:id' element={<Message />} />
              <Route path='/messages' element={<Messages />} />
      </Routes>
    </div>
  )
}

export default App;
