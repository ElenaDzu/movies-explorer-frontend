import { React } from "react";

function Profile() {
    return (
        <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" 
        //onSubmit={handleSubmit}
        > 
        <div className="profile__line">
        <label for="input-name" className="profile__label">Имя</label>
          <input
            id="input-name"
            required
            name="name"
            className="profile__text"
            type="text"
            placeholder="Виталий"
            //onChange={handleChange}
            //value={loginData.name}
          />
          </div>
          <div className="profile__line">
          <label for="input-email" className="profile__label">Email</label>
          <input
            id="input-email"
            required
            name="email"
            className="profile__text"
            type="email"
            placeholder="turin78952@mail.ru"
            //onChange={handleChange}
            //value={loginData.email}
          />
          </div>
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