---
version: alpha
name: BibleFly
description: Un blog cristiano de lectura, con calidez editorial hecha a mano, contraste contenido y un aire de documental sereno.
colors:
  primary: "#403438"
  secondary: "#857672"
  tertiary: "#F2F2F2"
  neutral: "#FFFFFF"
  surface: "#F9F9F9"
  on-surface: "#222222"
  accent: "#000000"
  border: "#F2F2F2"
  success: "#2E7D32"
  warning: "#D98B1A"
  error: "#C62828"
colors-dark:
  primary: "#EADFE2"
  secondary: "#A99A9E"
  tertiary: "#2A2427"
  neutral: "#171315"
  surface: "#211C1F"
  on-surface: "#F3EDEF"
  accent: "#FFFFFF"
  border: "#332C30"
  success: "#81C784"
  warning: "#F0B357"
  error: "#EF9A9A"
typography:
  headline-display:
    fontFamily: "Open Sans"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: "38px"
    letterSpacing: "0px"
  headline-lg:
    fontFamily: "Roboto"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: "36px"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Roboto"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: "26px"
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "Open Sans"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "22px"
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Roboto"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Roboto"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "22px"
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Roboto"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Open Sans"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: "20px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Open Sans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "18px"
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Roboto"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0px"
  caption:
    fontFamily: "Roboto"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 6px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 50px
  xl: 194px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    height: "45px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    height: "45px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    height: "45px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.lg}"
    padding: "15px 20px"
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
---

# BibleFly

## Overview

BibleFly se siente como un blog cultural independiente: silencioso, editorial y ligeramente hecho a mano. La página usa abundante espacio en blanco, contraste modesto y una mezcla tipo collage de ilustración y fotografía, lo que le da una voz cercana y humana en lugar de una corporativa. El tono general es calmado y reflexivo, con suficiente carácter visual para sentirse literario y comunitario. El contenido gira en torno a la lectura bíblica, devocionales y reflexiones de fe.

## Colors

- **Primary (#403438):** tono cacao-ciruela oscuro para botones, encabezados fuertes y anclas de UI prominentes. Más suave que el negro puro, mantiene la interfaz cálida y editorial.
- **Secondary (#857672):** gris topo apagado para cuerpo de texto, metadatos y texto de apoyo. Reduce el ruido visual sin perder legibilidad sobre blanco.
- **Tertiary (#F2F2F2):** neutro muy claro para separadores sutiles, bordes y superficies secundarias. Mantiene el layout aireado sin introducir "chrome" visible.
- **Neutral (#FFFFFF):** fondo de página y base de tarjetas. El espacio en blanco es un elemento estructural principal.
- **Surface (#F9F9F9):** superficie off-white suave para botones secundarios y tratamientos suaves de UI.
- **On-surface (#222222):** casi negro para texto funcional y etiquetas de alta legibilidad sobre fondos claros.
- **Accent (#000000):** el contraste más agudo, reservado para el logo, detalles gráficos y máxima énfasis.
- **Border (#F2F2F2):** tono de divisores y contornos. Los bordes son intencionalmente tenues para que el contenido siga siendo el foco.
- **Success (#2E7D32), Warning (#D98B1A), Error (#C62828):** tonos utilitarios para estados; deben permanecer secundarios frente a la paleta editorial.

## Colors (dark)

La paleta oscura invierte los neutros y aclara el primario y el acento para conservar el contraste (AA). El `primary` pasa a ser un tono cálido claro usado en encabezados y texto fuerte, y como fondo de los botones primarios sobre texto oscuro.

- **neutral (#171315):** fondo de página en modo oscuro.
- **surface (#211C1F):** superficie de tarjetas y controles secundarios.
- **on-surface (#F3EDEF):** texto de alta legibilidad sobre superficies oscuras.
- **primary (#EADFE2):** encabezados, texto fuerte y fondo de botones primarios (texto en `on dark`).
- **secondary (#A99A9E):** cuerpo de texto y metadatos.
- **accent (#FFFFFF):** máxima énfasis.
- **border (#332C30):** separadores y bordes, intencionalmente tenues.

## Typography

El sistema combina **Open Sans** (etiquetas, titulares de marca y énfasis) con **Roboto** (cuerpo de lectura y encabezados). Las fuentes se sirven self-hosted vía Fontsource (`@fontsource/open-sans`, `@fontsource/roboto`). Las escalas van de `headline-display` (32px/700) a `caption` (12px/400); el cuerpo de lectura usa `body-lg` (16px/24) para párrafos de artículo y `body-md` para UI. Se evita el uso excesivo de mayúsculas y el letter-spacing amplio en el cuerpo.

## Radius & Spacing

- **Radius:** `none` 0, `sm` 4, `md` 6 (controles), `lg` 12 (tarjetas), `xl` 16, `full` 9999 (chips).
- **Spacing:** `xs` 8, `sm` 16, `md` 24, `lg` 50, `xl` 194. El espacio en blanco es un elemento estructural; los separadores son tenues para mantener la sensación aireada.

## Components

- **Botones:** `button-primary` (cacao oscuro sobre blanco, 45px de alto), `button-primary-hover` (negro), `button-secondary` (superficie clara, borde tenue) y `button-tertiary` (solo texto, sin caja).
- **Tarjetas (`card`):** fondo blanco, esquinas `lg`, padding 15px×20px, borde suave, sin sombras fuertes. Alojan título, descripción, fecha y etiquetas del post.
- **Chips (`chip`):** pastillas para las etiquetas de los posts: fondo `surface`, texto `primary`, tipografía `label-sm`, forma `full`.
- **Input (`input`):** fondo blanco, texto `on-surface`, esquinas `md`.
- **Header/Footer:** textuales y discretos, con navegación simple (Inicio, Blog) y sin cromo pesado.

## Do's and Don'ts

- **Sí:** usar abundante espacio en blanco, mantener contraste modesto, respetar la mezcla tipográfica Open Sans + Roboto y conservar la lectura cómoda (columna estrecha) en los artículos.
- **Sí:** apoyar el tono sereno y reflexivo propio del contenido devocional.
- **No:** introducir colores corporativos saturados, sombras fuertes ni bordes marcados.
- **No:** usar mayúsculas sostenidas ni letter-spacing amplio en el cuerpo.
- **No:** romper la coherencia claro/oscuro: todo color debe existir en ambos temas.