import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </>
  );
}

export default App;
