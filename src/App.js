import "./App.css";
import General from "./General";
import Divide from "./Divide";
import Spacing from "./Spacing";
import GridSystem from "./GridSystem";
import LayoutSystem from "./LayoutSystem";
import BreadCrumb from "./BreadCrumb";
import DropDownList from "./DropDownList";
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
      <Divider />
      <BreadCrumb />
      <Divider />
      <DropDownList />
    </div>
  );
}

export default App;
