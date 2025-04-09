

// import React from "react";
// import { useBuilder } from "./BuilderContext";

// const ElementEditorForm = () => {
//   const { elements, selectedId, updateElement } = useBuilder();
//   const selectedElement = elements.find((el) => el.id === selectedId);

//   if (!selectedElement) {
//     return (
//       <div className="card">
//         <h2 className="text-lg font-bold mb-4">🛠️ Edit Properties</h2>
//         <p className="text-gray-500">
//           Select an element on the canvas to edit its properties.
//         </p>
//       </div>
//     );
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     updateElement(selectedId, {
//       ...selectedElement,
//       properties: {
//         ...selectedElement.properties,
//         [name]: value,
//       },
//     });
//   };

//   return (
//     <div className="card">
//       <h2 className="text-lg font-bold mb-4">🛠️ Edit Properties</h2>

//       {/* 🔍 Display Element Label */}
//       <div className="mb-4">
//         <label className="block text-sm font-semibold mb-1">Element Type</label>
//         <p className="text-gray-800 font-medium">
//           {selectedElement.label || selectedElement.type}
//         </p>
//       </div>

//       {selectedElement.type === "text" && (
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Text Content
//           </label>
//           <input
//             name="content"
//             value={selectedElement.properties.content}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       )}

//       {selectedElement.type === "image" && (
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Image URL
//           </label>
//           <input
//             name="src"
//             value={selectedElement.properties.src}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       )}

//       {selectedElement.type === "button" && (
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Button Label
//           </label>
//           <input
//             name="label"
//             value={selectedElement.properties.label}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ElementEditorForm;









// components/ElementEditorForm.jsx
import React from "react";
import { useBuilder } from "./BuilderContext";

const ElementEditorForm = () => {
  const { elements, selectedId, updateElement } = useBuilder();
  const selectedElement = elements.find((el) => el.id === selectedId);

  if (!selectedElement) {
    return (
      <div className="card">
        <h2 className="text-lg font-bold mb-4">🛠️ Edit Properties</h2>
        <p className="text-gray-500">
          Select an element on the canvas to edit its properties.
        </p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateElement(selectedId, {
      ...selectedElement,
      properties: {
        ...selectedElement.properties,
        [name]: value,
      },
    });
  };

  return (
    <div className="card">
      <h2 className="text-lg font-bold mb-4">🛠️ Edit Properties</h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Element Type</label>
        <p className="text-gray-800 font-medium">
          {selectedElement.label || selectedElement.type}
        </p>
      </div>

      {selectedElement.type === "text" && (
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Text Content</label>
          <input
            name="content"
            value={selectedElement.properties.content}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      )}

      {selectedElement.type === "image" && (
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Image URL</label>
          <input
            name="src"
            value={selectedElement.properties.src}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      )}

      {selectedElement.type === "button" && (
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Button Label</label>
          <input
            name="label"
            value={selectedElement.properties.label}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      )}
    </div>
  );
};

export default ElementEditorForm;
