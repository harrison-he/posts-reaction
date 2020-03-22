
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Feed from './Feed'

const App = () => {
    
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Feed />
                </Route>
            </Switch>
        </Router>
    )
}

export default App