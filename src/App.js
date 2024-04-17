import React, { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const addImage = () => {
    setImages([...images, "image_url"]); // 'image_url' o'rniga qo'shmoqchi bo'lgan rasmingizning URL manzilini kiriting
  };

  const removeImage = () => {
    setImages(images.slice(0, -1)); // Oxirgi rasmni olib tashlaydi
  };

  return (
    <div>
      <button onClick={addImage}>+</button>
      <button onClick={removeImage}>-</button>
      <div>
        {images.map((assets, index) => (
          <img
            key={index}
            src="assets/aset.jpg"
            width={300}
            alt={`Rasm ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
