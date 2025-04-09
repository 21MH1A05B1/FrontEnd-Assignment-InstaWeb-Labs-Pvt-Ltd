
// import { createContext, useContext, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const BuilderContext = createContext();

// export const BuilderProvider = ({ children }) => {
//   const [elements, setElements] = useState([]);
//   const [selectedId, setSelectedId] = useState(null);

 
  
//   const addElement = (item) => {
//     const newElement = {
//       id: Date.now().toString(),
//       type: item.type,
//       properties: {},
//       label: item.label || item.type, // Add label here
//     };
  
//     if (item.type === "text") {
//       newElement.properties = { content: "Editable Text" };
//     } else if (item.type === "image") {
//       newElement.properties = { src: item.src || "" };
//     } else if (item.type === "button") {
//       newElement.properties = { label: "Click Me" };
//     }
  
//     setElements((prev) => [...prev, newElement]);
//   };
  

//   const updateElement = (id, updatedElement) => {
//     setElements((prev) =>
//       prev.map((el) => (el.id === id ? updatedElement : el))
//     );
//   };

//   const getDefaultProperties = (type) => {
//     switch (type) {
//       case "text":
//         return { content: "Editable text" };
//       case "image":
//         return { src: "https://via.placeholder.com/100" };
//       case "button":
//         return { label: "Click Me!" };
//       default:
//         return {};
//     }
//   };

//   return (
//     <BuilderContext.Provider
//       value={{ elements, addElement, updateElement, selectedId, setSelectedId }}
//     >
//       {children}
//     </BuilderContext.Provider>
//   );
// };

// export const useBuilder = () => useContext(BuilderContext);




import { createContext, useContext, useState } from "react";

const BuilderContext = createContext();

export const BuilderProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const addElement = (item) => {
    const newElement = {
      id: Date.now().toString(),
      type: item.type,
      label: item.label || item.type,
      properties: {},
    };

    switch (item.type) {
      case "text":
        newElement.properties = { content: "Editable Text" };
        break;
      case "image":
        newElement.properties = { src: item.src || "" };
        break;
      case "button":
        newElement.properties = { label: "Click Me" };
        break;
      default:
        break;
    }

    setElements((prev) => [...prev, newElement]);
  };

  const updateElement = (id, updatedElement) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? updatedElement : el))
    );
  };

  return (
    <BuilderContext.Provider
      value={{ elements, addElement, updateElement, selectedId, setSelectedId }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilder = () => useContext(BuilderContext);