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
        card2Desc: "HIV prevention, contraception, and reproductive wellbeing.",
        card3Title: "Menstrual Health",
        card3Desc: "Menstruation education, hygiene, and period support.",
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
        card2Desc: "Kwirinda HIV, contraception, n'ubuzima bw'imyororokere.",
        card3Title: "Ubuzima bw'Imihango",
        card3Desc: "Inyigisho ku imihango, isuku, n'ubufasha bw'imihango.",
        footer: "© 2026 SYHA – Umufasha w'Ubuzima ku Rubyiruko | iAccelerator Phase 7 | Rwanda"
    }
};

const responses = {
    en: {
        stress:    "Try deep breathing and short breaks. Stress is manageable — you're not alone. 💙",
        anxiety:   "Anxiety is common. Try grounding techniques: name 5 things you can see around you. 🌿",
        depression:"You matter. Talk to someone you trust or visit a health center for support. 💚",
        hiv:       "Use protection every time and get tested at a nearby health center. Early detection saves lives. ❤️",
        condom:    "Condoms are the most effective way to prevent HIV and STIs. Use them consistently. ✅",
        period:    "Menstruation is completely normal. Maintain hygiene and rest when needed. 🌸",
        pregnant:  "If you think you may be pregnant, visit a health center for a test and professional advice. 🏥",
        default:   "Thank you for your question. For detailed advice, please consult a health professional or visit your nearest health center. 💚"
    },
    rw: {
        stress:    "Gerageza gufata umwanya wo gutuza no guhumeka neza. Ntabwo uri wenyine. 💙",
        anxiety:   "Anxiety ni ikintu gisanzwe. Gerageza kwibaza ibintu 5 ubona imbere yawe ubu. 🌿",
        depression:"Ufite agaciro. Bwira umuntu wizeye cyangwa ujye kwa muganga ngo ubone ubufasha. 💚",
        hiv:       "Koresha uburyo bwo kwirinda buri gihe kandi wipimishe kwa muganga. Kumenya vuba bigukiza. ❤️",
        condom:    "Condom ni uburyo bwiza bwo kwirinda HIV n'indwara zandurira. Bikoreshe buri gihe. ✅",
        imihango:  "Imihango ni ibisanzwe. Isukure kandi wiruhuke igihe bikenewe. 🌸",
        gutwita:   "Niba utekereza ko ushobora gutwita, jya kwa muganga ngo wipimishe ubone inama. 🏥",
        default:   "Murakoze kubaza. Wagisha inama muganga wawe cyangwa ujye ku kigo cy'ubuzima gikuranye nawe. 💚"
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
    document.getElementById("card3-title").innerText = t.card3Title;
    document.getElementById("card3-desc").innerText  = t.card3Desc;
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

    if (lower.includes("stress"))                          reply = r.stress;
    else if (lower.includes("anxiety"))                    reply = r.anxiety;
    else if (lower.includes("depress"))                    reply = r.depression;
    else if (lower.includes("hiv"))                        reply = r.hiv;
    else if (lower.includes("condom"))                     reply = r.condom;
    else if (lower.includes("period") || lower.includes("imihango")) reply = currentLang === "rw" ? r.imihango : r.period;
    else if (lower.includes("pregnant") || lower.includes("gutwita")) reply = currentLang === "rw" ? r.gutwita : r.pregnant;

    const botBubble = document.createElement("div");
    botBubble.className = "bubble bot";
    botBubble.innerText = reply;
    chatWindow.appendChild(botBubble);

    document.getElementById("userInput").value = "";
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
