import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import User from './User'

const FetchRandomUser = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    const FetchDetails = async () => {
        setLoading(true)
        const url = 'https://randomuser.me/api/';
        const response = await fetch(url);
        const data = await response.json();
        setUser(data.results[0])
        setLoading(false)
    }

    useEffect(() => {
        FetchDetails()
    }, [])

    return (
        <>
            <div>
                {loading ? <Loading /> : <User username={user?.login?.username} email={user.email} gender={user.gender} phone={user.phone} name={user?.name?.first} pix={user?.picture?.large} />}
            </div>

        </>
    )
}

export default FetchRandomUser
