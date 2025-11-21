import type { ReactNode } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "../i18n/es.json";
import en from "../i18n/es.json";

interface Props {
  children: ReactNode;
}

i18n.use(initReactI18next).init({
  fallbackLng: "es",
  debug: false,
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
});

const TranslationsProvider = ({ children }: Props) => {
  return <>{children}</>;
};

export default TranslationsProvider;
