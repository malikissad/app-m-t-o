import React from "react"
import { useState,useEffect } from "react"
import {Search} from "lucide-react"
export const SearchBar = ({setcity , click}) => {
    const [serchdata,setserchdata] = useState("")
    const [changed , setchanged] = useState(false)

    const handlechange = (e) => {
        if(serchdata !== ""){
            setcity(serchdata)
        }
        click(true)
        setTimeout(() => {
      click(false);
    }, 5000);
    }
    // const useEffect(() => {

    //     const timer = setTimeout(() => {
    //     setMessage("Bienvenue !");
    // },  2000);
    // })
    return (
        <div className="drop-shadow-xl backdrop-blur-md rounded-3xl flex flex-row justify-start h-[10%] w-[60%] items-center mt-3 mr-6">
          
            <input 
                type="text" 
                onChange={(e) => {
                    setserchdata(e.target.value)
                }}
                className="h-[65%] w-[80%] rounded-2xl 
                ml-3 px-4 py-2 backdrop-blur-md placeholder-slate-800 font-semibold text-lg "
                style={{backgroundColor:'rgba(255,255,255,0.5)'}}
                placeholder="Search...."
            />
         
         <div className="flex justify-center items-center h-[100%] w-[20%]">
            <button 
             onClick={handlechange}
             onMouseEnter={() => setchanged(true)}
             onMouseLeave={() => setchanged(false)} 
             className=" drop-shadow-xl bg-slate-700  hover:bg-white rounded-2xl h-[68%] 
             w-[80%] flex justify-center items-center text-white hover:text-slate-700 transform duration-300">
                <Search 
                 strokeWidth={changed ? 4 : 3}
                /></button>
         </div>
            
        </div>
    )
}