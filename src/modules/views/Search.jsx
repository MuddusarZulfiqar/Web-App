import React,{useState,useEffect} from 'react';
import ProductCard from '../common/ProductCard';
import { useHistory } from "react-router-dom";
function Search({ match, location }) {
    let searchData = location.search.replace('?q=','');
    const [search, setsearch] = useState(searchData);
    const [searchList, setsearchList] = useState([]);
    const [searchtext, setsearchtext] = useState(searchData)
    const history = useHistory();
    useEffect(() => {
        fetch(`http://localhost:3004/products?q=${searchtext}`)
            .then((response) => response.json())
            .then((data) => {
                const response = data;
                console.log('Search Data',response)
                setsearchList(response)
                // setproduct(data)
                // console.log(product)
            })
            .catch((error) => console.log(error.message));
    }, [searchtext])
    const searchInput = (e)=>{
        e.preventDefault();
        const textVal = searchtext.replace(' ','+')
        history.push(`/search?q=${textVal}`)
        setsearchtext(search)
        if(search != ''){
        }
    }
    return (
        <div className="container">
            <h1>Search</h1>
            <form onSubmit={searchInput}>
                <input type="text" value={search.replace('+',' ')} onChange={(e)=>setsearch(e.target.value)} placeholder="Search products..." />
                <input type="submit" />
            </form>
            <p className="mt-3"> The search result of '{searchtext  .replace('+',' ')}' </p>
            <div className="row">
                {
                    searchList.map((searchItem)=>{
                            return(
                                <div className="col-md-3 my-4">
                                    <ProductCard product={searchItem} />
                                </div>
                            )
                    })   
                }
            </div>
        </div>
    )
}

export default Search
