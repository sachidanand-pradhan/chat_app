import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/chats" component={Chat} />
      </div>
    </ErrorBoundary>
  );
}

export default App;

// nvm use 14.17.0
// Now using node v14.17.0 (npm v6.14.13)
// (base) sachidanandpradhan@EBL-C02D9GSAMD6M frontend % nvm ls
