import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

export default class PaletteMetaForm extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           open: true,
           newPaletteName: ""
      }
      this.handleChange = this.handleChange.bind(this)
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
      
      render() {
        return (
     
            //the dialog component "on close" in MUI is called when you click AWAY from the dialog box
            // so if you click out of focus, it'll call thee hideform method and hide it
            <Dialog
              open={this.state.open}
              onClose={this.props.hideForm}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
              <ValidatorForm
              onSubmit={() => this.props.savePalette(this.state.newPaletteName)}
            >
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
        );
      }
    }

