import { useState, useContext, useRef } from "react";
import { changeUserInfo } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormValidator from "../../hooks/useFormValidator";
import { VALIDATOR } from "../../utils/constants";
import Preloader from "../Movies/Preloader/Preloader";

const Profile = ({ onLogout, onError }) => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const initValues = {
    name: currentUser.name,
    email: currentUser.email,
  };
  const inputRef = useRef(false);
  const { values, isCorrect, handleChange, resetForm } = useFormValidator();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isChange, setIsChange] = useState(false);

  async function handleEdit(evt) {
    evt.preventDefault();
    setIsChange(true);
    inputRef.current.focus();
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsProcessing(true);
    setCurrentUser({
      name: values.name,
      email: values.email,
    });

    try {
      const data = await changeUserInfo({
        name: values.name,
        email: values.email,
      });

      setIsChange(false);
      onError("Данные успешно изменены");
      resetForm({
        name: data.name,
        email: data.email,
      });
    } catch (error) {
    } finally {
      setIsProcessing(false);
    }
  };
  
  let isButtonActive = false;
  if (isCorrect && !isProcessing && (values.username !== initValues.username || values.email !== initValues.email)) {
  isButtonActive = true;
  };

  return (
    <section className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <form
        className="profile__block"
        name={`form-profile`}
        onSubmit={handleSubmit}
      >
        <div className="profile__line">
          <label htmlFor="name" className="profile__text">
            Имя
          </label>
          <input
            className="profile__text profile__text_small"
            type="text"
            name="name"
            id="name"
            ref={inputRef}
            minLength="2"
            maxLength="30"
            pattern={VALIDATOR.name.regex}
            value={currentUser.name || ""}
            onChange={handleChange}
            disabled={isProcessing || !isChange}
          />
        </div>
        <div className="profile__line">
          <label htmlFor="email" className="profile__text">
            E-mail
          </label>
          <input
            className="profile__text profile__text_small"
            type="email"
            name="email"
            id="email"
            minLength="2"
            maxLength="30"
            pattern={VALIDATOR.email.regex}
            value={currentUser.email || ""}
            onChange={handleChange}
            disabled={isProcessing || !isChange}
          />
        </div>
        {isProcessing ? <Preloader /> : ""}
        {isChange ? (
          <button
            type="submit"
            className="profile__submit-btn"
            disabled={!isButtonActive}
          >
            Сохранить
          </button>
        ) : (
          <button
            type="button"
            className="profile__edit-btn"
            onClick={handleEdit}
          >
            Редактировать
          </button>
        )}
        {!isChange ? (
          <button
            type="button"
            className="profile__exit-btn"
            onClick={onLogout}
          >
            Выйти из аккаунта
          </button>
        ) : (
          ""
        )}
      </form>
    </section>
  );
};

export default Profile;
