import './Profile.css';
import logo from "../logo.svg";
function Profile() {

    var name = "name";
    var surname = "surname";

    var group = "group";
    var coach = "coach";

    const groups = ["group1", "group2", "group3"];

    return (
        <div className={'border'}>
            <section className={'profile box-inline'}>
                <div className={'box-column'}>
                    <img src={logo} alt="logo" />
                    <a><button>edytuj</button></a>
                </div>
                <div className={'box-column'}>
                    <h2>{name} {surname}</h2>
                    <h3>klub: {group}</h3>
                    <h3>Trener: {coach}</h3>
                </div>
            </section>
            <section>
                <hr></hr>
                <hr></hr>
            </section>
            <section className={'group'}>
                <div className={'box-inline box-left'}>
                    <select>
                        {groups}
                    </select>
                    <a><button>wybierz klub</button></a>
                    <a><button>wypisz się</button></a>
                </div>
            </section>
        </div>
    );
}
export default Profile;