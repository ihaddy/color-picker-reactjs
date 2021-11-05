import Palette from "./Palette";
import seedColors from "./seedColors";
import generatePalette from "./chromaHelpers";
import { Route, Routes, useParams, useLocation, useNavigate } from "react-router-dom";

function App() {
  // console.log(generatePalette(seedColors[1]));


 
  
  function findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }

  return (
    //react router v6 functionality replaces render with element, using the old render{() => <h1>} test syntax is broken
    <Routes>
      <Route
        exact
        path="/"
        element={<Palette palette={generatePalette(seedColors[4])} />}
      />
      <Route
        exact
        path="/palette/:id"
        element={withRouter(<Palette params={params}
            palette={generatePalette(findPalette(params))}
          />
        )}
      />
      {/* <NoMatch render={() => <Palette palette={generatePalette(seedColors[4])}/>}/> */}
    </Routes>
  );
}

export default App;
