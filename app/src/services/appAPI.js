export const appAPI = async (city) => {
 const cle = import.meta.env.VITE_WEATHER_API_KEY
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${cle}&units=metric&lang=fr`

  try{
    const response = await fetch(url)
    if(!response.ok){
        throw new Error('réponse non OK')
    }else{
        const data = await response.json()
        return data
    }
  }catch(error){
    return null
  }
}

export const CordonneesAPI = async (city) => {
  const cle = import.meta.env.VITE_WEATHER_API_KEY
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${cle}`
  try{
    const cord_res = await fetch(url)
    if(!cord_res.ok){
        throw new Error('réponse non OK')
    }else{
      const data = await cord_res.json()
      const cordonnees ={
        "lat" : data[0].lat,
        "lon" : data[0].lon
      }
      return cordonnees
    }
  }catch(error){
    return null
  }

}

export const previsionAPI = async (city) => {
  const cle = import.meta.env.VITE_WEATHER_API_KEY
  const cordonnees = await CordonneesAPI(city)
  if(cordonnees){
    const {lat, lon} = cordonnees
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${cle}`
    try{
      const res = await fetch(url)
      if(!res.ok){
        throw new Error('réponse non OK')
      }else{
        const data = await res.json()
        return data
      }
    }catch(error){
    return null
    }
  }
}