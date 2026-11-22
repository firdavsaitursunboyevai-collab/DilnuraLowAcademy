const constData = [
    {
        t: "I Bo'lim • 1–6-moddalar",
        h: "Davlat Suvereniteti va Xalq Hokimiyatchiligi",
        d: "O'zbekiston — suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat.",
        law: "7-modda: Xalq davlat hokimiyatining birdan-bir manbaidir.",
        full: "O'zbekiston Respublikasining Konstitutsiyasi oliy yuridik kuchga ega va mamlakatning butun hududida to'g'ridan-to'g'ri amal qiladi. Davlat xalq irodasini ifoda etib, uning manfaatlariga xizmat qiladi.",
        points: [
            "O'zbekiston Respublikasining davlat tili o'zbek tilidir (4-modda).",
            "Konstitutsiya va qonunlarning ustunligi so'zsiz tan olinadi (15-modda).",
            "Davlat organlari va mansabdor shaxslar jamiyat va fuqarolar oldida mas'uldirlar."
        ]
    },
    {
        t: "II Bo'lim • 19–25-moddalar",
        h: "Inson va Fuqaroning Asosiy Huquqlari",
        d: "Yashash huquqi, shaxsiy daxlsizlik va qonun oldida tenglik.",
        law: "24-modda: Yashash huquqi har bir insonning ajralmas huquqidir.",
        full: "Barcha fuqarolar jinsi, irqi, millati, tili, dini, ijtimoiy kelib chiqishidan qat'i nazar qonun oldida tengdirlar. O'zbekiston Respublikasida o'lim jazosi taqiqlanadi.",
        points: [
            "Hech kim qiynoqqa solinishi, zo'ravonlikka duchor etilishi mumkin emas (26-modda).",
            "Har bir shaxs o'z sha'ni va obro'siga qilingan tajovuzlardan himoyalanish huquqiga ega (31-modda).",
            "Shaxsni sud qarorisiz 48 soatdan ortiq ushlab turish mumkin emas (27-modda)."
        ]
    },
    {
        t: "II Bo'lim • 28-modda",
        h: "Aybsizlik Prezumpsiyasi va Miranda Qoidasi",
        d: "Ayblanuvchining huquqlari va himoyalanish kafolati.",
        law: "28-modda: Gumon qilinuvchi o'zining aybsizligini isbotlashi shart emas.",
        full: "Yangi tahrirdagi Konstitutsiyaga ko'ra, shaxsni ushlash chog'ida unga tushunarli tilda uning huquqlari va ushlab turilish asoslari tushuntirilishi shart (Miranda qoidasi).",
        points: [
            "Aybdorlikka oid barcha shubhalar gumon qilinuvchi yoki sudlanuvchining foydasiga hal qilinishi lozim.",
            "Hech kim o'ziga va yaqin qarindoshlariga qarshi guvohlik berishga majbur emas.",
            "Har bir shaxs ushlangan paytdan boshlab advokat yordamidan foydalanish huquqiga ega."
        ]
    },
    {
        t: "II Bo'lim • 42–46-moddalar",
        h: "Mehnat Qilish va Ijtimoiy Himoya Huquqi",
        d: "Munosib mehnat sharoitlari, dam olish va pensiya ta'minoti.",
        law: "42-modda: Har kim munosib mehnat qilish, kasb va faoliyat turini erkin tanlash huquqiga ega.",
        full: "Mehnatga haq to'lashning eng kam miqdori insonning munosib turmush darajasini ta'minlash zarurati hisobga olingan holda belgilanadi. Majburiy mehnat taqiqlanadi.",
        points: [
            "Homiladorligi yoki bolasi borligi sababli ayollarni ishga qabul qilishni rad etish taqiqlanadi.",
            "Yollanib ishlovchi barcha fuqarolar dam olish huquqiga ega (45-modda).",
            "Har kim qariganda, mehnat layoqatini yo'qotganda ijtimoiy ta'minot olish huququga ega (46-modda)."
        ]
    },
    {
        t: "II Bo'lim • 50–53-moddalar",
        h: "Ta'lim Olish va Ilm-Fan Erkinligi",
        d: "Bepul umumiy o'rta ta'lim va oliy ta'lim grantlari.",
        law: "50-modda: Davlat bepul umumiy o'rta ta'lim va boshlang'ich professional ta'lim olishni kafolatlaydi.",
        full: "Umumiy o'rta ta'lim majburiydir. Fuqarolar davlat ta'lim tashkilotlarida tanlov asosida davlat hisobidan oliy ma'lumot olishga haqli.",
        points: [
            "O'qituvchining mehnati jamiyat va davlatni rivojlantirishning asosi sifatida e'tirof etiladi (52-modda).",
            "Har kimga ilmiy, texnikaviy va badiiy ijod erkinligi kafolatlanadi (53-modda)."
        ]
    },
    {
        t: "III Bo'lim • 76–80-moddalar",
        h: "Oila, Bolalar va Yoshlar Huquqlari",
        d: "Nikoh ixtiyoriyligi, ota-ona va farzandlar burchlari.",
        law: "76-modda: Oila jamiyatning asosiy bo'g'inidir hamda jamiyat va davlat muhofazasidadir.",
        full: "Nikoh O'zbekiston xalqining an'anaviy oilaviy qadriyatlariga, nikohlanuvchilarning ixtiyoriy roziligiga va teng huquqliligiga asoslanadi.",
        points: [
            "Ota-onalar o'z farzandlarini voyaga yetguniga qadar boqishi, tarbiyalashi va ta'lim olishini ta'minlashi shart (77-modda).",
            "Voyaga yetgan mehnatga layoqatli farzandlar o'z ota-onalari haqida g'amxo'rlik qilishga majburdirlar (80-modda)."
        ]
    }
];
const codesData = [
    {
        t: "Mehnat Kodeksi",
        h: "Ishga Qabul Qilish va Mehnat Shartnomasi",
        d: "Ish vaqti, ta'tillar, sinov muddati va ishdan bo'shatish tartibi.",
        law: "Normal ish vaqti haftasiga 40 soatdan oshmasligi kerak.",
        full: "Yangi Mehnat kodeksiga ko'ra, yillik asosiy mehnat ta'tilining eng kam muddati 21 kalendar kunni tashkil etadi. Ishga qabul qilishga 16 yoshdan yo'l qo'yiladi (ota-ona roziligi bilan 15 yoshdan).",
        points: [
            "Dastlabki sinov muddati 3 oydan oshishi mumkin emas.",
            "Tungi vaqtdagi ish (22:00 dan 06:00 gacha) kamida 1,5 baravar miqdorda haq to'lanadi.",
            "Ish beruvchi xodimning mehnat daftarchasini elektron tarzda (YaMMT) yuritadi."
        ]
    },
    {
        t: "Fuqarolik Kodeksi",
        h: "Mulk Huquqi, Shartnomalar va Meros",
        d: "Oldi-sotdi, ijara, qarz shartnomalari va da'vo muddati.",
        law: "Umumiy da'vo muddati — 3 yil.",
        full: "Fuqarolik kodeksi fuqarolar va yuridik shaxslar o'rtasidagi mulkiy va shaxsiy nomulkiy munosabatlarni tartibga soladi. To'liq muomala layoqati 18 yoshdan boshlanadi.",
        points: [
            "Ko'chmas mulk oldi-sotdi shartnomasi notarial tasdiqlanishi va davlat ro'yxatidan o'tkazilishi shart.",
            "Meros ikki asos bo'yicha: vasiyatnoma va qonun bo'yicha o'tadi.",
            "Iste'molchi sifatsiz tovarni 10 kun ichida almashtirish yoki pulini qaytarib olish huquqiga ega."
        ]
    },
    {
        t: "Ma'muriy Javobgarlik Kodeksi (MJTK)",
        h: "Yo'l Harakati Qoidalari va Ma'muriy Jarimalar",
        d: "Huquqbuzarliklar uchun jarima, ma'muriy qamoq va huquqdan mahrum qilish.",
        law: "Ma'muriy javobgarlik 16 yoshdan boshlanadi.",
        full: "MJTK jamoat tartibi, yo'l harakati xavfsizligi, ekologiya va fuqarolarning huquqlariga tajovuz qiluvchi huquqbuzarliklar uchun jazo choralarini belgilaydi.",
        points: [
            "Jarima qarori chiqarilgan kundan boshlab 15 kun ichida to'lansa — 50% chegirma, 30 kun ichida to'lansa — 30% chegirma beriladi.",
            "Transport vositasini mast holda boshqarish haydovchilik huquqidan 1,5 yildan 3 yilgacha mahrum qilishga sabab bo'ladi.",
            "Ma'muriy qamoq 3 sutkadan 15 sutkagacha sud tomonidan tayinlanadi."
        ]
    },
    {
        t: "Jinoyat Kodeksi",
        h: "Jinoyat Turlari va Jinoiy Javobgarlik",
        d: "O'g'rilik, firibgarlik, kiberjinoyatlar va jazo tizimi.",
        law: "Umumiy jinoiy javobgarlik 16 yoshdan (og'ir jinoyatlar uchun 14 yoshdan) boshlanadi.",
        full: "Jinoyat kodeksi shaxsni, fuqarolarning huquq va erkinliklarini, jamiyat va davlat manfaatlarini jinoiy tajovuzlardan qo'riqlaydi.",
        points: [
            "Qasddan odam o'ldirish uchun jinoiy javobgarlik 14 yoshdan boshlanadi.",
            "Kiberjinoyatlar (plastik kartadan pul o'g'irlash) Jinoyat kodeksining 169-moddasi (O'g'rilik) bilan og'irlashtiruvchi holatda jazolanadi.",
            "Zaruriy mudofaa holatida qilingan harakat jinoyat hisoblanmaydi."
        ]
    },
    {
        t: "Oila Kodeksi",
        h: "Nikoh Tuzish, Ajrashish va Aliment",
        d: "Nikoh yoshi, er-xotinning umumiy mulki va bolalar ta'minoti.",
        law: "Erkaklar va ayollar uchun nikoh yoshi — 18 yosh.",
        full: "Oila kodeksi nikoh tuzish va uni tugatish, er-xotin o'rtasidagi shaxsiy va mulkiy munosabatlar hamda aliment to'lash majburiyatlarini tartibga soladi.",
        points: [
            "Nikoh davomida orttirilgan mol-mulk er va xotinning umumiy birgalikdagi mulki hisoblanadi.",
            "Aliment miqdori: 1 bola uchun — daromadning 1/4 qismi, 2 bola uchun — 1/3 qismi, 3 va undan ortiq bola uchun — 1/2 qismi.",
            "Nikoh FXDY (ZAGS) organlarida ariza berilgan kundan 1 oy o'tgach qayd etiladi."
        ]
    },
    {
        t: "Soliq Kodeksi",
        h: "Soliqlar Tizimi va Imtiyozlar",
        d: "Daromad solig'i, mol-mulk solig'i va o'zini o'zi band qilish.",
        law: "Jismoniy shaxslardan olinadigan daromad solig'i stavkasi — 12%.",
        full: "Soliq kodeksi O'zbekiston Respublikasida soliqlar va yig'imlarni belgilash, joriy etish hamda undirish tartibini belgilaydi.",
        points: [
            "O'zini o'zi band qilgan shaxslar daromad solig'idan ozod etilgan (faqat yiliga 1 BHM ijtimoiy soliq to'laydi).",
            "Talabalarning o'z kontraktini to'lashga yo'naltirilgan ish haqidan daromad solig'i ushlab qolinmaydi."
        ]
    }
];

const dictBank = [
    { w: "Konstitutsiya", tr: "Asosiy Qonun", ex: "Davlatning oliy yuridik kuchga ega bo'lgan asosiy qonuni." },
    { w: "Aybsizlik prezumpsiyasi", tr: "Aybsizlik farazi", ex: "Sud hukmi qonuniy kuchga kirmaguncha shaxs aybsiz hisoblanadi." },
    { w: "Kodeks", tr: "Qonunlar majmuasi", ex: "Muayyan sohani tartibga soluvchi tizimlashtirilgan yagona qonun." },
    { w: "Apellyatsiya", tr: "Shikoyat berish", ex: "Sudning qonuniy kuchga kirmagan qarori ustidan yuqori sudga shikoyat qilish." },
    { w: "Da'vo muddati", tr: "Huquqni himoya qilish muddati", ex: "Shaxs o'z buzilgan huquqini sud orqali himoya qilishi mumkin bo'lgan muddat (3 yil)." },
    { w: "Advokat", tr: "Huquqiy himoyachi", ex: "Fuqarolar va tashkilotlarga malakali yuridik yordam ko'rsatuvchi mutaxassis." },
    { w: "Notarius", tr: "Huquqiy tasdiqlovchi", ex: "Bitimlar, vasiyatnomalar va hujjatlarning haqiqiyligini tasdiqlovchi mansabdor shaxs." },
    { w: "Aliment", tr: "Moddiy ta'minot", ex: "Oilaning voyaga yetmagan yoki mehnatga layoqatsiz a'zolariga to'lanadigan mablag'." },
    { w: "Suverenitet", tr: "Davlat mustaqilligi", ex: "Davlatning ichki va tashqi siyosatda to'liq mustaqilligi." },
    { w: "Muomala layoqati", tr: "Huquqiy harakat qobiliyati", ex: "Shaxsning o'z harakatlari bilan huquq va majburiyatlar orttirish qobiliyati (18 yoshdan)." },
    { w: "Yuridik shaxs", tr: "Tashkilot / Korxona", ex: "O'z mulkiga ega bo'lgan, sudda da'vogar va javobgar bo'la oladigan tashkilot." },
    { w: "Amnistiya", tr: "Avf etish", ex: "Davlat hokimiyati oliy organi tomonidan mahkumlarni jazodan ozod qilish akti." }
];

const lawQuizBank = [
    { c: "const", q: "O'zbekiston Respublikasining yangi tahrirdagi Konstitutsiyasi qachon referendumda qabul qilingan?", o: ["2023-yil 30-aprel", "1992-yil 8-dekabr", "2021-yil 24-oktabr", "2024-yil 1-yanvar"], a: 0 },
    { c: "const", q: "Konstitutsiyaga ko'ra, davlat hokimiyatining birdan-bir manbai kim?", o: ["Xalq", "Prezident", "Parlament", "Sud hokimiyati"], a: 0 },
    { c: "const", q: "Shaxsni sudning qarorisiz ko'pi bilan necha soat ushlab turish mumkin?", o: ["48 soat", "24 soat", "72 soat", "12 soat"], a: 0 },
    { c: "const", q: "O'zbekiston Respublikasida qanday ta'lim majburiy hisoblanadi?", o: ["Umumiy o'rta ta'lim", "Oliy ta'lim", "Maktabgacha ta'lim", "Magistratura"], a: 0 },
    { c: "const", q: "Konstitutsiyaning nechanchi moddasida yashash huquqi kafolatlangan?", o: ["24-modda", "15-modda", "50-modda", "76-modda"], a: 0 },
    { c: "const", q: "Gumon qilinuvchi o'zining aybsizligini isbotlashi shartmi?", o: ["Yo'q, shart emas", "Ha, shart", "Faqat advokat bo'lmasa", "Faqat tergovda"], a: 0 },
    { c: "const", q: "O'zbekiston Respublikasida o'lim jazosiga munosabat qanday?", o: ["To'liq taqiqlangan", "Og'ir jinoyatlarda bor", "Faqat harbiy holatda", "Sud ixtiyorida"], a: 0 },
    { c: "const", q: "Voyaga yetgan farzandlarning ota-onalari oldidagi burchi nima?", o: ["G'amxo'rlik qilishga majbur", "Faqat moddiy yordam", "Majburiy emas", "Faqat o'g'il bolalar majbur"], a: 0 },
    { c: "codes", q: "Mehnat kodeksiga ko'ra, normal ish vaqti haftasiga necha soatdan oshmasligi kerak?", o: ["40 soat", "48 soat", "36 soat", "50 soat"], a: 0 },
    { c: "codes", q: "Yillik asosiy mehnat ta'tilining eng kam muddati necha kalendar kun?", o: ["21 kun", "15 kun", "14 kun", "30 kun"], a: 0 },
    { c: "codes", q: "Fuqarolik kodeksiga ko'ra, umumiy da'vo muddati necha yil?", o: ["3 yil", "1 yil", "5 yil", "10 yil"], a: 0 },
    { c: "codes", q: "Ma'muriy jarimani 15 kun ichida to'lasa necha foiz chegirma beriladi?", o: ["50%", "30%", "20%", "10%"], a: 0 },
    { c: "codes", q: "Oila kodeksiga ko'ra, erkaklar va ayollar uchun nikoh yoshi necha yosh?", o: ["18 yosh", "17 yosh", "20 yosh", "16 yosh"], a: 0 },
    { c: "codes", q: "2 nafar farzand uchun aliment miqdori ota-ona daromadining qancha qismini tashkil qiladi?", o: ["1/3 qismi (33%)", "1/4 qismi (25%)", "1/2 qismi (50%)", "1/5 qismi (20%)"], a: 0 },
    { c: "codes", q: "Jismoniy shaxslardan olinadigan daromad solig'i stavkasi necha foiz?", o: ["12%", "15%", "20%", "8%"], a: 0 },
    { c: "codes", q: "Ishga qabul qilishda dastlabki sinov muddati ko'pi bilan qancha bo'lishi mumkin?", o: ["3 oy", "6 oy", "1 oy", "1 yil"], a: 0 },
    { c: "codes", q: "Umumiy jinoiy javobgarlik necha yoshdan boshlanadi?", o: ["16 yosh", "18 yosh", "14 yosh", "15 yosh"], a: 0 },
    { c: "codes", q: "To'liq muomala layoqati necha yoshdan boshlanadi?", o: ["18 yosh", "16 yosh", "21 yosh", "14 yosh"], a: 0 },
    { c: "const", q: "O'zbekiston Respublikasining davlat tili Konstitutsiyaning nechanchi moddasida belgilangan?", o: ["4-modda", "1-modda", "10-modda", "18-modda"], a: 0 },
    { c: "codes", q: "FXDY (ZAGS) organlarida nikoh ariza berilgan kundan necha oy o'tgach qayd etiladi?", o: ["1 oy", "2 oy", "15 kun", "3 oy"], a: 0 }
];
