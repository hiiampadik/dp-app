import React from 'react'
import ReactDOM from 'react-dom'

import {
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const history = createBrowserHistory();
import { createBrowserHistory } from "history";

// Pages
import About from './about/About'
import LandingPage from './landing/LandingPage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handleHistoryPush = (link) => {
        history.push(link);
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch location={location}>
                        <Route path="/about">
                            <About handleHistoryPush={this.handleHistoryPush}/>
                        </Route>

                        <Route path="/">
                            <LandingPage handleHistoryPush={this.handleHistoryPush} />
                        </Route>
                    </Switch>
                </div>

            </Router>
        )
    }
}

export default App