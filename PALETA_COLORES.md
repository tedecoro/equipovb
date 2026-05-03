# Paleta de Colores - Equipo VB

## Paleta Representativa

La identidad visual de **Equipo VB** se basa en una paleta minimalista y profesional que transmite:
- **Confianza** (verde esmeralda)
- **Profesionalismo** (grises neutros)
- **Claridad** (blancos y fondos limpios)

---

## Colores Primarios

### Verde Esmeralda (Emerald)
Color corporativo principal. Representa crecimiento, confianza y profesionalismo.

| Token | Valor | Uso |
|-------|-------|-----|
| `emerald-50` | `#ecfdf5` | Fondos sutiles, cards hover |
| `emerald-100` | `#d1fae5` | Badges, etiquetas, highlights |
| `emerald-400` | `#34d399` | Gradientes, acentos |
| `emerald-500` | `#10b981` | **Botones primarios**, íconos activos |
| `emerald-600` | `#059669` | **Textos destacados**, hover states |
| `emerald-700` | `#047857` | Logo en navbar sticky |

**Gradientes comunes:**
- `from-emerald-400 to-emerald-500` - Pasos iniciales, elementos suaves
- `from-emerald-500 to-emerald-600` - Elementos principales
- `from-emerald-600 to-emerald-700` - Énfasis, elementos finales
- `from-emerald-500 to-teal-600` - Variación para cards destacadas

---

## Colores Neutros

### Escala de Grises
Base para textos, fondos y estructura visual.

| Token | Valor | Uso |
|-------|-------|-----|
| `gray-50` | `#f9fafb` | **Fondos de secciones** (alternados con blanco) |
| `gray-100` | `#f3f4f6` | Cards secundarios, divisores sutiles |
| `gray-200` | `#e5e7eb` | Bordes, separadores |
| `gray-300` | `#d1d5db` | Estados inactivos, placeholders |
| `gray-400` | `#9ca3af` | Textos descriptivos secundarios |
| `gray-500` | `#6b7280` | Subtítulos, textos de apoyo |
| `gray-600` | `#4b5563` | Párrafos, descripciones |
| `gray-700` | `#374151` | Textos de navegación sticky |
| `gray-800` | `#1f2937` | Subtítulos importantes |
| `gray-900` | `#111827` | **Títulos principales**, texto principal |

---

## Colores de Soporte

### Blanco y Negro

| Color | Uso |
|-------|-----|
| `white` | Fondos principales, cards, contraste |
| `black` / `bg-gray-900` | Navbar inicial, textos primarios |

### Fondos Específicos de Secciones

```
Hero:           bg-[#0A0A0A] (negro casi puro)
Servicios:      bg-gray-50
Cómo trabajamos: bg-gradient-to-b from-white via-gray-50/50 to-white
Contacto:       bg-gradient-to-b from-white via-gray-50/30 to-white
Footer:         bg-[#0A0A0A] (negro casi puro)
```

---

## Colores de Estado

| Estado | Color | Uso |
|--------|-------|-----|
| Éxito | `emerald-500` | Confirmaciones, checkmarks |
| WhatsApp | `green-500/600` | Botón de contacto WhatsApp |
| Error | `red-500` | Validaciones (no usado actualmente) |

---

## Aplicación por Componentes

### Navbar
- **Logo (scroll=false)**: `text-white`
- **Logo (scroll=true)**: `text-emerald-700`
- **Botón Presupuesto**: `bg-emerald-500` → hover `bg-emerald-600`
- **Fondo sticky**: `bg-white` con sombra

### Hero
- **Fondo**: `bg-[#0A0A0A]` (negro)
- **Textos**: `text-white`, `text-gray-200`, `text-gray-400`
- **Botón primario**: `bg-gray-900`
- **Botón secundario**: `border-white` transparente

### Servicios (ServicesSection)
- **Tag**: `bg-emerald-100 text-emerald-700`
- **Título destacado**: `text-emerald-600`
- **Íconos**: `bg-emerald-100` → `text-emerald-600`
- **Botón CTA**: `bg-emerald-600` con sombra `shadow-emerald-600/25`
- **Card activa**: `bg-emerald-600 text-white`
- **Card inactiva**: `bg-white hover:bg-emerald-50`

### Cómo Trabajamos (HowWeWork)
- **Tag**: `bg-emerald-100 text-emerald-700`
- **Título destacado**: `text-emerald-600`
- **Gradiente pasos**: `from-emerald-400` → `to-emerald-700` (progresivo)
- **Fondos cards**: `bg-emerald-50` con variaciones de opacidad
- **Barra progreso**: `from-emerald-400 via-emerald-500 to-emerald-600`
- **Nodos**: Gradientes emerald según posición

### Footer
- **Fondo**: `bg-[#0A0A0A]`
- **Títulos**: `text-emerald-400`
- **Iconos sociales**: `bg-emerald-500/20` → hover `bg-emerald-500`
- **Links**: `text-gray-400` → hover `text-emerald-400`
- **Iconos contacto**: `text-emerald-400`

---

## Sistema de Sombras

Sombras con tinte emerald para mantener coherencia:

```css
shadow-emerald-500/20    /* Sombra suave */
shadow-emerald-500/25    /* Sombra botones */
shadow-emerald-600/25    /* Sombra cards activas */
```

---

## Reglas de Uso

1. **Verde esmeralda** solo para elementos interactivos, CTAs y acentos importantes
2. **Gris-50** para fondos de sección alternados con blanco
3. **Gris-900** para todos los títulos principales
4. **Blanco** para cards y elementos elevados
5. **Negro (#0A0A0A)** para Hero y Footer (contraste máximo)

---

## Referencia Tailwind

Esta paleta utiliza los tokens por defecto de Tailwind CSS para la escala `emerald` y `gray`.

Para más información: https://tailwindcss.com/docs/customizing-colors
