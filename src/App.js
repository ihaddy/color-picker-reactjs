import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import generatePalette from "./chromaHelpers";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { Route, Switch } from "react-router-dom";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      palettes: seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }

  savePalette(newPalette) {
    console.log(newPalette);
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/palette/new"
            render={(routeProps) => (
              <NewPaletteForm
                savePalette={this.savePalette}
                {...routeProps}
                palettes={this.state.palettes}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList palettes={this.state.palettes} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
          {/* <NoMatch render={() => <Palette palette={generatePalette(seedColors[4])}/>}/> */}
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={(routeProps) => (
              <SingleColorPalette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
                colorId={routeProps.match.params.colorId}
              />
            )}
          />
          {/* <Route path="/palette/:paletteId/:colorId" render={() => <SingleColorPalette />}/> */}
        </Switch>
      </div>
    );
  }
}
