import axios from 'axios'

const searchImages =async (term)=>{

  const response= await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: 'Client-ID b3sdR9WAqlOACA4Z3nM4kbRuXFCBIFVsCN_qI7OLYvM'
        },
        params:{
            query:term
        }
    })
    
    return response.data.results;
}
export default searchImages