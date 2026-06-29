<div align="center">

  <img src="public/favicon.svg" width="64" height="64" alt="Belajar Python Logo" />

  <h1>Belajar Python</h1>

  <p>Platform pembelajaran Python gratis, interaktif, dan bilingual untuk siswa SMP & SMA Indonesia.</p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
  [![Version](https://img.shields.io/badge/version-v1.0.0--beta.1-orange)](./CHANGELOG.md)
  [![Astro](https://img.shields.io/badge/Astro-v7-FF5D01?logo=astro&logoColor=white)](https://astro.build)
  [![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
  [![Tests](https://img.shields.io/badge/unit%20tests-63%20passing-brightgreen?logo=vitest)](./src/__tests__)
  [![E2E](https://img.shields.io/badge/e2e-17%20passing-brightgreen?logo=playwright)](./src/__tests__/e2e)
  [![Deploy](https://img.shields.io/badge/Live-belajar--python.varnimyr.my.id-black?logo=vercel)](https://belajar-python.varnimyr.my.id)

</div>

---

## Tentang Project

**Belajar Python** hadir untuk mengisi kekosongan tutorial Python modern dalam Bahasa Indonesia. Kebanyakan sumber yang ada masih menggunakan penjelasan yang rumit, tidak interaktif, atau tidak relevan dengan kebutuhan siswa saat ini.

Platform ini mengajarkan **Python modern (Python 3)** dari nol, langsung bisa dicoba di browser tanpa install apapun.

**Ditujukan untuk:**
- Siswa SMP & SMA yang belajar Python untuk pertama kali
- Persiapan kompetisi pemrograman (OSN, ICPC)
- Siapapun yang ingin belajar Python dalam Bahasa Indonesia

---

## Fitur

- **Interaktif** — Editor kode langsung di browser, jalankan Python tanpa install compiler
- **Exercise per lesson** — Setiap lesson punya latihan interaktif (fill-blank, multiple-choice, code-output) dengan hint dan penjelasan
- **Bilingual** — Konten tersedia dalam Bahasa Indonesia dan English (45 lesson × 2 bahasa)
- **Progresif** — Kurikulum terstruktur dari pemula hingga mahir, 1 proyek mini per unit
- **Gratis** — Selamanya, tanpa akun, tanpa iklan
- **Mobile-friendly** — Responsif dari desktop hingga HP Android low-end
- **Dark mode** — Tampilan nyaman di malam hari, didukung diagram SVG adaptive
- **Diagram visual** — Konsep kunci dijelaskan dengan ilustrasi SVG (alur kompilasi, variabel, I/O, flowchart, loop, fungsi, array)
- **Progress tracking** — Pantau kemajuan belajar, streak harian, dan badge pencapaian secara lokal
- **Glosarium** — Kamus 42 istilah Python bilingual dengan definisi, contoh kode, dan tautan antar istilah
- **Aksesibel** — WCAG 2.1 compliant: skip link, ARIA roles, live regions, keyboard navigable

---

## Kurikulum

| Unit | Topik | Lessons | Status |
|------|-------|:-------:|--------|
| 0 | Persiapan | 3 | ✅ Tersedia |
| 1 | Dasar-Dasar Python | 8 | ✅ Tersedia |
| 2 | Percabangan | 6 | ✅ Tersedia |
| 3 | Perulangan | 7 | ✅ Tersedia |
| 4 | Fungsi | 8 | ✅ Tersedia |
| 5 | List, Dict & Data | 7 | ✅ Tersedia |
| 6 | OOP, File I/O & Exception | 6 | ✅ Tersedia |

**45 lessons tersedia** · ~55-60 jam belajar · 1 proyek mini per unit

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | [Astro v7](https://astro.build) + React islands |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Code Editor | CodeMirror 6 |
| Syntax Highlight | Shiki (one-dark-pro theme) |
| MDX Directives | remark-directive |
| Python Execution | [Judge0 API](https://judge0.com) (server-side proxy) |
| Unit Testing | Vitest + jsdom (63 unit tests) |
| E2E Testing | Playwright (17 smoke tests) |
| Deployment | Vercel |

---

## Memulai Development

### Prerequisites

- Node.js 22+
- Judge0 API key ([RapidAPI](https://rapidapi.com/judge0-official/api/judge0-ce) atau self-hosted)

### Instalasi

```bash
# Clone repository
git clone https://github.com/zedfar/belajar-python.git
cd belajar-python

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env dan isi JUDGE0_API_KEY

# Jalankan development server
npm run dev
```

Buka **http://localhost:4321** di browser.

### Environment Variables

| Variable | Keterangan | Contoh |
|----------|------------|--------|
| `JUDGE0_API_URL` | Judge0 endpoint | `https://judge0-ce.p.rapidapi.com` |
| `JUDGE0_API_KEY` | API key / auth token | `your-key-here` |
| `PUBLIC_SITE_URL` | URL production | `https://belajar-python.varnimyr.my.id` |

> Untuk self-host Judge0 sendiri (gratis di Oracle Cloud), lihat dokumentasi di folder `.docs/`.

### Scripts

```bash
npm run dev        # Development server (localhost:4321)
npm run build      # Production build
npm run preview    # Preview production build
npm run typecheck  # TypeScript type checking
npm test           # Unit tests (vitest)
npm run test:e2e   # E2E tests (playwright) — butuh dev server aktif
```

---

## Struktur Project

```
belajar-python/
├── public/
│   ├── images/              # SVG diagrams (compilation flow, variables, I/O, loop, function, array)
│   ├── robots.txt           # SEO — allow all, referensi sitemap
│   └── og-default.svg       # Default Open Graph image
├── src/
│   ├── __tests__/
│   │   ├── lib/             # Unit tests — progress.test.ts, i18n.test.ts (63 tests)
│   │   └── e2e/             # E2E smoke tests — smoke.test.ts (17 tests, Playwright)
│   ├── components/
│   │   ├── ui/              # Button, Card, Tabs
│   │   ├── layout/          # Header, Sidebar, Footer, MobileNav
│   │   ├── learn/           # CodePlayground, CodeBlock, Exercise, QuizCard, InfoBox, ErrorBoundary
│   │   └── common/          # ThemeToggle, LanguageToggle, TableOfContents
│   ├── content/
│   │   ├── lessons-id/      # 45 lesson Bahasa Indonesia (MDX, unit-0 s/d unit-6)
│   │   └── lessons-en/      # 45 lesson English (MDX, unit-0 s/d unit-6)
│   ├── data/
│   │   └── glossary.ts      # 42 istilah Python bilingual untuk halaman Glosarium
│   ├── layouts/             # BaseLayout, PageLayout, LessonLayout
│   ├── lib/                 # i18n, progress, code-runner, curriculum
│   ├── pages/               # File-based routing Astro
│   │   └── [lang]/          # /id/* dan /en/* — curriculum, glossary, lesson, playground, progress
│   ├── plugins/             # Custom remark plugins (infobox directives)
│   ├── styles/              # global.css
│   └── types/               # TypeScript type definitions
├── .docs/                   # Dokumentasi internal (tidak di-track git)
├── vitest.config.ts         # Konfigurasi Vitest (jsdom + path alias)
├── playwright.config.ts     # Konfigurasi Playwright E2E
├── CHANGELOG.md             # Riwayat perubahan
└── tailwind.config.ts       # Tailwind design tokens
```

---

## Berkontribusi

Kontribusi sangat welcome! Beberapa cara untuk berkontribusi:

- 🐛 **Laporkan bug** — [Buka issue](https://github.com/zedfar/belajar-python/issues)
- ✍️ **Tulis lesson** — Tambah atau perbaiki konten di `src/content/lessons-id/`
- 🌐 **Terjemahan** — Bantu terjemahkan lesson ke English di `src/content/lessons-en/`
- 💡 **Saran fitur** — Diskusikan di [Issues](https://github.com/zedfar/belajar-python/issues)

### Menulis Lesson Baru

Lesson ditulis dalam format MDX di `src/content/lessons-id/unit-X/`:

```markdown
---
title: "Judul Lesson"
unit: 1
lesson: 9
description: "Deskripsi singkat"
objectives:
  - "Tujuan pembelajaran 1"
estimatedTime: 30
difficulty: "beginner"
tags: ["tag1", "tag2"]
---

# Judul Lesson

Konten lesson...

:::tip
Gunakan directive ini untuk callout penting.
:::
```

> ⚠️ Operator `<`, `>`, `<=`, `>=` di teks prosa (bukan di code block) harus dibungkus backtick: `` `<=` ``

Setiap lesson sebaiknya menyertakan minimal 2 **Exercise interaktif** di bagian akhir:

```mdx
import { Exercise } from '@/components/learn/Exercise'

<Exercise client:load
  id="u1l1-ex1"
  title="Judul Exercise"
  description="Pertanyaan atau instruksi"
  type="multiple-choice"
  options={["Opsi A", "Opsi B", "Opsi C", "Opsi D"]}
  correctIndex={0}
  hints={["Petunjuk 1", "Petunjuk 2"]}
  explanation="Penjelasan jawaban yang benar"
  lang="id"
/>
```

Tipe exercise yang tersedia: `multiple-choice`, `fill-blank`, `code-output`, `free-code`.

---

## Deployment

Project ini di-deploy ke **[belajar-python.varnimyr.my.id](https://belajar-python.varnimyr.my.id)**. Setiap push ke `main` akan trigger deployment otomatis.

```bash
# Build production
npm run build

# Preview sebelum deploy
npm run preview
```

Set environment variables di **Vercel Dashboard → Settings → Environment Variables**.

---

## Lisensi

Dirilis di bawah [MIT License](./LICENSE). Bebas digunakan, dimodifikasi, dan didistribusikan.

---

<div align="center">
  <sub>Dibuat dengan ❤️ untuk pelajar Indonesia &middot; <a href="https://belajar-python.varnimyr.my.id">belajar-python.varnimyr.my.id</a></sub>
</div>
