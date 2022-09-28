//
import { useTranslation } from "react-i18next";

function FormInput({ name, type }) {
  const { t } = useTranslation();

  return (
    <div className='form-input'>
      <label htmlFor={name}>{t(`contact.form.${name}`)}:</label>
      <input id={name} type={type} name={name} required></input>
    </div>
  );
}

export default FormInput;
