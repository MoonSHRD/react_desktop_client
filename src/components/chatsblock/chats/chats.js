import React, { Component } from 'react';

import './chats.css';
import Label from '../../navbar/label/label'
import Moment from 'react-moment';


let now = new Date()
const numbers = ['Christopher Robin', "Harris Hanna", "Arnav Davies", "Elle Mcfadden\n", "Kyron Clemons\n", "Layla-Rose Zavala\n", "Guy Beach\n", "Laura Rosales\n", "Vishal Harrell\n", "Wilma Kearney\n", "Eshaal Massey\n"];
const listItems = numbers.map((numbers) =>
    <li key={numbers} className="chats_element"><a href="#"> <img src={require('./img/mat_61911.jpg')} height={40} width={40}/> <span>{numbers} </span> <Label notice={1} />  <span className="date"><Moment format="H:m" /></span> </a></li>
);
class Chats extends Component {
    render() {
        return (
            <div id="style-11"  className="chats scrollbar">
                <div className="search">
                    <input className="searchInput" placeholder="поиск"/>
                </div>
                <ul  className="">{listItems}</ul>
            </div>

        );
    }
}

export default Chats;
