import React, { Component } from "react";
// import { Link, History } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color:"white"
  },
  palettes: {
    boxSize: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  },
};
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
