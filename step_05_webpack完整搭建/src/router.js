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
                        <li><Link to="/404">404</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/list" component={List} />
                        {/* <Route  component={NotFound} /> */}
                        <Route path="/notFound" component={NotFound} />
                        <Redirect to="/notFound" />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;

