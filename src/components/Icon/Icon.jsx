const Icon = ({ id, width = 32, height = 32, className }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`/assets/sprite.svg#${id}`}></use>
    </svg>
  );
};

export default Icon;
