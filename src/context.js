import React, { useContext, useState } from "react";
import Data from "./pData";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [data , setData] = useState(Data)
    const [openFilter , setOpenFilter] = useState(false)
    const [openSort , setOpenSort] = useState(false)

    const handleOpenFilter = () => {
        setOpenFilter(true)
    }
    
    return <AppContext.Provider value={{
       data,
       handleOpenFilter,
       openFilter,
       setOpenFilter,
       openSort,
       setOpenSort,
    }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }