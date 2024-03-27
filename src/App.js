import "./App.scss";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container">
          <div className=" app-conent"></div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
