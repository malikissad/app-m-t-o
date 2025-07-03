import React from "react";
import {useState, useEffect} from "react"
import { previsionAPI } from "../services/appAPI.js"
import { CadrePrevision } from "./CadrePrevision.jsx";


export const Prevision = ({city}) => {
    const [prevision,setprevision] = useState("")
    useEffect(() => {
        const fetchCordonnees = async () => {
            const data = await previsionAPI(city)
            if(data){
                setprevision(data)
            }
        }
        fetchCordonnees()
    },[city])
    return (
        <div className="h-[70%] w-[70%] flex flex-row  justify-center items-center">
            {prevision?.list?.map((item,index) => (
                (index == 0 || index == 8 || index==16 || index==24 || index==32) && 
                <CadrePrevision prevision={item} key={index}/>
            ))}
        </div>
    )
}