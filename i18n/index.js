import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PT_BR from "./locales/pt-br.json";
import EN_US from "./locales/en-us.json";

function ok() {
  const resources = {
      "pt-BR": PT_BR,
      "en-US": EN_US,
    },
    lang = window.localStorage.getItem("i18nextLng")
      ? window.localStorage.getItem("i18nextLng")
      : "en-US";

  i18n.use(initReactI18next).init({
    resources,
    lng: lang,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: lang,
  });
}

export default ok;
