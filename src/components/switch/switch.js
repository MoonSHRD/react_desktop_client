import React, { Component } from 'react';
import './switch.css';




class Switch extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            switched: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    };
    onChangeHandler(){
        // alert("sdsds")
        this.setState(prevState => ({
            switched: !prevState.switched
        }));
    }
    render() {



        return (



                <div className={this.state.switched ? "switchContainer switchOn" : "switchContainer switchOff" } id="switchContainer" onClick={this.onChangeHandler} >
                    <div className="switchBg" ></div>
                    <div className="switchBtn"></div>
                    {this.state.switched}
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="60" height="10">
                        <defs>
                            <filter id="gooey">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                               result="goo"/>
                            </filter>
                        </defs>
                    </svg>

                </div>






        );
    }
}



export default Switch;
