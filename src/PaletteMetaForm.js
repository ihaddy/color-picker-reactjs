import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

export default class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      newPaletteName: "",
      stage: "form",
    };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }
  savePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    };
    this.setState({ stage: "" })
    this.props.savePalette(newPalette);
    
  }

  render() {
    return (
      <div>
        <Dialog
          aria-labelledby="emoji-form-dialog-title"
          open={this.state.stage === "emoji"}
          
        >
        <DialogTitle id="form-dialog-title">
        Please Select an Emoji!
        </DialogTitle>
          <Picker onSelect={this.savePalette} />
        </Dialog>
        {/* //the dialog component "on close" in MUI is called when you click AWAY
        from the dialog box // so if you click out of focus, it'll call thee
        hideform method and hide it */}
        <Dialog
          open={this.state.stage === "form"}
          onClose={this.props.hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a unique name for your new palette!
              </DialogContentText>

              <TextValidator
                label="Palette Name"
                value={this.state.newPaletteName}
                name="newPaletteName"
                onChange={this.handleChange}
                fullWidth
                margin="normal"
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Please enter a Palette Name!",
                  "Palette Name Already In Use!",
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}
