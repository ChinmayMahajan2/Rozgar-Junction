import FindJob from "../features/findJob/FindJob";
import NavBar from "../features/navBar/NavBar";

function FindJobPage(){
    return(
        <div>
            <NavBar>
                <FindJob></FindJob>
            </NavBar>
        </div>
    )
}

export default FindJobPage;