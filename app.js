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

const GEMINI_API_KEY = "AIzaSyBI-uO6ECzZZ5hd-NaKmPNb_tw7Yw3iVIU";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

async function respond() {
    const input = document.getElementById("userInput").value.trim();
    if (!input) return;

    const chatWindow = document.getElementById("chatWindow");

    // User bubble
    const userBubble = document.createElement("div");
    userBubble.className = "bubble user";
    userBubble.innerText = input;
    chatWindow.appendChild(userBubble);
    document.getElementById("userInput").value = "";

    // Typing indicator
    const typing = document.createElement("div");
    typing.className = "bubble bot";
    typing.innerText = currentLang === "rw" ? "Ndatekereza..." : "Thinking...";
    chatWindow.appendChild(typing);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    const langInstruction = currentLang === "rw"
        ? "Subiza mu Kinyarwanda gusa. Uri umufasha w'ubuzima ku rubyiruko rwo mu Rwanda. Tanga ibisubizo birambuye, byizewe kandi bifasha ku bijyanye n'ubuzima bw'imyororokere, HIV, imihango, no gukumira indwara, ndetse n'ubuzima bwo mu mutwe. Subiza neza kandi mu buryo bworoshye gusobanukirwa."
        : "Reply in English only. You are a youth health assistant for young people in Rwanda. Give clear, detailed, accurate and helpful answers about sexual and reproductive health, HIV prevention, menstrual health, mental health, and related topics. Be friendly, informative and non-judgmental.";

    try {
        const res = await fetch(GEMINI_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `${langInstruction}\n\nQuestion: ${input}` }]
                }]
            })
        });

        const data = await res.json();
        console.log("Gemini response:", data);
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || (currentLang === "rw" ? "Mbabarira, hari ikibazo. Gerageza nanone." : "Sorry, something went wrong. Please try again.");

        typing.innerText = reply;
    } catch (e) {
        typing.innerText = currentLang === "rw" ? "Mbabarira, hari ikibazo cya internet. Gerageza nanone." : "Sorry, a network error occurred. Please try again.";
    }

    chatWindow.scrollTop = chatWindow.scrollHeight;
}
