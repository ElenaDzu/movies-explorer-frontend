import { useState, useEffect } from "react";
import React from "react";

const MessagePopup = ({ errorMessage, onError }) => {
  const [infoStatus, setInfoStatus] = useState(false);
  useEffect(() => {
    if (errorMessage)
    setInfoStatus(true);
  }, [errorMessage]);
  const onClose = () => {
    setInfoStatus(false);
    onError("");
  }

  return (
    <section
      className={`messagepopup ${infoStatus ? "popup_opened" : ""}`}
      id="popup-message"
    >
      <div className="popup__block">
        <button type="button" className="popup__btn-close" onClick={onClose} />
        <p className="popup__text">{typeof errorMessage == "object" ? "«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»." : errorMessage}</p>
      </div>
    </section>
  );
};

export default MessagePopup;
