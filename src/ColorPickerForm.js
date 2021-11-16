import React, { Component } from 'react'

import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";


export default class ColorPickerForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentColor: "teal",
            newColorName: ""
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    updateCurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex });
      }
    handleChange(evt) {
    this.setState({
        [evt.target.name]: evt.target.value,
    });

    }
    handleSubmit() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName,
            };
        this.props.addNewColor(newColor)
        this.setState({newColorName: ""})
    }
    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
          this.props.colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          )
        );
        ValidatorForm.addValidationRule("isColorUnique", (value) =>
          this.props.colors.every(
            ({ color }) =>
              color.toLowerCase() !== this.state.currentColor.toLowerCase()
          )
        );
      }
    render() {
        const {paletteFull} = this.props
        const {currentColor, newColorName} = this.state
        return (
            <div>
            <ChromePicker
            color={currentColor}
            onChangeComplete={(newColor) => this.updateCurrentColor(newColor)}
            />
          <ValidatorForm onSubmit={this.handleSubmit}>
            <TextValidator
              value={newColorName}
              name="newColorName"
              onChange={this.handleChange}
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "this field is required",
                "That color name is taken. Color name must be unique!",
                "Color already in use!",
              ]}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: currentColor }}
              disabled={paletteFull}
              //The button has an onClick method that bypass the validator form. Remove that method and set the button to type="submit" and it should work.
              //   onClick={this.addNewColor}
              type="submit"
            >
              {paletteFull ? "The Palette is Full!" : "Add Colors"}
            </Button>
            </ValidatorForm>
            </div>
        )
    }
}
