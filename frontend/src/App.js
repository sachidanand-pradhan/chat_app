import "./App.css";
import { BrowserRouter as Route } from "react-router-dom";
import Home from "./pages/Home";
import Chatpage from "./pages/Chat";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
