import "./App.css";
import General from "./General";
import Divide from "./Divide";
import Spacing from "./Spacing";
import GridSystem from "./GridSystem";
import LayoutSystem from "./LayoutSystem";
import BreadCrumb from "./BreadCrumb";
import DropDownList from "./DropDownList";
import PaginationBar from "./PaginationBar";
import FormHandling from "./FormHandling";
import { Divider } from "antd";

function App() {
  return (
    <div className="App">
      <General />
      <Divider />
      <div className="Layout">
        <Divide />
        <Divider />
        <Spacing />
        <Divider />
        <GridSystem />
        <Divider />
        <LayoutSystem />
      </div>
      <Divider />
      <div className="Navigation">
        <BreadCrumb />
        <Divider />
        <DropDownList />
        <Divider />
        <PaginationBar />
      </div>
      <Divider />
      <FormHandling />
    </div>
  );
}

export default App;
