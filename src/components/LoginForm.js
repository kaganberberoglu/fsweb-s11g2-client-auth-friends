import React from 'react';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function LoginForm() {
    const { setIsAuth } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        username: "workintech",
        password: "wecandoit",
    });

    const history = useHistory();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, id: Date.now() });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post('http://localhost:9000/api/login/', formData, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then((res) => {
                res.data.token ? setIsAuth(true) : setIsAuth(false);
                localStorage.setItem('token', res.data.token);
                history.push('/friend-list');
            })
            .catch((err) => console.log(err));
    }

    return (
        <form
            className="w-2/5 mx-auto font-extrabold mt-16"
            onSubmit={handleSubmit}
        >
            <h1 className="text-7xl text-center mb-4">Login</h1>
            <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="bg-black py-4 text-white tracking-widest px-4 mb-4"
                    onChange={handleChange}
                    value={formData.username}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="bg-black py-4 text-white tracking-widest px-4"
                    onChange={handleChange}
                    value={formData.password}
                />
                <button type="submit" className="bg-black text-white mt-4 px-4 py-4">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default LoginForm;
