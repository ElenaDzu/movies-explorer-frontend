import { React, useState } from "react";
import logoPath from "../../images/header-logom.svg";

function Login({handleLogin}) {

    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginData({
        ...loginData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin(loginData);
    }

    return (
    <section className="page">
      <a href="/">
        <img
          className="page__logo"
          src={logoPath}
          alt="Логотип проекта"
        />
      </a>
      <h1 className="page__title">Рады видеть!</h1>
      <form  className="page__form" 
      onSubmit={handleSubmit}
      >
        <label for="name" className="page__label" >E-mail</label>
        <input
          required
          name="email"
          className="page__text"
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
          value={loginData.email}
        />
        <label for="name" className="page__label" >Пароль</label>
        <input
          required
          className="page__text"
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
          value={loginData.password}
          name="password"
        />
        {/* <span className="page__input-error">Что-то пошло не так...</span> */}
        <button type="submit" className="page__btn">
          Войти
        </button>
        <div className="page__block">
          <p className="page__block">Еще не зарегистрированы?</p>
          <a className="page__link" href="" >
            Регистрация
          </a>
        </div>
      </form>
    </section>
    );
}

export default Login;