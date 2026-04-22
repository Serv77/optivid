const dailyTargets = [
  // --- 11:00 AM ---
  {
    company: "Burgess Yachts",
    url: "burgessyachts.com",
    socialUrl: "instagram.com/burgessyachts",
    targetEmail: "marketing@burgessyachts.com",
    niche: "وساطة وتأجير اليخوت الفاخرة",
    location: "لندن، المملكة المتحدة",
    sendTimeLocal: "11:00 AM",
    entryAngle: "يعتمدون على صور اليخوت فقط دون وجود قوالب احترافية (Brand Framework) ترسخ هيمنتهم الإعلانية.",
    emailSubject: "Elevating the digital authority of your yacht portfolio",
    emailBody: "Hi [Name],\n\nBurgess sets the global standard for superyachts, but your digital and social presence currently relies entirely on raw photography without a cohesive, branded marketing framework to drive charters.\n\nOPTILINE operates on one principle: rapid fixed execution with no monthly retainers. We build and hand over a definitive brand identity system, conversion-focused content assets, and an advanced ad structure tailored specifically for ultra-high-net-worth acquisition.\n\nAre you open to a brief chat this week to discuss bridging this digital gap?",
    arabicNote: "ركزنا على مشكلة 'الاعتماد على الصور الخام' وغياب الاستراتيجية.",
    followUpSubject: "Re: Elevating the digital authority of your yacht portfolio",
    followUpBody: "Hi [Name],\n\nJust bumping this up. I know you are busy, but bringing a strictly branded acquisition framework to your yacht social channels will significantly boost charter inquiries.\n\nAre you open to a quick 5-minute chat this week?"
  },
  {
    company: "Savills (Prime Central London)",
    url: "savills.co.uk",
    socialUrl: "instagram.com/savills",
    targetEmail: "pressoffice@savills.com",
    niche: "عقارات النخبة",
    location: "لندن، المملكة المتحدة",
    sendTimeLocal: "11:00 AM",
    entryAngle: "المحتوى الرقمي الخاص بهم قديم وممل ولا يناسب الجيل الجديد من الأثرياء الذين يطلبون محتوى ديناميكي.",
    emailSubject: "Securing modern wealth buyers in Prime London",
    emailBody: "Hi [Name],\n\nSavills has an incredible legacy in Prime London, but your current social content strategy feels slightly disconnected from the modern wealth demographic. Your properties demand an aggressive, highly polished visual ecosystem.\n\nOPTILINE delivers exactly that without the burden of ongoing retainers. We provide rapid fixed execution. We will modernize your visual brand identity, deliver a suite of high-converting luxury content, and structure a precise ad framework to capture international investors seamlessly.\n\nWould you be open to a short conversation this week to review our approach?",
    arabicNote: "الجيل الجديد من الأثرياء يحتاج لفيديو وحركة وتصميم لامع، وهذه مشكلة سافيلز.",
    followUpSubject: "Re: Securing modern wealth buyers in Prime London",
    followUpBody: "Hi [Name],\n\nFollowing up on my previous note. To consistently capture the modern wealth demographic, Savills needs a sharper visual edge right now.\n\nDo you have 5 minutes this Thursday for a quick breakdown?"
  },
  {
    company: "The Ned",
    url: "thened.com",
    socialUrl: "instagram.com/thenedlondon",
    targetEmail: "communications@thened.com",
    niche: "فندق ونادي أعضاء خاص",
    location: "لندن، المملكة المتحدة",
    sendTimeLocal: "11:00 AM",
    entryAngle: "يفقدون فرصة السيطرة على إعلانات النخبة وتحويل المتابعين إلى 'أعضاء' عبر المحتوى.",
    emailSubject: "Driving exclusive membership acquisition",
    emailBody: "Hi [Name],\n\nThe Ned remains one of the most significant clubs in London, but your digital presence shows an underutilized acquisition engine. Your Instagram is beautiful, but the strategic ad funnels required to actively pull in the next generation of business leaders are lacking.\n\nAt OPTILINE, we only do fixed-scope delivery—no retainers. We refine your digital brand assets, supply high-impact membership content packs, and execute a flawless ad launchpad aimed entirely at high-net-worth professionals.\n\nLet us connect briefly this week to discuss how we can engineer this for you.",
    arabicNote: "لديهم ملايين المتابعين لكنهم لا يحولونهم إلى مبيعات عبر 'مسارات البيع الذكية'.",
    followUpSubject: "Re: Driving exclusive membership acquisition",
    followUpBody: "Hi [Name],\n\nFloating this to the top of your inbox. The Ned is leaving executive memberships on the table by not deploying targeted, conversion-focused paid social structures.\n\nAre you available for a brief call to see how we bypass the retainer model to fix this?"
  },
  {
    company: "Ten Lifestyle Group",
    url: "tengroup.com",
    socialUrl: "instagram.com/tenconcierge",
    targetEmail: "communications@tengroup.com",
    niche: "خدمات كونسيرج للأعمال",
    location: "لندن، المملكة المتحدة",
    sendTimeLocal: "11:00 AM",
    entryAngle: "خطابهم الرقمي جاف جداً ويشبه البنوك، غياب تام لجاذبية 'أسلوب الحياة الراقي'.",
    emailSubject: "Realigning your B2B concierge digital strategy",
    emailBody: "Hi [Name],\n\nTen Lifestyle Group offers unmatched global concierge capabilities, yet your current digital strategy feels overly corporate. Your social presence lacks the dynamic visual authority required to instantly convert elite B2B prospects.\n\nAt OPTILINE, we intervene by delivering high-end digital clarity, entirely bypassing the retainer model. We architect a highly persuasive visual brand identity, create razor-sharp sales content, and engineer precise B2B ad formats meant to capture top executives effortlessly.\n\nAre you open to a brief chat this week to review our execution plan?",
    arabicNote: "اللمسة العصرية مفقودة عندهم تماماً في بحر من الرسميات.",
    followUpSubject: "Re: Realigning your B2B concierge digital strategy",
    followUpBody: "Hi [Name],\n\nJust returning to this. Elevating the visual authority of your digital presence will drastically lower the friction when closing top-tier executives.\n\nOpen to a brief, 5-minute chat on how we execute this quickly?"
  },
  {
    company: "Dr. Barbara Sturm",
    url: "drsturm.com",
    socialUrl: "instagram.com/drbarbarasturm",
    targetEmail: "pr@drsturm.com",
    niche: "العناية بالبشرة للطبقة المخملية",
    location: "لندن، المملكة المتحدة",
    sendTimeLocal: "11:00 AM",
    entryAngle: "غياب الهيكل التحويلي القوي للإعلانات. يعتمدون على قوة الاسم بدلاً من ماكينة استهداف ذكية.",
    emailSubject: "Injecting conversion assets into your luxury skincare brand",
    emailBody: "Hi [Name],\n\nYour skincare lines are revered globally, but taking a close look at your social ecosystem reveals that your paid advertising lacks the structured persuasion necessary to aggressively scale online sales to broader high-end markets.\n\nOPTILINE acts as your tactical design and ad team for rapid growth—with zero monthly retainers. We deliver a complete handover: unifying your digital brand, producing a powerful suite of direct-response content, and building an ad launchpad designed purely for elite e-commerce.\n\nCan we have a quick chat this week to discuss a strategic upgrade?",
    arabicNote: "تزويدهم بماكينة التسويق الذكية بدل الاعتماد الأعمى على شهرة الطبيبة فقط.",
    followUpSubject: "Re: Injecting conversion assets into your luxury skincare brand",
    followUpBody: "Hi [Name],\n\nFollowing up to see if you have considered upgrading the conversion framing on your social channels. The right ad-launch framework will massively scale your digital revenue without agency retainers.\n\nDo you have time for a quick call?"
  },
  {
    company: "Victor Jets",
    url: "flyvictor.com",
    socialUrl: "instagram.com/flyvictor",
    targetEmail: "marketing@flyvictor.com",
    niche: "تأجير الطائرات الخاصة",
    location: "لندن، المملكة المتحدة",
    sendTimeLocal: "11:00 AM",
    entryAngle: "إعلاناتهم شبه مختفية وتحتاج إلى Launchpad كامل لزيادة تحميلات تطبيقهم للحجوزات.",
    emailSubject: "Unlocking on-demand jet charters through targeted ads",
    emailBody: "Hi [Name],\n\nVictor has built a phenomenal aviation platform, yet your digital acquisition engine seems virtually silent on social fronts. You are relying on organic discovery instead of deploying aggressive, visually commanding ad funnels to acquire executives directly.\n\nOPTILINE fixes this instantly on a strict fixed-scope handover. We equip your marketing team with striking visual brand guidelines, high-converting video content packs, and a dedicated dual-campaign ad system designed purely for wealthy audiences.\n\nAre you open to a brief meeting this week to see how we can increase your charter bookings?",
    arabicNote: "التطبيق مذهل ولكن لا أحد يروج له بشكل ابتكاري وممول للمستهدفين بدقة.",
    followUpSubject: "Re: Unlocking on-demand jet charters through targeted ads",
    followUpBody: "Hi [Name],\n\nI know things move fast over there, but Victor Jets is leaving significant charter volume on the table by not having an aggressive social ad funnel for ultra-high net worth flyers.\n\nCan we schedule a 5-minute chat to review the solution?"
  },
  {
    company: "Cadogan Clinic",
    url: "cadoganclinic.com",
    socialUrl: "instagram.com/cadoganclinic",
    targetEmail: "enquiries@cadoganclinic.com",
    niche: "جراحات تجميل من النخبة",
    location: "لندن، المملكة المتحدة",
    sendTimeLocal: "11:00 AM",
    entryAngle: "حسابهم يشبه مستشفى عام، وليس وجهة نخبوية للجراحات التجميلية لمن يعشق أسلوب الحياة الراقي.",
    emailSubject: "Upgrading the patient acquisition framework for your clinic",
    emailBody: "Hi [Name],\n\nThe clinical standard at Cadogan Clinic is unmatched, but your visual brand identity across social platforms currently feels uninspired. Treating high-net-worth patients demands an aesthetic that projects true luxury, not just standard clinical care.\n\nOPTILINE delivers an absolute transformation on a fixed-scope basis. We completely ignore ongoing fees. We rebuild your visual brand guidelines, supply comprehensive content packs designed for premium conversions, and set up the ad framework necessary to secure exclusive consultations.\n\nAre you open to a brief chat this week to effectively secure your luxury positioning?",
    arabicNote: "الجمهور الثري يحتاج أن يرى الفخامة حتى في الأمور الطبية، هذا دورنا.",
    followUpSubject: "Re: Upgrading the patient acquisition framework for your clinic",
    followUpBody: "Hi [Name],\n\nBumping this up. Transforming your clinical feed into an elite lifestyle and aesthetic powerhouse is exactly what drives high-ticket consultations today.\n\nAre you open to a short conversation this week?"
  },
  {
    company: "Rosewood London",
    url: "rosewoodhotels.com",
    socialUrl: "instagram.com/rosewoodlondon",
    targetEmail: "london.communications@rosewoodhotels.com",
    niche: "فندق فخم جداً",
    location: "لندن، المملكة المتحدة",
    sendTimeLocal: "11:00 AM",
    entryAngle: "الاعتماد على الصور الميتة (Static) مع غياب تام لسرد الفيديو الجذاب لجلب الفعاليات الضخمة.",
    emailSubject: "Enhancing digital bookings through premium storytelling assets",
    emailBody: "Hi [Name],\n\nRosewood London stands as a masterpiece of hospitality, but your current digital presence relies too heavily on static, dry imagery. You are missing the dynamic, persuasive content packages required to aggressively dominate executive bookings and high-tier events.\n\nOPTILINE provides surgical digital enhancement. We bypass endless retainers to deliver a direct asset handover. We create a hyper-premium content pack featuring engaging narrative formats, unify your visual guidelines, and establish a sharp ad framework specifically aimed at the global affluent market.\n\nCan we schedule a brief talk this week to explore this integration?",
    arabicNote: "الفيديو هو الملك، والفنادق الراقية متأخرة دوماً في تبنيه بطريقة تحويلية.",
    followUpSubject: "Re: Enhancing digital bookings through premium storytelling assets",
    followUpBody: "Hi [Name],\n\nJust returning to my previous note. Integrating premium, narrative-driven video assets will immediately differentiate Rosewood London from standard static competitor feeds.\n\nDo you have a few minutes to chat this week?"
  },
  {
    company: "Cliveden House",
    url: "clivedenhouse.co.uk",
    socialUrl: "instagram.com/clivedenhouse",
    targetEmail: "marketing@clivedenhouse.co.uk",
    niche: "وجهة ريفية أرستقراطية فاخرة",
    location: "لندن (الضواحي)، المملكة المتحدة",
    sendTimeLocal: "11:00 AM",
    entryAngle: "إعلانات الدفع سيئة وضعيفة مقابل التاريخ الملكي المدهش للمكان.",
    emailSubject: "Translating historical luxury into high-converting ad assets",
    emailBody: "Hi [Name],\n\nCliveden House has a breathtaking legacy, but while auditing your paid media fronts, there is a distinct lack of execution. Your digital strategy is currently failing to use highly refined content assets to capture international elite travelers in real-time.\n\nAt OPTILINE, we provide high-speed asset intervention. No retainers. We step in purely to deliver excellence: crafting a unified brand and storytelling kit, massive amounts of conversion-focused content, and a comprehensive advertising structure to dominate luxury hospitality bookings.\n\nDo you have a few minutes for a brief chat this week to see our proposed frameworks?",
    arabicNote: "التاريخ لن يبيع غرفه أوتوماتيكياً في عصر التشتت، يحتاجون لاستعراض تسويقي حاد.",
    followUpSubject: "Re: Translating historical luxury into high-converting ad assets",
    followUpBody: "Hi [Name],\n\nBumping this up to make sure it wasn't missed. The gap between your actual in-person luxury and current digital ad execution is costing high-tier bookings.\n\nLet’s jump on a quick 5-minute call to discuss closing that gap."
  },
  {
    company: "Cheval Collection",
    url: "chevalcollection.com",
    socialUrl: "instagram.com/chevalcollection",
    targetEmail: "marketing@chevalcollection.com",
    niche: "شقق فندقية للنخبة والسفراء",
    location: "لندن، المملكة المتحدة",
    sendTimeLocal: "11:00 AM",
    entryAngle: "هوية ناشفة ورسمية وتخسر الزبون المهتم بالجانب الراقي والمترف، تبدو كشقق للطلاب المبتعثين.",
    emailSubject: "Fixing the brand perception of your luxury residences",
    emailBody: "Hi [Name],\n\nThe Cheval Collection offers absolutely pristine long-stay accommodations for diplomats and executives, but your digital visual identity feels rigid on your platforms. You are lacking the lifestyle brand kits needed to capture high-value clients before they look elsewhere.\n\nOPTILINE exists solely to deploy these exact assets with no monthly retainers attached. We provide a single fixed-scope execution: delivering a striking, luxury-focused brand identity, extensive content packs, and the ad setups necessary to actively acquire corporate clients.\n\nWe equip your internal team with world-class assets. Are you open to a quick call this week?",
    arabicNote: "الهدف هو انتزاعهم من قوقعة 'العقارات الجامدة' وإدخالهم عالم 'اللايف ستايل الفاخر'.",
    followUpSubject: "Re: Fixing the brand perception of your luxury residences",
    followUpBody: "Hi [Name],\n\nJust following up on my previous email. Shifting the Cheval visual identity from 'corporate' to an elite lifestyle brand will instantly attract a higher tier of diplomat and executive stays.\n\nAre you open to a brief chat?"
  },
  // --- 4:00 PM ---
  {
    company: "mph club",
    url: "mphclub.com",
    socialUrl: "instagram.com/mphclub",
    targetEmail: "media@mphclub.com",
    niche: "تأجير السيارات الفارهة",
    location: "ميامي، الولايات المتحدة",
    sendTimeLocal: "4:00 PM",
    entryAngle: "التصوير والمحتوى عشوائية تماماً وتشبه الهواة، مما يقلل من الفخامة المفترضة لأسطول سياراتهم.",
    emailSubject: "Structuring visual authority for exotic car rentals",
    emailBody: "Hi [Name],\n\nYou possess the greatest luxury fleet in Miami, but right now, mph club operates with a fragmented visual style on social media. The content feels unstructured, heavily diluting the extreme premium value of your vehicles.\n\nOPTILINE solves this immediately with zero monthly retainers. We step in, build a visually commanding brand framework, execute a massive batch of persuasive content assets, and set up your advertising to target high-level tourists precisely.\n\nWe provide the complete engine for your team to use. Are you available for a brief conversation this week?",
    arabicNote: "المحتوى العشوائي يقتل العلامات الفاخرة، وهذا الإيميل يضرب على هذا الوتر.",
    followUpSubject: "Re: Structuring visual authority for exotic car rentals",
    followUpBody: "Hi [Name],\n\nFloating this to the top. To command premium prices consistently, mph club needs a highly cohesive, polished digital brand identity—not just random car shots.\n\nCan we set up a quick 5-minute call this week?"
  },
  {
    company: "Corcoran Sunshine",
    url: "corcoransunshine.com",
    socialUrl: "instagram.com/corcoransunshine",
    targetEmail: "info@corcoransunshine.com",
    niche: "مشاريع العقارات الفاخرة",
    location: "نيويورك، الولايات المتحدة",
    sendTimeLocal: "4:00 PM",
    entryAngle: "الهوية الرقمية للوكالة الأم تبدو باهتة وقديمة بالمقارنة مع قيمة الأبراج المذهلة التي يبيعونها.",
    emailSubject: "Modernizing the visual authority of luxury developments",
    emailBody: "Hi [Name],\n\nYour team markets the absolute pinnacle of luxury real estate in NY, but your corporate digital presence currently feels left behind compared to the billion-dollar developments you represent. This visual mismatch makes closing modern investors harder.\n\nOPTILINE steps in with total precision and no long-term contracts. We offer a singular intervention: overhauling your visual brand kit, delivering hyper-premium content assets, and laying down a flawless ad architecture to put your developments directly in front of global wealth.\n\nDo you have five minutes for a chat this week to review our approach?",
    arabicNote: "لا يصح أن يبدو مطور بالمليارات وكأنه وكالة من العقد الماضي.",
    followUpSubject: "Re: Modernizing the visual authority of luxury developments",
    followUpBody: "Hi [Name],\n\nJust bumping this up. Corcoran Sunshine deals in billion-dollar assets, and your digital footprint must reflect that immense scale flawlessly to modern investors.\n\nAre you open to a brief conversation?"
  },
  {
    company: "Ritz-Carlton Yacht Collection",
    url: "ritzcarltonyachtcollection.com",
    socialUrl: "instagram.com/ritzcarltonyachtcollection",
    targetEmail: "publicrelations@ritzcarltonyachtcollection.com",
    niche: "الرحلات البحرية فائقة الفخامة",
    location: "فلوريدا، الولايات المتحدة",
    sendTimeLocal: "4:00 PM",
    entryAngle: "الإعلانات باهتة ومكررة ولا تلتقط جوهر وملمس 'التجربة البحرية الفائقة'.",
    emailSubject: "Refining the digital acquisition for luxury voyages",
    emailBody: "Hi [Name],\n\nThe Ritz-Carlton Yacht Collection is pioneering luxury at sea, but your targeted social advertising features repetitive content that fails to invoke the intense exclusivity required to close high-end travelers online.\n\nAt OPTILINE, we specialize in immediate course correction—no monthly agency retainers. We architect a pristine brand asset package, deliver stunning conversion-optimized content, and build a surgically precise targeting setup to put your voyages right on the screens of the global elite.\n\nYour onboard experience is flawless; let us engineer the digital assets to match. Open to a chat?",
    arabicNote: "تحويل المبيعات من خلال إظهار 'أسلوب الحياة' الصافي بدلاً من مجرد صور السفينة.",
    followUpSubject: "Re: Refining the digital acquisition for luxury voyages",
    followUpBody: "Hi [Name],\n\nChecking back in on this. By restructuring your ad creatives to sell the undeniable prestige rather than just the voyage, we can significantly scale high-end bookings.\n\nDo you have 5 minutes for a quick chat?"
  },
  {
    company: "Sentient Jet",
    url: "sentient.com",
    socialUrl: "instagram.com/sentientjet",
    targetEmail: "press@sentient.com",
    niche: "بطاقات الطيران الخاص",
    location: "ماساتشوستس، الولايات المتحدة",
    sendTimeLocal: "4:00 PM",
    entryAngle: "إعلاناتهم متناثرة وتجعل الخدمة تبدو أقل حصرية مما هي عليه حقيقةً، كأنها بطاقة بنكية عادية.",
    emailSubject: "Reclaiming exclusivity in your jet card advertising",
    emailBody: "Hi [Name],\n\nSentient Jet offers a brilliant aviation program, but your current advertising setup inadvertently makes the service look too accessible on social media. To close elite clients efficiently, your digital messaging must project severe exclusivity and scarcity.\n\nOPTILINE executes rapid brand recalibration. We completely reject long-term retainers in favor of a fixed-scope handover. We architect powerful visual branding, supply highly persuasive premium content, and engineer precise advertising funnels to filter out unqualified leads instantly.\n\nAre you open to a brief chat to discuss aligning your external assets with your elite card value?",
    arabicNote: "تصميمهم يقتل مبدأ الندرة والحصرية، ونحن سنعيده لهم.",
    followUpSubject: "Re: Reclaiming exclusivity in your jet card advertising",
    followUpBody: "Hi [Name],\n\nFollowing up on my previous note. We specialize in visually communicating absolute exclusivity via targeted ads without locking you into monthly retainers.\n\nAre you available for a brief call?"
  },
  // --- 6:00 PM ---
  {
    company: "Exclusive Resorts",
    url: "exclusiveresorts.com",
    socialUrl: "instagram.com/exclusiveresorts",
    targetEmail: "press@exclusiveresorts.com",
    niche: "نادي إجازات ومنتجعات حصرية",
    location: "دنفر، الولايات المتحدة",
    sendTimeLocal: "6:00 PM",
    entryAngle: "السرد البصري ضعيف ولا يخلق حالة من الحصرية (FOMO) المطلوبة لنادي أعضاء مغلق.",
    emailSubject: "Capturing exclusive members through elite visual assets",
    emailBody: "Hi [Name],\n\nExclusive Resorts offers a brilliant private club experience, but your current digital visual storytelling is actively underselling the exclusivity you actually provide. To capture affluent families, your social assets must instantly project undeniable prestige.\n\nOPTILINE executes without the friction of endless agency retainers. We step in to completely overhaul your foundational brand elements, write and design powerful content assets, and set up a precise ad architecture meant to close high-tier memberships.\n\nAre you available for a quick chat to discuss upgrading your acquisition assets?",
    arabicNote: "نادي فاخر يحتاج للتخلص من 'الظهور العادي' للفت انتباه الأثرياء.",
    followUpSubject: "Re: Capturing exclusive members through elite visual assets",
    followUpBody: "Hi [Name],\n\nJust bumping this up. Building assets that genuinely trigger exclusivity and FOMO is the fastest way to accelerate membership acquisition.\n\nDo you have 5 minutes for a quick chat?"
  },
  // --- 7:00 PM ---
  {
    company: "The Agency",
    url: "theagencyre.com",
    socialUrl: "instagram.com/theagencyre",
    targetEmail: "pr@theagencyre.com",
    niche: "وساطة العقارات الفاخرة",
    location: "كاليفورنيا، الولايات المتحدة",
    sendTimeLocal: "7:00 PM",
    entryAngle: "عقاراتهم مذهلة ولكن لا توجد هوية بصرية توحد محتواهم على الشبكات الاجتماعية. تفتقر الإعلانات والمحتوى لحس 'النخبوية الحقيقية'.",
    emailSubject: "The visual disconnect in your luxury listings",
    emailBody: "Hi [Name],\n\nWhile your luxury portfolio at The Agency is unmatched, there is a clear visual disconnect. Your properties are worth millions, yet your Instagram aesthetic and targeted ads don't currently reflect that true elite tier.\n\nAt OPTILINE, we fix this rapidly with zero monthly retainers. We execute a fixed-scope intervention: we build a flawless visual brand kit, high-converting social content, and an exact ad framework designed to capture UHNW buyers, then hand it all over to your team.\n\nAre you open to a quick chat this week to see how we upgrade your digital showroom?",
    arabicNote: "هذا الإيميل مركز جداً على 'الفجوة البصرية' في الانستغرام مقارنة بسعر العقار.",
    followUpSubject: "Re: The visual disconnect in your luxury listings",
    followUpBody: "Hi [Name],\n\nFloating this to the top. To consistently attract buyers demanding perfection, your digital visual presence must match the exact standard of your multi-million dollar listings.\n\nAre you free for a quick 5-min call this week?"
  },
  {
    company: "Beverly Hills MD",
    url: "beverlyhillsmd.com",
    socialUrl: "instagram.com/beverlyhillsmd",
    targetEmail: "support@beverlyhillsmd.com",
    niche: "عيادة تجميل وعناية بالبشرة",
    location: "بيفرلي هيلز، الولايات المتحدة",
    sendTimeLocal: "7:00 PM",
    entryAngle: "التسويق فيه زحمة نصوص ويفتقد للجمالية والبساطة (Minimalism) التي تميز الماركات الطبية الفاخرة اليوم.",
    emailSubject: "Upgrading your aesthetics marketing framework",
    emailBody: "Hi [Name],\n\nThe clinical excellence at Beverly Hills MD is widely known, but a quick audit of your social channels shows a strategy that feels too cluttered. It lacks the premium minimalism that today's high-end patient expects.\n\nAt OPTILINE, we act as a rapid intervention team. We entirely bypass long-term retainers to deliver a fixed suite of elite assets: from a stunning visual brand architecture to high-converting content and surgical ad campaigns ready to deploy.\n\nYour clinical standard is elite—your digital presence must echo that perfectly. Do you have time for a brief chat this week?",
    arabicNote: "استخدمنا مصطلح 'premium minimalism' لان العيادات الفاخرة تعشق هذا التوجه.",
    followUpSubject: "Re: Upgrading your aesthetics marketing framework",
    followUpBody: "Hi [Name],\n\nFollowing up on my note. Transitioning your brand to a state of absolute premium minimalism will seriously improve your conversion rates for high-ticket clients.\n\nOpen to a brief conversation this week?"
  },
  {
    company: "Silver Air Private Jets",
    url: "silverair.com",
    socialUrl: "instagram.com/silverairprivatejets",
    targetEmail: "info@silverair.com",
    niche: "تأجير وإدارة الطائرات الخاصة",
    location: "كاليفورنيا، الولايات المتحدة",
    sendTimeLocal: "7:00 PM",
    entryAngle: "لا يوجد سكريبتات إقناع أو إعلانات مصممة بذكاء لاستهداف قادة الأعمال مباشرة.",
    emailSubject: "Closing the gap in your private aviation marketing",
    emailBody: "Hi [Name],\n\nYour charter services at Silver Air are top-tier, but displaying jets on Instagram is no longer enough. You are missing the persuasive video scripts and tightly controlled ad targeting necessary to win over high-level executives.\n\nOPTILINE specializes in filling this exact void with zero monthly management fees. We provide targeted execution: delivering a fully crafted brand kit, premium content ready to post, and an exact ad setup to effectively acquire elite flyers.\n\nLet us make your digital presence as sharp as your operations. Are you open to a brief meeting this week?",
    arabicNote: "ضربة قوية لواقع أن مجرد 'عرض الطائرات' لم يعد يكفي لبيع الرحلات.",
    followUpSubject: "Re: Closing the gap in your private aviation marketing",
    followUpBody: "Hi [Name],\n\nJust returning to this. Moving beyond standard jet photos and implementing aggressive, script-driven conversion ads is the key to scaling your charter pipeline.\n\nDo you have a few minutes to chat this week?"
  },
  {
    company: "The Private Suite (PS)",
    url: "reserveps.com",
    socialUrl: "instagram.com/reserveps",
    targetEmail: "press@reserveps.com",
    niche: "محطات سفر فاخرة بالمطارات",
    location: "لوس أنجلوس، الولايات المتحدة",
    sendTimeLocal: "7:00 PM",
    entryAngle: "ضعف في السرد المرئي؛ يعرضون الخدمة ببرود بدلاً من استخدام إعلانات تهاجم تعب السفر وتبيع 'الراحة المطلقة'.",
    emailSubject: "Optimizing the digital narrative for luxury transit",
    emailBody: "Hi [Name],\n\nPS offers an unparalleled travel experience, but your digital storytelling fails to effectively translate that profound luxury into high-converting ad campaigns. Without aggressive, hyper-targeted visual assets, you are leaving executive revenue on the table.\n\nOPTILINE executes completely on a fixed-scope basis—zero retainers. We provide you with a masterclass brand kit, stunning content packs built for the affluent traveler, and an elite ad setup that actively seeks out major executives.\n\nYour service is perfect; let's make your promotional assets match. Open to a quick chat?",
    arabicNote: "بيع 'الشعور بالراحة والحصرية' من خلال المحتوى والحملات.",
    followUpSubject: "Re: Optimizing the digital narrative for luxury transit",
    followUpBody: "Hi [Name],\n\nBumping this up. The service PS provides is phenomenal, but bridging that digital visual gap is necessary to maximize executive bookings via social channels.\n\nCan we set up a quick 5-min call to discuss?"
  },
  {
    company: "O'Gara Coach",
    url: "ogaracoach.com",
    socialUrl: "instagram.com/ogaracoach",
    targetEmail: "marketing@ogaracoach.com",
    niche: "وكالة سيارات فائقة الفخامة",
    location: "بيفرلي هيلز، الولايات المتحدة",
    sendTimeLocal: "7:00 PM",
    entryAngle: "لا يعكسون قوة وبطش ماكينات بوغاتي، الحساب يفتقر للإطار الصارم الموحد.",
    emailSubject: "Overhauling your digital showroom for UHNW buyers",
    emailBody: "Hi [Name],\n\nYou sell the most exotic vehicles on the planet at O'Gara Coach, but your digital content lacks a strict, unified visual brand framework. This disjointed social presence actively diminishes the perceived value of the multi-million dollar assets you hold.\n\nAt OPTILINE, we correct this rapidly. We do not do monthly retainers. We create an immaculate brand toolkit, a batch of incredible visual properties, and an advanced ad setup configured exclusively to attract ultra-high-net-worth buyers.\n\nYour physical showroom is stunning; let us refine your digital one instantly. Available for a quick call?",
    arabicNote: "الحسابات غير المنظمة تكسر ثقة الزبائن الذين يدفعون ملايين الدولارات في ثانية.",
    followUpSubject: "Re: Overhauling your digital showroom for UHNW buyers",
    followUpBody: "Hi [Name],\n\nFollowing up on my previous note. O'Gara handles the pinnacle of automotive engineering—your digital visual framework must command the exact same level of authority to convert buyers.\n\nDo you have 5 minutes to chat?"
  }
];

const strategyHtml = `
  <div class="glass-panel p-6 md:p-8 rounded-xl border border-optiline-gold/30 relative overflow-hidden text-right" dir="rtl">
    <div class="absolute top-0 right-0 w-2 h-full bg-optiline-gold"></div>
    <div class="mb-8 border-b border-gray-800 pb-6 text-center md:text-right">
      <h2 class="text-2xl md:text-3xl font-display font-bold text-optiline-gold mb-4">بروتوكول التدخل النخبوي (The Elite Sniper System)</h2>
      <p class="text-gray-300 leading-relaxed font-arabic text-base md:text-lg">
      لقد تم التأكد بعناية من جميع هذه الشركات وتحليل أوضاعها وحجم مبيعاتها الضخمة. هذه ليست شركات عادية، إنهم "حيتان" في عالم الفخامة. الإيميلات صُممت لتكون حادة ومباشرة ولا تزيد عن بضعة أسطر لاحترام وقت المدرين التنفيذيين، مع التركيز التام على استراتيجيتك الدائمة: <span class="text-white font-bold tracking-wide">تسليم العمل كحزمة كاملة ورفض عقود الدفع الشهري الاستغلالية.</span>
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-black/50 p-6 rounded-lg border border-optiline-border md:col-span-2 shadow-2xl">
        <h3 class="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
          <i data-lucide="crosshair" class="text-optiline-gold w-5 h-5"></i>
          دليل التشغيل و المواعيد الذهبية للإرسال:
        </h3>
        <ul class="space-y-4 text-gray-300 font-arabic text-sm md:text-base">
          <li class="flex items-start gap-3">
            <div class="bg-blue-500/20 text-blue-500 p-2 rounded shrink-0"><i data-lucide="globe-2" class="w-4 h-4"></i></div>
            <div><strong class="text-white">قاعدة التوقيت:</strong> جميع الإيميلات مرفق معها الوقت المثالي للإرسال المبرمج وفق توقيتك الخاص <span class="text-optiline-gold font-bold font-english bg-black px-2 py-0.5 rounded border border-gray-800">(GMT+3)</span>. هذا التوقيت يضمن أن الإيميل سيصلهم فجراً أو في بداية الدوام الرسمي لديهم تماماً (حوالي الساعة 8:30 و 9:00 صباحاً بتوقيتهم).</li>
          <li class="flex items-start gap-3">
            <div class="bg-red-500/20 text-red-500 p-2 rounded shrink-0"><i data-lucide="zap" class="w-4 h-4"></i></div>
            <div><strong class="text-white">الحدة والاختصار:</strong> الإيميلات تم تقصيرها وجعلها (Punchy) بحيث يمكن قراءتها من الجوال في ثوانٍ. تبدأ بضربة الثغرة، ثم تعرض الحل (الحزمة الثابتة)، ثم سؤال مباشر لفتح المحادثة.</div>
          </li>
          <li class="flex items-start gap-3">
            <div class="bg-green-500/20 text-green-500 p-2 rounded shrink-0"><i data-lucide="link" class="w-4 h-4"></i></div>
            <div><strong class="text-white">الوصول الشامل:</strong> لتطوير لوحة القيادة، تم وضع رابط موقعهم وإلى جانبه مباشرة حساب الانستغرام الفعلي لتستطيع إلقاء نظرة سريعة وتفهم الثغرة قبل إرسال الإيميل.</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
`;

// --- Logic & Rendering ---
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  const contentArea = document.getElementById('content-area');
  const tabs = document.querySelectorAll('.tab-btn');
  
  // State management
  let doneState = JSON.parse(localStorage.getItem('optiline_sniper_state')) || {};
  let followUpDoneState = JSON.parse(localStorage.getItem('optiline_followup_state')) || {};

  // Delegated Event Listeners
  document.addEventListener('click', (e) => {
    // Basic Done Toggle
    const doneBtn = e.target.closest('.done-toggle');
    if (doneBtn) {
      const company = doneBtn.getAttribute('data-company');
      doneState[company] = !doneState[company];
      localStorage.setItem('optiline_sniper_state', JSON.stringify(doneState));
      
      const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-target');
      if(activeTab === 'daily-targets') renderTargets();
      return;
    }

    // Follow-up Done Toggle
    const followUpBtn = e.target.closest('.followup-toggle');
    if (followUpBtn) {
      const company = followUpBtn.getAttribute('data-company');
      followUpDoneState[company] = !followUpDoneState[company];
      localStorage.setItem('optiline_followup_state', JSON.stringify(followUpDoneState));
      
      const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-target');
      if(activeTab === 'follow-ups') renderFollowUps();
      return;
    }

    // Copy Event Listener (Subject/Body handling)
    const copyBtn = e.target.closest('.copy-btn');
    if (copyBtn) {
      const type = copyBtn.getAttribute('data-copy');
      const targetElement = copyBtn.closest('.px-4, .px-6')?.querySelector(`.${type}-target`);
      
      if (!targetElement) return;

      navigator.clipboard.writeText(targetElement.innerText);
      const originalHTML = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i data-lucide="check" class="w-3 h-3 text-green-500"></i>';
      lucide.createIcons();
      
      setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        lucide.createIcons();
      }, 1500);
    }
  });

  // Render Daily Targets
  function renderTargets() {
    let html = '<div class="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 fade-in">';
    dailyTargets.forEach((item, index) => {
      const number = index + 1;
      const isDone = doneState[item.company];
      
      const cardClass = isDone 
        ? 'bg-[#050505] border-gray-800 opacity-60 grayscale blur-[1px] transition-all duration-300 hover:blur-none hover:opacity-100 hover:grayscale-0' 
        : 'bg-gradient-to-b from-[#111] to-[#0A0A0A] border-optiline-border';
      const indicatorClass = isDone ? 'bg-gray-800' : 'bg-optiline-gold group-hover:shadow-[0_0_15px_rgba(189,157,85,0.5)]';
      const btnClass = isDone 
        ? 'bg-green-500/10 text-green-500 border-green-500/30' 
        : 'bg-black text-gray-400 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-optiline-gray';

      html += `
        <div class="${cardClass} border rounded-xl relative overflow-hidden group transition-all duration-500 flex flex-col shadow-2xl">
          <div class="absolute top-0 right-0 w-1.5 h-full ${indicatorClass} transition-all"></div>
          
          <div class="p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800/80 bg-black/60 relative gap-4">
            <div class="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.01)_10%,transparent_15%)] pointer-events-none"></div>
            <div class="flex items-start gap-4 w-full" dir="ltr">
              <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-optiline-gold/10 text-optiline-gold border border-optiline-gold/30 shrink-0 text-sm font-bold shadow-inner">${number}</span>
              <div class="flex-1 overflow-hidden">
                <h3 class="text-base md:text-lg font-display font-bold text-white truncate drop-shadow-md tracking-wide">${item.company}</h3>
                
                <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                  <a href="https://${item.url}" target="_blank" class="text-[10px] md:text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 w-fit">
                    <i data-lucide="external-link" class="w-3 h-3"></i> ${item.url}
                  </a>
                  <a href="https://${item.socialUrl}" target="_blank" class="text-[10px] md:text-xs text-pink-400 hover:text-pink-300 flex items-center gap-1 transition-colors bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20 w-fit shrink-0">
                    <i data-lucide="instagram" class="w-3 h-3"></i> Instagram
                  </a>
                </div>
              </div>
            </div>
            
            <button class="done-toggle flex items-center w-full md:w-auto justify-center gap-2 px-4 py-2 rounded text-[11px] font-bold border transition-colors shrink-0 ${btnClass} shadow-lg" data-company="${item.company}">
              <i data-lucide="check-circle" class="w-4 h-4"></i> <span>${isDone ? 'DONE' : 'MARK COMPLETE'}</span>
            </button>
          </div>

          <div class="bg-black/80 px-4 md:px-6 py-2.5 border-b border-gray-800/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-gray-400 font-english" dir="ltr">
             <div class="flex items-center gap-2">
                 <i data-lucide="map-pin" class="w-3.5 h-3.5 text-gray-500"></i> ${item.location}
             </div>
             <div class="flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded border border-yellow-500/20 shadow-sm font-bold font-arabic text-[10px] md:text-xs">
                 <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                 <span>وقت الإرسال (GMT+3): ${item.sendTimeLocal}</span>
             </div>
          </div>

          <!-- Target Email Display Bar -->
          <div class="px-4 md:px-6 py-3 border-b border-gray-800/80 bg-black/40 flex justify-between items-center" dir="ltr">
             <div class="flex items-center gap-2 text-gray-300 font-english text-xs md:text-sm">
                <i data-lucide="at-sign" class="w-3.5 h-3.5 text-blue-400"></i>
                <span class="email-target font-medium">${item.targetEmail}</span>
             </div>
             <button class="text-[10px] font-english text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-500/30 px-3 py-1.5 rounded transition flex items-center justify-center gap-1.5 copy-btn border border-blue-500/20 shadow-sm" data-copy="email">
                <i data-lucide="copy" class="w-3 h-3"></i> <span>Copy Email</span>
             </button>
          </div>
          
          <div class="p-4 md:p-6 flex-1 flex flex-col gap-4 text-right" dir="rtl">
            <div>
              <div class="text-[11px] text-gray-400 uppercase tracking-widest font-english mb-2 flex items-center gap-2">
                <i data-lucide="target" class="w-3.5 h-3.5 text-red-500/90"></i> الزاوية الهجومية (الثغرة)
              </div>
              <div class="text-[13px] md:text-[14px] text-gray-300 leading-relaxed font-arabic bg-red-900/10 p-4 rounded-lg border border-red-900/30 shadow-inner">
                ${item.entryAngle} <br/> <span class="text-optiline-gold/80 block mt-2 text-xs">ملاحظة: ${item.arabicNote}</span>
              </div>
            </div>
          </div>
          
          <div class="px-4 md:px-6 pb-4 md:pb-6 pt-0" dir="ltr">
             <div class="flex justify-between items-center mb-3">
                 <span class="text-[10px] md:text-[11px] text-gray-400 uppercase tracking-widest font-english flex items-center gap-1.5"><i data-lucide="mail-check" class="w-3.5 h-3.5 text-optiline-gold"></i> Email Output</span>
                 <div class="flex gap-2">
                   <button class="text-[10px] font-english text-gray-300 hover:text-white bg-optiline-gray hover:bg-optiline-gold/20 hover:border-optiline-gold/50 px-3 py-1.5 rounded transition flex items-center justify-center gap-1.5 copy-btn border border-gray-700 shadow-md transition-all" data-copy="subject">
                      <i data-lucide="copy" class="w-3 h-3"></i> <span>Subject</span>
                   </button>
                   <button class="text-[10px] font-english text-gray-300 hover:text-white bg-optiline-gray hover:bg-optiline-gold/20 hover:border-optiline-gold/50 px-3 py-1.5 rounded transition flex items-center justify-center gap-1.5 copy-btn border border-gray-700 shadow-md transition-all" data-copy="body">
                      <i data-lucide="copy" class="w-3 h-3"></i> <span>Body</span>
                   </button>
                 </div>
             </div>
             <div class="group/email relative bg-[#0a0a0a] rounded-lg border border-gray-800 p-4 shadow-inner">
                 <div class="text-[11px] md:text-xs font-bold text-gray-400 mb-3 pb-3 border-b border-gray-800/80 shrink-0">Subject: <span class="text-white font-normal subject-target">${item.emailSubject}</span></div>
                 <div class="font-english text-[13px] md:text-sm text-gray-300 leading-relaxed whitespace-pre-wrap h-[150px] overflow-y-auto custom-scrollbar body-target">${item.emailBody}</div>
             </div>
          </div>
          
        </div>
      `;
    });
    html += '</div>';
    contentArea.innerHTML = html;
    lucide.createIcons();
  }

  // Render Follow Ups Tab
  function renderFollowUps() {
    let html = `
      <div class="glass-panel p-6 mb-8 rounded-xl border border-blue-500/20 bg-blue-500/5 text-right flex flex-col md:flex-row items-center justify-between gap-4 fade-in" dir="rtl">
        <div>
          <h3 class="text-xl font-bold text-blue-400 mb-2 flex items-center gap-2"><i data-lucide="clock" class="w-5 h-5"></i> قاعدة الـ 72 ساعة</h3>
          <p class="text-gray-300 font-arabic text-sm lg:text-base">استراتيجية "Bump" تعني إعادة رفع رسالتك للقمة بدون إزعاج القارئ. أرسل هذه الرسالة كـ (Reply) على إيميلك الأول حصراً بعد مرور 3 أيام من عدم الرد.</p>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 fade-in">
    `;

    dailyTargets.forEach((item, index) => {
      const number = index + 1;
      const isDone = followUpDoneState[item.company];
      
      const cardClass = isDone 
        ? 'bg-[#050505] border-gray-800 opacity-60 grayscale blur-[1px] transition-all duration-300 hover:blur-none hover:opacity-100 hover:grayscale-0' 
        : 'bg-[#111] border-gray-800 hover:border-blue-500/30';
      const indicatorClass = isDone ? 'bg-gray-800' : 'bg-blue-500/50 group-hover:bg-blue-400';
      const btnClass = isDone 
        ? 'bg-green-500/10 text-green-500 border-green-500/30' 
        : 'bg-black text-gray-400 border-gray-700 hover:text-white hover:border-gray-500 hover:bg-optiline-gray';

      html += `
        <div class="${cardClass} border rounded-xl relative overflow-hidden group transition-all duration-300 flex flex-col shadow-lg">
          <div class="absolute top-0 right-0 w-1 h-full ${indicatorClass} transition-all"></div>
          
          <div class="p-4 flex justify-between items-center border-b border-gray-800/80 bg-black/40">
            <div class="flex items-center gap-3" dir="ltr">
              <span class="flex items-center justify-center w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0 text-xs font-bold">${number}</span>
              <h3 class="text-sm font-display font-bold text-white truncate drop-shadow-md tracking-wide">${item.company}</h3>
            </div>
            
            <button class="followup-toggle flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold border transition-colors shrink-0 ${btnClass}" data-company="${item.company}">
              <i data-lucide="check" class="w-3 h-3"></i> <span>${isDone ? 'DONE' : 'BUMP IT'}</span>
            </button>
          </div>
          
          <div class="px-4 md:px-6 py-5 flex-1" dir="ltr">
             <div class="flex justify-between items-center mb-3">
                 <span class="text-[10px] text-gray-400 uppercase tracking-widest font-english flex items-center gap-1.5"><i data-lucide="reply" class="w-3 h-3 text-blue-400"></i> Bump Email</span>
                 <div class="flex gap-2">
                   <button class="text-[10px] font-english text-gray-300 hover:text-white bg-[#1a1a1a] hover:bg-blue-500/20 hover:border-blue-500/50 px-3 py-1.5 rounded transition flex items-center justify-center gap-1.5 copy-btn border border-gray-800 shadow-sm transition-all" data-copy="subject">
                      <i data-lucide="copy" class="w-3 h-3"></i> <span>Subject</span>
                   </button>
                   <button class="text-[10px] font-english text-gray-300 hover:text-white bg-[#1a1a1a] hover:bg-blue-500/20 hover:border-blue-500/50 px-3 py-1.5 rounded transition flex items-center justify-center gap-1.5 copy-btn border border-gray-800 shadow-sm transition-all" data-copy="body">
                      <i data-lucide="copy" class="w-3 h-3"></i> <span>Body</span>
                   </button>
                 </div>
             </div>
             <div class="group/email relative bg-black rounded border border-gray-800/80 p-3 shadow-inner">
                 <div class="text-[11px] font-bold text-gray-500 mb-2 pb-2 border-b border-gray-800/60 flex items-center gap-2">
                   Subject: <span class="text-gray-300 font-normal subject-target">${item.followUpSubject}</span>
                 </div>
                 <div class="font-english text-[13px] text-gray-300 leading-relaxed whitespace-pre-wrap body-target">${item.followUpBody}</div>
             </div>
          </div>
        </div>
      `;
    });
    html += '</div>';
    contentArea.innerHTML = html;
    lucide.createIcons();
  }

  function renderStrategy() {
    const wrapper = document.createElement('div');
    wrapper.className = 'fade-in';
    wrapper.innerHTML = strategyHtml;
    contentArea.innerHTML = '';
    contentArea.appendChild(wrapper);
    lucide.createIcons();
  }

  // Handle Tab Clicks
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => {
        t.classList.remove('active', 'text-optiline-gold');
        t.classList.add('text-gray-400');
        t.querySelector('.indicator')?.classList.add('hidden');
      });

      const clicked = e.currentTarget;
      clicked.classList.add('active', 'text-optiline-gold');
      clicked.classList.remove('text-gray-400');
      clicked.querySelector('.indicator')?.classList.remove('hidden');

      const target = clicked.getAttribute('data-target');
      if(target === 'daily-targets') renderTargets();
      if(target === 'follow-ups') renderFollowUps();
      if(target === 'strategy') renderStrategy();
    });
  });

  // Initial Render
  renderTargets();
});
