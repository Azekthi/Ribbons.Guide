// Languages
const languages = {
	"ger": { "iso": "de",		"name": "Deutsch" },			// German
	"eng": { "iso": "en",		"name": "English" },			// English
	"spa": { "iso": "es",		"name": "Español (España)" },	// Spanish
	"fre": { "iso": "fr",		"name": "Français" },			// French
	"ita": { "iso": "it",		"name": "Italiano" },			// Italian
	"jpn": { "iso": "ja",		"name": "日本語" },			// Japanese
	"kor": { "iso": "ko",		"name": "한국어" },			// Korean
	"cht": { "iso": "zh-Hant",	"name": "正體字" },		// Traditional Chinese (Cantonese)
	"chs": { "iso": "zh-Hans",	"name": "简化字" }		// Simplified Chinese (Mandarin)
}

// General terms
const terms = {
	"mint": {
		"ger": "Minze",
		"eng": "Mint",
		"spa": "Menta",
		"fre": "Aromate",
		"ita": "Menta",
		"jpn": "ミント",
		"kor": "민트",
		"cht": "薄荷",
		"chs": "薄荷"
	},
	"none": {
		"ger": "Keiner",
		"eng": "None",
		"spa": "Ninguna",
		"fre": "Aucune",
		"ita": "Nessuno",
		"jpn": "なし",
		"kor": "없음",
		"cht": "沒有任何",
		"chs": "没有任何"
	},
	"gens": {
		1: "Gen&nbsp;I Virtual Console",
		2: "Gen&nbsp;II Virtual Console",
		3: "Gen&nbsp;III",
		4: "Gen&nbsp;IV",
		5: "Gen&nbsp;V",
		6: "Gen&nbsp;VI",
		7: "Gen&nbsp;VII",
		8: "Gen&nbsp;VIII/IX",
		"e": "Event",
		"m": "Marks"
	}
}

// Repeated messages
const messages = {
	"guide-event-ribbon": {
		"eng": "This is an Event Ribbon and cannot be manually earned. It is included with certain event distribution Pokémon."
	},
	"guide-memory-ribbon": {
		"eng": "This is a Memory Ribbon and cannot be manually earned. It automatically replaces older Ribbons when a Pokémon moves to " + terms.gens[5] + "."
	}
}

// Origin Marks
const games = {
	"home":		{"name": "HOME",				"gen": 8,		"mark": null},
	"bank7":	{"name": "Bank (Gen VII)",		"gen": 7,		"mark": null},
	"bank":		{"name": "Bank (Gen VI)",		"gen": 6,		"mark": null},
	"scar":		{"name": "Scarlet",				"gen": 8,		"mark": "paldea"},
	"vio":		{"name": "Violet",				"gen": 8,		"mark": "paldea"},
	"sw":		{"name": "Sword",				"gen": 8,		"mark": "galar"},
	"sh":		{"name": "Shield",				"gen": 8,		"mark": "galar"},
	"bd":		{"name": "Brilliant Diamond",	"gen": 8,		"mark": "bdsp"},
	"sp":		{"name": "Shining Pearl",		"gen": 8,		"mark": "bdsp"},
	"pla":		{"name": "Legends: Arceus",		"gen": 8,		"mark": "hisui"},
	"go":		{"name": "GO",					"gen": 7,		"mark": "go"},
	"sun":		{"name": "Sun",					"gen": 7,		"mark": "clover"},
	"moon":		{"name": "Moon",				"gen": 7,		"mark": "clover"},
	"usun":		{"name": "Ultra Sun",			"gen": 7,		"mark": "clover"},
	"umoon":	{"name": "Ultra Moon",			"gen": 7,		"mark": "clover"},
	"lgp":		{"name": "Let's Go, Pikachu!",	"gen": 7,		"mark": "lets-go"},
	"lge":		{"name": "Let's Go, Eevee!",	"gen": 7,		"mark": "lets-go"},
	"x":		{"name": "X",					"gen": 6,		"mark": "pentagon"},
	"y":		{"name": "Y",					"gen": 6,		"mark": "pentagon"},
	"or":		{"name": "Omega Ruby",			"gen": 6,		"mark": "pentagon"},
	"as":		{"name": "Alpha Sapphire",		"gen": 6,		"mark": "pentagon"},
	"black":	{"name": "Black",				"gen": 5,		"mark": null},
	"white":	{"name": "White",				"gen": 5,		"mark": null},
	"black2":	{"name": "Black 2",				"gen": 5,		"mark": null},
	"white2":	{"name": "White 2",				"gen": 5,		"mark": null},
	"diamond":	{"name": "Diamond",				"gen": 4,		"mark": null},
	"pearl":	{"name": "Pearl",				"gen": 4,		"mark": null},
	"platinum":	{"name": "Platinum",			"gen": 4,		"mark": null},
	"hg":		{"name": "HeartGold",			"gen": 4,		"mark": null},
	"ss":		{"name": "SoulSilver",			"gen": 4,		"mark": null},
	"ruby":		{"name": "Ruby",				"gen": 3,		"mark": null},
	"sapphire":	{"name": "Sapphire",			"gen": 3,		"mark": null},
	"emerald":	{"name": "Emerald",				"gen": 3,		"mark": null},
	"fr":		{"name": "FireRed",				"gen": 3,		"mark": null},
	"lg":		{"name": "LeafGreen",			"gen": 3,		"mark": null},
	"colosseum":{"name": "Colosseum",			"gen": 3,		"mark": null},
	"xd":		{"name": "XD: Gale of Darkness","gen": 3,		"mark": null},
	"gold":		{"name": "Gold",				"gen": 2,		"mark": "game-boy"},
	"silver":	{"name": "Silver",				"gen": 2,		"mark": "game-boy"},
	"crystal":	{"name": "Crystal",				"gen": 2,		"mark": "game-boy"},
	"red-jpn":	{"name": "Red (JPN)",			"gen": 1,		"mark": "game-boy"},
	"green":	{"name": "Green",				"gen": 1,		"mark": "game-boy"},
	"blue-jpn":	{"name": "Blue (JPN)",			"gen": 1,		"mark": "game-boy"},
	"red-eng":	{"name": "Red (ENG)",			"gen": 1,		"mark": "game-boy"},
	"blue-eng":	{"name": "Blue (ENG)",			"gen": 1,		"mark": "game-boy"},
	"yellow":	{"name": "Yellow",				"gen": 1,		"mark": "game-boy"}
};

const commonforms = {
	"alola": {
		"ger": "Alola-Form",
		"eng": "Alolan Form",
		"spa": "Forma de Alola",
		"fre": "Forme d'Alola",
		"ita": "Forma di Alola",
		"jpn": "アローラのすがた",
		"kor": "알로라의 모습",
		"cht": "阿羅拉的樣子",
		"chs": "阿罗拉的样子"
	},
	"galar": {
		"ger": "Galar-Form",
		"eng": "Galarian Form",
		"spa": "Forma de Galar",
		"fre": "Forme de Galar",
		"ita": "Forma di Galar",
		"jpn": "ガラルのすがた",
		"kor": "가라르의 모습",
		"cht": "伽勒爾的樣子",
		"chs": "伽勒尔的样子"
	},
	"hisui": {
		"ger": "Hisui-Form",
		"eng": "Hisuian Form",
		"spa": "Forma de Hisui",
		"fre": "Forme de Hisui",
		"ita": "Forma di Hisui",
		"jpn": "ヒスイのすがた",
		"kor": "히스이의 모습",
		"cht": "洗翠的樣子",
		"chs": "洗翠的样子"
	},
	"paldea": {
		"ger": "Paldea-Form",
		"eng": "Paldean Form",
		"spa": "Forma de Paldea",
		"fre": "Forme de Paldea",
		"ita": "Forma di Paldea",
		"jpn": "パルデアのすがた",
		"kor": "팔데아 모습",
		"cht": "帕底亞的樣子",
		"chs": "帕底亚的样子"
	},
	"incarnate": {
		"ger": "Inkarnationsform",
		"eng": "Incarnate Form",
		"spa": "Forma Avatar",
		"fre": "Forme Avatar",
		"ita": "Forma Incarnazione",
		"jpn": "けしんフォルム",
		"kor": "화신폼",
		"cht": "化身形態",
		"chs": "化身形态"
	},
	"therian": {
		"ger": "Tiergeistform",
		"eng": "Therian Form",
		"spa": "Forma Tótem",
		"fre": "Forme Totémique",
		"ita": "Forma Totem",
		"jpn": "れいじゅうフォルム",
		"kor": "영물폼",
		"cht": "靈獸形態",
		"chs": "灵兽形态"
	}
}

// Natures
const natures = {
	"hardy": {		"ger": "Robust",	"eng": "Hardy",		"spa": "Fuerte",	"fre": "Hardi",		"ita": "Ardita",	"jpn": "がんばりや", "kor": "노력", "cht": "勤奮", "chs": "勤奋"},
	"lonely": {		"ger": "Solo",		"eng": "Lonely",	"spa": "Huraña",	"fre": "Solo",		"ita": "Schiva",	"jpn": "さみしがり", "kor": "외로움", "cht": "怕寂寞", "chs": "怕寂寞"},
	"brave": {		"ger": "Mutig",		"eng": "Brave",		"spa": "Audaz",		"fre": "Brave",		"ita": "Audace",	"jpn": "ゆうかん", "kor": "용감", "cht": "勇敢", "chs": "勇敢"},
	"adamant": {	"ger": "Hart",		"eng": "Adamant",	"spa": "Firme",		"fre": "Rigide",	"ita": "Decisa",	"jpn": "いじっぱり", "kor": "고집", "cht": "固執", "chs": "固执"},
	"naughty": {	"ger": "Frech",		"eng": "Naughty",	"spa": "Pícara",	"fre": "Mauvais",	"ita": "Birbona",	"jpn": "やんちゃ", "kor": "개구쟁이", "cht": "頑皮", "chs": "顽皮"},
	"bold": {		"ger": "Kühn",		"eng": "Bold",		"spa": "Osada",		"fre": "Assuré",	"ita": "Sicura",	"jpn": "ずぶとい", "kor": "대담", "cht": "大膽", "chs": "大胆"},
	"docile": {		"ger": "Sanft",		"eng": "Docile",	"spa": "Dócil",		"fre": "Docile",	"ita": "Docile",	"jpn": "すなお", "kor": "온순", "cht": "坦率", "chs": "坦率"},
	"relaxed": {	"ger": "Locker",	"eng": "Relaxed",	"spa": "Plácida",	"fre": "Relax",		"ita": "Placida",	"jpn": "のんき", "kor": "무사태평", "cht": "悠閒", "chs": "悠闲"},
	"impish": {		"ger": "Pfiffig",	"eng": "Impish",	"spa": "Agitada",	"fre": "Malin",		"ita": "Scaltra",	"jpn": "わんぱく", "kor": "장난꾸러기", "cht": "淘氣", "chs": "淘气"},
	"lax": {		"ger": "Lasch",		"eng": "Lax",		"spa": "Floja",		"fre": "Lâche",		"ita": "Fiacca",	"jpn": "のうてんき", "kor": "촐랑", "cht": "樂天", "chs": "乐天"},
	"timid": {		"ger": "Scheu",		"eng": "Timid",		"spa": "Miedosa",	"fre": "Timide",	"ita": "Timida",	"jpn": "おくびょう", "kor": "겁쟁이", "cht": "膽小", "chs": "胆小"},
	"hasty": {		"ger": "Hastig",	"eng": "Hasty",		"spa": "Activa",	"fre": "Pressé",	"ita": "Lesta",		"jpn": "せっかち", "kor": "성급", "cht": "急躁", "chs": "急躁"},
	"serious": {	"ger": "Ernst",		"eng": "Serious",	"spa": "Seria",		"fre": "Sérieux",	"ita": "Seria",		"jpn": "まじめ", "kor": "성실", "cht": "認真", "chs": "认真"},
	"jolly": {		"ger": "Froh",		"eng": "Jolly",		"spa": "Alegre",	"fre": "Jovial",	"ita": "Allegra",	"jpn": "ようき", "kor": "명랑", "cht": "爽朗", "chs": "爽朗"},
	"naive": {		"ger": "Naiv",		"eng": "Naive",		"spa": "Ingenua",	"fre": "Naïf",		"ita": "Ingenua",	"jpn": "むじゃき", "kor": "천진난만", "cht": "天真", "chs": "天真"},
	"modest": {		"ger": "Mäßig",		"eng": "Modest",	"spa": "Modesta",	"fre": "Modeste",	"ita": "Modesta",	"jpn": "ひかえめ", "kor": "조심", "cht": "內斂", "chs": "内敛"},
	"mild": {		"ger": "Mild",		"eng": "Mild",		"spa": "Afable",	"fre": "Doux",		"ita": "Mite",		"jpn": "おっとり", "kor": "의젓", "cht": "慢吞吞", "chs": "慢吞吞"},
	"quiet": {		"ger": "Ruhig",		"eng": "Quiet",		"spa": "Mansa",		"fre": "Discret",	"ita": "Quieta",	"jpn": "れいせい", "kor": "냉정", "cht": "冷靜", "chs": "冷静"},
	"bashful": {	"ger": "Zaghaft",	"eng": "Bashful",	"spa": "Tímida",	"fre": "Pudique",	"ita": "Ritrosa",	"jpn": "てれや", "kor": "수줍음", "cht": "害羞", "chs": "害羞"},
	"rash": {		"ger": "Hitzig",	"eng": "Rash",		"spa": "Alocada",	"fre": "Foufou",	"ita": "Ardente",	"jpn": "うっかりや", "kor": "덜렁", "cht": "馬虎", "chs": "马虎"},
	"calm": {		"ger": "Still",		"eng": "Calm",		"spa": "Serena",	"fre": "Calme",		"ita": "Calma",		"jpn": "おだやか", "kor": "차분", "cht": "溫和", "chs": "温和"},
	"gentle": {		"ger": "Zart",		"eng": "Gentle",	"spa": "Amable",	"fre": "Gentil",	"ita": "Gentile",	"jpn": "おとなしい", "kor": "얌전", "cht": "溫順", "chs": "温顺"},
	"sassy": {		"ger": "Forsch",	"eng": "Sassy",		"spa": "Grosera",	"fre": "Malpoli",	"ita": "Vivace",	"jpn": "なまいき", "kor": "건방", "cht": "自大", "chs": "自大"},
	"careful": {	"ger": "Sacht",		"eng": "Careful",	"spa": "Cauta",		"fre": "Prudent",	"ita": "Cauta",		"jpn": "しんちょう", "kor": "신중", "cht": "慎重", "chs": "慎重"},
	"quirky": {		"ger": "Kauzig",	"eng": "Quirky",	"spa": "Rara",		"fre": "Bizarre",	"ita": "Furba",		"jpn": "きまぐれ", "kor": "변덕", "cht": "浮躁", "chs": "浮躁"}
}

// Poké Balls
const balls = {
	"poke": {			"ger": "Pokéball",			"eng": "Poké Ball",				"spa": "Poké Ball",				"fre": "Poké Ball",				"ita": "Poké Ball",				"jpn": "モンスターボール", "kor": "몬스터볼", "cht": "精靈球", "chs": "精灵球"},
	"great": {			"ger": "Superball",			"eng": "Great Ball",			"spa": "Superball",				"fre": "Super Ball",			"ita": "Mega Ball",				"jpn": "スーパーボール", "kor": "수퍼볼", "cht": "超級球", "chs": "超级球"},
	"ultra": {			"ger": "Hyperball",			"eng": "Ultra Ball",			"spa": "Ultraball",				"fre": "Hyper Ball",			"ita": "Ultra Ball",			"jpn": "ハイパーボール", "kor": "하이퍼볼", "cht": "高級球", "chs": "高级球"},
	"master": {			"ger": "Meisterball",		"eng": "Master Ball",			"spa": "Master Ball",			"fre": "Master Ball",			"ita": "Master Ball",			"jpn": "マスターボール", "kor": "마스터볼", "cht": "大師球", "chs": "大师球"},
	"safari": {			"ger": "Safariball",		"eng": "Safari Ball",			"spa": "Safari Ball",			"fre": "Safari Ball",			"ita": "Safari Ball",			"jpn": "サファリボール", "kor": "사파리볼", "cht": "狩獵球", "chs": "狩猎球"},
	"fast": {			"ger": "Turboball",			"eng": "Fast Ball",				"spa": "Rapid Ball",			"fre": "Speed Ball",			"ita": "Rapid Ball",			"jpn": "スピードボール", "kor": "스피드볼", "cht": "速度球", "chs": "速度球"},
	"level": {			"ger": "Levelball",			"eng": "Level Ball",			"spa": "Nivel Ball",			"fre": "Niveau Ball",			"ita": "Level Ball",			"jpn": "レベルボール", "kor": "레벨볼", "cht": "等級球", "chs": "等级球"},
	"lure": {			"ger": "Köderball",			"eng": "Lure Ball",				"spa": "Cebo Ball",				"fre": "Appat Ball",			"ita": "Esca Ball",				"jpn": "ルアーボール", "kor": "루어볼", "cht": "誘餌球", "chs": "诱饵球"},
	"heavy": {			"ger": "Schwerball",		"eng": "Heavy Ball",			"spa": "Peso Ball",				"fre": "Masse Ball",			"ita": "Peso Ball",				"jpn": "ヘビーボール", "kor": "헤비볼", "cht": "沉重球", "chs": "沉重球"},
	"love": {			"ger": "Sympaball",			"eng": "Love Ball",				"spa": "Amor Ball",				"fre": "Love Ball",				"ita": "Love Ball",				"jpn": "ラブラブボール", "kor": "러브러브볼", "cht": "甜蜜球", "chs": "甜蜜球"},
	"friend": {			"ger": "Freundesball",		"eng": "Friend Ball",			"spa": "Amigo Ball",			"fre": "Copain Ball",			"ita": "Friend Ball",			"jpn": "フレンドボール", "kor": "프랜드볼", "cht": "友友球", "chs": "友友球"},
	"moon": {			"ger": "Mondball",			"eng": "Moon Ball",				"spa": "Luna Ball",				"fre": "Lune Ball",				"ita": "Luna Ball",				"jpn": "ムーンボール", "kor": "문볼", "cht": "月亮球", "chs": "月亮球"},
	"sport": {			"ger": "Turnierball",		"eng": "Sport Ball",			"spa": "Competi Ball",			"fre": "Compét'Ball",			"ita": "Gara Ball",				"jpn": "コンペボール", "kor": "콤페볼", "cht": "競賽球", "chs": "竞赛球"},
	"net": {			"ger": "Netzball",			"eng": "Net Ball",				"spa": "Malla Ball",			"fre": "Filet Ball",			"ita": "Rete Ball",				"jpn": "ネットボール", "kor": "넷트볼", "cht": "捕網球", "chs": "捕网球"},
	"dive": {			"ger": "Tauchball",			"eng": "Dive Ball",				"spa": "Buceo Ball",			"fre": "Scuba Ball",			"ita": "Sub Ball",				"jpn": "ダイブボール", "kor": "다이브볼", "cht": "潛水球", "chs": "潜水球"},
	"nest": {			"ger": "Nestball",			"eng": "Nest Ball",				"spa": "Nido Ball",				"fre": "Faiblo Ball",			"ita": "Minor Ball",			"jpn": "ネストボール", "kor": "네스트볼", "cht": "巢穴球", "chs": "巢穴球"},
	"repeat": {			"ger": "Wiederball",		"eng": "Repeat Ball",			"spa": "Acopio Ball",			"fre": "Bis Ball",				"ita": "Bis Ball",				"jpn": "リピートボール", "kor": "리피드볼", "cht": "重複球", "chs": "重复球"},
	"timer": {			"ger": "Timerball",			"eng": "Timer Ball",			"spa": "Turno Ball",			"fre": "Chrono Ball",			"ita": "Timer Ball",			"jpn": "タイマーボール", "kor": "타이마볼", "cht": "計時球", "chs": "计时球"},
	"luxury": {			"ger": "Luxusball",			"eng": "Luxury Ball",			"spa": "Lujo Ball",				"fre": "Luxe Ball",				"ita": "Chic Ball",				"jpn": "ゴージャスボール", "kor": "럭셔리볼", "cht": "豪華球", "chs": "豪华球"},
	"premier": {		"ger": "Premierball",		"eng": "Premier Ball",			"spa": "Honor Ball",			"fre": "Honor Ball",			"ita": "Premier Ball",			"jpn": "プレミアボール", "kor": "프레미어볼", "cht": "紀念球", "chs": "纪念球"},
	"dusk": {			"ger": "Finsterball",		"eng": "Dusk Ball",				"spa": "Ocaso Ball",			"fre": "Sombre Ball",			"ita": "Scuro Ball",			"jpn": "ダークボール", "kor": "다크볼", "cht": "黑暗球", "chs": "黑暗球"},
	"heal": {			"ger": "Heilball",			"eng": "Heal Ball",				"spa": "Sana Ball",				"fre": "Soin Ball",				"ita": "Cura Ball",				"jpn": "ヒールボール", "kor": "힐볼", "cht": "治癒球", "chs": "治愈球"},
	"quick": {			"ger": "Flottball",			"eng": "Quick Ball",			"spa": "Veloz Ball",			"fre": "Rapide Ball",			"ita": "Velox Ball",			"jpn": "クイックボール", "kor": "퀵볼", "cht": "先機球", "chs": "先机球"},
	"cherish": {		"ger": "Jubelball",			"eng": "Cherish Ball",			"spa": "Gloria Ball",			"fre": "Mémoire Ball",			"ita": "Pregio Ball",			"jpn": "プレシャスボール", "kor": "프레셔스볼", "cht": "貴重球", "chs": "贵重球"},
	"dream": {			"ger": "Traumball",			"eng": "Dream Ball",			"spa": "Ensueño Ball",			"fre": "Rêve Ball",				"ita": "Dream Ball",			"jpn": "ドリームボール", "kor": "드림볼", "cht": "夢境球", "chs": "梦境球"},
	"beast": {			"ger": "Ultraball",			"eng": "Beast Ball",			"spa": "Ente Ball",				"fre": "Ultra Ball",			"ita": "UC Ball",				"jpn": "ウルトラボール", "kor": "울트라볼", "cht": "究極球", "chs": "究极球"},
	"hisuian-poke": {	"ger": "Hisui-Pokéball",	"eng": "Hisuian Poké Ball",		"spa": "Poké Ball de Hisui",	"fre": "Poké Ball de Hisui",	"ita": "Poké Ball di Hisui",	"jpn": "モンスターボール (ヒスイ)", "kor": "몬스터볼 (히스이)", "cht": "精靈球 (洗翠)", "chs": "精灵球 (洗翠)"},
	"hisuian-great": {	"ger": "Hisui-Superball",	"eng": "Hisuian Great Ball",	"spa": "Super Ball de Hisui",	"fre": "Super Ball de Hisui",	"ita": "Mega Ball di Hisui",	"jpn": "スーパーボール (ヒスイ)", "kor": "수퍼볼 (히스이)", "cht": "超級球 (洗翠)", "chs": "超级球 (洗翠)"},
	"hisuian-ultra": {	"ger": "Hisui-Hyperball",	"eng": "Hisuian Ultra Ball",	"spa": "Ultra Ball de Hisui",	"fre": "Hyper Ball de Hisui",	"ita": "Ultra Ball di Hisui",	"jpn": "ハイパーボール (ヒスイ)", "kor": "하이퍼볼 (히스이)", "cht": "高級球 (洗翠)", "chs": "高级球 (洗翠)"},
	"hisuian-heavy": {	"ger": "Hisui-Schwerball",	"eng": "Hisuian Heavy Ball",	"spa": "Peso Ball de Hisui",	"fre": "Masse Ball de Hisui",	"ita": "Peso Ball di Hisui",	"jpn": "ヘビーボール (ヒスイ)", "kor": "헤비볼 (히스이)", "cht": "沉重球 (洗翠)", "chs": "沉重球 (洗翠)"},
	"leaden": {			"ger": "Zentnerball",		"eng": "Leaden Ball",			"spa": "Kilo Ball",				"fre": "Mégamasse Ball",		"ita": "Megaton Ball",			"jpn": "メガトンボール", "kor": "메가톤볼", "cht": "超重球", "chs": "超重球"},
	"gigaton": {		"ger": "Tonnenball",		"eng": "Gigaton Ball",			"spa": "Quintal Ball",			"fre": "Gigamasse Ball",		"ita": "Gigaton Ball",			"jpn": "ギガトンボール", "kor": "기가톤볼", "cht": "巨重球", "chs": "巨重球"},
	"feather": {		"ger": "Federball",			"eng": "Feather Ball",			"spa": "Pluma Ball",			"fre": "Plume Ball",			"ita": "Piuma Ball",			"jpn": "フェザーボール", "kor": "페더볼", "cht": "飛羽球", "chs": "飞羽球"},
	"wing": {			"ger": "Flügelball",		"eng": "Wing Ball",				"spa": "Ala Ball",				"fre": "Envol Ball",			"ita": "Wing Ball",				"jpn": "ウイングボール", "kor": "윙볼", "cht": "飛翼球", "chs": "飞翼球"},
	"jet": {			"ger": "Düsenball",			"eng": "Jet Ball",				"spa": "Aero Ball",				"fre": "Propulse Ball",			"ita": "Jet Ball",				"jpn": "ジェットボール", "kor": "제트볼", "cht": "飛梭球", "chs": "飞梭球"},
	"origin": {			"ger": "Urball",			"eng": "Origin Ball",			"spa": "Origen Ball",			"fre": "Origine Ball",			"ita": "Origin Ball",			"jpn": "オリジンボール", "kor": "오리진볼", "cht": "起源球", "chs": "起源球"}
}