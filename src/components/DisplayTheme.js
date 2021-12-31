import { AppContext } from "./contexts/app-context";
import { useContext } from "react";

export default function DisplayTheme() {
    const context = useContext(AppContext)
    return(
        <div>
            {context.theme}
        </div>
    )
}