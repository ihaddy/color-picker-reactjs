import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import withStyles from "@material-ui/styles/withStyles";
import styles from "./styles/PaletteListStyles";


class PaletteList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
  goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>react colors</h1>
            <Link to="/palette/new"> Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
                 //using arrow function for goToPalette to bind it this way, not ideal
                <MiniPalette {...palette} handleClick={ () => this.goToPalette(palette.id)}/>

            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
