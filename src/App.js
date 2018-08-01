import React, {Component} from 'react';
import './App.css';

import Loading from './Components/loading';
import Unauthed from './Components/unauthed';
import Offline from './Components/offline';
import Online from './Components/online';

const APP_STATES = [
    Loading,
    Unauthed,
    Offline,
    Online,
];

class App extends Component {

    status = APP_STATES[1];

    change_state = (state) => {
        this.status=state
    };

    render() {
        return (
            <this.status change_app_state={this.change_state} app_states={APP_STATES}/>
        );
    }
}

export default App;
