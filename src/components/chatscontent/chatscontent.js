import React, { Component } from 'react';
import Switch from '../switch/switch';
import Infopanel from '../infopanel/infopanel';

import './chatscontent.css';


class Chatscontent extends Component {
    render() {
        return (
            <div className="chats_block">
                <div className="chats_block_header">
                    <Switch/>
                    <Infopanel/>

                    <div className="chats_block_header_content">
                    </div>
                </div>


            </div>

        );
    }
}

export default Chatscontent;
