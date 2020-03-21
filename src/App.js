
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card,
    CardContent,
    CardHeader
} from '@material-ui/core'

const url = "https://jsonplaceholder.typicode.com"

const App = () => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setUsers((await axios.get(`${url}/users`)).data)
                setPosts((await axios.get(`${url}/posts`)).data)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    return (
        <>
            {posts.map(({ id, userId, title, body }) => {
                const { name, username } = users.find(({ id }) => id === userId) || {}

                return (
                    <Card key={id}>
                        <CardHeader
                            title={name}
                            subheader={username}
                        />
                        <CardContent>
                            {title}
                            {body}
                        </CardContent>
                    </Card>
                )
            })}
        </>
    )
}

export default App