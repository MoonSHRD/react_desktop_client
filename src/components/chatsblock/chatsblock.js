import React, { Component } from 'react';
import Switch from '../switch/switch';
import Infopanel from './infopanel/infopanel';

import './chatsblock.css';
import Chats from "./chats/chats";


class Chatsblock extends Component {
    render() {
        return (
            <div className="chats_block">
                <div className="chats_block_header">
                    <Switch/>
                    <Infopanel/>



                </div>
                <Chats/>


            </div>

        );
    }
}

export default Chatsblock;
