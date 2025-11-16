//
import { useTranslation } from "react-i18next";

// Component definition
function Home() {
  console.log("Home page render");
  const { t } = useTranslation();

  return (
    <main>
      <img
        id='home-image'
        alt='Party set-up with tent and jumper'
        src='/image/home_banner.jpg'
      ></img>
      <section className='main-text'>
        <h2>{t("home.greeting")}</h2>
        <p>{t("home.description.part1")}</p>
        <p>{t("home.description.part2")}</p>
        <p><b>{t("home.description.part3")}</b></p>
      </section>
    </main>
  );
}

export default Home;
