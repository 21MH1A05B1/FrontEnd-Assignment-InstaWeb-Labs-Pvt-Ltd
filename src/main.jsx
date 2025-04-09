


// // main.jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BuilderProvider } from "./components/BuilderContext";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <DndProvider backend={HTML5Backend}>
//       <BuilderProvider>
//         <App />
//       </BuilderProvider>
//     </DndProvider>
//   </React.StrictMode>
// );




import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BuilderProvider } from "./components/BuilderContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <BuilderProvider>
        <App />
      </BuilderProvider>
    </DndProvider>
  </React.StrictMode>
);