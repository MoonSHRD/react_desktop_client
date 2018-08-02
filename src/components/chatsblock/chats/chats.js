import React, { Component } from 'react';
import './chats.css';


const numbers = ['Christopher Robin', 'Christopher Robin', 3, 4, 5, 2, 3, 4, 5, 2, 3, 4];
const listItems = numbers.map((numbers) =>
    <li className="chats_element"><a href="#"> <img src={require('./img/mat_61911.jpg')} height={30} width={30}/> {numbers} </a></li>
);
class Chats extends Component {
    render() {
        return (
            <div id="style-11"  className="chats scrollbar">
                <ul  className="">{listItems}</ul>
            </div>

        );
    }
}

export default Chats;
