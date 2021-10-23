import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {level: 500}
    }
    
    render() {
        const {colors} = this.props.palette;
        const colorBoxes = colors[300].map(color => (
            <ColorBox background= {color.hex} name={color.name}/>
            
        ))
        console.log(this.props)
        return (
            <div className="Palette">
                <Slider />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;