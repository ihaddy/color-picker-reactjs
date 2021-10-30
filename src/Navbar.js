import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";
import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="/">reactcolorpicker</a>
                </div>
                <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
          />
            </header>
        )
    }
}

export default Navbar