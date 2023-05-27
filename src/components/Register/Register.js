import { React } from "react";
import { useState } from "react";
import useFormValidator from "../../hooks/useFormValidator";
import { VALIDATOR, StatusError } from "../../utils/constants";
import logoPath from "../../images/header-logom.svg";
import Preloader from "../Movies/Preloader/Preloader";

const Register = ({ onRegister }) => {
  const { handleChange, values, errors, isCorrect } = useFormValidator();

  const [errorbtn, setErrorbtn] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (evt) => {
    setErrorbtn("");
    evt.preventDefault();
    setIsProcessing(true);
    onRegister(values)
    .catch(() => {
        setErrorbtn(StatusError.BAD_REQUEST);
      });
  };

  return (
    <section className="page">
      <a className="page__logo" href="/">
        <img src={logoPath} alt="Логотип проекта" />
      </a>
      <h1 className="page__title">Добро пожаловать!</h1>
      <form className="page__form-reg" onSubmit={handleSubmit}>
        <label htmlFor="name" className="page__label-reg">
          Имя
        </label>
        <input
          required
          name="name"
          className="page__text-reg"
          type="text"
          placeholder="Имя"
          onChange={handleChange}
          value={values.name || ""}
          id="name"
          minLength="2"
          maxLength="40"
          pattern={VALIDATOR.name.regex}
          disabled={isProcessing}
        />
        <span className="page__input-errorreg" id="name-errorreg">
          {errors.name}
        </span>
        <label htmlFor="name" className="page__label-reg">
          E-mail
        </label>
        <input
          required
          name="email"
          className="page__text-reg"
          type="email"
          id="email"
          minLength="6"
          maxLength="40"
          placeholder="Email"
          onChange={handleChange}
          value={values.email || ""}
          pattern={VALIDATOR.email.regex}
          disabled={isProcessing}
        />
        <span className="page__input-errorreg" id="email-errorreg">
          {errors.email}
        </span>
        <label htmlFor="name" className="page__label-reg">
          Пароль
        </label>
        <input
          required
          className="page__text-reg"
          type="password"
          id="password"
          disabled={isProcessing}
          minLength="6"
          maxLength="40"
          placeholder="Пароль"
          onChange={handleChange}
          value={values.password || ""}
          name="password"
        />
        <span className="page__input-errorreg" id="password-errorreg">
          {errors.password}
        </span>
        <p className="page__btn-errorreg">{errorbtn}</p>
        {isProcessing ? <Preloader /> : ""}
        <button type="submit" className="page__btn-reg" disabled={!isCorrect || isProcessing}>
          Зарегистрироваться
        </button>
        <div className="page__block">
          <p className="page__block">Уже зарегистрированы?</p>
          <a className="page__link" disabled={isProcessing} href="/sign-in">
            Войти
          </a>
        </div>
      </form>
    </section>
  );
};

export default Register;
