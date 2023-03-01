import Trip from "../components/Trip"
import { useLoaderData } from "react-router-dom"


const Index=(props)=>{
    const trips=useLoaderData()
    console.log(trips, "here are the trips")
    // For each post in the array render a Post component
    return <>
        <div className="container-fluid"> 
            {trips.map((post)=><Trip key={post.id} post={post}/>)}
        </div>
         </>
}

export default Index