import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  username: "",
  isAuthenticated: false,
  logout: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        setIsAuthenticated(false);
        setUsername("");
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3001/verify",
          {},
          { 
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        
        const { status, user } = data;
        
        if (status && user) {
          setUsername(user);
          setIsAuthenticated(true);
        } else {
          removeCookie("token");
          setIsAuthenticated(false);
          setUsername("");
          navigate("/login");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        removeCookie("token");
        setIsAuthenticated(false);
        setUsername("");
        navigate("/login");
      }
    };
    
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleLogout = () => {
    removeCookie("token");
    setIsAuthenticated(false);
    setUsername("");
    navigate("/login");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        username,
        isAuthenticated,
        logout: handleLogout,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;