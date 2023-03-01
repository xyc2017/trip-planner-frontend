import {useLoaderData, Form} from "react-router-dom"

const Show=()=>{
    const post=useLoaderData()
    return (
        <div className="show">
            <h1>{post.Country}, {post.City}</h1>
            <h2>{post.From}</h2> 
            <h2>{post.To}</h2>
            <h2>{post.Notes}</h2>
            <div>
                <h2>Update Trip</h2>
                <Form action={`/update/${post.id}`} method="post">
                <input type="text" name="Country" placeholder="Country" defaultValue={post.Country} />
                <input type="text" name="City" placeholder="City" defaultValue={post.City} />
                <input type="date" name="From" placeholder="From" defaultValue={post.From} />
                <input type="date" name="To" placeholder="To" defaultValue={post.To} />
                <input type="text" name="Notes" placeholder="Notes" defaultValue={post.Notes} />
                <button>Update Trip</button>
            </Form>
            <Form action={`/delete/${post.id}`} method="post">
                <button>Delete Trip</button>
            </Form>
            </div>

        </div>
    )
}

export default Show