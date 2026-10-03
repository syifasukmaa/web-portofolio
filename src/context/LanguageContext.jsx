import { createContext, useContext, useEffect, useState } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      project: "Projects",
      resume: "Resume",
      certificate: "Certificates",
      article: "Articles",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, my name is",
      name: "Syifa Sukma",
      rolePrefix: "I am a",
      roles: [" Front End Web Developer", " Customer Service", " UI/UX Enthusiast"],
      description:
        "Fresh Graduate majoring in Information Systems. I have a great interest in the IT industry, especially in web development and data management.",
      downloadCv: "Download CV",
      github: "Github",
    },
    projects: {
      title: "Projects",
      subtitle: "My work so far",
      showMore: "Show More Projects",
      showLess: "Show Less",
      livePreview: "Live Preview",
      details: "Details",
      viewCode: "View Code",
      status: "Status",
      year: "Year",
      type: "Type",
      completed: "Completed",
      inProgress: "In Progress",
    },
    resume: {
      title: "Resume",
      subtitle: "Years of Experience",
    },
    certificate: {
      title: "Certificates",
      subtitle: "Recognitions & Accreditations",
    },
    article: {
      title: "Articles",
      subtitle: "Writing & Thoughts",
    },
    contact: {
      title: "Contact",
      subtitle:
        "I'm open to full-time roles, freelance work, and interesting collaborations. If you're looking to hire or collaborate - let's talk!",
      greeting: "Let's connect and work together",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
    },
    detail: {
      back: "Home",
      breadcrumb: "Detail Project",
      status: "Status",
      year: "Year",
      type: "Type",
      techStack: "Tech Stack",
      highlights: "Key Highlights",
      responsive: "Fully Responsive Design",
      darkLight: "Dark & Light Mode Support",
      performance: "Optimized Performance & UX",
      liveDemo: "Live Demo",
      viewCode: "View Code",
    },
    common: {
      portfolio: "Portfolio",
      close: "Close",
      menu: "Menu",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      project: "Proyek",
      resume: "Resume",
      certificate: "Sertifikat",
      article: "Artikel",
      contact: "Kontak",
    },
    hero: {
      greeting: "Halo, nama saya",
      name: "Syifa Sukma",
      rolePrefix: "Saya seorang",
      roles: [" Front End Web Developer", " Customer Service", " Antusias UI/UX"],
      description:
        "Lulusan baru jurusan Sistem Informasi. Memiliki minat besar dalam industri IT, terutama di bidang pengembangan web dan manajemen data.",
      downloadCv: "Unduh CV",
      github: "Github",
    },
    projects: {
      title: "Proyek",
      subtitle: "Karya yang telah saya buat",
      showMore: "Lihat Proyek Lainnya",
      showLess: "Tampilkan Lebih Sedikit",
      livePreview: "Live Preview",
      details: "Detail",
      viewCode: "Lihat Kode",
      status: "Status",
      year: "Tahun",
      type: "Tipe",
      completed: "Selesai",
      inProgress: "Sedang Dikerjakan",
    },
    resume: {
      title: "Resume",
      subtitle: "Pengalaman Kerja",
    },
    certificate: {
      title: "Sertifikat",
      subtitle: "Pengakuan & Akreditasi",
    },
    article: {
      title: "Artikel",
      subtitle: "Tulisan & Pemikiran",
    },
    contact: {
      title: "Kontak",
      subtitle:
        "Terbuka untuk peluang kerja full-time, freelance, dan kolaborasi menarik. Jika Anda ingin merekrut atau berkolaborasi - mari berbincang!",
      greeting: "Mari terhubung dan bekerja sama",
      namePlaceholder: "Nama Anda",
      emailPlaceholder: "Email Anda",
      messagePlaceholder: "Pesan Anda",
      sendButton: "Kirim Pesan",
      sending: "Mengirim...",
      success: "Pesan berhasil dikirim!",
    },
    detail: {
      back: "Beranda",
      breadcrumb: "Detail Proyek",
      status: "Status",
      year: "Tahun",
      type: "Tipe",
      techStack: "Teknologi",
      highlights: "Keunggulan Utama",
      responsive: "Desain Responsif Penuh",
      darkLight: "Mendukung Mode Gelap & Terang",
      performance: "Performa & UX Optimal",
      liveDemo: "Demo Langsung",
      viewCode: "Lihat Kode",
    },
    common: {
      portfolio: "Portofolio",
      close: "Tutup",
      menu: "Menu",
    },
  },
};

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }) => {
  // Utamakan bahasa Inggris sebagai default
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
        // Fallback to English if key missing in current language
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
