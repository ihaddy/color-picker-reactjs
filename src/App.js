import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import generatePalette from "./chromaHelpers";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React, { Component } from "react";
import Page from "./Page.js"



export default class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

    this.state = {
      deletePalettes: false,
      palettes: savedPalettes || seedColors,
    };

    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.reloadDefaults = this.reloadDefaults.bind(this);
    this.toggleDeletePalettes = this.toggleDeletePalettes.bind(this);
  }
  deletePalette(id) {
    this.setState(
      (oldstate) => ({
        palettes: oldstate.palettes.filter((palette) => palette.id !== id),
      }),
      this.syncLocalStorage
    );
  }
  savePalette(newPalette) {
    console.log(newPalette);
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }
  onlyUniquePalettes(array) {
    var a = array.concat();
    for (var i = 0; i < a.length; ++i) {
      for (var j = i + 1; j < a.length; ++j) {
        if (a[i] === a[j]) a.splice(j--, 1);
      }
    }

    return a;
  }
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }
  toggleDeletePalettes() {
    this.setState((prevState) => ({
      deletePalettes: !prevState.deletePalettes,
    }));
  }
  reloadDefaults() {
    this.setState(
      {
        palettes: this.onlyUniquePalettes(
          seedColors.concat(this.state.palettes)
        ),
      },
      window.localStorage.removeItem("palettes")
    );
  }
  render() {
    return (
      <div>
        <Route
          render={({location}) => (
            <TransitionGroup>
              <CSSTransition classNames='page' timeout={300} key={location.key}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/palette/new"
                    render={(routeProps) => (
                      <Page classNames>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        {...routeProps}
                        palettes={this.state.palettes}
                      />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/"
                    render={(routeProps) => (
                      <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        {...routeProps}
                        deletePalette={this.deletePalette}
                        reloadDefaults={this.reloadDefaults}
                        toggleDeletePalettes={this.toggleDeletePalettes}
                        isDeleteToggled={this.state.deletePalettes}
                      />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={(routeProps) => (
                      <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                      </Page>
                    )}
                  />
                
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={(routeProps) => (
                      <Page>
                      <SingleColorPalette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                        colorId={routeProps.match.params.colorId}
                      /> 
                      </Page>
                    )}
                  />
                <Route
                    render={(routeProps) => (
                      <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        {...routeProps}
                        deletePalette={this.deletePalette}
                        reloadDefaults={this.reloadDefaults}
                        toggleDeletePalettes={this.toggleDeletePalettes}
                        isDeleteToggled={this.state.deletePalettes}
                      />
                      </Page>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}
