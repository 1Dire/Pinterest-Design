import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LayoutComponent from "component/LayoutComponent";
import HeaderComponent from "component/HeaderComponent";
import ContentComponent from "component/ContentComponent";
import { useSelector } from "react-redux";

function App() {
  let state = useSelector((state) => state.openWindow);
  console.log("aa", state);
  return (
    <>
      <HeaderComponent></HeaderComponent>
      {state.id && <ContentComponent></ContentComponent>}
      <LayoutComponent></LayoutComponent>
    </>
  );
}

export default App;
