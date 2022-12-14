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
          <form
            id='contact-form'
            action='https://formsubmit.co/60d1aa45d556a34594c8c74ace8e8295'
            method='POST'
          >
            <FormInput name='clientName' type='text' />
            <FormInput name='date' type='date' />
            <FormInput name='phone' type='text' />
            <FormInput name='email' type='text' />
            <FormInput name='address' type='text' />
            <label label htmlFor='message'>
              {t("contact.form.message")}
            </label>
            <textarea
              className='contact-message'
              name='message'
              rows='5'
            ></textarea>
            <div className='form-submit'>
              <button className='flat-button'>
                {t("contact.form.submit")}
              </button>
            </div>
          </form>
        </section>
        <section className='company-info'>
          <h2>{t("contact.call")}</h2>
          <p>(805) 915-7089</p>
        </section>
      </div>
    </main>
  );
}

export default Contact;
