import { useState } from "react";
import "./App.css";
import Navber from "./app/common/Navber";
import Routing from "./routes/Routing";

function App() {
  return (
    <>
      <div className="">
        <Navber />
        <Routing />
      </div>
    </>
  );
}

export default App;
