export interface GlossaryTerm {
  term: string
  termEn?: string       // English name if different
  category: 'dasar' | 'tipe-data' | 'kontrol' | 'fungsi' | 'array-struct' | 'io' | 'kompilasi'
  definition: {
    id: string
    en: string
  }
  example?: string      // Short code snippet
  seeAlso?: string[]    // Other term keys
}

export const GLOSSARY: GlossaryTerm[] = [
  // ── INTERPRETER & RUNTIME ────────────────────────────────────
  {
    term: 'Interpreter',
    category: 'kompilasi',
    definition: {
      id: 'Program yang membaca dan menjalankan kode Python baris per baris secara langsung, tanpa perlu dikompilasi dulu menjadi file executable.',
      en: 'A program that reads and executes Python code line by line directly, without needing to compile it into an executable file first.',
    },
    example: 'python3 hello.py',
  },
  {
    term: 'Runtime',
    category: 'kompilasi',
    definition: {
      id: 'Saat program sedang berjalan (dieksekusi). Error yang terjadi saat program berjalan disebut runtime error — misalnya `ZeroDivisionError` atau `NameError`.',
      en: 'When the program is actively running (executing). Errors that occur while the program runs are called runtime errors — e.g. `ZeroDivisionError` or `NameError`.',
    },
    example: 'print(10 / 0)  # ZeroDivisionError',
  },
  {
    term: 'Sintaks (Syntax)',
    category: 'kompilasi',
    definition: {
      id: 'Aturan penulisan kode yang harus diikuti. Seperti tata bahasa dalam bahasa manusia — salah satu karakter saja bisa menyebabkan `SyntaxError`.',
      en: 'The rules for writing code that must be followed. Like grammar in human languages — even one wrong character can cause a `SyntaxError`.',
    },
    example: 'if x > 0  # SyntaxError: missing colon',
  },
  {
    term: 'Bug',
    category: 'kompilasi',
    definition: {
      id: 'Kesalahan dalam program yang menyebabkan perilaku yang tidak diinginkan. Bisa berupa `SyntaxError`, `RuntimeError`, atau logic error (program berjalan tapi hasilnya salah).',
      en: 'An error in a program that causes unintended behavior. Can be a `SyntaxError`, `RuntimeError`, or logic error (program runs but produces wrong results).',
    },
  },
  {
    term: 'Exception',
    category: 'kompilasi',
    definition: {
      id: 'Error yang terjadi saat runtime dan menghentikan program jika tidak ditangani. Ditangkap menggunakan blok `try/except`. Contoh: `ValueError`, `TypeError`, `IndexError`.',
      en: 'An error that occurs at runtime and stops the program if not handled. Caught using a `try/except` block. Examples: `ValueError`, `TypeError`, `IndexError`.',
    },
    example: 'try:\n    x = int("abc")\nexcept ValueError:\n    print("Bukan angka!")',
    seeAlso: ['Runtime'],
  },

  // ── DASAR ────────────────────────────────────────────────────
  {
    term: 'import',
    category: 'dasar',
    definition: {
      id: 'Kata kunci untuk mengimpor modul atau library ke dalam program. Memberi akses ke fungsi dan kelas yang sudah ada di modul tersebut.',
      en: 'A keyword to import a module or library into your program. Gives access to functions and classes already in that module.',
    },
    example: 'import math\nfrom random import randint',
  },
  {
    term: 'Modul',
    termEn: 'Module',
    category: 'dasar',
    definition: {
      id: 'File Python berisi kode (fungsi, kelas, variabel) yang bisa di-import ke program lain. Contoh modul bawaan: `math`, `random`, `os`, `json`.',
      en: 'A Python file containing code (functions, classes, variables) that can be imported into another program. Built-in examples: `math`, `random`, `os`, `json`.',
    },
    example: 'import math\nprint(math.sqrt(16))  # 4.0',
    seeAlso: ['import'],
  },
  {
    term: 'Variabel',
    termEn: 'Variable',
    category: 'dasar',
    definition: {
      id: 'Tempat penyimpanan data yang diberi nama. Python tidak perlu deklarasi tipe — tipe ditentukan otomatis dari nilai yang diberikan.',
      en: 'A named storage location for data. Python requires no type declaration — the type is determined automatically from the assigned value.',
    },
    example: 'umur = 15\nnama = "Budi"\nlulus = True',
    seeAlso: ['Konstanta'],
  },
  {
    term: 'Konstanta',
    termEn: 'Constant',
    category: 'dasar',
    definition: {
      id: 'Variabel yang nilainya tidak dimaksudkan untuk diubah. Python tidak punya keyword `const` — konvensinya menggunakan nama HURUF_KAPITAL.',
      en: 'A variable whose value is not meant to be changed. Python has no `const` keyword — the convention is to use ALL_CAPS names.',
    },
    example: 'PI = 3.14159\nMAX_NILAI = 100',
    seeAlso: ['Variabel'],
  },
  {
    term: 'Operator',
    category: 'dasar',
    definition: {
      id: 'Simbol yang melakukan operasi pada nilai. Contoh: `+` (tambah), `-` (kurang), `*` (kali), `/` (bagi), `//` (bagi bulat), `%` (modulo), `**` (pangkat), `==` (sama dengan).',
      en: 'A symbol that performs an operation on values. Examples: `+` (add), `-` (subtract), `*` (multiply), `/` (divide), `//` (floor divide), `%` (modulo), `**` (power), `==` (equal).',
    },
    example: 'print(10 // 3)   # 3\nprint(2 ** 8)    # 256',
  },
  {
    term: 'Ekspresi',
    termEn: 'Expression',
    category: 'dasar',
    definition: {
      id: 'Kombinasi nilai, variabel, dan operator yang menghasilkan suatu nilai. Contoh: `5 + 3`, `x * 2`, `a > b`, `len("halo")`.',
      en: 'A combination of values, variables, and operators that produces a value. Examples: `5 + 3`, `x * 2`, `a > b`, `len("halo")`.',
    },
  },
  {
    term: 'Statement',
    category: 'dasar',
    definition: {
      id: 'Satu perintah lengkap dalam Python. Python menggunakan indentasi dan baris baru sebagai pemisah, bukan titik koma seperti C++ atau Java.',
      en: 'A single complete instruction in Python. Python uses indentation and newlines as separators, not semicolons like C++ or Java.',
    },
    example: 'x = 5\nprint(x)',
  },
  {
    term: 'Komentar',
    termEn: 'Comment',
    category: 'dasar',
    definition: {
      id: 'Teks dalam kode yang diabaikan oleh interpreter. Gunakan `#` untuk komentar satu baris, atau tanda kutip tiga (`"""`) untuk docstring multi-baris.',
      en: 'Text in code ignored by the interpreter. Use `#` for single-line comments, or triple quotes (`"""`) for multi-line docstrings.',
    },
    example: '# Ini komentar satu baris\n"""Ini\ndocstring\nmulti-baris"""',
  },
  {
    term: 'Indentasi',
    termEn: 'Indentation',
    category: 'dasar',
    definition: {
      id: 'Spasi di awal baris yang menentukan blok kode di Python. Python menggunakan indentasi (biasanya 4 spasi) sebagai pengganti kurung kurawal `{}` dalam bahasa lain.',
      en: 'Spaces at the start of a line that define a code block in Python. Python uses indentation (usually 4 spaces) instead of curly braces `{}` like other languages.',
    },
    example: 'if x > 0:\n    print("positif")  # harus diindentasi',
  },

  // ── TIPE DATA ────────────────────────────────────────────────
  {
    term: 'int',
    category: 'tipe-data',
    definition: {
      id: 'Tipe data untuk bilangan bulat (tanpa desimal). Di Python, `int` tidak terbatas ukurannya — bisa menyimpan bilangan sebesar apapun. Tidak perlu deklarasi tipe.',
      en: 'Data type for whole numbers (no decimals). In Python, `int` has no size limit — it can store arbitrarily large numbers. No type declaration needed.',
    },
    example: 'nilai = 90\ntahun = 2024\nbesar = 10 ** 100  # googol',
  },
  {
    term: 'float',
    category: 'tipe-data',
    definition: {
      id: 'Tipe data untuk bilangan desimal. Di Python, `float` menggunakan presisi 64-bit (setara `double` di C++). Tidak perlu deklarasi tipe.',
      en: 'Data type for decimal numbers. In Python, `float` uses 64-bit precision (equivalent to `double` in C++). No type declaration needed.',
    },
    example: 'suhu = 36.5\npi = 3.14159',
    seeAlso: ['int'],
  },
  {
    term: 'str',
    termEn: 'String',
    category: 'tipe-data',
    definition: {
      id: 'Tipe data untuk teks (rangkaian karakter). Bisa ditulis dengan tanda kutip tunggal atau ganda. Built-in di Python — tidak perlu import.',
      en: 'Data type for text (a sequence of characters). Can be written with single or double quotes. Built-in in Python — no import needed.',
    },
    example: 'nama = "Budi"\nsalam = \'Halo\'\npanjang = len(nama)  # 4',
    seeAlso: ['f-string'],
  },
  {
    term: 'bool',
    category: 'tipe-data',
    definition: {
      id: 'Tipe data Boolean dengan dua nilai: `True` atau `False` (huruf kapital pertama). Hasil dari operasi perbandingan seperti `x > 0` atau `x == y`.',
      en: 'Boolean data type with two values: `True` or `False` (capitalized). Result of comparison operations like `x > 0` or `x == y`.',
    },
    example: 'lulus = True\ncek = 90 >= 70  # True',
  },
  {
    term: 'None',
    category: 'tipe-data',
    definition: {
      id: 'Nilai khusus yang berarti "tidak ada nilai" atau "kosong". Setara dengan `null` di bahasa lain. Dikembalikan oleh fungsi yang tidak punya `return`.',
      en: 'A special value meaning "no value" or "empty". Equivalent to `null` in other languages. Returned by functions with no `return` statement.',
    },
    example: 'hasil = None\ndef sapa():\n    print("Halo")  # returns None',
  },
  {
    term: 'Type Hint',
    category: 'tipe-data',
    definition: {
      id: 'Anotasi opsional untuk menunjukkan tipe variabel atau parameter fungsi. Tidak wajib dan tidak mempengaruhi eksekusi — hanya untuk keterbacaan dan alat seperti mypy.',
      en: 'Optional annotation to indicate the type of a variable or function parameter. Not required and does not affect execution — only for readability and tools like mypy.',
    },
    example: 'def tambah(a: int, b: int) -> int:\n    return a + b',
    seeAlso: ['int', 'float', 'str'],
  },

  // ── KONTROL ALUR ─────────────────────────────────────────────
  {
    term: 'if-else',
    category: 'kontrol',
    definition: {
      id: 'Struktur percabangan untuk mengeksekusi blok kode berbeda berdasarkan kondisi. Gunakan `elif` untuk kondisi tambahan.',
      en: 'A branching structure that executes different code blocks based on a condition. Use `elif` for additional conditions.',
    },
    example: 'if nilai >= 70:\n    print("Lulus")\nelif nilai >= 50:\n    print("Remidi")\nelse:\n    print("Tidak lulus")',
  },
  {
    term: 'match/case',
    termEn: 'Match Statement',
    category: 'kontrol',
    definition: {
      id: 'Percabangan berdasarkan pola (Python 3.10+). Alternatif elegan dari banyak `if-elif` untuk nilai diskrit. Lebih fleksibel dari `switch` di bahasa lain.',
      en: 'Pattern-based branching (Python 3.10+). An elegant alternative to many `if-elif` chains for discrete values. More flexible than `switch` in other languages.',
    },
    example: 'match hari:\n    case "Senin": print("Awal minggu")\n    case "Jumat": print("Akhir minggu")\n    case _: print("Hari biasa")',
    seeAlso: ['if-else'],
  },
  {
    term: 'while',
    category: 'kontrol',
    definition: {
      id: 'Perulangan yang terus berjalan selama kondisinya `True`. Kondisi dicek di awal — jika langsung `False`, loop tidak dieksekusi sama sekali.',
      en: 'A loop that keeps running as long as its condition is `True`. The condition is checked first — if immediately `False`, the loop never executes.',
    },
    example: 'x = 1\nwhile x <= 5:\n    print(x)\n    x += 1',
    seeAlso: ['for', 'break'],
  },
  {
    term: 'for',
    category: 'kontrol',
    definition: {
      id: 'Perulangan untuk iterasi atas sebuah urutan (list, string, range, dll). Berbeda dari C++ — Python `for` adalah for-each, bukan for dengan inisialisasi/kondisi/update.',
      en: 'A loop for iterating over a sequence (list, string, range, etc.). Unlike C++ — Python `for` is a for-each, not a for loop with init/condition/update.',
    },
    example: 'for i in range(5):\n    print(i)  # 0 1 2 3 4\n\nfor nama in ["Andi", "Budi"]:\n    print(nama)',
    seeAlso: ['while', 'range()'],
  },
  {
    term: 'range()',
    category: 'kontrol',
    definition: {
      id: 'Fungsi bawaan yang menghasilkan urutan bilangan. `range(n)` menghasilkan 0 sampai n-1. `range(a, b)` dari a sampai b-1. `range(a, b, step)` dengan langkah tertentu.',
      en: 'A built-in function that generates a sequence of numbers. `range(n)` generates 0 to n-1. `range(a, b)` from a to b-1. `range(a, b, step)` with a custom step.',
    },
    example: 'range(5)        # 0,1,2,3,4\nrange(1, 6)     # 1,2,3,4,5\nrange(0, 10, 2) # 0,2,4,6,8',
    seeAlso: ['for'],
  },
  {
    term: 'break',
    category: 'kontrol',
    definition: {
      id: 'Perintah untuk keluar dari loop secara paksa, langsung menuju kode setelah blok loop.',
      en: 'A command to forcefully exit a loop, jumping directly to the code after the loop block.',
    },
    example: 'for i in range(10):\n    if i == 5:\n        break  # berhenti di 5',
    seeAlso: ['continue'],
  },
  {
    term: 'continue',
    category: 'kontrol',
    definition: {
      id: 'Perintah untuk melewati sisa iterasi saat ini dan langsung lanjut ke iterasi berikutnya dalam loop.',
      en: 'A command to skip the rest of the current iteration and immediately move to the next iteration in a loop.',
    },
    example: 'for i in range(5):\n    if i == 2:\n        continue  # lewati 2\n    print(i)  # 0 1 3 4',
    seeAlso: ['break'],
  },

  // ── FUNGSI ───────────────────────────────────────────────────
  {
    term: 'Fungsi',
    termEn: 'Function',
    category: 'fungsi',
    definition: {
      id: 'Blok kode yang diberi nama dengan kata kunci `def` dan bisa dipanggil berkali-kali. Python tidak butuh deklarasi tipe return.',
      en: 'A named block of code defined with the `def` keyword that can be called multiple times. Python requires no return type declaration.',
    },
    example: 'def tambah(a, b):\n    return a + b\n\nhasil = tambah(3, 5)  # 8',
    seeAlso: ['Parameter', 'Return Value'],
  },
  {
    term: 'Parameter',
    category: 'fungsi',
    definition: {
      id: 'Variabel yang dideklarasikan di dalam tanda kurung fungsi. Python tidak perlu tipe data pada parameter — bisa menerima nilai apa saja.',
      en: 'A variable declared inside the function\'s parentheses. Python requires no type on parameters — it can receive any value.',
    },
    example: 'def sapa(nama, umur=17):  # umur punya default value\n    print(f"Halo {nama}, umur {umur}")',
    seeAlso: ['Argumen', 'Fungsi'],
  },
  {
    term: 'Argumen',
    termEn: 'Argument',
    category: 'fungsi',
    definition: {
      id: 'Nilai nyata yang dikirim ke fungsi saat pemanggilan. Argumen mengisi parameter yang didefinisikan di fungsi.',
      en: 'The actual value sent to a function when it is called. Arguments fill in the parameters defined in the function.',
    },
    example: 'tambah(3, 5)     # 3 dan 5 adalah argumen\ntambah(a=3, b=5) # keyword argument',
    seeAlso: ['Parameter'],
  },
  {
    term: 'Return Value',
    category: 'fungsi',
    definition: {
      id: 'Nilai yang dikembalikan oleh fungsi ke pemanggil menggunakan kata kunci `return`. Fungsi tanpa `return` mengembalikan `None` secara implisit.',
      en: 'The value returned by a function to its caller using the `return` keyword. Functions without `return` implicitly return `None`.',
    },
    example: 'def kuadrat(x):\n    return x ** 2\n\nprint(kuadrat(4))  # 16',
    seeAlso: ['None', 'Fungsi'],
  },
  {
    term: 'Scope',
    category: 'fungsi',
    definition: {
      id: 'Area dalam kode dimana sebuah variabel bisa diakses. Variabel di dalam fungsi hanya bisa diakses di dalam fungsi itu (local scope). Python menggunakan indentasi, bukan `{}`.',
      en: 'The area in code where a variable can be accessed. Variables inside a function can only be accessed within that function (local scope). Python uses indentation, not `{}`.',
    },
    example: 'x = 10  # global scope\ndef fungsi():\n    x = 5   # local scope (berbeda!)\n    print(x)  # 5\nprint(x)  # 10',
    seeAlso: ['Variabel'],
  },
  {
    term: 'Lambda',
    category: 'fungsi',
    definition: {
      id: 'Fungsi anonim (tanpa nama) yang ditulis dalam satu baris. Berguna untuk operasi sederhana yang tidak perlu `def` tersendiri.',
      en: 'An anonymous (nameless) function written in one line. Useful for simple operations that do not need a separate `def`.',
    },
    example: 'kuadrat = lambda x: x ** 2\nprint(kuadrat(5))  # 25',
    seeAlso: ['Fungsi'],
  },

  // ── KOLEKSI DATA ─────────────────────────────────────────────
  {
    term: 'List',
    category: 'array-struct',
    definition: {
      id: 'Koleksi nilai yang terurut dan bisa diubah (mutable). Dibuat dengan tanda kurung siku `[]`. Bisa menyimpan tipe data berbeda dalam satu list.',
      en: 'An ordered, changeable (mutable) collection of values. Created with square brackets `[]`. Can store different data types in one list.',
    },
    example: 'nilai = [85, 92, 78, 95]\nnilai.append(88)\nprint(nilai[0])  # 85',
    seeAlso: ['Indeks', 'Tuple'],
  },
  {
    term: 'Indeks',
    termEn: 'Index',
    category: 'array-struct',
    definition: {
      id: 'Nomor posisi elemen dalam list atau string. Selalu dimulai dari 0. Indeks negatif mengakses dari belakang: `-1` adalah elemen terakhir.',
      en: 'The position number of an element in a list or string. Always starts from 0. Negative indices access from the end: `-1` is the last element.',
    },
    example: 'nilai = [85, 92, 78]\nprint(nilai[0])   # 85 (pertama)\nprint(nilai[-1])  # 78 (terakhir)',
    seeAlso: ['List'],
  },
  {
    term: 'Tuple',
    category: 'array-struct',
    definition: {
      id: 'Koleksi nilai yang terurut dan tidak bisa diubah (immutable). Dibuat dengan tanda kurung `()`. Lebih cepat dari list dan cocok untuk data yang tidak berubah.',
      en: 'An ordered, unchangeable (immutable) collection of values. Created with parentheses `()`. Faster than list and good for data that should not change.',
    },
    example: 'koordinat = (3, 4)\nwarna = ("merah", "hijau", "biru")',
    seeAlso: ['List'],
  },
  {
    term: 'Dictionary',
    termEn: 'Dict',
    category: 'array-struct',
    definition: {
      id: 'Koleksi pasangan kunci-nilai (key-value). Dibuat dengan kurung kurawal `{}`. Akses nilai dengan kunci, bukan indeks angka.',
      en: 'A collection of key-value pairs. Created with curly braces `{}`. Access values by key, not numeric index.',
    },
    example: 'siswa = {"nama": "Budi", "umur": 17}\nprint(siswa["nama"])  # "Budi"\nsisswa["nilai"] = 90',
    seeAlso: ['List'],
  },
  {
    term: 'Class',
    termEn: 'Class (OOP)',
    category: 'array-struct',
    definition: {
      id: 'Template untuk membuat objek. Mendefinisikan atribut (data) dan method (fungsi) yang dimiliki objek. Pengganti `struct` dari bahasa seperti C.',
      en: 'A template for creating objects. Defines the attributes (data) and methods (functions) an object has. Replaces `struct` from languages like C.',
    },
    example: 'class Siswa:\n    def __init__(self, nama):\n        self.nama = nama\n\ns = Siswa("Budi")',
    seeAlso: ['Return Value'],
  },

  // ── INPUT/OUTPUT ─────────────────────────────────────────────
  {
    term: 'print()',
    category: 'io',
    definition: {
      id: 'Fungsi bawaan Python untuk menampilkan teks atau nilai ke layar (stdout). Menerima beberapa argumen dan memisahkannya dengan spasi secara default.',
      en: 'Python built-in function to display text or values on screen (stdout). Accepts multiple arguments and separates them with spaces by default.',
    },
    example: 'print("Halo, Dunia!")\nprint("a =", 42, "b =", 3.14)',
    seeAlso: ['input()', 'f-string'],
  },
  {
    term: 'input()',
    category: 'io',
    definition: {
      id: 'Fungsi bawaan Python untuk membaca input dari pengguna (keyboard). Selalu mengembalikan string — konversi ke int/float jika diperlukan.',
      en: 'Python built-in function to read user input (keyboard). Always returns a string — convert to int/float as needed.',
    },
    example: 'nama = input("Siapa namamu? ")\numur = int(input("Umur: "))',
    seeAlso: ['print()', 'int()', 'float()'],
  },
  {
    term: 'f-string',
    category: 'io',
    definition: {
      id: 'Format string literal Python (prefix `f`) yang memungkinkan menyisipkan variabel dan ekspresi langsung ke dalam string menggunakan kurung kurawal `{}`.',
      en: 'Python formatted string literal (prefix `f`) that allows embedding variables and expressions directly into strings using curly braces `{}`.',
    },
    example: 'nama = "Budi"\nprint(f"Halo, {nama}! Umurmu {18} tahun.")',
    seeAlso: ['print()', 'str'],
  },
  {
    term: 'File I/O',
    category: 'io',
    definition: {
      id: 'Kemampuan membaca dan menulis data ke/dari file. Menggunakan `open()` dengan mode `"r"` (baca), `"w"` (tulis), atau `"a"` (tambah). Gunakan `with` agar file otomatis ditutup.',
      en: 'The ability to read and write data to/from files. Uses `open()` with mode `"r"` (read), `"w"` (write), or `"a"` (append). Use `with` so the file closes automatically.',
    },
    example: 'with open("data.txt", "r") as f:\n    konten = f.read()',
    seeAlso: ['print()', 'input()'],
  },
]

export type GlossaryCategory = GlossaryTerm['category']

export const CATEGORY_LABELS: Record<GlossaryCategory, { id: string; en: string }> = {
  'dasar': { id: 'Dasar', en: 'Basics' },
  'tipe-data': { id: 'Tipe Data', en: 'Data Types' },
  'kontrol': { id: 'Kontrol Alur', en: 'Flow Control' },
  'fungsi': { id: 'Fungsi', en: 'Functions' },
  'array-struct': { id: 'Koleksi Data', en: 'Collections' },
  'io': { id: 'Input/Output', en: 'Input/Output' },
  'kompilasi': { id: 'Interpreter & Runtime', en: 'Interpreter & Runtime' },
}

export const CATEGORY_ORDER: GlossaryCategory[] = [
  'kompilasi', 'dasar', 'tipe-data', 'kontrol', 'fungsi', 'array-struct', 'io',
]
