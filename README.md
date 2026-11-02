# Sartoria

Web stranica za radionicu [Sartoria](https://www.instagram.com/_.sartoria._/) iz Zenice — izrada odjeće po mjeri i želji. Napravljena u [Astro](https://astro.build).

## Pokretanje

```bash
npm install
npm run dev      # lokalni server na http://localhost:4321
npm run build    # statička stranica u dist/
```

## Struktura

- `src/pages/index.astro` — početna stranica
- `src/components/` — sekcije (Header, Hero, Products, Mosaic, Bespoke, Capsule, Lookbook, Contact, Footer)
- `src/data/site.ts` — proizvodi, cijene, kolekcije i linkovi (ovdje se mijenja sadržaj)
- `src/styles/global.css` — stilovi
- `src/scripts/main.ts` — tabovi, galerija, lightbox, meni
- `public/images/` — slike za web (`w600`, `w1400`)
- `original-photos/` — originalne fotografije s Instagrama (ne objavljuju se)
