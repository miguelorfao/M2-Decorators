import { logDOM } from "@testing-library/dom";
import React, { createContext, useContext } from "react";

// Create a Context for the app
const AppContext = createContext();
// Create a Provider component
export const AppProvider = ({ children }) => {
  const CompanyDetail = {
    companyName: "M2 Decorators",

    companyNumber: "07523 599307",
    companyEmail: "m2decorators25@gmail.com",
  };

  return (
    <AppContext.Provider value={CompanyDetail}>{children}</AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
