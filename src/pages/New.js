import {Form} from "react-router-dom"

const New=()=>{
    
return (
<div className="new-trip">
        <Form action="/create" method="post">
            <input type="text" name="Country" placeholder="country" />
            <input type="text" name="City" placeholder="city" />
            <input type="date" name="From" placeholder="from" />
            <input type="date" name="To" placeholder="to" />
            <input type="text" name="Notes" placeholder="notes" />
            <div><button className="new-button">Create New Trip</button></div>
        </Form>
    
 </div> 
    )
}
export default New