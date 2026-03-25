

function ColorList(){

    const colors=["Red","Green","Blue"]

    return(
        <>
        <h1>Color List</h1>
        <ul>
            {
                colors.map((color,index)=>(
                    <li key={index}>{color}</li>
                ))
            }
        </ul>
        
        </>
    )

}
export default ColorList