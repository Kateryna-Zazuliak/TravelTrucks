import css from "./Button.module.css";
const Button = ({
  name,
  type = "button",
  className = css.base,
  disabled = false,
  ...params
}) => {
  return (
    <button type={type} className={className} disabled={disabled} {...params}>
      {name}
    </button>
  );
};

export default Button;
