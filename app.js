let currentLang = "en";

function setLanguage(lang) {
    currentLang = lang;

    if (lang === "rw") {
        document.getElementById("title").innerText = "Umufasha w'Ubuzima ku Rubyiruko";
        document.getElementById("subtitle").innerText = "Ubufasha bw'ubuzima bukoresheje AI";
        document.getElementById("ask").innerText = "Baza ikibazo cyawe mu ibanga";
        document.getElementById("userInput").placeholder = "Andika ikibazo...";
        document.getElementById("askBtn").innerText = "Baza";
    } else {
        document.getElementById("title").innerText = "SmartYouth Health Assistant";
        document.getElementById("subtitle").innerText = "AI-powered support for youth health";
        document.getElementById("ask").innerText = "Ask your health question anonymously";
        document.getElementById("userInput").placeholder = "Type your question...";
        document.getElementById("askBtn").innerText = "Ask";
    }
}

function respond() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let response = document.getElementById("response");

    if (currentLang === "rw") {
        if (input.includes("stress")) {
            response.innerText = "Gerageza kuruhuka no gufata umwanya wo gutuza. Si wowe wenyine.";
        }
        else if (input.includes("hiv")) {
            response.innerText = "Koresha uburyo bwo kwirinda kandi wipimishe kwa muganga.";
        }
        else if (input.includes("imihango") || input.includes("period")) {
            response.innerText = "Imihango ni ibisanzwe. Isukure kandi wiruhuke igihe bikenewe.";
        }
        else {
            response.innerText = "Murakoze kubaza. Wagisha inama muganga ku bisobanuro birambuye.";
        }
    } else {
        if (input.includes("stress")) {
            response.innerText = "Try deep breathing and take breaks. You're not alone.";
        }
        else if (input.includes("hiv")) {
            response.innerText = "Use protection and get tested at a nearby health center.";
        }
        else if (input.includes("period")) {
            response.innerText = "Menstruation is normal. Maintain hygiene and rest if needed.";
        }
        else {
            response.innerText = "Thank you for your question. Please consult a health professional.";
        }
    }
}