import { createContext, ReactNode, useState } from "react";

interface ColorModeContextData{
    mode: string,
    toggleMode: () => void
}

interface ColorModeProviderProps{
    children: ReactNode,
    initialMode: string
}
export const ColorModeContext = createContext<ColorModeContextData>({} as ColorModeContextData);

export default function ColorModeProvider({children, initialMode}:ColorModeProviderProps) {
    const [mode, setMode] = useState(initialMode);

    const toggleMode = () => {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }

    return (
        <ColorModeContext.Provider value={{ mode, toggleMode}}>
            {children}
        </ColorModeContext.Provider>
    );
}