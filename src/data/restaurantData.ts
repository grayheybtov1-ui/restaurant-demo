export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  weight?: string;
  image?: string;
  isChefRecommendation?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  tagline: string;
  items: MenuItem[];
}

export const RESTAURANT_INFO = {
  name: "ZƏRİF",
  subtitle: "RESTORAN & QRİL LOUNGE",
  established: "2021",
  address: "Neftçilər prospekti 48, Səbail rayonu, Bakı",
  phone: "+994 12 555 48 48",
  mobile: "+994 50 222 48 48",
  email: "rezerv@zerif.az",
  workingHours: {
    weekdays: "12:00 — 00:00",
    saturday: "12:00 — 01:00",
    sunday: "13:00 — 23:00",
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tripadvisor: "https://tripadvisor.com",
  },
  chef: {
    name: "Rauf Əliyev",
    title: "Baş Aşpaz və Həmtəsisçi",
    experience: "18 il beynəlxalq təcrübə",
    bio: "Fransa və İtaliyanın Michelin ulduzlu restoranlarında təcrübə keçmiş Rauf Əliyev, ənənəvi Azərbaycan ləzzətlərini müasir yüksək kulinariya (Haute Cuisine) texnikaları ilə birləşdirir.",
  },
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "starters",
    name: "Başlanğıclar",
    tagline: "Süfrənin zərif açılışı üçün seçilmiş soyuq və isti qəlyanaltılar",
    items: [
      {
        id: "s1",
        name: "Qara Kürü və Zərif Blini",
        description: "Xəzər nərə kürüsü, ev üsulu qat-qat blini, xama emulsiyası və incə kəvər otu",
        price: 95,
        weight: "90q",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        isChefRecommendation: true,
      },
      {
        id: "s2",
        name: "Karamelizə Əncirli Burrata",
        description: "Qusar südündən təzə burrata pendiri, dağ balı ilə qızardılmış təbii əncir, trüfel yağı və keşyu qırıntıları",
        price: 38,
        weight: "220q",
        image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb228cc?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "s3",
        name: "Dəniz Darağı və Zəfəran Moussu",
        description: "Tavada yüngül qızardılmış Atlantik daraqları, Abşeron zəfəranı sousu və xırçıltılı kələm çipsləri",
        price: 52,
        weight: "160q",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        isChefRecommendation: true,
      },
      {
        id: "s4",
        name: "Dana Carpaccio və Yaşıl Reyhan",
        description: "Mərmər dana can əti, 24 aylıq Parmigiano Reggiano, kapari dənələri və ev zeytun yağı",
        price: 42,
        weight: "150q",
        image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "s5",
        name: "Tüstülənmiş Badımcan Tartarı",
        description: "Kömürdə közlənmiş yerli badımcan, qatılaşdırılmış süzmə, nar dənələri və qozlu kraker",
        price: 26,
        weight: "180q",
      },
      {
        id: "s6",
        name: "Ördək Əti ilə Qovrulmuş Foie Gras",
        description: "Pan-seared Fransız qara ciyəri, heyva püresi, qarağat qlazuru və kərə yağlı brioş çörəyi",
        price: 68,
        weight: "140q",
      },
    ],
  },
  {
    id: "mains",
    name: "Əsas Yeməklər",
    tagline: "Müasir texnologiyalar və ənənəvi reseptlərin kəsişmə nöqtəsi",
    items: [
      {
        id: "m1",
        name: "Sous-Vide Quzu Bel Əti",
        description: "48 saat aşağı temperaturda bişirilmiş quzu beli, dağ kəkliyi sousu, zərif noxud püresi və qovrulmuş şalot",
        price: 78,
        weight: "280q",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        isChefRecommendation: true,
      },
      {
        id: "m2",
        name: "Xəzər Nərəsi və Qara Risotto",
        description: "Təzə Xəzər nərə steyki, mürəkkəb balığı mürəkkəbli İtalyan risottosu, sitrus sousu və qulançar",
        price: 88,
        weight: "320q",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        isChefRecommendation: true,
      },
      {
        id: "m3",
        name: "Ördək Konfi və Portağallı Qlazur",
        description: "Öz yağında zəif odda 8 saat bişmiş ördək budu, karamelizə yerkökü və ətirli portağal cövhəri",
        price: 64,
        weight: "300q",
        image: "https://images.unsplash.com/photo-1514944298352-f4105a39cb2a?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "m4",
        name: "Dana Antrekotu ilə Trüfel Sousu",
        description: "Black Angus can əti medalonları, meşə göbələkləri, qara trüfel krem sousu və bişmiş kartof",
        price: 82,
        weight: "310q",
      },
      {
        id: "m5",
        name: "Vəhşi Dəniz Levreki (Branzino)",
        description: "Ocaqda bütöv qızardılmış levrek, Aralıq dənizi otları, bişmiş çeri pomidorları və qızılca zeytunlar",
        price: 72,
        weight: "380q",
      },
    ],
  },
  {
    id: "grill",
    name: "Qril Yeməkləri",
    tagline: "Açıq fıstıq və palıd kömüründə usta əli ilə hazırlanan xüsusi ətlər",
    items: [
      {
        id: "g1",
        name: "ZƏRİF Xüsusi Tomahawk Steyk",
        description: "28 gün quru yaşlandırılmış (Dry-Aged) premium sümüklü dana əti, kömürdə sarımsaq və qril tərəvəzlər",
        price: 195,
        weight: "950q",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80",
        isChefRecommendation: true,
      },
      {
        id: "g2",
        name: "Mərmər Ribeye (Wagyu MB5+)",
        description: "Yüksək dərəcəli Wagyu ribeye steyki, rozmarin dumanı, dəniz duzu kristalları və Béarnaise sousu",
        price: 165,
        weight: "350q",
        image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "g3",
        name: "Xan Quzu Qabırğaları",
        description: "Qarabağ otlaqlarında bəslənmiş quzu qabırğaları, sumaxlı qırmızı soğan və təndir lavaşı",
        price: 58,
        weight: "340q",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "g4",
        name: "ZƏRİF Müəllif Qoyun Lüləsi",
        description: "Quyruq yağı və zərif quzu ətinin fıstıq kömüründə xüsusi nisbətdə bişirilməsi, nar dənələri ilə",
        price: 36,
        weight: "260q",
      },
      {
        id: "g5",
        name: "Kömürdə Jumbo Pələng Krevetləri",
        description: "Qabıqlı iri dəniz krevetləri, kərə yağı-limon sousu, acı bibər lopaları və hisə verilmiş duz",
        price: 86,
        weight: "300q",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desertlər",
    tagline: "Şirniyyat sənətinin ən ləzzətli və estetik formaları",
    items: [
      {
        id: "d1",
        name: "ZƏRİF Qızıl Paxlava Dekonstruksiyası",
        description: "İncə xəmirdən qat-qat Antep fıstığı kərəmi, kəhrəba bal şərbəti, dondurulmuş qaymaq və 24k qida qızılı",
        price: 32,
        weight: "170q",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80",
        isChefRecommendation: true,
      },
      {
        id: "d2",
        name: "Qara Şokoladlı Trüfel Sferası",
        description: "72% Belçika şokoladından sfera, içərisində ilıq moruq kuli və vanilli Madagaskar kremi",
        price: 28,
        weight: "150q",
        image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "d3",
        name: "Zəfəranlı Panna Cotta",
        description: "Ətirli Abşeron zəfəranı, püstə tozu və təbii nar şirəsi jele qatı ilə",
        price: 24,
        weight: "160q",
      },
      {
        id: "d4",
        name: "Karamelizə Armud və Reyhan Dondurması",
        description: "Qırmızı şərabda dəm almış Şamaxı armudu, xırçıltılı badam peçenyesi və ev reyhanı sorbeti",
        price: 26,
        weight: "190q",
      },
    ],
  },
  {
    id: "drinks",
    name: "İçkilər & Şərab Kolleksiyası",
    tagline: "Mətbəximizi tamamlayan seçilmiş yerli və dünya brendləri",
    items: [
      {
        id: "dr1",
        name: "ZƏRİF Xəzər Qürubu (Signature Kokteyl)",
        description: "Müəllif cin, nar essensiyası, təzə kəklikotu ekstraktı, sitrus şirəsi və qazlı şampan balansı",
        price: 24,
        weight: "200ml",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
        isChefRecommendation: true,
      },
      {
        id: "dr2",
        name: "Mədrəsə Rezerv — Qəbələ Şərabları",
        description: "Təbii yerli Mədrəsə üzümündən, palıd çəlləklərində 18 ay saxlanılmış zəngin bədənli qırmızı şərab",
        price: 85,
        weight: "750ml",
      },
      {
        id: "dr3",
        name: "Chablis Premier Cru — Fransa",
        description: "Mineral zənginliyi və təravətli sitrus notları ilə dəniz məhsullarına ideal yoldaş",
        price: 180,
        weight: "750ml",
      },
      {
        id: "dr4",
        name: "Dəmkeş Çay Süfrəsi və Mürəbbə Seçimi",
        description: "Lənkəran dağ çayı, kəklikotu, mixək, ev üsulu ağ gilas və qoz mürəbbəsi ilə gümüş nimçədə",
        price: 22,
        weight: "Set",
      },
      {
        id: "dr5",
        name: "Təzə Sıxılmış Ənənəvi Nar Şirəsi",
        description: "Göyçay narlarından dərhal soyuq sıxılmış təbii vitamin mənbəyi",
        price: 14,
        weight: "300ml",
      },
    ],
  },
];

export const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    title: "Əsas Zal və İşıqlandırma",
    category: "İnteryer",
    aspect: "col-span-12 md:col-span-8 h-[380px]",
  },
  {
    url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=85",
    title: "Qonaq Masası və Zərif Süfrə",
    category: "Atmosfer",
    aspect: "col-span-12 md:col-span-4 h-[380px]",
  },
  {
    url: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=85",
    title: "Açıq Qril və Ocaq Bəzəyi",
    category: "Mətbəx",
    aspect: "col-span-12 md:col-span-4 h-[340px]",
  },
  {
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85",
    title: "Müəllif Təqdimatı",
    category: "Yeməklər",
    aspect: "col-span-12 md:col-span-4 h-[340px]",
  },
  {
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=85",
    title: "Şərabzirzəmisi və Bar",
    category: "Kolleksiya",
    aspect: "col-span-12 md:col-span-4 h-[340px]",
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
    title: "Gecə Panoraması və Sakit Guşə",
    category: "İnteryer",
    aspect: "col-span-12 md:col-span-12 h-[420px]",
  },
];
