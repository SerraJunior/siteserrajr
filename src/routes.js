import React from "react"
import Home from './pages/Home'
import Blog from './pages/Blog'
    


import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
    
function App() {

    return(
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home>

                        </Home>
                    </Route>
                    <Route exact path='/Blog'>
                        <Blog>

                        </Blog>
                    </Route>
                </Switch>
            </Router>
    )       


}

export default App