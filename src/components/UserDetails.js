import React, { useEffect, useState } from "react";
import axios from "axios";
function UserDetail({ activeUserId }) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
            .then((res) => setUser(res.data))
    }, [activeUserId])


    return (
        <>
            <h3>Detaylar</h3>
            <pre>
                {
                    JSON.stringify(user, null, 2)
                }
            </pre>
        </>
    )
}

export default UserDetail;