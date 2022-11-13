import { createContext, ReactNode, useState } from "react";

// export const ColorModeContext = createContext({
//     mode: "",
//     setMode: () => { alert("Você precisa me configurar primeiro!")  },
//     toggleMode: () => { alert("Você precisa me configurar primeiro!")  },
// });

interface ColorModeContextData{
    mode: string,
    handleMode: (value: string) => void,
    toggleMode: () => void
}

interface ColorModeProviderProps{
    children: ReactNode,
    initialMode: string
}
export const ColorModeContext = createContext<ColorModeContextData>({} as ColorModeContextData);

export default function ColorModeProvider({children, initialMode}:ColorModeProviderProps) {
    const [mode, setMode] = useState(initialMode);
    const handleMode = (value: string)=>{
        setMode(value)
    }

    const toggleMode = () => {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }

    return (
        <ColorModeContext.Provider value={{ mode, handleMode, toggleMode}}>
            {children}
        </ColorModeContext.Provider>
    );
}