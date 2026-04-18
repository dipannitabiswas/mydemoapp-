import Imagecard from './Components/Imagecard'; // imagecard is a functional component.
import './App.css';

function App() {
  return (
    //JSX= javascript xml
    <div className="App">
      <Imagecard 
      Name="Dipannita Biswas"
      ImgLink="https://avatars.githubusercontent.com/u/177311677?v=4"
       />
      <Imagecard 
      Name="Github" 
      ImgLink="https://pngimg.com/uploads/github/github_PNG67.png" 
      />
    </div>
  );
}

export default App;
