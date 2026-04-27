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

const OPENROUTER_KEY = "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";
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

const kb = {
    en: [
        { keys: ["what is hiv","hiv ni","hiv meaning","define hiv"],
          ans: "HIV (Human Immunodeficiency Virus) is a virus that attacks the immune system — the body's defense against infections. It is transmitted through unprotected sex, sharing needles, blood transfusion, or from mother to child during birth or breastfeeding. HIV does NOT spread through hugging, sharing food, mosquito bites, or casual contact. With proper treatment (ART), people with HIV can live long, healthy lives. Early testing is key — know your status! 💚" },
        { keys: ["hiv prevention","prevent hiv","avoid hiv","kwirinda hiv","protect hiv"],
          ans: "To prevent HIV: ✅ Always use a condom during sex. ✅ Get tested regularly and know your partner's status. ✅ Never share needles or syringes. ✅ Take PrEP (Pre-Exposure Prophylaxis) daily if you are at high risk — ask a health worker about it. ✅ If exposed to HIV, go to a health center within 72 hours for PEP (Post-Exposure Prophylaxis). Prevention is possible — protect yourself every time! ❤️" },
        { keys: ["aids","difference hiv aids","hiv vs aids"],
          ans: "HIV is the virus. AIDS (Acquired Immunodeficiency Syndrome) is the late stage of HIV infection when the immune system is severely damaged. Not everyone with HIV develops AIDS — with proper treatment (ART medication), most people with HIV never reach the AIDS stage. Early diagnosis and consistent treatment are the most important steps. 💊" },
        { keys: ["condom","use condom","how condom","condom work"],
          ans: "A condom is the most effective way to prevent both HIV and other STIs during sex. How to use correctly: 1) Check the expiry date. 2) Open carefully — don't use teeth or scissors. 3) Put on before any sexual contact. 4) Use water-based lubricant if needed. 5) Never reuse a condom. Both male and female condoms are available free at health centers in Rwanda. 🛡️" },
        { keys: ["period","menstruation","menstrual","monthly","menses","time of month"],
          ans: "Menstruation is completely normal and healthy — it is the monthly shedding of the uterine lining. A normal cycle is 21–35 days. During your period: ✅ Change pads or tampons every 4–6 hours. ✅ Drink plenty of water. ✅ Rest when needed. ✅ Light exercise can help with cramps. ✅ Eat iron-rich foods like beans, spinach, and meat. Irregular periods can be caused by stress, weight changes, or hormonal issues. If your period stops for 3+ months or is extremely painful, see a health worker. 🌸" },
        { keys: ["period pain","cramps","period cramp","painful period","stomach pain period","abdominal pain"],
          ans: "Period cramps happen because the uterus contracts to shed its lining. To relieve cramps: ✅ Apply a warm cloth or hot water bottle to your lower abdomen. ✅ Take ibuprofen or paracetamol (follow dosage instructions). ✅ Do light stretching or walking. ✅ Drink warm water or herbal tea. ✅ Rest and avoid cold drinks. If cramps are so severe they stop you from daily activities, this could be endometriosis — please see a doctor. 🌸" },
        { keys: ["irregular period","period late","missed period","period not coming","period change","period delay"],
          ans: "Irregular periods can be caused by: stress, significant weight loss or gain, excessive exercise, hormonal imbalance, thyroid problems, or pregnancy. If your period is late and you have been sexually active, take a pregnancy test first. If you are not pregnant and your period has been irregular for 3+ months, visit a health center for a hormonal check. Tracking your cycle on a calendar or app helps you notice patterns. 📅" },
        { keys: ["pregnant","pregnancy","am i pregnant","signs pregnancy","pregnancy symptoms"],
          ans: "Early signs of pregnancy include: missed period, nausea (especially in the morning), breast tenderness, fatigue, frequent urination, and light spotting. If you think you may be pregnant: ✅ Take a home pregnancy test (available at pharmacies — very affordable). ✅ The best time to test is 1 week after a missed period. ✅ If positive, visit a health center immediately to start prenatal care. Early prenatal care protects both mother and baby. 🏥" },
        { keys: ["contraception","birth control","family planning","avoid pregnancy","not get pregnant"],
          ans: "Contraception options available in Rwanda: 💊 Pills — taken daily, very effective. 💉 Injection (Depo-Provera) — every 3 months. 🔵 Implant — inserted in arm, lasts 3–5 years. 🔄 IUD — inserted in uterus, lasts 5–10 years. 🛡️ Condom — also prevents STIs. All these are available FREE at government health centers. Visit a health worker to choose the best option for your body and lifestyle. No method is 100% except abstinence. ✅" },
        { keys: ["sti","std","sexually transmitted","infection sex","chlamydia","gonorrhea","syphilis"],
          ans: "STIs (Sexually Transmitted Infections) include HIV, chlamydia, gonorrhea, syphilis, and herpes. Many STIs have NO symptoms — you can have one without knowing. Signs may include: unusual discharge, burning when urinating, sores or rashes on genitals, or lower abdominal pain. Prevention: always use a condom. Testing: get tested at any health center — it is confidential. Most STIs are curable with antibiotics if caught early. Don't ignore symptoms! 🏥" },
        { keys: ["puberty","body change","growing up","teenage body"],
          ans: "Puberty is the natural process where your body changes from a child to an adult. In girls (usually 8–13): breasts develop, hips widen, pubic hair grows, periods begin. In boys (usually 9–14): voice deepens, muscles grow, facial hair appears, testicles and penis grow. These changes are completely normal. Mood swings and skin changes (acne) are also common. If you have questions about your body changes, you can always ask here anonymously. 💚" },
        { keys: ["stress","stressed","overwhelmed","too much pressure","burnout"],
          ans: "Stress is your body's response to pressure or challenges. It is normal in small amounts but harmful when it becomes constant. Signs of stress: headaches, poor sleep, irritability, difficulty concentrating, fatigue. To manage stress: ✅ Take breaks and rest. ✅ Exercise — even a 20-minute walk helps. ✅ Talk to a trusted friend or family member. ✅ Reduce caffeine and get enough sleep (7–9 hours). ✅ Practice deep breathing: inhale for 4 seconds, hold for 4, exhale for 4. You are stronger than your stress. 💙" },
        { keys: ["anxiety","anxious","panic","panic attack","fear","nervous","worry"],
          ans: "Anxiety is intense worry or fear that can feel overwhelming. Signs: racing heart, shortness of breath, sweating, trembling, feeling of dread. During a panic attack, try the 5-4-3-2-1 technique: name 5 things you SEE, 4 you can TOUCH, 3 you HEAR, 2 you SMELL, 1 you TASTE. This brings you back to the present. For ongoing anxiety: regular exercise, limiting social media, and talking to someone you trust all help significantly. You are not alone. 🌿" },
        { keys: ["depression","depressed","sad","hopeless","empty","no motivation","feel nothing","worthless"],
          ans: "Depression is more than just feeling sad — it is a medical condition that affects how you think, feel, and function. Signs: persistent sadness for 2+ weeks, loss of interest in things you used to enjoy, changes in sleep or appetite, feeling worthless, difficulty concentrating, or thoughts of self-harm. What helps: talking to someone you trust, physical activity, sunlight, and professional support. Depression is treatable — you deserve to feel better. If you have thoughts of harming yourself, please reach out to someone immediately. 💚" },
        { keys: ["suicide","self harm","want to die","kill myself","end my life","hurt myself"],
          ans: "I hear you, and what you are feeling matters deeply. You are not alone in this pain. Please reach out right now: 🆘 Rwanda Mental Health Helpline: 114 (free call). 🆘 Talk to someone you trust — a friend, family member, teacher, or health worker. You do not have to face this alone. These feelings can get better with support. Your life has value and meaning. Please call 114 now. 💚" },
        { keys: ["sleep","insomnia","cant sleep","sleeping problem","not sleeping"],
          ans: "Poor sleep affects mental and physical health significantly. Tips for better sleep: ✅ Sleep and wake at the same time every day. ✅ Avoid screens (phone, TV) 1 hour before bed. ✅ Keep your room dark and cool. ✅ Avoid caffeine after 3pm. ✅ Try deep breathing or light stretching before bed. ✅ Avoid heavy meals at night. If you have not slept well for weeks, it may be linked to anxiety or depression — consider speaking to a health worker. 😴" },
        { keys: ["body image","weight","fat","thin","ugly","hate my body","not beautiful"],
          ans: "Your body is worthy of respect exactly as it is. Body image struggles are very common among young people, especially with social media pressure. Remember: most images online are edited and unrealistic. Health looks different on every body. Focus on how your body FEELS, not just how it looks. Eat nourishing foods, move in ways you enjoy, and surround yourself with people who uplift you. If negative body thoughts are affecting your daily life, talking to a counselor can help. 💚" },
        { keys: ["relationship","boyfriend","girlfriend","partner","love","dating"],
          ans: "Healthy relationships are built on: ✅ Mutual respect. ✅ Open and honest communication. ✅ Trust and safety. ✅ Consent — both people freely agree to any physical contact. ✅ Support for each other's goals. Warning signs of an unhealthy relationship: pressure to have sex, jealousy and control, insults or put-downs, isolation from friends and family. You deserve a relationship where you feel safe, valued, and free. 💚" },
        { keys: ["consent","sexual consent","forced sex","rape","sexual abuse","assault"],
          ans: "Consent means freely, clearly, and enthusiastically agreeing to sexual activity. Consent must be: ✅ Freely given — no pressure or threats. ✅ Reversible — anyone can change their mind at any time. ✅ Informed — both people understand what they are agreeing to. ✅ Enthusiastic — both people want it. ✅ Specific — agreeing to one thing does not mean agreeing to everything. Sex without consent is rape — it is a crime. If you have experienced sexual violence, you can get confidential support at any health center or call 3029 (Isange One Stop Center). 🆘" },
        { keys: ["hygiene","body hygiene","clean body","personal hygiene","vaginal hygiene","genital hygiene"],
          ans: "Good personal hygiene protects your health: ✅ Wash your body daily with clean water and mild soap. ✅ For vaginal hygiene — only wash the outside (vulva) with water. The vagina cleans itself naturally. Avoid douching or inserting soap inside — this disrupts natural bacteria and can cause infections. ✅ Change underwear daily. ✅ During periods, change pads every 4–6 hours. ✅ Wash hands before and after using the toilet. Simple hygiene habits prevent many infections. 🌸" },
        { keys: ["nutrition","healthy eating","diet","food","what to eat"],
          ans: "Good nutrition supports both physical and mental health. For young people: ✅ Eat a variety of foods — vegetables, fruits, proteins (beans, eggs, meat), and whole grains. ✅ Drink 6–8 glasses of water daily. ✅ Limit sugary drinks and processed foods. ✅ Eat iron-rich foods (especially important for girls during periods): beans, spinach, liver, meat. ✅ Don't skip breakfast — it fuels your brain and energy. A balanced diet improves mood, concentration, and energy levels. 🥗" },
        { keys: ["exercise","physical activity","workout","sport","fitness"],
          ans: "Regular physical activity is one of the best things you can do for your health. Benefits: reduces stress and anxiety, improves mood, boosts energy, helps with sleep, and reduces risk of chronic diseases. You don't need a gym: ✅ Walk or jog for 30 minutes daily. ✅ Dance, play football, or do home exercises. ✅ Stretch every morning. ✅ Take stairs instead of lifts. Even 20–30 minutes of movement per day makes a significant difference to your mental and physical health. 🏃" }
    ],
    rw: [
        { keys: ["hiv ni iki","hiv","sida","aids","virusi ya hiv"],
          ans: "HIV (Human Immunodeficiency Virus) ni virusi itera indwara ya SIDA. Itera ubumuga bw'ubudahangarwa bw'umubiri — sisitemu irwanya indwara. Iandurira binyuze mu: gukora imibonano mpuzabitsina idakingiye, gusangira imisumari, gutunga amaraso y'uwanduye, cyangwa kuva ku mubyeyi ku mwana mu gihe cy'inda cyangwa konsa. HIV NTIYANDURIRA binyuze mu gukumbatirana, gusangira ibiribwa, cyangwa inshundura z'inzoka. Hamwe n'imiti (ART), abantu bafite HIV bashobora kubaho neza igihe kirekire. Ipimishe vuba! 💚" },
        { keys: ["kwirinda hiv","kurinda hiv","gukinga hiv","prevention ya hiv"],
          ans: "Uburyo bwo kwirinda HIV: ✅ Koresha condom buri gihe mu mibonano mpuzabitsina. ✅ Wipimishe kenshi kandi umenye indwara z'uwo mukundana. ✅ Ntukoreshe imisumari y'undi muntu. ✅ Fata PrEP (umuti wo kwirinda mbere) niba uri mu kaga — baza muganga. ✅ Niba watewe HIV, jya kwa muganga mu masaha 72 ngo ubone PEP (umuti wo kwirinda nyuma). Kwirinda bishoboka — ikinga ubwawe buri gihe! ❤️" },
        { keys: ["imihango ni iki","imihango","kwezi","period","menses","imihango isobanura"],
          ans: "Imihango ni ibisanzwe kandi ni impano y'ubuzima — ni ukusohoka kwa amaraso buri kwezi bivuye mu nda y'umugore. Cycle isanzwe ni hagati y'iminsi 21–35. Mu gihe cy'imihango: ✅ Hindura pad cyangwa tampon buri masaha 4–6. ✅ Unywe amazi menshi. ✅ Wiruhuke igihe bikenewe. ✅ Imyitozo yoroheje ifasha ku ububabare. ✅ Rya ibiribwa birimo icyuma nka ibishyimbo, imboga, n'inyama. Imihango itajya mu gihe cyayo ishobora guterwa na stress, guhinduka ibiro, cyangwa ibibazo bya hormoni. Niba imihango yawe ihagaritse amezi 3+, jya kwa muganga. 🌸" },
        { keys: ["ububabare bw'imihango","ububabare","nda ibabara","kubabara mu mihango","cramps"],
          ans: "Ububabare bw'imihango buterwa n'inda itera imbere kugira ngo isohore. Kugabanya ububabare: ✅ Shyira ubushyuhe (akabaho k'amazi ashyushye) ku nda yo hasi. ✅ Fata ibuprofen cyangwa paracetamol (kurikira ingano). ✅ Kora imyitozo yoroheje cyangwa genda. ✅ Unywe amazi ashyushye cyangwa icyayi. ✅ Wiruhuke wirinde amazi ashyira. Niba ububabare bukabije bwaguteza guhagarika imirimo ya buri munsi, ushobora kuba ufite endometriosis — jya kwa muganga. 🌸" },
        { keys: ["imihango itajya mu gihe","imihango irabuze","imihango irakomeje","imihango ihindutse","imihango ntijya"],
          ans: "Imihango itajya mu gihe ishobora guterwa na: stress, guhinduka ibiro cyane, imyitozo ikabije, ibibazo bya hormoni, ibibazo bya thyroid, cyangwa gutwita. Niba imihango yawe irabuze kandi wakoze imibonano mpuzabitsina, banza kora ikizamini cy'inda. Niba utaratwita kandi imihango yawe yabuze amezi 3+, jya kwa muganga ngo ugenzurwe hormoni. Kuandika imihango yawe ku karita cyangwa muri app bigufasha kumenya imiterere yayo. 📅" },
        { keys: ["gutwita","inda","ibimenyetso by'inda","ntekereza ko ntwite","pregnancy"],
          ans: "Ibimenyetso by'inda ni: imihango irabuze, isesemi (cyane cyane mu gitondo), amabere ababara, umunaniro, kuja kenshi ku musarani, n'amaraso make. Niba utekereza ko ushobora gutwita: ✅ Kora ikizamini cy'inda (kibonetse mu bitaro — gifite igiciro gito). ✅ Igihe cyiza cyo gupima ni icyumweru 1 nyuma y'imihango irabuze. ✅ Niba biragaragara ko utwite, jya kwa muganga vuba ngo utangire kwita ku buzima bw'inda. Kwita ku buzima bw'inda vuba birinda umubyeyi n'umwana. 🏥" },
        { keys: ["contraception","kwirinda inda","family planning","ibinini","urushinge","implant","iud"],
          ans: "Uburyo bwo kwirinda inda bubonetse mu Rwanda: 💊 Ibinini — bifatwa buri munsi, bifite akamaro gakomeye. 💉 Urushinge (Depo-Provera) — buri mezi 3. 🔵 Implant — ishyirwa mu kuboko, imara imyaka 3–5. 🔄 IUD — ishyirwa mu nda, imara imyaka 5–10. 🛡️ Condom — kandi irinda indwara zandurira. Byose bibonetse UBUNTU mu bitaro bya leta. Jya kwa muganga ngo uhitemo uburyo bukwiye. Nta buryo bwizewe 100% uretse kwirinda imibonano mpuzabitsina. ✅" },
        { keys: ["stress","guremerewe","ingorane nyinshi","nababaye","nshobora guhangana"],
          ans: "Stress ni igisubizo cy'umubiri ku bibazo n'ingorane. Ni ibisanzwe mu rugero ruto ariko bitera ingaruka mbi iyo bikomeje. Ibimenyetso: inyungu z'umutwe, kutasinzira neza, guhagarika vuba, gunanirwa gutekereza, umunaniro. Kugabanya stress: ✅ Fata ikiruhuko kandi wiruhuke. ✅ Kora imyitozo — n'inzira y'iminota 20 ifasha. ✅ Bwira inshuti cyangwa umuryango wizeye. ✅ Gabanya kafeine kandi usinzire neza (amasaha 7–9). ✅ Gerageza guhumeka neza: humeka igihe cy'amasegonda 4, garura igihe cy'amasegonda 4, sohora igihe cy'amasegonda 4. Uri intwari kuruta stress yawe. 💙" },
        { keys: ["anxiety","batiwe","gutinya","ubwoba","guhagarika umutima","kwiheba"],
          ans: "Anxiety ni ubwoba bukabije cyangwa impungenge zishobora kugufata cyane. Ibimenyetso: umutima utera vuba, guhumeka nabi, kubira ibyuya, gutigita, kumva ikintu kibi kizaza. Mu gihe cy'ikibazo cy'anxiety, gerageza uburyo bwa 5-4-3-2-1: vuga ibintu 5 UBONA, 4 ushobora GUKORA, 3 WUMVA, 2 WONGERAHO ISURA, 1 USHOBORA KURYOHERWA. Ibi bikuzana mu bihe bya none. Ku anxiety ikomeje: imyitozo, kugabanya ikoranabuhanga, no kubwira umuntu wizeye bifasha cyane. Ntabwo uri wenyine. 🌿" },
        { keys: ["agahinda","depresion","depression","nababaye cyane","nshaka gupfa","ntamakuru","nta kamaro"],
          ans: "Agahinda gakomeye ni indwara — si ubugoyigoyi. Ibimenyetso: agahinda gakomeje ibyumweru 2+, gutakaza ibyishimo mu bintu wabaga ukunda, guhinduka mu gutaha cyangwa kurya, kumva nta kamaro, gunanirwa gutekereza, cyangwa gutekereza kwigirira nabi. Bifasha: kubwira umuntu wizeye, imyitozo, izuba, n'ubufasha bw'inzobere. Agahinda gashobora kuvurwa — ubuzima bwawe bufite agaciro. Niba utekereza kwigirira nabi, bwira umuntu vuba. 💚" },
        { keys: ["kwiyahura","kwigirira nabi","nshaka gupfa","kubabaza umubiri","kurangiza ubuzima"],
          ans: "Numva uko wumva, kandi ibyuguruye bigufata bifite agaciro. Ntabwo uri wenyine muri iki gihe cy'ububabare. Vuba vuba bwira umuntu: 🆘 Telefone ya Ubuzima bwo mu Mutwe mu Rwanda: 114 (ubuntu). 🆘 Bwira umuntu wizeye — inshuti, umuryango, umwarimu, cyangwa muganga. Ntukeneye guhangana wenyine. Izi mpungenge zishobora kugenda neza hamwe n'ubufasha. Ubuzima bwawe bufite agaciro n'intego. Vuba hamagara 114. 💚" },
        { keys: ["condom","gukoresha condom","condom ikora gute"],
          ans: "Condom ni uburyo bwiza bwo kwirinda HIV n'indwara zandurira mu mibonano mpuzabitsina. Uko ikoresha neza: 1) Reba itariki yo kurangira. 2) Fungura neza — ntukoreshe amenyo cyangwa makasi. 3) Shyira mbere y'imibonano mpuzabitsina yose. 4) Koresha lubricant ya amazi niba bikenewe. 5) Ntukoreshe inshuro ebyiri. Condom y'abagabo n'iy'abagore zibonetse ubuntu mu bitaro bya leta mu Rwanda. 🛡️" },
        { keys: ["isuku y'umubiri","isuku","koga","isuku y'imyanya ndangagitsina"],
          ans: "Isuku myiza irinda ubuzima bwawe: ✅ Koga buri munsi n'amazi meza na savon yoroheje. ✅ Ku isuku y'imyanya ndangagitsina y'umugore — karaba hanze gusa (vulva) n'amazi. Imyanya ndangagitsina yiyeza ubwayo. Wirinde gushyira savon imbere — bitera indwara. ✅ Hindura underweari buri munsi. ✅ Mu gihe cy'imihango, hindura pad buri masaha 4–6. ✅ Karaba intoki mbere no nyuma yo gukoresha ubwiherero. Isuku yoroheje irinda indwara nyinshi. 🌸" }
    ]
};

function getAnswer(input, lang) {
    const lower = input.toLowerCase();
    const list = kb[lang];
    for (const item of list) {
        if (item.keys.some(k => lower.includes(k))) return item.ans;
    }
    // fallback: try English kb if rw not found
    if (lang === "rw") {
        for (const item of kb.en) {
            if (item.keys.some(k => lower.includes(k))) return item.ans;
        }
    }
    return lang === "rw"
        ? "Murakoze kubaza. Ubu ntabwo mfite igisubizo gisobanutse ku kibazo cyawe. Gerageza kubaza mu buryo butandukanye, cyangwa baza ikibazo nka: 'HIV ni iki?', 'imihango', 'stress', 'gutwita', 'contraception', 'anxiety', cyangwa 'condom'. 💚"
        : "Thank you for your question. Try asking about specific topics like: 'What is HIV?', 'period pain', 'stress', 'pregnancy', 'contraception', 'anxiety', 'condom', or 'depression'. I am here to help! 💚";
}

async function respond() {
    const input = document.getElementById("userInput").value.trim();
    if (!input) return;

    const chatWindow = document.getElementById("chatWindow");

    const userBubble = document.createElement("div");
    userBubble.className = "bubble user";
    userBubble.innerText = input;
    chatWindow.appendChild(userBubble);
    document.getElementById("userInput").value = "";

    const typing = document.createElement("div");
    typing.className = "bubble bot";
    typing.innerText = currentLang === "rw" ? "Ndatekereza..." : "Thinking...";
    chatWindow.appendChild(typing);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Step 1: Try local knowledge base first
    const localAnswer = getAnswer(input, currentLang);
    const isDefault = localAnswer.includes("Try asking about") || localAnswer.includes("Gerageza kubaza");

    if (!isDefault) {
        typing.innerText = localAnswer;
        chatWindow.scrollTop = chatWindow.scrollHeight;
        return;
    }

    // Step 2: Try AI fallback
    const langInstruction = currentLang === "rw"
        ? "Subiza mu Kinyarwanda gusa. Uri umufasha w'ubuzima ku rubyiruko rwo mu Rwanda. Tanga ibisubizo birambuye, byizewe kandi bifasha ku bijyanye n'ubuzima bw'imyororokere, HIV, imihango, no gukumira indwara, ndetse n'ubuzima bwo mu mutwe."
        : "Reply in English only. You are a youth health assistant for young people in Rwanda. Give clear, detailed, accurate and helpful answers about sexual and reproductive health, HIV prevention, menstrual health, mental health, and related topics. Be friendly and non-judgmental.";

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENROUTER_KEY}`,
                "HTTP-Referer": "https://ch589814.github.io",
                "X-Title": "SYHA"
            },
            body: JSON.stringify({
                model: "google/gemma-3-4b-it:free",
                messages: [{ role: "user", content: `${langInstruction}\n\nQuestion: ${input}` }]
            })
        });

        const data = await res.json();
        const aiReply = data.choices?.[0]?.message?.content;
        typing.innerText = aiReply || localAnswer;
    } catch (e) {
        // Step 3: If AI fails, show local default message
        typing.innerText = localAnswer;
    }

    chatWindow.scrollTop = chatWindow.scrollHeight;
}
