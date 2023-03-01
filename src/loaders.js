// deployed API base url
const URL="https://project-4-wcwm.onrender.com"

// indexLoader=> get all trips for index route
export const IndexLoader=async()=>{
    const response= await fetch(URL+"/trips/")
    const trips=await response.json()
    return trips
}

export const ShowLoader=async({params})=>{
    const response=await fetch(URL+`/trips/${params.id}/`)
    const trip=await response.json()
    return trip
}

