import React, { Component } from 'react';
import './navbar.css';
import $ from 'jquery'
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import Label from "./label/label";


window.onload = function () {


    $('.menuBtn').click(function() {

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
                <div className="menu">
                    <a href="#">
                        <div className="image">
                            <img src={require('./img/logo.png')} />
                        </div>
                        <span>MOON SHARD</span>
                    </a>
                    <a href="#" className="menuBtn">
                        <div className="image">
                        <img src={require('./img/burger.png')} />
                        </div>
                        <span></span>
                    </a>
                    <a href="#">
                        <div className="image">
                        <img src={require('./img/men.png')} />
                        </div>
                            <span>Люди</span>
                        <Label notice={4} />
                    </a>

                    <a href="#">
                        <div className="image">
                        <img src={require('./img/groups.png')} />
                        </div>
                        <span>Группы</span>
                        <Label notice={7}/>
                    </a>
                    <a href="#">
                        <div className="image">
                        <img src={require('./img/balance.png')} />
                        </div>
                        <span>Кошелек</span>
                        <Label notice={14}/>

                    </a>
                    <a href="#">
                        <div className="image">
                            <img src={require('./img/calendar.png')} />
                        </div>
                        <span>Календарь</span>
                        <Label notice={2}/>
                    </a>
                    <a href="#">
                        <div className="image">
                        <img src={require('./img/settings.png')} />
                        </div>
                        <span>Настройки</span>
                    </a>

                </div>

                <div className="exit">
                    <a href="#">
                        <div className="image">
                        <img src={require('./img/logout.png')} />
                        </div>
                        <span></span>
                    </a>
                </div>

            </div>

        );
    }
}

export default Navbar;
