
import "./App.css";
import { LeftMenu } from "./components/LeftMenu";
import { MainContainer } from "./components/MainContainer";
import { Right } from "./components/Right";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />
      <Right />

      <div className='background'></div>
   
    </div>
  );
}

export default App;
