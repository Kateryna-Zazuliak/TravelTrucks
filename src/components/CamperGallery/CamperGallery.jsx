import css from "./CamperGallery.module.css";
const CamperGallery = ({ gallery }) => {
  return (
    <div className={css.imageWrapper}>
      {gallery.map((image, index) => (
        <img
          key={index}
          src={image.original}
          alt={`Camper image ${index}`}
          className={css.image}
        />
      ))}
    </div>
  );
};

export default CamperGallery;
