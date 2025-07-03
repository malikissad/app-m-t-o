import React from "react";

export const Présentation = () => {
    return(
        <div className="flex flex-col justify-center items-start pl-10">
            <div className="text-5xl font-bold text-white"> 
                <p className="drop-shadow-xl">Météo <p className="ml-20 text-slate-500">Zen</p></p>
            </div>
            <div>
                <div className="text-xl font-bold pl-6 mt-3 text-slate-800">
                    Cette application météo permet d’afficher en temps réel les conditions climatiques <br />
                    d’une ville recherchée par l’utilisateur. En entrant simplement le nom d’une ville,<br />
                    l’utilisateur obtient instantanément des informations précises telles que la température <br /> 
                    actuelle, la vitesse du vent en km/h, le taux d’humidité, une description du ciel ainsi <br />
                    que la date du jour, le tout dans une interface simple, rapide et intuitive.
                </div>
            </div>
        </div>
    )
}

