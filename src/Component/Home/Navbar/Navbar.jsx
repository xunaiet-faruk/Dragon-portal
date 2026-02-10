import { NavLink } from "react-router-dom";


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
                <button className="btn bg-gray-700 text-white px-8 py-2 font-semibold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;