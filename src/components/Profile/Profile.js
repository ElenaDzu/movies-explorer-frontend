import { useState, useContext, useRef } from "react";
import { changeUserInfo } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormValidator from "../../hooks/useFormValidator";
import { VALIDATOR } from "../../utils/constants";
import Preloader from "../Movies/Preloader/Preloader";

const Profile = ({ onLogout, onError }) => {
  const userContext = useContext(CurrentUserContext);
  const [userData, setUserData] = useState(userContext.currentUser);

  const initValues = {
    name: userData.name,
    email: userData.email,
  };
  
  const nameInputRef = useRef(false);
  const {
    values,
    handleChange,
    isValid,
    resetForm,
  } = useFormValidator({ initValues });

  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleEdit(evt) {
    evt.preventDefault();
    await setIsEdit(true);
    nameInputRef.current.focus();
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
    setUserData({
      name: values.name,
      email: values.email,
    });

    changeUserInfo({
      name: values.name,
      email: values.email,
    })
      .then((data) => {
        setIsEdit(false);
        onError("Данные успешно изменены");
        resetForm({
          name: data.name,
          email: data.email,
        })
      })
      .finally(() => setIsLoading(false))
  }

  const isButtonActive = isValid
    && !isLoading
    && (values.name !== initValues.name || values.email !== initValues.email);

  return (
    <section className='profile'>
      <h1 className='profile__title'>{`Привет, ${userData.name}!`}</h1>
      <form
        className='profile__block'
        name={`form-profile`}
        onSubmit={handleSubmit}
      >
        <div className='profile__line'>
          <label htmlFor='name' className='profile__text'>Имя</label>
          <input
            className='profile__text profile__text_small'
            type='text'
            name='name'
            id='name'
            ref={nameInputRef}
            minLength='2'
            maxLength='30'
            pattern={VALIDATOR.name.regex}
            value={values.name || ''}
            onChange={handleChange}
            disabled={isLoading || !isEdit}
          />
        </div>
        <div className='profile__line'>
          <label htmlFor='email' className='profile__text'>E-mail</label>
          <input
            className='profile__text profile__text_small'
            type='email'
            name='email'
            id='email'
            minLength='2'
            maxLength='30'
            pattern={VALIDATOR.email.regex}
            value={values.email || ''}
            onChange={handleChange}
            disabled={isLoading || !isEdit}
          />
        </div>
        {isLoading ? <Preloader /> : ''}
        {isEdit
          ?
          <button type='submit' className='profile__submit-btn' disabled={!isButtonActive}>Сохранить</button>
          :
          <button type='button' className='profile__edit-btn' onClick={handleEdit}>Редактировать</button>
        }
        {!isEdit
          ?
          <button type='button' className='profile__exit-btn' onClick={onLogout}>Выйти из аккаунта</button>
          :
          ''
        }
      </form>
    </section>
  )
}

export  default Profile;