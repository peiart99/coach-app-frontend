import "./LoginBox.css";
import { Link } from "react-router-dom";

function LoginBox() {
  return (
    <div className="LoginWrapper">
      <div className="LoginBox">
        <label>email</label>
        <input type="email"></input>
        <label>hasło</label>
        <input type="password"></input>
        <Link to="profile">
          <button>Zaloguj się</button>
        </Link>
        <Link to="register">
          <button>Rejestracja</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginBox;
