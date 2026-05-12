const imageVars = {
  "northern-thailand": "var(--chiang-mai-image)",
  "isaan-northeast": "var(--khon-kaen-image)",
  "western-mountain": "var(--hero-image)",
  "bangkok-central": "var(--bangkok-image)",
  "eastern-seaboard": "var(--pattaya-image)",
  "southern-thailand": "var(--phuket-image)",
};

const regions = {
  "northern-thailand": {
    color: "var(--teal)",
    temp: "24°C",
    weather: {
      en: "Cool · 17°C - 29°C",
      ar: "معتدل · 17°C - 29°C",
      th: "เย็นสบาย · 17°C - 29°C",
    },
    tourist: { value: 62, label: { en: "Medium", ar: "متوسط", th: "ปานกลาง" } },
    population: { value: 48, label: { en: "Medium", ar: "متوسط", th: "ปานกลาง" } },
    lifestyle: { value: 82, label: { en: "Calm", ar: "هادئ", th: "สงบ" } },
    text: {
      en: {
        name: "Northern Thailand",
        area: "Chiang Mai, Chiang Rai, Nan",
        best: "Mountain homes, culture, long-stay living",
        description: "Green lifestyle, mountain views, culture",
      },
      ar: {
        name: "شمال تايلاند",
        area: "تشيانغ ماي، تشيانغ راي، نان",
        best: "منازل جبلية، ثقافة، إقامة طويلة",
        description: "طبيعة خضراء وإطلالات جبلية وثقافة",
      },
      th: {
        name: "ภาคเหนือ",
        area: "เชียงใหม่ เชียงราย น่าน",
        best: "บ้านบนเขา วัฒนธรรม การอยู่ระยะยาว",
        description: "ธรรมชาติ ภูเขา วัฒนธรรม",
      },
    },
  },
  "isaan-northeast": {
    color: "var(--violet)",
    temp: "30°C",
    weather: {
      en: "Warm · 23°C - 34°C",
      ar: "دافئ · 23°C - 34°C",
      th: "อบอุ่น · 23°C - 34°C",
    },
    tourist: { value: 38, label: { en: "Low", ar: "منخفض", th: "ต่ำ" } },
    population: { value: 66, label: { en: "Medium", ar: "متوسط", th: "ปานกลาง" } },
    lifestyle: { value: 78, label: { en: "Affordable", ar: "اقتصادي", th: "คุ้มค่า" } },
    text: {
      en: {
        name: "Isaan / Northeast",
        area: "Khon Kaen, Udon Thani, Korat",
        best: "Land, family homes, lower-entry investment",
        description: "Growth cities, land value, family living",
      },
      ar: {
        name: "إيسان / الشمال الشرقي",
        area: "خون كاين، أودون ثاني، كورات",
        best: "أراضٍ، بيوت عائلية، دخول استثماري أقل",
        description: "مدن نامية وقيمة أراضٍ ومعيشة عائلية",
      },
      th: {
        name: "อีสาน / ตะวันออกเฉียงเหนือ",
        area: "ขอนแก่น อุดรธานี โคราช",
        best: "ที่ดิน บ้านครอบครัว ลงทุนเริ่มต้นต่ำ",
        description: "เมืองเติบโต ที่ดินดี ครอบครัว",
      },
    },
  },
  "western-mountain": {
    color: "var(--blue)",
    temp: "28°C",
    weather: {
      en: "Fresh · 21°C - 32°C",
      ar: "منعش · 21°C - 32°C",
      th: "สดชื่น · 21°C - 32°C",
    },
    tourist: { value: 55, label: { en: "Medium", ar: "متوسط", th: "ปานกลาง" } },
    population: { value: 36, label: { en: "Low", ar: "منخفض", th: "ต่ำ" } },
    lifestyle: { value: 86, label: { en: "Quiet", ar: "هادئ", th: "เงียบสงบ" } },
    text: {
      en: {
        name: "Western / Mountain",
        area: "Kanchanaburi, Hua Hin inland, Tak",
        best: "Nature retreats, larger land, quiet lifestyle",
        description: "Mountain corridors, retreats, bigger land",
      },
      ar: {
        name: "الغرب / الجبال",
        area: "كانشانابوري، داخل هوا هين، تاك",
        best: "منتجعات طبيعية، أراضٍ أكبر، حياة هادئة",
        description: "ممرات جبلية ومنتجعات وأراضٍ واسعة",
      },
      th: {
        name: "ตะวันตก / ภูเขา",
        area: "กาญจนบุรี หัวหินตอนใน ตาก",
        best: "รีทรีตธรรมชาติ ที่ดินใหญ่ ชีวิตสงบ",
        description: "ภูเขา รีทรีต ที่ดินขนาดใหญ่",
      },
    },
  },
  "bangkok-central": {
    color: "var(--gold)",
    temp: "32°C",
    weather: {
      en: "Urban · 26°C - 35°C",
      ar: "حضري · 26°C - 35°C",
      th: "เมืองใหญ่ · 26°C - 35°C",
    },
    tourist: { value: 88, label: { en: "High", ar: "مرتفع", th: "สูง" } },
    population: { value: 94, label: { en: "Very High", ar: "مرتفع جداً", th: "สูงมาก" } },
    lifestyle: { value: 86, label: { en: "Dynamic", ar: "نشط", th: "คล่องตัว" } },
    text: {
      en: {
        name: "Bangkok & Central",
        area: "Bangkok, Ayutthaya, Nonthaburi",
        best: "Condos, rentals, business access",
        description: "City investment, rentals, transport access",
      },
      ar: {
        name: "بانكوك والوسط",
        area: "بانكوك، أيوتايا، نونثابوري",
        best: "شقق، إيجارات، وصول للأعمال",
        description: "استثمار حضري وإيجارات ومواصلات",
      },
      th: {
        name: "กรุงเทพฯ และภาคกลาง",
        area: "กรุงเทพฯ อยุธยา นนทบุรี",
        best: "คอนโด เช่า ธุรกิจ",
        description: "ลงทุนเมือง เช่า เดินทางสะดวก",
      },
    },
  },
  "eastern-seaboard": {
    color: "var(--orange)",
    temp: "31°C",
    weather: {
      en: "Coastal · 25°C - 33°C",
      ar: "ساحلي · 25°C - 33°C",
      th: "ชายฝั่ง · 25°C - 33°C",
    },
    tourist: { value: 82, label: { en: "High", ar: "مرتفع", th: "สูง" } },
    population: { value: 64, label: { en: "Medium", ar: "متوسط", th: "ปานกลาง" } },
    lifestyle: { value: 80, label: { en: "Lively", ar: "حيوي", th: "คึกคัก" } },
    text: {
      en: {
        name: "Eastern Seaboard",
        area: "Pattaya, Chonburi, Rayong, Trat",
        best: "Beach-city mix, rentals, industrial corridor",
        description: "Beach cities, rental demand, EEC access",
      },
      ar: {
        name: "الساحل الشرقي",
        area: "باتايا، تشونبوري، رايونغ، ترات",
        best: "شاطئ ومدينة، إيجارات، ممر صناعي",
        description: "مدن شاطئية وطلب إيجاري ووصول EEC",
      },
      th: {
        name: "ชายฝั่งตะวันออก",
        area: "พัทยา ชลบุรี ระยอง ตราด",
        best: "เมืองทะเล เช่า เขตอุตสาหกรรม",
        description: "เมืองชายทะเล เช่าสูง เข้าถึง EEC",
      },
    },
  },
  "southern-thailand": {
    color: "var(--green)",
    temp: "29°C",
    weather: {
      en: "Tropical · 24°C - 32°C",
      ar: "استوائي · 24°C - 32°C",
      th: "เขตร้อน · 24°C - 32°C",
    },
    tourist: { value: 90, label: { en: "High", ar: "مرتفع", th: "สูง" } },
    population: { value: 48, label: { en: "Medium", ar: "متوسط", th: "ปานกลาง" } },
    lifestyle: { value: 88, label: { en: "Resort", ar: "منتجعات", th: "รีสอร์ต" } },
    text: {
      en: {
        name: "Southern Thailand",
        area: "Phuket, Krabi, Samui, Surat Thani",
        best: "Villas, tourism rentals, island lifestyle",
        description: "Islands, villas, tourism, beach living",
      },
      ar: {
        name: "جنوب تايلاند",
        area: "فوكيت، كرابي، ساموي، سورات ثاني",
        best: "فلل، إيجارات سياحية، حياة الجزر",
        description: "جزر وفلل وسياحة وحياة شاطئية",
      },
      th: {
        name: "ภาคใต้",
        area: "ภูเก็ต กระบี่ สมุย สุราษฎร์ธานี",
        best: "วิลล่า เช่าท่องเที่ยว ไลฟ์สไตล์เกาะ",
        description: "เกาะ วิลล่า ท่องเที่ยว ชายหาด",
      },
    },
  },
};

const translations = {
  en: {
    brandTag: "Real Estate Gateway",
    navHome: "Home",
    navProperties: "Properties",
    navRegions: "Regions",
    navInvest: "Invest in Thailand",
    navAbout: "About Us",
    navContact: "Contact",
    heroKicker: "Exclusive Thailand Real Estate",
    heroTitle: "Discover Thailand",
    heroLead:
      "Your gateway to exclusive real estate opportunities across Thailand's major lifestyle, investment, and growth regions.",
    whatsapp: "Contact on WhatsApp",
    exploreMap: "Explore map",
    regionKicker: "Explore Thailand",
    regionTitle: "Discover by Region",
    touristDensity: "Tourist Density",
    populationDensity: "Population Density",
    localLifestyle: "Local Lifestyle",
    bestFor: "Best For",
    viewProperties: "View Properties",
    benefitTypesTitle: "All Property Types",
    benefitTypesText: "Villas, condos, land, hotels and more",
    benefitLifestyleTitle: "For All Lifestyles",
    benefitLifestyleText: "Invest, live, holiday or retire",
    benefitExclusiveTitle: "Exclusive Opportunities",
    benefitExclusiveText: "Handpicked properties and projects",
    benefitWhatsappTitle: "Easy Communication",
    benefitWhatsappText: "Chat with us on WhatsApp",
    benefitTrustTitle: "Trusted & Local",
    benefitTrustText: "Thai company with global vision",
    propertyKicker: "Featured Opportunities",
    propertyTitle: "Ready-to-explore property routes",
    propertyOneTitle: "Bangkok condo route",
    propertyOneText: "High-demand locations near transit, hospitals, and business districts.",
    propertyTwoTitle: "Southern villa route",
    propertyTwoText: "Beach-access villas for lifestyle use and managed tourism rentals.",
    propertyThreeTitle: "Northern relocation route",
    propertyThreeText: "Quiet neighborhoods, mountain air, and lower monthly costs.",
    aboutKicker: "About ThaiBridge Property",
    aboutTitle: "Regional insight before property selection",
    aboutText:
      "ThaiBridge Property helps international buyers compare regions first, then match lifestyle, rental demand, budget, and ownership goals to the right opportunities.",
    contactKicker: "Start with the region",
    contactTitle: "Tell us where you want to explore",
    footerText: "Interactive Thailand real estate gateway.",
  },
  ar: {
    brandTag: "بوابة العقار في تايلاند",
    navHome: "الرئيسية",
    navProperties: "العقارات",
    navRegions: "المناطق",
    navInvest: "الاستثمار",
    navAbout: "من نحن",
    navContact: "تواصل",
    heroKicker: "عقارات تايلاند المختارة",
    heroTitle: "اكتشف تايلاند",
    heroLead: "بوابتك لفرص عقارية مميزة عبر مناطق الحياة والاستثمار والنمو في تايلاند.",
    whatsapp: "تواصل عبر واتساب",
    exploreMap: "استكشف الخريطة",
    regionKicker: "استكشف تايلاند",
    regionTitle: "اكتشف حسب المنطقة",
    touristDensity: "الكثافة السياحية",
    populationDensity: "الكثافة السكانية",
    localLifestyle: "نمط الحياة",
    bestFor: "الأفضل لـ",
    viewProperties: "عرض العقارات",
    benefitTypesTitle: "كل أنواع العقارات",
    benefitTypesText: "فلل، شقق، أراضٍ، فنادق وأكثر",
    benefitLifestyleTitle: "لكل أنماط الحياة",
    benefitLifestyleText: "استثمار، سكن، عطلة أو تقاعد",
    benefitExclusiveTitle: "فرص حصرية",
    benefitExclusiveText: "عقارات ومشاريع مختارة بعناية",
    benefitWhatsappTitle: "تواصل سهل",
    benefitWhatsappText: "راسلنا مباشرة عبر واتساب",
    benefitTrustTitle: "ثقة وخبرة محلية",
    benefitTrustText: "شركة تايلاندية برؤية عالمية",
    propertyKicker: "فرص مختارة",
    propertyTitle: "مسارات عقارية جاهزة للاستكشاف",
    propertyOneTitle: "مسار شقق بانكوك",
    propertyOneText: "مواقع ذات طلب قوي قرب المواصلات والمستشفيات ومناطق الأعمال.",
    propertyTwoTitle: "مسار فلل الجنوب",
    propertyTwoText: "فلل قريبة من الشاطئ للسكن الشخصي والإيجار السياحي المدار.",
    propertyThreeTitle: "مسار الانتقال للشمال",
    propertyThreeText: "أحياء هادئة وهواء جبلي وتكاليف شهرية أقل.",
    aboutKicker: "عن ThaiBridge Property",
    aboutTitle: "فهم المنطقة قبل اختيار العقار",
    aboutText:
      "نساعد المشترين الدوليين على مقارنة المناطق أولاً، ثم مطابقة نمط الحياة والطلب الإيجاري والميزانية وهدف التملك مع الفرصة المناسبة.",
    contactKicker: "ابدأ من المنطقة",
    contactTitle: "أخبرنا أين تريد أن تستكشف",
    footerText: "بوابة تفاعلية لعقارات تايلاند.",
  },
  th: {
    brandTag: "ประตูสู่อสังหาฯ ไทย",
    navHome: "หน้าแรก",
    navProperties: "อสังหาฯ",
    navRegions: "ภูมิภาค",
    navInvest: "ลงทุนในไทย",
    navAbout: "เกี่ยวกับเรา",
    navContact: "ติดต่อ",
    heroKicker: "อสังหาริมทรัพย์ไทยคัดพิเศษ",
    heroTitle: "ค้นพบประเทศไทย",
    heroLead: "ประตูสู่โอกาสอสังหาริมทรัพย์ในภูมิภาคหลักด้านไลฟ์สไตล์ การลงทุน และการเติบโต",
    whatsapp: "ติดต่อ WhatsApp",
    exploreMap: "ดูแผนที่",
    regionKicker: "สำรวจประเทศไทย",
    regionTitle: "ค้นพบตามภูมิภาค",
    touristDensity: "ความหนาแน่นนักท่องเที่ยว",
    populationDensity: "ความหนาแน่นประชากร",
    localLifestyle: "ไลฟ์สไตล์",
    bestFor: "เหมาะสำหรับ",
    viewProperties: "ดูอสังหาฯ",
    benefitTypesTitle: "อสังหาฯ ทุกประเภท",
    benefitTypesText: "วิลล่า คอนโด ที่ดิน โรงแรม และอื่นๆ",
    benefitLifestyleTitle: "ทุกไลฟ์สไตล์",
    benefitLifestyleText: "ลงทุน อยู่เอง พักผ่อน หรือเกษียณ",
    benefitExclusiveTitle: "โอกาสพิเศษ",
    benefitExclusiveText: "ทรัพย์และโครงการคัดสรร",
    benefitWhatsappTitle: "สื่อสารง่าย",
    benefitWhatsappText: "คุยกับเราทาง WhatsApp",
    benefitTrustTitle: "ไว้ใจได้และรู้พื้นที่",
    benefitTrustText: "บริษัทไทยพร้อมวิสัยทัศน์สากล",
    propertyKicker: "โอกาสเด่น",
    propertyTitle: "เส้นทางอสังหาฯ ที่พร้อมสำรวจ",
    propertyOneTitle: "เส้นทางคอนโดกรุงเทพฯ",
    propertyOneText: "ทำเลดีใกล้ขนส่ง โรงพยาบาล และย่านธุรกิจ",
    propertyTwoTitle: "เส้นทางวิลล่าภาคใต้",
    propertyTwoText: "วิลล่าใกล้ชายหาดสำหรับพักเองและปล่อยเช่าท่องเที่ยว",
    propertyThreeTitle: "เส้นทางย้ายสู่ภาคเหนือ",
    propertyThreeText: "ย่านสงบ อากาศภูเขา และค่าใช้จ่ายต่ำกว่า",
    aboutKicker: "เกี่ยวกับ ThaiBridge Property",
    aboutTitle: "เข้าใจพื้นที่ก่อนเลือกทรัพย์",
    aboutText:
      "ThaiBridge Property ช่วยผู้ซื้อต่างชาติเปรียบเทียบภูมิภาคก่อน แล้วจึงจับคู่ไลฟ์สไตล์ ความต้องการเช่า งบประมาณ และเป้าหมายการถือครองกับโอกาสที่เหมาะสม",
    contactKicker: "เริ่มจากภูมิภาค",
    contactTitle: "บอกเราว่าคุณอยากสำรวจที่ไหน",
    footerText: "ประตูสู่อสังหาริมทรัพย์ไทยแบบอินเทอร์แอคทีฟ",
  },
};

let activeRegion = "northern-thailand";
let activeLang = "en";
let mapDocument = null;
let thaiMapSvg = null;
let originalMapViewBox = null;
let mapZoomAnimation = null;
let suppressMapClickUntil = 0;
let mapGesture = {
  pointers: new Map(),
  startViewBox: null,
  startDistance: 0,
  startCenter: null,
  startSvgPoint: null,
  moved: false,
  lastTapAt: 0,
};
let activeTooltipData = null;
let provincePointIndex = {};
let provincePoints = [];
const cityMarkers = [
  {
    id: "city-bangkok",
    province: "Bangkok Metropolis",
    title: "Bangkok",
    subtitle: "Capital city - condos - business",
    image: "assets/bangkok.jpg",
    offset: { x: 0, y: -16 },
  },
  {
    id: "city-phuket",
    province: "Phuket",
    title: "Phuket",
    subtitle: "Luxury villas - beaches - rentals",
    image: "assets/phuket.jpg",
    offset: { x: -10, y: -8 },
  },
  {
    id: "city-chiang-mai",
    province: "Chiang Mai",
    title: "Chiang Mai",
    subtitle: "Mountain lifestyle - culture",
    image: "assets/chiang-mai.jpg",
    offset: { x: 0, y: -18 },
  },
  {
    id: "city-krabi",
    province: "Krabi",
    title: "Krabi",
    subtitle: "Nature - islands - resort living",
    image: "assets/surat-thani.jpg",
    offset: { x: -14, y: -12 },
  },
  {
    id: "city-pattaya",
    province: "Chon Buri",
    title: "Pattaya / Chonburi",
    subtitle: "Eastern seaboard - rental demand",
    image: "assets/pattaya.jpg",
    offset: { x: 22, y: -20 },
  },
  {
    id: "city-hua-hin",
    province: "Prachuap Khiri Khan",
    title: "Hua Hin",
    subtitle: "Quiet beach lifestyle - retirement",
    image: "assets/hero.jpg",
    offset: { x: -16, y: 10 },
  },
  {
    id: "city-koh-samui",
    province: "Surat Thani",
    title: "Koh Samui / Surat Thani",
    subtitle: "Island villas - tourism rentals",
    image: "assets/surat-thani.jpg",
    offset: { x: 18, y: 18 },
  },
];
let propertyPins = [
  {
    id: "project-centara-sonrisa",
    province: "Chon Buri",
    title: "Centara Sonrisa Residences & Suites Sriracha",
    city: "Sriracha",
    region: "eastern-seaboard",
    regionLabel: "Chon Buri",
    category: "Hotel investment",
    shortDescription: "145-room hotel opportunity near Pattaya, Laem Chabang, and U-Tapao Airport.",
    subtitle: "Hotel for sale - 145 rooms - Sriracha",
    location: "Sriracha, Chon Buri",
    features: ["Near Pattaya", "Coastal Sriracha", "Hotel asset"],
    price: "THB 750M",
    priceFromOMR: "",
    image: "assets/projects/centara-p1-1.jpg",
    thumbnail: "assets/projects/centara-p1-1.jpg",
    detailUrl: "property-centara-sonrisa.html",
    detailsUrl: "property-centara-sonrisa.html",
    coordinates: { province: "Chon Buri", offset: { x: -26, y: -4 } },
    cta: "Contact on WhatsApp",
    offset: { x: -26, y: -4 },
  },
  {
    id: "project-sonrisa-condominium",
    province: "Chon Buri",
    title: "Sonrisa Sriracha Condominium",
    city: "Sriracha",
    region: "eastern-seaboard",
    regionLabel: "Chon Buri",
    category: "Seaside condominium",
    shortDescription: "Seaside condominium units in Sriracha with pool, fitness, sauna, and library facilities.",
    subtitle: "1BR and duplex units - seaside Sriracha",
    location: "Sriracha, Chon Buri",
    features: ["Sea view", "Near Pattaya", "Ready to move"],
    price: "From THB 2.9M",
    priceFromOMR: "",
    image: "assets/projects/sonrisa-p1-1.jpg",
    thumbnail: "assets/projects/sonrisa-p1-1.jpg",
    detailUrl: "property-sonrisa-sriracha.html",
    detailsUrl: "property-sonrisa-sriracha.html",
    coordinates: { province: "Chon Buri", offset: { x: 20, y: 18 } },
    cta: "Contact on WhatsApp",
    offset: { x: 20, y: 18 },
  },
];

const root = document.documentElement;
const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const mapHost = document.querySelector("#gadm-map-host");
const mapObject = document.querySelector("#gadm-map-object");
const activeName = document.querySelector("#active-name");
const activeArea = document.querySelector("#active-area");
const activeTemp = document.querySelector("#active-temp");
const activeWeather = document.querySelector("#active-weather");
const activeBest = document.querySelector("#active-best");
const touristLabel = document.querySelector("#tourist-label");
const touristMeter = document.querySelector("#tourist-meter");
const populationLabel = document.querySelector("#population-label");
const populationMeter = document.querySelector("#population-meter");
const lifestyleLabel = document.querySelector("#lifestyle-label");
const lifestyleMeter = document.querySelector("#lifestyle-meter");

function translate(key) {
  return translations[activeLang][key] || translations.en[key] || "";
}

function getRegionText(region) {
  return region.text[activeLang] || region.text.en;
}

function updateStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
}

function updateRegionButtons() {
  document.querySelectorAll(".region-button").forEach((button) => {
    const region = regions[button.dataset.region];
    if (!region) return;
    const copy = getRegionText(region);
    button.querySelector("strong").textContent = copy.name;
    button.querySelector("small").textContent = copy.area;
    button.querySelector("em").textContent = copy.description;
  });
}

function getMapGroups() {
  if (!mapDocument) return [];
  return Object.keys(regions)
    .map((id) => mapDocument.getElementById(id))
    .filter(Boolean);
}

function syncMapState(regionId) {
  getMapGroups().forEach((group) => {
    const isActive = group.id === regionId;
    group.classList.toggle("active", isActive);
    group.classList.toggle("dimmed", !isActive);
    group.setAttribute("aria-pressed", String(isActive));
  });
}

function setActiveRegion(regionId) {
  const region = regions[regionId];
  if (!region) return;

  activeRegion = regionId;
  const copy = getRegionText(region);

  root.style.setProperty("--active-color", region.color);
  root.style.setProperty("--active-image", imageVars[regionId]);
  activeName.textContent = copy.name;
  activeArea.textContent = copy.area;
  activeTemp.textContent = region.temp;
  activeWeather.textContent = region.weather[activeLang] || region.weather.en;
  activeBest.textContent = copy.best;
  touristLabel.textContent = region.tourist.label[activeLang] || region.tourist.label.en;
  populationLabel.textContent = region.population.label[activeLang] || region.population.label.en;
  lifestyleLabel.textContent = region.lifestyle.label[activeLang] || region.lifestyle.label.en;
  touristMeter.style.width = `${region.tourist.value}%`;
  populationMeter.style.width = `${region.population.value}%`;
  lifestyleMeter.style.width = `${region.lifestyle.value}%`;

  document.querySelectorAll(".region-button").forEach((button) => {
    const isActive = button.dataset.region === regionId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  syncMapState(regionId);
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  activeLang = lang;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  updateStaticText();
  updateRegionButtons();
  setActiveRegion(activeRegion);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

function bindRegionControls() {
  document.querySelectorAll(".region-button").forEach((element) => {
    const regionId = element.dataset.region;

    element.addEventListener("click", () => zoomToRegion(regionId));
    element.addEventListener("mouseenter", () => setActiveRegion(regionId));
    element.addEventListener("focus", () => setActiveRegion(regionId));
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveRegion(regionId);
      }
    });
  });
}

function bindNavigation() {
  menuToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

async function loadProvincePointIndex() {
  try {
    const response = await fetch("assets/thailand-province-points.json");
    if (!response.ok) throw new Error("Province points could not be loaded.");
    const points = await response.json();
    provincePoints = points;
    provincePointIndex = points.reduce((index, point) => {
      index[point.province.toLowerCase()] = point;
      index[point.slug] = point;
      return index;
    }, {});
  } catch (error) {
    provincePoints = [];
    provincePointIndex = {};
  }
}

function getProvincePoint(pin) {
  if (pin.x && pin.y) return pin;
  const key = (pin.provinceSlug || pin.province || "").toLowerCase();
  return provincePointIndex[key];
}

function ensureMapControls() {
  if (!mapHost || mapHost.querySelector(".map-zoom-controls")) return;

  const controls = document.createElement("div");
  controls.className = "map-zoom-controls";
  controls.innerHTML = `
    <button type="button" data-map-zoom="in" aria-label="Zoom in"><i data-lucide="plus"></i></button>
    <button type="button" data-map-zoom="out" aria-label="Zoom out"><i data-lucide="minus"></i></button>
    <button type="button" data-map-zoom="reset" aria-label="Reset map"><i data-lucide="rotate-ccw"></i></button>
  `;
  mapHost.appendChild(controls);

  controls.querySelector('[data-map-zoom="in"]').addEventListener("click", () => zoomMapBy(0.82));
  controls.querySelector('[data-map-zoom="out"]').addEventListener("click", () => zoomMapBy(1.18));
  controls.querySelector('[data-map-zoom="reset"]').addEventListener("click", resetMapZoom);

  if (window.lucide) window.lucide.createIcons();
}

function getCurrentViewBox() {
  if (!thaiMapSvg) return null;
  const viewBox = thaiMapSvg.viewBox.baseVal;
  return { x: viewBox.x, y: viewBox.y, width: viewBox.width, height: viewBox.height };
}

function getMapZoomLevel(box = getCurrentViewBox()) {
  if (!originalMapViewBox || !box) return 1;
  return originalMapViewBox.width / box.width;
}

function constrainMapViewBox(box) {
  if (!originalMapViewBox) return box;
  const width = Math.min(Math.max(box.width, 150), originalMapViewBox.width);
  const height = Math.min(Math.max(box.height, 180), originalMapViewBox.height);
  const maxX = originalMapViewBox.x + originalMapViewBox.width - width;
  const maxY = originalMapViewBox.y + originalMapViewBox.height - height;
  return {
    x: Math.min(Math.max(box.x, originalMapViewBox.x), maxX),
    y: Math.min(Math.max(box.y, originalMapViewBox.y), maxY),
    width,
    height,
  };
}

function updateMapZoomState(box, zoomed = true) {
  const zoomLevel = getMapZoomLevel(box);
  mapHost?.classList.toggle("map-is-zoomed", zoomed);
  mapHost?.style.setProperty("--map-zoom-level", zoomLevel.toFixed(2));
}

function applyMapViewBox(box, zoomed = true, options = {}) {
  if (!thaiMapSvg) return;
  thaiMapSvg.setAttribute("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`);
  updateMapZoomState(box, zoomed);
  if (options.renderLabels !== false) {
    renderProvinceLabels(zoomed ? activeRegion : null);
  }
  if (activeTooltipData) {
    setTooltipPosition(ensureMapTooltip(), activeTooltipData.x, activeTooltipData.y);
  }
}

function setMapViewBox(box, zoomed = true, options = {}) {
  if (!thaiMapSvg) return;
  box = constrainMapViewBox(box);
  const start = getCurrentViewBox();
  const animate = options.animate !== false && start;
  if (!animate) {
    applyMapViewBox(box, zoomed, options);
    return;
  }

  if (mapZoomAnimation) cancelAnimationFrame(mapZoomAnimation);
  const duration = options.duration || 420;
  const startedAt = performance.now();
  updateMapZoomState(box, zoomed);

  function step(now) {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const frame = {
      x: start.x + (box.x - start.x) * eased,
      y: start.y + (box.y - start.y) * eased,
      width: start.width + (box.width - start.width) * eased,
      height: start.height + (box.height - start.height) * eased,
    };
    thaiMapSvg.setAttribute("viewBox", `${frame.x} ${frame.y} ${frame.width} ${frame.height}`);

    if (progress < 1) {
      mapZoomAnimation = requestAnimationFrame(step);
      return;
    }

    mapZoomAnimation = null;
    applyMapViewBox(box, zoomed, options);
  }

  mapZoomAnimation = requestAnimationFrame(step);
}

function zoomMapBy(scale) {
  const current = getCurrentViewBox();
  if (!current || !originalMapViewBox) return;
  const nextWidth = Math.min(Math.max(current.width * scale, 170), originalMapViewBox.width);
  const nextHeight = Math.min(Math.max(current.height * scale, 300), originalMapViewBox.height);
  setMapViewBox({
    x: current.x + (current.width - nextWidth) / 2,
    y: current.y + (current.height - nextHeight) / 2,
    width: nextWidth,
    height: nextHeight,
  });
}

function screenPointToSvg(clientX, clientY, box = getCurrentViewBox()) {
  if (!thaiMapSvg || !box) return null;
  const rect = thaiMapSvg.getBoundingClientRect();
  return {
    x: box.x + ((clientX - rect.left) / rect.width) * box.width,
    y: box.y + ((clientY - rect.top) / rect.height) * box.height,
  };
}

function getPointerCenter(pointers = [...mapGesture.pointers.values()]) {
  const total = pointers.reduce(
    (sum, pointer) => ({ x: sum.x + pointer.clientX, y: sum.y + pointer.clientY }),
    { x: 0, y: 0 },
  );
  return { x: total.x / pointers.length, y: total.y / pointers.length };
}

function getPointerDistance(pointers = [...mapGesture.pointers.values()]) {
  if (pointers.length < 2) return 0;
  return Math.hypot(
    pointers[0].clientX - pointers[1].clientX,
    pointers[0].clientY - pointers[1].clientY,
  );
}

function zoomToScreenPoint(clientX, clientY, scale) {
  const current = getCurrentViewBox();
  const svgPoint = screenPointToSvg(clientX, clientY, current);
  const rect = thaiMapSvg?.getBoundingClientRect();
  if (!current || !svgPoint || !rect) return;
  const nextWidth = Math.min(Math.max(current.width * scale, 150), originalMapViewBox.width);
  const nextHeight = Math.min(Math.max(current.height * scale, 180), originalMapViewBox.height);
  setMapViewBox(
    {
      x: svgPoint.x - ((clientX - rect.left) / rect.width) * nextWidth,
      y: svgPoint.y - ((clientY - rect.top) / rect.height) * nextHeight,
      width: nextWidth,
      height: nextHeight,
    },
    nextWidth < originalMapViewBox.width,
    { duration: 320 },
  );
}

function panMapByPixels(deltaX, deltaY, startViewBox = getCurrentViewBox()) {
  const rect = thaiMapSvg?.getBoundingClientRect();
  if (!rect || !startViewBox) return;
  setMapViewBox(
    {
      x: startViewBox.x - (deltaX / rect.width) * startViewBox.width,
      y: startViewBox.y - (deltaY / rect.height) * startViewBox.height,
      width: startViewBox.width,
      height: startViewBox.height,
    },
    getMapZoomLevel(startViewBox) > 1.02,
    { animate: false, renderLabels: false },
  );
}

function updatePinchZoom() {
  const pointers = [...mapGesture.pointers.values()];
  if (pointers.length < 2 || !mapGesture.startViewBox || !mapGesture.startSvgPoint) return;
  const distance = getPointerDistance(pointers);
  const center = getPointerCenter(pointers);
  const rect = thaiMapSvg?.getBoundingClientRect();
  if (!distance || !rect) return;

  const scale = mapGesture.startDistance / distance;
  const nextWidth = Math.min(Math.max(mapGesture.startViewBox.width * scale, 150), originalMapViewBox.width);
  const nextHeight = Math.min(Math.max(mapGesture.startViewBox.height * scale, 180), originalMapViewBox.height);
  setMapViewBox(
    {
      x: mapGesture.startSvgPoint.x - ((center.x - rect.left) / rect.width) * nextWidth,
      y: mapGesture.startSvgPoint.y - ((center.y - rect.top) / rect.height) * nextHeight,
      width: nextWidth,
      height: nextHeight,
    },
    nextWidth < originalMapViewBox.width,
    { animate: false, renderLabels: false },
  );
}

function bindMapGestures() {
  if (!mapHost || mapHost.dataset.gesturesBound === "true") return;
  mapHost.dataset.gesturesBound = "true";

  mapHost.addEventListener("pointerdown", (event) => {
    if (event.target.closest("a, button")) return;
    const viewBox = getCurrentViewBox();
    if (!viewBox) return;
    try {
      mapHost.setPointerCapture?.(event.pointerId);
    } catch (error) {
      // Synthetic tests and a few older mobile browsers can reject capture.
    }
    mapGesture.pointers.set(event.pointerId, {
      clientX: event.clientX,
      clientY: event.clientY,
      startX: event.clientX,
      startY: event.clientY,
    });
    mapGesture.startViewBox = viewBox;
    mapGesture.moved = false;

    if (mapGesture.pointers.size >= 2) {
      const pointers = [...mapGesture.pointers.values()];
      mapGesture.startDistance = getPointerDistance(pointers);
      mapGesture.startCenter = getPointerCenter(pointers);
      mapGesture.startSvgPoint = screenPointToSvg(
        mapGesture.startCenter.x,
        mapGesture.startCenter.y,
        viewBox,
      );
      hideMapTooltip();
    }
  });

  mapHost.addEventListener(
    "pointermove",
    (event) => {
      if (!mapGesture.pointers.has(event.pointerId)) return;
      const pointer = mapGesture.pointers.get(event.pointerId);
      pointer.clientX = event.clientX;
      pointer.clientY = event.clientY;
      const movedDistance = Math.hypot(pointer.clientX - pointer.startX, pointer.clientY - pointer.startY);
      if (movedDistance > 4) {
        mapGesture.moved = true;
        suppressMapClickUntil = Date.now() + 350;
      }

      if (mapGesture.pointers.size >= 2) {
        event.preventDefault();
        updatePinchZoom();
        return;
      }

      if (mapGesture.moved && mapGesture.startViewBox) {
        event.preventDefault();
        panMapByPixels(event.clientX - pointer.startX, event.clientY - pointer.startY, mapGesture.startViewBox);
      }
    },
    { passive: false },
  );

  ["pointerup", "pointercancel", "pointerleave"].forEach((type) => {
    mapHost.addEventListener(type, (event) => {
      const pointer = mapGesture.pointers.get(event.pointerId);
      mapGesture.pointers.delete(event.pointerId);
      if (!pointer) return;

      const wasTap = !mapGesture.moved && Math.hypot(event.clientX - pointer.startX, event.clientY - pointer.startY) < 8;
      if (type === "pointerup" && wasTap && !event.target.closest(".property-marker, .city-marker")) {
        const now = Date.now();
        if (now - mapGesture.lastTapAt < 320) {
          zoomToScreenPoint(event.clientX, event.clientY, 0.68);
          suppressMapClickUntil = now + 350;
        }
        mapGesture.lastTapAt = now;
      }

      if (mapGesture.pointers.size === 1) {
        const remaining = [...mapGesture.pointers.values()][0];
        mapGesture.startViewBox = getCurrentViewBox();
        remaining.startX = remaining.clientX;
        remaining.startY = remaining.clientY;
      } else if (mapGesture.pointers.size === 0) {
        const zoomed = getMapZoomLevel() > 1.02;
        renderProvinceLabels(zoomed ? activeRegion : null);
      }
    });
  });

  mapHost.addEventListener(
    "wheel",
    (event) => {
      if (!event.ctrlKey && Math.abs(event.deltaY) < 18) return;
      event.preventDefault();
      zoomToScreenPoint(event.clientX, event.clientY, event.deltaY > 0 ? 1.12 : 0.88);
    },
    { passive: false },
  );
}

function resetMapZoom() {
  if (!originalMapViewBox) return;
  setMapViewBox(originalMapViewBox, false, { duration: 360 });
  hideMapTooltip();
}

function zoomToRegion(regionId) {
  const group = mapDocument?.getElementById(regionId);
  if (!group || !thaiMapSvg) return;
  setActiveRegion(regionId);
  const box = group.getBBox();
  const pad = Math.max(box.width, box.height) * 0.12;
  setMapViewBox({
    x: box.x - pad,
    y: box.y - pad,
    width: box.width + pad * 2,
    height: box.height + pad * 2,
  });
}

function zoomToPoint(x, y, regionId) {
  if (!thaiMapSvg) return;
  if (regionId) setActiveRegion(regionId);
  setMapViewBox({
    x: x - 140,
    y: y - 150,
    width: 280,
    height: 320,
  });
}

function getProvinceLabelMetrics() {
  const viewBox = getCurrentViewBox();
  const svgRect = thaiMapSvg?.getBoundingClientRect();
  if (!viewBox || !svgRect?.width) return { fontSize: 10, strokeWidth: 2 };
  const zoomLevel = getMapZoomLevel(viewBox);
  const targetScreenSize = Math.max(8.6, 12.4 - Math.min(zoomLevel - 1, 3) * 1.1);
  const fontSize = (targetScreenSize * viewBox.width) / svgRect.width;
  return {
    fontSize: Math.max(4.8, Math.min(13, fontSize)),
    strokeWidth: zoomLevel > 2.2 ? 1.7 : 2.1,
  };
}

function renderProvinceLabels(regionId) {
  if (!thaiMapSvg) return;

  const namespace = "http://www.w3.org/2000/svg";
  let layer = thaiMapSvg.querySelector("#province-label-layer");
  if (!layer) {
    layer = document.createElementNS(namespace, "g");
    layer.id = "province-label-layer";
    layer.classList.add("province-label-layer");
    thaiMapSvg.appendChild(layer);
  }

  layer.textContent = "";
  if (!regionId) return;

  const labelMetrics = getProvinceLabelMetrics();
  provincePoints
    .filter((point) => point.region === regionId)
    .forEach((point) => {
      const label = document.createElementNS(namespace, "text");
      label.classList.add("province-label");
      label.setAttribute("x", point.x);
      label.setAttribute("y", point.y);
      label.setAttribute("font-size", labelMetrics.fontSize.toFixed(2));
      label.setAttribute("stroke-width", labelMetrics.strokeWidth.toFixed(2));
      label.textContent = point.province;
      layer.appendChild(label);
    });
}

function getPropertyFocusData(propertyId) {
  const property = propertyPins.find((pin) => pin.id === propertyId);
  if (!property) return null;
  const coordinates = property.coordinates || {};
  const point = getProvincePoint({ ...property, province: coordinates.province || property.province });
  if (!point) return null;
  const offset = coordinates.offset || property.offset || {};
  return {
    ...property,
    x: point.x + (offset.x || 0),
    y: point.y + (offset.y || 0),
    region: point.region,
    badge: property.price || "Contact",
    markerType: "property",
  };
}

function focusPropertyOnMap(propertyId, options = {}) {
  const data = getPropertyFocusData(propertyId);
  if (!data) return false;

  if (options.scroll !== false) {
    document.querySelector("#regions")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  zoomToPoint(data.x, data.y, data.region);
  showMapTooltip(data);

  thaiMapSvg?.querySelectorAll(".property-marker.focused").forEach((marker) => {
    marker.classList.remove("focused");
  });
  thaiMapSvg
    ?.querySelector(`[data-marker-type="property"][data-marker-id="${propertyId}"]`)
    ?.classList.add("focused");
  return true;
}

function focusPropertyFromUrl() {
  const propertyId = new URLSearchParams(window.location.search).get("property");
  if (!propertyId) return;
  requestAnimationFrame(() => focusPropertyOnMap(propertyId));
}

function renderPropertyPins() {
  if (!thaiMapSvg) return;

  const namespace = "http://www.w3.org/2000/svg";
  let layer = thaiMapSvg.querySelector("#property-marker-layer");
  if (!layer) {
    layer = document.createElementNS(namespace, "g");
    layer.id = "property-marker-layer";
    layer.classList.add("property-marker-layer");
    thaiMapSvg.appendChild(layer);
  }

  layer.textContent = "";

  propertyPins.forEach((pin) => {
    const coordinates = pin.coordinates || {};
    const point = getProvincePoint({ ...pin, province: coordinates.province || pin.province });
    if (!point) return;
    const offset = coordinates.offset || pin.offset || {};
    const x = point.x + (offset.x || 0);
    const y = point.y + (offset.y || 0);

    const marker = document.createElementNS(namespace, "g");
    marker.classList.add("property-marker");
    marker.dataset.markerType = "property";
    marker.dataset.markerId = pin.id;
    marker.setAttribute("transform", `translate(${x} ${y})`);
    marker.setAttribute("tabindex", "0");
    marker.setAttribute("role", "button");
    marker.setAttribute("aria-label", pin.title || `Property in ${point.province}`);

    const halo = document.createElementNS(namespace, "circle");
    halo.classList.add("property-marker-halo");
    halo.setAttribute("r", "18");

    const diamond = document.createElementNS(namespace, "path");
    diamond.classList.add("property-marker-diamond");
    diamond.setAttribute(
      "d",
      "M0 -18 C-8 -18 -14 -12 -14 -4 C-14 7 0 19 0 19 C0 19 14 7 14 -4 C14 -12 8 -18 0 -18 Z",
    );

    const dot = document.createElementNS(namespace, "circle");
    dot.classList.add("property-marker-dot");
    dot.setAttribute("cy", "-4");
    dot.setAttribute("r", "4.8");

    const title = document.createElementNS(namespace, "title");
    title.textContent = pin.title || `Property in ${point.province}`;

    marker.append(title, halo, diamond, dot);
    bindMarkerTooltip(marker, {
      ...pin,
      x,
      y,
      region: point.region,
      badge: pin.price || "Contact",
      markerType: "property",
    });
    layer.appendChild(marker);
  });
}

function renderCityMarkers() {
  if (!thaiMapSvg) return;

  const namespace = "http://www.w3.org/2000/svg";
  let layer = thaiMapSvg.querySelector("#city-marker-layer");
  if (!layer) {
    layer = document.createElementNS(namespace, "g");
    layer.id = "city-marker-layer";
    layer.classList.add("city-marker-layer");
    thaiMapSvg.appendChild(layer);
  }

  layer.textContent = "";

  cityMarkers.forEach((pin) => {
    const point = getProvincePoint(pin);
    if (!point) return;
    const x = point.x + (pin.offset?.x || 0);
    const y = point.y + (pin.offset?.y || 0);

    const marker = document.createElementNS(namespace, "g");
    marker.classList.add("city-marker");
    marker.dataset.markerType = "city";
    marker.dataset.markerId = pin.id;
    marker.setAttribute("transform", `translate(${x} ${y})`);
    marker.setAttribute("tabindex", "0");
    marker.setAttribute("role", "button");
    marker.setAttribute("aria-label", pin.title);

    const halo = document.createElementNS(namespace, "circle");
    halo.classList.add("city-marker-halo");
    halo.setAttribute("r", "13");

    const dot = document.createElementNS(namespace, "circle");
    dot.classList.add("city-marker-dot");
    dot.setAttribute("r", "4.5");

    const title = document.createElementNS(namespace, "title");
    title.textContent = pin.title;

    marker.append(title, halo, dot);
    bindMarkerTooltip(marker, {
      ...pin,
      x,
      y,
      region: point.region,
      badge: "Key area",
      markerType: "city",
    });
    layer.appendChild(marker);
  });
}

function ensureMapTooltip() {
  let tooltip = mapHost?.querySelector(".map-hover-card");
  if (!tooltip && mapHost) {
    tooltip = document.createElement("div");
    tooltip.className = "map-hover-card";
    tooltip.setAttribute("role", "status");
    mapHost.appendChild(tooltip);
  }
  return tooltip;
}

function setTooltipPosition(tooltip, x, y) {
  if (!thaiMapSvg || !mapHost) return;
  const viewBox = thaiMapSvg.viewBox.baseVal;
  const svgRect = thaiMapSvg.getBoundingClientRect();
  const hostRect = mapHost.getBoundingClientRect();
  const left = ((x - viewBox.x) / viewBox.width) * svgRect.width + svgRect.left - hostRect.left;
  const top = ((y - viewBox.y) / viewBox.height) * svgRect.height + svgRect.top - hostRect.top;
  const tooltipHeight = tooltip.offsetHeight || 240;
  tooltip.style.left = `${Math.min(Math.max(left, 118), hostRect.width - 118)}px`;
  tooltip.style.top = `${Math.min(Math.max(top + 24, 84), Math.max(84, hostRect.height - tooltipHeight - 14))}px`;
}

function showMapTooltip(data) {
  const tooltip = ensureMapTooltip();
  if (!tooltip) return;
  activeTooltipData = data;
  if (data.markerType === "property" && data.id) {
    thaiMapSvg?.querySelectorAll(".property-marker.focused").forEach((marker) => {
      marker.classList.remove("focused");
    });
    thaiMapSvg
      ?.querySelector(`[data-marker-type="property"][data-marker-id="${data.id}"]`)
      ?.classList.add("focused");
  }
  const detailUrl = data.detailUrl || data.detailsUrl;
  const detailsLink = detailUrl
    ? `<a class="tooltip-action" href="${detailUrl}">View Details</a>`
    : "";
  const whatsappLink =
    data.markerType === "property"
      ? `<a class="tooltip-action whatsapp" href="https://wa.me/66644462456?text=${encodeURIComponent(`Hello ThaiBridge Property, I want details about ${data.title}.`)}" target="_blank" rel="noreferrer">WhatsApp</a>`
      : "";
  tooltip.dataset.markerType = data.markerType || "";

  if (data.markerType === "property") {
    const projectImage = data.thumbnail || data.image;
    const location = [data.city, data.regionLabel].filter(Boolean).join(", ") || data.location || "Thailand";
    const features = Array.isArray(data.features) && data.features.length
      ? `<p class="tooltip-features">${data.features.slice(0, 3).join(" • ")}</p>`
      : "";
    const price = data.priceFromOMR
      ? `Starting from OMR ${data.priceFromOMR}`
      : "Starting from Contact us";
    tooltip.innerHTML = `
      <button class="tooltip-close" type="button" aria-label="Close project card"><i data-lucide="x"></i></button>
      <img class="tooltip-image" src="${projectImage}" alt="${data.title}" loading="lazy" decoding="async" />
      <span>${location}</span>
      <strong>${data.title}</strong>
      <small>${data.shortDescription || data.subtitle || ""}</small>
      ${features}
      <p class="tooltip-price">${price}</p>
      ${detailsLink ? `<div class="tooltip-actions">${detailsLink}</div>` : ""}
    `;
  } else {
    tooltip.innerHTML = `
      <button class="tooltip-close" type="button" aria-label="Close card"><i data-lucide="x"></i></button>
      <img class="tooltip-image" src="${data.image}" alt="${data.title}" loading="lazy" decoding="async" />
      <span>${data.badge}</span>
      <strong>${data.title}</strong>
      <small>${data.subtitle || ""}</small>
      ${detailsLink || whatsappLink ? `<div class="tooltip-actions">${detailsLink}${whatsappLink}</div>` : ""}
    `;
  }
  tooltip.querySelector(".tooltip-close")?.addEventListener("click", hideMapTooltip);
  if (window.lucide) window.lucide.createIcons();
  setTooltipPosition(tooltip, data.x, data.y);
  tooltip.classList.add("visible");
}

function hideMapTooltip() {
  const tooltip = ensureMapTooltip();
  if (tooltip) tooltip.classList.remove("visible");
  activeTooltipData = null;
}

function bindMarkerTooltip(marker, data) {
  marker.addEventListener("mouseenter", () => {
    if (data.markerType !== "property") showMapTooltip(data);
  });
  marker.addEventListener("focus", () => showMapTooltip(data));
  marker.addEventListener("click", (event) => {
    event.stopPropagation();
    if (Date.now() < suppressMapClickUntil) return;
    zoomToPoint(data.x, data.y, data.region);
    showMapTooltip(data);
    if (data.markerType === "property") {
      thaiMapSvg?.querySelectorAll(".property-marker.focused").forEach((focusedMarker) => {
        focusedMarker.classList.remove("focused");
      });
      marker.classList.add("focused");
    }
  });
  marker.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      zoomToPoint(data.x, data.y, data.region);
      showMapTooltip(data);
    }
  });
  marker.addEventListener("mouseleave", () => {
    if (data.markerType !== "property") hideMapTooltip();
  });
  marker.addEventListener("blur", () => {
    if (data.markerType !== "property") hideMapTooltip();
  });
}

function attachGadmMap(scope) {
  if (!scope) return;
  mapDocument = scope;

  getMapGroups().forEach((group) => {
    if (group.dataset.bound === "true") return;
    group.dataset.bound = "true";
    const regionId = group.id;

    group.addEventListener("click", () => {
      if (Date.now() < suppressMapClickUntil) return;
      zoomToRegion(regionId);
    });
    group.addEventListener("mouseenter", () => setActiveRegion(regionId));
    group.addEventListener("focus", () => setActiveRegion(regionId));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveRegion(regionId);
      }
    });
  });

  setActiveRegion(activeRegion);
  renderCityMarkers();
  renderPropertyPins();
}

async function loadGadmMap() {
  if (!mapHost) return;

  try {
    const response = await fetch(mapHost.dataset.mapSrc);
    if (!response.ok) throw new Error("Map SVG could not be loaded.");
    const svgText = await response.text();
    mapHost.innerHTML = svgText;
    const inlineSvg = mapHost.querySelector("svg");
    inlineSvg.classList.add("thai-gadm-map", "thai-gadm-inline-map");
    inlineSvg.removeAttribute("width");
    inlineSvg.removeAttribute("height");
    thaiMapSvg = inlineSvg;
    originalMapViewBox = getCurrentViewBox();
    ensureMapControls();
    bindMapGestures();
    await loadProvincePointIndex();
    attachGadmMap(document);
    focusPropertyFromUrl();
  } catch (error) {
    if (mapObject) {
      mapObject.addEventListener("load", () => {
        attachGadmMap(mapObject.contentDocument);
        bindMapGestures();
        focusPropertyFromUrl();
      });
      attachGadmMap(mapObject.contentDocument);
      bindMapGestures();
    }
  }
}

bindRegionControls();
bindNavigation();
setLanguage(activeLang);

loadGadmMap();

const mapApi = {
  addProperty(property) {
    propertyPins = [...propertyPins, property];
    renderPropertyPins();
  },
  setCityMarkers(markers) {
    cityMarkers.splice(0, cityMarkers.length, ...(Array.isArray(markers) ? markers : []));
    renderCityMarkers();
  },
  setProperties(properties) {
    propertyPins = Array.isArray(properties) ? properties : [];
    renderPropertyPins();
  },
  getProvincePoint(province) {
    return provincePointIndex[String(province).toLowerCase()] || null;
  },
  focusProperty(propertyId) {
    return focusPropertyOnMap(propertyId);
  },
};

window.ThaiBridgeMap = mapApi;
window.ThaiHubMap = mapApi;

if (window.lucide) {
  window.lucide.createIcons();
}
