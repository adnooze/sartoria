const IG = "https://www.instagram.com/_.sartoria._/";
const DM = "https://ig.me/m/_.sartoria._";
const img = (file, size = 600) => `images/w${size}/${file}.jpg`;

// Products shown under "Novo u ponudi" — prices taken from the Instagram posts
const PRODUCTS = {
  novo: [
    ["DezoFhxiDeA_05", "Haljina sa šalom — zlatni senf", "od 39 KM"],
    ["DezoFhxiDeA_02", "Haljina s pojasom — bordo", "od 39 KM"],
    ["DezoFhxiDeA_03", "Karirana haljina — bež", "od 39 KM"],
    ["DezoFhxiDeA_08", "Haljina s kaišem — crna", "od 39 KM"],
    ["DezoFhxiDeA_10", "Haljina s pojasom — puder", "od 39 KM"],
    ["DezoFhxiDeA_12", "Haljina na prugice — teget", "od 39 KM"],
  ],
  jesen: [
    ["DeSmMXgCPYD_01", "Haljina s vezanjem — lavanda", "Na upit"],
    ["DeSmMXgCPYD_02", "Haljina s pojasom — terakota", "Na upit"],
    ["DeSmMXgCPYD_04", "Haljina na pruge — nebo plava", "Na upit"],
    ["DeSmMXgCPYD_07", "Haljina s pojasom — bordo", "Na upit"],
    ["DeSmMXgCPYD_09", "Haljina s vezanjem — plava", "Na upit"],
    ["DeSmMXgCPYD_18", "Plisirana haljina — karamel", "Na upit"],
  ],
  karirano: [
    ["Ddj91wQCFgj_01", "Karo haljina — siva", "Na upit"],
    ["Ddj91wQCFgj_02", "Karo haljina — bijela", "Na upit"],
    ["Ddj91wQCFgj_04", "Karirana haljina — crvena", "Na upit"],
    ["Ddj91wQCFgj_09", "Vichy haljina — plava", "Na upit"],
    ["Ddj91wQCFgj_14", "Tartan haljina", "Na upit"],
    ["Ddj91wQCFgj_05", "Haljina na pruge — bordo", "Na upit"],
  ],
  mjera: [
    ["Dco6TRPCLNt_01", "Haljina po mjeri — maslina", "Po mjeri"],
    ["Dco6TRPCLNt_03", "Haljina po mjeri — nebo plava", "Po mjeri"],
    ["Dco6TRPCLNt_04", "Haljina po mjeri — magenta", "Po mjeri"],
    ["Dco6TRPCLNt_06", "Haljina po mjeri — indigo", "Po mjeri"],
    ["Dco6TRPCLNt_07", "Haljina po mjeri — limun", "Po mjeri"],
    ["Dco6TRPCLNt_10", "Haljina po mjeri — chartreuse", "Po mjeri"],
  ],
  akcija: [
    ["DenHQkNiPHJ_02", "Haljina s kaišem — crna", "39 KM", "69 KM"],
    ["DenHQkNiPHJ_11", "Haljina s kaišem — petrolej", "35 KM", "50 KM"],
    ["DenHQkNiPHJ_08", "Baršunasta haljina — bordo", "45 KM"],
    ["DenHQkNiPHJ_01", "Haljina — karamel", "59 KM"],
    ["DenHQkNiPHJ_09", "Haljina na tregere — bordo", "25 KM"],
    ["DenHQkNiPHJ_04", "Haljina na tregere — plava", "20 KM"],
  ],
};

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
const GROUPS = [
  ["sve", "Sve"], ["novo", "Novo"], ["aurora", "Aurora"], ["jesen", "Jesen"],
  ["karirano", "Karirano & pruge"], ["mjera", "Po mjeri"], ["akcija", "Sniženje"],
];

const ITEMS = POSTS.flatMap((p) =>
  Array.from({ length: p.n }, (_, i) => ({
    file: `${p.id}_${String(i + 1).padStart(2, "0")}`,
    group: p.group,
    title: p.title,
    reel: p.reel,
    url: `${IG}${p.reel ? "reel" : "p"}/${p.id}/`,
  }))
);

const ASK_ICON = '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg>';

// ---------- Products ----------
const grid = document.getElementById("productGrid");
const productTabs = document.querySelectorAll(".products .tab");

function renderProducts(key) {
  grid.innerHTML = PRODUCTS[key]
    .map(([file, name, price, old], i) => {
      const badge = key === "akcija" ? '<span class="badge badge--sale">Akcija</span>'
        : key === "novo" ? '<span class="badge">Novo</span>' : "";
      return `<article class="card" style="animation-delay:${i * 60}ms">
        <a class="card__img" href="${DM}" target="_blank" rel="noopener">
          ${badge}<img src="${img(file)}" alt="${name}" loading="lazy">
        </a>
        <div class="card__body">
          <h3 class="card__name">${name}</h3>
          <p class="card__price" style="margin:0">${price}${old ? `<s>${old}</s>` : ""}</p>
          <a class="card__ask" href="${DM}" target="_blank" rel="noopener" aria-label="Pitaj za model ${name}">${ASK_ICON}</a>
        </div>
      </article>`;
    })
    .join("");
}

function setProductTab(key) {
  productTabs.forEach((t) => t.classList.toggle("is-active", t.dataset.tab === key));
  renderProducts(key);
}
productTabs.forEach((t) => t.addEventListener("click", () => setProductTab(t.dataset.tab)));
setProductTab("novo");

// ---------- Lookbook ----------
const gallery = document.getElementById("gallery");
const galleryTabs = document.getElementById("galleryTabs");
const loadMore = document.getElementById("loadMore");
const PAGE = 16;
let filter = "sve";
let shown = PAGE;

galleryTabs.innerHTML = GROUPS.map(([k, label]) =>
  `<button class="tab${k === filter ? " is-active" : ""}" data-filter="${k}">${label}</button>`).join("");

const filtered = () => (filter === "sve" ? ITEMS : ITEMS.filter((it) => it.group === filter));

function renderGallery() {
  const list = filtered();
  gallery.innerHTML = list.slice(0, shown)
    .map((it, i) => `<button class="gitem" data-i="${i}" style="animation-delay:${(i % PAGE) * 40}ms">
        <img src="${img(it.file)}" alt="${it.title}" loading="lazy">
        <span class="tag">${it.reel ? "Reel · " : ""}${it.title}</span>
      </button>`)
    .join("");
  loadMore.hidden = shown >= list.length;
}

function setFilter(key) {
  filter = key;
  shown = PAGE;
  galleryTabs.querySelectorAll(".tab").forEach((t) => t.classList.toggle("is-active", t.dataset.filter === key));
  renderGallery();
}
galleryTabs.addEventListener("click", (e) => {
  const b = e.target.closest(".tab");
  if (b) setFilter(b.dataset.filter);
});
loadMore.addEventListener("click", () => { shown += PAGE; renderGallery(); });
renderGallery();

// Collection tiles jump to a pre-filtered lookbook or product tab
document.querySelectorAll("[data-filter]:not(.tab), [data-tab]:not(.tab)").forEach((el) =>
  el.addEventListener("click", () => {
    if (el.dataset.filter) setFilter(el.dataset.filter);
    if (el.dataset.tab) setProductTab(el.dataset.tab);
  })
);

// ---------- Lightbox ----------
const lb = document.getElementById("lightbox");
const lbFigure = lb.querySelector("figure");
const lbImg = document.createElement("img");
lbFigure.prepend(lbImg);
const lbCap = lb.querySelector("figcaption");
let lbIndex = 0;

function showLightbox(i) {
  const list = filtered();
  lbIndex = (i + list.length) % list.length;
  const it = list[lbIndex];
  lbImg.src = img(it.file, 1400);
  lbImg.alt = it.title;
  lbCap.innerHTML = `${it.title} · ${lbIndex + 1}/${list.length}<a href="${it.url}" target="_blank" rel="noopener">Instagram</a>`;
  lb.classList.add("is-open");
  lb.setAttribute("aria-hidden", "false");
}
const closeLightbox = () => { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); };

gallery.addEventListener("click", (e) => {
  const b = e.target.closest(".gitem");
  if (b) showLightbox(+b.dataset.i);
});
lb.querySelector(".lightbox__prev").addEventListener("click", () => showLightbox(lbIndex - 1));
lb.querySelector(".lightbox__next").addEventListener("click", () => showLightbox(lbIndex + 1));
lb.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showLightbox(lbIndex - 1);
  if (e.key === "ArrowRight") showLightbox(lbIndex + 1);
});

// ---------- Header & menu ----------
const header = document.querySelector(".header");
addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 10), { passive: true });

const burger = document.querySelector(".burger");
const drawer = document.getElementById("drawer");
burger.addEventListener("click", () => {
  const open = drawer.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
});
drawer.addEventListener("click", (e) => {
  if (e.target.closest("a")) { drawer.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
});

// ---------- Scroll reveal ----------
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
}), { rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".section-title, .tile, .quote, .bespoke__media, .bespoke__text, .ctile, .values, .contact")
  .forEach((el) => { el.classList.add("reveal"); io.observe(el); });
