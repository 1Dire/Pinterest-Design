import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LayoutComponent from "component/LayoutComponent";
import HeaderComponent from "component/HeaderComponent";
import ContentComponent from "component/ContentComponent";
function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <LayoutComponent></LayoutComponent>
      <ContentComponent></ContentComponent>
    </>
  );
}

export default App;
