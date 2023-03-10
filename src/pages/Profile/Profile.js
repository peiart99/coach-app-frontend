import style from "./Profile.module.css";
import logo from "../../logo.svg";
import {useEffect, useState} from "react";
function Profile() {
  var name = "name";
  var surname = "surname";

  var group = "group";
  var coach = "coach";

  const [clubs, setClubs] = useState([])
  const [workouts, setWorkouts] = useState([])

  function SelectList(props) {
    const list = props.clubs;

    const options = list.map((e) => <option key={e.id}>{e.name}</option>);

    return <select>{options}</select>;
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
  useEffect(()=>{
        fetch(loginEndpoint)
            .then((res)=>res.json())
            .then((res)=>{
              console.log(res)
              setClubs(res)
              //setWorkouts(res.data.value)
            });

      }
  ,[])
  const loginEndpoint = 'http://szulerinio.pl/backend/clubs.php'


  return (
    <div className={style.border}>
      <section className={`${style.profile} ${style.boxInline} ${style.boxLeft}`}>
        <div className={style.boxColumn}>
          <img src={logo} alt="logo" />
          <a>
            <button>edytuj</button>
          </a>
        </div>
        <div className={style.boxColumn}>
          <h2>
            {name} {surname}
          </h2>
          <h3>klub: {group}</h3>
          <h3>Trener: {coach}</h3>
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
            <button>wybierz klub</button>
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
