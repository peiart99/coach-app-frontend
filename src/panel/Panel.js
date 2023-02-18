import './Panel.css';
function Panel() {

    var name = "name";
    var surname = "surname";

    const athletes = ["athlete1", "athlete2", "athlete3"];
    const workouts = ["workout1", "workout2", "workout3"];

    function ShowList2(props) {
        const list = props.athletes;

        return (
            <ul>
                {list.map((e) => (
                    <li>{e}</li>
                ))}
            </ul>
        );
    };

    function ShowList(props) {
        const list = props.workouts;

        return (
            <ul>
                {list.map((e) => (
                    <li>{e}</li>
                ))}
            </ul>
        );
    };

    return (
        <div className={'border'}>
            <section className={'profile box-left'}>
                <div className={'box-column'}>
                    <h2>{name} {surname}</h2>
                    <a><button>Zaplanuj trening</button></a>
                </div>
            </section>
            <section className={'lists box-inline box-left'}>
                <div className={'box-inline '}>
                    <div className={'box-column workout-list'}>
                        <h3 className={'text-main-color'}>Lista podopiecznych</h3>
                        <hr></hr>
                        {<ShowList2 athletes={athletes}></ShowList2>}
                    </div>
                    <a><button>pokaż wynik<br></br>{} {}</button></a>
                </div>
                <div className={'box-inline'}>
                    <div className={'box-column workout-list'}>
                        <h3 className={'text-main-color'}>Lista treningów</h3>
                        <hr></hr>
                        {<ShowList workouts={workouts}></ShowList>}
                    </div>
                    <a><button>wyniki treningu</button></a>
                </div>
            </section>
            <section className={'comment'}>
                <form action="submit_comment.php" method="POST">
                    <textarea id="comment" name="comment" rows="5" required></textarea>
                    <div className={'box-inline'}>
                        <a><button type="submit">wyślij wiadomość<br></br>
                            {} {}</button></a>
                        <a><button type="submit">wyślij wiadomość<br></br>
                            do wszystkich</button></a>
                    </div>
                </form>
            </section>
        </div>
    );
}
export default Panel;