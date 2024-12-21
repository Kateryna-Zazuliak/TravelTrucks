import css from "./Button.module.css";
const Button = ({
  name,
  type = "button",
  className = css.base,
  disabled = false,
}) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {name}
    </button>
  );
};

export default Button;
