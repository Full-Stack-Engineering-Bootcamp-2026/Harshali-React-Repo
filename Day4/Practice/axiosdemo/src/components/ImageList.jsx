
import ImageShow from "./ImageShow"
function ImageList({images}){

   const renderedImg= images.map((image)=>{
        return <ImageShow key={image.id} image={image}/>      //why 
    })

    return (
        <>
        
        <p>images:{images.length}</p>
        {renderedImg}
        </>
    )
}
export default ImageList