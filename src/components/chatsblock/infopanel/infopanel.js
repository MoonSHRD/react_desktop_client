import React, { Component } from 'react';

import './infopanel.css';

class Infopanel extends Component {
    render() {
        return (
            <div id="menu" className="infopanel">
                <div className="chats_block_header_title">
                    <img src={require('./header.png')} width="350" />
                </div>
                {/*<div className="chats_block_header_content">*/}
                {/*</div>*/}
            </div>

        );
    }
}

export default Infopanel;
