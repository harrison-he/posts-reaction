import React, { useEffect } from 'react'
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    getPosts
} from './../Actions/HomeActions'
import {
    Card,
    CardContent
} from '@material-ui/core'

const Home = () => {
    const posts = useSelector(state => state.home.posts)
    console.log("Posts: ", posts)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getPosts()), [])

    return (
        <div style={{ padding: "0 24px"}}>
            {posts.map(({ id, title, body }) => (
                <Card
                    key={id}
                    style={{ marginBottom: "8px"}}
                >
                    <CardContent>
                        {title}
                        {body}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Home