import { useTranslation } from "../../context/LanguageContext";

export default function LanguageSwitch({ className = "" }) {
  const { lang, toggleLang } = useTranslation();

  return (
    <button
      onClick={toggleLang}
      className={`inline-flex items-center gap-1 px-4 py-1.5 text-sm font-semibold font-jetbrains rounded-full transition-all duration-200  bg-blue/20 dark:bg-dark300 shadow-sm ${className}`}
      aria-label="Toggle language between English and Indonesian"
      title={lang === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
    >
      <span
        className={`transition-colors duration-200 ${
          lang === "en"
            ? "text-blue dark:text-blue font-bold text-base"
            : "text-greys dark:text-dark600 text-xs"
        }`}
      >
        EN
      </span>
      <span className="text-blueGrey-300 dark:text-dark400 text-[10px]">|</span>
      <span
        className={`transition-colors duration-200 ${
          lang === "id"
            ? "text-blue dark:text-blue font-bold text-base"
            : "text-greys dark:text-dark600 text-xs"
        }`}
      >
        ID
      </span>
    </button>
  );
}
