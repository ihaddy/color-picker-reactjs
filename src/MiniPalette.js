import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import styles from "./styles/MiniPaletteStyles";
import { Delete } from "@material-ui/icons";

class MiniPalette extends Component{

  constructor(props) {
    super(props)
    this.handleDeletePalette = this.handleDeletePalette.bind(this)
    this.state = {
       
    }
  }
  handleDeletePalette(e){
    e.stopPropagation()
    this.props.deletePalette(this.props.id)
  }
    render(){
      const { classes, paletteName, emoji, colors, handleClick, deletePalette, id } = this.props;
      const miniColorBoxes = colors.map((color) => (
        <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
        />
        ));
        return (
          <div className={classes.root} onClick={handleClick}>
            <Delete onClick={this.handleDeletePalette} className={classes.deleteIcon} />
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5  className={classes.title}>
              {paletteName}
              <span className={classes.emoji}>{emoji}</span>
            </h5>
          </div>
        );
    }
  
}

export default withStyles(styles)(MiniPalette);
