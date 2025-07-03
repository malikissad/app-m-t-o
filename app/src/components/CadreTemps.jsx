import React from "react";
import { appAPI } from "../services/appAPI";
import { useState,useEffect } from "react";
import  {InfoCity} from "./InfoCity.jsx"
export const CadreTemps = ({city, data}) =>{
    
    const [datacity,setdatecity] = useState("")
    const [icon,seticon] = useState("") 
    // const [click, setclick] = useState(data)
    useEffect(() => {
            const fetchData = async () => {
                const data = await appAPI(city)
                if(data){
                    setdatecity(data)
                    seticon(data.weather[0].icon)
                }
            }
            fetchData()
    },[city]) 
    
    
 return (
        <div className={`transition-all duration-300 ease-in-out transform
           ${data ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
           h-[65%] w-[40%] mr-[20%] border border-white/50 bg-white/10 backdrop-blur-md rounded-xl 
           grid grid-rows-[30%_70%] shadow-lg`}>
            <div className="flex flex-row justify-center items-center gap-x-[40%]"> 
                <div className=" flex justify-center items-center pl-[5%] h-[80%] w-[40%]"> 
                    <h1 className={`transition-all duration-300 ease-in-out transform text-xl font-bold text-slate-500
                        ${data ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                     {datacity.name}
                    </h1>
                </div>
                <div className={`transition-all duration-300 ease-in-out transform 
                h-[40%] w-[40%] flex justify-center items-center pr-[10%]
                ${data ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                </div>
                
            </div>
            <div className="flex justify-center items-start">
                <InfoCity info={datacity} data={data}/>
            </div>
        </div>
    )

}