import "./LoginBox.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import { useNavigate } from "react-router-dom";


function LoginBox() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function login(email, password) {
        const loginEndpoint = 'http://szulerinio.pl/backend/login.php'

        fetch(loginEndpoint + '?login=' + email + '&password=' + password)
            .then((res)=>res.json())
            .then((res)=>{
                if(res?.success){
                    setError("")
                    // przekierowanie do panelu athlety
                    if(res.data.userType === 'athlete'){
                        navigate("/profile");
                    // przekierowanie do panelu coucha
                    }else {
                        navigate("/panel");
                    }
                }else {
                    setError("Błędny login lub hasło")
                }
            });
    }


  return (
    <div className="LoginWrapper">
      <div className="LoginBox">
        <label>email</label>
        <input onChange={e=>{setEmail(e.target.value)}} type="email"></input>
        <label>hasło</label>
        <input onChange={e=>{setPassword(e.target.value)}} type="password"></input>

        <button onClick={()=>login(email, password)}>Zaloguj się</button>
        <Link to="register">
          <button>Rejestracja</button>
        </Link>
          {error&&<div id="errorMessage"><p>{error}</p></div>}
      </div>
    </div>
  );


}

export default LoginBox;
