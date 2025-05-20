import React, { createContext, useContext } from "react";

// Create a Context for the app
const AppContext = createContext();
// Create a Provider component
export const AppProvider = ({ children }) => {
  const products = [
    {
      name: "Interior Design",

      image: "/images/interior.jpg",
    },
    {
      name: "Exterior Design",

      image: "/images/exterior.jpg",
    },
    {
      name: "Home Renovation",

      image: "/images/furniture.jpg",
    },
    {
      name: "Home Renovation",

      image: "/images/furniture.jpg",
    },
  ];
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
    <AppContext.Provider value={{ CompanyDetail, products }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
