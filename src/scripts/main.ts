const $ = <T extends Element = HTMLElement>(sel: string) => document.querySelector<T & Element>(sel)!;
const $$ = <T extends Element = HTMLElement>(sel: string) => [...document.querySelectorAll<T & Element>(sel)];

// ---------- Product tabs ----------
const productTabs = $$<HTMLButtonElement>(".products .tab");
const productPanels = $$(".products [data-panel]");

function setProductTab(key: string) {
  productTabs.forEach((t) => t.classList.toggle("is-active", t.dataset.tab === key));
  productPanels.forEach((p) => (p.hidden = p.dataset.panel !== key));
}
productTabs.forEach((t) => t.addEventListener("click", () => setProductTab(t.dataset.tab!)));

// ---------- Lookbook ----------
const gallery = $("#gallery");
const galleryTabs = $("#galleryTabs");
const loadMore = $<HTMLButtonElement>("#loadMore");
const items = $$<HTMLButtonElement>(".gitem");
const PAGE = Number(gallery.dataset.page) || 16;
let filter = "sve";
let shown = PAGE;

const filtered = () => (filter === "sve" ? items : items.filter((it) => it.dataset.group === filter));

function renderGallery() {
  const list = filtered();
  items.forEach((it) => (it.hidden = true));
  list.slice(0, shown).forEach((it, i) => {
    it.hidden = false;
    it.style.animationDelay = `${(i % PAGE) * 40}ms`;
  });
  loadMore.hidden = shown >= list.length;
}

function setFilter(key: string) {
  filter = key;
  shown = PAGE;
  galleryTabs.querySelectorAll<HTMLElement>(".tab").forEach((t) => t.classList.toggle("is-active", t.dataset.filter === key));
  renderGallery();
}
galleryTabs.addEventListener("click", (e) => {
  const b = (e.target as HTMLElement).closest<HTMLElement>(".tab");
  if (b) setFilter(b.dataset.filter!);
});
loadMore.addEventListener("click", () => {
  shown += PAGE;
  renderGallery();
});
renderGallery();

// Collection tiles jump to a pre-filtered lookbook or product tab
$$("[data-filter]:not(.tab), [data-tab]:not(.tab)").forEach((el) =>
  el.addEventListener("click", () => {
    if (el.dataset.filter) setFilter(el.dataset.filter);
    if (el.dataset.tab) setProductTab(el.dataset.tab);
  })
);

// ---------- Lightbox ----------
const lb = $("#lightbox");
const lbImg = document.createElement("img");
lb.querySelector("figure")!.prepend(lbImg);
const lbCap = lb.querySelector("figcaption")!;
let lbIndex = 0;

function showLightbox(i: number) {
  const list = filtered();
  lbIndex = (i + list.length) % list.length;
  const it = list[lbIndex].dataset;
  lbImg.src = it.full!;
  lbImg.alt = it.title!;
  lbCap.innerHTML = `${it.title} · ${lbIndex + 1}/${list.length}<a href="${it.url}" target="_blank" rel="noopener">Instagram</a>`;
  lb.classList.add("is-open");
  lb.setAttribute("aria-hidden", "false");
}
const closeLightbox = () => {
  lb.classList.remove("is-open");
  lb.setAttribute("aria-hidden", "true");
};

gallery.addEventListener("click", (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>(".gitem");
  if (b) showLightbox(filtered().indexOf(b));
});
lb.querySelector(".lightbox__prev")!.addEventListener("click", () => showLightbox(lbIndex - 1));
lb.querySelector(".lightbox__next")!.addEventListener("click", () => showLightbox(lbIndex + 1));
lb.querySelector(".lightbox__close")!.addEventListener("click", closeLightbox);
lb.addEventListener("click", (e) => {
  if (e.target === lb) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showLightbox(lbIndex - 1);
  if (e.key === "ArrowRight") showLightbox(lbIndex + 1);
});

// ---------- Header & menu ----------
const header = $(".header");
addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 10), { passive: true });

const burger = $<HTMLButtonElement>(".burger");
const drawer = $("#drawer");
burger.addEventListener("click", () => {
  const open = drawer.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
});
drawer.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) {
    drawer.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
});

// ---------- Scroll reveal ----------
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("is-visible");
        io.unobserve(en.target);
      }
    }),
  { rootMargin: "0px 0px -8% 0px" }
);
$$(".section-title, .tile, .quote, .bespoke__media, .bespoke__text, .ctile, .values, .contact").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});
