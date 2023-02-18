import "./RegisterBox.css";

function RegisterBox() {
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
        <select></select>
        <button>Rejestracja</button>
      </div>
    </div>
  );
}

export default RegisterBox;
