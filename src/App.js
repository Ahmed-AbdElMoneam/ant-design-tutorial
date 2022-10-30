import "./App.css";
import General from "./General";
import Divide from "./Divide";
import Spacing from "./Spacing";
import GridSystem from "./GridSystem";
import LayoutSystem from "./LayoutSystem";
import { Divider } from "antd";

function App() {
  return (
    <div className="App">
      <General />
      <Divider />
      <Divide />
      <Divider />
      <Spacing />
      <Divider />
      <GridSystem />
      <Divider />
      <LayoutSystem />
    </div>
  );
}

export default App;
