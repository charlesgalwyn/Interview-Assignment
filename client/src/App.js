import "./App.scss";
import Navigation from "./components/Navigation";
import AppRoutes from "./Routes";

const App = (props) => {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
};

export default App;
