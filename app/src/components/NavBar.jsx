import React from "react";
import  {Moon,Sun} from "lucide-react"
import {useState} from "react"
export const NavBar = () => {
    
    const [darkmode,setdarkmode] = useState(false)    
    const [click,setClick] =useState(false)

    const handleclick = () => {
        setClick(true)
        if(darkmode){
            setdarkmode(false),
            document.documentElement.classList.remove("dark")
        }else{
            setdarkmode(true), 
            document.documentElement.classList.add("dark")
        }
        
        setTimeout(() => {
            setClick(false)
        },300)
    } 
    
    return (
        <div className="flex justify-between h-[100%] w-[100%]">
            <div className="h-[100%] w-[50%] flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl drop-shadow-xl text-slate-500 mr-[30%] dark:text-white">MétéoZan</h1>
            </div>
            <div className="h-[100%] w-[50%] flex flex-row gap-[40%] items-center">
               <div className="flex gap-[20%] pl-[25%] h-[100%] w-[100%] justify-center items-center">
                   <button className=" group relative text-lg font-medium text-slate-800 h-[50%] dark:text-white">
                     Consulter
                     <span className="absolute h-0 w-0 left-0 bottom-0 group-hover:w-full transition-all 
                     duration-500 ease-in-out bg-black h-0.5 dark:bg-white"></span>
                   </button>
                   
                   <button className="  dark:text-white group relative text-lg font-medium text-slate-800 h-[50%]">
                     Map
                     <span className="absolute h-0 w-0 left-0 bottom-0 group-hover:w-full transition-all 
                     duration-500 bg-slate-800 ease-in-out h-0.5 dark:bg-white"></span>
                    </button>
                    
                    <button className="dark:text-white group relative text-lg font-medium text-slate-800 h-[50%]">
                        ChatBot
                        <span className="absolute h-0 w-0 left-0 bottom-0 group-hover:w-full transition-all 
                        duration-500 bg-slate-800 ease-in-out h-0.5 dark:bg-white"></span>
                        </button>
               </div>
               <div className="flex justify-center items-center h-[100%] w-[100%]">
                 <button
                 onClick={handleclick} 
                 className={`flex justify-center items-center rounded-3xl h-[60%] w-[40%]
                   hover:bg-slate-200 hover:transition-all hover:duration-500 hover:drop-shadow-[0px_5px_5px_rgba(0,0,0,0.6)] dark:bg-slate-800 
                    ${click ? "scale-95" : ""}`}>
                    
                    {darkmode ? <Sun className="dark:text-white" strokeWidth={2.5}/> : <Moon className="text-slate-800" strokeWidth={2.5}/>}
                    </button>
               </div>
                
            </div>
            
            
        </div>
    )
}