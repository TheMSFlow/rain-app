const importAllImages = () => {
    const images = import.meta.glob('../assets/images/*.png', { eager: true }); 
    const formattedImages = {};
  
    for (const path in images) {
      const fileName = path.replace('../assets/images/', '').replace('.png', ''); 
      formattedImages[fileName] = images[path].default; 
    }
  
    return formattedImages;
  };
  
  
  const images = importAllImages();
  
  export default images;
  