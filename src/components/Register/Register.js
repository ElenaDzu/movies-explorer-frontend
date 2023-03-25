import { React } from "react";
import logoPath from "../../images/header-logom.svg";
//import { Route, Switch } from "react-router-dom";

function Register() {
    return (
    <section className="page">
      <a href="#">
        <img
          className="page page__logo"
          src={logoPath}
          alt="Логотип проекта"
        />
      </a>
      <h1 className="page__title">Добро пожаловать!</h1>
      <form className="page__form-reg" 
      //onSubmit={handleSubmit}
      >
        <label for="name" className="page__label-reg" >Имя</label>
        <input
            required
            name="name"
            className="page__text-reg"
            type="text"
            placeholder="Имя"
            //onChange={handleChange}
            //value={loginData.name}
        />
        <label for="name" className="page__label-reg" >E-mail</label>
        <input
          required
          name="email"
          className="page__text-reg"
          type="text"
          placeholder="Email"
          //onChange={handleChange}
          //value={loginData.email}
        />
        <label for="name" className="page__label-reg" >Пароль</label>
        <input
          required
          className="page__text-reg"
          type="password"
          placeholder="Пароль"
          //onChange={handleChange}
          //value={loginData.password}
          name="password"
        />
        <span className="page__input-errorreg">Что-то пошло не так...</span>
        <button type="submit" className="page__btn-reg">
          Зарегистрироваться
        </button>
        <div className="page__block">
          <p className="page__block">Уже зарегистрированы?</p>
          <a className="page__link" href="" >
            Войти
          </a>
        </div>
      </form>
    </section>
    );
}

export default Register;