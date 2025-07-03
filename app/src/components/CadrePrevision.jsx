import React from "react";

export const CadrePrevision = ({prevision}) => {
   
    function DateFromAPI(){
        const date = prevision.dt
        const information = new Date(date * 1000);
        const formeDate = information.toLocaleDateString("fr-FR", {
         weekday: "long",
        });
      return formeDate;       
    }
   
    return (
        <div className="bg-slate-600 h-[100%] w-[50%] rounded-lg mx-6 flex flex-col 
         justify-start items-center transition-all duration-700 hover:-translate-y-3 shadow-[0px_8px_20px_rgba(0,0,0,0.8)]">
            <p className="text-lg font-semibold mt-[6%]">
                {DateFromAPI()}
            </p>
            <div className="flex flex-col justify-center items-center gap-0">
              <img 
                 src={`https://openweathermap.org/img/wn/${prevision.weather[0].icon}@2x.png`}
                 className="h-[70%] w-[70%]"
                 />
                <p className="text-3xl font-bold pl-[9%]">
                 {Math.round(prevision?.main?.temp)}°
               </p>

                <p className="text-lg font-semibold">
                 {prevision?.weather?.[0]?.description}
                </p>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center mt-[10%]">
                <p className="text-sm font-medium">Hum | {prevision?.main?.humidity}%</p>
                <p className="text-sm font-medium"> Speed | {prevision?.wind?.speed} km/h</p>
            </div>
        </div>
    )
}