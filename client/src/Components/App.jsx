import '../App.css';
import React from "react";
import { SocketProvider } from '../Contexts/SocketContext';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { getIpInform } from '../Store/slices/userSlice'
import { useDispatch } from 'react-redux'

import Create from '../Pages/Create'
import Rooms from '../Pages//Rooms'
import Room from '../Pages/Room'
import LangSelector from './LangSelector';
import Home from '../Pages/Home';
import Loading from './Loading';

function App() {
  const dispatch = useDispatch()

  console.log(`Bearer ${process.env.REACT_APP_IPINFO_API_TOKEN}`);
  axios.get('https://ipinfo.io/json', 
    {headers: {Authorization: `Bearer ${process.env.REACT_APP_IPINFO_API_TOKEN}`}})
    .then(res => {
      console.log(res)
      dispatch(getIpInform(res.data))
    })
    .catch(err => console.log(err)) //https://api.db-ip.com/v2/free/self

  return (
    <SocketProvider>
      
      <div className="App">
        <LangSelector />
        <Loading />
        <Toaster
          position="bottom-left"
          reverseOrder={false}
        />
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/create" element={<Create />} />
              <Route path="/room/:code" element={<Room />} />
            </Routes>
        </BrowserRouter>
      </div>
    </SocketProvider>
  );
}

export default App;
