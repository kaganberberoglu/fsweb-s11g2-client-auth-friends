import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Header() {
    const { setIsAuth } = useContext(AuthContext);
    const history = useHistory();

    function logOut() {
        localStorage.removeItem('token');
        setIsAuth(false);
        history.push('/login');
    }

    return (
        <div className="px-8 py-3 flex justify-between items-center font-extrabold border border-b-black border-b-4">
            <h1 className="text-2xl">Friends Database</h1>
            <nav className="flex gap-4">
                {(
                    <NavLink
                        to="/login"
                        className="bg-black text-white py-5 px-3"
                        activeClassName="text-green-400"
                    >
                        Login.
                    </NavLink>
                )}
                <NavLink
                    to="/friend-list"
                    className="bg-black text-white py-5 px-3 text-ye"
                    activeClassName="text-green-400"
                >
                    Friend List.
                </NavLink>
                <NavLink
                    to="/add-friend"
                    className="bg-black text-white py-5 px-3"
                    activeClassName="text-green-400"
                >
                    Add Friend.
                </NavLink>

                <NavLink
                    to="/login"
                    className="bg-black text-white py-5 px-3"
                    onClick={logOut}
                >
                    Logout
                </NavLink>

            </nav>
        </div>
    );
}

export default Header;
