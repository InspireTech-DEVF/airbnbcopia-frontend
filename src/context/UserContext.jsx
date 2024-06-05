import { createContext, useState, useEffect } from "react";
import { getUserService } from "@/services/userService";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await getUserService();
      console.log("Response:", response); // para el test
      setUserData(response.data);
    } catch (error) {
      console.error("Error al cargar datos del usuario:", error.response || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const dataContext = { userData, loading };
  return (
    <UserContext.Provider value={dataContext}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
