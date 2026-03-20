import { useState } from "react"


function LikeButton(){

    const [likes,setLikes] =useState(0);
    const handleLike=()=>{
        setLikes(prev=>prev+1)
    }
    const handleReset=()=>{
        setLikes(0);
    }
    const handleDislike=()=>{
        setLikes(prev=>Math.max(prev-1,0))
    }
    const isPopular=likes>10
    return (
        <div>
            <button onClick={handleLike} 
            style={{backgroundColor:isPopular ? "green":"orange"}}>Like</button>
            <p>{likes} {likes ===1 ? "Like":"Likes"}</p>

            <button onClick={handleReset}>Reset</button>

            <button onClick={handleDislike}>Dislike</button>
        </div>
    )

}

export default LikeButton