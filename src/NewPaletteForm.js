import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Button } from "@material-ui/core";
import styles from "./styles/NewPaletteFormStyles";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import seedColors from "./seedColors";


class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      currentColor: "teal",
      newColorName: "",
      colors: [],
      newPaletteName: "",
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  addNewColor(newColor) {
    //setting newColorname blank on addnewcolor is the equivalent of an onsubmit clear codeblock to reset input after submission
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: "",
    });
  }
  deleteColor(colorName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };
  savePalette(newPalette) {

    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-")
    newPalette.colors =  this.state.colors
    
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }
  clearColors() {
    this.setState({ colors: [] });
  }
  addRandomColor() {
    
    const allColors = seedColors.map((p) => p.colors).flat();
    let randomColor;
    let rand;
    let colorIsDuplicate = true;
    while (colorIsDuplicate) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      colorIsDuplicate = this.state.colors.some(color => color.name === randomColor.name)
    }
    this.setState({ colors: [...this.state.colors, randomColor] });
  }
  render() {
    const { classes } = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length >= this.props.maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          palettes={this.props.palettes}
          open={this.state.open}
          newPaletteName={this.state.newPaletteName}
          savePalette={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography
              style={{ alignSelf: "center" }}
              variant="h4"
              gutterBottom
            >
              {" "}
              Design Your Palette!
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.clearColors}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.addRandomColor}
                disabled={paletteFull}
                className={classes.button}
              >
                {paletteFull ? "The Palette is Full!" : "Random Color"}
              </Button>
            </div>
            <ColorPickerForm
              paletteFull={paletteFull}
              addNewColor={this.addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            deleteColor={this.deleteColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={20}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
