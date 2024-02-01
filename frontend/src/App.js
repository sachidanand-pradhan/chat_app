import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Index from "./components/Authentication/Index";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      {/* <Index /> */}
      <Route path="/" component={Home} exact />
      <Route path="/chats" component={Chat} />
      {/* <Route path="*" component={PageNotFound} /> */}
    </div>
  );
}

export default App;
