import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const Layout = () => {
    return (
        <div className="container mx-auto">
           <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;