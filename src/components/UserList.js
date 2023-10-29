import React, { useEffect, useState } from "react";
import axios from "axios"

function UserList({ setActiveUserId }) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => (
                setUsers(res.data)

            ))
    }, [])
    return (
        <>
            <h3>Kullanıcılar</h3>
            <ul className="user-list">
                {
                    users.map((user) => (
                        <li key={user.id} onClick={() => setActiveUserId(user.id)}>{user.name}</li>
                    ))
                }

            </ul>

        </>
    )
}

export default UserList