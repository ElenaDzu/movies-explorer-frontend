import useFormValidator from "../../hooks/useFormValidator";
import { VALIDATOR } from "../../utils/constants";
import logoPath from "../../images/header-logom.svg";

const Login = ({ isProcessing, onLogin }) => {
  const { values, errors, isCorrect, handleChange } = useFormValidator();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values);
  };

  return (
    <section className="page">
      <a className="page__logo-login" href="/">
        <img src={logoPath} alt="Логотип проекта" />
      </a>
      <h1 className="page__title">Рады видеть!</h1>
      <form
        className="page__form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="page__label">
          E-mail
        </label>
        <input
          required
          name="email"
          id="email"
          minLength='6'
          maxLength='40'
          className="page__text"
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
          value={values.email || " "}
          disabled={isProcessing}
          pattern={VALIDATOR.email.regex}
        />
        <span className="page__input-error" id="email-error">{errors.email}</span>
        <label htmlFor="name" className="page__label">
          Пароль
        </label>
        <input
          required
          className="page__text"
          type="password"
          id="password"
          onChange={handleChange}
          placeholder="Пароль"
          value={values.password || " "}
          name="password"
          disabled={isProcessing}
        />
        <span className="page__input-error" id="password-error">{errors.password}</span>
        <button type="submit" className="page__btn" disabled={!isCorrect}>
          Войти
        </button>
        <div className="page__block">
          <p className="page__block">Еще не зарегистрированы?</p>
          <a className="page__link" href="/sign-up">
            Регистрация
          </a>
        </div>
      </form>
    </section>
  );
};

export default Login;
