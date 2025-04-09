import React from "react";
import ElementPalette from "./components/ElementPalette";
import Canvas from "./components/Canvas";
import ElementEditorForm from "./components/ElementEditorForm";
import Navbar from "./components/Navbar"; 
import "./app.css";

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar /> {}
      <div className="p-6">
        <div className="flex gap-4 h-full">
          <ElementPalette />
          <Canvas />
          <ElementEditorForm />
        </div>
      </div>
    </div>
  );
}

export default App;
