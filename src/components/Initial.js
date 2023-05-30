import { createContext } from "react";

//export const Context = createContext('');

export const Context = createContext(Log);

function Log() {
    console.log('test context function');
}

