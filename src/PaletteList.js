import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import withStyles from "@material-ui/styles/withStyles";
import styles from "./styles/PaletteListStyles";
import { Button } from "@material-ui/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
            <h1 className={classes.title}>React Color Picker</h1>
            <div className={classes.navButtons}>
              <Button
                style={{margin: "5px"}}
                onClick={this.props.reloadDefaults}
                color="secondary"
                variant="contained"
              >
                Reload Defaults
              </Button>
              <Button
                style={{margin: "5px"}}
                onClick={this.props.toggleDeletePalettes}
                color="secondary"
                variant="contained"
              >
                {this.props.isDeleteToggled
                  ? "UnToggle Delete"
                  : "Delete a Palette"}
              </Button>
              <Button
                style={{margin: "5px"}}
                color="primary"
                variant="contained"
                className={classes.singleButton}
              >
                <Link to="/palette/new"> Create Palette</Link>
              </Button>
            </div>
          </nav>

          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={400}>
                {/* //using arrow function for goToPalette to bind it this way, not ideal// */}
                <MiniPalette
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                  deletePalette={this.props.deletePalette}
                  key={palette.id}
                  id={palette.id}
                  isDeleteToggled={this.props.isDeleteToggled}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
