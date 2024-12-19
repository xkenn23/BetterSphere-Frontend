import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const storedLoginResponse = localStorage.getItem("loginResponse"); // Correct key
      if (storedLoginResponse) {
        const loginResponse = JSON.parse(storedLoginResponse); // Parse the response
        setUser(loginResponse.user); // Set the user data

        // Fetch activities for the user
        try {
          const token = JSON.parse(localStorage.getItem("loginResponse")).token;
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/activity/${loginResponse.user.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
            setActivities(data);
          } else {
            console.error("Failed to fetch activities");
          }
        } catch (error) {
          console.error("Error fetching activities:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, activities, setActivities }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
