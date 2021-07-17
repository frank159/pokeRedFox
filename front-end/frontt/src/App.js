import React from "react";
import { Router } from "./routes/routers"
import GlobalState from './Context/GlobalState'

const App = () => {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;