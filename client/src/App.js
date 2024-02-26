import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { URL } from "./config.js";
import { LoginUser } from "./redux/actions/actions.js";

import Wall from './Components/Wall/Wall';
import Login from './Components/Login/Login';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token)
        console.log('dispatched login')

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        // Obtener la información del perfil
        const profileResponse = await fetch(`${URL}profile`, {
          method: "GET",
          headers: headers,
        });

        if (profileResponse.ok) {
          const profileData = await profileResponse.json();

          dispatch(LoginUser(profileData));
        } else {
          if (profileResponse.url.endsWith("login-endpoint")) {
            console.log("Request to login-endpoint failed");
          }
        }

      }
      catch (error) {
        console.error("Error during fetchProfileData:", error);
      }
    };
    fetchProfileData();
    console.log('fetchProfileData')
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/wall' element={<Wall></Wall>}></Route>
      </Routes>
    </div>
  );
}

export default App;
