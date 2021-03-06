import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/styles/withStyles";
import styles from "./styles/PaletteStyles";




class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex"};
    this.changeFormat = this.changeFormat.bind(this)
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    //slice 1 drops the first element of the shades, the 50 level shade of the color that we don't want
    // because the 50 shade was one of the seeds used to generate during the generate palette logic
    return shades.slice(1);
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const {format } = this.state
    const {paletteName, emoji, id} = this.props.palette
    const {classes } = this.props
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        ShowingFullPalette={false}
      />
    ));
    return (
      <div className={`${classes.Palette}`}>
          <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette)