import "./Profile.css";
import logo from "../../logo.svg";
function Profile() {
  var name = "name";
  var surname = "surname";

  var group = "group";
  var coach = "coach";

  const groups = ["group1", "group2", "group3"];
  const workouts = ["workout1", "workout2", "workout3"];

  function SelectList(props) {
    const list = props.groups;

    const options = list.map((e) => <option key={e}>{e}</option>);

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

  return (
    <div className={"border"}>
      <section className={"profile box-inline box-left"}>
        <div className={"box-column"}>
          <img src={logo} alt="logo" />
          <a>
            <button>edytuj</button>
          </a>
        </div>
        <div className={"box-column"}>
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
      <section className={"group"}>
        <div className={"box-inline box-left"}>
          <SelectList groups={groups}></SelectList>
          <a>
            <button>wybierz klub</button>
          </a>
          <a>
            <button>wypisz się</button>
          </a>
        </div>
      </section>
      <section className={"workout"}>
        <div className={"box-inline box-left"}>
          <div className={"box-column workout-list"}>
            <h3 className={"text-main-color"}>treningi moje</h3>
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
