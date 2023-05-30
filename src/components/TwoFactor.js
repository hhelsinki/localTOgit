import VerificationInput from "react-verification-input";
import { useState } from "react";
import '../App.css';

const TwoFactor = () => {
    const [values, setValues] = useState('');

    console.log(values.length)
    if (values.length === 6) {
        console.log(true);
        //send to POST
    }
    if (values.length !== 6) {
        console.log(false)
    } 

    return(
        <>
            <VerificationInput
                length={6}
                validChars="0-9"
                onChange={setValues}
                classNames={{
                    character: "char"
                }}
            />
        </>
    );
}

export default TwoFactor;