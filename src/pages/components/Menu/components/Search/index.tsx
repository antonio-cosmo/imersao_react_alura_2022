import { StyledSearch } from "./style";

interface SearchProps{
    filterValue: string,
    handleFilterValue:(name: string) => void
}
export function Search({ filterValue, handleFilterValue }:SearchProps) {
    
   

    return (
        <StyledSearch>
            <input type="text" onChange={(e) => handleFilterValue(e.target.value)} value={filterValue} />
            <button>
                🔎
            </button>
        </StyledSearch>
    )
}