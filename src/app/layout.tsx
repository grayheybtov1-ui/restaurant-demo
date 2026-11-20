import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZƏRİF — Bakının Müasir Qastronomiya və Qril Məkanı",
  description: "Xəzər sahilində, Neftçilər prospektində yerləşən ZƏRİF restoranı — seçmə qastronomik ləzzətlər, müəllif qril menyusu və yüksək səviyyəli qonaqpərvərlik.",
  keywords: "Zərif restoran, Bakı restoranları, premium dining Baku, lüks restoran Bakı, Neftçilər prospekti",
  openGraph: {
    title: "ZƏRİF — Bakının Müasir Qastronomiya və Qril Məkanı",
    description: "Hər detalında sənət və zövq. Bakının ən seçmə qastronomik məkanı.",
    locale: "az_AZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080808] text-[#f4efe6] antialiased min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
