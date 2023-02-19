import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";


function Header() {
    const navigate = useNavigate();
    function logout(){
    fetch(`http://localhost/backend/logout.php?`)
    .then((response) => response.json())
    .then((response) => {
        if(response.success){
         navigate("/")   
        }
    });
    }


  return (
    <header className={style.header}>
        <button type="button" onClick={()=>navigate("/")}> login</button>
        <button type="button" onClick={logout}> logout</button>

    </header>
  );


}

export default Header;
