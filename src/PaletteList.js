import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import withStyles from "@material-ui/styles/withStyles";
import styles from "./styles/PaletteListStyles";
import { Button } from "@material-ui/core";

class PaletteList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Color Picker</h1>
            <div className={classes.navButtons}>
              <Button
                onClick={this.props.reloadDefaults}
                color="secondary"
                variant="contained"
              >
                Reload Defaults
              </Button>
              <Button
                onClick={this.props.toggleDeletePalettes}
                color="secondary"
                variant="contained"
              >
                {this.props.isDeleteToggled
                  ? "UnToggle Delete"
                  : "Delete a Palette"}
              </Button>
              <Button color="primary" variant="contained">
                <Link to="/palette/new"> Create Palette</Link>
              </Button>
            </div>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              //using arrow function for goToPalette to bind it this way, not ideal
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
                deletePalette={this.props.deletePalette}
                key={palette.id}
                id={palette.id}
                isDeleteToggled={this.props.isDeleteToggled}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
