import { useTranslation } from "../../context/LanguageContext";

export default function LanguageSwitch({ className = "" }) {
  const { lang, toggleLang } = useTranslation();

  return (
    <button
      onClick={toggleLang}
      className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold font-jetbrains rounded-full transition-all duration-200 border border-blueGrey-200 dark:border-dark400 hover:border-blue dark:hover:border-blue bg-white/70 dark:bg-dark300/70 shadow-sm ${className}`}
      aria-label="Toggle language between English and Indonesian"
      title={lang === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
    >
      <span
        className={`transition-colors duration-200 ${
          lang === "en"
            ? "text-blue dark:text-blue font-bold"
            : "text-greys dark:text-dark600"
        }`}
      >
        EN
      </span>
      <span className="text-blueGrey-300 dark:text-dark400 text-[10px]">|</span>
      <span
        className={`transition-colors duration-200 ${
          lang === "id"
            ? "text-blue dark:text-blue font-bold"
            : "text-greys dark:text-dark600"
        }`}
      >
        ID
      </span>
    </button>
  );
}
