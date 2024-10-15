import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsFR from "../locales/fr/translation.json";
import translationsEN from "../locales/en/translation.json";

const resources = {
  fr: { translation: translationsFR },
  en: { translation: translationsEN },
};

const lng = localStorage.getItem("i18nextLng") || "fr";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    console.log("Langue actuelle :", i18n.language);
    console.log("Traductions disponibles :", i18n.store.data);
    console.log("Exemple de traduction (navbar.aboutMe) :", i18n.t("navbar.aboutMe"));
  })
  .catch((error) => {
    console.error("Erreur lors de l'initialisation d'i18n :", error);
  });

export default i18n;
