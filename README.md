# BibleFly

Blog cristiano dedicado a la **lectura bíblica**, los **devocionales** y las **reflexiones de fe**. Un espacio sereno y editorial para leer, meditar y crecer en la Palabra.

## ¿Qué encontrarás aquí?

- **Lecturas bíblicas:** pasajes comentados y guías de lectura para acompañar tu tiempo con la Escritura.
- **Devocionales:** reflexiones breves y cotidianas para alimentar la vida espiritual.
- **Artículos y estudios:** enseñanzas, contexto histórico y temas de fe explicados de forma accesible.
- **Etiquetas temáticas:** cada publicación se organiza con etiquetas (`tags`) para explorar por tema.

## Stack

- [Astro](https://astro.build) 7 — sitio estático, rápido y ligero.
- **Content Collections** para los artículos (Markdown en `src/content/blog/`).
- [Tailwind CSS](https://tailwindcss.com) 4 con tokens de diseño definidos en [`DESIGN.md`](./DESIGN.md).
- Tipografías **Open Sans** y **Roboto** self-hosted vía Fontsource.
- RSS y sitemap generados automáticamente.

## Comandos

| Comando                   | Acción                                              |
| :------------------------ | :-------------------------------------------------- |
| `npm install`             | Instala las dependencias                            |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`|
| `npm run build`           | Genera el sitio de producción en `./dist/`          |
| `npm run preview`         | Previsualiza la build localmente antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos del CLI de Astro                   |

Durante el desarrollo se recomienda el modo en segundo plano:

```sh
astro dev --background
astro dev logs
astro dev stop
```

## Escribir contenido

Crea un archivo `.md` en `src/content/blog/`. El nombre del archivo define la URL (`/blog/<nombre>/`).

```md
---
title: "Título del artículo"
description: "Un resumen breve que aparece en el listado y en el RSS."
pubDate: 2026-10-08
tags: ["lectura", "devocional"]
---

Contenido en **Markdown**.
```

Los campos `title`, `description` y `pubDate` son **obligatorios**; `tags` es opcional. Si falta alguno, la build falla con un error de esquema.

## Estructura

```text
/
├── DESIGN.md                # Sistema de diseño (tokens, tipografía, componentes)
├── public/                  # Recursos estáticos (favicon, imágenes)
├── src/
│   ├── components/          # Componentes reutilizables
│   ├── content/blog/        # Artículos en Markdown
│   ├── content.config.ts    # Esquema de la colección `blog`
│   ├── layouts/             # Layout compartido
│   ├── lib/                 # Utilidades de contenido
│   ├── pages/               # Rutas (inicio, blog, RSS)
│   └── styles/global.css    # Tokens de Tailwind y estilos globales
└── package.json
```

## Despliegue

El sitio es estático: `npm run build` genera `dist/`, listo para publicar en cualquier hosting estático. Recuerda que el dominio se configura en la propiedad `site` de `astro.config.mjs` (`https://biblefly.com`), que alimenta el RSS y el sitemap.

Requiere Node >= 22.12.