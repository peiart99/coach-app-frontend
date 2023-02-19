import { useEffect, useState } from "react";
import style from "./RegisterBox.module.css";

function RegisterBox() {
  const [coachListData, setCoachListData] = useState([]);
  const [registerResponse, setRegisterResponse] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCoach, setIsCoach] = useState(true);
  const [coachID, setCoachID] = useState("");

  function handleFnameChange(event) {
    setFname(event.target.value);
  }
  function handleLnameChange(event) {
    setLname(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleIsCoachChange(event) {
    setIsCoach(!isCoach);
  }
  function handleCoachIDChange(event) {
    setCoachID(event.target.value);
  }

  console.log(isCoach);

  function handleRegisterButton() {
    console.log("tutaj " + coachID);
    var parametersCoach = `login=${email}&password=${password}&firstName=${fname}&lastName=${lname}&coachID=-1`;
    var parametersAthlete = `login=${email}&password=${password}&firstName=${fname}&lastName=${lname}&coachID=${coachID}`;
    if (isCoach) {
      fetch(`http://localhost/backend/register.php?${parametersCoach}`)
        .then((response) => response.json())
        .then((response) => {
          setRegisterResponse(response);
        });
    } else {
      fetch(`http://localhost/backend/register.php?${parametersAthlete}`)
        .then((response) => response.json())
        .then((response) => {
          setRegisterResponse(response);
        });
    }
    console.log(registerResponse);
  }

  useEffect(() => {
    fetch("http://localhost/backend/coaches.php")
      .then((response) => response.json())
      .then((response) => {
        setCoachListData(response);
      });
  }, []);
  //console.log(coachListData);
  console.log(coachID);

  return (
    <div className={style.RegisterWrapper}>
      <div className={style.RegisterBox}>
        <label>Imię</label>
        <input
          type="text"
          id="fname"
          onChange={handleFnameChange}
          value={fname}
        ></input>
        <label>Nazwisko</label>
        <input
          type="text"
          id="lname"
          onChange={handleLnameChange}
          value={lname}
        ></input>
        <label>Email</label>
        <input
          type="email"
          id="email"
          onChange={handleEmailChange}
          value={email}
        ></input>
        <label>Hasło</label>
        <input
          type="password"
          id="password"
          onChange={handlePasswordChange}
          value={password}
        ></input>
        <label>Trener</label>
        <select id="coach" onChange={handleCoachIDChange}>
          {coachListData.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.firstName + " " + item.lastName}
              </option>
            );
          })}
        </select>
        <label>Jestem trenerem</label>
        <input
          type="checkbox"
          id="isCoach"
          onChange={handleIsCoachChange}
          checked={isCoach}
        ></input>
        <button onClick={handleRegisterButton}>Rejestracja</button>
      </div>
    </div>
  );
}

export default RegisterBox;
