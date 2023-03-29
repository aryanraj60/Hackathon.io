import React, { createContext, useEffect, useState } from "react";
import { initialData } from "../utils/data";

export const AppContext = createContext();

//function to fetch data from local storage and save to state or set initial data if nothing is available
const fetchDataFromLocalStorage = () => {
  const subData = localStorage.getItem("submissionData");
  if (!subData) {
    localStorage.setItem("submissionData", JSON.stringify(initialData));
    return JSON.parse(localStorage.getItem("submissionData"));
  } else {
    return JSON.parse(localStorage.getItem("submissionData"));
  }
};

const AppContextProvider = ({ children }) => {
  const [submissionData, setSubmissionData] = useState(
    fetchDataFromLocalStorage()
  );

  return (
    <AppContext.Provider value={{ submissionData, setSubmissionData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
