import { useContext } from "react";
import { SearchContext } from "../../../../context/searchContext";
import { StyledSearch } from "./style";

export function Search() {
    const {filterValue, handleFilterValue} = useContext(SearchContext)
   

    return (
        <StyledSearch>
            <input type="text" onChange={(e) => handleFilterValue(e.target.value)} value={filterValue} />
            <button>
                🔎
            </button>
        </StyledSearch>
    )
}