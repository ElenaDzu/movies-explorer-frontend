import { useNavigate } from "react-router-dom";

function Error() {

  const navigate = useNavigate();

  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">Страница не найдена</p>
      <p className="error__link" onClick={() => navigate(-1)}>
        Назад
      </p>
    </div>
  );
}

export default Error;
