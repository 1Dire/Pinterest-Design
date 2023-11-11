import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import 'style/tailwind.css'; // 테일윈드 스타일 파일 임포트
import LayoutComponent from "component/LayoutComponent";
import HeaderComponent from "component/HeaderComponent";
import ContentComponent from "component/ContentComponent";
import { useSelector } from "react-redux";

function App() {
  let state = useSelector((state) => state.openWindow);

  return (
    <>
      <HeaderComponent></HeaderComponent>
      {state.id && <ContentComponent></ContentComponent>}
      <LayoutComponent></LayoutComponent>
    </>
  );
}

export default App;
