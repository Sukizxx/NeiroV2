## **NEIROAI MASTER SPECIFICATION V1 FINAL** 

## **PART 1 - CORE SYSTEM, UI, UX, CHAT SYSTEM** 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **PROJECT NAME** 

NeiroAI 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **PROJECT PURPOSE** 

NeiroAI adalah platform AI modern berbasis web yang dirancang untuk memberikan pengalaman AI premium dengan fokus pada: 

- Coding Assistant 

- Reasoning Assistant 

- AI Consensus 

- Image Understanding 

- File Analysis 

- Productivity 

- Research 

- AI Discussion 

NeiroAI bukan chatbot biasa. 

Tujuannya adalah menjadi workspace AI modern yang terasa profesional, cepat, bersih, dan nyaman digunakan pada semua perangkat. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **DESIGN PHILOSOPHY** 

NeiroAI harus terasa: 

- Modern 

- Clean 

- Professional 

- Premium 

- Fast 

- Smooth 

- Responsive 

1 

NeiroAI tidak boleh terasa seperti: 

- Clone ChatGPT murahan 

- Dashboard admin template 

- Website bootstrap jadul 

- Website penuh warna mencolok 

Fokus utama adalah desain elegan dan profesional. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **COLOR SYSTEM** 

Primary: 

## **000000** 

Secondary: 

## **1A1A1A** 

Tertiary: 

## **2A2A2A** 

Text Primary: 

## **FFFFFF** 

Text Secondary: 

## **BFBFBF** 

Border: 

## **333333** 

Hover: 

## **3A3A3A** 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

2 

## **TYPOGRAPHY** 

Font harus modern. 

Prioritas: 

- Inter • Geist • SF Pro • Segoe UI 

Font harus terlihat premium. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **RESPONSIVE SYSTEM** 

Website wajib bekerja sempurna di: 

- Android • iPhone • Tablet • Laptop • Desktop • Ultrawide 

Tidak boleh ada: 

- Overflow • Layout rusak • Text keluar layar • Tombol keluar layar • Horizontal scroll global 

Semua ukuran wajib fleksibel. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **GLOBAL SCROLL RULES** 

DILARANG: 

- Horizontal scroll halaman 

DIPERBOLEHKAN: 

- Horizontal scroll khusus embed kode 

Selain embed kode: 

3 

Tidak boleh ada elemen yang menyebabkan geser kiri kanan. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **ANIMATION SYSTEM** 

Semua animasi wajib smooth. 

Target: 

60 FPS 

Gunakan: 

- transform • opacity 

Hindari: 

- animation berat • layout thrashing 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **OPENING EXPERIENCE** 

Saat website pertama kali dibuka: 

Tampilkan animated orb. 

Orb harus: 

- Futuristik • Monochrome • Halus • Elegan 

Orb bergerak perlahan. 

Setelah loading selesai: 

Masuk ke halaman chat. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **SIDEBAR** 

Menggunakan: 

4 

Hamburger Menu 

Bukan tombol new chat besar. 

Hamburger berada di kiri atas. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **SIDEBAR CONTENT** 

Sidebar berisi: 

- New Chat 

- History • Models • Settings 

Animasi: 

Slide In 

Slide Out 

Smooth. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **CHAT HISTORY** 

Menggunakan: 

localStorage 

Setiap chat memiliki: 

- ID • Timestamp 

- Auto Generated Title 

- Message List 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **CHAT HISTORY FEATURES** 

User dapat: 

- Rename Chat 

5 

- Delete Chat 

- Create Chat 

- Reopen Chat 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **NEW CHAT** 

Ketika membuat chat baru: 

- Context lama dibersihkan 

- Chat baru dibuat 

- History tetap tersimpan 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **MESSAGE SYSTEM** 

User Message: 

Bubble modern. 

AI Message: 

Bubble modern. 

Tidak boleh menggunakan style jadul. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **USER MESSAGE ACTIONS** 

Ketika ditekan: 

Muncul menu: 

- Edit 

- Copy 

- Select Text 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **AI MESSAGE ACTIONS** 

Ketika ditekan: 

6 

Muncul menu: 

- Copy 

- Select Text 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **STREAMING RESPONSE** 

Jawaban AI harus muncul: 

- Smooth 

- Bertahap 

- Stabil 

Tidak boleh: 

- Kedip 

- Hilang muncul 

- Layout lompat 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **SCREEN SHAKE FIX** 

Saat AI mengetik: 

Dilarang: 

- Re-render berlebihan 

- Scroll bug 

- Layar bergetar 

Jawaban harus stabil. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **AUTO SCROLL** 

Ketika AI menjawab: 

Auto scroll mengikuti jawaban. 

Namun jika user sedang membaca pesan lama: 

Auto scroll harus berhenti. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

7 

## **STOP BUTTON** 

Harus selalu berfungsi. 

Fungsi: 

- Membatalkan request 

- Menghentikan streaming 

- Membersihkan proses aktif 

Tidak boleh ada bug. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **TEXT OVERFLOW FIX** 

Semua teks wajib: 

- Wrap otomatis 

- Tidak keluar layar 

- Tidak menyebabkan horizontal scroll 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **MOBILE FIRST** 

Prioritas utama: 

Mobile 

Kemudian: 

Tablet 

Kemudian: Desktop 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **TOUCH OPTIMIZATION** 

Semua tombol wajib nyaman disentuh. 

Target: 

44px+ 

8 

Minimal. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **COMMAND PALETTE** 

Ketika user mengetik: 

/ 

Muncul popup command. 

Contoh: 

/img /editimg /download /upload /analyze 

Animasi harus smooth. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **SETTINGS PAGE** 

Berisi: 

- Theme 

- Model Default 

- Animation Preferences 

- Clear History 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **PERFORMANCE TARGET** 

Fokus utama: 

1. Stability 

2. Smoothness 

3. Performance 

4. User Experience 

5. Visual Polish 

Fitur baru tidak boleh mengorbankan stabilitas. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

9 

## **FINAL UI GOAL** 

User harus merasa: 

- Cepat • Ringan 

- Premium 

- Modern 

Tidak boleh terasa seperti website eksperimen atau proyek setengah jadi. 

10

---

# **NEIROAI MASTER SPECIFICATION V1 FINAL** 

# **PART 2 - AI MODELS, REASONING SYSTEM, NEIROPLUS, CONSENSUS ENGINE** 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **AI SYSTEM OVERVIEW** 

NeiroAI menggunakan pendekatan multi-model. 

Tujuannya bukan sekadar mengirim prompt ke satu AI lalu mengembalikan jawaban. 

Tujuan utama adalah menghasilkan jawaban yang lebih matang melalui proses evaluasi dan penyaringan internal. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **ACTIVE MODELS** 

Hanya terdapat 3 model utama. 

Model lain dihapus sepenuhnya. 

Model aktif: 

1. GPT-OSS 120B 

2. Nemotron-3 Ultra 

3. Nemotron-3 Nano Omni 

Tidak ada: 

- Gemini 

- Claude 

- Qwen 

- DeepSeek 

- Model tambahan lain 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **GPT-OSS 120B** 

Role: 

1 

Primary Coding Specialist 

Fokus: 

- Programming 

- Refactoring 

- Debugging 

- Architecture 

- Documentation 

- Optimization 

Prioritas: 

Semua tugas coding diarahkan terlebih dahulu ke GPT-OSS. 

## ━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **NEMOTRON-3 ULTRA** 

Role: 

Chief Reasoning Engine 

Fokus: 

- Advanced Reasoning 

- Consensus 

- Critical Analysis 

- Validation 

- Logic 

Nemotron Ultra adalah model paling penting dalam sistem. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **NEMOTRON-3 NANO OMNI** 

Role: 

Vision & Multimodal Specialist 

Fokus: 

- OCR 

- Vision 

- Image Understanding 

- Screenshot Analysis 

- File Interpretation 

2 

Digunakan ketika user mengirim: 

- Image 

- Screenshot 

- PDF 

- Visual Content 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **MODEL PICKER** 

Dropdown berisi: 

- GPT-OSS 120B 

- Nemotron Ultra 

- Nemotron Nano Omni 

- NeiroPlus 

Tidak ada model lain. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **DEFAULT MODEL** 

Default: 

NeiroPlus 

Karena memberikan hasil terbaik. 

## ━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **NEIROPLUS** 

NeiroPlus bukan model asli. 

NeiroPlus adalah sistem orkestrasi internal. 

NeiroPlus menggabungkan kemampuan seluruh model aktif. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **NEIROPLUS GOAL** 

Tujuan: 

Menghasilkan jawaban yang lebih baik dibanding model tunggal. 

3 

Fokus: 

- Akurasi 

- Konsistensi 

- Kualitas reasoning 

- Kualitas coding 

- Pengurangan halusinasi 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **NEIROPLUS PIPELINE** 

Total: 

3 Tahap 

1. Draft 

2. Cross Evaluation 

3. Judge 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **STAGE 1** 

DRAFT GENERATION 

User Prompt 

↓ 

GPT-OSS membuat jawaban 

↓ 

Nemotron Ultra membuat jawaban 

↓ 

Nano Omni membuat jawaban jika relevan 

Setiap model bekerja sendiri. 

Tidak boleh melihat jawaban model lain. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

4 

## **STAGE 1 OBJECTIVE** 

Menghasilkan perspektif berbeda. 

Mencegah: 

- Bias model tunggal 

- Blind spot 

- Missing information 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **STAGE 2** 

CROSS EVALUATION 

Semua jawaban saling ditukar. 

Setiap model diminta: 

- Menemukan kesalahan 

- Menemukan halusinasi 

- Menemukan logika lemah 

- Menemukan informasi kurang 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **STAGE 2 OUTPUT** 

Setiap model menghasilkan: 

Criticism Report 

Isi: 

- Strengths • Weaknesses 

- Missing Information 

- Suggested Improvements 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **STAGE 2 REVISION** 

Setelah kritik selesai: 

Model memperbaiki jawaban mereka. 

5 

Membuat: 

Revised Draft 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **STAGE 3** 

JUDGE SYSTEM 

Nemotron Ultra bertindak sebagai: 

Chief Judge 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **JUDGE RESPONSIBILITIES** 

Nemotron Ultra wajib: 

- Membaca semua draft 

- Membaca semua kritik 

- Membaca semua revisi 

Kemudian: 

- Menghapus bagian buruk 

- Menghapus halusinasi 

- Menghapus informasi lemah 

- Menghapus duplikasi 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FINAL SYNTHESIS** 

Nemotron Ultra menghasilkan: 

Final Response 

Jawaban final harus: 

- Ringkas jika pertanyaan sederhana 

- Detail jika pertanyaan kompleks 

- Logis 

- Konsisten 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

6 

## **INTERNAL DISCUSSION** 

Secara default: 

Tidak ditampilkan ke user. 

User hanya melihat: 

Final Answer 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **AI DISCUSSION MODE** 

Mode khusus. 

Berbeda dengan NeiroPlus. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **AI DISCUSSION MODE PURPOSE** 

Digunakan jika user ingin melihat: 

- Debat AI 

- Pendapat AI 

- Analisis antar model 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **DISCUSSION MODE FLOW** 

GPT-OSS menjawab 

↓ 

Nemotron Ultra mengkritik 

↓ 

Nano Omni memberi sudut pandang 

↓ 

Diskusi berlanjut 

7 

↓ 

Kesimpulan akhir 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **DISCUSSION MODE UI** 

Setiap model memiliki: 

- Avatar • Label 

- Bubble terpisah 

User dapat melihat seluruh proses. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **THINKING MODE** 

Mode opsional. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **THINKING MODE PURPOSE** 

Digunakan untuk: 

- Coding kompleks 

- Analisis 

- Planning 

- Research 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **THINKING UI** 

Menampilkan: 

Thinking... 

Reasoning... Analyzing... 

Planning... 

8 

Dengan animasi smooth. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **RESPONSE TIME TARGET** 

Normal: 

5-20 detik 

Thinking: 

10-30 detik 

NeiroPlus: 

20-60 detik 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FAILSAFE SYSTEM** 

Jika model: 

- Timeout 

- Error 

- Crash 

- Rate Limit 

- No Response 

Maka: 

Auto Skip 

Lanjut ke model berikutnya. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FAILSAFE PRIORITY** 

Sistem tidak boleh gagal hanya karena satu model gagal. 

Minimal satu model harus tetap menghasilkan jawaban. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

9 

## **PROMPT ENHANCEMENT** 

Sebelum prompt dikirim: 

System melakukan: 

- Context Cleanup 

- Intent Detection 

- Prompt Optimization 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **INTENT DETECTION** 

Deteksi: 

- Coding 

- Image 

- Download 

- Analysis 

- Research 

- General Chat 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **MEMORY HANDLING** 

Per Chat: 

Context tersimpan. 

Chat baru: 

Context baru. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **LONG CONTEXT** 

Sistem harus mampu: 

- Membaca percakapan panjang 

- Menjaga konteks 

- Mengurangi kehilangan informasi 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

10 

## **ANTI HALLUCINATION** 

Prioritas tinggi. 

Gunakan: 

- Cross Evaluation 

- Judge System 

- Consensus Validation 

Untuk mengurangi jawaban salah. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **RESPONSE QUALITY TARGET** 

NeiroPlus harus menghasilkan jawaban yang: 

Lebih baik daripada model tunggal. 

Lebih stabil. 

Lebih logis. 

Lebih konsisten. 

Lebih akurat. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FINAL OBJECTIVE** 

NeiroPlus harus menjadi mode terbaik dalam seluruh platform NeiroAI. 

Jika user bingung memilih model: 

Rekomendasikan NeiroPlus secara otomatis. 

11

---

## **NEIROAI MASTER SPECIFICATION V1 FINAL** 

## **PART 3 - CODING SYSTEM, EMBED ENGINE, HTML PREVIEW, DEVELOPER EXPERIENCE** 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **PRIMARY OBJECTIVE** 

NeiroAI harus menjadi AI yang sangat kuat untuk: 

- Coding 

- Debugging 

- Refactoring 

- Architecture Design 

- Documentation 

- Learning Programming 

Coding adalah fitur utama platform. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **CODING EXPERIENCE GOAL** 

Ketika user meminta kode: 

User harus merasa seperti menggunakan: 

- Modern AI Coding Assistant 

- Professional IDE Companion 

Bukan chatbot biasa yang hanya spam code block. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **GLOBAL CODING RULES** 

DILARANG: 

Mengirim kode panjang langsung ke dalam bubble chat biasa. 

WAJIB: 

Menggunakan Code Embed System. 

1 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **CODE EMBED SYSTEM** 

Semua kode harus muncul di dalam embed khusus. 

Contoh bahasa: 

- HTML • CSS • JavaScript • TypeScript • Python • PHP • Go • Rust • Java 

- C 

- C++ 

- C# • Bash • Shell 

- SQL • JSON • YAML 

Semua wajib menggunakan embed. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **EMBED STRUCTURE** 

Header: 

- Nama Bahasa 

- Copy Button 

Body: 

- Source Code 

Footer: 

- Optional Metadata 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

2 

## **EMBED APPEARANCE** 

Style: 

- Dark Theme 

- Rounded Corner 

- Modern 

- Smooth 

Tidak boleh terlihat seperti markdown standar. 

Harus terlihat seperti editor modern. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **COPY BUTTON** 

Semua embed wajib memiliki: 

Copy Button 

Ketika ditekan: 

- Menyalin seluruh kode 

- Menampilkan animasi sukses 

- Menampilkan feedback visual 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **SCROLL RULES** 

Hanya area embed yang boleh memiliki: 

Horizontal Scroll 

Halaman utama: 

Tidak boleh memiliki horizontal scroll. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **LONG CODE HANDLING** 

Kode panjang: 

Tetap berada dalam embed. 

3 

Tidak boleh membuat: 

- Layout rusak 

- Layar melebar • Horizontal scroll global 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **AI CODING RESPONSE FORMAT** 

Ketika user meminta kode: 

Urutan wajib: 

1. Penjelasan singkat 

2. Embed kode 

3. Preview jika HTML 

4. Catatan tambahan jika perlu 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FORBIDDEN RESPONSE FORMAT** 

DILARANG: 

"Halo, berikut kode Anda" 

kemudian spam ratusan baris kode dalam chat. 

Semua kode wajib masuk embed. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **HTML SPECIAL SYSTEM** 

HTML mendapatkan perlakuan khusus. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **HTML EMBED** 

HTML memiliki: 

- Code Tab 

- Preview Tab 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

4 

## **HTML HEADER** 

Tampilkan: 

HTML 

[ Copy ] 

[ Preview ] 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **HTML PREVIEW** 

Ketika Preview ditekan: 

Render HTML secara langsung. 

Tanpa membuka halaman baru. 

Tanpa download file. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **HTML PREVIEW FEATURES** 

Mendukung: 

- HTML • CSS • JavaScript 

Dalam satu preview. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **HTML PREVIEW SANDBOX** 

Preview harus aman. 

Gunakan sandbox environment. 

Mencegah: 

- Akses sistem 

- Akses localStorage sensitif 

5 

• Akses backend 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **NON HTML LANGUAGES** 

Bahasa selain HTML: 

TIDAK MEMILIKI tombol Preview. 

Contoh: 

Python 

[ Copy ] JavaScript [ Copy ] PHP 

[ Copy ] Go 

[ Copy ] Rust 

[ Copy ] 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **NON HTML RULE** 

Preview hanya untuk HTML. 

Tidak ada pengecualian. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **MULTIPLE EMBEDS** 

Jika jawaban memiliki banyak file: 

Gunakan stack embed. 

6 

Contoh: 

index.html 

style.css 

script.js 

Masing-masing embed terpisah. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **STACKED EMBED UI** 

Embed dapat ditampilkan: 

Vertikal 

atau 

Collapsible 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FILE LABELING** 

Nama file harus jelas. 

Contoh: 

index.html 

style.css 

script.js main.py config.json 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **PROJECT GENERATION** 

Jika user meminta: 

7 

"Buat website" 

AI harus menghasilkan: 

Struktur project lengkap. 

Contoh: 

index.html style.css script.js README.md 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **LARGE PROJECT MODE** 

Jika kode sangat besar: 

Pisahkan menjadi file. 

Jangan gabungkan semuanya dalam satu file. 

## ━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **DEBUGGING MODE** 

Jika user mengirim error: 

AI harus: 

1. Menganalisis 

2. Menjelaskan penyebab 

3. Memberikan solusi 

4. Menyediakan kode revisi 

## ━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **REFACTOR MODE** 

Jika user meminta optimasi: 

8 

AI harus: 

- Membersihkan kode 

- Mengurangi duplikasi 

- Menjelaskan perubahan 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **CODE EXPLANATION** 

Penjelasan harus: 

- Singkat • Jelas • Tidak bertele-tele 

Fokus pada solusi. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **NEMOTRON PERSONALITY FIX** 

Nemotron sering terlalu langsung. 

NeiroAI harus membuat Nemotron: 

- Lebih ramah 

- Memberi konteks 

- Menjelaskan sebelum kode 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **GPT-OSS ROLE** 

GPT-OSS menjadi: 

Lead Coding Engine 

Prioritas untuk: 

- Generate Code • Refactor • Debug 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

9 

## **CODE QUALITY TARGET** 

Kode yang dihasilkan harus: 

- Bersih 

- Mudah dibaca 

- Konsisten 

- Modern 

- Production Friendly 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FILE EXTRACTION SYSTEM** 

AI dapat membaca: 

- ZIP 

- Source Code 

- Folder Project 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FILE ANALYSIS** 

AI dapat: 

- Menjelaskan struktur project 

- Menjelaskan fungsi file 

- Menemukan bug 

- Memberi saran optimasi 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **PROJECT UNDERSTANDING** 

Jika user upload project: 

AI harus memahami hubungan antar file. 

Bukan hanya membaca satu file. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **DEVELOPER EXPERIENCE GOAL** 

User harus merasa: 

10 

Seperti menggunakan kombinasi: 

- ChatGPT 

- Claude 

- Cursor 

- VSCode Assistant 

Dalam satu platform. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FINAL CODING OBJECTIVE** 

Seluruh pengalaman coding harus: 

- Bersih 

- Cepat 

- Mudah digunakan 

- Profesional 

- Konsisten 

Semua kode wajib menggunakan embed. 

Preview hanya untuk HTML. 

Tidak ada preview untuk bahasa lain. 

11

---

## **NEIROAI MASTER SPECIFICATION V1 FINAL PART 4 - FILE SYSTEM, VISION SYSTEM, SYNOX INTEGRATION, AUTO DETECTION, MEDIA TOOLS** 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FILE SYSTEM OVERVIEW** 

NeiroAI harus mendukung file dan media sebagai fitur inti. 

User tidak hanya mengirim teks. 

User dapat mengirim: 

- Image • Screenshot 

- PDF 

- DOCX • TXT 

- ZIP 

- Source Code 

- Media URL 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FILE UPLOAD SYSTEM** 

Upload harus: 

- Cepat • Stabil 

- Responsive 

Support: 

- JPG 

- JPEG 

- PNG 

- WEBP • GIF 

- PDF 

- DOCX 

- TXT 

- ZIP 

1 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FILE PREVIEW** 

Sebelum diproses: 

File ditampilkan sebagai card. 

Card berisi: 

- Nama file 

- Ukuran file 

- Tipe file 

- Thumbnail jika tersedia 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **IMAGE UNDERSTANDING** 

Menggunakan: 

Nemotron-3 Nano Omni 

Ketika user mengirim gambar: 

Model dapat: 

- Melihat gambar 

- Membaca isi gambar 

- OCR 

- Membaca screenshot 

- Menjelaskan gambar 

- Mengidentifikasi objek 

- Mengidentifikasi UI 

- Membantu debugging 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **OCR SYSTEM** 

OCR harus mampu membaca: 

- Screenshot aplikasi 

- Dokumen 

- Foto tulisan 

- Kode dari screenshot 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

2 

## **PDF ANALYSIS** 

Ketika user upload PDF: 

AI dapat: 

- Membaca isi 

- Membuat ringkasan 

- Menjawab pertanyaan berdasarkan isi PDF 

- Menemukan informasi penting 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **DOCX ANALYSIS** 

Ketika user upload DOCX: 

AI dapat: 

- Membaca dokumen 

- Menganalisis isi 

- Memberi ringkasan 

- Menjawab pertanyaan 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **ZIP EXTRACTION** 

Ketika user upload ZIP: 

Sistem harus: 

- Mengekstrak isi 

- Membaca struktur folder 

- Menampilkan tree structure 

Contoh: 

project/ 

├── src/ 

├── public/ 

├── package.json 

└── README.md 

3 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **SOURCE CODE ANALYSIS** 

AI dapat: 

- Membaca project 

- Memahami hubungan file 

- Menemukan bug 

- Menjelaskan alur project 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **AUTO TOOL DETECTION** 

Sistem harus mendeteksi kebutuhan user secara otomatis. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **IMAGE GENERATION DETECTION** 

Jika prompt mengandung: 

- buat gambar 

- bikin gambar 

- generate gambar 

- create image 

- buat ilustrasi 

- buat logo 

- buat wallpaper 

- buat desain 

Maka: 

Aktifkan Image Generation Workflow. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **IMAGE EDIT DETECTION** 

Jika user: 

- Upload gambar 

- Meminta perubahan gambar 

Maka: 

4 

Aktifkan Image Edit Workflow. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **DOWNLOAD DETECTION** 

Jika user mengirim URL media sosial: 

Maka: 

Aktifkan Downloader Workflow. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **SYNOX INTEGRATION** 

Synox digunakan sebagai REST API Provider. 

Synox bukan model AI utama. 

Synox digunakan sebagai tool layer. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **IMAGE GENERATION** 

Endpoint: 

https://api.synoxcloud.xyz/ai-generate/text-2-image 

Method: 

GET 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **IMAGE GENERATION FLOW** 

User Prompt 

↓ 

Intent Detection 

↓ 

5 

Synox Request 

↓ 

Receive Image 

↓ 

Display Image 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **IMAGE DISPLAY RULES** 

Jangan tampilkan link mentah. 

WAJIB: 

Menampilkan gambar langsung. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **IMAGE VIEWER** 

Ketika gambar ditekan: 

Muncul viewer. 

Fitur: 

- Zoom • Preview • Download 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **IMAGE DOWNLOAD** 

Tombol download harus tersedia. 

User dapat mengunduh langsung. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

6 

## **IMAGE EDITING** 

Endpoint: 

https://api.synoxcloud.xyz/edit/nanobanana 

Method: 

GET 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **IMAGE EDIT WORKFLOW** 

User Upload Image 

↓ 

Upload ke Catbox 

↓ 

Dapatkan URL 

↓ 

Kirim URL ke Nanobanana 

↓ 

Terima hasil edit 

↓ 

Tampilkan gambar hasil 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **CATBOX UPLOADER** 

Endpoint: 

https://api.synoxcloud.xyz/uploader/catbox 

Method: 

7 

POST 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **CATBOX PURPOSE** 

Digunakan untuk: 

- Upload gambar sementara 

- Upload file pendukung 

- Mendapatkan URL publik 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **IMAGE EDIT DISPLAY** 

Setelah edit selesai: 

Tampilkan: 

Original 

↓ 

Edited 

Dengan preview yang jelas. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **DOWNLOADER SYSTEM** 

Menggunakan Synox Downloader. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **SUPPORTED PLATFORMS** 

- TikTok 

- Instagram 

- Facebook 

- Reddit 

- YouTube 

- Twitter/X 

- Pinterest 

- Telegram 

8 

- LinkedIn 

- Vimeo 

- Spotify • SoundCloud 

Dan platform lain yang didukung Synox. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **DOWNLOAD QUALITY RULE** 

Prioritas: 

type = video 

quality = hd_no_watermark 

Jika tersedia. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **DOWNLOAD RESPONSE** 

Jangan kirim link download mentah. 

WAJIB: 

Mengirim file video langsung jika memungkinkan. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **VIDEO PLAYER** 

Video hasil download harus: 

- Bisa diputar 

- Bisa diunduh 

- Memiliki preview 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **COMMAND SYSTEM** 

Ketika user mengetik: 

/ 

9 

Muncul command palette. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **AVAILABLE COMMANDS** 

/img 

Generate image 

━━━━━━━━━━━━━━━━━━━━━━━━━━ /editimg Edit uploaded image 

━━━━━━━━━━━━━━━━━━━━━━━━━━ /download Download media 

━━━━━━━━━━━━━━━━━━━━━━━━━━ /upload Upload file 

━━━━━━━━━━━━━━━━━━━━━━━━━━ /analyze Analyze file 

**==> picture [234 x 3] intentionally omitted <==**

**----- Start of picture text -----**<br>
━━━━━━━━━━━━━━━━━━━━━━━━━━<br>**----- End of picture text -----**<br>


## **COMMAND PALETTE UI** 

Style: 

- Modern 

- Dark 

- Rounded 

- Smooth Animation 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

10 

## **TOOL PRIORITY** 

Jika intent cocok dengan tool: 

Gunakan tool. 

Jangan paksa model AI menjawab secara manual. 

Contoh: 

"Buat gambar kucing" 

Gunakan Image Generator. 

Bukan menjelaskan cara menggambar kucing. 

## ━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **MULTIMODAL GOAL** 

NeiroAI harus mampu bekerja dengan: 

- Text • Image • File • Video 

- Source Code 

Dalam satu antarmuka terpadu. 

━━━━━━━━━━━━━━━━━━━━━━━━━━ 

## **FINAL TOOL OBJECTIVE** 

Semua tool harus terasa: 

- Otomatis 

- Cepat 

- Stabil 

- Modern 

User tidak perlu memilih workflow secara manual kecuali memang ingin. 

11

---

# NEIROAI MASTER SPECIFICATION V1 FINAL

## PART 5 - ARCHITECTURE, BACKEND, SECURITY, PERFORMANCE, FINAL DEVELOPMENT RULES

━━━━━━━━━━━━━━━━━━━━━━━━━━

# SYSTEM ARCHITECTURE

NeiroAI menggunakan arsitektur modern yang memisahkan:

```text
Frontend
    ↓
API Layer
    ↓
AI Providers
    ↓
Tool Providers
```

Tujuan:

- Stabil
- Mudah maintenance
- Mudah scaling
- Aman

━━━━━━━━━━━━━━━━━━━━━━━━━━

# FRONTEND

### Framework
- Next.js

### Language
- TypeScript

### UI
- React

### Styling
- Tailwind CSS

### Animation
- Framer Motion

━━━━━━━━━━━━━━━━━━━━━━━━━━

# FRONTEND OBJECTIVES

Fokus:

- Responsiveness
- Smoothness
- Stability

Tidak boleh ada:

- UI freeze
- Lag saat streaming
- Layout shift
- Re-render berlebihan

━━━━━━━━━━━━━━━━━━━━━━━━━━

# BACKEND

Backend bertindak sebagai:

**Gateway**

Semua request harus melewati backend.

Frontend tidak boleh berkomunikasi langsung dengan provider AI.

━━━━━━━━━━━━━━━━━━━━━━━━━━

# PROVIDER SYSTEM

AI Provider Layer harus modular.

Provider dapat:

- Ditambah
- Diganti
- Dihapus

Tanpa mengubah UI.

━━━━━━━━━━━━━━━━━━━━━━━━━━

# ACTIVE AI PROVIDERS

### Provider Utama
**NVIDIA**

### Model
- Nemotron-3 Ultra
- Nemotron-3 Nano Omni

━━━━━━━━━━━━━━━━━━━━━━━━━━

# SECONDARY PROVIDER

### Provider
**OpenRouter**

### Model
- GPT-OSS 120B

━━━━━━━━━━━━━━━━━━━━━━━━━━

# REQUEST FLOW

```text
User Prompt
    ↓
Backend
    ↓
Model Router
    ↓
Selected Model
    ↓
Response
    ↓
Frontend
```

━━━━━━━━━━━━━━━━━━━━━━━━━━

# NEIROPLUS REQUEST FLOW

```text
User Prompt
    ↓
GPT-OSS Draft
    ↓
Nemotron Ultra Draft
    ↓
Nano Omni Draft (jika relevan)
    ↓
Cross Evaluation
    ↓
Judge Phase
    ↓
Final Response
```

━━━━━━━━━━━━━━━━━━━━━━━━━━

# STREAMING ENGINE

Streaming harus:

- Real-time
- Stabil
- Smooth

Menggunakan:

- Server Sent Events (SSE)

atau

- WebSocket

━━━━━━━━━━━━━━━━━━━━━━━━━━

# STREAMING REQUIREMENTS

Tidak boleh:

- Text flicker
- Screen shaking
- Duplicate chunk
- Missing chunk

━━━━━━━━━━━━━━━━━━━━━━━━━━

# ABORT CONTROLLER

Semua request wajib memiliki:

`AbortController`

Agar tombol Stop berfungsi.

━━━━━━━━━━━━━━━━━━━━━━━━━━

# ERROR HANDLING

Tangani:

- Timeout
- Network Error
- Provider Error
- Invalid Response
- Rate Limit

━━━━━━━━━━━━━━━━━━━━━━━━━━

# ERROR UX

Jangan tampilkan stack trace.

Tampilkan pesan yang jelas.

Contoh:

> Request gagal. Silakan coba lagi.

━━━━━━━━━━━━━━━━━━━━━━━━━━

# AUTO RETRY

Jika error ringan:

Retry otomatis.

Maksimal:

**3 kali**

━━━━━━━━━━━━━━━━━━━━━━━━━━

# FAILOVER

Jika provider utama gagal:

Gunakan provider cadangan.

━━━━━━━━━━━━━━━━━━━━━━━━━━

# RATE LIMIT PROTECTION

Mencegah:

- Spam request
- Abuse
- Infinite loop

━━━━━━━━━━━━━━━━━━━━━━━━━━

# LOCAL STORAGE

Digunakan untuk:

- Chat History
- User Preferences
- UI Settings

━━━━━━━━━━━━━━━━━━━━━━━━━━

# LOCAL STORAGE RULES

Data harus:

- Ringan
- Mudah dibaca
- Mudah dipulihkan

━━━━━━━━━━━━━━━━━━━━━━━━━━

# SETTINGS STORAGE

Simpan:

- Theme
- Model Default
- Animation Preference

━━━━━━━━━━━━━━━━━━━━━━━━━━

# SECURITY RULES

API Key tidak boleh berada di frontend.

API Key tidak boleh dikirim ke browser.

API Key tidak boleh muncul di network response.

━━━━━━━━━━━━━━━━━━━━━━━━━━

# SECRET MANAGEMENT

Gunakan:

### Environment Variables

Contoh:

```env
NVIDIA_API_KEY=
OPENROUTER_API_KEY=
```

━━━━━━━━━━━━━━━━━━━━━━━━━━

# API SECURITY

Semua request sensitif:

```text
Frontend
    ↓
Backend
    ↓
Provider
```

Frontend tidak boleh mengakses provider secara langsung.

━━━━━━━━━━━━━━━━━━━━━━━━━━

# INPUT SANITIZATION

Semua input user harus divalidasi.

Mencegah:

- XSS
- Injection
- Malformed Request

━━━━━━━━━━━━━━━━━━━━━━━━━━

# HTML PREVIEW SECURITY

Preview HTML wajib sandbox.

Tidak boleh:

- Mengakses backend
- Mengakses token
- Mengakses storage sensitif

━━━━━━━━━━━━━━━━━━━━━━━━━━

# MEMORY MANAGEMENT

Chat lama tidak boleh menyebabkan:

- Browser lambat
- Memory leak

━━━━━━━━━━━━━━━━━━━━━━━━━━

# PERFORMANCE TARGET

### Target

**60 FPS**

━━━━━━━━━━━━━━━━━━━━━━━━━━

# INITIAL LOAD TARGET

### Landing

**< 3 detik**

━━━━━━━━━━━━━━━━━━━━━━━━━━

# CHAT RESPONSE TARGET

### UI Respons

**< 100ms**

━━━━━━━━━━━━━━━━━━━━━━━━━━

# MODEL RESPONSE TARGET

### Normal
- 5–20 detik

### Thinking
- 10–30 detik

### NeiroPlus
- 20–60 detik

━━━━━━━━━━━━━━━━━━━━━━━━━━

# ACCESSIBILITY

UI harus:

- Mudah dibaca
- Mudah disentuh
- Kontras cukup

━━━━━━━━━━━━━━━━━━━━━━━━━━

# MOBILE PRIORITY

Urutan prioritas:

1. Mobile
2. Tablet
3. Desktop

━━━━━━━━━━━━━━━━━━━━━━━━━━

# DEVELOPMENT PRIORITY

1. Stability
2. Reliability
3. Performance
4. Security
5. AI Quality
6. Features
7. Visual Effects

━━━━━━━━━━━━━━━━━━━━━━━━━━

# FEATURE ADDITION RULE

Fitur baru tidak boleh:

- Merusak fitur lama
- Menurunkan performa
- Menambah bug

━━━━━━━━━━━━━━━━━━━━━━━━━━

# TESTING REQUIREMENTS

Sebelum release:

- Test Mobile
- Test Tablet
- Test Desktop
- Test Streaming
- Test AI Models
- Test Downloader
- Test Image Generator
- Test File Upload
- Test HTML Preview

━━━━━━━━━━━━━━━━━━━━━━━━━━

# BUG POLICY

Bug kritis harus diperbaiki sebelum fitur baru dibuat.

Tidak boleh menumpuk technical debt.

━━━━━━━━━━━━━━━━━━━━━━━━━━

# FINAL PRODUCT VISION

NeiroAI harus terasa seperti kombinasi:

- AI Assistant Modern
- Coding Workspace
- File Analyzer
- Vision Assistant
- Productivity Tool

Dalam satu platform yang:

- Cepat
- Stabil
- Modern
- Premium
- Responsif

━━━━━━━━━━━━━━━━━━━━━━━━━━

# ABSOLUTE FINAL RULES

1. Semua kode wajib menggunakan embed.
2. Preview hanya untuk HTML.
3. Tidak boleh ada horizontal scroll global.
4. Semua animasi harus smooth.
5. Stop button wajib berfungsi.
6. Auto skip model error wajib aktif.
7. Chat history menggunakan localStorage.
8. NeiroPlus adalah mode terbaik.
9. Nemotron Ultra menjadi Judge utama.
10. Fokus utama selalu stabilitas dan pengalaman pengguna.

━━━━━━━━━━━━━━━━━━━━━━━━━━

# END OF SPECIFICATION