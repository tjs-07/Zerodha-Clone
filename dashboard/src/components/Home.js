import React, { useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get("http://localhost:3002/verify", {
          withCredentials: true,
        });

        if (!res.data.status) {
          window.location.href = "http://localhost:3000/login"; // ✅ correct
        }

      } catch (err) {
        console.log(err);
        window.location.href = "http://localhost:3000/login"; // ✅ correct
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