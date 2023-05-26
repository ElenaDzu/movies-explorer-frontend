import { useCallback, useState } from "react";

export function useFormValidator() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(target.name, target.value);
    
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsCorrect(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsCorrect = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsCorrect(newIsCorrect);
    },
    [setValues, setErrors, setIsCorrect]
  );

  return { values, handleChange, errors, isCorrect, resetForm };
}

export default useFormValidator;