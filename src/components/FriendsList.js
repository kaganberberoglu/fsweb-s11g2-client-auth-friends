import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axiosWithAuth from '../axiosWithAuth';

function FriendsList() {
    const { friends, setFriends } = useContext(AuthContext);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:9000/api/friends')
            .then((res) => {
                setFriends(res.data);
            });
    }, []);

    return (
        <div className="w-3/5 mx-auto font-extrabold mt-8">
            <h1 className="text-7xl  mb-4">FRIENDS LIST</h1>
            <div className="flex flex-col gap-3">
                {friends.map((item) => (
                    <h2 className="text-2xl" key={item.id}>
                        {item.name} - {item.email}
                    </h2>
                ))}
            </div>
        </div>
    );
}

export default FriendsList;
