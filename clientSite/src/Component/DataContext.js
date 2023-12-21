

import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext(); // create a context 

export const useDataContext = () => useContext(DataContext);

export function DataProvider({ children }) {
    const [data, setData] = useState([]);  // to get the data from the banner component 
    // console.log("Data in DataContext:", data);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
}

