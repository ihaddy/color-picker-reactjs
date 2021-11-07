import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import generatePalette from "./chromaHelpers";
import { Route, Switch, } from "react-router-dom";

function App() {
  // console.log(generatePalette(seedColors[1]));


 
  
  function findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }

  return (
    //react router v6 functionality replaces render with element, using the old render{() => <h1>} test syntax is broken
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => <Palette 
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        }
      />
      {/* <NoMatch render={() => <Palette palette={generatePalette(seedColors[4])}/>}/> */}
    </Switch>
  );
}

export default App;
