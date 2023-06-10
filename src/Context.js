import { createContext, useState } from "react";

export const glabaldata = createContext();

function DataProvider({children}){


 

    const[name,setName]=useState("")
    const [number,setNumber]=useState([])
    const [editBtn,seteditBtn]=useState(true)
    const [editinputData,seteditinputData]=useState(null)



    return <glabaldata.Provider value={{name,setName,number,setNumber,editBtn,seteditBtn,editinputData,seteditinputData}}>
        {children}
    </glabaldata.Provider>
}
export default DataProvider;
 