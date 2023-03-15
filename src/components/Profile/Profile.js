import { React } from "react";
//import { Route, Switch } from "react-router-dom";

function Profile() {
    return (
        <section className="profile">
        <h1 className="profile__title">Привет, !</h1>
        <form className="profile__form" 
        //onSubmit={handleSubmit}
        >
          <input
            required
            name="name"
            className="profile__text"
            type="text"
            placeholder="Имя"
            //onChange={handleChange}
            //value={loginData.name}
          />
          <input
            required
            name="email"
            className="profile__text"
            type="email"
            placeholder="E-mail"
            //onChange={handleChange}
            //value={loginData.email}
          />
        </form>
        <button type="submit" className="profile__btn">
            Peдактировать
        </button>
        <button type="submit" className="profile__btn">
            Выйти из аккаунта
        </button>
      </section>
    );
}

export default Profile;