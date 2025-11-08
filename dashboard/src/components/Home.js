import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      const { data } = await axios.post(
        "http://localhost:3002/",
        {},
        { withCredentials: true }
      );

      if (!data.status) {
        window.location.href = "http://localhost:3000/login";
      } else {
        setUsername(data.user);
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
