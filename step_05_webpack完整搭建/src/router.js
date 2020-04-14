import React, { PureComponent, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const Home = lazy(() => import('src/pages/home'))
const NotFound = lazy(() => import('src/pages/NotFound'))
const List = lazy(() => import('src/pages/List'))

class App extends PureComponent {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/list">list</Link></li>
                        <li><Link to="/404">404</Link></li>
                    </ul>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/list" component={List} />
                            {/* <Route  component={NotFound} /> */}
                            <Route path="/notFound" component={NotFound} />
                            <Redirect to="/notFound" />
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        )
    }
}

export default App;

