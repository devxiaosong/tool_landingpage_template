import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import ContentBlock from "../components/ContentBlock";
import FeaturesTab from "../components/FeaturesTab";
import UserGuideSection from "../components/UserGuideSection";
import PlanTable from "../components/PlanTable";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "iDownerGo OnlyFans Video Downloader — Kostenloser Download",
  description:
    "Lade OnlyFans-Videos deiner Lieblingsersteller in 1080p-Qualität mit einem Klick herunter und genieße sie offline auf jedem Gerät.",
  alternates: {
    canonical: "https://idownergo.com/de",
    languages: {
      "en": "https://idownergo.com/",
      "de": "https://idownergo.com/de",
      "x-default": "https://idownergo.com/",
    },
  },
  openGraph: {
    title: "iDownerGo OnlyFans Video Downloader — Kostenloser Download",
    description:
      "Lade OnlyFans-Videos deiner Lieblingsersteller in 1080p-Qualität mit einem Klick herunter und genieße sie offline auf jedem Gerät.",
    url: "https://idownergo.com/de",
    images: [
      {
        url: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-downloader.png",
        width: 1200,
        height: 630,
        alt: "iDownerGo OnlyFans Video Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iDownerGo OnlyFans Video Downloader — Kostenloser Download",
    description:
      "Lade OnlyFans-Videos deiner Lieblingsersteller in 1080p-Qualität mit einem Klick herunter und genieße sie offline auf jedem Gerät.",
    images: [
      "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-downloader.png",
    ],
  },
};

// Hero Banner
const HERO_DATA = {
  brandTag: "iDownerGo",
  title: "OnlyFans Video Downloader",
  description:
    "Lade OnlyFans-Videos deiner Lieblingsersteller in 1080p-Qualität mit einem Klick herunter und genieße OnlyFans-Videos offline auf jedem Gerät!",
  windowsDownloadUrl: "/download/?product=idownergo.exe",
  macDownloadUrl: "/download/?product=idownergo.dmg",
  backgroundImage:
    "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/header-bg.png",
  productImage:
    "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-downloader.png",
  productImageWebp:
    "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-downloader.webp",
  productImageAlt: "onlyfans downloader",
};

// Warum brauchen Sie ihn?
const WHY_NEED_DATA = {
  title: "Warum benötigen Sie den iDownerGo OnlyFans Downloader?",
  subtitleHighlight: "OnlyFans erlaubt keine",
  subtitle: "nativen Downloads",
  items: [
    "Da OnlyFans selbst keine Download-Funktion hat, können Sie keine Videos oder Bilder direkt von der OnlyFans-Plattform herunterladen. Was also tun, wenn Sie Videos von Creators herunterladen möchten, die Sie abonniert haben?",
    "Wenn Sie Inhalte Ihrer Lieblingsersteller dauerhaft sichern möchten, falls sie gelöscht werden, oder keine monatlichen Gebühren zahlen möchten, um auf dieselben Inhalte zuzugreifen, können Sie den iDownerGo Video Downloader nutzen.",
  ],
  imageSrc:
    "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-download-restrictions.png",
  imageWebp:
    "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-download-restrictions.webp",
  imageAlt: "onlyfans download restrictions",
  imagePosition: "left" as const,
};

// Wie kann er helfen?
const HOW_CAN_HELP_DATA = {
  title: "Wie kann der iDownerGo OnlyFans Downloader helfen?",
  subtitleHighlight: "OnlyFans-Videos herunterladen",
  subtitle: "in hoher Qualität für die Offline-Nutzung",
  items: [
    "Als bester OnlyFans Downloader kann iDownerGo Ihnen helfen, OnlyFans-Videos und -Bilder in hoher Qualität für die Offline-Nutzung herunterzuladen. Darüber hinaus unterstützt der iDownerGo OnlyFans Downloader auch das Herunterladen von Videos aus OnlyFans-Nachrichten/Chats und den Massen-Download von Creator-Profilseiten.",
    "Mit dem iDownerGo OnlyFans Downloader vermeiden Sie den Zugriffsverlust bei ablaufenden Abonnements oder gelöschten Inhalten – alle Downloads werden dauerhaft auf Ihrem Gerät gespeichert.",
  ],
  imageSrc:
    "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/remove-restrictions-from-onlyfans.png",
  imageWebp:
    "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/remove-restrictions-from-onlyfans.webp",
  imageAlt: "remove restrictions from onlyfans",
  imagePosition: "right" as const,
};

// Features Tab
const FEATURES_TAB_DATA = {
  mainTitle:
    "Genießen Sie ein effektives OnlyFans-Download-Erlebnis mit dem besten OnlyFans Downloader",
  autoPlayInterval: 3000,
  transitionDuration: 600,
  features: [
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-default-icon.svg",
      activeIcon:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-active-icon.svg",
      tabTitle: "OnlyFans-Video herunterladen",
      contentImage:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-video.png",
      contentImageWebp:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-video.webp",
      contentTitle: "OnlyFans-Videos herunterladen",
      contentTitleHighlight: " in 1080p HD-Auflösung",
      contentDescription: [
        "Der iDownerGo OnlyFans Downloader bietet mehrere Optionen, darunter 1080p, 720p und 480p Auflösungen. Sie können hochauflösende Videos von OnlyFans auf Windows oder Mac nach Ihren Wünschen herunterladen.",
        "Außerdem entfernt der OnlyFans Video Downloader den DRM-Schutz Ihrer abonnierten oder sogar kostenlosen Inhalte und bietet einen AAC2.0-Audiotrack – so können Sie alle OnlyFans-Inhalte offline genießen, wo auch immer und wann immer Sie möchten.",
      ],
    },
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/convert-default-icon.svg",
      activeIcon:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/convert-active-icon.svg",
      tabTitle: "OnlyFans-Video zu MP4/MKV",
      contentImage:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-to-mp4.png",
      contentImageWebp:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-to-mp4.webp",
      contentTitle: "OnlyFans-Video herunterladen",
      contentTitleHighlight: " als MP4/MKV-Datei",
      contentDescription: [
        "Durch das Herunterladen von OnlyFans-Videos im MP4- oder MKV-Format können Sie die Inhalte auf Computern, Tablets, Smartphones, Mediaplayern oder sogar auf einem USB-Stick genießen.",
        "Egal ob zu Hause oder unterwegs – iDownerGo macht es einfach, Ihre Lieblings-OnlyFans-Videos ohne Internetverbindung anzusehen.",
      ],
    },
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/menu-default-icon.svg",
      activeIcon:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/menu-active-icon.svg",
      tabTitle: "Massendownload von OnlyFans-Inhalten",
      contentImage:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/bulk-download-onlyfans.png",
      contentImageWebp:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/bulk-download-onlyfans.webp",
      contentTitle: "OnlyFans-Videos",
      contentTitleHighlight: "/Bilder im Massendownload",
      contentDescription: [
        "Der iDownerGo OnlyFans Downloader bietet Downloads im Batch-Modus – Sie müssen Videos oder Bilder Ihrer Lieblingsersteller nicht einzeln herunterladen.",
        "Öffnen Sie die Profilseite eines abonnierten Creators und der OnlyFans Video Downloader erkennt automatisch alle verfügbaren Videos oder Bilder und lädt alle Inhalte mit einem Klick herunter.",
      ],
    },
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/subtitle-default-icon.svg",
      activeIcon:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/subtitle-active-icon.svg",
      tabTitle: "OnlyFans-Chat-Videos speichern",
      contentImage:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-chat-video.png",
      contentImageWebp:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-chat-video.webp",
      contentTitle: "OnlyFans-Nachrichten",
      contentTitleHighlight: "/Chat-Videos herunterladen",
      contentDescription: [
        "Manchmal senden Ihre Lieblingsersteller Bilder oder Videos als privaten Bonus über Nachrichten/Chats auf OnlyFans. Was tun, wenn Sie diese Inhalte für das Offline-Ansehen auf Ihren Geräten speichern möchten?",
        "iDownerGo OnlyFans Downloader hilft Ihnen dabei: Er kann Videos aus OnlyFans-Chats ohne Qualitätsverlust herunterladen und OnlyFans-Nachrichten-Videos in bis zu 1080p mit 10-facher Geschwindigkeit speichern.",
      ],
    },
  ],
};

// Sicherer Download
const SECURE_DOWNLOAD_DATA = {
  subtitleHighlight: "Werbefrei und 100% sicher",
  subtitle: "Download-Erlebnis",
  items: [
    "Der iDownerGo OnlyFans Downloader ist werbefrei und 100% sicher. Er arbeitet ohne das Speichern von Nutzerdaten, und mit einem integrierten OnlyFans-Browser reduziert er das Risiko der Kontoexponierung.",
    "Außerdem bietet iDownerGo regelmäßige Updates zur Verbesserung der Sicherheit und zur Behebung potenzieller Risiken.",
  ],
  imageSrc:
    "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/enjoy-ad-free-onlyfans.png",
  imageWebp:
    "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/enjoy-ad-free-onlyfans.webp",
  imageAlt: "enjoy ad free onlyfans",
  imagePosition: "right" as const,
};

// Benutzerhandbuch
const USER_GUIDE_DATA = {
  mainTitle: "Wie verwendet man den iDownerGo OnlyFans Downloader?",
  windowsDownloadUrl: "/download/?product=idownergo.exe",
  macDownloadUrl: "/download/?product=idownergo.dmg",
  transitionDuration: 500,
  steps: [
    {
      image:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/select-onlyfans-downloader.png",
      imageWebp:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/select-onlyfans-downloader.webp",
      title: "Den iDownerGo OnlyFans Downloader auswählen.",
      description:
        "Doppelklicken Sie auf iDownerGo und rufen Sie dann onlyfans.com über den integrierten Browser auf.",
    },
    {
      image:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/play-onlyfans-video.png",
      imageWebp:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/play-onlyfans-video.webp",
      title: "OnlyFans-Video in iDownerGo abspielen.",
      description:
        "Melden Sie sich mit Ihrem Abonnementkonto auf der OnlyFans-Website an und spielen Sie das Video ab, das Sie herunterladen möchten.",
    },
    {
      image:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/save-onlyfans-video.png",
      imageWebp:
        "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/save-onlyfans-video.webp",
      title: "Videos von OnlyFans herunterladen.",
      description:
        "Klicken Sie auf die Download-Schaltfläche, um das abgespielte Video herunterzuladen.",
    },
  ],
};

// Preistabelle
const PLAN_TABLE_DATA = {
  mainTitle: "Alle Pläne vergleichen",
  headerSectionTitle: "Beliebte & wichtige Funktionen",
  plans: [
    {
      name: "Kostenlos",
      downloadUrl: "/download/?product=idownergo.dmg",
      buttonText: "Kostenlos testen",
      isPrimary: false,
    },
    {
      name: "Standard",
      downloadUrl: "/download/?product=idownergo.dmg",
      buttonText: "Kostenlos testen",
      isPrimary: false,
    },
    {
      name: "Pro",
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/table/pro-icon.svg",
      iconAlt: "pro icon",
      highlightColor: "#4EACEA",
      downloadUrl: "/download/?product=idownergo.dmg",
      buttonText: "Kostenlos testen",
      isPrimary: true,
    },
  ],
  features: [
    { name: "Netflix Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Amazon Prime Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Crunchyroll Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "OF Video Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Disney+ Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Hulu Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "HBO Max Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Videos/Audio von 10.000+ Seiten herunterladen", free: "3 Dateien", standard: true, pro: true },
    { name: "Musik von Apple Music, Spotify, Amazon Music, Deezer und TIDAL konvertieren", free: "1 Datei", standard: true, pro: true },
    { name: "Dateien in MP4, MP3 und Originalformat konvertieren", free: "1/3 Länge", standard: true, pro: true },
    { name: "Playlist, Album, Künstler und mehr herunterladen", free: "1 Datei", standard: true, pro: true },
    { name: "Medien in 20+ Ausgabeformate konvertieren", free: null, standard: true, pro: true, isLastInGroup: true },
  ],
};

// Nutzerbewertungen
const TESTIMONIALS_DATA = {
  mainTitle: "Erfahren Sie, warum Nutzer iDownerGo OnlyFans Downloader lieben",
  transitionDuration: 500,
  testimonials: [
    {
      quote: "Als Social-Media-Marketer ist dies definitiv eines der zuverlässigsten und professionellsten Tools, das ich seit 2 Jahren verwende und nie mehr missen möchte. Danke an das professionelle iDownerGo-Team für dieses Erlebnis.",
      name: "Arash Ashouri",
      avatar: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/user1.svg",
    },
    {
      quote: "Ich nutze die App seit einem Jahr. Alles funktioniert einwandfrei und der Service ist einfach der beste. Wenn ich ein Problem habe, ist das Team immer da, um zu helfen! 10/10!",
      name: "Denis Hoshikawa",
      avatar: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/user2.svg",
    },
    {
      quote: "Ich habe die iDownerGo-Lifetime-Lizenz gekauft und bin sehr zufrieden. Ich spare Zeit beim Aufzeichnen von Videos und kann den Ton meiner Lieblingslieder speichern. Ich empfehle diese App jedem!",
      name: "Christopher Gallegos",
      avatar: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/user3.svg",
    },
  ],
};

// FAQ
const FAQ_DATA = {
  mainTitle: "Häufig gestellte Fragen",
  faqs: [
    {
      question: "F1. Hat der iDownerGo OnlyFans Downloader eine kostenlose Testversion?",
      answer: "Ja, Sie können nach der Installation von iDownerGo OnlyFans Video auf Ihrem Computer 1 kostenlosen Download testen.",
    },
    {
      question: "F2. Kann ich OnlyFans-Videos ohne ein OnlyFans-Abonnement herunterladen?",
      answer: "Nein, Sie können keine OnlyFans-Videos ohne ein aktives OnlyFans-Abonnement herunterladen.",
    },
    {
      question: "F3. Ist die Verwendung des iDownerGo OnlyFans Downloaders legal und sicher?",
      answer: "Ja, der iDownerGo OnlyFans Downloader ist nur für den persönlichen Gebrauch legal und mit einem integrierten Browser gesichert, der keine Nutzerdaten speichert.",
    },
    {
      question: "F4. Kann ich heruntergeladene OnlyFans-Videos auf anderen Geräten ansehen?",
      answer: "Ja, Sie können OnlyFans-Videos in MP4- oder MKV-Formaten herunterladen, die auf den meisten Geräten (Smartphones, PCs, Tablets) abspielbar sind.",
    },
  ],
};

// CTA
const CTA_DATA = {
  backgroundImage:
    "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/footer-bg.png",
  logo: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-logo.svg",
  logoAlt: "onlyfans logo",
  title: "Laden Sie jetzt Ihre Lieblingsvideos mit dem iDownerGo OnlyFans Downloader herunter!",
  windowsDownloadUrl: "/download/?product=idownergo.exe",
  macDownloadUrl: "/download/?product=idownergo.dmg",
};

export default function HomeDE() {
  return (
    <div>
      <Header />
      <HeroBanner {...HERO_DATA} />
      <ContentBlock {...WHY_NEED_DATA} />
      <ContentBlock {...HOW_CAN_HELP_DATA} />
      <FeaturesTab {...FEATURES_TAB_DATA} />
      <ContentBlock {...SECURE_DOWNLOAD_DATA} />
      <UserGuideSection {...USER_GUIDE_DATA} />
      <PlanTable {...PLAN_TABLE_DATA} />
      <TestimonialsSection {...TESTIMONIALS_DATA} />
      <FAQSection {...FAQ_DATA} />
      <CTASection {...CTA_DATA} />
      <Footer />
    </div>
  );
}
