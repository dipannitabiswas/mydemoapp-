import{ useState } from 'react';
import Imagecard from './Components/Imagecard'; // imagecard is a functional component.default export
import './App.css';
import {userData} from './constants/constant'; // we can import any variable or function from other file by using export and import keyword. normal export
function App() {
  const [showFlag, setShowFlag] = useState(null); // useState is a hook which is used to manage state in functional component. it returns an array of two elements. first element is the state variable and second element is the function which is used to update the state variable. we can use array destructuring to get the state variable and the function.
  const clickHandler = (id) => {
    showFlag ? setShowFlag(null) : setShowFlag(id);
  };
  return (
    //JSX= javascript xml
  <div className="App">   {/* if this tag is used then no other element can be used in return statement without this tag. it is called fragment tag.*/}
    {
      userData.map((user) => (
        <div key={user.ImgLink}>  
        <Imagecard Name={user.Name} ImgLink={`https://avatars.githubusercontent.com/u/${user.ImgLink}?v=4`} />
        <h3 style={{ cursor: 'pointer' }} onClick={()=>clickHandler(user.ImgLink)}>
          {user.isStudent ? "Student" : "Learner"} ⬇️⬇️⬇️
        </h3>
        {showFlag === user.ImgLink  && ( <p>{user.biodescription}</p>)}
        </div>
      ))
    }
    </div>

  );
}
//always pass key in map funtion.
export default App;
