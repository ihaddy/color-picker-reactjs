import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
    
    render() {
        const {colors} = this.props.palette;
        const colorBoxes = colors[300].map(color => (
            <ColorBox background= {color.hex} name={color.name}/>
            
        ))
        console.log(this.props)
        return (
            <div className="Palette">
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;