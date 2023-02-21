import style from "./Profile.module.css";
import logo from "../../logo.svg";
import { useEffect, useState } from "react";
function Profile() {
  //var name = "name";
  //var surname = "surname";

  var group = "group";
  var coach = "coach";

  const [clubID, setClubID] = useState("NULL");
  const [clubs, setClubs] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("name");
  const [surname, setSurname] = useState("surname");

  function updateUserData() {
    fetch("http://localhost/backend/getUserData.php", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUserData(response.data[0]);
      });
  }

  function handleClubChoice() {
    const clubChangeEndpoint = "http://localhost/backend/changeClub.php";

    fetch(clubChangeEndpoint + `?clubId=${clubID}`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        updateUserData();
        setClubID(clubs.at(0).id);
      });
  }
  function handleClubIDSelect(event) {
    setClubID(event.target.value);
    console.log("Zmiana na " + event.target.value);
  }
  function SelectList(props) {
    const list = props.clubs;

    const options = list.map((e) => (
      <option key={e.id} value={e.id}>
        {e.name}
      </option>
    ));

    return <select onChange={handleClubIDSelect}>{options}</select>;
  }

  function ShowList(props) {
    const list = props.workouts;

    return (
      <ul>
        {list.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    );
  }
  useEffect(() => {
    fetch(clubsEndpoint)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setClubs(res);
        //setWorkouts(res.data.value)
      });
  }, []);
  const clubsEndpoint = "http://localhost/backend/clubs.php";

  useEffect(() => {
    fetch("http://localhost/backend/getUserData.php", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUserData(response.data[0]);
      });
  }, []);

  return (
    <div className={style.border}>
      <section
        className={`${style.profile} ${style.boxInline} ${style.boxLeft}`}
      >
        <div className={style.boxColumn}>
          <img src={logo} alt="logo" />
          <a>
            <button>edytuj</button>
          </a>
        </div>
        <div className={style.boxColumn}>
          <h2>
            {userData.firstName} {userData.lastName}
          </h2>
          <h3>Klub: {userData.clubId}</h3>
          <h3>Trener: {userData.coachId}</h3>
        </div>
      </section>
      <section>
        <hr></hr>
        <hr></hr>
      </section>
      <section className={style.group}>
        <div className={`${style.boxInline} ${style.boxLeft}`}>
          <SelectList clubs={clubs}></SelectList>
          <a>
            <button onClick={handleClubChoice}>wybierz klub</button>
          </a>
          <a>
            <button>wypisz się</button>
          </a>
        </div>
      </section>
      <section className={style.workout}>
        <div className={`${style.boxInline} ${style.boxLeft}`}>
          <div className={`${style.boxColumn} ${style.workoutList}`}>
            <h3 className={style.textMainColor}>treningi moje</h3>
            <hr></hr>
            {<ShowList workouts={workouts}></ShowList>}
          </div>
          <a>
            <button>zobacz wyniki</button>
          </a>
        </div>
      </section>
    </div>
  );
}
export default Profile;
