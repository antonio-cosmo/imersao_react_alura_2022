import { createContext, ReactNode, useState } from "react";

interface SearchContextData{
    filterValue: string,
    handleFilterValue: (name: string) => void
}

interface SearchProviderProps{
    children: ReactNode
}
export const SearchContext = createContext<SearchContextData>({} as SearchContextData)

export function SearchProvider({ children}:SearchProviderProps){
    const [filterValue, setFilterValue] = useState('')
    
    const handleFilterValue= (name: string)=>{
        setFilterValue(name)
    }

    return(
        <SearchContext.Provider value={{filterValue, handleFilterValue}}>
            {children}
        </SearchContext.Provider>
    )
    
}