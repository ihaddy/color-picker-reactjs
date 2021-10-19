import logo from './logo.svg';
import Palette from "./Palette"
import ColorBox from './ColorBox';
import seedColors from './seedColors';


function App() {
  return (
    <div>
        <Palette {...seedColors[4]}/>
    </div>
  );
}

export default App;
