import { useEffect, useState } from "react";
import style from "./Panel.module.css";

function Panel() {
  var name = "name";
  var surname = "surname";

  const athletes = ["athlete1", "athlete2", "athlete3"];
  const workouts = ["workout1", "workout2", "workout3"];

  const [userData, setUserData] = useState([]);

  function ShowList2(props) {
    const list = props.athletes;

    return (
      <ul>
        {list.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    );
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

  return (
    <div className={style.border}>
      <section className={`${style.profile} ${style.boxLeft}`}>
        <div className={style.boxColumn}>
          <h2>
            {name} {surname}
          </h2>
          <a>
            <button>Zaplanuj trening</button>
          </a>
        </div>
      </section>
      <section className={`${style.lists} ${style.boxInline} ${style.boxLeft}`}>
        <div className={style.boxInline}>
          <div className={`${style.boxColumn} ${style.workoutList}`}>
            <h3 className={style.textMainColor}>Lista podopiecznych</h3>
            <hr></hr>
            {<ShowList2 athletes={athletes}></ShowList2>}
          </div>
          <a>
            <button>
              pokaż wynik<br></br>
            </button>
          </a>
        </div>
        <div className={style.boxInline}>
          <div className={`${style.boxColumn} ${style.workoutList}`}>
            <h3 className={style.textMainColor}>Lista treningów</h3>
            <hr></hr>
            {<ShowList workouts={workouts}></ShowList>}
          </div>
          <a>
            <button>wyniki treningu</button>
          </a>
        </div>
      </section>
      <section className={style.comment}>
        <form action="submit_comment.php" method="POST">
          <textarea id="comment" name="comment" rows="5" required></textarea>
          <div className={style.boxInline}>
            <a>
              <button type="submit">
                wyślij wiadomość<br></br>
              </button>
            </a>
            <a>
              <button type="submit">
                wyślij wiadomość<br></br>
                do wszystkich
              </button>
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}
export default Panel;
