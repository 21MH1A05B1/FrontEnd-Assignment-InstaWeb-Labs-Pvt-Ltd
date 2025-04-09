

// import React from "react";
// import { useDrop } from "react-dnd";
// import { useBuilder } from "./BuilderContext";

// const Canvas = () => {
//   const { elements, addElement, selectedId, setSelectedId } = useBuilder();

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "element",
//     drop: (item) => {
//       addElement(item);
//     },
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//     }),
//   }));

//   return (
//     <div
//       ref={drop}
//       className={`canvas ${isOver ? "canvas-drag-over" : ""} card p-4 min-h-[300px]`}
//     >
//       <h2 className="text-xl font-semibold text-center mb-4">Canvas Area</h2>
//       {elements.length === 0 && (
//         <p className="text-gray-400 text-center">
//           Drag elements here to start building...
//         </p>
//       )}
//       {elements.map((el) => (
//         <div
//           key={el.id}
//           onClick={() => setSelectedId(el.id)}
//           className={`canvas-element mb-4 p-2 border rounded ${
//             selectedId === el.id ? "border-blue-500 bg-blue-50" : "border-gray-300"
//           }`}
//         >
//           {el.type === "text" && <p>{el.properties.content}</p>}
//           {el.type === "image" && (
//             <img
//               src={el.properties.src}
//               alt="Dropped"
//               className="max-w-full h-auto mx-auto"
//             />
//           )}
//           {el.type === "button" && (
//             <button className="px-4 py-2 bg-blue-500 text-white rounded">
//               {el.properties.label}
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Canvas;




import React from "react";
import { useDrop } from "react-dnd";
import { useBuilder } from "./BuilderContext";

const Canvas = () => {
  const { elements, addElement, selectedId, setSelectedId } = useBuilder();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "element",
    drop: (item) => addElement(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`canvas ${isOver ? "canvas-drag-over" : ""} card p-4 min-h-[300px]`}
    >
      <h2 className="text-xl font-semibold text-center mb-4">Canvas Area</h2>
      {elements.length === 0 && (
        <p className="text-gray-400 text-center">
          Drag elements here to start building...
        </p>
      )}
      {elements.map((el) => (
        <div
          key={el.id}
          onClick={() => setSelectedId(el.id)}
          className={`canvas-element mb-4 p-2 border rounded cursor-pointer ${
            selectedId === el.id ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          {el.type === "text" && <p>{el.properties.content}</p>}
          {el.type === "image" && (
            <img
              src={el.properties.src}
              alt={el.label || "Dropped"}
              className="max-w-full h-auto mx-auto"
            />
          )}
          {el.type === "button" && (
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              {el.properties.label}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Canvas;