import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";


const Main = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Header></Header>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;