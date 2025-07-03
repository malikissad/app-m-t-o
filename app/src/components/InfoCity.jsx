import React from "react";
import {useState} from "react";
export const InfoCity = ({info, data}) => {
  
  
  function DateFromAPI(){
        const date = info.dt
        const information = new Date(date * 1000);
        const formeDate = information.toLocaleDateString("fr-FR", {
         year: "numeric",
         month: "long",
         day: "numeric"
        });
      return formeDate;       
    }
 
    function VitesseVent(){
        return info?.wind?.speed ? Math.round(info.wind.speed * 3.6) : "N/A"
    }
    return (
        <div>
          <div className={`transition-all duration-500 ease-in-out transform
           ${data ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
          text-base font-bold flex justify-center items-center mb-6`}>{DateFromAPI()}</div>

            <div className="mb-6 flex flex-col justify-center items-center">
                <div className={`transition-all duration-500 ease-in-out transform
                  ${data ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} text-5xl font-bold flex`}><p>{Math.round(info?.main?.temp)}°</p>
                </div>
                
                <div className={`transition-all duration-500 ease-in-out transform
                 ${data ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} 
                 text-sm font-bold text-slate-500`}><p>{info?.weather?.[0]?.main}</p>
                </div>

                <div className={`transition-all duration-500 ease-in-out transform
                ${data ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
                text-xl font-bold text-slate-500`}><p>{info?.weather?.[0]?.description}</p></div>
            </div>
          
          <div className={`transition-all duration-500 ease-in-out transform
           ${data ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
           font-semibold text-sm flex flex-col justify-center items-center`}>
            <p>{info?.main?.humidity}% | wind</p>
            <p>speed | {VitesseVent()}KM/H</p>
          </div>
        </div>
    )
}