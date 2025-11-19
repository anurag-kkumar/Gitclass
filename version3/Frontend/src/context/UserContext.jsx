import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem("token");
      console.log("Token from localStorage:", token);
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          console.log("Invalid token or session expired");
          localStorage.removeItem("token");
          setUser(null);
        } else {
          const data = await res.json();
          console.log("Profile data fetched:", data);
          setUser(data);
        }
      } catch (error) {
        console.error("Profile fetch failed:", error);
      }

      setLoading(false);
    };

    loadProfile();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
