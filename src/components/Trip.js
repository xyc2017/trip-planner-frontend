import {Link} from "react-router-dom"

const Trip=({post})=>{
    return (
        <div className="trip">
            <Link to={`/trip/${post.id}`}>
                <h1>{post.Country}, {post.City}</h1>
                <h2>{post.From}</h2>
                <h2>{post.To}</h2>
                <h2>{post.Notes}</h2>
            </Link>
        </div>
    )
}



export default Trip