import { IoCloseSharp } from "react-icons/io5";

import { useImageOpenStore } from "../../store/store";

import "./ImageView.css";

const ImageView = () => {
  const { isOpen, setIsOpen, image } = useImageOpenStore();

  if (!isOpen || !image) return null;

  const closeView = () => {
    setIsOpen(false);
  };

  return (
    <div className="image-view-overlay" onClick={closeView}>
      <div className="image-view-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="" className="image-view-img" />
      </div>
      <button className="image-view-close" onClick={closeView}>
        <IoCloseSharp size={48} />
      </button>
    </div>
  );
};

export default ImageView;
