import { useEffect, useState } from "react";
import "./RegisterBox.css";

function RegisterBox() {
  const [coachListData, setCoachListData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/backend/coaches.php")
      .then((response) => response.json())
      .then((response) => {
        setCoachListData(response);
      });
  }, []);
  console.log(coachListData);

  return (
    <div className="RegisterWrapper">
      <div className="RegisterBox">
        <label>imie</label>
        <input type="text"></input>
        <label>nazwisko</label>
        <input type="text"></input>
        <label>email</label>
        <input type="email"></input>
        <label>hasło</label>
        <input type="password"></input>
        <label>trener</label>
        <select>
          {coachListData.map((item) => {
            return (
              <option key={item.id} value={item.firstName}>
                {item.firstName + " " + item.lastName}
              </option>
            );
          })}
        </select>
        <button>Rejestracja</button>
      </div>
    </div>
  );
}

export default RegisterBox;
