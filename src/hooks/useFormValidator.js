import { useState, useCallback} from 'react';
import { VALIDATOR } from '../utils/constants';

const useFormValidator = ({initValues} = {}) => {
  const [values, setValues] = useState(initValues || {});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    switch (name) {
      case 'name':
        target.validity.patternMismatch
          ? target.setCustomValidity(VALIDATOR.name.message)
          : target.setCustomValidity('')
        break;
      case 'email':
        target.validity.patternMismatch
          ? target.setCustomValidity(VALIDATOR.email.message)
          : target.setCustomValidity('')
        break;
      default: target.setCustomValidity('')
    }

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { handleChange, values, errors, setValues, isValid, setIsValid, resetForm };
}

export default useFormValidator;
