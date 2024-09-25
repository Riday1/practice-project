import { Link, NavLink, useNavigate } from "react-router-dom";
import userImg from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const NavBar = () => {
    const { user, logOut, setUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const navItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to='/profile'>Profile</NavLink></li>

            </>
        }
        <li><NavLink to='/career'>Career</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>

    </>


    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('user logout')
                setUser(null)
                navigate('/authentication/login')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-base-100 py-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <img src={userImg} className="w-10 mr-6" alt="" />
                {
                    user ?
                        <p onClick={handleLogout} className="btn rounded-none btn-neutral px-10 ">Logout</p>
                        :

                        <Link to='/authentication/login' className="btn rounded-none btn-neutral px-10 ">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;