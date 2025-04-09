

// import React from "react";
// import { useDrag } from "react-dnd";
// import downloadImage from "../assets/download.png"; 


// const Item = ({ type, label, src }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "element",
//     item: { type, src, label }, // <-- Include label here
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       className="palette-item flex items-center gap-2 p-2 border rounded cursor-pointer hover:bg-gray-100"
//     >
//       {src && <img src={src} alt={label} className="w-6 h-6 object-contain" />}
//       {type !== "image" && <span>{label}</span>}
//     </div>
//   );
// };


// const ElementPalette = () => {
//   return (
//     <div className="card">
//       <h2 className="text-lg font-bold mb-4">Element Palette</h2>
//       <Item type="text" label="Text" />
//       <Item type="image" label="Image" src={downloadImage} />
//       <Item type="button" label="Button" />
//     </div>
//   );
// };

// export default ElementPalette;


import React from "react";
import { useDrag } from "react-dnd";
import downloadImage from "../assets/download.png";

const Item = ({ type, label, src }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "element",
    item: { type, src, label },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="palette-item flex items-center gap-2 p-2 border rounded cursor-pointer hover:bg-gray-100"
    >
      {src && <img src={src} alt={label} className="w-6 h-6 object-contain" />}
      {type !== "image" && <span>{label}</span>}
    </div>
  );
};

const ElementPalette = () => {
  return (
    <div className="card">
      <h2 className="text-lg font-bold mb-4">Element Palette</h2>
      <Item type="text" label="Text" />
      <Item type="image" label="Image" src={downloadImage} />
      <Item type="button" label="Button" />
    </div>
  );
};

export default ElementPalette;