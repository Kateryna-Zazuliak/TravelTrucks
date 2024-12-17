import css from "./Logo.module.css";

const Logo = () => {
  return (
    <svg className={css.logo}>
      <use href="/assets/sprite.svg#icon-logo"></use>
    </svg>
  );
};

export default Logo;
