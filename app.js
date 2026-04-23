let currentLang = "en";

const text = {
    en: {
        title: "SmartYouth Health Assistant",
        subtitle: "Safe, anonymous, and stigma-free health support for young people in Rwanda.",
        heroBtn: "Ask a Question",
        chatTitle: "Ask your health question anonymously",
        placeholder: "Type your question...",
        askBtn: "Send ➤",
        card1Title: "Mental Health",
        card1Desc: "Stress, anxiety, depression support and coping strategies.",
        card2Title: "Reproductive Health",
        card2Desc: "HIV prevention, contraception, menstrual health, and reproductive wellbeing.",

        footer: "© 2026 SYHA – SmartYouth Health Assistant | iAccelerator Phase 7 | Rwanda"
    },
    rw: {
        title: "Umufasha w'Ubuzima ku Rubyiruko",
        subtitle: "Ubufasha bw'ubuzima butagira ipfunwe, bwizewe kandi bwihuse ku rubyiruko rwo mu Rwanda.",
        heroBtn: "Baza Ikibazo",
        chatTitle: "Baza ikibazo cyawe mu ibanga",
        placeholder: "Andika ikibazo...",
        askBtn: "Ohereza ➤",
        card1Title: "Ubuzima bwo mu Mutwe",
        card1Desc: "Ubufasha ku stress, anxiety, n'agahinda ndetse n'uburyo bwo guhangana nabyo.",
        card2Title: "Ubuzima bw'Imyororokere",
        card2Desc: "Kwirinda HIV, contraception, imihango, n'ubuzima bw'imyororokere.",

        footer: "© 2026 SYHA – Umufasha w'Ubuzima ku Rubyiruko | iAccelerator Phase 7 | Rwanda"
    }
};

const responses = {
    en: {
        stress:      "Stress is normal but manageable. Try deep breathing, take short walks, talk to a friend, and get enough sleep. If stress feels overwhelming, speak to a counselor. 💙",
        anxiety:     "Anxiety is very common among young people. Try the 5-4-3-2-1 grounding technique: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. If it persists, seek professional help. 🌿",
        depression:  "Feeling persistently sad or hopeless is a sign you may need support. Talk to someone you trust, reduce isolation, and visit a health center. You are not alone and help is available. 💚",
        hiv:         "HIV is preventable. Always use a condom, avoid sharing needles, and get tested regularly. If exposed, visit a health center within 72 hours for PEP (emergency prevention medicine). ❤️",
        condom:      "Condoms are the most effective way to prevent HIV and STIs. Use them correctly every time — check the expiry date, use the right size, and never reuse. ✅",
        period:      "Menstruation is completely normal and healthy. During your period: change pads/tampons every 4–6 hours, stay hydrated, rest when needed, and use a hot water bottle for cramps. Irregular or very painful periods should be checked by a doctor. 🌸",
        cramps:      "Period cramps are caused by the uterus contracting. To relieve them: use a warm compress, take pain relief like ibuprofen, do light exercise, and stay hydrated. If cramps are severe, see a doctor. 🌸",
        pregnant:    "If you think you may be pregnant, take a pregnancy test (available at pharmacies) or visit a health center. Early prenatal care is very important for both mother and baby. 🏥",
        contraception:"There are several contraception options: condoms (also prevent STIs), pills, injections, implants, and IUDs. Visit a health center to find the best option for you — it is confidential and free in many clinics. 💊",
        default:     "Thank you for your question. For detailed and personalized advice, please visit your nearest health center or call a health hotline. Your health matters. 💚"
    },
    rw: {
        stress:      "Stress ni ikintu gisanzwe ariko gishobora gukemurwa. Gerageza guhumeka neza, genda gufata ikirere, bwira inshuti, kandi usinzire neza. Niba stress ikuremereye cyane, bwira umujyanama w'ubuzima. 💙",
        anxiety:     "Anxiety ni ikintu gisanzwe mu rubyiruko. Gerageza uburyo bwo gutuza: vuga ibintu 5 ubona, 4 ushobora gukora, 3 wumva, 2 wongeraho isura, 1 ushobora kuryoherwa. Niba bikomeje, shaka ubufasha bwa muganga. 🌿",
        depression:  "Kumva agahinda gakomeye cyangwa kutumva akamaro ni ikimenyetso cy'uko ukeneye ubufasha. Bwira umuntu wizeye, wirinde kwigumira wenyine, kandi ujye kwa muganga. Ntabwo uri wenyine — ubufasha buhari. 💚",
        hiv:         "HIV irashobora kwirindwa. Koresha condom buri gihe, wirinde gusangira imisumari, kandi wipimishe kenshi. Niba watewe, jya kwa muganga mu masaha 72 ngo ubone PEP (umuti w'ihutirwa). ❤️",
        condom:      "Condom ni uburyo bwiza bwo kwirinda HIV n'indwara zandurira. Bikoreshe neza buri gihe — reba itariki yo kurangira, fata ingano ikwiye, kandi ntukoreshe inshuro ebyiri. ✅",
        imihango:    "Imihango ni ibisanzwe kandi ni impano y'ubuzima. Mu gihe cy'imihango: hindura pad/tampon buri masaha 4–6, unywe amazi menshi, wiruhuke igihe bikenewe, kandi ukoreshe ubushyuhe ku nda niba ufite ububabare. Imihango itajya mu gihe cyayo cyangwa itera ububabare bukabije igomba kugenzurwa na muganga. 🌸",
        ububabare:   "Ububabare bw'imihango buterwa n'inda itera imbere. Kugabanya ububabare: koresha ubushyuhe ku nda, fata umuti nka ibuprofen, kora imyitozo yoroheje, kandi unywe amazi. Niba ububabare bukabije, jya kwa muganga. 🌸",
        gutwita:     "Niba utekereza ko ushobora gutwita, kora ikizamini cy'inda (kibonetse mu bitaro) cyangwa ujye kwa muganga. Kwita ku buzima bw'inda vuba ni ingenzi cyane ku mubyeyi n'umwana. 🏥",
        contraception:"Hari uburyo bwinshi bwo kwirinda inda: condom (kandi birinda indwara), ibinini, urushinge, implant, na IUD. Jya kwa muganga ngo ubone uburyo bukwiye — ni bwihishwa kandi buraboneka ubuntu mu bitaro byinshi. 💊",
        default:     "Murakoze kubaza. Kugira inama zirambuye kandi zikwiye, jya ku kigo cy'ubuzima gikuranye nawe. Ubuzima bwawe ni ingenzi. 💚"
    }
};

function setLanguage(lang) {
    currentLang = lang;
    const t = text[lang];

    document.getElementById("title").innerText       = t.title;
    document.getElementById("subtitle").innerText    = t.subtitle;
    document.getElementById("heroBtn").innerText     = t.heroBtn;
    document.getElementById("chatTitle").innerText   = t.chatTitle;
    document.getElementById("userInput").placeholder = t.placeholder;
    document.getElementById("askBtn").innerText      = t.askBtn;
    document.getElementById("card1-title").innerText = t.card1Title;
    document.getElementById("card1-desc").innerText  = t.card1Desc;
    document.getElementById("card2-title").innerText = t.card2Title;
    document.getElementById("card2-desc").innerText  = t.card2Desc;
    document.getElementById("footerText").innerText  = t.footer;

    document.getElementById("btn-en").classList.toggle("active", lang === "en");
    document.getElementById("btn-rw").classList.toggle("active", lang === "rw");
}

function respond() {
    const input = document.getElementById("userInput").value.trim();
    if (!input) return;

    const chatWindow = document.getElementById("chatWindow");
    const r = responses[currentLang];

    // User bubble
    const userBubble = document.createElement("div");
    userBubble.className = "bubble user";
    userBubble.innerText = input;
    chatWindow.appendChild(userBubble);

    // Bot response
    const lower = input.toLowerCase();
    let reply = r.default;

    if (lower.includes("stress") || lower.includes("stressed") || lower.includes("guremerewe"))
        reply = r.stress;
    else if (lower.includes("anxiety") || lower.includes("anxious") || lower.includes("batiwe"))
        reply = r.anxiety;
    else if (lower.includes("depress") || lower.includes("sad") || lower.includes("agahinda") || lower.includes("nababaye"))
        reply = r.depression;
    else if (lower.includes("hiv") || lower.includes("aids") || lower.includes("sida"))
        reply = r.hiv;
    else if (lower.includes("condom") || lower.includes("preserve"))
        reply = r.condom;
    else if (lower.includes("cramp") || lower.includes("ububabare") || lower.includes("kubabara") || lower.includes("nda ibabara"))
        reply = currentLang === "rw" ? r.ububabare : r.cramps;
    else if (lower.includes("period") || lower.includes("imihango") || lower.includes("kwezi") || lower.includes("menses") || lower.includes("menstrual") || lower.includes("igihe cy"))
        reply = currentLang === "rw" ? r.imihango : r.period;
    else if (lower.includes("pregnant") || lower.includes("gutwita") || lower.includes("inda") || lower.includes("pregnancy"))
        reply = currentLang === "rw" ? r.gutwita : r.pregnant;
    else if (lower.includes("contraception") || lower.includes("contraceptive") || lower.includes("birth control") || lower.includes("kwirinda inda") || lower.includes("ibinini"))
        reply = r.contraception;

    const botBubble = document.createElement("div");
    botBubble.className = "bubble bot";
    botBubble.innerText = reply;
    chatWindow.appendChild(botBubble);

    document.getElementById("userInput").value = "";
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
