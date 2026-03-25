

function SearchBar({onSubmit}){
    const handleClick=()=>{
        onSubmit('bikes')
    }


    return (
        <>
        <button onClick={handleClick}>click me </button>
        </>
    )

}
export default SearchBar