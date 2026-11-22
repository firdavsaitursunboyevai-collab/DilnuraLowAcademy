var MY_TELEGRAM_USERNAME = "DilnuraPedagogYurist";
var ADMIN_LOGIN = "admin";
var ADMIN_PASS = "admin123";

let curQ = [];
let certQ = [];

function getUsersDB() { return JSON.parse(localStorage.getItem("dh_users") || "[]"); }
function saveUsersDB(u) { localStorage.setItem("dh_users", JSON.stringify(u)); }
function getResultsDB() { return JSON.parse(localStorage.getItem("dh_results") || "[]"); }
function saveResultsDB(r) { localStorage.setItem("dh_results", JSON.stringify(r)); }

let isRegisterMode = false;
function toggleAuthMode() {
    isRegisterMode = !isRegisterMode;
    document.getElementById("auth-title").innerText = isRegisterMode ? "Ro'yxatdan o'tish" : "Tizimga kirish";
    document.getElementById("auth-name-group").classList.toggle("hidden", !isRegisterMode);
    document.getElementById("auth-submit-btn").innerText = isRegisterMode ? "Ro'yxatdan o'tish" : "Kirish";
    document.getElementById("auth-switch-text").innerHTML = isRegisterMode
        ? 'Akkauntingiz bormi? <b style="color:#1d4ed8;cursor:pointer" onclick="toggleAuthMode()">Kirish</b>'
        : 'Akkauntingiz yo\'qmi? <b style="color:#1d4ed8;cursor:pointer" onclick="toggleAuthMode()">Ro\'yxatdan o\'ting</b>';
}

function handleAuth(e) {
    e.preventDefault();
    const login = document.getElementById("auth-login").value.trim().toLowerCase();
    const pass = document.getElementById("auth-pass").value.trim();
    const name = document.getElementById("auth-name").value.trim();

    if (!isRegisterMode && login === ADMIN_LOGIN && pass === ADMIN_PASS) {
        localStorage.setItem("dh_current_user", JSON.stringify({ name: "Administrator", login: "admin", isAdmin: true, isPlus: true }));
        checkAuthSession();
        return;
    }

    let users = getUsersDB();
    if (isRegisterMode) {
        if (!name) return alert("Ismingizni kiriting!");
        if (login === ADMIN_LOGIN || users.some(u => u.login === login)) return alert("Bu login band!");
        const newUser = { name, login, pass, isPlus: false };
        users.push(newUser);
        saveUsersDB(users);
        localStorage.setItem("dh_current_user", JSON.stringify({ ...newUser, isAdmin: false }));
        checkAuthSession();
    } else {
        const found = users.find(u => u.login === login && u.pass === pass);
        if (!found) return alert("Login yoki parol noto'g'ri!");
        localStorage.setItem("dh_current_user", JSON.stringify({ ...found, isAdmin: false }));
        checkAuthSession();
    }
}

function checkAuthSession() {
    let cur = JSON.parse(localStorage.getItem("dh_current_user") || "null");
    if (cur) {
        if (!cur.isAdmin) {
            const fresh = getUsersDB().find(u => u.login === cur.login);
            if (fresh) { cur.isPlus = !!fresh.isPlus; localStorage.setItem("dh_current_user", JSON.stringify(cur)); }
        }
        document.getElementById("auth-screen").classList.add("hidden");
        document.getElementById("app-screen").classList.remove("hidden");
        const badge = cur.isPlus ? ' <span style="background:#f59e0b;color:#fff;padding:2px 6px;border-radius:6px;font-size:10px">💎 PLUS</span>' : '';
        document.getElementById("uname").innerHTML = cur.name + (cur.isAdmin ? " (Admin)" : "") + badge;
        document.getElementById("top-plus-btn").classList.toggle("hidden", cur.isPlus || cur.isAdmin);
        document.querySelectorAll(".admin-only").forEach(el => el.classList.toggle("hidden", !cur.isAdmin));
        loadStats();
        if (cur.isAdmin) loadAdminPanel();
    } else {
        document.getElementById("auth-screen").classList.remove("hidden");
        document.getElementById("app-screen").classList.add("hidden");
    }
}

function logoutUser() {
    if (confirm("Akkauntdan chiqmoqchimisiz?")) {
        localStorage.removeItem("dh_current_user");
        checkAuthSession();
    }
}

function buyPlusModal() {
    const cur = JSON.parse(localStorage.getItem("dh_current_user") || '{"name":"Foydalanuvchi","login":"guest"}');
    const text = encodeURIComponent(`Assalomu alaykum! Men DilnuraHuquq PRO saytida 💎 PLUS tarifini sotib olmoqchiman.\n👤 Ismim: ${cur.name}\n🔑 Loginim: ${cur.login}`);
    window.open("https://t.me" + "/" + MY_TELEGRAM_USERNAME + "?text=" + text, "_blank");
}

function openTab(id) {
    document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('[data-t]').forEach(b => b.classList.toggle('active', b.getAttribute('data-t') === id));
    if (id === 'home') loadStats();
    if (id === 'plus') loadLeaderboard();
    if (id === 'dict') loadDictTab();
    if (id === 'cert') loadCertTab();
    if (id === 'admin') loadAdminPanel();
    window.scrollTo(0, 0);
}

function renderLaws() {
    document.getElementById('list-const').innerHTML = constData.map((x, i) => `
        <div class="card item" data-s="${(x.h + x.d + x.law).toLowerCase()}">
            <div>
                <span class="tag">${x.t}</span>
                <h3>${x.h}</h3>
                <p style="color:#475569;font-size:14px;margin-top:4px">${x.d}</p>
                <div class="law-box"><b>📌 Asosiy qoida:</b> ${x.law}</div>
            </div>
            <button class="btn btn-outline" onclick="openLawDetail('const', ${i})">📖 Batafsil o'qish →</button>
        </div>`).join('');

    document.getElementById('list-codes').innerHTML = codesData.map((x, i) => `
        <div class="card item" data-s="${(x.h + x.d + x.law).toLowerCase()}">
            <div>
                <span class="tag">${x.t}</span>
                <h3>${x.h}</h3>
                <p style="color:#475569;font-size:14px;margin-top:4px">${x.d}</p>
                <div class="law-box"><b>⚖️ Norma:</b> ${x.law}</div>
            </div>
            <button class="btn btn-outline" onclick="openLawDetail('codes', ${i})">📖 Batafsil o'qish →</button>
        </div>`).join('');
}

function openLawDetail(type, idx) {
    const item = type === 'const' ? constData[idx] : codesData[idx];
    document.getElementById('lesson-detail-content').innerHTML = `
        <button class="btn btn-gray" style="margin-bottom:16px" onclick="openTab('${type}')">← Ortga qaytish</button>
        <div class="card" style="padding:28px">
            <span class="tag">${item.t}</span>
            <h1 style="font-size:24px;margin-bottom:12px">${item.h}</h1>
            <p style="font-size:16px;line-height:1.6;margin-bottom:16px">${item.full}</p>
            <div class="law-box" style="font-size:15px;padding:14px;margin-bottom:18px"><b>⚖️ ${item.law}</b></div>
            <h4 style="margin-bottom:10px">Muhim huquqiy nuqtalar:</h4>
            ${item.points.map(p => `<div style="padding:10px;border-left:3px solid #10b981;background:#f8fafc;margin-bottom:8px;border-radius:6px">• ${p}</div>`).join('')}
            <button class="btn btn-primary" style="margin-top:20px" onclick="openTab('quiz');document.getElementById('q-cat').value='${type}';startQuiz()">⚡ Shu bo'limdan test ishlash</button>
        </div>`;
    openTab('lesson-detail');
}

function filterCards(type) {
    const v = document.getElementById('s-' + type).value.toLowerCase();
    document.querySelectorAll('#list-' + type + ' .item').forEach(c => c.style.display = c.getAttribute('data-s').includes(v) ? 'block' : 'none');
}

function shuffle(arr) {
    let a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
}

function startQuiz() {
    const cur = JSON.parse(localStorage.getItem("dh_current_user") || '{}');
    const cat = document.getElementById('q-cat').value;
    const num = parseInt(document.getElementById('q-num').value);

    if (num >= 20 && !cur.isPlus && !cur.isAdmin) {
        if (confirm("🔒 20 talik katta huquqiy test faqat 💎 PLUS tarifida ochiq!\n\nPLUS olish uchun Telegramga o'tasizmi?")) buyPlusModal();
        return;
    }

    let pool = cat === 'all' ? lawQuizBank : lawQuizBank.filter(x => x.c === cat);
    curQ = shuffle(pool).slice(0, Math.min(num, pool.length)).map(q => {
        let correct = q.o[q.a];
        let opts = shuffle(q.o);
        return { q: q.q, c: q.c, opts, ans: opts.indexOf(correct) };
    });

    document.getElementById('q-setup').classList.add('hidden');
    document.getElementById('q-res').classList.add('hidden');
    document.getElementById('q-box').classList.remove('hidden');
    document.getElementById('q-items').innerHTML = curQ.map((item, i) => `
        <div class="card" style="margin-bottom:14px">
            <span class="tag">${item.c === 'const' ? '🇺🇿 Konstitutsiya' : '⚖️ Kodekslar'} • ${i + 1}-savol</span>
            <h4>${item.q}</h4>
            ${item.opts.map((o, oi) => `<label class="opt"><input type="radio" name="q${i}" value="${oi}"> ${o}</label>`).join('')}
        </div>`).join('');
}
function cancelQuiz() {
    document.getElementById('q-box').classList.add('hidden');
    document.getElementById('q-setup').classList.remove('hidden');
}

function finishQuiz() {
    let score = 0, review = '';
    curQ.forEach((item, i) => {
        let sel = document.querySelector(`input[name="q${i}"]:checked`);
        let val = sel ? parseInt(sel.value) : -1;
        let ok = val === item.ans;
        if (ok) score++;
        review += `<div class="card" style="margin-bottom:10px;border-left:5px solid ${ok ? '#10b981' : '#ef4444'}"><b>${i + 1}. ${item.q}</b><p style="font-size:14px;margin-top:4px">Sizning javob: <b>${val > -1 ? item.opts[val] : 'Belgilanmagan'}</b> ${ok ? '✅' : '❌'}</p>${!ok ? `<p style="color:#10b981;font-size:14px">To'g'ri javob: <b>${item.opts[item.ans]}</b></p>` : ''}</div>`;
    });

    let pct = Math.round((score / curQ.length) * 100);
    const cur = JSON.parse(localStorage.getItem("dh_current_user") || '{"name":"Foydalanuvchi","login":"guest"}');
    let resDB = getResultsDB();
    resDB.unshift({ name: cur.name, login: cur.login, score: `${score}/${curQ.length}`, correct: score, pct, date: new Date().toLocaleDateString("uz-UZ") });
    saveResultsDB(resDB);

    document.getElementById('q-box').classList.add('hidden');
    const resDiv = document.getElementById('q-res');
    resDiv.classList.remove('hidden');
    resDiv.innerHTML = `<div class="card" style="text-align:center;margin-bottom:18px"><h2>🎉 Natija: ${score} / ${curQ.length} (${pct}%)</h2><div style="display:flex;gap:8px;justify-content:center;margin-top:14px"><button class="btn btn-primary" onclick="cancelQuiz();resDiv.classList.add('hidden')">🔄 Yana ishlash</button><button class="btn btn-gold" onclick="openTab('plus')">🌍 Reytingni ko'rish</button></div></div>${review}`;
    loadStats();
    window.scrollTo(0, 0);
}

function loadStats() {
    const cur = JSON.parse(localStorage.getItem("dh_current_user") || 'null');
    if (!cur) return;
    const my = getResultsDB().filter(x => x.login === cur.login);
    document.getElementById('st-count').innerText = my.length;
    document.getElementById('st-avg').innerText = my.length ? Math.round(my.reduce((a, b) => a + b.pct, 0) / my.length) + '%' : '0%';
    document.getElementById('user-rank-title').innerText = my.length >= 10 ? "👑 Yetuk Yurist" : (my.length >= 3 ? "⚖️ Huquq Bilimdoni" : "🌱 Yosh Huquqshunos");
}

function loadLeaderboard() {
    const all = getResultsDB();
    const users = getUsersDB();
    const stats = {};
    all.forEach(r => {
        if (!stats[r.login]) stats[r.login] = { name: r.name, login: r.login, corr: 0, cnt: 0, pct: 0 };
        stats[r.login].corr += (r.correct || 0);
        stats[r.login].cnt += 1;
        stats[r.login].pct += r.pct;
    });
    const sorted = Object.values(stats).sort((a, b) => b.corr - a.corr);
    const medals = ["🥇 1-o'rin", "🥈 2-o'rin", "🥉 3-o'rin"];
    document.getElementById("leaderboard-body").innerHTML = sorted.length
        ? sorted.map((s, i) => `<tr><td><b>${medals[i] || (i + 1) + "-o'rin"}</b></td><td><b>${s.name}</b> ${users.some(u => u.login === s.login && u.isPlus) ? '💎' : ''}</td><td><b style="color:#1d4ed8">${s.corr} ta</b></td><td>${s.cnt} ta</td><td><b>${Math.round(s.pct / s.cnt)}%</b></td></tr>`).join('')
        : '<tr><td colspan="5" style="text-align:center">Hali natijalar yo\'q</td></tr>';
}

function loadDictTab() {
    const cur = JSON.parse(localStorage.getItem("dh_current_user") || '{}');
    const open = cur.isPlus || cur.isAdmin;
    document.getElementById("dict-locked").classList.toggle("hidden", open);
    document.getElementById("dict-open").classList.toggle("hidden", !open);
    if (open) renderDict(dictBank);
}
function renderDict(list) {
    document.getElementById("dict-list").innerHTML = list.map(d => `<div class="card"><h3 style="color:#1d4ed8">${d.w}</h3><p style="font-weight:700;margin:4px 0">${d.tr}</p><p style="font-size:13px;color:#64748b">${d.ex}</p></div>`).join('');
}
function filterDict() {
    const q = document.getElementById("s-dict").value.toLowerCase();
    renderDict(dictBank.filter(d => d.w.toLowerCase().includes(q) || d.tr.toLowerCase().includes(q)));
}

function loadCertTab() {
    const cur = JSON.parse(localStorage.getItem("dh_current_user") || '{}');
    const open = cur.isPlus || cur.isAdmin;
    document.getElementById("cert-locked").classList.toggle("hidden", open);
    document.getElementById("cert-open").classList.toggle("hidden", !open);
}
function startCertExam() {
    certQ = shuffle(lawQuizBank).slice(0, 15).map(q => { let c = q.o[q.a]; let opts = shuffle(q.o); return { q: q.q, opts, ans: opts.indexOf(c) }; });
    document.getElementById("cert-intro").classList.add("hidden");
    document.getElementById("cert-result-box").classList.add("hidden");
    document.getElementById("cert-exam-box").classList.remove("hidden");
    document.getElementById("cert-items").innerHTML = certQ.map((item, i) => `<div class="card" style="margin-bottom:12px"><h4>${i + 1}. ${item.q}</h4>${item.opts.map((o, oi) => `<label class="opt"><input type="radio" name="cq${i}" value="${oi}"> ${o}</label>`).join('')}</div>`).join('');
}
function finishCertExam() {
    let score = 0;
    certQ.forEach((item, i) => { let sel = document.querySelector(`input[name="cq${i}"]:checked`); if (sel && parseInt(sel.value) === item.ans) score++; });
    const pct = Math.round((score / certQ.length) * 100);
    const cur = JSON.parse(localStorage.getItem("dh_current_user") || '{}');
    document.getElementById("cert-exam-box").classList.add("hidden");
    const box = document.getElementById("cert-result-box");
    box.classList.remove("hidden");
    box.innerHTML = `<div class="card" style="text-align:center;padding:28px"><h2>${pct >= 80 ? '🎉 Tabriklaymiz!' : '😔 Ball yetarli emas'}</h2><p style="margin:10px 0">Natija: <b>${score}/15 (${pct}%)</b></p>${pct >= 80 ? `<button class="btn btn-gold" onclick="printLawCert('${cur.name}', ${pct})">🎓 Sertifikatni Yuklash</button>` : '<p style="color:#64748b">Kamida 80% to\'plash kerak.</p>'}</div>`;
}
function printLawCert(name, pct) {
    const w = window.open("", "_blank");
    w.document.write(`<div style="border:12px double #1d4ed8;padding:45px;text-align:center;font-family:sans-serif;max-width:750px;margin:20px auto;background:#eff6ff"><h1 style="color:#1e3a8a;font-size:34px">⚖️ HUQUQIY SERTIFIKAT</h1><p style="color:#64748b">DilnuraHuquq PRO — O'zbekiston Qonunchiligi Portali</p><hr style="margin:20px 0"><p>Ushbu sertifikat egasi:</p><h2 style="font-size:30px;margin:10px 0">${name}</h2><p>O'zbekiston Respublikasi Konstitutsiyasi va Kodekslari bo'yicha imtihondan <b>${pct}%</b> natija ko'rsatdi.</p><p style="margin-top:30px;color:#64748b">Sana: ${new Date().toLocaleDateString("uz-UZ")}</p><button onclick="window.print()" style="margin-top:20px;padding:10px 22px;background:#1d4ed8;color:#fff;border:none;border-radius:8px;cursor:pointer">🖨️ Chop etish / PDF</button></div>`);
}

function toggleUserPlus(login) {
    let users = getUsersDB();
    let idx = users.findIndex(u => u.login === login);
    if (idx > -1) { users[idx].isPlus = !users[idx].isPlus; saveUsersDB(users); loadAdminPanel(); }
}
function loadAdminPanel() {
    const users = getUsersDB();
    document.getElementById("adm-users-cnt").innerText = users.length;
    document.getElementById("adm-tests-cnt").innerText = getResultsDB().length;
    document.getElementById("adm-users-body").innerHTML = users.length
        ? users.map((u, i) => `<tr><td>${i + 1}</td><td><b>${u.name}</b></td><td><code>${u.login}</code></td><td><button class="btn" style="padding:5px 10px;background:${u.isPlus ? '#10b981' : '#e2e8f0'};color:${u.isPlus ? '#fff' : '#0f172a'}" onclick="toggleUserPlus('${u.login}')">${u.isPlus ? '💎 PLUS' : '🆓 PLUS berish'}</button></td></tr>`).join('')
        : '<tr><td colspan="4" style="text-align:center">Foydalanuvchilar yo\'q</td></tr>';
}

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dh_dark", isDark ? "1" : "0");
    document.getElementById("theme-toggle-btn").innerText = isDark ? "☀️" : "🌙";
}
if (localStorage.getItem("dh_dark") === "1") { document.body.classList.add("dark-mode"); document.getElementById("theme-toggle-btn").innerText = "☀️"; }

renderLaws();
checkAuthSession();
