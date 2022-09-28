//
import FormInput from "./components/FormInput";
import { useTranslation } from "react-i18next";

function Contact() {
  //console.log("Contact page render");
  const { t } = useTranslation();

  return (
    <main>
      <div className='form-container'>
        <section className='email-form'>
          <h2 className='section-header'>Email</h2>
          <label className='section-header'></label>
          <form id='contact-form'>
            <FormInput name='clientName' type='text' />
            <FormInput name='date' type='date' />
            <FormInput name='phone' type='text' />
            <FormInput name='email' type='text' />
            <FormInput name='address' type='text' />
            <FormInput name='message' type='text' />
            <div className='form-submit'>
              <button className='flat-button'>
                {t("contact.form.submit")}
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contact;
