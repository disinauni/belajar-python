import type { Language } from '@/types/lesson'
import type { UnitMetadata } from '@/types/lesson'

export const CURRICULUM_ID: UnitMetadata[] = [
  {
    id: 0,
    slug: 'unit-0',
    title: { id: 'Persiapan', en: 'Getting Started' },
    description: {
      id: 'Kenali apa itu Python dan siapkan lingkungan belajarmu.',
      en: 'Learn what Python is and set up your learning environment.',
    },
    estimatedHours: '1-2',
    projectTitle: { id: 'Tour Playground', en: 'Playground Tour' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-0/01-apa-itu-python', title: { id: 'Apa itu Python?', en: 'What is Python?' }, estimatedTime: 20, isProject: false },
      { slug: 'unit-0/02-setup-lingkungan', title: { id: 'Setup Lingkungan', en: 'Environment Setup' }, estimatedTime: 20, isProject: false },
      { slug: 'unit-0/03-tour-playground', title: { id: 'Tour Playground', en: 'Playground Tour' }, estimatedTime: 10, isProject: true },
    ],
  },
  {
    id: 1,
    slug: 'unit-1',
    title: { id: 'Dasar-Dasar', en: 'Fundamentals' },
    description: {
      id: 'Pelajari konsep dasar Python: variabel, tipe data, input/output, dan operasi aritmatika.',
      en: 'Learn Python fundamentals: variables, data types, I/O, and arithmetic operations.',
    },
    estimatedHours: '8-10',
    projectTitle: { id: 'Kalkulator Sederhana', en: 'Simple Calculator' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-1/01-hello-world', title: { id: 'Hello, World!', en: 'Hello, World!' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-1/02-komentar-variabel', title: { id: 'Komentar & Variabel', en: 'Comments & Variables' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-1/03-tipe-data', title: { id: 'Tipe Data', en: 'Data Types' }, estimatedTime: 40, isProject: false },
      { slug: 'unit-1/04-input-output', title: { id: 'Input & Output', en: 'Input & Output' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-1/05-operasi-aritmatika', title: { id: 'Operasi Aritmatika', en: 'Arithmetic Operations' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-1/06-string-dasar', title: { id: 'String Dasar', en: 'Basic Strings' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-1/07-konversi-tipe', title: { id: 'Konversi Tipe Data', en: 'Type Conversion' }, estimatedTime: 20, isProject: false },
      { slug: 'unit-1/08-project-kalkulator', title: { id: 'Project: Kalkulator Sederhana', en: 'Project: Simple Calculator' }, estimatedTime: 60, isProject: true },
    ],
  },
  {
    id: 2,
    slug: 'unit-2',
    title: { id: 'Percabangan', en: 'Decision Making' },
    description: {
      id: 'Buat program yang bisa mengambil keputusan berdasarkan kondisi dengan if, elif, dan else.',
      en: 'Create programs that make decisions based on conditions using if, elif, and else.',
    },
    estimatedHours: '6-8',
    projectTitle: { id: 'Game Tebak Angka', en: 'Number Guessing Game' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-2/01-operator-perbandingan', title: { id: 'Operator Perbandingan', en: 'Comparison Operators' }, estimatedTime: 20, isProject: false },
      { slug: 'unit-2/02-if-elif-else', title: { id: 'If-Elif-Else', en: 'If-Elif-Else' }, estimatedTime: 40, isProject: false },
      { slug: 'unit-2/03-operator-logika', title: { id: 'Operator Logika', en: 'Logical Operators' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-2/04-match-case', title: { id: 'Match-Case', en: 'Match-Case' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-2/05-ekspresi-kondisional', title: { id: 'Ekspresi Kondisional', en: 'Conditional Expressions' }, estimatedTime: 15, isProject: false },
      { slug: 'unit-2/06-project-tebak-angka', title: { id: 'Project: Game Tebak Angka', en: 'Project: Number Guessing Game' }, estimatedTime: 60, isProject: true },
    ],
  },
  {
    id: 3,
    slug: 'unit-3',
    title: { id: 'Perulangan', en: 'Loops' },
    description: {
      id: 'Otomasi tugas berulang dengan while loop, for loop, dan range().',
      en: 'Automate repetitive tasks with while loops, for loops, and range().',
    },
    estimatedHours: '8-10',
    projectTitle: { id: 'Pola Bintang Generator', en: 'Star Pattern Generator' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-3/01-while-loop', title: { id: 'While Loop', en: 'While Loop' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-3/02-for-loop', title: { id: 'For Loop', en: 'For Loop' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-3/03-range', title: { id: 'Fungsi range()', en: 'The range() Function' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-3/04-break-continue', title: { id: 'Break & Continue', en: 'Break & Continue' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-3/05-nested-loops', title: { id: 'Nested Loops', en: 'Nested Loops' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-3/06-enumerate-zip', title: { id: 'enumerate() & zip()', en: 'enumerate() & zip()' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-3/07-project-pola-bintang', title: { id: 'Project: Pola Bintang', en: 'Project: Star Patterns' }, estimatedTime: 60, isProject: true },
    ],
  },
  {
    id: 4,
    slug: 'unit-4',
    title: { id: 'Fungsi', en: 'Functions' },
    description: {
      id: 'Pecah program menjadi fungsi-fungsi yang reusable dan terorganisir dengan def.',
      en: 'Break programs into reusable and organized functions using def.',
    },
    estimatedHours: '8-10',
    projectTitle: { id: 'Batu Gunting Kertas', en: 'Rock Paper Scissors' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-4/01-apa-itu-fungsi', title: { id: 'Apa itu Fungsi?', en: 'What is a Function?' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-4/02-membuat-fungsi', title: { id: 'Membuat Fungsi', en: 'Creating Functions' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-4/03-parameter-argumen', title: { id: 'Parameter & Argumen', en: 'Parameters & Arguments' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-4/04-return-values', title: { id: 'Return Values', en: 'Return Values' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-4/05-default-keyword-args', title: { id: 'Default & Keyword Args', en: 'Default & Keyword Args' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-4/06-args-kwargs', title: { id: '*args dan **kwargs', en: '*args and **kwargs' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-4/07-scope', title: { id: 'Scope & Variabel Global', en: 'Scope & Global Variables' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-4/08-project-batu-gunting-kertas', title: { id: 'Project: Batu Gunting Kertas', en: 'Project: Rock Paper Scissors' }, estimatedTime: 75, isProject: true },
    ],
  },
  {
    id: 5,
    slug: 'unit-5',
    title: { id: 'List & Koleksi', en: 'Lists & Collections' },
    description: {
      id: 'Simpan dan proses kumpulan data dengan list, tuple, set, dan dictionary.',
      en: 'Store and process collections of data with lists, tuples, sets, and dictionaries.',
    },
    estimatedHours: '8-10',
    projectTitle: { id: 'Buku Nilai Siswa', en: 'Student Grade Book' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-5/01-list-dasar', title: { id: 'List Dasar', en: 'Basic Lists' }, estimatedTime: 40, isProject: false },
      { slug: 'unit-5/02-list-methods', title: { id: 'Metode List', en: 'List Methods' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-5/03-list-comprehension', title: { id: 'List Comprehension', en: 'List Comprehension' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-5/04-tuple-set', title: { id: 'Tuple & Set', en: 'Tuples & Sets' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-5/05-dictionary', title: { id: 'Dictionary', en: 'Dictionaries' }, estimatedTime: 40, isProject: false },
      { slug: 'unit-5/06-string-lanjut', title: { id: 'String Lanjut', en: 'Advanced Strings' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-5/07-project-buku-nilai', title: { id: 'Project: Buku Nilai Siswa', en: 'Project: Grade Book' }, estimatedTime: 90, isProject: true },
    ],
  },
  {
    id: 6,
    slug: 'unit-6',
    title: { id: 'OOP & File', en: 'OOP & Files' },
    description: {
      id: 'Organisir data dengan class, tangani error dengan try/except, dan simpan ke file.',
      en: 'Organize data with classes, handle errors with try/except, and save to files.',
    },
    estimatedHours: '8-10',
    projectTitle: { id: 'Manajemen Kontak', en: 'Contact Manager' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-6/01-class-object', title: { id: 'Class & Object', en: 'Classes & Objects' }, estimatedTime: 40, isProject: false },
      { slug: 'unit-6/02-method-attribute', title: { id: 'Method & Atribut', en: 'Methods & Attributes' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-6/03-file-read', title: { id: 'Membaca File', en: 'Reading Files' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-6/04-file-write', title: { id: 'Menulis File', en: 'Writing Files' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-6/05-exception', title: { id: 'Exception Handling', en: 'Exception Handling' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-6/06-final-project', title: { id: 'Final Project: Manajemen Kontak', en: 'Final Project: Contact Manager' }, estimatedTime: 120, isProject: true },
    ],
  },
]

export function getCurriculum(_lang: Language): UnitMetadata[] {
  return CURRICULUM_ID
}

export function getUnit(slug: string): UnitMetadata | undefined {
  return CURRICULUM_ID.find(u => u.slug === slug)
}

export function getTotalLessons(): number {
  return CURRICULUM_ID.reduce((sum, unit) => sum + unit.lessons.length, 0)
}

export function getNextLesson(currentSlug: string): { slug: string; unitSlug: string } | null {
  const allLessons = CURRICULUM_ID.flatMap(unit =>
    unit.lessons.map(l => ({ ...l, unitSlug: unit.slug }))
  )
  const idx = allLessons.findIndex(l => l.slug === currentSlug)
  if (idx === -1 || idx >= allLessons.length - 1) return null
  const next = allLessons[idx + 1]
  if (!next) return null
  return { slug: next.slug, unitSlug: next.unitSlug }
}

export function getPrevLesson(currentSlug: string): { slug: string; unitSlug: string } | null {
  const allLessons = CURRICULUM_ID.flatMap(unit =>
    unit.lessons.map(l => ({ ...l, unitSlug: unit.slug }))
  )
  const idx = allLessons.findIndex(l => l.slug === currentSlug)
  if (idx <= 0) return null
  const prev = allLessons[idx - 1]
  if (!prev) return null
  return { slug: prev.slug, unitSlug: prev.unitSlug }
}

export function getLessonUrl(lang: Language, lessonSlug: string): string {
  const parts = lessonSlug.split('/')
  if (parts.length !== 2) return `/${lang}/curriculum`
  const [unitSlug, lessonId] = parts
  return `/${lang}/learn/${unitSlug}/${lessonId}`
}
