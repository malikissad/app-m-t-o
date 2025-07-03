import React from "react"
import { SearchBar } from "../components/searchBar"
import { useState } from "react"
import { CadreTemps } from "../components/CadreTemps"
import { Présentation } from "../components/text"
import image from "../assets/photo-montagne-vallee-blanche-chamonix-mont-blanc.jpg"
import { NavBar } from "../components/NavBar"
import { Prevision } from "../components/prevision"
export const Home = () => {
  
  const [city, setcity] = useState("alger")
  const [clicbutton, setclicbutton] = useState(false)
  
  const recevoirDonnees = (data) =>{
    setclicbutton(data)
  }
   
      return (
        <div className='h-screen w-full grid grid-rows-[8%_65%_45%]'>

          <div className="bg-slate-200 dark:bg-slate-800"> 
            <NavBar/>
          </div>


          <div className='grid grid-cols-[60%_40%]' style={{backgroundImage:`url(${image})`}}>
              <div className="flex flex-col justify-center items-center">
              <Présentation/>
              <SearchBar setcity={setcity} click={recevoirDonnees}/>
            </div>
            <div className="flex justify-center items-center">
              <CadreTemps city={city} data={clicbutton}/>
            </div>
          </div>

          <div className='flex justify-center items-center bg-slate-200 dark:bg-slate-800'>
           <Prevision city={city}/>
          </div>
        </div>
      )
}