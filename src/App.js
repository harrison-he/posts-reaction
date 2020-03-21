
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card,
    CardContent
} from '@material-ui/core'

const App = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setPosts((await axios.get("https://jsonplaceholder.typicode.com/posts")).data)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    return (
        <>
            {posts.map(({ id, title, body }) => (
                <Card key={id}>
                    <CardContent>
                        {title}
                        {body}
                    </CardContent>
                </Card>
            ))}
        </>
    )
}

export default App