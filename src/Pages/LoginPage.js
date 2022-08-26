import { useState } from "react";

const LoginPage = () => 
{
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();

    const Login = () =>
    {
        console.log(username);
        console.log(password);
    }


    return <>
    <div>
        <span>Потребител</span>
        <input type="text" onChange={event => setUsername(event.target.value)}></input>
    </div>
    <div>
        <span>Парола</span>
        <input type="password" onChange={event => setPassword(event.target.value)}></input>
    </div>
    <button onClick={Login}>Login</button>

    </>
    

}

export default LoginPage;