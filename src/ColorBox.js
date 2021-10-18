import React, { Component } from 'react'
import './ColorBox.css';

class ColorBox extends Component {
    render(){
        const {name,background} = this.props
        return (
            <div style={{background: background }} className="ColorBox">
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button"> Copy </button>
                </div>
                <span className="see-more">More</span>
                {/* <span>MORE</span>
                <span>{this.props.name}</span> */}
            </div>
        )
    }
}

export default ColorBox;