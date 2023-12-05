import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Index from "./components/Authentication/Index";

function App() {
  return (
    <div className="App">
      <Index />
      <Route path="/" component={Home} exact />
      <Route path="/chat" component={Chat} />
    </div>
  );
}

export default App;
