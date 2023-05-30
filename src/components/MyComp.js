import { createContext, useContext } from "react";
import { Context } from "./Initial";


export function MyComp() {
    const onClick = useContext(Context);

    return (
        <>
            <button type="buton" onClick={onClick}>Click to show</button>
            <p>You can see me.</p>
        </>
    );
}