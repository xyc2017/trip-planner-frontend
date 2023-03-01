import {redirect} from "react-router-dom"

// deployed API base URL
const URL="https://project-4-wcwm.onrender.com"

export const createAction=async({request})=>{
    const formData=await request.formData() // get form data
    const newTrip={
        Country:formData.get("Country"),
        City:formData.get("City"),
        From:formData.get("From"),
        To:formData.get("To"),
        Notes:formData.get("Notes")
    }
    await fetch(URL+"/trips/", {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newTrip)
    })
    return redirect("/")
}

export const updateAction=async({request, params})=>{
    // get form data
    const formData=await request.formData()
  
    //construct request body
    const updatedTrip={
        Country:formData.get("Country"),
        City:formData.get("City"),
        From:formData.get("From"),
        To:formData.get("To"),
        Notes:formData.get("Notes")
    }
    // send request to backend
    await fetch(URL+"/trips/"+params.id+"/",{
        method:"put",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updatedTrip)
    })
    return redirect("/")
}

export const deleteAction=async({params})=>{
    // get trip id
    const id=params.id
    // send request to backend
    await fetch(URL+`/trips/${id}/`,{
        method:"delete",
    })
    return redirect("/")
}