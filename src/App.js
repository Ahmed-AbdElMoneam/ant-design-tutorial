import "./App.css";
import General from "./General";
import Divide from "./Divide";
import Spacing from "./Spacing";
import { Divider } from "antd";

function App() {
  return (
    <div className="App">
      <General />
      <Divider />
      <Divide />
      <Spacing />
    </div>
  );
}

export default App;
