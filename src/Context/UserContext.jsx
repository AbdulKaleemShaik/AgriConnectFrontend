import React, { createContext, useState, useContext } from 'react';
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};


export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
