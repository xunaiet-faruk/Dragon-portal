import { Link, NavLink } from "react-router-dom";
import Login from "../../../Authentication/Login";
import AuthModal from "../../../Authentication/AuthenticateModal";


const Navbar = () => {
    return (
        <div className="flex justify-between w-11/12 mx-auto pt-5">
            <div></div>
            <div className="text-xl font-semibold space-x-12">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="flex items-center justify-center gap-5">
                <img src='/user.png' alt="" />
               <AuthModal/>
            </div>
        </div>
    );
};

export default Navbar;