import "./App.scss";
import Header from "./Components/Header/Header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>test link</div>
      <div>
        <button>
          <Link to="/users"> users </Link>
        </button>
        <button>
          <Link to="/admin"> Admin </Link>
        </button>
      </div>
    </div>
  );
};

export default App;
