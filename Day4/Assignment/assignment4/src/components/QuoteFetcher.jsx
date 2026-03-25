import { useState } from "react"
import axios from "axios";

function QuoteFetcher(){

    const [post,setPost]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("");
    
const fetchPost=async ()=>{
    try{
        setLoading(true)
        setError("")
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        setPost(response.data) 
    }
    catch(err){
        setError("failed to fetch")
    }
    finally{
        setLoading(false)
    }
}
let content;

if (loading) {
  content = <p>Loading...</p>;
} 
else if (error) {
  content = <p>{error}</p>;
} 
else if (post) {
  content = (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  );
}
return (
  <>
    <button onClick={fetchPost}>Fetch</button>
    {content}
  </>
    )}

export default QuoteFetcher