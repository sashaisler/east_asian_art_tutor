const STUDY_ITEMS = [
  {
    id: 1,
    title: 'painted bowl with human face and fish motif (Banpo bowl)',
    date: '5000–3000 BCE',
    period: 'Neolithic period (Yangshao culture)',
    medium: 'ceramic (clay) with black slip / painted decoration; coil-built bowl',
    maker: 'Yangshao culture',
    importance: 'Early northwest painted pottery; coil-built bowl with interior decoration, showing strong visual design over texture.',
  },
  {
    id: 2,
    title: 'Kui Three-legged pitcher (tripod ewer)',
    date: '3000–2000 BCE',
    period: 'Neolithic period (Longshan culture)',
    medium: 'Ceramic (earthenware)',
    maker: 'Longshan culture',
    importance: 'Thin eggshell pottery with tripod legs that “animate” the form; linked in the sheet to hunting society, animal-shaped burial pottery, and eastern coastal tradition.',
  },
  {
    id: 3,
    title: 'Flame-style vessel (kaen-doki)',
    date: '2500–1500 BCE',
    period: 'Middle–Late Jōmon period',
    medium: 'Clay / ceramic, coil-built',
    maker: 'Jōmon culture, Niigata region (Japan)',
    importance: 'Coil-built Jōmon pottery with dramatic flame-like design; shows early Japanese ceramics were highly expressive, not just utilitarian.',
  },
  {
    id: 4,
    title: 'Ganghwa dolmen',
    date: '1000 BCE',
    period: 'Bronze Age (Korean Peninsula)',
    medium: 'Stone (megalithic construction)',
    maker: 'Bronze Age culture of the Korean Peninsula',
    importance: 'Elite funerary monument or burial marker; shows hierarchy in Bronze Age Korea.',
  },
  {
    id: 5,
    title: 'Standing robed Sanxingdui deity figure on pedestal with missing staff',
    date: '1200–1000 BCE',
    period: 'late Shang period',
    medium: 'Bronze',
    maker: 'Sanxingdui culture',
    importance: 'Important because it breaks the “single origin” theory; shows an independent advanced bronze culture in Sichuan with an otherworldly style.',
  },
  {
    id: 6,
    title: 'Yu (lidded ritual wine vessel)',
    date: '1200–1046 BCE',
    period: 'late Shang dynasty',
    medium: 'Bronze',
    maker: 'Shang culture',
    importance: 'Peak of ritual bronze monumentality; the vessel and animal motif are fully unified, projecting Shang political and religious power.',
  },
  {
    id: 7,
    title: 'Taotie mask motif (bronze vessel decoration)',
    date: '1600–1046 BCE',
    period: 'Shang dynasty',
    medium: 'Bronze (cast relief decoration)',
    maker: 'identified by Max Loehr, created by Shang dynasty artisans',
    importance: 'Show Max Loehr’s five bronze styles, from thin linear decoration to raised relief motifs.',
  },
  {
    id: 8,
    title: 'Bronze Hu ritual vessel with Lotus and Crane',
    date: '770 BCE to 256 BCE',
    period: 'Eastern Zhou Period',
    medium: 'Bronze',
    maker: 'Eastern Zhou culture',
    importance: 'Marks the shift from rigid Shang bronzes to lively Eastern Zhou design; also tied to lost-wax casting and foreign influence.',
  },
  {
    id: 9,
    title: 'Bianhu vessel, bronze inlaid with silver',
    date: 'Warring States 400 - 300 BCE',
    period: '',
    medium: 'Bronze with silver',
    maker: 'Eastern Zhou dynasty',
    importance: 'Shows advanced inlay technique; flattened shape, not raised texture, but still geometric designs and animals.',
  },
  {
    id: 10,
    title: 'Bell set of Marquis Yi of Zeng',
    date: '433 BCE',
    period: 'Warring States period',
    medium: 'Bronze bells with lacquered wood frame',
    maker: 'Zeng state',
    importance: 'Earliest physical evidence of a sophisticated 12-tone system; links music, inscriptions, and elite ritual.',
  },
  {
    id: 11,
    title: 'Baihuatan Hu with narrative scenes (ritual wine vessel decoration)',
    date: 'Warring States 480 - 222 BCE',
    period: '',
    medium: 'Bronze (represented as an ink rubbing pattern)',
    maker: 'Eastern Zhou dynasty',
    importance: 'Shows the move from abstract animal motifs to scenes of daily life, ritual, and warfare.',
  },
  {
    id: 12,
    title: 'Sketch of Reconstructed Tomb showing lining of pit, tomb chamber and tripple coffin',
    date: 'Western Han 168 BCE',
    period: '',
    medium: 'educational drawing of tomb made from cypress wood planks surrounded by thick layers of charcoal and white kaolin clay',
    maker: 'Western Han Dynasty Mawangdui Tomb, ancient China',
    importance: 'advanced Han dynasty tomb engineering that created sealed environment for near perfect preservation',
  },
  {
    id: 13,
    title: 'Terracotta warrior and horse (from the tomb of the First Emperor, Qin Shihuangdi)',
    date: '210 BCE',
    period: 'Qin dynasty',
    medium: 'Terracotta (fired clay)',
    maker: 'Qin dynasty',
    importance: 'Reflects the Qin shift from chariot warfare to mobile cavalry and projects imperial military power into the afterlife.',
  },
  {
    id: 14,
    title: 'Kneeling Archer (Terracotta Army)',
    date: '221–206 BCE',
    period: 'Qin dynasty',
    medium: 'Terracotta with painted decoration (original pigments mostly lost)',
    maker: 'Commissioned by Qin Shi Huang, constructed by conscripted laborers and skilled artisans of Qin Dynasty',
    importance: 'Highlights organized Qin military tactics, especially alternating firing rows for continuous attack.',
  },
  {
    id: 15,
    title: 'Dogū (female figurine), Gunma',
    date: '1000–400 BCE',
    period: 'Late/Final Jōmon period',
    medium: 'Ceramic (earthenware)',
    maker: 'Jōmon culture',
    importance: 'Suggests a complex ritual life in prehistoric Japan, possibly tied to fertility, childbirth, or healing magic.',
  },
  {
    id: 16,
    title: 'Bronze chariot and horses (from the tomb of Qin Shi Huang)',
    date: '210 BCE',
    period: 'Qin dynasty',
    medium: 'Bronze with gold and silver inlay',
    maker: 'Commissioned by Qin Shi Huang, constructed by conscripted laborers and skilled artisans of Qin Dynasty, ancient China',
    importance: 'Shows complex bronze casting and mechanical engineering; reflects the emperor’s need for luxury transport after death.',
  },
  {
    id: 17,
    title: 'Han dynasty funerary figurines, Xian',
    date: '200-100 BCE',
    period: 'Western Han dynasty',
    medium: 'Terracotta',
    maker: 'Han dynasty, China',
    importance: 'Show a shift away from massive Qin tomb sculpture toward a more human-scale Han funerary world. Idea of terracotta tomb army spreading to other tombs. Individualistic unique faces.',
  },
  {
    id: 18,
    title: 'Haniwa warrior figure',
    date: '400-600 CE',
    period: 'Kofun period',
    medium: 'Ceramic',
    maker: 'Kofun, Japan',
    importance: 'Piecemeal construction, all using a coil method. Significant that it isn\'t a vessel.',
  },
  {
    id: 19,
    title: 'Flying Horse on a bird',
    date: '2nd century CE',
    period: 'Eastern Han dynasty',
    medium: 'Bronze',
    maker: 'eastern Han culture, China, tomb in Gansu',
    importance: 'Ability to capture movement, very dynamic',
  },
  {
    id: 20,
    title: 'TLV mirror',
    date: 'Eastern Han 100 – 200 CE',
    period: '',
    medium: 'Bronze',
    maker: 'Eastern Han dynasty',
    importance: 'Expresses Han cosmology through square earth, circular heavens, directional animals, and cosmic order.',
  },
  {
    id: 21,
    title: 'Lady Dai T shaped funeral silk banner',
    date: '200 BCE',
    period: 'Western Han dynasty',
    medium: 'Painted silk',
    maker: 'Han dynasty, China (Mawangdui tombs)',
    importance: 'Rare preserved silk banner mapping the afterlife in heavenly, earthly, and underworld zones.',
  },
  {
    id: 22,
    title: 'The Nymph of the Luo River',
    date: '4th century CE',
    period: 'Eastern Jin dynasty',
    medium: 'Ink and color on silk',
    maker: 'Gu Kaizhi',
    importance: 'Early elite figure painting tied to refined storytelling, emotion, and beauty described through nature.',
  },
  {
    id: 23,
    title: 'Sarcophagus relief with hunting scene',
    date: '520 CE',
    period: 'Northern Wei dynasty',
    medium: 'Stone relief',
    maker: 'Northern Wei dynasty, China',
    importance: 'Uses funerary narrative to teach Confucian filial piety.',
  },
  {
    id: 24,
    title: 'Buddha with attendant, Yungang Grottoes, cave 20',
    date: '470–480 CE',
    period: 'Northern Wei dynasty',
    medium: 'Sandstone',
    maker: 'Northern Wei dynasty, China',
    importance: 'Early monumental Buddhist cave sculpture in China; shows Central Asian and Gandharan influence coming through the Silk Road.',
  },
  {
    id: 25,
    title: 'Nine-Colored Deer mural (Mogao Caves, Dunhuang)',
    date: 'Northern Wei 386–534 CE',
    period: '',
    medium: 'Mural / wall painting (pigment on plaster)',
    maker: 'Northern Wei dynasty(Dunhuang)',
    importance: 'Buddhist narrative painting from Dunhuang; teaches karma and moral behavior through storytelling.',
  },
  {
    id: 26,
    title: 'Gilt-bronze Incense Burner of Baekje',
    date: '600–700 CE',
    period: 'Three Kingdoms period',
    medium: 'Bronze',
    maker: 'Baekje kingdom, Korea',
    importance: 'Sacred mountain form with dragon base and phoenix lid; mixes Daoist cosmology, Buddhist imagery, and Korean metalworking skill.',
  },
  {
    id: 27,
    title: 'Silla Gold Crown, from a royal tomb at Gyeongju',
    date: 'Three Kingdoms period 500 - 600 CE',
    period: '',
    medium: 'Gold with jade pendants (gogok)',
    maker: 'Silla kingdom, Korea',
    importance: 'Shows royal authority, steppe and shamanistic influence, and wide Eurasian exchange.',
  },
  {
    id: 28,
    title: 'Seven Sages of the Bamboo Grove, Nanjing China',
    date: '400 CE',
    period: 'Southern Dynasties period',
    medium: 'Molded brick',
    maker: 'Southern Dynasties, China',
    importance: 'Celebrates reclusion, spontaneity, and Daoist-style withdrawal from court life.',
  },
  {
    id: 29,
    title: 'Horse and groom relief, Tomb of Emperor Taizong',
    date: 'Tang 636 - 649 CE',
    period: '',
    medium: 'Stone relief',
    maker: 'Court sculptors under Emperor Taizong',
    importance: 'This relief is one of the famous Six Steeds of Emperor Taizong, commemorating the horses that helped him secure victory in battles leading to the founding of the Tang dynasty.',
  },
  {
    id: 30,
    title: 'Buddha Statue, Longmen Grottoes, Empress Wu',
    date: '675 CE',
    period: 'Tang dynasty',
    medium: 'Limestone (rock-cut sculpture)',
    maker: 'Tang dynasty China, imperial Buddhist sculptors under Empress Wu Zetian',
    importance: 'Mature Tang Buddhist sculpture with stronger modeling; also tied to Wu Zetian’s political legitimacy.',
  },
  {
    id: 31,
    title: 'Seated Buddha, Seokguram Grotto, Gyeongju',
    date: '751 CE',
    period: 'Unified Silla period',
    medium: 'Granite',
    maker: 'Unified Silla kingdom, Korea',
    importance: 'Masterpiece of Unified Silla Buddhist art showing strong technical control in granite.',
  },
  {
    id: 32,
    title: 'Night-Shining White',
    date: '750 CE',
    period: 'Tang dynasty',
    medium: 'Ink and color on paper',
    maker: 'Han Gan, China',
    importance: 'Famous Tang horse painting; reflects horses as symbols of power, status, and Central Asian contact.',
  },
  {
    id: 33,
    title: "Mural of Guest Envoys or Officials Greeting Foreign Envoys (Korean), from the Tomb of Crown Prince Zhanghuai Prince Li Xian's Tomb",
    date: '706 CE',
    period: 'Tang dynasty',
    medium: 'Wall painting / mural with pigments on plaster',
    maker: 'Tang dynasty, China',
    importance: 'Shows the cosmopolitan Tang court and diplomatic exchange along the Silk Road.',
  },
  {
    id: 34,
    title: 'Lady under a tree, Shosoin',
    date: 'Nara 750 CE',
    period: '',
    medium: 'Ink and color on paper',
    maker: 'Japanese artist during the nara period',
    importance: 'Japanese made, imitating Chinese paintings, Tang woman, Tang beauty.',
  },
  {
    id: 35,
    title: 'Sogdian Brocaded Silk Banner Lion Hunting',
    date: 'Tang Dynasty 700 CE',
    period: '',
    medium: 'Sogdian Brocaded Silk',
    maker: 'Made in china, Sogdian',
    importance: 'Gift from China to Japan. Shows luxury motifs traveling across East Asia through trade, migration, and adaptation.',
  },
  {
    id: 36,
    title: 'Shaka Triad, Horyuji',
    date: 'Asuka 623 CE',
    period: '',
    medium: 'Bronze',
    maker: 'Tori Busshi, Asuka-period Japan',
    importance: 'Shows the early establishment of Buddhism in Japan through Korean and Chinese influence.',
  },
  {
    id: 37,
    title: 'Hungry Tigris Jataka',
    date: 'Asuka 650 CE',
    period: '',
    medium: 'Lacquer and pigment on wood',
    maker: 'Hōryūji Buddhist temple workshop',
    importance: 'Shows one of the earliest Buddhist narrative paintings in Japan and broader East Asian artistic exchange.',
  },
];
const IMAGE_MAP = {
  1: "assets/images/item_01.png",
  2: "assets/images/item_02.png",
  3: "assets/images/item_03.png",
  4: "assets/images/item_04.png",
  5: "assets/images/item_05.png",
  6: "assets/images/item_06.png",
  7: "assets/images/item_07.png",
  8: "assets/images/item_08.png",
  9: "assets/images/item_09.png",
  10: "assets/images/item_10.png",
  11: "assets/images/item_11.png",
  12: "assets/images/item_12.png",
  13: "assets/images/item_13.png",
  14: "assets/images/item_14.png",
  15: "assets/images/item_15.png",
  16: "assets/images/item_16.png",
  17: "assets/images/item_17.png",
  18: "assets/images/item_18.png",
  19: "assets/images/item_19.png",
  20: "assets/images/item_20.png",
  21: "assets/images/item_21.png",
  22: "assets/images/item_22.png",
  23: "assets/images/item_23.png",
  24: "assets/images/item_24.png",
  25: "assets/images/item_25.png",
  26: "assets/images/item_26.png",
  27: "assets/images/item_27.png",
  28: "assets/images/item_28.png",
  29: "assets/images/item_29.png",
  30: "assets/images/item_30.png",
  31: "assets/images/item_31.png",
  32: "assets/images/item_32.png",
  33: "assets/images/item_33.png",
  34: "assets/images/item_34.png",
  35: "assets/images/item_35.png",
  36: "assets/images/item_36.png",
  37: "assets/images/item_37.png",
};

const BASE_STUDY_ITEMS = STUDY_ITEMS.map((item) => ({ ...item }));
const STORAGE_KEY = "east-asian-midterm-review-progress-v1";
const CARD_DATA_KEY = "east-asian-midterm-review-cards-v1";
const CARD_IMAGE_KEY = "east-asian-midterm-review-images-v1";
const INTERVALS = [1, 2, 4, 8, 14, 30];
const CHECK_INTERVALS = [1, 3, 6, 10, 16, 22];
const CHECK_FAIL_MULTIPLIER = 0.5;
const FULL_CHECK_STREAK_THRESHOLD = 3;
const FULL_CHECK_MIN_ATTEMPTS = 4;
const MASTERY_BOX_THRESHOLD = 4;
const MAX_ACTIVE_LEARNING_CARDS = 10;
const FULL_CHECK_PASS_INTERVAL_MULTIPLIER = 6;
const TEACH_REPEAT_COOLDOWN_TURNS = 2;
const EDITABLE_CARD_FIELDS = ["title", "date", "period", "medium", "maker", "importance"];

const CHECK_FIELDS = [
  { key: "title", label: "Name / title" },
  { key: "periodDate", label: "Date and period" },
  { key: "medium", label: "Medium" },
  { key: "maker", label: "Culture / maker" },
  { key: "importance", label: "Importance" },
];

applySavedStudyItems();
applyContentCorrections();
const customImageMap = loadCustomImageMap();
let state = loadState();
const teachState = {
  itemId: null,
  step: 0,
  checking: false,
  checkField: null,
  checkFields: [],
  checkDrafts: {},
  checkRevealed: false,
};
const flashState = { itemId: null, revealed: false };
const testState = {
  running: false,
  index: 0,
  itemIds: [],
  fieldKeys: [],
  imageSelection: "",
  drafts: {},
  revealed: false,
  correctCount: 0,
  wrongItemIds: [],
};
const quizState = { running: false, questions: [], index: 0, score: 0 };
const dbState = { itemId: STUDY_ITEMS[0] ? STUDY_ITEMS[0].id : null, editing: false };
let currentMode = "teach";

const modeButtons = Array.from(document.querySelectorAll(".mode-tab"));
const panels = {
  teach: document.getElementById("teach"),
  flash: document.getElementById("flash"),
  test: document.getElementById("test"),
  quiz: document.getElementById("quiz"),
  db: document.getElementById("db"),
};

const masteryBar = document.getElementById("masteryBar");
const masteryText = document.getElementById("masteryText");
const ringText = document.getElementById("ringText");
const ringProgress = document.getElementById("ringProgress");
const dueText = document.getElementById("dueText");
const dueSoonText = document.getElementById("dueSoonText");
const sessionInfo = document.getElementById("sessionInfo");
const teachCheck = document.getElementById("teachCheck");
const teachCheckPrompt = document.getElementById("teachCheckPrompt");
const teachCheckFields = document.getElementById("teachCheckFields");
const teachCheckReveal = document.getElementById("teachCheckReveal");
const teachCheckAnswer = document.getElementById("teachCheckAnswer");

const teachTitle = document.getElementById("teachTitle");
const teachHint = document.getElementById("teachHint");
const teachFacts = document.getElementById("teachFacts");
const teachReveal = document.getElementById("teachReveal");
const teachControls = document.getElementById("teachControls");
const teachRating = document.getElementById("teachRating");

const flashSub = document.getElementById("flashSub");
const flashBrowse = document.getElementById("flashBrowse");
const flashPrev = document.getElementById("flashPrev");
const flashNext = document.getElementById("flashNext");
const flashIndex = document.getElementById("flashIndex");
const flashViewerFlip = document.getElementById("flashViewerFlip");
const flashViewerInner = document.getElementById("flashViewerInner");
const flashViewerImage = document.getElementById("flashViewerImage");
const flashViewerTitle = document.getElementById("flashViewerTitle");
const flashViewerFacts = document.getElementById("flashViewerFacts");
const teachImage = document.getElementById("teachImage");

const testFieldOptions = document.getElementById("testFieldOptions");
const testStart = document.getElementById("testStart");
const testReset = document.getElementById("testReset");
const testSetupStatus = document.getElementById("testSetupStatus");
const testRun = document.getElementById("testRun");
const testProgress = document.getElementById("testProgress");
const testImage = document.getElementById("testImage");
const testPrompt = document.getElementById("testPrompt");
const testInputs = document.getElementById("testInputs");
const testReveal = document.getElementById("testReveal");
const testAnswer = document.getElementById("testAnswer");
const testFail = document.getElementById("testFail");
const testPass = document.getElementById("testPass");
const testStatus = document.getElementById("testStatus");
const testImageNumbers = document.getElementById("testImageNumbers");
const testWrongReview = document.getElementById("testWrongReview");
const testWrongSummary = document.getElementById("testWrongSummary");
const testRetryWrong = document.getElementById("testRetryWrong");

const quizIntro = document.getElementById("quizIntro");
const startQuiz = document.getElementById("startQuiz");
const quizContent = document.getElementById("quizContent");
const quizProgressText = document.getElementById("quizProgressText");
const quizBar = document.getElementById("quizBar");
const quizQuestion = document.getElementById("quizQuestion");
const quizChoices = document.getElementById("quizChoices");
const quizFeedback = document.getElementById("quizFeedback");
const quizNext = document.getElementById("quizNext");
const quizResult = document.getElementById("quizResult");
const quizImage = document.getElementById("quizImage");

const dbBrowse = document.getElementById("dbBrowse");
const dbEditor = document.getElementById("dbEditor");
const dbEditingLabel = document.getElementById("dbEditingLabel");
const dbImage = document.getElementById("dbImage");
const dbStatus = document.getElementById("dbStatus");
const dbTitle = document.getElementById("dbTitle");
const dbPeriodDate = document.getElementById("dbPeriodDate");
const dbMaker = document.getElementById("dbMaker");
const dbMedium = document.getElementById("dbMedium");
const dbImportance = document.getElementById("dbImportance");
const dbSave = document.getElementById("dbSave");
const dbReset = document.getElementById("dbReset");
const dbCancelEdit = document.getElementById("dbCancelEdit");
const dbDropzone = document.getElementById("dbDropzone");
const dbImageInput = document.getElementById("dbImageInput");
const dbPickImage = document.getElementById("dbPickImage");
const dbResetImage = document.getElementById("dbResetImage");

const FLASH_THUMB_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
const FLASH_THUMB_MAX_SIDE = 240;
const flashThumbCache = {};
const flashThumbPromiseCache = {};
let flashThumbObserver = null;

function buildDefaultCardState() {
  return {
    box: 1,
    nextDue: 1,
    attempts: 0,
    correct: 0,
    score: 0,
    lastSeenTurn: -1,
    checkDue: Number.MAX_SAFE_INTEGER,
    checkStreak: 0,
    taught: false,
  };
}

function getItemImage(itemId) {
  if (customImageMap[itemId]) return customImageMap[itemId];
  return IMAGE_MAP[itemId] || "assets/images/item_01.png";
}

function getPeriodAndDate(item) {
  const date = item.date ? String(item.date).trim() : "";
  const period = item.period ? String(item.period).trim() : "";

  if (date && period) return `${date}, ${period}`;
  return date || period;
}

function splitPeriodAndDate(value) {
  const text = value ? String(value).trim() : "";
  if (!text) return { date: "", period: "" };

  const parts = text.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length > 1) {
    return {
      date: parts[0],
      period: parts.slice(1).join(", "),
    };
  }

  return { date: text, period: "" };
}

function applySavedStudyItems() {
  try {
    const raw = localStorage.getItem(CARD_DATA_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (!Array.isArray(parsed) || parsed.length !== BASE_STUDY_ITEMS.length) return;

    const byId = new Map(parsed.map((item) => [item.id, item]));
    STUDY_ITEMS.forEach((item) => {
      const saved = byId.get(item.id);
      if (!saved || typeof saved !== "object") return;
      EDITABLE_CARD_FIELDS.forEach((field) => {
        if (typeof saved[field] === "string") {
          item[field] = saved[field];
        }
      });
    });
  } catch (err) {
    console.warn("Could not restore saved card edits.", err);
  }
}

function applyContentCorrections() {
  const baihuatan = STUDY_ITEMS.find((item) => item.id === 11);
  if (baihuatan && baihuatan.medium === "Bronze with inlay (silver and copper)") {
    baihuatan.medium = "Bronze (represented as an ink rubbing pattern)";
  }
  const marquisTomb = STUDY_ITEMS.find((item) => item.id === 12);
  if (marquisTomb && marquisTomb.title === "Tomb of Marquis Yi of Zeng (tomb complex reconstruction)") {
    marquisTomb.title = "Sketch of Reconstructed Tomb showing lining of pit, tomb chamber and tripple coffin";
  }
  if (marquisTomb && marquisTomb.date === "433 BCE") {
    marquisTomb.date = "Western Han 168 BCE";
  }
  if (marquisTomb && marquisTomb.period === "Warring States period") {
    marquisTomb.period = "";
  }
  if (marquisTomb && marquisTomb.maker === "Western Han Dynasty") {
    marquisTomb.maker = "Western Han Dynasty Mawangdui Tomb, ancient China";
  }
  if (marquisTomb && marquisTomb.medium === "Wood, lacquer, bronze grave goods (tomb architecture and burial objects)") {
    marquisTomb.medium = "educational drawing of tomb made from cypress wood planks surrounded by thick layers of charcoal and white kaolin clay";
  }
  if (marquisTomb && marquisTomb.importance === "Shows elaborate tomb engineering and the creation of a sealed burial environment filled with elite objects.") {
    marquisTomb.importance = "advanced Han dynasty tomb engineering that created sealed environment for near perfect preservation";
  }
  const bianhu = STUDY_ITEMS.find((item) => item.id === 9);
  if (bianhu && bianhu.title === "Bianhu flask, bronze inlaid with silver") {
    bianhu.title = "Bianhu vessel, bronze inlaid with silver";
  }
  if (bianhu && bianhu.importance === "Shows advanced inlay technique; flattened shape may imitate nomadic leather water skins.") {
    bianhu.importance = "Shows advanced inlay technique; flattened shape, not raised texture, but still geometric designs and animals.";
  }
  const bellSet = STUDY_ITEMS.find((item) => item.id === 10);
  if (bellSet && bellSet.title === "Bianzhong (bell set of Marquis Yi of Zeng)") {
    bellSet.title = "Bell set of Marquis Yi of Zeng";
  }
  const hanFigurines = STUDY_ITEMS.find((item) => item.id === 17);
  if (hanFigurines && hanFigurines.title === "Han Dynasty Yangling terracotta tomb attendants of Emperor Jing’s tomb") {
    hanFigurines.title = "Han dynasty funerary figurines, Xian";
  }
  if (hanFigurines && hanFigurines.date === "141–87 BCE") {
    hanFigurines.date = "200-100 BCE";
  }
  if (hanFigurines && hanFigurines.medium === "Terracotta (painted clay, clothing originally added separately)") {
    hanFigurines.medium = "Terracotta";
  }
  if (hanFigurines && hanFigurines.importance === "Show a shift away from massive Qin tomb sculpture toward a more human-scale Han funerary world.") {
    hanFigurines.importance = "Show a shift away from massive Qin tomb sculpture toward a more human-scale Han funerary world. Idea of terracotta tomb army spreading to other tombs. Individualistic unique faces.";
  }
  const haniwa = STUDY_ITEMS.find((item) => item.id === 18);
  if (haniwa && haniwa.date === "6th century CE") {
    haniwa.date = "400-600 CE";
  }
  if (haniwa && haniwa.medium === "Ceramic (earthenware)") {
    haniwa.medium = "Ceramic";
  }
  if (haniwa && haniwa.maker === "Japan") {
    haniwa.maker = "Kofun, Japan";
  }
  if (haniwa && haniwa.importance === "Realistically detailed kofun tomb sculpture; shows militarization and elite burial practice in early Japan.") {
    haniwa.importance = "Piecemeal construction, all using a coil method. Significant that it isn't a vessel.";
  }
  const flyingHorse = STUDY_ITEMS.find((item) => item.id === 19);
  if (flyingHorse && flyingHorse.title === "Flying Horse of Gansu") {
    flyingHorse.title = "Flying Horse on a bird";
  }
  if (flyingHorse && flyingHorse.maker === "Han dynasty, China") {
    flyingHorse.maker = "eastern Han culture, China, tomb in Gansu";
  }
  if (flyingHorse && flyingHorse.importance === "Famous for dynamic balance and vivid animal portraiture; tied in the sheet to the “heavenly horse.”") {
    flyingHorse.importance = "Ability to capture movement, very dynamic";
  }
  const yungang = STUDY_ITEMS.find((item) => item.id === 24);
  if (yungang && (yungang.title === "Colossal Buddha with attendant, Yungang Grottoes" || yungang.title === "Shakyamuni Buddha with attendant, Yungang Grottoes")) {
    yungang.title = "Buddha with attendant, Yungang Grottoes, cave 20";
  }
  if (yungang && yungang.medium === "Sandstone (rock-cut sculpture)") {
    yungang.medium = "Sandstone";
  }
  const sevenSages = STUDY_ITEMS.find((item) => item.id === 28);
  if (sevenSages && sevenSages.title === "Seven Sages of the Bamboo Grove (with Rong Qiqi)") {
    sevenSages.title = "Seven Sages of the Bamboo Grove, Nanjing China";
  }
  if (sevenSages && sevenSages.date === "5th century CE") {
    sevenSages.date = "400 CE";
  }
  if (sevenSages && sevenSages.medium === "Drawing and rubbing of brick mural relief") {
    sevenSages.medium = "Molded brick";
  }
  const horseRelief = STUDY_ITEMS.find((item) => item.id === 29);
  if (horseRelief && (horseRelief.title === "Horse and groom relief (Northern Wei tomb relief)" || horseRelief.title === "Stone relief of a horse from the Six Steeds of Zhao Mausoleum (Zhaoling), tomb of Emperor Taizong.")) {
    horseRelief.title = "Horse and groom relief, Tomb of Emperor Taizong";
  }
  if (horseRelief && horseRelief.medium === "stone relief (carved limestone)") {
    horseRelief.medium = "Stone relief";
  }
  if (horseRelief && horseRelief.maker === "Court sculptors under Emperor Taizong (designed by the court artist Yan Liben)") {
    horseRelief.maker = "Court sculptors under Emperor Taizong";
  }
  if (horseRelief && horseRelief.importance === "This relief is one of the famous Six Steeds of Emperor Taizong, commemorating the horses that helped him secure victory in battles leading to the founding of the Tang dynasty. The sculptures reflect Tang ideals of imperial power, military achievement, and realism in animal depiction, and were originally installed at Taizong’s mausoleum complex. Earliest and most famous funerary sculpture example from Tang The style is plain, powerful, and vigorous. The modeling is relatively flat, suggesting influence from linear painting traditions. These sculptures were placed along the “spirit way” (sacred path) leading to the emperor’s tomb.") {
    horseRelief.importance = "This relief is one of the famous Six Steeds of Emperor Taizong, commemorating the horses that helped him secure victory in battles leading to the founding of the Tang dynasty.";
  }
  const longmen = STUDY_ITEMS.find((item) => item.id === 30);
  if (longmen && longmen.title === "Fengxiansi, Longmen Grottoes, Luoyang") {
    longmen.title = "Buddha Statue, Longmen Grottoes, Empress Wu";
  }
  const seokguram = STUDY_ITEMS.find((item) => item.id === 31);
  if (seokguram && seokguram.title === "Seated Buddha, Seokguram Grotto") {
    seokguram.title = "Seated Buddha, Seokguram Grotto, Gyeongju";
  }
  const ladyShosoin = STUDY_ITEMS.find((item) => item.id === 34);
  if (ladyShosoin && ladyShosoin.title === "Lady under a tree") {
    ladyShosoin.title = "Lady under a tree, Shosoin";
  }
  if (ladyShosoin && ladyShosoin.maker === "unknown japanese artist during the nara period") {
    ladyShosoin.maker = "Japanese artist during the nara period";
  }
  if (ladyShosoin && ladyShosoin.importance === "even though the painting depicts a Tang Dynasty women, it is widely known as a japanese painting. this shows the influence China had on the japanese arts at the time.") {
    ladyShosoin.importance = "Japanese made, imitating Chinese paintings, Tang woman, Tang beauty.";
  }
  const sogdianBanner = STUDY_ITEMS.find((item) => item.id === 35);
  if (sogdianBanner && sogdianBanner.title === "Sogdian Brocade Banner") {
    sogdianBanner.title = "Sogdian Brocaded Silk Banner Lion Hunting";
  }
  if (sogdianBanner && sogdianBanner.date === "Tang early 700 CE") {
    sogdianBanner.date = "Tang Dynasty 700 CE";
  }
  if (sogdianBanner && sogdianBanner.medium === "Silk textile (weft-faced compound twill)") {
    sogdianBanner.medium = "Sogdian Brocaded Silk";
  }
  if (sogdianBanner && sogdianBanner.maker === "Sogdian textile workshop in Tang China (often associated with the artisan He Chou)") {
    sogdianBanner.maker = "Made in china, Sogdian";
  }
  if (sogdianBanner && sogdianBanner.importance === "Shows luxury motifs traveling across East Asia through trade, migration, and adaptation.") {
    sogdianBanner.importance = "Gift from China to Japan. Shows luxury motifs traveling across East Asia through trade, migration, and adaptation.";
  }
  const shakaTriad = STUDY_ITEMS.find((item) => item.id === 36);
  if (shakaTriad && shakaTriad.title === "Shaka Triad") {
    shakaTriad.title = "Shaka Triad, Horyuji";
  }
  const hungryTigris = STUDY_ITEMS.find((item) => item.id === 37);
  if (hungryTigris && hungryTigris.title === "Shashin Shiko") {
    hungryTigris.title = "Hungry Tigris Jataka";
  }
}

function saveStudyItems() {
  try {
    localStorage.setItem(CARD_DATA_KEY, JSON.stringify(STUDY_ITEMS));
  } catch (err) {
    console.warn("Could not save card edits.", err);
  }
}

function loadCustomImageMap() {
  try {
    const raw = localStorage.getItem(CARD_IMAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (!parsed || typeof parsed !== "object") return {};

    const cleaned = {};
    Object.entries(parsed).forEach(([key, value]) => {
      if (typeof value === "string" && value.startsWith("data:image/")) {
        cleaned[Number(key)] = value;
      }
    });
    return cleaned;
  } catch (err) {
    console.warn("Could not restore saved card images.", err);
    return {};
  }
}

function saveCustomImageMap() {
  try {
    localStorage.setItem(CARD_IMAGE_KEY, JSON.stringify(customImageMap));
    return true;
  } catch (err) {
    console.warn("Could not save card image.", err);
    return false;
  }
}

function resetCustomImage(itemId) {
  if (!customImageMap[itemId]) return true;
  delete customImageMap[itemId];
  return saveCustomImageMap();
}

function resetStudyItemFromBase(itemId) {
  const item = STUDY_ITEMS.find((entry) => entry.id === itemId);
  const base = BASE_STUDY_ITEMS.find((entry) => entry.id === itemId);
  if (!item || !base) return false;
  EDITABLE_CARD_FIELDS.forEach((field) => {
    item[field] = base[field];
  });
  return true;
}

const revealSequence = [
  { key: "title", label: "Name / title" },
  { key: "periodDate", label: "Date and period" },
  { key: "medium", label: "Medium" },
  { key: "maker", label: "Culture / maker" },
  { key: "importance", label: "Importance" },
];

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && parsed.cards) {
      const cards = {};
      STUDY_ITEMS.forEach((item) => {
        const stored = parsed.cards[item.id] || {};
        cards[item.id] = {
          ...buildDefaultCardState(),
          ...stored,
          checkDue: Number.isFinite(stored.checkDue) ? stored.checkDue : Number.MAX_SAFE_INTEGER,
          checkStreak: Number.isFinite(stored.checkStreak) ? stored.checkStreak : 0,
          lastSeenTurn: Number.isFinite(stored.lastSeenTurn) ? stored.lastSeenTurn : -1,
          taught: typeof stored.taught === "boolean"
            ? stored.taught
            : Boolean(Number.isFinite(stored.attempts) && stored.attempts > 0),
        };
      });
      return {
        turn: Number.isFinite(parsed.turn) ? parsed.turn : 1,
        cards,
        session: {
          ...buildDefaultSessionState(),
          ...(parsed.session || {}),
        },
      };
    }
  } catch (err) {
    console.warn("Could not restore local state.", err);
  }

  const cards = {};
  STUDY_ITEMS.forEach((item) => {
    cards[item.id] = buildDefaultCardState();
  });
  return {
    turn: 1,
    cards,
    session: buildDefaultSessionState(),
  };
}

function saveState() {
  try {
    syncSessionToState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn("Could not save local state.", err);
  }
}

function applyStateCorrections() {
  if (!state || !state.cards) return;
  STUDY_ITEMS.forEach((item) => {
    const card = state.cards[item.id];
    if (!card) return;
    if (!Number.isFinite(card.lastSeenTurn)) {
      card.lastSeenTurn = -1;
    }
    if (!card.taught && card.attempts > 0) {
      card.taught = true;
    }
  });
}

function setMode(mode, options = {}) {
  const preserveTeachState = Boolean(options.preserveTeachState);
  modeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  Object.entries(panels).forEach(([key, panel]) => {
    panel.classList.toggle("active", key === mode);
  });
  currentMode = mode;

  if (mode === "teach") {
    startTeachSession(!preserveTeachState);
  }

  if (mode === "flash") {
    startFlashSession();
  }

  if (mode === "test") {
    startCustomTestMode();
  }

  if (mode === "quiz") {
    resetQuizView();
  }

  if (mode === "db") {
    renderDbEditor();
  }

  saveState();
}

function startTeachSession(force = false) {
  if (!teachState.itemId || force) {
    selectNextTeachItem();
  }
  renderTeachCard();
}

function selectNextTeachItem(options = {}) {
  const avoidItemId = Number.isFinite(options.avoidItemId) ? options.avoidItemId : null;
  const seen = STUDY_ITEMS.filter((item) => state.cards[item.id].attempts > 0);
  const unseen = STUDY_ITEMS.filter((item) => state.cards[item.id].attempts === 0);
  const learningPool = seen.filter((item) => state.cards[item.id].box < MASTERY_BOX_THRESHOLD);
  const checkNow = learningPool.filter((item) => state.cards[item.id].taught && state.cards[item.id].checkDue <= state.turn);
  const dueLearning = learningPool.filter((item) => state.cards[item.id].nextDue <= state.turn);
  const canIntroduceNew = learningPool.length < MAX_ACTIVE_LEARNING_CARDS;

  let candidates = STUDY_ITEMS;
  let selectionMode = "due";
  if (canIntroduceNew && unseen.length) {
    candidates = unseen;
    selectionMode = "unseen";
  } else if (checkNow.length) {
    candidates = checkNow;
    selectionMode = "check";
  } else if (dueLearning.length) {
    candidates = dueLearning;
    selectionMode = "due";
  } else if (learningPool.length) {
    candidates = learningPool;
    selectionMode = "due";
  } else if (unseen.length) {
    candidates = unseen;
    selectionMode = "unseen";
  } else if (seen.length) {
    candidates = seen;
    selectionMode = "due";
  }

  const sorted = candidates.slice().sort((a, b) => {
    const pa = state.cards[a.id];
    const pb = state.cards[b.id];
    if (selectionMode === "check") {
      return pa.checkDue - pb.checkDue || pa.lastSeenTurn - pb.lastSeenTurn || pa.box - pb.box || a.id - b.id;
    }
    if (selectionMode === "unseen") {
      return a.id - b.id;
    }
    return pa.nextDue - pb.nextDue || pa.lastSeenTurn - pb.lastSeenTurn || pa.box - pb.box || a.id - b.id;
  });

  const pickCandidate = (pool) => {
    if (!pool.length) return { item: null, usedCooldown: false };
    const cooldownMatch = pool.find((item) => {
      if (avoidItemId !== null && item.id === avoidItemId) return false;
      const lastSeen = Number.isFinite(state.cards[item.id].lastSeenTurn) ? state.cards[item.id].lastSeenTurn : -1;
      return state.turn - lastSeen > TEACH_REPEAT_COOLDOWN_TURNS;
    });
    if (cooldownMatch) return { item: cooldownMatch, usedCooldown: true };
    const avoidMatch = pool.find((item) => avoidItemId === null || item.id !== avoidItemId);
    return { item: (avoidMatch || pool[0]), usedCooldown: false };
  };

  let picked = pickCandidate(sorted);
  let nextItem = picked.item;
  const shouldFallbackToPool = selectionMode !== "unseen" && learningPool.length > 1 && (!picked.usedCooldown);
  if (shouldFallbackToPool) {
    const poolSorted = learningPool.slice().sort((a, b) => {
      const pa = state.cards[a.id];
      const pb = state.cards[b.id];
      return pa.lastSeenTurn - pb.lastSeenTurn || pa.nextDue - pb.nextDue || pa.box - pb.box || a.id - b.id;
    });
    const poolPick = pickCandidate(poolSorted);
    if (poolPick.item) {
      nextItem = poolPick.item;
      picked = poolPick;
    }
  }
  if (!nextItem && STUDY_ITEMS.length) {
    const fallback = avoidItemId === null
      ? STUDY_ITEMS[0]
      : (STUDY_ITEMS.find((item) => item.id !== avoidItemId) || STUDY_ITEMS[0]);
    nextItem = fallback;
  }

  teachState.itemId = nextItem ? nextItem.id : null;
  const nextCardState = teachState.itemId ? state.cards[teachState.itemId] : null;
  const isAlreadyTaught = Boolean(nextCardState && (nextCardState.taught || nextCardState.attempts > 0));
  if (isAlreadyTaught) {
    teachState.step = revealSequence.length;
  } else {
    teachState.step = 0;
  }
}

function renderTeachCard() {
  const item = STUDY_ITEMS.find((x) => x.id === teachState.itemId);
  if (!item) {
    selectNextTeachItem();
    renderTeachCard();
    return;
  }

  const cardState = state.cards[item.id];
  if (cardState && cardState.attempts > 0 && !cardState.taught) {
    cardState.taught = true;
    saveState();
  }
  if (cardState && cardState.taught && teachState.step < revealSequence.length) {
    teachState.step = revealSequence.length;
  }
  if (teachState.checking) {
    renderTeachCheck(item, cardState, { forceFields: teachState.checkFields, restoreDrafts: true });
    return;
  }
  const shouldAutoCheck = teachState.step === 0 && isCheckDue(cardState);
  if (shouldAutoCheck) {
    renderTeachCheck(item, cardState);
    return;
  }

  const isComplete = teachState.step >= revealSequence.length;
  if (isComplete && !cardState.taught) {
    cardState.taught = true;
    if (cardState.attempts > 0 && cardState.checkDue === Number.MAX_SAFE_INTEGER) {
      cardState.checkDue = state.turn + CHECK_INTERVALS[Math.max(1, Math.min(CHECK_INTERVALS.length - 1, cardState.box))];
    }
    saveState();
  }
  teachTitle.textContent = isComplete ? item.title : "Identify this artwork";
  teachHint.textContent = `Reveal ${revealSequence[Math.min(teachState.step, revealSequence.length - 1)].label} to continue.`;
  teachFacts.innerHTML = "";
  teachFacts.classList.remove("hidden");

  revealSequence.forEach((entry, index) => {
    const line = document.createElement("p");
    line.className = "fact-line";
    const isHidden = teachState.step <= index;
    if (isHidden) {
      line.classList.add("hidden-line");
    }
    const value = isHidden
      ? "—"
      : entry.key === "periodDate"
        ? getPeriodAndDate(item)
        : item[entry.key] || "";
    line.innerHTML = `<strong>${entry.label}:</strong> <span class="line-value">${value}</span>`;
    teachFacts.appendChild(line);
  });

  teachImage.src = getItemImage(item.id);
  teachImage.alt = `Reference image for ${isComplete ? item.title : "artwork identification"}`;

  if (teachState.step < revealSequence.length) {
    const nextLabel = revealSequence[teachState.step].label;
    teachReveal.textContent = `Reveal ${nextLabel}`;
    teachReveal.disabled = false;
    if (teachControls) teachControls.classList.remove("hidden");
    teachCheck.classList.add("hidden");
    teachRating.classList.add("hidden");
  } else {
    if (teachControls) teachControls.classList.add("hidden");
    teachCheck.classList.add("hidden");
    teachRating.classList.remove("hidden");
    teachHint.textContent = "Rate this item to schedule your next review.";
  }

  sessionInfo.textContent = `Current mastery: box ${cardState.box} / 5`;
  teachState.checking = false;
  teachState.checkField = null;
  teachState.checkFields = [];
  teachState.checkDrafts = {};
  teachState.checkRevealed = false;
}

function isCheckDue(cardState) {
  return cardState && cardState.taught && cardState.attempts > 0 && cardState.checkDue <= state.turn;
}

function shouldUseFullCheck(cardState) {
  return (
    cardState &&
    cardState.attempts >= FULL_CHECK_MIN_ATTEMPTS &&
    cardState.box >= 3 &&
    Number.isFinite(cardState.checkStreak) &&
    cardState.checkStreak >= FULL_CHECK_STREAK_THRESHOLD
  );
}

function pickTeachCheckField(itemId) {
  return CHECK_FIELDS[(state.turn + itemId) % CHECK_FIELDS.length];
}

function checkIntervalForItem(cardState, passed) {
  const idx = Math.max(1, Math.min(cardState.box, CHECK_INTERVALS.length - 1));
  const base = CHECK_INTERVALS[idx];
  if (passed) {
    const streak = Number.isFinite(cardState.checkStreak) ? cardState.checkStreak : 0;
    return base + Math.round(streak * CHECK_FAIL_MULTIPLIER);
  }
  return Math.max(2, Math.floor(base * CHECK_FAIL_MULTIPLIER));
}

function renderTeachCheck(item, cardState, options = {}) {
  const forcedFields = Array.isArray(options.forceFields) && options.forceFields.length ? options.forceFields : null;
  const useFullCheck = forcedFields ? forcedFields.length > 1 : shouldUseFullCheck(cardState);
  const fields = forcedFields || (useFullCheck ? CHECK_FIELDS : [pickTeachCheckField(item.id)]);
  const restoring = Boolean(options.restoreDrafts);
  teachState.checking = true;
  teachState.checkField = fields[0];
  teachState.checkFields = fields;
  if (!restoring) {
    teachState.checkDrafts = {};
    teachState.checkRevealed = false;
  }
  teachTitle.textContent = "Identify this artwork";
  teachHint.textContent = `Quick check: type ${useFullCheck ? "all fields" : "one field"} you recall, then confirm if you were correct.`;
  teachFacts.classList.add("hidden");
  teachFacts.innerHTML = "";
  if (teachControls) teachControls.classList.add("hidden");
  teachRating.classList.add("hidden");
  teachImage.src = getItemImage(item.id);
  teachImage.alt = "Reference image for a recall check";

  teachCheck.classList.remove("hidden");
  teachCheckPrompt.textContent = useFullCheck ? "Recall all fields for this artwork." : `Recall: ${fields[0].label}`;
  renderTeachCheckInputs(fields);
  if (restoring) {
    const drafts = teachState.checkDrafts && typeof teachState.checkDrafts === "object" ? teachState.checkDrafts : {};
    teachCheckFields.querySelectorAll("textarea[data-field]").forEach((input) => {
      const value = drafts[input.dataset.field];
      input.value = typeof value === "string" ? value : "";
    });
  }
  teachCheckAnswer.classList.add("hidden");
  teachCheckAnswer.textContent = "";
  teachCheckReveal.textContent = useFullCheck ? "Reveal all keys" : "Reveal key";
  teachCheckReveal.dataset.revealed = "false";
  if (restoring && teachState.checkRevealed) {
    revealTeachCheckAnswer();
  }

  sessionInfo.textContent = `Check mode active (box ${cardState.box} / 5)`;
  saveState();
}

function revealTeachCheckAnswer() {
  if (!teachState.itemId) return;
  const item = STUDY_ITEMS.find((item) => item.id === teachState.itemId);
  if (!item) return;
  const fields = teachState.checkFields.length
    ? teachState.checkFields
    : (teachState.checkField ? [teachState.checkField] : []);
  if (!fields.length) return;
  const wasRevealed = teachCheckReveal.dataset.revealed === "true";
  const revealLabel = (teachState.checkFields.length > 1 ? "all keys" : "key");
  if (wasRevealed) {
    teachCheckAnswer.classList.add("hidden");
    teachCheckReveal.textContent = `Reveal ${revealLabel}`;
    teachCheckReveal.dataset.revealed = "false";
    teachState.checkRevealed = false;
    saveState();
    return;
  }
  teachCheckAnswer.innerHTML = fields
    .map((entry) => `<strong>${entry.label}:</strong> ${getFieldValue(item, entry.key)}`)
    .join("<br>");
  teachCheckAnswer.classList.remove("hidden");
  teachCheckReveal.textContent = "Hide key";
  teachCheckReveal.dataset.revealed = "true";
  teachState.checkRevealed = true;
  saveState();
}

function renderTeachCheckInputs(fields) {
  teachCheckFields.innerHTML = "";
  fields.forEach((entry) => {
    const wrapper = document.createElement("div");
    wrapper.className = "check-field";

    const label = document.createElement("label");
    label.className = "check-field-label";
    label.textContent = entry.label;

    const input = document.createElement("textarea");
    input.className = "text-input";
    input.rows = 3;
    input.placeholder = `Type your best memory for ${entry.label}...`;
    input.dataset.field = entry.key;

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    teachCheckFields.appendChild(wrapper);
  });
}

function launchQuickConfetti(anchorElement) {
  if (!anchorElement || !document.body) return;

  const rect = anchorElement.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const colors = ["#f7b32b", "#f25f5c", "#70c1b3", "#2f5f8a", "#5f4e8d", "#f2e8cf"];
  const layer = document.createElement("div");
  layer.style.position = "fixed";
  layer.style.inset = "0";
  layer.style.pointerEvents = "none";
  layer.style.zIndex = "9999";
  document.body.appendChild(layer);

  const pieces = 26;
  for (let i = 0; i < pieces; i += 1) {
    const piece = document.createElement("span");
    piece.style.position = "absolute";
    piece.style.left = `${originX}px`;
    piece.style.top = `${originY}px`;
    piece.style.width = `${6 + Math.floor(Math.random() * 6)}px`;
    piece.style.height = `${10 + Math.floor(Math.random() * 7)}px`;
    piece.style.borderRadius = "2px";
    piece.style.background = colors[i % colors.length];
    piece.style.opacity = "0.95";

    const dx = (Math.random() - 0.5) * 220;
    const lift = -70 - Math.random() * 150;
    const fall = 140 + Math.random() * 170;
    const drift = (Math.random() - 0.5) * 70;
    const spin = (Math.random() - 0.5) * 700;
    const duration = 1500 + Math.random() * 500;

    piece.animate(
      [
        { transform: "translate(-50%, -50%) rotate(0deg)", opacity: 0.95 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${lift}px)) rotate(${spin * 0.45}deg)`, opacity: 0.95, offset: 0.42 },
        { transform: `translate(calc(-50% + ${dx + drift}px), calc(-50% + ${fall}px)) rotate(${spin}deg)`, opacity: 0 },
      ],
      {
        duration,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      },
    );

    layer.appendChild(piece);
  }

  window.setTimeout(() => {
    if (layer.parentNode) layer.parentNode.removeChild(layer);
  }, 2300);
}

function submitTeachCheck(passed, triggerElement = null) {
  const itemId = teachState.itemId;
  if (!itemId) return;
  const isFullFieldCheck = teachState.checkFields.length > 1;

  if (passed) {
    launchQuickConfetti(triggerElement);
    rateItem(itemId, isFullFieldCheck ? "easy" : "good", { deferRender: true });
  } else {
    rateItem(itemId, "again", { deferRender: true });
  }

  const card = state.cards[itemId];
  if (card) {
    if (passed) {
      const priorStreak = Number.isFinite(card.checkStreak) ? card.checkStreak : 0;
      card.checkStreak = priorStreak + (isFullFieldCheck ? 2 : 1);
      const baseInterval = checkIntervalForItem(card, true);
      const multiplier = isFullFieldCheck ? FULL_CHECK_PASS_INTERVAL_MULTIPLIER : 1;
      card.checkDue = state.turn + Math.max(4, Math.round(baseInterval * multiplier));
    } else {
      card.checkStreak = 0;
      card.checkDue = state.turn + checkIntervalForItem(card, false);
    }
  }

  teachState.checking = false;
  teachState.checkField = null;
  teachState.checkFields = [];
  teachState.checkDrafts = {};
  teachState.checkRevealed = false;
  if (teachCheckFields) {
    teachCheckFields.querySelectorAll("textarea[data-field]").forEach((input) => {
      input.value = "";
    });
  }
  teachCheckAnswer.classList.add("hidden");
  teachCheckAnswer.textContent = "";
  teachCheckReveal.dataset.revealed = "false";

  saveState();
  selectNextTeachItem({ avoidItemId: itemId });
  renderTeachCard();
}

function revealTeachStep() {
  const previousStep = teachState.step;
  teachState.step = Math.min(revealSequence.length, teachState.step + 1);
  if (teachState.itemId && previousStep < revealSequence.length && teachState.step >= revealSequence.length) {
    const card = state.cards[teachState.itemId];
    if (card && !card.taught) {
      card.taught = true;
      if (card.attempts > 0 && card.checkDue === Number.MAX_SAFE_INTEGER) {
        card.checkDue = state.turn + CHECK_INTERVALS[Math.max(1, Math.min(CHECK_INTERVALS.length - 1, card.box))];
      }
    }
  }
  saveState();
  renderTeachCard();
}

function rateItem(itemId, grade, options = {}) {
  const deferRender = Boolean(options.deferRender);
  const card = state.cards[itemId];
  if (!card) return;

  if (grade === "again") {
    card.box = Math.max(1, card.box - 1);
  } else if (grade === "hard") {
    card.box = Math.max(1, card.box);
  } else if (grade === "good") {
    card.box = Math.min(5, card.box + 1);
    card.correct += 1;
  } else if (grade === "easy") {
    card.box = 5;
    card.correct += 2;
  }

  card.attempts += 1;
  card.lastSeenTurn = state.turn;
  const interval = INTERVALS[Math.max(0, Math.min(INTERVALS.length - 1, card.box))];
  card.nextDue = state.turn + interval;
  card.score = Math.max(card.score, card.box);
  if (card.taught && card.checkDue === Number.MAX_SAFE_INTEGER) {
    card.checkDue = state.turn + CHECK_INTERVALS[Math.max(1, Math.min(CHECK_INTERVALS.length - 1, card.box))];
  }
  state.turn += 1;

  saveState();
  refreshProgress();
  if (!deferRender) {
    selectNextTeachItem({ avoidItemId: itemId });
    renderTeachCard();
  }
}

function startFlashSession() {
  if (!isValidItemId(flashState.itemId) && STUDY_ITEMS.length) {
    flashState.itemId = STUDY_ITEMS[0].id;
  }
  renderFlashGallery();
  setFlashActiveThumbnail(flashState.itemId, { scroll: true });
  renderFlashViewer();
}

function createFlashThumbnailDataUrl(source, maxSide = FLASH_THUMB_MAX_SIDE) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const ratio = Math.min(1, maxSide / Math.max(image.width || 1, image.height || 1));
      const width = Math.max(1, Math.round((image.width || 1) * ratio));
      const height = Math.max(1, Math.round((image.height || 1) * ratio));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(source);
        return;
      }
      ctx.fillStyle = "#fdf6e9";
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(image, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.76));
    };
    image.onerror = () => resolve(source);
    image.src = source;
  });
}

function ensureFlashThumbObserver() {
  if (flashThumbObserver || !flashBrowse || typeof IntersectionObserver === "undefined") return;
  flashThumbObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const image = entry.target;
        loadFlashThumbForImage(image);
        observer.unobserve(image);
      });
    },
    {
      root: flashBrowse,
      rootMargin: "220px 0px",
      threshold: 0.01,
    },
  );
}

function loadFlashThumbForImage(image) {
  if (!image || image.dataset.loaded === "true") return;
  const itemId = Number(image.dataset.itemId);
  if (!isValidItemId(itemId)) return;
  image.dataset.loaded = "true";

  if (!customImageMap[itemId]) {
    image.src = getItemImage(itemId);
    return;
  }

  if (flashThumbCache[itemId]) {
    image.src = flashThumbCache[itemId];
    return;
  }

  if (!flashThumbPromiseCache[itemId]) {
    flashThumbPromiseCache[itemId] = createFlashThumbnailDataUrl(customImageMap[itemId]).then((thumb) => {
      flashThumbCache[itemId] = thumb || customImageMap[itemId];
      return flashThumbCache[itemId];
    });
  }
  flashThumbPromiseCache[itemId].then((thumb) => {
    image.src = thumb || customImageMap[itemId];
  });
}

function queueFlashThumbLoad(image) {
  if (!image) return;
  if (flashThumbObserver) {
    flashThumbObserver.observe(image);
    return;
  }
  loadFlashThumbForImage(image);
}

function setFlashActiveThumbnail(itemId, options = {}) {
  if (!flashBrowse) return;
  const shouldScroll = Boolean(options.scroll);
  const activeButton = flashBrowse.querySelector(`[data-flash-item="${itemId}"]`);
  flashBrowse.querySelectorAll("[data-flash-item]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.flashItem) === itemId);
  });
  if (!activeButton) return;
  const activeImage = activeButton.querySelector("img[data-item-id]");
  if (activeImage) loadFlashThumbForImage(activeImage);
  if (shouldScroll) {
    activeButton.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
}

function renderFlashGallery() {
  if (!flashBrowse) return;
  ensureFlashThumbObserver();
  if (flashThumbObserver) {
    flashThumbObserver.disconnect();
  }
  flashBrowse.innerHTML = "";
  if (flashSub) {
    flashSub.textContent = `Browse all ${STUDY_ITEMS.length} cards below, or use ←/→ in the viewer.`;
  }

  STUDY_ITEMS.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "flash-browse-card";
    card.dataset.flashItem = String(item.id);
    card.setAttribute("aria-label", `Select ${item.title}`);
    card.classList.toggle("active", item.id === flashState.itemId);

    const image = document.createElement("img");
    image.className = "flash-browse-image";
    image.src = FLASH_THUMB_PLACEHOLDER;
    image.loading = "lazy";
    image.decoding = "async";
    image.fetchPriority = "low";
    image.dataset.itemId = String(item.id);
    image.dataset.loaded = "false";
    image.alt = `Artwork image for ${item.title}`;

    card.appendChild(image);
    flashBrowse.appendChild(card);
    queueFlashThumbLoad(image);
  });
}

function renderFlashViewer() {
  if (!flashViewerImage || !flashViewerInner || !flashViewerTitle || !flashViewerFacts || !flashIndex) return;
  if (!isValidItemId(flashState.itemId)) {
    flashViewerImage.src = "";
    flashViewerTitle.textContent = "No card selected";
    flashViewerFacts.innerHTML = "";
    flashIndex.textContent = `0 / ${STUDY_ITEMS.length}`;
    return;
  }

  const item = STUDY_ITEMS.find((entry) => entry.id === flashState.itemId);
  if (!item) return;

  const currentIndex = STUDY_ITEMS.findIndex((entry) => entry.id === item.id);
  flashIndex.textContent = `${currentIndex + 1} / ${STUDY_ITEMS.length}`;
  flashViewerImage.src = getItemImage(item.id);
  flashViewerImage.alt = `Selected artwork image for ${item.title}`;
  flashViewerTitle.textContent = item.title;
  flashViewerFacts.innerHTML = `
    <p class="fact-line"><strong>Name / title:</strong> ${item.title}</p>
    <p class="fact-line"><strong>Date and period:</strong> ${getPeriodAndDate(item)}</p>
    <p class="fact-line"><strong>Culture / maker:</strong> ${item.maker}</p>
    <p class="fact-line"><strong>Medium:</strong> ${item.medium}</p>
    <p class="fact-line"><strong>Importance:</strong> ${item.importance}</p>
  `;
  flashViewerInner.classList.toggle("is-flipped", Boolean(flashState.revealed));

  if (flashPrev) flashPrev.disabled = currentIndex <= 0;
  if (flashNext) flashNext.disabled = currentIndex >= STUDY_ITEMS.length - 1;
}

function selectFlashItem(itemId) {
  if (!isValidItemId(itemId)) return;
  flashState.itemId = itemId;
  flashState.revealed = false;
  saveState();
  setFlashActiveThumbnail(itemId, { scroll: true });
  renderFlashViewer();
}

function stepFlashItem(direction) {
  if (!isValidItemId(flashState.itemId)) return;
  const currentIndex = STUDY_ITEMS.findIndex((entry) => entry.id === flashState.itemId);
  if (currentIndex < 0) return;
  const nextIndex = currentIndex + direction;
  if (nextIndex < 0 || nextIndex >= STUDY_ITEMS.length) return;
  selectFlashItem(STUDY_ITEMS[nextIndex].id);
}

function toggleFlashReveal() {
  if (!isValidItemId(flashState.itemId)) return;
  flashState.revealed = !flashState.revealed;
  saveState();
  renderFlashViewer();
}

function defaultTestFieldKeys() {
  return CHECK_FIELDS.map((entry) => entry.key);
}

function sanitizeTestFieldKeys(keys) {
  const validKeys = new Set(CHECK_FIELDS.map((entry) => entry.key));
  const source = Array.isArray(keys) ? keys : [];
  const unique = [];
  source.forEach((key) => {
    if (typeof key !== "string" || !validKeys.has(key) || unique.includes(key)) return;
    unique.push(key);
  });
  return unique;
}

function isValidTestItemId(itemId) {
  return Number.isFinite(itemId) && STUDY_ITEMS.some((item) => item.id === itemId);
}

function sanitizeTestItemIds(itemIds) {
  const source = Array.isArray(itemIds) ? itemIds : [];
  const unique = [];
  source.forEach((itemId) => {
    if (!isValidTestItemId(itemId) || unique.includes(itemId)) return;
    unique.push(itemId);
  });
  return unique;
}

function defaultTestItemIds() {
  return STUDY_ITEMS.map((item) => item.id);
}

function parseTestImageSelection(rawSelection) {
  const raw = typeof rawSelection === "string" ? rawSelection.trim() : "";
  if (!raw) {
    return { itemIds: defaultTestItemIds(), invalidTokens: [] };
  }

  const valid = [];
  const invalidTokens = [];
  raw.split(",")
    .map((token) => token.trim())
    .filter(Boolean)
    .forEach((token) => {
      const rangeMatch = token.match(/^(\d+)\s*-\s*(\d+)$/);
      if (rangeMatch) {
        const start = Number(rangeMatch[1]);
        const end = Number(rangeMatch[2]);
        const step = start <= end ? 1 : -1;
        for (let value = start; step > 0 ? value <= end : value >= end; value += step) {
          valid.push(value);
        }
        return;
      }
      if (/^\d+$/.test(token)) {
        valid.push(Number(token));
        return;
      }
      invalidTokens.push(token);
    });

  return {
    itemIds: sanitizeTestItemIds(valid),
    invalidTokens,
  };
}

function selectedTestFieldKeysFromUi() {
  if (!testFieldOptions) return [];
  return Array.from(testFieldOptions.querySelectorAll('input[type="checkbox"][data-test-field]'))
    .filter((input) => input.checked)
    .map((input) => input.dataset.testField);
}

function renderTestFieldOptions() {
  if (!testFieldOptions) return;
  const chosen = new Set(testState.fieldKeys.length ? testState.fieldKeys : defaultTestFieldKeys());
  testFieldOptions.innerHTML = "";
  CHECK_FIELDS.forEach((entry) => {
    const label = document.createElement("label");
    label.className = "test-field-option";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.dataset.testField = entry.key;
    input.checked = chosen.has(entry.key);
    input.disabled = testState.running;
    const text = document.createElement("span");
    text.textContent = entry.label;
    label.appendChild(input);
    label.appendChild(text);
    testFieldOptions.appendChild(label);
  });
}

function startCustomTestMode() {
  if (!testState.fieldKeys.length) {
    testState.fieldKeys = defaultTestFieldKeys();
  }
  if (!Array.isArray(testState.itemIds) || !testState.itemIds.length) {
    testState.itemIds = defaultTestItemIds();
  }
  if (typeof testState.imageSelection !== "string") {
    testState.imageSelection = "";
  }
  if (!Array.isArray(testState.wrongItemIds)) {
    testState.wrongItemIds = [];
  }
  renderCustomTestMode();
}

function beginCustomTest() {
  const selectedFields = sanitizeTestFieldKeys(selectedTestFieldKeysFromUi());
  if (!selectedFields.length) {
    if (testSetupStatus) testSetupStatus.textContent = "Select at least one field to test.";
    return;
  }

  const rawSelection = testImageNumbers ? testImageNumbers.value : testState.imageSelection;
  const parsedSelection = parseTestImageSelection(rawSelection);
  if (parsedSelection.invalidTokens.length) {
    if (testSetupStatus) {
      testSetupStatus.textContent = `Invalid image numbers: ${parsedSelection.invalidTokens.join(", ")}`;
    }
    return;
  }
  if (!parsedSelection.itemIds.length) {
    if (testSetupStatus) {
      testSetupStatus.textContent = "No valid image numbers selected. Use numbers like 1, 3, 8-12.";
    }
    return;
  }

  testState.running = true;
  testState.index = 0;
  testState.itemIds = parsedSelection.itemIds;
  testState.fieldKeys = selectedFields;
  testState.imageSelection = typeof rawSelection === "string" ? rawSelection.trim() : "";
  testState.drafts = {};
  testState.revealed = false;
  testState.correctCount = 0;
  testState.wrongItemIds = [];

  if (testSetupStatus) testSetupStatus.textContent = "";
  saveState();
  renderCustomTestMode();
}

function retryCustomTestWrongOnly() {
  if (testState.running || !testState.wrongItemIds.length) return;
  testState.running = true;
  testState.index = 0;
  testState.itemIds = sanitizeTestItemIds(testState.wrongItemIds);
  testState.drafts = {};
  testState.revealed = false;
  testState.correctCount = 0;
  testState.wrongItemIds = [];
  if (testSetupStatus) testSetupStatus.textContent = "Retrying with only the images you missed.";
  saveState();
  renderCustomTestMode();
}

function resetCustomTest() {
  testState.running = false;
  testState.index = 0;
  testState.itemIds = defaultTestItemIds();
  testState.drafts = {};
  testState.revealed = false;
  testState.correctCount = 0;
  testState.wrongItemIds = [];
  if (testSetupStatus) testSetupStatus.textContent = "Test reset. Choose fields and start again.";
  saveState();
  renderCustomTestMode();
}

function renderCustomTestInputs(item) {
  if (!testInputs) return;
  testInputs.innerHTML = "";
  testState.fieldKeys.forEach((fieldKey) => {
    const meta = CHECK_FIELDS.find((entry) => entry.key === fieldKey);
    if (!meta) return;
    const wrapper = document.createElement("div");
    wrapper.className = "check-field";

    const label = document.createElement("label");
    label.className = "check-field-label";
    label.textContent = meta.label;

    const input = document.createElement("textarea");
    input.className = "text-input";
    input.rows = fieldKey === "importance" ? 4 : 3;
    input.placeholder = `Type your answer for ${meta.label}...`;
    input.dataset.testField = fieldKey;
    input.value = typeof testState.drafts[fieldKey] === "string" ? testState.drafts[fieldKey] : "";

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    testInputs.appendChild(wrapper);
  });

  if (testImage) {
    testImage.src = getItemImage(item.id);
    testImage.alt = `Test prompt image for ${item.title}`;
  }
}

function revealCustomTestAnswer() {
  if (!testState.running) return;
  const itemId = testState.itemIds[testState.index];
  const item = STUDY_ITEMS.find((entry) => entry.id === itemId);
  if (!item || !testAnswer) return;

  if (testState.revealed) {
    testState.revealed = false;
    testAnswer.classList.add("hidden");
    testReveal.textContent = "Reveal key";
    saveState();
    return;
  }

  const answerLines = testState.fieldKeys.map((fieldKey) => {
    const meta = CHECK_FIELDS.find((entry) => entry.key === fieldKey);
    const label = meta ? meta.label : fieldKey;
    return `<strong>${label}:</strong> ${getFieldValue(item, fieldKey)}`;
  });
  testAnswer.innerHTML = answerLines.join("<br>");
  testAnswer.classList.remove("hidden");
  testReveal.textContent = "Hide key";
  testState.revealed = true;
  saveState();
}

function submitCustomTestResult(passed, triggerElement = null) {
  if (!testState.running) return;
  const itemId = testState.itemIds[testState.index];
  if (!isValidTestItemId(itemId)) return;

  if (passed) {
    launchQuickConfetti(triggerElement);
    rateItem(itemId, "good", { deferRender: true });
    testState.correctCount += 1;
  } else {
    rateItem(itemId, "again", { deferRender: true });
    if (!testState.wrongItemIds.includes(itemId)) {
      testState.wrongItemIds.push(itemId);
    }
  }

  testState.index += 1;
  testState.drafts = {};
  testState.revealed = false;
  if (testState.index >= testState.itemIds.length) {
    testState.running = false;
  }

  saveState();
  renderCustomTestMode();
}

function renderCustomTestMode() {
  renderTestFieldOptions();
  if (!testRun || !testProgress || !testPrompt || !testStatus || !testAnswer || !testReveal) return;
  if (testStart) {
    testStart.textContent = testState.running ? "Restart selected test" : "Start selected test";
  }
  if (testImageNumbers) {
    if (!testState.running) {
      testImageNumbers.value = testState.imageSelection || "";
    }
    testImageNumbers.disabled = testState.running;
  }

  const total = testState.itemIds.length || STUDY_ITEMS.length;
  if (!testState.running) {
    testRun.classList.remove("hidden");
    if (testWrongReview) testWrongReview.classList.add("hidden");
    const completed = total > 0 && testState.index >= total;
    if (completed) {
      const wrongIds = sanitizeTestItemIds(testState.wrongItemIds);
      const wrongLabels = wrongIds
        .map((itemId) => {
          const item = STUDY_ITEMS.find((entry) => entry.id === itemId);
          return item ? `#${item.id} - ${item.title}` : "";
        })
        .filter(Boolean);
      testProgress.textContent = `Completed ${total} of ${total} cards`;
      testPrompt.textContent = "Custom test complete";
      testStatus.textContent = `Score: ${testState.correctCount} / ${total}`;
      if (wrongLabels.length && testWrongReview && testWrongSummary) {
        testWrongReview.classList.remove("hidden");
        testWrongSummary.textContent = `Wrong images (${wrongLabels.length}): ${wrongLabels.join("; ")}`;
      }
      if (testRetryWrong) {
        testRetryWrong.disabled = !wrongLabels.length;
      }
      testInputs.innerHTML = "";
      testAnswer.classList.add("hidden");
      testAnswer.textContent = "";
      if (testImage) {
        testImage.src = "";
        testImage.alt = "Custom test complete";
      }
      testReveal.textContent = "Reveal key";
      testReveal.disabled = true;
      if (testFail) testFail.disabled = true;
      if (testPass) testPass.disabled = true;
      return;
    }

    testProgress.textContent = "Ready to start";
    testPrompt.textContent = "Choose fields, choose image numbers, and start your custom test.";
    testStatus.textContent = "";
    testInputs.innerHTML = "";
    testAnswer.classList.add("hidden");
    testAnswer.textContent = "";
    if (testImage) {
      testImage.src = "";
      testImage.alt = "Custom test prompt";
    }
    testReveal.textContent = "Reveal key";
    testReveal.disabled = true;
    if (testFail) testFail.disabled = true;
    if (testPass) testPass.disabled = true;
    return;
  }

  const itemId = testState.itemIds[testState.index];
  const item = STUDY_ITEMS.find((entry) => entry.id === itemId);
  if (!item) {
    testState.index += 1;
    if (testState.index >= testState.itemIds.length) {
      testState.running = false;
    }
    saveState();
    renderCustomTestMode();
    return;
  }

  testRun.classList.remove("hidden");
  if (testWrongReview) testWrongReview.classList.add("hidden");
  testProgress.textContent = `Card ${testState.index + 1} of ${testState.itemIds.length}`;
  testPrompt.textContent = "Identify this artwork";
  testStatus.textContent = "";
  testReveal.disabled = false;
  if (testFail) testFail.disabled = false;
  if (testPass) testPass.disabled = false;
  testReveal.textContent = testState.revealed ? "Hide key" : "Reveal key";
  renderCustomTestInputs(item);

  if (testState.revealed) {
    const answerLines = testState.fieldKeys.map((fieldKey) => {
      const meta = CHECK_FIELDS.find((entry) => entry.key === fieldKey);
      const label = meta ? meta.label : fieldKey;
      return `<strong>${label}:</strong> ${getFieldValue(item, fieldKey)}`;
    });
    testAnswer.innerHTML = answerLines.join("<br>");
    testAnswer.classList.remove("hidden");
  } else {
    testAnswer.classList.add("hidden");
    testAnswer.textContent = "";
  }
}

function buildDefaultSessionState() {
  return {
    mode: "teach",
    teachItemId: null,
    teachStep: 0,
    teachChecking: false,
    teachCheckFieldKeys: [],
    teachCheckDrafts: {},
    teachCheckRevealed: false,
    flashItemId: null,
    flashRevealed: false,
    testRunning: false,
    testIndex: 0,
    testItemIds: [],
    testFieldKeys: [],
    testImageSelection: "",
    testDrafts: {},
    testRevealed: false,
    testCorrectCount: 0,
    testWrongItemIds: [],
    dbItemId: null,
    dbEditing: false,
  };
}

function collectTeachCheckDrafts() {
  const drafts = {};
  if (!teachCheckFields) return drafts;
  teachCheckFields.querySelectorAll("textarea[data-field]").forEach((input) => {
    const key = input.dataset.field;
    if (!key) return;
    drafts[key] = input.value || "";
  });
  return drafts;
}

function isValidItemId(itemId) {
  return Number.isFinite(itemId) && STUDY_ITEMS.some((item) => item.id === itemId);
}

function syncSessionToState() {
  if (teachState.checking) {
    teachState.checkDrafts = {
      ...(teachState.checkDrafts || {}),
      ...collectTeachCheckDrafts(),
    };
  }
  state.session = {
    mode: Object.prototype.hasOwnProperty.call(panels, currentMode) ? currentMode : "teach",
    teachItemId: isValidItemId(teachState.itemId) ? teachState.itemId : null,
    teachStep: Math.max(0, Math.min(revealSequence.length, Number.isFinite(teachState.step) ? teachState.step : 0)),
    teachChecking: Boolean(teachState.checking),
    teachCheckFieldKeys: teachState.checkFields.map((entry) => entry.key),
    teachCheckDrafts: teachState.checking ? { ...(teachState.checkDrafts || {}) } : {},
    teachCheckRevealed: Boolean(teachState.checking && teachState.checkRevealed),
    flashItemId: isValidItemId(flashState.itemId) ? flashState.itemId : null,
    flashRevealed: Boolean(flashState.revealed),
    testRunning: Boolean(testState.running),
    testIndex: Math.max(0, Number.isFinite(testState.index) ? testState.index : 0),
    testItemIds: Array.isArray(testState.itemIds)
      ? testState.itemIds.filter((itemId) => isValidTestItemId(itemId))
      : [],
    testFieldKeys: sanitizeTestFieldKeys(testState.fieldKeys),
    testImageSelection: typeof testState.imageSelection === "string" ? testState.imageSelection : "",
    testDrafts: { ...(testState.drafts || {}) },
    testRevealed: Boolean(testState.revealed),
    testCorrectCount: Math.max(0, Number.isFinite(testState.correctCount) ? testState.correctCount : 0),
    testWrongItemIds: sanitizeTestItemIds(testState.wrongItemIds),
    dbItemId: isValidItemId(dbState.itemId) ? dbState.itemId : null,
    dbEditing: Boolean(dbState.editing),
  };
}

function restoreSessionFromState() {
  const session = {
    ...buildDefaultSessionState(),
    ...(state.session || {}),
  };

  const restoredMode = session.mode === "quiz" ? "test" : session.mode;
  currentMode = Object.prototype.hasOwnProperty.call(panels, restoredMode) ? restoredMode : "teach";
  teachState.itemId = isValidItemId(session.teachItemId) ? session.teachItemId : null;
  teachState.step = Math.max(0, Math.min(revealSequence.length, Number.isFinite(session.teachStep) ? session.teachStep : 0));
  const validCheckKeys = new Set(CHECK_FIELDS.map((entry) => entry.key));
  const storedCheckKeys = Array.isArray(session.teachCheckFieldKeys) ? session.teachCheckFieldKeys : [];
  teachState.checking = Boolean(session.teachChecking) && isValidItemId(teachState.itemId);
  teachState.checkFields = storedCheckKeys
    .filter((key) => typeof key === "string" && validCheckKeys.has(key))
    .map((key) => CHECK_FIELDS.find((entry) => entry.key === key))
    .filter(Boolean);
  teachState.checkField = teachState.checkFields.length ? teachState.checkFields[0] : null;
  teachState.checkDrafts = {};
  if (session.teachCheckDrafts && typeof session.teachCheckDrafts === "object") {
    Object.entries(session.teachCheckDrafts).forEach(([key, value]) => {
      if (!validCheckKeys.has(key) || typeof value !== "string") return;
      teachState.checkDrafts[key] = value;
    });
  }
  teachState.checkRevealed = Boolean(session.teachCheckRevealed) && teachState.checking;
  flashState.itemId = isValidItemId(session.flashItemId) ? session.flashItemId : null;
  flashState.revealed = Boolean(session.flashRevealed);
  testState.itemIds = Array.isArray(session.testItemIds)
    ? session.testItemIds.filter((itemId) => isValidTestItemId(itemId))
    : [];
  if (!testState.itemIds.length) {
    testState.itemIds = defaultTestItemIds();
  }
  testState.fieldKeys = sanitizeTestFieldKeys(session.testFieldKeys);
  if (!testState.fieldKeys.length) {
    testState.fieldKeys = defaultTestFieldKeys();
  }
  testState.imageSelection = typeof session.testImageSelection === "string" ? session.testImageSelection : "";
  const safeIndex = Number.isFinite(session.testIndex) ? session.testIndex : 0;
  testState.index = Math.max(0, Math.min(safeIndex, testState.itemIds.length));
  testState.running = Boolean(session.testRunning) && testState.index < testState.itemIds.length;
  testState.drafts = {};
  if (session.testDrafts && typeof session.testDrafts === "object") {
    Object.entries(session.testDrafts).forEach(([key, value]) => {
      if (!testState.fieldKeys.includes(key) || typeof value !== "string") return;
      testState.drafts[key] = value;
    });
  }
  testState.revealed = Boolean(session.testRevealed) && testState.running;
  testState.correctCount = Math.max(0, Math.min(Number.isFinite(session.testCorrectCount) ? session.testCorrectCount : 0, testState.index));
  testState.wrongItemIds = sanitizeTestItemIds(session.testWrongItemIds);
  dbState.itemId = isValidItemId(session.dbItemId) ? session.dbItemId : (STUDY_ITEMS[0] ? STUDY_ITEMS[0].id : null);
  dbState.editing = Boolean(session.dbEditing) && isValidItemId(dbState.itemId);
}

function updateLiveViewsForItem(itemId) {
  delete flashThumbCache[itemId];
  delete flashThumbPromiseCache[itemId];
  if (teachState.itemId === itemId) {
    renderTeachCard();
  }
  if (currentMode === "flash") {
    renderFlashGallery();
    renderFlashViewer();
  }
  if (testState.running && testState.itemIds[testState.index] === itemId) {
    renderCustomTestMode();
  }
}

function cardLabel(item) {
  const shortTitle = item.title.length > 54 ? `${item.title.slice(0, 54)}...` : item.title;
  return `${item.id}. ${shortTitle}`;
}

function shortText(value, max = 160) {
  if (!value) return "";
  return value.length > max ? `${value.slice(0, max)}...` : value;
}

function renderDbBrowseList() {
  if (!dbBrowse) return;
  dbBrowse.innerHTML = "";
  STUDY_ITEMS.forEach((item) => {
    const card = document.createElement("article");
    card.className = "db-browse-card";

    const image = document.createElement("img");
    image.className = "db-thumb";
    image.src = getItemImage(item.id);
    image.alt = `Card image for ${item.title}`;

    const text = document.createElement("div");
    text.className = "db-browse-text";

    const title = document.createElement("p");
    title.className = "db-browse-title";
    title.textContent = cardLabel(item);

    const date = document.createElement("p");
    date.textContent = `Date and period: ${getPeriodAndDate(item)}`;

    const maker = document.createElement("p");
    maker.textContent = `Culture / maker: ${shortText(item.maker, 120)}`;

    const medium = document.createElement("p");
    medium.textContent = `Medium: ${shortText(item.medium, 120)}`;

    const importance = document.createElement("p");
    importance.textContent = `Importance: ${shortText(item.importance, 180)}`;

    const editButton = document.createElement("button");
    editButton.className = "primary";
    editButton.textContent = "Edit card";
    editButton.dataset.dbEdit = String(item.id);

    text.appendChild(title);
    text.appendChild(date);
    text.appendChild(maker);
    text.appendChild(medium);
    text.appendChild(importance);
    text.appendChild(editButton);

    card.appendChild(image);
    card.appendChild(text);
    dbBrowse.appendChild(card);
  });
}

function openDbEditor(itemId) {
  if (!isValidItemId(itemId) || !dbEditor) return;
  dbState.itemId = itemId;
  dbState.editing = true;
  fillDbForm(itemId);
  if (dbEditingLabel) {
    dbEditingLabel.textContent = `Editing card ${itemId}`;
  }
  dbEditor.classList.remove("hidden");
  dbStatus.textContent = `Editing card ${itemId}`;
  saveState();
}

function closeDbEditor() {
  if (!dbEditor) return;
  dbState.editing = false;
  dbEditor.classList.add("hidden");
  saveState();
}

function fillDbForm(itemId) {
  const item = STUDY_ITEMS.find((entry) => entry.id === itemId);
  if (!item) return;
  dbTitle.value = item.title || "";
  dbPeriodDate.value = getPeriodAndDate(item);
  dbMaker.value = item.maker || "";
  dbMedium.value = item.medium || "";
  dbImportance.value = item.importance || "";
  dbImage.src = getItemImage(item.id);
  dbImage.alt = `Card image for ${item.title || "artwork"}`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read image file."));
    reader.readAsDataURL(file);
  });
}

function optimizeImageDataUrl(dataUrl) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const maxSide = 1200;
      const ratio = Math.min(1, maxSide / Math.max(image.width, image.height));
      const width = Math.max(1, Math.round(image.width * ratio));
      const height = Math.max(1, Math.round(image.height * ratio));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(dataUrl);
        return;
      }
      ctx.drawImage(image, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.88));
    };
    image.onerror = () => resolve(dataUrl);
    image.src = dataUrl;
  });
}

async function saveDbImageFromFile(file) {
  if (!isValidItemId(dbState.itemId)) return;
  if (!file || !file.type.startsWith("image/")) {
    dbStatus.textContent = "Please choose an image file.";
    return;
  }

  try {
    dbStatus.textContent = "Saving image...";
    const rawDataUrl = await readFileAsDataUrl(file);
    const optimizedDataUrl = await optimizeImageDataUrl(rawDataUrl);
    customImageMap[dbState.itemId] = optimizedDataUrl;
    if (!saveCustomImageMap()) {
      dbStatus.textContent = "Could not save image (browser storage is full).";
      return;
    }

    fillDbForm(dbState.itemId);
    renderDbBrowseList();
    updateLiveViewsForItem(dbState.itemId);
    dbStatus.textContent = `Saved replacement image for card ${dbState.itemId}`;
  } catch (err) {
    dbStatus.textContent = "Could not process this image file.";
  }
}

function renderDbEditor() {
  renderDbBrowseList();
  if (!dbEditor) return;
  if (dbState.editing && isValidItemId(dbState.itemId)) {
    openDbEditor(dbState.itemId);
  } else {
    dbEditor.classList.add("hidden");
  }
}

function saveDbCardEdits() {
  if (!isValidItemId(dbState.itemId)) return;
  const item = STUDY_ITEMS.find((entry) => entry.id === dbState.itemId);
  if (!item) return;

  const periodDate = splitPeriodAndDate(dbPeriodDate.value);
  item.title = dbTitle.value.trim();
  item.date = periodDate.date;
  item.period = periodDate.period;
  item.maker = dbMaker.value.trim();
  item.medium = dbMedium.value.trim();
  item.importance = dbImportance.value.trim();

  saveStudyItems();
  saveState();
  renderDbBrowseList();
  fillDbForm(item.id);
  updateLiveViewsForItem(item.id);
  refreshProgress();
  closeDbEditor();
}

function resetDbCardEdits() {
  if (!isValidItemId(dbState.itemId)) return;
  if (!resetStudyItemFromBase(dbState.itemId)) return;
  saveStudyItems();
  saveState();
  renderDbBrowseList();
  fillDbForm(dbState.itemId);
  updateLiveViewsForItem(dbState.itemId);
  closeDbEditor();
}

function resetDbCardImage() {
  if (!isValidItemId(dbState.itemId)) return;
  if (!resetCustomImage(dbState.itemId)) {
    dbStatus.textContent = "Could not reset image.";
    return;
  }
  fillDbForm(dbState.itemId);
  renderDbBrowseList();
  updateLiveViewsForItem(dbState.itemId);
  dbStatus.textContent = `Reset image for card ${dbState.itemId}`;
}

function resetQuizView() {
  quizContent.classList.add("hidden");
  quizIntro.classList.remove("hidden");
  quizResult.classList.add("hidden");
  quizNext.classList.add("hidden");
  quizBar.style.width = "0%";
  quizFeedback.textContent = "";
  quizState.running = false;
}

function buildQuiz() {
  const fields = ["title", "periodDate", "maker", "medium"];
  const sortedByNeed = STUDY_ITEMS.slice().sort((a, b) => {
    const pa = state.cards[a.id];
    const pb = state.cards[b.id];
    return pa.box - pb.box || a.id - b.id;
  });

  const questions = [];
  while (questions.length < 10) {
    const item = sortedByNeed[questions.length % sortedByNeed.length];
    const field = fields[questions.length % fields.length];
    const correct = getFieldValue(item, field);
    const options = pickOptions(field, correct);
    const image = getItemImage(item.id);
    const fieldLabel = questionFieldLabel(field);
    questions.push({
      itemId: item.id,
      field,
      prompt:
        field === "title"
          ? "Which name matches this artwork?"
          : `Which value best matches this item? (${fieldLabel})`,
      label: fieldLabel,
      image,
      title: item.title,
      correct,
      options,
      answered: false,
    });
  }

  return questions;
}

function questionFieldLabel(field) {
  if (field === "title") return "Name / title";
  if (field === "periodDate") return "Date and period";
  if (field === "maker") return "maker / culture";
  return field;
}

function getFieldValue(item, field) {
  if (field === "periodDate") return getPeriodAndDate(item);
  return item[field] || "";
}

function pickOptions(field, correct) {
  const allValues = [...new Set(STUDY_ITEMS.map((item) => getFieldValue(item, field)).filter(Boolean))];
  const pool = allValues.filter((x) => x !== correct);
  shuffle(pool);
  const picks = pool.slice(0, 3);
  while (picks.length < 3) {
    picks.push("(no fixed option)");
  }
  const options = [correct, ...picks];
  shuffle(options);
  return options;
}

function buildQuestionMarkup(question) {
  quizQuestion.textContent = `${question.prompt} ${question.label}`;
  quizImage.src = question.image;
  quizImage.alt = "Quiz artwork prompt image";
  quizChoices.innerHTML = "";
  quizFeedback.textContent = "";
  quizResult.classList.add("hidden");
  quizNext.classList.add("hidden");
  quizQuestion.setAttribute("data-field", question.field);
  quizQuestion.setAttribute("data-item-id", question.itemId);

  question.options.forEach((choice) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-option";
    btn.textContent = choice;
    btn.dataset.choice = choice;
    btn.addEventListener("click", () => answerQuestion(question, choice));
    quizChoices.appendChild(btn);
  });

  const total = quizState.questions.length;
  quizProgressText.textContent = `Question ${quizState.index + 1} of ${total}`;
  const pct = Math.round(((quizState.index) / total) * 100);
  quizBar.style.width = `${pct}%`;
}

function answerQuestion(question, choice) {
  if (question.answered) return;
  question.answered = true;

  const buttons = Array.from(quizChoices.querySelectorAll("button"));
  buttons.forEach((btn) => (btn.disabled = true));

  const correct = question.correct;
  if (choice === correct) {
    quizState.score += 1;
    quizFeedback.textContent = "Correct. Good recall.";
    rateItem(question.itemId, "good");
  } else {
    quizFeedback.textContent = `Not quite. Correct answer: ${correct}`;
    rateItem(question.itemId, "again");
  }

  buttons.forEach((btn) => {
    if (btn.dataset.choice === correct) btn.classList.add("correct");
    if (btn.dataset.choice === choice && choice !== correct) btn.classList.add("wrong");
  });

  quizNext.classList.remove("hidden");
  updateQuizProgress();
}

function updateQuizProgress() {
  const total = quizState.questions.length;
  const pct = Math.round((Math.min(quizState.index + 1, total) / total) * 100);
  quizBar.style.width = `${pct}%`;
}

function nextQuestion() {
  quizState.index += 1;
  saveState();
  refreshProgress();

  if (quizState.index >= quizState.questions.length) {
    quizContent.classList.add("hidden");
    quizResult.classList.remove("hidden");
    quizResult.textContent = `Final score: ${quizState.score} / ${quizState.questions.length}`;
    quizNext.classList.add("hidden");
    startQuiz.textContent = "Take another quiz";
    return;
  }

  buildQuestionMarkup(quizState.questions[quizState.index]);
  quizNext.classList.add("hidden");
  quizIntro.classList.add("hidden");
}

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function refreshProgress() {
  const total = STUDY_ITEMS.length;
  const mastered = STUDY_ITEMS.reduce(
    (sum, item) => (state.cards[item.id].box >= MASTERY_BOX_THRESHOLD ? sum + 1 : sum),
    0,
  );

  const percent = Math.round((mastered / total) * 100);
  masteryBar.style.width = `${percent}%`;
  masteryText.textContent = `${mastered} of ${total} items mostly mastered`;

  const circumference = 2 * Math.PI * 52;
  ringText.textContent = `${percent}%`;
  ringProgress.style.strokeDasharray = `${circumference}`;
  ringProgress.style.strokeDashoffset = `${circumference - (percent / 100) * circumference}`;

  dueText.textContent = "Adaptive study rhythm updates automatically.";
  dueSoonText.textContent = "No visible due numbers, only pacing for better recall.";

  sessionInfo.textContent = "Mastery rating updates in the background.";
}

function init() {
  applyStateCorrections();

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  if (flashBrowse) {
    flashBrowse.addEventListener("click", (event) => {
      const target = event.target.closest("[data-flash-item]");
      if (!target) return;
      selectFlashItem(Number(target.dataset.flashItem));
    });
  }
  if (flashViewerFlip) {
    flashViewerFlip.addEventListener("click", toggleFlashReveal);
  }
  if (flashPrev) {
    flashPrev.addEventListener("click", () => stepFlashItem(-1));
  }
  if (flashNext) {
    flashNext.addEventListener("click", () => stepFlashItem(1));
  }
  window.addEventListener("keydown", (event) => {
    if (currentMode !== "flash") return;
    const tagName = event.target && event.target.tagName ? event.target.tagName.toUpperCase() : "";
    if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT" || (event.target && event.target.isContentEditable)) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepFlashItem(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      stepFlashItem(1);
    }
  });

  teachReveal.addEventListener("click", revealTeachStep);
  document.querySelectorAll("[data-grade]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      rateItem(teachState.itemId, e.currentTarget.dataset.grade);
    });
  });

  if (testStart) {
    testStart.addEventListener("click", beginCustomTest);
  }
  if (testReset) {
    testReset.addEventListener("click", resetCustomTest);
  }
  if (testFieldOptions) {
    testFieldOptions.addEventListener("change", () => {
      const selected = sanitizeTestFieldKeys(selectedTestFieldKeysFromUi());
      testState.fieldKeys = selected.length ? selected : [];
      if (testSetupStatus) testSetupStatus.textContent = "";
      saveState();
    });
  }
  if (testImageNumbers) {
    testImageNumbers.addEventListener("input", () => {
      testState.imageSelection = testImageNumbers.value || "";
      if (testSetupStatus) testSetupStatus.textContent = "";
      saveState();
    });
  }
  if (testInputs) {
    testInputs.addEventListener("input", (event) => {
      const target = event.target;
      if (!target || target.tagName !== "TEXTAREA") return;
      const field = target.dataset.testField;
      if (!field) return;
      testState.drafts[field] = target.value || "";
      saveState();
    });
  }
  if (testReveal) {
    testReveal.addEventListener("click", revealCustomTestAnswer);
  }
  if (testFail) {
    testFail.addEventListener("click", (e) => {
      submitCustomTestResult(false, e.currentTarget);
    });
  }
  if (testPass) {
    testPass.addEventListener("click", (e) => {
      submitCustomTestResult(true, e.currentTarget);
    });
  }
  if (testRetryWrong) {
    testRetryWrong.addEventListener("click", retryCustomTestWrongOnly);
  }

  teachCheckReveal.addEventListener("click", revealTeachCheckAnswer);
  if (teachCheckFields) {
    teachCheckFields.addEventListener("input", (event) => {
      const target = event.target;
      if (!target || target.tagName !== "TEXTAREA") return;
      const field = target.dataset.field;
      if (!field) return;
      teachState.checkDrafts[field] = target.value || "";
      saveState();
    });
  }
  document.querySelectorAll("[data-check-grade]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      submitTeachCheck(e.currentTarget.dataset.checkGrade === "pass", e.currentTarget);
    });
  });

  startQuiz.addEventListener("click", () => {
    quizState.running = true;
    quizState.questions = buildQuiz();
    quizState.index = 0;
    quizState.score = 0;

    quizIntro.classList.add("hidden");
    quizContent.classList.remove("hidden");
    quizResult.classList.add("hidden");
    buildQuestionMarkup(quizState.questions[0]);
  });

  quizNext.addEventListener("click", nextQuestion);

  if (dbBrowse) {
    dbBrowse.addEventListener("click", (event) => {
      const target = event.target.closest("[data-db-edit]");
      if (!target) return;
      openDbEditor(Number(target.dataset.dbEdit));
    });
  }

  if (dbSave) {
    dbSave.addEventListener("click", saveDbCardEdits);
  }

  if (dbReset) {
    dbReset.addEventListener("click", resetDbCardEdits);
  }

  if (dbCancelEdit) {
    dbCancelEdit.addEventListener("click", closeDbEditor);
  }

  if (dbPickImage && dbImageInput) {
    dbPickImage.addEventListener("click", () => {
      dbImageInput.click();
    });
    dbImageInput.addEventListener("change", async (event) => {
      const file = event.currentTarget.files && event.currentTarget.files[0];
      if (file) {
        await saveDbImageFromFile(file);
      }
      dbImageInput.value = "";
    });
  }

  if (dbResetImage) {
    dbResetImage.addEventListener("click", resetDbCardImage);
  }

  if (dbDropzone) {
    dbDropzone.addEventListener("click", () => {
      if (dbImageInput) dbImageInput.click();
    });
    dbDropzone.addEventListener("dragover", (event) => {
      event.preventDefault();
      dbDropzone.classList.add("drag-active");
    });
    dbDropzone.addEventListener("dragleave", () => {
      dbDropzone.classList.remove("drag-active");
    });
    dbDropzone.addEventListener("drop", async (event) => {
      event.preventDefault();
      dbDropzone.classList.remove("drag-active");
      const file = event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0];
      if (file) {
        await saveDbImageFromFile(file);
      }
    });
  }

  restoreSessionFromState();
  refreshProgress();
  setMode(currentMode, { preserveTeachState: true });
}

init();
