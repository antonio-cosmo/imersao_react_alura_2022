import { useContext } from "react";
import { ColorModeContext } from "../../../../context/colorMode";
import { StyledSwitch } from "./style";



export function DarkModeSwitch() {
    const contexto = useContext(ColorModeContext);

    return (
        <StyledSwitch>
            <input id="darkmode" type="checkbox" onChange={() => {
                contexto.toggleMode();
            }} />
            <label
                htmlFor="darkmode"
                className="darkmode-switch"
            >
                <span>🌙</span>
                <span>☀️</span>
            </label>
        </StyledSwitch>
    )
}