/* =========================================================
   AI教育資訊快報：內容資料檔
   新增一則新知＝在 ARTICLES 陣列「最前面」加一筆；新一期＝在 ISSUES 加一筆。
   欄位說明見同資料夾上層的「新增新知說明.md」。
   行內粗體寫法：**文字**
   ========================================================= */

window.KB_TOPICS = [
  { key: "syllabus", name: "課程 AI 規範", emoji: "📋", color: "#2F6DB5", desc: "教學大綱怎麼寫 AI 條款、開放到什麼程度" },
  { key: "assess",   name: "評量與學術誠信", emoji: "🧪", color: "#B23A2E", desc: "AI 時代的評量設計、揭露與查核" },
  { key: "literacy", name: "AI 素養框架", emoji: "🧭", color: "#7048B0", desc: "國際 AI 與數位素養框架的內涵與指標" },
  { key: "teacher",  name: "教師培育", emoji: "🎓", color: "#0E7C74", desc: "師培課程轉型與教師專業養成" },
  { key: "intl",     name: "各國 AI 政策", emoji: "🌏", color: "#B26D08", desc: "各國教育 AI 政策與國家戰略" },
  { key: "tw",       name: "國內政策動態", emoji: "🏛️", color: "#3A7D34", desc: "教育部與國內大學的最新方向" }
];

window.KB_ISSUES = [
  { no: 3, date: "2026-06-02", title: "教師培育與各國政策",
    legacy: "https://gemini.google.com/share/72483ac3bec0" },
  { no: 2, date: "2026-03-05", title: "AI 與數位素養框架",
    intro: "面對生成式AI的快速發展，教育場域在數位教育的推展上，已從工具操作轉向並重素養與人機協作能力之培養，如何將抽象的AI素養與倫理具體落實於課程設計與評量中，也漸漸成為國際間框架發展的重點。本次快報內容聚焦於兩套涵蓋不同實踐面向之AI與數位素養框架。",
    legacy: "https://gemini.google.com/share/680eb5afa0bc" },
  { no: 1, date: "2026-02-10", title: "部長專題演講與大學 AI 指引",
    legacy: "https://gemini.google.com/share/1c4ed29ec2d3" }
];

window.KB_ARTICLES = [

/* ---------------- 第 3 期 ---------------- */
{
  id: "teacher-ed-ai-era",
  issue: 3,
  topics: ["teacher", "assess", "intl"],
  title: "AI世代的教師培育：從課程轉型到專業養成",
  authors: "陳佩英、蘇淑菁",
  tldr: [
    "生成式AI造成「假性精熟」：學生交得出結構完整的報告，面對核心概念提問卻支吾其詞，傳統評量因此失效。",
    "美國、澳洲、新加坡、臺灣都從禁堵走向規範治理，路徑分別是去中心化授權、系統性國家監管、積極整合與申報、跨界整合與分類制。",
    "認知負荷理論提醒三個陷阱：大腦外包、主權陷阱、專業二元性。"
  ],
  takeaway: "教師可導入 R.A.T. 模型與 VALUE 檢核、轉移評量典範、採動態褪除鷹架，並刻意設定「壓力測試」的靶子，讓學生從接收轉為除錯與辯駁。",
  fulltext: { label: "GEL-net 全文", url: "https://www.gel-net.com/post/AI世代的教師培育：從課程轉型到專業養成的再思考" },
  body: [
    { h: "核心挑戰：假性精熟（False Mastery）" },
    { p: "生成式AI對高等教育造成的根本性衝擊。學生能夠提交結構完整、論述流暢的報告，但面對核心概念提問時卻支吾其詞，顯示出感知的精熟度與實際內在認知能力之間存在嚴重斷層。這不僅蒙蔽了師生，也讓傳統的評量系統徹底失效。為了應對這場危機，全球教育界正從政策治理、素養框架與認知科學三個維度進行深度解構。" },
    { h: "政策治理：從禁堵走向素養整合" },
    { p: "全球高等教育正經歷從全面禁堵走向規範治理的共同轉向，但各國基於不同考量，發展出了截然不同的防護路徑：" },
    { cards: [
      { icon: "🇺🇸", t: "美國：去中心化授權", d: "將決定權下放給第一線教師，提供「課程綱要範本選單」。教授可自由決定全面禁止或導入整合。**隱憂：**雖尊重專業自主，卻易讓學生在標準不一的環境中疲於應對。" },
      { icon: "🇦🇺", t: "澳洲：系統性國家監管", d: "認知到依賴AI偵測工具注定是一場失敗的軍備競賽。致力於從根本上**重塑評量體系**。特別納入資料主權與社會公平性的考量。" },
      { icon: "🇸🇬", t: "新加坡：積極整合與申報", d: "將AI視為國家競爭力發展要素。推行三大策略：重新設計超越AI能力的考題(ADAPT)、合適情境開放(INCORPORATE)與雙重檢測(DETECT)。要求學生**「強制申報」**，將AI視為需被引用的協作夥伴。" },
      { icon: "🇹🇼", t: "臺灣：跨界整合與分類制", d: "教育部成立跨校聯盟(TAICA)，以跨校合作模式共享資源。頂尖大學推動**「課程大綱四級分類制」**，驅使傳統書面報告轉向即時口頭報告或同儕互評。因官方證實AI偵測工具易產生偽陽性，促使大學圖書館成功轉型為「AI素養推動中心」。" }
    ]},
    { h: "國際素養框架的深化" },
    { p: "多項國際指標框架（如OECD、UNESCO、DQ Institute、ISTE）皆表明，AI素養絕不僅是操作工具的技術，而是涵蓋**批判性思考、資訊判讀、數位同理心與社會倫理的底層「心理習慣」**。UNESCO更極力強調「保護人類主體性」，主張教師不應依賴AI來解決情緒困境等「關係性問題」，應主動駕馭AI成為協作知識的生產者，絕非將教育判斷外包。" },
    { h: "認知機制的侵蝕與深層危機" },
    { p: "根據認知負荷理論，AI雖能排除外在負荷，但對於缺乏先備知識的「新手」學生而言，摸索與驗證幻覺極易造成工作記憶超載。這場危機伴隨著三大認知陷阱：" },
    { cards: [
      { t: "大腦外包", d: "當推理與邏輯組織等核心思考過程交由AI代勞時，學生便迴避了建立神經迴路必須經歷的**「有益的困難度」**，導致解決問題能力退化與「認知空洞化」。" },
      { t: "主權陷阱", d: "AI流暢且具權威感的「無摩擦便利性」，極易使學生掉入陷阱，在不知不覺中交出智力判斷，淪為被動的演算法消費者。" },
      { t: "專業二元性", d: "因先備知識落差產生的極端衝擊：AI對具備豐厚知識的專家是「放大器」，卻可能成為抹平新手學習軌跡的「推平器」。" }
    ]},
    { h: "築起防護網：教師的具體行動策略" },
    { p: "為守護學習主體性，教育實務工作者應落實以下教學設計與評量策略：" },
    { steps: [
      { t: "導入 R.A.T. 模型與 VALUE 檢核", d: "進行診斷，避免學生直接照單全收AI草稿的單純「替代」；進階至萃取迷思概念以引導討論的「擴增」；並致力達到創造出讓AI扮演「蘇格拉底反駁者」與學生進行邏輯攻防的「轉化」層次。同時從促進社會互動、深化後設認知等維度防範大腦外包。" },
      { t: "推動「評量典範的轉移」", d: "大幅降低最終成品的計分比重，轉而評量學生的**「提問品質」**與與AI互動日誌中的探究歷程。" },
      { t: "貫徹「動態褪除 (Dynamic Fading)」鷹架策略", d: "將AI視為初期降低負荷的暫時性拐杖，隨課程推進逐步撤除，以驗證學生真實基模的建立。" },
      { t: "設定「壓力測試」的靶子", d: "教師可刻意引導AI生成帶有邏輯漏洞的文章，迫使學生從被動接收轉為主動進行除錯與辯駁。" }
    ]},
    { q: "在AI可能對人類認知機制產生衝擊之下，教師必須扮演「認知導航者」、「學習架構師」與「倫理守門人」才能培養出具備獨立思考的學習主體。" }
  ],
  refs: [
    { t: "陳佩英、蘇淑菁（2026年05月18日）。AI世代的教師培育：從課程轉型到專業養成的再思考。教育新知國際串聯。", url: "https://www.gel-net.com/post/AI世代的教師培育：從課程轉型到專業養成的再思考" }
  ]
},

{
  id: "japan-ai-national-plan",
  issue: 3,
  topics: ["intl"],
  title: "邁向全球最 AI 友善的國家：日本國家計畫與教育因應",
  authors: "陳佩英、傅奕榮",
  tldr: [
    "日本AI政策從2019年「以人為本的AI社會原則」，走到2024年統合創新戰略與2025年《AI促進法》，目標是成為「全球最AI友善的國家」。",
    "文部科學省2024年底頒布《初等中等教育階段生成式AI利用指南（Ver. 2.0）》，分別界定學生、教師與產業界的角色。",
    "資訊活用能力不只放在資訊課，而要把「學習AI」「學習使用方法」「在各學科中應用」三種情境結合起來。"
  ],
  takeaway: "國家計畫把培育「人的能力」視為根基，直接驅動教育體系轉型；中小學指南則強調，公平性最終仍須依賴人類判斷。",
  fulltext: { label: "GEL-net 全文", url: "https://www.gel-net.com/post/邁向全球最-ai-友善的國家：日本ai國家計畫與中小學教育之因應（2019至今）" },
  body: [
    { p: "日本將生成式AI從科技應用層次，全面拉升至攸關國家生存、經濟復甦與安全保障的核心戰略，並將此宏觀視野具體落實於中小學教育的變革中。" },
    { h: "政策演進：從社會倫理走向國家安全與法制化" },
    { p: "綜觀日本近年的AI政策軌跡，其治理思維經歷了從「社會倫理規範」走向「國家安全與經濟復甦」的深刻典範轉移。為應對全球激烈的科技軍備競賽與自身技術發展的危機感，日本快速調整了戰略步伐：" },
    { timeline: [
      { y: "2019年", t: "以人為本的AI社會原則", d: "這項政策作為發展的發軔，旨在落實「超智能社會（Society 5.0）」的願景。該原則奠定了三大核心基礎：確保人性尊嚴、促進多元包容，以及維持永續性，確保AI的研發與應用能與聯合國永續發展目標（SDGs）緊密契合，建構令人安心的幸福社會。" },
      { y: "2024年", t: "統合創新戰略 2024", d: "隨著全球科技軍備競賽加劇，日本深刻意識到自身在AI領域甚至落後於部分經濟規模較小的國家，因此正式將AI發展提升至國家韌性與安全戰略的關鍵地位。此戰略包含三大主軸：不只推動AI，更同步推進核融合能源、量子、生物材料、半導體與Beyond 5G（6G）等前衛科學；透過擴充競爭性研究經費、支持年輕與女性研究者及博士人才、建立STEAM教育生態系來強化知識與人才基礎；利用SBIR（小型企業創新研發）制度與公共採購來扶植新創企業，建構完整的創新基礎生態。同時祭出跨領域核心技術融合、主導國際重要技術規則制定以防堵技術外流，並奠基於「廣島AI進程」的成果來確保AI安全與防範假訊息，展現出強烈的實用導向與重塑技術話語權的野心。" },
      { y: "2025年", t: "AI促進法 & 人工智慧基本計畫", d: "為了將國家野心轉化為實質法治框架，日本推動了《AI促進法》，將AI發展拉升至最高層級的國家法律，並由首相親自坐鎮成立「AI戰略總部」。該法案確立了系統性促進社會實施、確保透明度與發揮國際主導作用等原則，並祭出擴充數據基礎設施、確保人才培育、進行侵權調查與行政指導等具體措施。配合發布的《人工智慧基本計畫》進一步宣告，日本欲成為**「全球最AI友善的國家」**。該計畫以「可信賴的AI」與「日本再起」為核心，提出了四大方針：加速AI解決社會問題、打造具日本特色的可信賴AI生態系並向海外拓展、引領國際AI治理，以及**培育能在AI社會存活的「人的能力」**以持續推動社會變革。這項將「人的能力」視為根基的宣示，直接驅動了日本教育體系必須全面啟動與時俱進的轉型。" }
    ]},
    { h: "中小學教育因應指南 (Ver. 2.0)" },
    { p: "在國家戰略的強烈驅動下，日本文部科學省於2024年底正式頒布了《初等中等教育階段生成式AI利用指南（Ver. 2.0）》，為中小學現場提供了一套兼具引導性與彈性的實務框架。這份指南堅守「以人為中心」的哲學，強調AI是擴展人類潛能的促能工具，而非對手，且在數位技術愈發達的時代，建立在人性互動上的教育專業將更加無可取代。" },
    { h3: "生態系角色的明確定位" },
    { cards: [
      { icon: "🧑‍🎓", t: "對於學生", d: "使用AI的唯一前提是「促進學習」，學生必須具備扎實的學科知識、閱讀理解與持續提問的批判性思考能力來判斷AI產出的真偽，並被**嚴格禁止**將AI直接生成的內容作為比賽作品或小論文提交，同時須留意虛擬應用與實體真實體驗間的平衡。" },
      { icon: "🧑‍🏫", t: "對於教師", d: "鼓勵其在了解AI機制與侷限的前提下，將AI積極應用於備課、學生指導與校務行政中以帶動工作模式改革，但嚴禁在未獲資安管理者許可下使用個人設備處理公務。" },
      { icon: "🏢", t: "對於產業界", d: "指南更要求業者必須負起責任，主動聆聽學校現場的痛點並將其納入服務改善的循環，而非單方面由產業端主導研發。" }
    ]},
    { h3: "行政管理與素養扎根" },
    { list: [
      "各地方教育委員會被賦予主導制度設計的責任，必須考量各校樣態提供靈活的應對與研修資源。",
      "學校必須嚴格遵守最新版教育資安政策，確認AI服務的年齡限制與監護人同意規範，並妥善處理個人資料保護與著作權問題，防範無意間的侵權疑慮。",
      "面對AI模型可能潛藏針對種族、性別、國籍或宗教的不當偏見，指南強調最終必須依賴**「人類判斷」**來確保公平性，並視需求設置諮詢窗口以對利害關係人盡到透明說明的責任。",
      "學生在日常中已無可避免接觸AI，因此「資訊活用能力」的培育不能僅限於資訊課程，而必須將「學習AI」、「學習使用方法」與「在各學科中應用」三種情境深度結合，貫穿於整體學科教育中。"
    ]},
    { q: "總結來說，日本正透過由上而下的國家法制戰略，以及由下而上、細緻規範各方權責的中小學教育指南，建構一個風險可控且具備高度創新活力的AI學習生態系，以確保國民能在處處鑲嵌AI的新環境中，持續做出立基於人類主體性的判斷。" }
  ],
  refs: [
    { t: "陳佩英、傅奕榮（2026年4月2日）。邁向全球最 AI 友善的國家：日本AI國家計畫與中小學教育之因應（2019至今）。教育新知國際串聯。", url: "https://www.gel-net.com/post/邁向全球最-ai-友善的國家：日本ai國家計畫與中小學教育之因應（2019至今）" }
  ]
},

/* ---------------- 第 2 期 ---------------- */
{
  id: "ai-go-framework",
  issue: 2,
  topics: ["literacy", "intl"],
  title: "荷蘭 AI-GO 教育領域 AI 素養框架",
  authors: "陳佩英教授計畫團隊",
  tldr: [
    "荷蘭 Npuls 高教計畫以傘形文獻回顧篩出31篇高品質研究，再經6場世界咖啡館討論形成框架。",
    "AI素養由知識、技能、態度、倫理四面向組成，另設「教育學與教學法面向」專供教學人員使用。",
    "框架指出個人、組織、政策三類影響因素；不區分基礎與進階，也尚未解決AI素養的測量問題。"
  ],
  takeaway: "對將AI融入課堂的教師而言，此框架在觀念溝通、建立教育學及教學法思維與協商開放性等方面，提供了重要啟示。",
  fulltext: { label: "Npuls 原文", url: "https://npuls.nl/en/knowledge-base/ai-go-ai-literacy-in-education-a-practical-framework" },
  body: [
    { p: "荷蘭透過Npuls的高等教育計畫，設計出此專為教學人員與學生提供支持之AI-GO架構（教育領域AI素養框架）。其研究設計為透過傘形文獻回顧（umbrella review）之方式，搜羅各領域實證研究後，篩選出31篇高品質文章進行AI素養之歸納，最終更進行6場世界咖啡館（World Café）活動，邀集專家學者與學生進行結構化討論，以形成此架構結果。" },
    { q: "在AI-GO之架構中，AI素養受定義為「在以倫理意識為基礎下，具批判性、負責任且有效地與AI系統互動，並為知識、技能與態度三者動態交互作用下的產物。」" },
    { p: "架構本身由四面向組合而成，包含關於AI的**知識**、使用AI的**技能**、對AI的**態度**與AI中的**倫理**，每個面向下涵蓋數個集群及所對應指標。以下就四面向進行分述：" },
    { cards: [
      { icon: "📘", t: "知識", d: "包含理解AI為何的**事實性知識**（基本原理、演算法、開發與編寫等），以及**如何應用之知識**（理解AI在特定領域或學科使用、在人際互動中所扮演的角色、本身優缺點，以及如何整合於自身所處領域或特定知識中）。" },
      { icon: "🛠️", t: "技能", d: "將對AI的知識加以應用，並能有效操作，其中包含了**技術性技能**（IT技能、數據處理、應用程式的使用與開發等）、**認知性技能**（批判性、計算、創造、反思的思維等）與**互動技能**（清楚向他人傳達與交流AI產出，以及和團隊協作共創AI應用等）。" },
      { icon: "💭", t: "態度", d: "關於個人在使用AI下的信念、感受與情緒。此為影響知識汲取、能力培養與實務操作中的重要影響因素，其中涵蓋對AI的**態度與情緒**（信心、自我效能、興趣與動機）與對AI的**開放程度**（準備度與接受度）。" },
      { icon: "⚖️", t: "倫理", d: "AI素養的根基，其中涵蓋對使用AI**後果的意識**（對個人、社會與經濟之影響）、**公平正義**（包容且無偏見）、**問責及透明度**（透明使用與可解釋AI的知識）、**安全使用**（隱私與個資保護）與**所有權**（自主權與承擔責任）。" }
    ]},
    { h: "教育學與教學法面向" },
    { p: "同時，因此架構之設計初衷為考量到教學人員在推動AI素養中的關鍵角色，故更專設了「教育學與教學法面向」，以利教育者將AI融入於課程，並能根據學生特質與學習情境進行設計。此面向涵蓋了：" },
    { list: [
      "**教育者對AI的知識**（技術、教育學與教學法、倫理、關於學生如何使用之知識）",
      "**對教育應用的AI技能**（包含將AI融入教學法、運用AI支持學習、結構化AI學習脈絡，以及因應AI調整課程之技能）",
      "**對AI素養的態度**（在教育情境的開放程度、使用動機、賦予學生批判性評估之能力）",
      "**教育實務中的倫理**（自身負責任使用與教導學生正用之倫理）"
    ]},
    { h: "影響因素" },
    { p: "此外，框架中亦肯認發展AI素養中涉及三類來自內外部的影響因素：" },
    { cards: [
      { icon: "👤", t: "個人", d: "所受指導及培訓程度、使用經驗、身處角色及情境、理解與應用的相符程度" },
      { icon: "🏫", t: "組織", d: "組織提供之學習與軟硬體資源、專業發展、支持跨科協作程度、是否整合AI於領導與制度中" },
      { icon: "🏛️", t: "政策", d: "對AI的公共投資、法規制定、跨部會協作、以政策為導向的專業發展資源" }
    ]},
    { q: "綜上所述，AI-GO框架全面探討了AI素養下的「知識、技能、價值觀、信念與教師角色思維」，而這樣的素養為立於倫理意識之上，涉及知識、技能與態度的動態交互作用。此外，文本中亦說明該架構不區分基礎與進階的AI素養，同時尚未解決測量AI素養之問題，然對於將AI融入於課堂之教師而言，此框架在觀念溝通、建立教育學及教學法思維與協商開放性等方面，仍提供了重要啟示。" },
    { indicators: {
      title: "附錄：AI-GO 框架詳細指標",
      note: "本附錄翻譯自 Renkema, M., Van den Boom-Muilenburg, E., Friso-van den Bos, I., Theelen, H., Wopereis, I., & Schildkamp, K. (2025). AI-GO! A framework for AI literacy in education (AI-GO framework). Npuls AI and Data Literacy. 帶有 Δ 標示的指標，代表該指標不僅歸納自文獻回顧，亦在研究團隊舉辦之世界咖啡館活動中，被參與討論的學生與教育專業人員具體提及。",
      groups: [
        { face: "核心素養：知識", clusters: [
          { name: "關於AI的事實性知識", items: [
            ["AI 基本原理之認知Δ", "理解AI為何、所運用的基本概念與技術、適用於AI的資料類型（如：感測器數據與影像），以及辨識AI之能與不能。"],
            ["資料、演算法與統計學之認知Δ", "理解資料、演算法與統計方法如何應用於AI領域。此向度涵蓋之關鍵概念包括：資料科學與機器學習技術、自然語言處理、預測性分析、監督式與非監督式學習、機率推理、模式識別、分類模型、神經網路、資料結構，以及命題邏輯。"],
            ["AI程式設計與開發之認知Δ", "理解AI應用程式之開發、程式撰寫與建構歷程。"]
          ]},
          { name: "關於AI應用的知識", items: [
            ["特定領域之AI應用認知Δ", "理解AI如何應用於個人或專業脈絡中。"],
            ["AI於人機互動中扮演角色之認知Δ", "掌握人機互動之運作機制，包含在自身所處脈絡中，具備理解、辯證與評估AI產出結果之能力。"],
            ["AI優點與缺點之認知Δ", "認識AI的優勢與劣勢，例如因系統錯誤或偏見所導致之侷限性。"],
            ["領域專業知識與AI整合之認知", "能將自身之領域專業知能與AI產出進行有效整合。"],
            ["AI脈絡下跨領域取向之認知", "因AI跨越了學科邊界，故理解為何以及如何進行跨學科協作愈趨重要（如將自身專業與資訊科學或工程學科結合）。"]
          ]}
        ]},
        { face: "核心素養：技能", clusters: [
          { name: "技術性AI技能", items: [
            ["IT技能Δ", "基礎資訊技能（如文書處理、試算表與資料庫操作）為學習程式設計與建構AI系統等技術性 AI 技能奠定了基礎。"],
            ["資料分析與管理Δ", "具備詮釋、視覺化與運用資料之技能，以制定具備充分根據之決策。"],
            ["AI應用程式與系統之運用Δ", "於學習或專業環境中，有效運用、評估並整合AI應用程式與系統。"],
            ["程式設計與演算法思維Δ", "具備撰寫程式（如Python、R與SQL）以及設計、除錯（debug）與優化演算法之技能，作為建構與理解AI應用程式之基礎。"],
            ["AI開發與模型建構Δ", "具備設計AI系統與訓練模型之技能，以解決真實世界之問題。"]
          ]},
          { name: "認知性 AI 技能", items: [
            ["批判性思維Δ", "評估AI產出結果之可靠性、品質以及預期或非預期效應。此過程包含辨識產出內容中的偏見、錯誤預設或不可靠之模式，評估其在特定脈絡下的關聯性與適用性，並決定AI在決策過程中應扮演之角色。"],
            ["運算思維", "以如同電腦運作般之方式，將問題結構化為步驟、模式、抽象概念與邏輯規則以進行解題。此涵蓋了「輸入－處理－輸出」之歷程，以及在設計解決方案（如搜尋結構、決策規則或模式識別）時之演算法思維。"],
            ["問題解決思維Δ", "運用AI以分析並解決複雜或真實世界之問題。此涵蓋選擇並使用適切之AI應用程式，將其應用於解題歷程中，並視需求評估與調整最終產出結果。"],
            ["創意思維Δ", "結合AI設計創新之解決方案或應用程式，將AI之潛能轉化為嶄新的表達、設計或互動形式，並能根據AI的回饋或不斷演變的情境，彈性修正自身之取向或策略。"],
            ["反思性思維Δ", "省思自身對AI之使用情形及其社會與倫理意涵。此涵蓋反思何時及為何使用AI為可行、理想或具有爭議的，並能將個人經驗與更廣泛的AI發展及社會議題建立連結。"]
          ]},
          { name: "AI 互動技能", items: [
            ["傳達與溝通AI產出結果Δ", "能根據受眾的知識水準、經驗與所處脈絡，調整語言與溝通策略，清晰向他人傳達AI的產出結果。此涵蓋了清晰的詮釋（例如：「這個 AI 結果代表什麼意義？」），以及對受眾背景的敏銳度（例如：「我該如何向無AI專業知識的人解釋這段產出？」）。"],
            ["於對話中探討AI產出結果Δ", "與他人就AI的運用及其重要性進行對話，例如應用於集體決策之過程中。此牽涉到對AI產出結果進行討論、提問與權衡。"],
            ["針對AI應用展開協同合作", "參與AI設計、實施或評估之協作團隊，並聚焦於以AI為主題的人際互動。例如：在教育、研究或實務場域中開展的共創計畫。"],
            ["與AI系統互動Δ", "透過語言或其他輸入方式（例如：提示詞），有效引導AI系統，並能詮釋其產出結果，進而疊代提供新輸入。此關乎應用於大型語言模型（LLMs）、生成式 AI（GenAI）與決策支援系統中之人機互動。"]
          ]}
        ]},
        { face: "核心素養：態度", clusters: [
          { name: "對 AI 的態度與情緒", items: [
            ["對AI之信任度", "確信AI系統能有效運作、具備公平性，並能輔助使用者達成其目標。"],
            ["AI自我效能感", "確信自身具備有效運用AI技術之能力，此涵蓋於特定任務或脈絡下，對AI系統進行理解、應用與整合。"],
            ["使用AI的興趣與動力Δ", "具備持續學習AI及探索其應用的熱忱與意願。當個體知覺到AI與自身具備關聯性且具實用價值時，將更容易激發其使用的動機。"]
          ]},
          { name: "對AI的開放程度與AI準備度", items: [
            ["AI準備度Δ", "知覺自身具備充足的知識、技能與資源以運用AI，並對此抱持積極正向之態度。"],
            ["AI 接受度", "肯認AI之附加價值，並具備將此技術導入實務之意願。此態度不僅止於對 AI 的「被動容忍（tolerating）」，更反映出深信透過主動運用，AI能創造實質增值效益之核心信念。"]
          ]}
        ]},
        { face: "核心素養：倫理", clusters: [
          { name: "對使用AI後果之意識", items: [
            ["個人與社會影響之認知Δ", "理解AI對個人與社會的影響。此涵蓋了AI於各領域的應用，以及對非預期後果之防範。文獻中頻繁提及「具社會責任的AI應用」此一核心概念。"],
            ["經濟衝擊之認知Δ", "理解AI對經濟層面的衝擊，包含工作流程、職業型態（例如：部分職務被AI取代）以及商業營運模式的轉變。"]
          ]},
          { name: "公平與平權", items: [
            ["評估AI包容性與無歧視性之能力Δ", "理解所有AI模型皆帶有一定程度的偏見，進而可能導致歧視。然AI亦具備促進包容性的潛力，例如：透過調整內容與呈現方式，以滿足特定使用者（如學習困難學生）的個別需求。"]
          ]},
          { name: "問責與透明度", items: [
            ["透明度與可解釋性 AI 重要性之認知Δ", "理解AI應用程式中的數據如何被處理與使用。在此脈絡下，「可解釋性 AI（Explainable AI）」一詞受廣泛引用。"]
          ]},
          { name: "安全使用", items: [
            ["隱私、機密性與資料保護重要性之認知Δ", "理解隱私權、機密性與資料保護的重要性。其中亦包含對AI相關法規層面之認識，例如該領域之權利、法律規定、資料治理、法律責任與智慧財產權。"]
          ]},
          { name: "所有權", items: [
            ["對 AI 之使用（或不使用）承擔責任Δ", "意識到自身對於是否使用AI所應負之責任。這同時關乎作品的真實性、所有權與自主性，且亦涵蓋批判性地評估AI產出結果，並於必要時進行調整。"]
          ]}
        ]},
        { face: "AI素養的教育學與教學法面向", clusters: [
          { name: "教學人員關於AI的知識", items: [
            ["科技知識Δ", "具備對教育相關數位科技與AI應用之洞察力。其中包含對數位應用、永續性，以及如何有效運用這些科技以支援學習之知識。"],
            ["教育學與教學法知識Δ", "了解如何以具備教育責任且有效之方式運用AI，並能根據學習目標、學科內容與學生特質進行客製化調整。其中包含對課綱、學習策略，以及特定教學法（如：體驗式學習與專題導向學習）之熟悉度。"],
            ["倫理知識Δ", "理解將AI應用於學生與教育實踐時之倫理意涵，包含個人與專業層面之責任。具備此知識能協助教學人員引導學生培養對AI抱持批判與反思之態度。"],
            ["學生AI使用情形之認知Δ", "觀察學生使用AI之方式與程度。教學人員應能評估學生對AI的認知與實際操作能力，藉此相應調整指導與教學策略。此過程需要就AI的運用與潛在誤用（例如：抄襲），與學生進行開放性的溝通。"],
            ["AI素養之認知Δ", "理解構成AI素養的基礎概念、定義與指標。教學人員需對AI素養具備清晰的掌握，以便對應並持續深化教育實踐。"]
          ]},
          { name: "教學人員與教育相關之 AI 技能", items: [
            ["融入AI之教育學與教學法技能Δ", "具備設計結合AI角色之學習活動的能力，例如使用智慧家教系統或模擬系統。能配合AI所提供的可能性來調整教學策略。此過程需要觀察 AI如何支持或改變學習歷程，並了解如何以具備教學責任之方式加以實施。"],
            ["使用AI支持學習Δ", "選擇、整合並使用AI應用程式，以實質提升學習成效。其中要求教學者具備批判性視角，以評估AI在學習活動中帶來的附加價值。"],
            ["因應AI發展之課程調整Δ", "具備詮釋現有課程，並將其調整以適應AI新發展之能力。此過程需要將AI應用進行脈絡化，並使其與學生的學習需求一致。"],
            ["結構化AI學習脈絡Δ", "以清晰易懂且具結構化的方式呈現複雜的AI內容，避免學生感到負荷過重。其中需要將資訊拆解成適當的份量，並逐步引導、建立學習體驗。"]
          ]},
          { name: "教學人員對AI素養的態度", items: [
            ["對將AI融入教育之開放態度Δ", "具備探索並將AI融入教育實踐之意願，同時抱持好奇心與批判性反思。然而，此開放態度可能會因不確定感、知識匱乏，或缺乏充分教學理據之過度自信而受到阻礙。"],
            ["於教育中運用AI之動機", "指教學人員在運用AI及創新其教育實踐過程中所展現之內在動機與主責感。"],
            ["重視培養學生批判性評估AI社會角色之能力", "深信學生必須具備批判性省思AI社會影響力之能力。為達成此目標，教師可引導學生針對透明度、偏見及AI於決策中之角色進行探究，同時亦可採用特定之教學策略（如導入「可解釋性 AI」），以揭示AI系統之運作機制並確保其透明度。"]
          ]},
          { name: "教育實務中的倫理面向", items: [
            ["於教育中符合倫理責任之AI應用Δ", "於教育實踐中，對於導入AI進行有意識抉擇，並充分關注AI應用所衍生之倫理意涵，如隱私、偏見、透明度與自主性。確保AI之運用能與教學目標及學生之學習脈絡保持一致。此過程有賴於批判性之實踐取向、對倫理框架之認知，以及能以安全、具包容性且公平之方式運用AI的能力。"],
            ["教導學生符合倫理責任之 AI 應用Δ", "藉由將倫理議題（如：AI之社會衝擊、演算法偏見，以及AI於未來職場中之角色）融入課程教學，引導學生發展對AI之倫理意識。鼓勵學生批判性地反思何時及如何以負責任之方式運用AI，進而形塑其個人之倫理準則。"]
          ]}
        ]},
        { face: "影響因素", clusters: [
          { name: "個人因素", items: [
            ["指導與培訓", "指導與培訓能支持技術、教學法與反思層面之學習，並提供在自身教學實踐或專業脈絡中適切運用AI之空間。"],
            ["AI使用經驗", "先備之AI使用經驗，能提升對AI潛能與限制之理解及使用信心。缺乏此類經驗之專業人員，往往對於如何將AI融入教學，或哪些學科內容適用AI感到不確定。"],
            ["專業角色與脈絡", "AI所帶來之附加價值與應用方式會因使用者之角色而異。日常之教學實踐與個別任務，決定了AI應用之價值、關聯性與可行性，並界定了AI適用與否之情境。"],
            ["AI應用與教育學及教學法認知之契合度", "當AI之運用能與學習目標及學生之發展階段保持一致時，便能發揮更佳之效能。"]
          ]},
          { name: "組織因素", items: [
            ["合適的教育資源、學習路徑與框架", "發展明確且實務導向之AI框架、學習資源與路徑（並由專業人員協同開發），有助於強化主責感與AI素養。具體實例包含：互動式學習工具、AI概念之系列課程，或協作發展之學習目標與核心能力總覽。"],
            ["專業發展之策略性整合", "將涵蓋AI素養培育之「AI 導向專業發展」，納入審慎規劃且持續進行之學習路徑中。此整合亦須提供實務本位學習、反思與協同合作之空間。"],
            ["支持性基礎設施", "完善之技術設備與明確之資料治理，為奠定AI素養之基礎要件。"],
            ["跨領域協同合作", "跨領域之協作能促進知識共享、共同學習，並拓展對AI之更廣泛理解。"],
            ["領導階層與政策之整合", "當機構之政策、領導階層與人力資源架構中，明確揭示對AI素養之重視時，專業人員將感受到組織之支持，進而擁有充裕之時間、空間與動機投入其中。進而有助於AI在機構內部之結構性整合。"]
          ]},
          { name: "政策因素", items: [
            ["結構性與公共投資及政策框架", "長期且實質投入於基礎建設、培訓與數位轉型之公共投資，為教育機構形塑AI素養提供了先決條件。政策的清晰度與資金的延續性有助於鞏固信任並促進計畫性發展，此對於科技資源匱乏之地區更為關鍵。"],
            ["AI、科技與包容性相關法規", "明確的法律框架有助於實現合乎倫理且透明之AI應用。其中包含保障數位包容性的人權法規、歐盟《人工智慧法案》（EU AI Act），以及教育環境中安全使用AI之規範協議。"],
            ["跨部門協同合作", "促進教育機構、科技公司與政策制定者之間展開結構性協作的政策，能引導出更豐富且具永續性的AI素養型態。此類合作有助於開發在技術上與時俱進，且符合社會需求之AI課程。"],
            ["聚焦專業發展之政策方針", "AI素養的成功亦仰賴旨在為教育工作者提供長久且全面專業發展之政策，其內容應涵蓋技術知識，以及對AI的批判性、包容性與倫理觀點。明確的標準與持續的支持，能深化教師之信任感、專業知能，以及將AI融入教育實踐之意願。"]
          ]}
        ]}
      ]
    }}
  ],
  refs: [
    { t: "Renkema, M., Van den Boom-Muilenburg, E., Friso-van den Bos, I., Theelen, H., Wopereis, I., & Schildkamp, K. (2025). AI-GO! A framework for AI literacy in education (AI-GO framework). Npuls AI and Data Literacy.", url: "https://npuls.nl/en/knowledge-base/ai-go-ai-literacy-in-education-a-practical-framework" }
  ]
},

{
  id: "digcomp-3",
  issue: 2,
  topics: ["literacy", "assess", "intl"],
  title: "DigComp 3.0 歐洲數位能力框架",
  authors: "陳佩英教授計畫團隊",
  tldr: [
    "歐盟聯合研究中心（JRC）發布第五版歐洲數位素養框架：五大領域、21項素養，跨越教育、就業與公民社會。",
    "首度系統化導入學習成果，以修訂版布魯姆分類學細化為523項行為指標（知識42%、技能38%、態度20%）。",
    "AI不另立模組，而以「AI明示」與「AI隱含」橫向嵌入各項素養，強調人類承擔最終判斷責任。"
  ],
  takeaway: "框架給教師三項實務指引：搭建素養教學鷹架、建立素養評量規準、建制教學使用規範。",
  fulltext: { label: "歐盟原文", url: "https://data.europa.eu/doi/10.2760/0001149" },
  body: [
    { p: "歐盟委員會聯合研究中心（JRC）近期發布了《歐洲數位素養框架》第五版（DigComp 3.0）。有別於專注於單一教育場域的框架，DigComp 3.0嘗試建構一套可跨越教育、就業與公民社會的共同能力語言，以為個人在學習、工作及社會參與上建立全面性的素養標準。其發展歷程為透過廣泛的文獻回顧與專家諮詢方式，以積極回應生成式AI快速演進與錯假資訊加劇下的社會治理需求。" },
    { q: "在DigComp 3.0架構中，數位素養被定義為「為了學習、工作與參與社會，而能夠自信、具批判性且負責任地使用數位科技」，其本質為知識、技能與態度的融貫。" },
    { p: "框架本身由五大核心領域構成，向下細分為21項具體素養：" },
    { chips: ["1. 資訊搜尋、評估與管理", "2. 溝通與協作", "3. 內容創作", "4. 安全、福祉與負責任的使用", "5. 問題辨識與解決"] },
    { p: "此次更新不僅強化了對錯假資訊的辨識，更著重於維持個人身心福祉與具備環境永續意識。" },
    { h: "創新突破：系統化導入「學習成果」" },
    { stats: [ { n: "523", l: "項行為指標" }, { n: "42%", l: "知識" }, { n: "38%", l: "技能" }, { n: "20%", l: "態度" } ] },
    { p: "此框架最具突破性的創新，在於首度系統化地導入「學習成果（learning outcomes）」。框架引入了修訂版布魯姆分類學（Bloom's Taxonomy），將素養細化為523項具體且可操作的行為指標，並相對均衡地配置於知識（42%）、技能（38%）與態度（20%）三個面向。此外，面對AI技術的演變，DigComp 3.0並未將AI視為單一獨立模組，而是採取「橫向整合」策略，區分為「AI明示」與「AI隱含」，系統性地嵌入各項素養中，強調在人機協作中人類必須承擔的最終判斷責任。" },
    { p: "在教育政策與教學實踐層面，DigComp 3.0 提供了教師將抽象素養轉化為具體行動的三大實務指引：" },
    { steps: [
      { t: "搭建素養教學鷹架", d: "教師可透過框架中明確界定的學習成果，將AI的顯性操作或隱含素養具體化。同時，依據四個熟練度（基礎、中階、進階、高級進階）的設計，教師能為不同認知需求的學生規劃差異化教學，亦可結合不插電活動（unplugged activities）引導核心概念的建構。" },
      { t: "建立素養評量規準", d: "藉由布魯姆分類學的動詞敘述，教師能將以往難以衡量的價值判斷與倫理信念，轉譯為具鑑別度的評量尺規。這確保了學習評量不再侷限於技術操作，而是全面涵蓋學生的認知理解與態度展現。" },
      { t: "建制教學使用規範", d: "面對生成式AI帶來的學術誠信與課堂秩序挑戰，框架強調的負責任使用精神能協助教師訂定明確的課堂規範。例如要求學生清楚標註AI生成內容、確立人類對AI產出的最終驗證義務，抑或是考量數位消耗的環境永續規範，從而取代單純的硬性禁用。" }
    ]},
    { q: "綜上所述，若與側重價值觀及教師信念的AI-GO框架相互參照，DigComp 3.0充實且具體的學習成果指標與「社會－技術」的治理觀點，實能作為落實AI素養教學與進行診斷評估時的支援系統。此框架不僅為教育現場提供了教學內容與評量規準的明確指引，其核心願景更在於促使學生從被動的技術使用者，成長為具備倫理思辨、人機協作能力與環境永續意識的數位公民。" },
    { related: "ai-go-framework" }
  ],
  refs: [
    { t: "Cosgrove, J., & Cachia, R. (2025). DigComp 3.0: European digital competence framework fifth edition (EUR 40491). Publications Office of the European Union.", url: "https://data.europa.eu/doi/10.2760/0001149" },
    { t: "陳佩英、梁松平（2026年1月8日）。DigComp 3.0：歐盟數位公民素養與教育政策的關鍵能力框架。教育新知國際串聯。", url: "https://www.gel-net.com/post/digcomp-3-0%EF%BC%9A%E6%AD%90%E7%9B%9F%E6%95%B8%E4%BD%8D%E5%85%AC%E6%B0%91%E7%B4%A0%E9%A4%8A%E8%88%87%E6%95%99%E8%82%B2%E6%94%BF%E7%AD%96%E7%9A%84%E9%97%9C%E9%8D%B5%E8%83%BD%E5%8A%9B%E6%A1%86%E6%9E%B6" }
  ]
},

/* ---------------- 第 1 期 ---------------- */
{
  id: "moe-minister-keynote-2026",
  issue: 1,
  topics: ["tw"],
  title: "教育部長專題演講：科技與人文素養兼備的未來人才",
  authors: "陳佩英教授計畫團隊",
  tldr: [
    "鄭英耀部長於115年1月22日全國大專校院校長會議，以「AI+ ∞」說明跨域整合型AI人才的培育目標。",
    "史丹佛大學工學院與商學院跨域合作逾百年，透過跨學院課程與聯合學位製造跨學群的師生合作機會。",
    "普渡大學以「AI@Purdue」五大策略方向推動，並將AI工作職能列為2026年秋季起入學新生的畢業條件。"
  ],
  takeaway: "部長引申：大學教育需領先培育懂得使用AI、且能對其批判思辨的競爭力。",
  fulltext: { label: "部長簡報 PDF", url: "https://president115.npust.edu.tw/wp-content/uploads/2026/01/專題演講一-教育部部長簡報.pdf" },
  body: [
    { p: "教育部鄭英耀部長於今年度大專校院校長會議中，以「科技與人文素養兼備的未來人才」為題進行專題演講，其中以**「AI+ ∞」**符號說明建立跨域整合型 AI 人才之培育目標，並援引史丹佛大學及普渡大學實例，說明建立跨域整合型人才培育架構，以及大學教育培育學生具備 AI 應用能力之需要。以下進行簡要摘錄：" },
    { h: "史丹佛大學跨學院合作" },
    { p: "史丹佛大學之工學院及商學院已進行跨域合作逾百年 (Jensen, 2025)，其藉由跨學院課程與聯合學位等設計，以製造出跨學群的師生合作機會。" },
    { q: "「從其經驗實能為建立跨域整合型 AI 人才之願景帶來啟示，亦提醒我們創新應從實驗室開始，並應轉化為實際行動，帶來影響力。」", by: "鄭英耀，2026" },
    { h: "普渡大學將 AI 工作職能列為學生畢業條件" },
    { p: "普渡大學設定「AI@Purdue」核心框架，其具體劃分了五大策略方向：" },
    { chips: ["Learning with AI", "Learning about AI", "Research AI", "Using AI", "Partnering in AI"] },
    { p: "以將 AI 技術結合至各專業領域當中。各學院亦將相應制定與更新 AI 工作職能標準，並列為 2026 年秋季起入學新生之畢業條件 (Fiorini, 2025)。" },
    { q: "「對此部長亦引申大學教育需領先培育懂得使用 AI 且能對其批判思辨之競爭力。」", by: "鄭英耀，2026" }
  ],
  refs: [
    { t: "鄭英耀（2026）。科技與人文素養兼備的未來人才〔專題演講〕。115年全國大專校院校長會議，國立屏東科技大學。", url: "https://president115.npust.edu.tw/wp-content/uploads/2026/01/專題演講一-教育部部長簡報.pdf" },
    { t: "Fiorini, P. (2025). Purdue unveils comprehensive AI strategy; trustees approve ‘AI working competency’ graduation requirement. Purdue University.", url: "https://www.purdue.edu/newsroom/2025/Q4/purdue-unveils-comprehensive-ai-strategy-trustees-approve-ai-working-competency-graduation-requirement/" },
    { t: "Jensen, B. (2025). Business and engineering schools mark century of shared innovation. Stanford Report.", url: "https://news.stanford.edu/stories/2025/12/gsb-school-engineering-collaboration-century-innovation" }
  ]
},

{
  id: "syllabus-ai-four-dimensions",
  issue: 1,
  topics: ["syllabus", "assess"],
  title: "國內外大學 AI 指引在教學大綱規範之四大面向",
  authors: "陳佩英教授計畫團隊",
  tldr: [
    "綜觀國內外知名大學的AI指引，教學大綱的AI規範可歸為四個面向：使用權限、使用範圍與界線、載明機制、評量機制。",
    "使用權限多授權教師決定，常見三種模式：四級開放（史丹佛、政大）、四級使用（倫敦國王學院）、雙軌制（雪梨大學）。",
    "評量端的做法包括提高安全評量占比、改採過程評量，以及重新評分、調查性口試等裁量機制。"
  ],
  takeaway: "撰寫課綱的AI條款時，可依四面向逐一檢查：是否開放、可以用在哪裡、如何揭露、如何評量。",
  body: [
    { p: "綜觀各國內外知名大學之 AI 應用指引，於設定教學大綱或建立課室規範時，大致可採以下四面向架構進行完整的 AI 使用約束：" },
    { h: "面向一：課程是否允許使用 AI 之權限" },
    { p: "各大學普遍採取授權個別教師決定之原則，由教師依據學科教學目標或任務型態進行考量，此面向於各大學指引中大致可劃分三項模式：" },
    { h3: "四級開放模式" },
    { p: "部分大學建立四種明確的約束型態，供教師在教學大綱中勾選或闡明。" },
    { compare: {
      cols: ["史丹佛大學", "國立政治大學"],
      rows: [
        ["（1）完全開放", "（1）完全開放使用"],
        ["（2）有條件開放（須註明）", "（2）有條件開放使用"],
        ["（3）原則上禁止（須獲准）", "（3）禁止使用"],
        ["（4）完全禁止", "（4）本課程無涉及AI使用"]
      ],
      notes: ["(Stanford Teaching Commons, 2023)", "於全校課程查詢系統中，各門課程之教學大綱有一處明確載明「本課程可否使用生成式AI工具」（國立政治大學，2023）"]
    }},
    { h3: "四級使用模式" },
    { p: "倫敦國王學院於指引中，不僅告訴學生是否能使用，更依據AI介入學習過程的程度進行四項分級 (King’s College London, 2025a, 2025b)：" },
    { ladder: [
      { t: "極小化使用", d: "AI僅允許用於修正錯字之拼字檢查；通順語句之語法檢查；及轉化語音為文字之自動轉錄用途。此面向將不會影響內容原創性及論點闡述，故不需嚴謹揭露，但仍須符合學術誠信。" },
      { t: "有限度選擇性使用", d: "AI僅允許用於生成初步構思之點子發想；提供文章架構之結構建議；整理複雜概念之想法摘要。此面向允許學生用以克服空白頁恐懼與整理思緒，然核心論述仍出於作者本身。" },
      { t: "開放使用", d: "允許學生於學習過程中自由使用，但須確保過程透明。此面向雖無特定限制，然學生仍須紀錄使用何種工具與使用於何種用途。" },
      { t: "鑲嵌式使用", d: "AI使用便屬課程評量之一環，如：要求學生比較不同AI工具之產出結果，抑或能評估出AI在回答特定學科知識中之準確度與偏見。" }
    ]},
    { h3: "雙軌制" },
    { p: "雪梨大學於課程評量中劃分了兩類 (The University of Sydney, 2026)：" },
    { cards: [
      { icon: "🔒", t: "（1）安全評量", d: "於口筆試及實作等項目中，原則上禁用AI。" },
      { icon: "🔓", t: "（2）開放評量", d: "於家庭作業或報告等項目中，允許使用然須標註。" }
    ]},
    { h: "面向二：課程使用 AI 之範圍與界線" },
    { twoCol: {
      left: { t: "✅ 允許使用 AI 之範圍", items: [
        { t: "發想與規劃", d: "可用於腦力激盪、生成大綱、建議關鍵字或縮小研究範圍。(Monash University, n.d.-a; University of Chicago, n.d.-a; University College London, 2025a; University College London, 2025b)" },
        { t: "檢視與通順語意", d: "可用於潤飾語句、檢查語法上錯誤、解釋程式碼或抽象概念。(McGraw Center for Teaching and Learning, n.d.; King’s College London, 2025a；國立臺灣師範大學，2025)" },
        { t: "進行批判對話", d: "可將 AI 視為蘇格拉底式導師或批判朋友，以深化不同論點之理解。(AI Competency Centre, n.d.; The University of Sheffield, n.d.-a; King’s College London, 2025a, 2025c)" }
      ]},
      right: { t: "⛔ 禁止使用 AI 之界線", items: [
        { t: "複製貼上內容", d: "禁止直接繳交未經人為修正之AI產出。(University College London, n.d.; University of Chicago, n.d.-a; The University of Sydney, 2026)" },
        { t: "輸入個人性或隱私性資訊", d: "禁止於未經核可的AI工具輸入個人具識別化資訊、學生教育紀錄及未公開之研究數據。(Harvard University, n.d.; University of Melbourne, n.d.-a, n.d.-b; Digital & Technology Solutions, n.d.)" },
        { t: "將 AI 列為作者", d: "因AI工具無法釐清責任歸屬，故不可將其列為學術發表中之共同作者。(Nanyang Technological University, 2023；國立成功大學，2025；國立陽明交通大學，2023)" },
        { t: "用於評量個人反思或創作之任務", d: "此類型任務須展現學生個人觀點與創造力，故建議教師採取抗AI的設計方向。(University of Chicago, n.d.-a, n.d.-b; University of Cambridge, n.d.；國立陽明交通大學，2023)" }
      ]}
    }},
    { h: "面向三：課程使用 AI 之載明機制" },
    { p: "各大學在指引中亦有提及若課程開放使用，其可採行之載明與揭露原則，大致包含以下三種模式：" },
    { cards: [
      { icon: "🧾", t: "ADE 揭露框架", d: "此框架包含 Acknowledge（承認）、Describe（描述）、Evidence（證據）的三段式載明標準，學生需詳細說明使用 AI 之部分與用途，並最終附上截圖紀錄。(The University of Sheffield, n.d.-b)" },
      { icon: "🗂️", t: "留存互動及修正歷程", d: "要求學生留存使用時輸入之提示詞、原始輸出結果，以及進行迭代修正之歷程紀錄作為備查。(Monash University, n.d.-b; MIT Libraries, 2025)" },
      { icon: "✍️", t: "進行引註與個人聲明", d: "因AI產出具不可回溯性（同樣提示詞結果相異），故僅視為個人通訊規定進行標註（國立臺灣大學，無日期）。此外，亦包含需於標題頁註腳或參考文獻之後引註（國立政治大學，2023）。或聲明「我承認使用『工具名稱』來生成『內容摘要』」之載明範本 (The University of Sydney, 2026)。" }
    ]},
    { h: "面向四：課程涉及 AI 使用之評量機制" },
    { steps: [
      { t: "調整評分佔比", d: "規定科目總分中超過五成需來自無法透過 AI 介入之安全評量（口試、監考考試與現場表演等）。(University of Melbourne, n.d.-a.)" },
      { t: "進行過程評量", d: "建議要求學生使用Google Docs撰寫，以便教師能參考修訂版本紀錄來檢視寫作歷程 (University of Chicago, n.d.-b)。抑或將評量重點聚焦於學生如何修正AI錯假內容 (Yale Library, 2025)，以及要求標註經修飾的文句與理由 (Monash University, n.d.-b；國立清華大學AI工作小組，無日期)。" },
      { t: "裁量與調查機制", d: "若經教師查核後發現使用卻未正當註明，抑或於不得使用情境下使用時，教師擁有重新評分、不予計分之裁量權，抑或受學術調查 (AI Competency Centre, n.d.；國立政治大學，2023)。此外，更有採行調查性口試之途徑，藉口試確認學生是否真切掌握內容 (University College London, n.d.)。" }
    ]}
  ],
  refs: [
    { t: "國立臺灣師範大學（2025）。國立臺灣師範大學 – 生成式AI之學習應用及參考指引。", url: "https://ctld.ntnu.edu.tw/generative_ai" },
    { t: "國立成功大學（2025）。國立成功大學生成式AI於教學研究的學術誠信指引。", url: "https://hsm.ncku.edu.tw/var/file/199/1199/img/434977937.pdf" },
    { t: "國立政治大學（2023）。國立政治大學生成式人工智慧運用簡要原則（第 3 版）。", url: "https://sites.google.com/g.nccu.edu.tw/nccubasicprincipleforai/政大生成式ai簡要原則" },
    { t: "國立清華大學AI工作小組（無日期）。大學教育場域 AI 協作、共學與素養培養指引。國立清華大學。", url: "https://ctld.site.nthu.edu.tw/var/file/217/1217/img/268422637.pdf" },
    { t: "國立陽明交通大學（2023）。生成式 AI 用於學術研究之參考指引。", url: "https://oaeri.nycu.edu.tw/userfiles/oaerich/files/20231006111309801.pdf" },
    { t: "國立臺灣大學教務處教學發展中心與數位學習中心（無日期）。生成式AI工具之教學因應措施。", url: "https://www.dlc.ntu.edu.tw/ai-tools/" },
    { t: "AI Competency Centre. (n.d.). Getting started with AI for educators. University of Oxford.", url: "https://oerc.ox.ac.uk/ai-centre/ai-guides/getting-started-with-ai-for-educators" },
    { t: "Digital & Technology Solutions. (n.d.). Available AI Tools. University of California, Los Angeles.", url: "https://dts.ucla.edu/initiatives/ai/available-tools" },
    { t: "Harvard University Information Technology. (n.d.). Generative AI guidelines. Harvard University.", url: "https://huit.harvard.edu/ai" },
    { t: "King’s College London. (2025a). Generative AI: Student guidance.", url: "https://www.kcl.ac.uk/about/strategy/learning-and-teaching/ai-guidance/student-guidance" },
    { t: "King’s College London. (2025b). Meso-level guidance: Departments, programmes and modules.", url: "https://www.kcl.ac.uk/about/strategy/learning-and-teaching/ai-guidance/meso-level" },
    { t: "King’s College London. (2025c). PAIR (problem, AI, interaction, reflection) framework guidance.", url: "https://www.kcl.ac.uk/about/strategy/learning-and-teaching/ai-guidance/pair-framework" },
    { t: "McGraw Center for Teaching and Learning. (n.d.). Generative AI and Our Classrooms. Princeton University.", url: "https://mcgraw.princeton.edu/generative-ai-and-our-classrooms" },
    { t: "MIT Libraries. (2025). Citing AI tools: Home.", url: "https://libguides.mit.edu/cite-AI-tools" },
    { t: "Monash University (n.d.-a). Writing with generative artificial intelligence. Student Academic Success.", url: "https://www.monash.edu/student-academic-success/build-digital-capabilities/create-online/writing-with-artificial-intelligence" },
    { t: "Monash University. (n.d.-b). Acknowledging the use of generative artificial intelligence. Student Academic Success.", url: "https://www.monash.edu/student-academic-success/build-digital-capabilities/create-online/acknowledging-the-use-of-generative-artificial-intelligence" },
    { t: "Nanyang Technological University. (2023). NTU policy on the use of generative artificial intelligence in research.", url: "https://www.ntu.edu.sg/research/resources/use-of-gai-in-research" },
    { t: "Stanford Teaching Commons. (2023). Creating your course policy on AI. Stanford University.", url: "https://teachingcommons.stanford.edu/teaching-guides/artificial-intelligence-teaching-guide/creating-your-course-policy-ai" },
    { t: "The University of Sheffield. (n.d.-a). How to use GenAI for essays and reports. StudySkills@Sheffield.", url: "https://sheffield.ac.uk/study-skills/digital/generative-ai/essays-reports" },
    { t: "The University of Sheffield. (n.d.-b). How to use GenAI for assessment. StudySkills@Sheffield.", url: "https://sheffield.ac.uk/study-skills/digital/generative-ai/assessment" },
    { t: "The University of Sydney. (2026). Using artificial intelligence tools responsibly.", url: "https://www.sydney.edu.au/students/responsible-ai-use.html" },
    { t: "University College London. (2025a). GenAI-assisted search strategies. Library guides and databases.", url: "https://library-guides.ucl.ac.uk/generative-ai/searching" },
    { t: "University College London. (2025b). Generative AI as a source of information. Library guides and databases.", url: "https://library-guides.ucl.ac.uk/generative-ai/genai-source-of-information" },
    { t: "University College London. (n.d.). Engaging with generative AI in your education and assessment.", url: "https://www.ucl.ac.uk/students/exams-and-assessments/assessment-success-guide/engaging-generative-ai-your-education-and-assessment" },
    { t: "University of Cambridge. (n.d.). Generative AI and assessment. Blended Learning Service.", url: "https://blendedlearning.cam.ac.uk/artificial-intelligence-and-education/generative-ai-and-assessment" },
    { t: "University of Chicago. (n.d.). Strategies for designing AI-resistant assignments. IT Services.", url: "https://genai.uchicago.edu/resources/faculty-and-instructors/strategies-for-designing-ai-resistant-assignments" },
    { t: "University of Chicago. (n.d.-a). Using generative AI to support your learning as a student. IT Services.", url: "https://genai.uchicago.edu/resources/students/generative-ai-student-guide" },
    { t: "University of Melbourne. (n.d.-a). GenAI at Melbourne.", url: "https://students.unimelb.edu.au/academic-skills/resources/study-skills/learning-with-genai/GenAI-at-Melbourne" },
    { t: "University of Melbourne. (n.d.-b). Using AI for student assessment and feedback.", url: "https://www.unimelb.edu.au/ai/home/staff/teaching-and-learning/menu-items/assessment" },
    { t: "Yale Library. (2025). Generative artificial intelligence (GAI) literacy framework.", url: "https://library.yale.edu/sites/default/files/files/2025_01_08_AI_Literacy_Framework.pdf" }
  ]
}

];
