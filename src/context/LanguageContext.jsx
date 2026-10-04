import { createContext, useContext, useEffect, useState } from "react";
import en from "../locales/en.json";
import id from "../locales/id.json";

// Daftar bahasa yang tersedia
const translations = {
  en,
  id,
};

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "id" : "en"));
  };

  const t = (path) => {
    if (!path) return "";
    const keys = path.split(".");
    let current = translations[lang];

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        let fallback = translations.en;
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
