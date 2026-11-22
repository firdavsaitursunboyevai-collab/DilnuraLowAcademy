var SUPABASE_URL = "https://" + "hpvxopflazxzfftlheim" + ".supabase.co";
var SUPABASE_KEY = "sb_publishable_zpAfXMvyJgp8GEU3X7Jk1g_XRN2VS2V";
var MY_TELEGRAM_USERNAME = "DilnuraPedagogYurist";
var ADMIN_LOGIN = "admin";
var ADMIN_PASS = "admin123";

let curQ = [];
let certQ = [];

async function dhFetch(table, method = "GET", body = null, query = "") {
    var client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    if (method === "POST") {
        const { data, error } = await client.from(table).insert([body]).select();
        if (error) throw new Error(error.message);
        return data;
    }
    if (method === "GET") {
        let q = client.from(table).select("*");
        if (query.includes("login=eq.")) q = q.eq("login", query.split("login=eq.")[1].split("&")[0]);
        if (query.includes("pass=eq.")) q = q.eq("pass", query.split("pass=eq.")[1].split("&")[0]);
        if (query.includes("order=id.desc")) q = q.order("id", { ascending: false });
        const { data, error } = await q;
        if (error) throw new Error(error.message);
        return data;
    }
    if (method === "PATCH") {
        const { data, error } = await client.from(table).update(body).eq("id", query.split("id=eq.")[1]);
        if (error) throw new Error(error.message);
        return data;
    }
}

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

async function handleAuth(e) {
    e.preventDefault();
    const btn = document.getElementById("auth-submit-btn");
    const login = document.getElementById("auth-login").value.trim().toLowerCase();
    const pass = document.getElementById("auth-pass").value.trim();
    const name = document.getElementById("auth-name").value.trim();

    if (!isRegisterMode && login === ADMIN_LOGIN && pass === ADMIN_PASS) {
        localStorage.setItem("dh_current_user", JSON.stringify({ name: "Administrator", login: "admin", isAdmin: true, isPlus: true }));
        checkAuthSession();
        return;
    }

    btn.disabled = true; btn.innerText = "Kutilmoqda...";
    try {
        if (isRegisterMode) {
            if (!name) { btn.disabled = false; btn.innerText = "Ro'yxatdan o'tish"; return alert("Ismingizni kiriting!"); }
            const ex = await dhFetch("dh_users", "GET", null, `?login=eq.${login}`);
            if (login === ADMIN_LOGIN || ex.length > 0) { btn.disabled = false; btn.innerText = "Ro'yxatdan o'tish"; return alert("Bu login band!"); }
            const newUser = { name, login, pass, is_plus: false, joined: new Date().toLocaleDateString("uz-UZ") };
            await dhFetch("dh_users", "POST", newUser);
            localStorage.setItem("dh_current_user", JSON.stringify({ name, login, isAdmin: false, isPlus: false }));
            checkAuthSession();
        } else {
            const users = await dhFetch("dh_users", "GET", null, `?login=eq.${login}&pass=eq.${pass}`);
            if (!users || users.length === 0) { btn.disabled = false; btn.innerText = "Kirish"; return alert("Login yoki parol noto'g'ri!"); }
            const found = users[0];
            localStorage.setItem("dh_current_user", JSON.stringify({ name: found.name, login: found.login, isAdmin: false, isPlus: !!found.is_plus }));
            checkAuthSession();
        }
    } catch (err) { alert("Xatolik: " + err.message); }
    btn.disabled = false; btn.innerText = isRegisterMode ? "Ro'yxatdan o'tish" : "Kirish";
}

async function checkAuthSession() {
    let cur = JSON.parse(localStorage.getItem("dh_current_user") || "null");
    if (cur) {
        if (!cur.isAdmin) {
            try {
                const fresh = await dhFetch("dh_users", "GET", null, `?login=eq.${cur.login}`);
                if (fresh && fresh.length > 0) { cur.isPlus = !!fresh[0].is_plus; localStorage.setItem("dh_current_user", JSON.stringify(cur)); }
            } catch (e) {}
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
    if (confirm("Akkauntdan chiqmoqchimisiz?")) { localStorage.removeItem("dh_current_user"); checkAuthSession(); }
}

function buyPlusModal() {
    const cur = JSON.parse(localStorage.getItem("dh_current_user") || '{"name":"Foydalanuvchi","login":"guest"}');
    const text = encodeURIComponent(`Assalomu alaykum! Men DilnuraLowAcademy PRO saytida 💎 PLUS tarifini sotib olmoqchiman.\n👤 Ismim: ${cur.name}\n🔑 Loginim: ${cur.login}`);
    window.open("https://t.me" + "/" + MY_TELEGRAM_USERNAME + "?text=" + text, "_blank");
}
