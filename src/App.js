
import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core'
import Home from './Pages/Home'

const App = () => (
    <>
        <AppBar>
            <Toolbar>
                <Typography variant="h6">
                    PostsReaction
            </Typography>
            </Toolbar>
        </AppBar>
        <Home />
    </>
)

export default App