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
import LandingPage from './LandingPage'
import Map from './Map'
import Timeline from './Timeline'


// UI
import Header from './ui/Header'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 0,
        }
    }

    handleHeader = (link) => {
        history.push(link);
    }

    render() {
        return (


            <Router history={history}>
                <div>
                    

                    <Switch location={location}>
                        <Route path="/map">
                            <Map />
                            <Header handleHeader={this.handleHeader} classes="header-container-map"/>
                        </Route>
                        <Route path="/timeline">
                            <Timeline />
                            <Header handleHeader={this.handleHeader} classes="header-container-timeline"/>
                        </Route>
                        <Route path="/">
                            <LandingPage handleHeader={this.handleHeader} />
                        </Route>
                    </Switch>
                </div>

            </Router>
        )
    }
}

export default App