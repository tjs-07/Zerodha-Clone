import React, { useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const API = process.env.REACT_APP_API_URL;
        const FRONTEND = process.env.REACT_APP_FRONTEND_URL;

        const res = await axios.get(`${API}/verify`, {
          withCredentials: true,
        });

        if (!res.data.status) {
          window.location.href = `${FRONTEND}/login`;
        }

      } catch (err) {
        console.log(err);
        const FRONTEND = process.env.REACT_APP_FRONTEND_URL;
        window.location.href = `${FRONTEND}/login`;
      }
    };

    verifyUser();
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;