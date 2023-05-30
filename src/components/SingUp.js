import axios from "axios";
import { useEffect } from "react";

function Register() {
    let userAgent = window.navigator.userAgent;
    
    useEffect(()=>{
        const data = {
            test: 'aaa@gmail.com'
        }
        const config = {
            method: 'POST',
            url: 'http://localhost:8000/find-favourite',
            data: data
        }
        axios(config)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {console.log('err API find-favourite')})
    }, [])
    const handleEmail = (e) => {
        console.log(e.target.value);

        let val = e.target.value;
        let emailFormat = /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9]).[a-z0-9]{2,10}(?:.[a-z]{2,10})?$/;
        if (emailFormat.test(val)) {
            console.log('passed');
        } else { console.log('invalid email') }
    }
    return (
        <div className="App-header" >
            <form style={{ width: '50%', margin: '0 auto', display: 'block' }}>
                <label>Email: </label>
                <input type="email" onBlur={handleEmail} required />
                <p>{userAgent}</p>
            </form>
        </div>

    );
}

export default Register;