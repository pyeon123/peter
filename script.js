// ===== Phrases List with Categories =====
const phraseCategories = {
    dramafav: [
        { ko: "라면 먹고 갈래요?", en: "Do you want to eat ramyeon? (a phrase for 'Netflix and chill')", rom: "ra-myeon meok-go gal-lae-yo?" },
        { ko: "내 눈에 흙이 들어가기 전엔 절대로 안 돼!", en: "Over my dead body!", rom: "nae nu-ne heul-gi deu-reo-ga-gi jeo-nen jeol-dae-ro an dwae!" },
        { ko: "어떡할 거야?", en: "What are you going to do?", rom: "eo-tteok-hal geo-ya?" },
        { ko: "어떡하지?", en: "What are we going to do?", rom: "eo-tteok-ha-ji?" },
        { ko: "말도 안 돼.", en: "That's unbelievable.", rom: "mal-do an dwae." },
        { ko: "죽을래?", en: "Do you want to die? (joking or serious threat)", rom: "ju-geul-lae?" },
        { ko: "넌 내 거야.", en: "You're mine.", rom: "neon nae geo-ya." },
        { ko: "사랑이 어떻게 변하니?", en: "How can love change?", rom: "sa-rang-i eo-tteo-ke byeon-ha-ni?" },
        { ko: "우리 이제 시작이야.", en: "Our story begins now.", rom: "u-ri i-je si-ja-gi-ya." },
        { ko: "네가 왜 여기 있어?", en: "Why are you here?", rom: "ne-ga wae yeo-gi i-sseo?" },
        { ko: "나한테 왜 이래?", en: "Why are you doing this to me?", rom: "na-han-te wae i-rae?" },
        { ko: "오늘 밤 우리 집에서 잘래?", en: "Do you want to sleep over at my place tonight?", rom: "o-neul bam u-ri jib-e-seo jal-lae?" }
    ],
    greetings: [
        { ko: "오랜만!", en: "Long time no see!", rom: "o-raen-man!" },
        { ko: "아싸!", en: "Yes! / Awesome!", rom: "a-ssa!" },
        { ko: "제발", en: "Please", rom: "je-bal" },
        { ko: "어머!", en: "Oh, my!", rom: "eo-meo!" },
        { ko: "괜찮아요?", en: "Are you okay?", rom: "gwaen-chan-a-yo?" },
        { ko: "미안해.", en: "I'm sorry.", rom: "mi-an-hae." },
        { ko: "잘 지내?", en: "How are you?", rom: "jal ji-nae?" },
        { ko: "밥 먹었어?", en: "Did you eat?", rom: "bap meo-geo-sseo?" },
        { ko: "어서 와.", en: "Welcome.", rom: "eo-seo wa." },
        { ko: "어떻게 오셨어요?", en: "What brings you here? (formal)", rom: "eo-tteo-ke o-syeo-sseo-yo?" },
        { ko: "누구세요?", en: "Who is it? (on the phone or at the door)", rom: "nu-gu-se-yo?" },
        { ko: "아니요, 괜찮아요.", en: "No, I'm okay.", rom: "a-ni-yo, gwaen-chan-a-yo." },
        { ko: "네, 맞아요.", en: "Yes, that's right.", rom: "ne, ma-ja-yo." },
        { ko: "정말 고마워.", en: "Thank you very much.", rom: "jeong-mal go-ma-wo." },
        { ko: "저기요...", en: "Excuse me...", rom: "jeo-gi-yo..." },
        { ko: "잠시만요.", en: "Just a moment.", rom: "jam-si-man-yo." },
        { ko: "힘내.", en: "Cheer up!", rom: "him-nae." },
        { ko: "행복하세요.", en: "Be happy. (formal)", rom: "haeng-bok-ha-se-yo." },
        { ko: "무슨 일 있어?", en: "Is something wrong?", rom: "mu-seun il i-sseo?" },
        { ko: "내일 봐.", en: "See you tomorrow.", rom: "nae-il bwa." }
    ],
    relationships: [
        { ko: "보고 싶어.", en: "I miss you.", rom: "bo-go si-peo." },
        { ko: "보고 싶었어.", en: "I missed you.", rom: "bo-go si-peo-sseo." },
        { ko: "사랑해.", en: "I love you.", rom: "sa-rang-hae." },
        { ko: "가지 마.", en: "Don't leave.", rom: "ga-ji ma." },
        { ko: "울지 마요.", en: "Don't cry.", rom: "ul-ji ma-yo." },
        { ko: "상관없어.", en: "I don't care.", rom: "sang-gwan eop-seo." },
        { ko: "내가 잘못했어.", en: "It's my fault.", rom: "nae-ga jal-mot-hae-sseo." },
        { ko: "그만 가 봐.", en: "You should go now.", rom: "geu-man ga bwa." },
        { ko: "우리 헤어지자.", en: "Let's break up.", rom: "u-ri he-eo-ji-ja." },
        { ko: "우리 결혼할까?", en: "Should we get married?", rom: "u-ri gyeol-hon-hal-kka?" },
        { ko: "내 옆에 있어줘.", en: "Stay by my side.", rom: "nae yeo-pe i-sseo-jwo." },
        { ko: "사랑은 타이밍이야.", en: "Love is all about timing.", rom: "sa-rang-eun ta-i-ming-i-ya." },
        { ko: "내 손 놓지 마.", en: "Don't let go of my hand.", rom: "nae son no-ji ma." },
        { ko: "나 어떡해.", en: "What should I do?", rom: "na eo-tteok-hae." },
        { ko: "너 없이는 안 돼.", en: "I can't live without you.", rom: "neo eob-si-neun an dwae." },
        { ko: "사랑한다고 말해줘.", en: "Tell me you love me.", rom: "sa-rang-han-da-go mal-hae-jwo." }
    ],
    travel: [
        { ko: "안녕하세요.", en: "Hello.", rom: "an-nyeong-ha-se-yo." },
        { ko: "어디로 가세요?", en: "Where are you going?", rom: "eo-di-ro ga-se-yo?" },
        { ko: "이 지도를 보고 따라가세요.", en: "Follow this map.", rom: "i ji-do-reul bo-go tta-ra-ga-se-yo." },
        { ko: "공항으로 가는 길을 알려주세요.", en: "Please tell me the way to the airport.", rom: "gong-hang-eu-ro ga-neun gi-reul al-lyeo-ju-se-yo." },
        { ko: "기차역이 어디에 있나요?", en: "Where is the train station?", rom: "gi-cha-yeo-gi eo-di-e in-na-yo?" },
        { ko: "왼쪽으로 가세요.", en: "Please go to the left.", rom: "wen-jjok-eu-ro ga-se-yo." },
        { ko: "오른쪽으로 가세요.", en: "Please go to the right.", rom: "o-reun-jjok-eu-ro ga-se-yo." },
        { ko: "얼마나 걸려요?", en: "How long will it take?", rom: "eol-ma-na geol-lyeo-yo?" },
        { ko: "천천히 말해주세요.", en: "Please speak slowly.", rom: "cheon-cheon-hi mal-hae-ju-se-yo." },
        { ko: "저는 길을 잃었어요.", en: "I am lost.", rom: "jeo-neun gi-reul i-reo-sseo-yo." },
        { ko: "여기서 사진 찍어도 돼요?", en: "Can I take a picture here?", rom: "yeo-gi-seo sa-jin jji-geo-do dwae-yo?" }
    ],
    food: [
        { ko: "메뉴 주세요.", en: "Please give me the menu.", rom: "me-nyu ju-se-yo." },
        { ko: "이거 주세요.", en: "I'll have this one.", rom: "i-geo ju-se-yo." },
        { ko: "맛있게 드세요.", en: "Bon appétit.", rom: "ma-sit-ge deu-se-yo." },
        { ko: "정말 맛있어요!", en: "It's really delicious!", rom: "jeong-mal ma-si-sseo-yo!" },
        { ko: "배고파 죽겠어.", en: "I'm starving.", rom: "bae-go-pa juk-ge-sseo." },
        { ko: "또 먹어?", en: "Are you eating again?", rom: "tto meo-geo?" },
        { ko: "계산해 주세요.", en: "Please give me the check.", rom: "gye-san-hae ju-se-yo." },
        { ko: "물 좀 주세요.", en: "Please give me some water.", rom: "mul jom ju-se-yo." },
        { ko: "맵지 않게 해주세요.", en: "Please don't make it spicy.", rom: "maep-ji an-ke hae-ju-se-yo." },
        { ko: "포장 되나요?", en: "Can I get this to go?", rom: "po-jang doe-na-yo?" }
    ],
    shopping: [
        { ko: "이거 얼마예요?", en: "How much is this?", rom: "i-geo eol-ma-ye-yo?" },
        { ko: "좀 깎아주세요.", en: "Please give me a discount.", rom: "jom kkak-ka-ju-se-yo." },
        { ko: "이거 다른 색깔 있어요?", en: "Do you have this in a different color?", rom: "i-geo da-reun saek-kkal i-sseo-yo?" },
        { ko: "이거 입어봐도 돼요?", en: "Can I try this on?", rom: "i-geo i-beo-bwa-do dwae-yo?" },
        { ko: "사이즈가 어떻게 되세요?", en: "What size are you?", rom: "sa-i-jeu-ga eo-tteo-ke doe-se-yo?" },
        { ko: "너무 비싸요.", en: "It's too expensive.", rom: "neo-mu bi-ssa-yo." },
        { ko: "카드 되나요?", en: "Do you accept credit cards?", rom: "ka-deu doe-na-yo?" },
        { ko: "현금으로 계산할게요.", en: "I'll pay with cash.", rom: "hyeon-geum-eu-ro gye-san-hal-ge-yo." },
        { ko: "이거 환불되나요?", en: "Can I get a refund for this?", rom: "i-geo hwan-bul doe-na-yo?" },
        { ko: "영수증 주세요.", en: "Please give me a receipt.", rom: "yeong-su-jeung ju-se-yo." }
    ],
    work: [
        { ko: "수고하셨습니다.", en: "Good job. (used to thank someone for their hard work)", rom: "su-go-ha-syeo-sseum-ni-da." },
        { ko: "회의 시작하겠습니다.", en: "Let's start the meeting.", rom: "hoe-ui si-jak-ha-ge-sseum-ni-da." },
        { ko: "점심은 드셨어요?", en: "Did you eat lunch?", rom: "jeom-sim-eun deu-syeo-sseo-yo?" },
        { ko: "오늘 야근 있어요?", en: "Are we working overtime today?", rom: "o-neul ya-geun i-sseo-yo?" },
        { ko: "내일도 출근하나요?", en: "Are we going to work tomorrow too?", rom: "nae-il-do chul-geun-ha-na-yo?" },
        { ko: "주말 잘 보내세요.", en: "Have a good weekend.", rom: "ju-mal jal bo-nae-se-yo." },
        { ko: "이거 언제까지 끝내야 돼요?", en: "By when do I have to finish this?", rom: "i-geo eon-je-kka-ji kkeut-nae-ya dwae-yo?" },
        { ko: "보고서 다 썼습니다.", en: "I've finished writing the report.", rom: "bo-go-seo da sseo-sseum-ni-da." },
        { ko: "제가 도와드릴까요?", en: "Can I help you?", rom: "je-ga do-wa-deu-ril-kka-yo?" },
        { ko: "쉬는 시간이에요.", en: "It's break time.", rom: "swi-neun si-gan-i-e-yo." }
    ],
    feelings: [
        { ko: "행복해요.", en: "I am happy.", rom: "haeng-bok-hae-yo." },
        { ko: "슬퍼요.", en: "I am sad.", rom: "seul-peo-yo." },
        { ko: "무서워요.", en: "I am scared.", rom: "mu-seo-wo-yo." },
        { ko: "화났어요.", en: "I am angry.", rom: "hwa-na-sseo-yo." },
        { ko: "피곤해요.", en: "I am tired.", rom: "pi-gon-hae-yo." },
        { ko: "짜증나요.", en: "I am annoyed.", rom: "jja-jeung-na-yo." },
        { ko: "괜찮아요.", en: "I am okay.", rom: "gwaen-chan-a-yo." },
        { ko: "기뻐요.", en: "I am joyful.", rom: "gi-ppeo-yo." },
        { ko: "놀랐어요.", en: "I am surprised.", rom: "nol-la-sseo-yo." },
        { ko: "실망했어요.", en: "I am disappointed.", rom: "sil-mang-hae-sseo-yo." },
        { ko: "외로워요.", en: "I am lonely.", rom: "oe-ro-wo-yo." }
    ]
};

let phrases = [];
let shuffledPhrases = [];
let currentPhrase = {};
let buffer = [];

const consonants = { "ㄱ":"g", "ㄲ":"kk", "ㄴ":"n", "ㄷ":"d", "ㄸ":"tt", "ㄹ":"r/l", "ㅁ":"m", "ㅂ":"b", "ㅃ":"pp", "ㅅ":"s", "ㅆ":"ss", "ㅇ":"ng", "ㅈ":"j", "ㅉ":"jj", "ㅊ":"ch", "ㅋ":"k", "ㅌ":"t", "ㅍ":"p", "ㅎ":"h" };
const vowels = { "ㅏ":"a", "ㅐ":"ae", "ㅑ":"ya", "ㅒ":"yae", "ㅓ":"eo", "ㅔ":"e", "ㅕ":"yeo", "ㅖ":"ye", "ㅗ":"o", "ㅛ":"yo", "ㅜ":"u", "ㅠ":"yu", "ㅡ":"eu", "ㅣ":"i" };

let isSynthReady = false;
let synth = window.speechSynthesis;
let voices = [];
let koreanVoice = null;
let lastUserInteraction = 0;

let recognition = null;
let isRecognizing = false;

// ===== Initialization & Setup =====
function initSpeechSynthesis() {
    if (!synth) {
        console.error("Speech Synthesis API not supported on this browser.");
        return;
    }
    synth.onvoiceschanged = () => {
        voices = synth.getVoices();
        koreanVoice = getKoreanVoice();
        isSynthReady = !!koreanVoice;
        if (!isSynthReady) {
            console.warn("Korean voice not found. Speech functionality may not work.");
        } else {
            console.log("Speech synthesis engine ready.");
        }
    };
    voices = synth.getVoices();
    if (voices.length > 0) {
        synth.onvoiceschanged();
    }
}

function getKoreanVoice() {
    const preferredVoices = ["Google 한국의", "Samsung Korean"];
    for (const name of preferredVoices) {
        const voice = voices.find(v => v.name.includes(name) && v.lang.startsWith("ko"));
        if (voice) return voice;
    }
    const fallbackVoice = voices.find(v => v.lang.startsWith("ko"));
    return fallbackVoice || null;
}

function safeSpeak(text) {
    if (!isSynthReady) {
        console.warn("Speech synthesis engine not ready. Skipping playback.");
        return;
    }
    const now = new Date().getTime();
    if (now - lastUserInteraction > 5000) {
         console.warn("User interaction timed out. Audio might be blocked.");
         return;
    }
    try {
        synth.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "ko-KR";
        if (koreanVoice) u.voice = koreanVoice;
        u.rate = 0.6; // 음성 속도 변경
        u.pitch = 1.0;
        u.onend = () => console.log("Speech finished:", text);
        u.onerror = (e) => console.error(`Speech synthesis error:`, e);
        synth.speak(u);
    } catch(e) {
        console.error("Unexpected speech synthesis failure:", e);
    }
}

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.warn("Speech Recognition API not supported. Voice input disabled.");
        document.querySelector('button[onclick="startRecognition()"]').style.display = 'none';
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'ko-KR';
    recognition.interimResults = false;

    recognition.onstart = () => {
        isRecognizing = true;
        document.getElementById('message').innerText = "🎤 Speaking...";
        document.getElementById('message').style.color = 'blue';
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        console.log('Recognized:', transcript);
        document.getElementById('input').value = transcript;
        checkAnswer(transcript);
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        document.getElementById('message').innerText = `❌ Recognition failed: ${event.error}`;
        document.getElementById('message').style.color = 'red';
        isRecognizing = false;
    };

    recognition.onend = () => {
        isRecognizing = false;
        if (document.getElementById('message').innerText.includes("Speaking")) {
            document.getElementById('message').innerText = "Recognition ended. Try again.";
        }
    };
}

function startRecognition() {
    lastUserInteraction = new Date().getTime();
    if (isRecognizing) {
        recognition.stop();
        return;
    }
    if (recognition) {
        recognition.start();
    }
}

// ===== Game Logic =====
function startGame(category) {
    phrases = [...phraseCategories[category]];
    shufflePhrases();
    document.getElementById("word").innerText = "Game started!";
    setTimeout(nextWord, 500);
}

function shufflePhrases() {
    shuffledPhrases = [...phrases].sort(() => Math.random() - 0.5);
    updateCounter();
}

function updateCounter(){
    document.getElementById("counter").textContent = `Phrases remaining: ${shuffledPhrases.length}`;
}

function nextWord() {
    lastUserInteraction = new Date().getTime();
    if (!shuffledPhrases.length) {
        document.getElementById("word").innerText = "Category complete! Shuffling...";
        shufflePhrases();
        if (!shuffledPhrases.length) {
            document.getElementById("word").innerText = "No phrases available in this category.";
            document.getElementById("translation").innerText = "";
            document.getElementById("romanization").innerText = "";
            return;
        }
    }

    currentPhrase = shuffledPhrases.pop();
    document.getElementById("word").innerText = currentPhrase.ko;
    document.getElementById("translation").innerText = `(${currentPhrase.en})`;
    document.getElementById("romanization").innerText = currentPhrase.rom || "";
    document.getElementById("input").value = "";
    document.getElementById("message").innerText = "";
    document.getElementById("message").style.color = "";
    buffer = [];
    updateCounter();
    setTimeout(() => safeSpeak(currentPhrase.ko), 120);
}

function checkAnswer(userAnswer) {
    lastUserInteraction = new Date().getTime();
    if (!userAnswer) {
        userAnswer = document.getElementById("input").value.trim();
    }

    const messageEl = document.getElementById("message");
    if (!currentPhrase.ko || !userAnswer) return;

    // Robust cleaning: remove all non-Hangul characters
    const cleanString = (str) => {
        // Keep only Hangul syllables and Jamo
        return str.replace(/[^\uAC00-\uD7AF\u3131-\u318E\s]/g, '');
    };

    const cleanedUserAnswer = cleanString(userAnswer);
    const cleanedCorrectAnswer = cleanString(currentPhrase.ko);

    if (cleanedUserAnswer === cleanedCorrectAnswer) {
        messageEl.innerText = "✅ Correct!";
        messageEl.style.color = "green";
        safeSpeak(currentPhrase.ko);
        setTimeout(nextWord, 1400);
    } else {
        messageEl.innerText = `❌ Wrong! The correct answer is: ${currentPhrase.ko}`;
        messageEl.style.color = "red";
        safeSpeak("Try again.");
    }
}

function press(key) {
    lastUserInteraction = new Date().getTime();
    buffer.push(key);
    updateInput();
}

function backspace(){
    lastUserInteraction = new Date().getTime();
    buffer.pop();
    updateInput();
}
function space(){
    lastUserInteraction = new Date().getTime();
    buffer.push(" ");
    updateInput();
}
function enter(){
    lastUserInteraction = new Date().getTime();
    checkAnswer();
}
function updateInput(){
    document.getElementById("input").value = Hangul.assemble(buffer);
}
function speakWord(){
    lastUserInteraction = new Date().getTime();
    if (currentPhrase.ko) safeSpeak(currentPhrase.ko);
}

// ===== Keyboard Rendering =====
function renderKeyboard(){
    const cDiv = document.getElementById("consonants");
    const vDiv = document.getElementById("vowels");

    for (const [ko, rom] of Object.entries(consonants)) {
        const btn = document.createElement("button");
        btn.innerHTML = `<span>${ko}</span><span class="roman">${rom}</span>`;
        btn.onclick = () => press(ko);
        cDiv.appendChild(btn);
    }
    for (const [ko, rom] of Object.entries(vowels)) {
        const btn = document.createElement("button");
        btn.innerHTML = `<span>${ko}</span><span class="roman">${rom}</span>`;
        btn.onclick = () => press(ko);
        vDiv.appendChild(btn);
    }
}

// ===== Initialization =====
window.addEventListener("load", () => {
    initSpeechSynthesis();
    initSpeechRecognition();
    renderKeyboard();
    updateCounter();
});