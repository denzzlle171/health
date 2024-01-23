import React, { createContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    Goal: '',
    Measure: { height: 0, weight: 0 },
    Behaviors: '',
    Exercise: '',
  });

  const updateData = (key, value) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
