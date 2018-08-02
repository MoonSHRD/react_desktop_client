import React, { Component } from 'react';
import './preloader.css';




class Preloader extends Component {

    render() {
        return (

            <div className="preloader-bg">
                <div className="cssload-thecube">
                    <div className="cssload-cube cssload-c1"></div>
                    <div className="cssload-cube cssload-c2"></div>
                    <div className="cssload-cube cssload-c4"></div>
                    <div className="cssload-cube cssload-c3"></div>
                </div>
            </div>

        );
    }
}



export default Preloader;
