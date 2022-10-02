import { useState } from "react";

const useForm = (submitCallback) => {
  const [value, setValue] = useState({});

  const handleChange = (e) => {
    e.persist();
    setValue((value) => ({ ...value, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallback(value);
  };

  return [value, handleChange, handleSubmit];
};

export default useForm;
