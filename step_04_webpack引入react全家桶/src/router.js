import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Home from "src/pages/home";
import NotFound from "./pages/NotFound"
import List from "./pages/List"

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/list">list</Link></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/list" component={List} />
                    <Route path="/notFound" component={NotFound} />
                    <Redirect to="/notFound" />
                </div>
            </Router>
        )
    }
}

export default App;