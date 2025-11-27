console.log("Startup Demo — JS yuklandi");

const team = [
  {
    name: "Samandar Maxamadaliyev",
    role: "Dasturchi & Strateg",
    skills: ["Management", "Strategiya tuzish", "Web dasturlar yozish"],
    links: { linkedin: "https://www.linkedin.com/in/fire-simon-213066398/", github: "https://github.com/samandarolov1" }
  },
  {
    name: "Shahlo Zarifova",
    role: "Team Leader",
    skills: ["Management",],
    links: { linkedin: "https://www.linkedin.com/in/shahlozarifova/" }
  },
  {
    name: "Mohira U.",
    role: "Head of Marketing",
    skills: ["Growth Marketing", "Branding", "Content"],
    links: { linkedin: "#", github: "#" }
  }
];

const roadmap = [
  { phase: "Idea", date: "Q2 2025", points: ["G‘oya validatsiyasi", "Bozor tadqiqoti"] },
  { phase: "Prototype", date: "Q3 2025", points: ["Figma prototipi", "Basic frontend"] },
  { phase: "MVP", date: "Q4 2025", points: ["Core features", "Beta foydalanuvchilar"] },
  { phase: "Launched", date: "Q1 2026", points: ["Rasmiy ishga tushirish", "Marketing kampaniyasi"] }
];

/* ---------------- HERO ---------------- */
document.getElementById("hero").innerHTML = `
<section class="bg-white rounded-2xl p-8 shadow-lg mb-10">
  <div class="md:flex md:items-center md:gap-8">
    <div class="md:flex-1">
      <p class="text-sm text-green-600 font-medium">Ogohlik - davr talabi!</p>

      <h2 class="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
        Kiberjinoyatchilar uyquda emas: <span class="text-indigo-600">Moliyangizni himoyalang</span>
      </h2>

      <p class="mt-4 text-gray-600">
   Vazifamiz: sizning kartangizni eng keng tarqalgan firibgarlik usullaridan himoya qilish va real vaqt rejimida moliyaviy xatarlarni aniqlab berish.
      </p>

      <div class="mt-6 flex gap-3">
        <a href="#plan" class="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">Qo‘shiling</a>
        <a href="#roadmap" class="px-4 py-2 border rounded-md">Yo‘l xaritasi</a>
      </div>
    </div>

    <div class="md:w-1/3 mt-6 md:mt-0">
      <div class="rounded-lg bg-gradient-to-br from-indigo-50 to-white border p-4">
        <h4 class="font-semibold">Qisqa Faktlar</h4>
        <ul class="mt-3 text-sm text-gray-600 space-y-1">
          <li>Har yili 2,1 trillion dollarlik zarar kiberjinoyatlar oqibatida qayd etiladi</li>
          <li>Kartalar bilan bog‘liq firibgarlik 37% oshgan (2024)</li>
          <li>70+ turdagi hujumlar kartalardan pul yechib olishga qaratilgan</li>
        </ul>
      </div>
    </div>
  </div>
</section>
`;

/* ---------------- PROBLEM + SOLUTION ---------------- */
document.getElementById("problem-section").innerHTML = `
<section class="grid md:grid-cols-2 gap-6">
  <article class="bg-white p-6 rounded-xl shadow">
    <h3 class="text-xl font-bold"> Muammo</h3>
    <p class="mt-3 text-gray-600">
      Bank kartalari raqamli xavfsizlik tahdidlari ostida qolmoqda, foydalanuvchilarning mablag‘lari esa ko‘plab kiberhujum turlari orqali xavf ostiga tushmoqda. Shaxsiy ma’lumotlar o‘g‘irlanishi va noqonuniy tranzaksiyalar soni yil sayin ortib bormoqda.
    </p>
    <ul class="mt-3 list-disc list-inside text-gray-600 space-y-1">
      <li>Fishing va soxta saytlar orqali karta ma’lumotlarini qo‘lga kiritish</li>
      <li>Telegram, WhatsApp orqali tarqaladigan fishing havolalar</li>
      <li>Public Wi-Fi orqali ma’lumotlarni ushlash (sniffing)</li>
      <li>Zararli dasturlar va keyloggerlar</li>
      <li>Bank ilovalariga soxta push xabar yuborish texnikalari</li>
      <li>OS va brauzer xavfsizlik zaifliklaridan foydalanish</li>
    </ul>
  </article>

  <article class="bg-white p-6 rounded-xl shadow">
    <h3 class="text-xl font-bold">Yechim</h3>
    <p class="mt-3 text-gray-600">
      Biz ishlab chiqayotgan tizim — ko‘p bosqichli tahdidlarga qarshi himoya qila oladigan, real vaqt rejimida ishlovchi va ko'plab mustaqil hujumni bir vaqtning o‘zida qaytara oladigan ilg‘or xavfsizlik platformasidir. Tizim zamonaviy fintech standartlari asosida yaratilgan bo‘lib, unda quyidagi yondashuv qo‘llaniladi:
    </p>
    <ul class="mt-3 list-disc list-inside text-gray-600 space-y-1">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </article>
</section>
`;

/* ---------------- TEAM ---------------- */
document.getElementById("team").innerHTML = `
<h3 class="text-2xl font-bold mb-4">2. Jamoa</h3>
<div class="grid md:grid-cols-3 gap-4">
  ${team
    .map(
      (m) => `
    <div class="bg-white p-6 rounded-xl shadow">
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-xl font-semibold">
          ${m.name[0]}
        </div>
        <div>
          <div class="font-semibold">${m.name}</div>
          <div class="text-sm text-gray-500">${m.role}</div>
        </div>
      </div>

      <div class="mt-4 text-sm text-gray-600">
        <div class="font-medium">Ko‘nikmalar</div>
        <ul class="list-disc list-inside mt-2">
          ${m.skills.map((s) => `<li>${s}</li>`).join("")}
        </ul>
      </div>

      <div class="mt-4 flex gap-2">
        ${m.links.linkedin ? `<a href="${m.links.linkedin}" target="_blank" class="text-sm text-indigo-600">LinkedIn</a>` : ""}
        ${m.links.github ? `<a href="${m.links.github}" target="_blank" class="text-sm text-gray-600">GitHub</a>` : ""}
      </div>
    </div>
  `
    )
    .join("")}
</div>
`;

/* ---------------- WHY US ---------------- */
document.getElementById("why").innerHTML = `
<section class="bg-white p-6 rounded-xl shadow">
  <h3 class="text-2xl font-bold">3. Nima uchun biz?</h3>
  <p class="mt-3 text-gray-600">
    Bizda kombinatsiyalangan tajriba — biznes strategiya, texnologiya va marketing.
  </p>

  <div class="mt-4 grid md:grid-cols-3 gap-4">
    <div class="p-4 border rounded">
      <div class="font-semibold">Tajriba</div>
      <div class="text-sm text-gray-600 mt-2">Case study’lar va amaliy loyihalar.</div>
    </div>

    <div class="p-4 border rounded">
      <div class="font-semibold">Texnik kuch</div>
      <div class="text-sm text-gray-600 mt-2">React, Node.js, PostgreSQL, Docker.</div>
    </div>

    <div class="p-4 border rounded">
      <div class="font-semibold">Tarmoq</div>
      <div class="text-sm text-gray-600 mt-2">Investorlar va mentorlar bazasi.</div>
    </div>
  </div>
</section>
`;

/* ---------------- ROADMAP ---------------- */
document.getElementById("roadmap").innerHTML = `
<h3 class="text-2xl font-bold mb-4">4. Yo‘l xaritasi</h3>
<div class="bg-white p-6 rounded-xl shadow">
  <ol class="space-y-6">
    ${roadmap
    .map(
      (r, i) => `
      <li class="flex gap-4 items-start">
        <div class="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
          ${i + 1}
        </div>
        <div>
          <div class="font-semibold">${r.phase} — <span class="text-sm text-gray-500">${r.date}</span></div>
          <ul class="list-disc list-inside text-gray-600 mt-2">
            ${r.points.map((p) => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      </li>
    `
    )
    .join("")}
  </ol>
</div>
`;

/* ---------------- PLAN ---------------- */
document.getElementById("plan").innerHTML = `
<section class="bg-white p-6 rounded-xl shadow">
  <h3 class="text-2xl font-bold mb-4">5. Amalga oshirish rejasi</h3>

  <div class="grid md:grid-cols-2 gap-6">
    <div>
      <h4 class="font-semibold">Bosqichlar</h4>
      <ol class="list-decimal list-inside mt-3 text-gray-600 space-y-2">
        <li>Idea validation — user interviews</li>
        <li>Prototype — Figma, UX testing</li>
        <li>MVP — core features</li>
        <li>Beta — feedback cycle</li>
        <li>Launch — marketing</li>
      </ol>

      <h4 class="font-semibold mt-4">Texnologiyalar</h4>
      <ul class="mt-2 list-disc list-inside text-gray-600">
        <li>Frontend: HTML + CSS + JS</li>
        <li>Backend: Node.js + Express</li>
        <li>Database: PostgreSQL</li>
        <li>Infra: Docker, AWS</li>
      </ul>
    </div>

    <div>
      <h4 class="font-semibold">AI imkoniyatlari</h4>
      <ul class="list-disc list-inside mt-2 text-gray-600">
        <li>LLM — onboarding helper</li>
        <li>Search — skills matching</li>
        <li>Analytics — user behavior</li>
      </ul>

      <h4 class="font-semibold mt-4">KPI’lar</h4>
      <ul class="list-disc list-inside mt-2 text-gray-600">
        <li>User activation</li>
        <li>Retention</li>
        <li>Loyihalarning ishga tushirilishi</li>
      </ul>
    </div>
  </div>
</section>
`;

/* ---------------- FOOTER ---------------- */
document.getElementById("footer").innerHTML = `
<footer class="bg-white p-6 rounded-xl shadow text-sm text-gray-600">
  <div class="flex flex-col md:flex-row md:justify-between">
    <div>
      <div class="font-semibold">Biz bilan bog‘lanish</div>
      <div class="mt-2">Email: </div>
      <div>Telegram: </div>
    </div>

    <div class="mt-4 md:mt-0 text-right">
      <div class="font-semibold">Qisqacha</div>
      <div class="mt-2">Innovatsiya · Hamkorlik · Amaliy natija</div>
    </div>
  </div>
</footer>
`;

