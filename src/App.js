import logo from './logo.svg';
import Palette from "./Palette"
import ColorBox from './ColorBox';
import seedColors from './seedColors';
import generatePalette from './chromaHelpers';

function App() {
  console.log(generatePalette(seedColors[1]))
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])}/>
      
    </div> 
    
  );
}

export default App;
