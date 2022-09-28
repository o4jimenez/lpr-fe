//
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Navigator = () => {
  //console.log("Navigator render");
  const { t, i18n } = useTranslation();

  useEffect(() => {}, [i18n]);

  const handleLangSwitch = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("es")
      : i18n.changeLanguage("en");
  };

  return (
    <header>
      <div className='banner-container'>
        <div className='banner'>
          <p>(805) 915-7089</p>
          <Link to={`${useLocation().pathname}`} onClick={handleLangSwitch}>
            <span lang={i18n.language}>{t("nav.languageSwitch")}</span>
          </Link>
        </div>
      </div>
      <div className='nav-container'>
        <nav>
          <ul>
            <li>
              <h1>Louis Party Rental</h1>
            </li>
            <li>
              <Link to={"/"}>{t("nav.homePage")}</Link>
            </li>
            <li>
              <Link to={"/rentals"}>{t("nav.rentalPage")}</Link>
            </li>
            <li>
              <Link to={"/contact_us"}>{t("nav.contactPage")}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigator;
