import React, { Component } from 'react';
import './navbar.css';
import $ from 'jquery'
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';


window.onload = function () {

    // $('.icon-bar').css('width', '400px');

    $('.icon-bar').click(function() {

        $('.icon-bar').toggleClass('resize', 500)
    })
    var container = document.querySelector("#switchContainer");

    function onOffSwitch(){
        if(container.classList.contains("switchOn")){
            container.classList.remove("switchOn");
            container.classList += " switchOff";
        }
        else{
            container.classList.remove("switchOff");
            container.classList += " switchOn";
        }
    }
    container.addEventListener("click", onOffSwitch, false);

};
class Navbar extends Component {
    render() {
        return (
            <div id="menu" className="icon-bar">
                <a href="#"><img src={require('./img/logo.png')} /><span>MOON SHARD</span> </a>
                <a href="#"><img src={require('./img/search.png')} />  <input type="text" /> </a>
                <a href="#"><img src={require('./img/chats.png')} /> <span>Чаты</span> </a>
                <a href="#"><img src={require('./img/groups.png')} /> <span>Группы</span></a>
                <a href="#"><img src={require('./img/balance.png')} /> <span>Баланс</span></a>
                <a href="#"><img src={require('./img/settings.png')} /><span>Настройки</span> </a>

            </div>

        );
    }
}

export default Navbar;
