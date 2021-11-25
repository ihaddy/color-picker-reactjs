import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import withStyles from "@material-ui/styles/withStyles";
import styles from "./styles/PaletteListStyles";
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { blue, red } from "@material-ui/core/colors";
import { Check, Close  } from "@material-ui/icons";
class PaletteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDeleteDialog: false,
      idForDeletedPalette: ""
    };
    this.toggleDialog = this.toggleDialog.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.goToPalette = this.goToPalette.bind(this)
  }
  toggleDialog(id){

    this.setState({
      openDeleteDialog: !this.state.openDeleteDialog,
      idForDeletedPalette: id
    })
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  handleDelete(){
    this.props.deletePalette(this.state.idForDeletedPalette)
    this.setState({idForDeletedPalette: ""})
    this.toggleDialog()
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
                  handleClick={this.goToPalette}
                  // deletePalette={this.props.deletePalette}
                  openDialog={this.toggleDialog}
                  key={palette.id}
                  id={palette.id}
                  isDeleteToggled={this.props.isDeleteToggled}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog ariea-labelledby="delete-dialog-title" open={this.state.openDeleteDialog} onClose={this.toggleDialog}>
          <DialogTitle id="delete-dialog-title"> Confirm Delete?</DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                  <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                    <Check />
                  </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.toggleDialog}>
              <ListItemAvatar>
                  <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                    <Close />
                  </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
