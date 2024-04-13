import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={css.container}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
        onClick={onImageClick}
        width="320"
        height="200"
      />
    </div>
  );
};

export default ImageCard;
