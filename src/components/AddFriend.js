import React from 'react';
import { useState } from 'react';
import axiosWithAuth from '../axiosWithAuth';
import { useHistory } from 'react-router-dom';

function AddFriend() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const history = useHistory();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, id: Date.now() });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:9000/api/friends', formData)
            .then((res) => history.push('/friend-list'))
            .catch((err) => console.log(err));
    }
    return (
        <form
            className="w-2/5 mx-auto font-extrabold mt-16"
            onSubmit={handleSubmit}
        >
            <h1 className="text-6xl text-center mb-4">ADD FRIEND</h1>
            <div className="flex flex-col">
                <label htmlFor="friend-name">friend name</label>
                <input
                    type="text"
                    id="friend-name"
                    name="name"
                    className="bg-black py-4 text-white tracking-widest px-4 mb-4"
                    onChange={handleChange}
                    value={formData.name}
                />
                <label htmlFor="friend-mail">friend email</label>
                <input
                    type="email"
                    id="friend-mail"
                    name="email"
                    className="bg-black py-4 text-white tracking-widest px-4"
                    onChange={handleChange}
                    value={formData.email}
                />
                <button type="submit" className="bg-black text-white mt-4 px-4 py-4">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default AddFriend;
