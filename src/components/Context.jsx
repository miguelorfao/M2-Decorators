import React, { createContext, useContext } from "react";

// Create a Context for the app
const AppContext = createContext();
// Create a Provider component
export const AppProvider = ({ children }) => {
  const CompanyDetail = {
    companyName: "Miguel Orfao",
    companyStreet: "32 Hibernia street",
    companyCity: "Scarborough",
    companyState: "Yorkshire",
    companyPostcode: "YO127DH",
    companyCountry: "United Kingdom",
    companyNumber: "+1234567890",
    companyEmail: "Orfao.miguel@gmail.com",
  };

  return (
    <AppContext.Provider value={CompanyDetail}>{children}</AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
