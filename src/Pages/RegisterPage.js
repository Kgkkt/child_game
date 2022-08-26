import axios from 'axios';
import React, { useState } from 'react';

  const RegisterPage = (props) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confPasword, setConfPassword] = useState();
    const [email, setEmail] = useState();

    
    const Register = () => {


        localStorage.setItem("test", "stoyke zdrawej");
        return;
        var newUser = {
            "username": username,
            "password": password,
            "email": email
        }
        axios.post("http://localhost:5283/api/User/createUser", newUser
        ,{
             headers: {
            //    // "Accept": "application/json",
                 "Content-Type": "application/json",
            }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log("error -" + error);
          });

        console.log(username);
        console.log(password);
        console.log(confPasword);
        console.log(email);
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
       

            <div>
                <span>Повтори паролата</span>
                <input type="password" onChange={event => setConfPassword(event.target.value)}></input>
            </div>
           
            <div>
                <span>Парола</span>
                <input type="text" onChange={event => setEmail(event.target.value)}></input>
            </div>
            <button onClick={Register}>Регистрация</button>
    </>     
  }

  export default RegisterPage;