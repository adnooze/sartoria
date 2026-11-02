export const IG = "https://www.instagram.com/_.sartoria._/";
export const DM = "https://ig.me/m/_.sartoria._";
export const FB = "https://www.facebook.com/sartorya";

export const img = (file: string, size: 600 | 1400 = 600) => `/images/w${size}/${file}.jpg`;

export const NAV = [
  { href: "#kolekcija", label: "Kolekcija" },
  { href: "#novo", label: "Novo" },
  { href: "#po-mjeri", label: "Po mjeri" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#kontakt", label: "Kontakt" },
];

export interface Product {
  file: string;
  name: string;
  price: string;
  oldPrice?: string;
}

export const PRODUCT_TABS: { key: string; label: string; badge?: string; items: Product[] }[] = [
  {
    key: "novo",
    label: "Novo",
    badge: "Novo",
    // Prices from the Instagram post: "Cijene već od 39 KM"
    items: [
      { file: "DezoFhxiDeA_05", name: "Haljina sa šalom — zlatni senf", price: "od 39 KM" },
      { file: "DezoFhxiDeA_02", name: "Haljina s pojasom — bordo", price: "od 39 KM" },
      { file: "DezoFhxiDeA_03", name: "Karirana haljina — bež", price: "od 39 KM" },
      { file: "DezoFhxiDeA_08", name: "Haljina s kaišem — crna", price: "od 39 KM" },
      { file: "DezoFhxiDeA_10", name: "Haljina s pojasom — puder", price: "od 39 KM" },
      { file: "DezoFhxiDeA_12", name: "Haljina na prugice — teget", price: "od 39 KM" },
    ],
  },
  {
    key: "jesen",
    label: "Jesen",
    items: [
      { file: "DeSmMXgCPYD_01", name: "Haljina s vezanjem — lavanda", price: "Na upit" },
      { file: "DeSmMXgCPYD_02", name: "Haljina s pojasom — terakota", price: "Na upit" },
      { file: "DeSmMXgCPYD_04", name: "Haljina na pruge — nebo plava", price: "Na upit" },
      { file: "DeSmMXgCPYD_07", name: "Haljina s pojasom — bordo", price: "Na upit" },
      { file: "DeSmMXgCPYD_09", name: "Haljina s vezanjem — plava", price: "Na upit" },
      { file: "DeSmMXgCPYD_18", name: "Plisirana haljina — karamel", price: "Na upit" },
    ],
  },
  {
    key: "karirano",
    label: "Karirano & pruge",
    items: [
      { file: "Ddj91wQCFgj_01", name: "Karo haljina — siva", price: "Na upit" },
      { file: "Ddj91wQCFgj_02", name: "Karo haljina — bijela", price: "Na upit" },
      { file: "Ddj91wQCFgj_04", name: "Karirana haljina — crvena", price: "Na upit" },
      { file: "Ddj91wQCFgj_09", name: "Vichy haljina — plava", price: "Na upit" },
      { file: "Ddj91wQCFgj_14", name: "Tartan haljina", price: "Na upit" },
      { file: "Ddj91wQCFgj_05", name: "Haljina na pruge — bordo", price: "Na upit" },
    ],
  },
  {
    key: "mjera",
    label: "Po mjeri",
    items: [
      { file: "Dco6TRPCLNt_01", name: "Haljina po mjeri — maslina", price: "Po mjeri" },
      { file: "Dco6TRPCLNt_03", name: "Haljina po mjeri — nebo plava", price: "Po mjeri" },
      { file: "Dco6TRPCLNt_04", name: "Haljina po mjeri — magenta", price: "Po mjeri" },
      { file: "Dco6TRPCLNt_06", name: "Haljina po mjeri — indigo", price: "Po mjeri" },
      { file: "Dco6TRPCLNt_07", name: "Haljina po mjeri — limun", price: "Po mjeri" },
      { file: "Dco6TRPCLNt_10", name: "Haljina po mjeri — chartreuse", price: "Po mjeri" },
    ],
  },
  {
    key: "akcija",
    label: "Sniženje",
    badge: "Akcija",
    // Prices from the "Posljednji komadi na sniženju" post
    items: [
      { file: "DenHQkNiPHJ_02", name: "Haljina s kaišem — crna", price: "39 KM", oldPrice: "69 KM" },
      { file: "DenHQkNiPHJ_11", name: "Haljina s kaišem — petrolej", price: "35 KM", oldPrice: "50 KM" },
      { file: "DenHQkNiPHJ_08", name: "Baršunasta haljina — bordo", price: "45 KM" },
      { file: "DenHQkNiPHJ_01", name: "Haljina — karamel", price: "59 KM" },
      { file: "DenHQkNiPHJ_09", name: "Haljina na tregere — bordo", price: "25 KM" },
      { file: "DenHQkNiPHJ_04", name: "Haljina na tregere — plava", price: "20 KM" },
    ],
  },
];

// Every Instagram post, grouped for the lookbook
const POSTS = [
  { id: "DU_te4uiEGG", n: 10, group: "aurora", title: "Aurora — svečana haljina" },
  { id: "DYflj0joF-w", n: 1, group: "aurora", title: "Aurora — reel", reel: true },
  { id: "DezoFhxiDeA", n: 20, group: "novo", title: "Nova ponuda" },
  { id: "DenHQkNiPHJ", n: 12, group: "akcija", title: "Sniženje" },
  { id: "DeSmMXgCPYD", n: 20, group: "jesen", title: "Jesenja kolekcija" },
  { id: "DeDL3kKobXS", n: 1, group: "jesen", title: "Jesen u Sartorii — reel", reel: true },
  { id: "DdruyYBIOXy", n: 1, group: "jesen", title: "Jesen u Sartorii — reel", reel: true },
  { id: "Ddj91wQCFgj", n: 19, group: "karirano", title: "Karirano & pruge" },
  { id: "Dd4dMM0o1Mj", n: 1, group: "mjera", title: "Šijemo po mjeri — reel", reel: true },
  { id: "Dco6TRPCLNt", n: 15, group: "mjera", title: "Šijemo po mjeri" },
  { id: "Db4_bv5CEQe", n: 5, group: "jesen", title: "Senf & zlato" },
  { id: "DbyWZLAoFwi", n: 1, group: "novo", title: "Koju vi birate? — reel", reel: true },
];

export const GALLERY_GROUPS = [
  { key: "sve", label: "Sve" },
  { key: "novo", label: "Novo" },
  { key: "aurora", label: "Aurora" },
  { key: "jesen", label: "Jesen" },
  { key: "karirano", label: "Karirano & pruge" },
  { key: "mjera", label: "Po mjeri" },
  { key: "akcija", label: "Sniženje" },
];

export const GALLERY = POSTS.flatMap((p) =>
  Array.from({ length: p.n }, (_, i) => ({
    file: `${p.id}_${String(i + 1).padStart(2, "0")}`,
    group: p.group,
    title: p.title,
    reel: Boolean(p.reel),
    url: `${IG}${p.reel ? "reel" : "p"}/${p.id}/`,
  }))
);

export const GALLERY_PAGE = 16;
