import NavBar from "../features/navBar/NavBar";
import PeopleList from "../features/people/People";

function Home(){
    return(
        <div>
            <NavBar>
                <PeopleList></PeopleList>
            </NavBar>
        </div>
    )
}

export default Home;