import React from "react";
import "./style.css";
import "antd/dist/antd.css";
import ProjectRoute from "./components/ProjectRoute"

import { BrowserRouter  } from 'react-router-dom';

export default function App() {
  return (
     <BrowserRouter>
      <div className="App">

        <ProjectRoute/>
     
     </div>
     </BrowserRouter>
  );
}
