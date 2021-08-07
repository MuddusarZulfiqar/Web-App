import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
function SearchField() {
    const [searchInput, setsearchInput] = useState('')
    const history = useHistory();
    useEffect(() => {
        setsearchInput('')
    }, [])
    const searchItem = (e)=>{
        e.preventDefault();
        if(searchInput !== ''){
            const textVal = searchInput.replace(' ','+')
            history.push(`/search?q=${textVal}`)
        }
    }
    return (
        <div>
             <h2 className="sidebar-title">Search Products</h2>
                <form onSubmit={searchItem}>
                    <input type="text" value={searchInput} onChange={(e)=>setsearchInput(e.target.value)} placeholder="Search products..." />
                    <input type="submit" />
                </form>
        </div>
    )
}

export default SearchField
