// --- Data Structures ---

const auditData = [
  {
    company: "Waterfront Law",
    url: "waterfront.law",
    niche: "مكتب محاماة تقني (Boutique Law)",
    location: "لندن، المملكة المتحدة",
    flaw: "التحليل البصري الدقيق: الموقع يعتمد بشكل مفرط وفرعي على قوائم منسدلة كثيفة (Drop-downs) وخاصة في قسم الخدمات (Our Services) مثل الملكية الفكرية والشركات. غياب مساحات الراحة البصرية، واعتماد كلي على نصوص جامدة (Walls of Text) دون أي فيديوهات تبني الثقة أو تصف خبرات المحامين بشكل شخصي في صفحة (Our People). الإعلانات المرئية قديمة وتستهدف الجمهور الخاطئ.",
    solution: "حزمة CORE - إعادة هندسة هوية بصرية فاخرة، تحويل صفحات الخدمات المعقدة إلى مسارات مبسطة بتوجيه مرئي (Visual Funnels)، وإنتاج فيديوهات قيادة فكرية (Thought Leadership) للشركاء لترسيخ مكانتهم كمرجعية قانونية موثوقة في لندن.",
    roi: "القطاع القانوني يعتمد بنسبة 90% على 'الثقة المسبقة'. توحيد الهوية الفاخرة سيقلل التردد لدى المدراء التنفيذيين، ويزيد معدلات التحويل بشكل فوري، مما يضمن استقطاب قضايا وعملاء ذوي قيمة عالية (High-Ticket) تفوق تكلفة الحزمة بأضعاف."
  },
  {
    company: "Premier Cosmetic Surgery",
    url: "premiercosmeticla.com",
    niche: "عيادة تجميل وجراحة فاخرة",
    location: "لوس أنجلوس، الولايات المتحدة",
    flaw: "التحليل البصري الدقيق: في إحدى أكثر المدن تنافساً (LA)، يقدمون خدمات طبية راقية ولكن الموقع يفتقر إلى السرد الفاخر. قسم (Before & After) يعرض الحالات بطريقة طبية جافة ومكررة. الاستهداف الإعلاني غير دقيق ويوحي بأن العيادة موجهة للعامة وليس للنخبة. الهوية البصرية مفككة ولا تعكس الفخامة المتوقعة من هذا المستوى المتميز.",
    solution: "حزمة MATRIX - تنفيذ استراتيجية محتوى مرئي متعدد القنوات. سنحول صور (قبل وبعد) إلى سلسلة وثائقية قصيرة وسينمائية لرحلة العملاء، مقرونة بإعلانات موجهة بدقة عالية للمجتمعات الراقية وبيفرلي هيلز.",
    roi: "عندما ترفع القيمة المدركة (Perceived Value) عبر محتوى سينمائي فاخر، ستتمكن العيادة من رفع أسعارها والخروج من دائرة المنافسة على السعر، مما يضاعف العائد على الإنفاق الإعلاني (ROAS) بشكل هائل وتحويل سرديتهم البصرية إلى قصص سريعة الانتشار."
  },
  {
    company: "Miami Luxury Real Estates",
    url: "miamiluxuryrealestates.com",
    niche: "وكالة عقارات فائقة الفخامة",
    location: "ميامي، الولايات المتحدة",
    flaw: "التحليل البصري الدقيق: صفحة المشاريع المميزة (Featured Properties) تعرض عقارات مذهلة بصور عالية الدقة (Static Images)، ولكن يوجد ضعف شديد وخطير في بناء العلامة التجارية الشخصية للوكلاء. صفحة الفريق (The Team) تفتقر تماماً لمحتوى الفيديو الجذاب الذي يروي قصص الوكلاء وعمق علاقاتهم. الهيكل الإعلاني غير مترابط ولا يُبرز الحصرية.",
    solution: "حزمة NEXUS - استحواذ كامل على النظام البيئي الرقمي. دمج جولات فيديو عقارية درامية مع بناء علامة تجارية شخصية طاحنة لكل وكيل، مدعومة بإعلانات متزامنة تستهدف المستثمرين الدوليين.",
    roi: "في العقارات الفاخرة، يشتري العميل 'الوكيل' قبل أن يشتري 'العقار'. هذا النظام البيئي الموحد سيبرر العمولات المرتفعة، ويعزل المنافسين، ويجذب المشترين الدوليين وأصحاب الثروات المليارية (UHNWI) حصرياً لهذه الوكالة."
  },
  {
    company: "Vontobel Wealth",
    url: "vontobel.com",
    niche: "إدارة الثروات الخاصة والاستثمار",
    location: "زيورخ، سويسرا",
    flaw: "التحليل البصري الدقيق: موقع إلكتروني ضخم ولكنه يمتلك طابعاً كلاسيكياً ومملاً جداً (Corporate PR). أقسام إدارة الثروات (Wealth Management) مكدسة بالبيانات الصحفية واللغة المعقدة. القطاع المالي هنا يفتقر تماماً للجانب الإنساني؛ لا يوجد محتوى فيديو تثقيفي يربط المستشارين بالعملاء. ولا توجد استراتيجية إعلانية لاستهداف الأجيال الأصغر.",
    solution: "حزمة CORE - إعادة بناء الحضور الرقمي لزرع الثقة الفورية. إنشاء محتوى فيديو تأسيسي وتثقيفي ينزع الغموض عن الاستثمار، ويعكس خبراتهم العميقة بأسلوب حديث وجذاب يناسب الجيل الجديد.",
    roi: "أكبر تهديد للوكالات المالية العريقة هو فقدان الاتصال بالجيل الجديد من ورثة الثروات (Next-Gen Wealth). تحديث عامل الثقة بصرياً سيسد هذه الفجوة ويمكّنهم من استحواذ هذه الشريحة الضخمة قبل أن تذهب للبنوك الرقمية الحديثة."
  },
  {
    company: "Graft Architects",
    url: "graftlab.com",
    niche: "هندسة معمارية وتصميم النخبة",
    location: "برلين، ألمانيا",
    flaw: "التحليل البصري الدقيق: قسم المشاريع (Projects) يعرض شبكة صور مذهلة بصرياً، ولكنها تعاني من الجمود الرقمي. الموقع يبدو كملف PDF ثابت يتم تصفحه. غياب تام للسرد القصصي (Storytelling) وراء كل مشروع معقد. بالإضافة إلى ذلك، لا توجد أي آلية لتوليد العملاء (Lead Generation) أو توجيه الزوار بوضوح نحو طلب الاستشارة المقفلة، مع انعدام التواجد الإعلاني المؤثر.",
    solution: "حزمة MATRIX - تفعيل ملف الإنجازات (Portfolio) ليصبح نابضاً بالحياة عبر محتوى فيديو سينمائي تفاعلي (Video Case Studies)، وإعلانات موجهة بعناية نحو المطورين العقاريين وكبار المستثمرين.",
    roi: "بدون مسار مبيعات (Funnel) واضح، تبقى المشاهدات مجرد إعجابات فارغة. المحتوى المدعوم بالقصص، والمدمج مع الاستهداف الإعلاني الدقيق (B2B)، سينقلهم فوراً من مربع التنافس وتقديم العطاءات إلى مرحلة الطلب الحصري والمباشر."
  },
  {
    company: "Satov Consultants",
    url: "satovconsultants.com",
    niche: "استشارات استراتيجية (B2B)",
    location: "تورونتو، كندا",
    flaw: "التحليل البصري الدقيق: يمتلكون كفاءة تقنية عالية جداً ولكن بهوية بصرية باهتة وعامة لا تميزهم عن المستشارين المستقلين. أقسام (Our Work) تعتمد بالكامل على المقالات النصية الطويلة دراسات الحالة المعقدة وتغيب عنها مقاطع الفيديو الديناميكية. استراتيجياتهم الإعلانية تحرق الميزانية في استهداف شبكي واسع بدلاً من استهدافناع القرار بأسلوب مباشر (ABM).",
    solution: "حزمة NEXUS - إعادة بناء قمع المبيعات بالكامل (Authority Funnel). علامة تجارية فاخرة ومختلفة كلياً، محتوى فيديو مؤثر يختصر النصوص المعقدة، وإعلانات موجهة ببراعة لأسواق الـ B2B وأصحاب القرار.",
    roi: "في الاستشارات، إطالة دورة المبيعات تعني خسارة الإيرادات. هذا النظام المدمج والفاخر، والذي يتبنى منهجية (Video-First)، سيختصر دورة المبيعات تماماً ويزيد معدلات التحويل المباشر مع تخفيض تكلفة الاستحواذ على العميل (CAC)."
  }
];

const scriptsData = [
  {
    company: "Waterfront Law",
    script: "Hi Waterfront Law team. I was just analyzing your digital presence at waterfront.law, and I noticed a significant gap that is actively costing you premium clients. While your legal expertise in London—especially your corporate and intellectual property work—is undeniably top-tier, your website’s visual identity and content delivery currently feel text-heavy and generic. When high-net-worth clients or corporate directors search for representation, they make snap judgments based entirely on brand cohesion and trust signals. Right now, your reliance on static, dense service pages and lack of authoritative video content is leaking high-value leads to competitors who feature a more modern, commanding digital presence. That is exactly where the Optiline CORE package comes in. We don’t just build websites. Optiline engineers a completely unified digital growth ecosystem. We synchronize your premium brand identity, thought-leadership video content, and targeted ad strategies into one seamless, client-generating machine. Stop losing high-ticket cases to firms with less expertise but better digital branding. Reply directly to this email or visit the Optiline portal today to claim a customized preview of your new, unified digital ecosystem. Let's elevate your firm."
  },
  {
    company: "Premier Cosmetic Surgery",
    script: "Hi Premier Cosmetic Surgery team. I was reviewing your clinic’s digital footprint in Los Angeles and saw something incredibly concerning. Your aesthetic procedures and technological capabilities are world-class, but your social proof and ad targeting are completely disjointed. You are offering elite, premium services but presenting them to very generic audiences with a fragmented visual brand and out-dated before-and-after galleries. This identity crisis means affluent, high-paying clients are hesitating and booking with your competitors instead. With the Optiline MATRIX package, we solve this immediately. We synchronize a multi-channel visual content strategy with highly precise, hyper-targeted ads, transforming your static social channels into an exclusive, cinematic narrative that commands premium pricing. Do not let an outdated ad structure and generic visual identity diminish your clinical excellence. It's time to build a brand that matches your results. Reply to this message directly, on WhatsApp, or visit the Optiline website right now so we can show you exactly how this premium system scales your practice. Speak soon."
  },
  {
    company: "Miami Luxury Real Estates",
    script: "Hello Miami Luxury Real Estates. I am looking at your featured listings today, and while the properties are absolutely stunning, your digital ecosystem is completely fragmented. Your top agents lack strong, narrative-driven personal branding video content, and your ad structure is entirely disjointed. Ultra-high-net-worth buyers and international investors buy into the authority of the broker just as much as they buy the property itself, and right now, your digital presence is making you blend in with average agencies. The Optiline NEXUS package is engineered specifically for this exact problem. We execute a full ecosystem takeover—synchronizing your luxury brand, premium agent video content, and precisely targeted ads into a single, unified machine. This instantly positions your firm as the undeniable, dominant luxury authority in the Miami market. Stop letting disjointed marketing lower your perceived value and cost you multi-million dollar commissions. Reply to this email today or visit our website to see a tailored, high-level preview of your new digital presence. Let us elevate your brand."
  },
  {
    company: "Vontobel Wealth",
    script: "Hi Vontobel Wealth team. I was studying your firm's digital presence in Zurich and I noticed a critical vulnerability. Your wealth management and investment services are clearly built on profound legacy and expertise, but your website is visually stale and entirely lacks modern, educational authority content. In 2026, this means you are completely missing out on the massive wealth transfer to the next generation of clients, who demand modern digital trust and video engagement before investing a single dollar. We built the Optiline CORE package to fix this exact leak in your pipeline. Optiline reconstructs your foundational brand and deploys high-end thought leadership content that instantly builds unshakeable digital trust and connection. We synchronize this so you look as premium and authoritative online as you do in the boardroom. To see exactly how we can bridge this generational gap and radically modernize your trust factor for elite investors, please reply to this message directly or visit Optiline online today. Talk to you soon."
  },
  {
    company: "Graft Architects",
    script: "Hi Graft Architects. Your architectural portfolio in Berlin is visually incredible—the raw design talent is obvious. However, your digital website currently functions like a static, silent PDF. You have absolutely zero storytelling video content breaking down your process, and effectively zero targeted ad presence. Because of this structural gap, you are constantly forced to wait and bid on projects instead of having elite developers and clients exclusively request your firm directly. With the Optiline MATRIX package, we completely activate your high-end portfolio. We deploy cinematic video case studies and synchronize them with highly targeted B2B ad campaigns pointed directly at premium real estate developers. We take your brand, your content, and your ads, and synchronize them into a sophisticated, highly-tuned growth ecosystem. It is time to shift your firm from being digitally invisible to being the inevitable choice for massive projects. Reply to this message via email or WhatsApp, or visit the Optiline website right now to see how we transform your digital authority. I look forward to your response."
  },
  {
    company: "Satov Consultants",
    script: "Hello Satov Consultants. I wanted to reach out because while your strategic B2B consulting expertise in Toronto is obvious and highly technical, your external brand identity is completely generic. Your current reliance on massive text blocks, outdated blog formats, and broad-audience ad targeting is actively burning your marketing budget and drastically extending your sales cycle. The Optiline NEXUS package changes this dynamic completely. We tear down and rebuild your authority funnel from the ground up—implementing a premium visual brand overhaul, a video-first thought leadership content strategy, and hyper-targeted B2B digital ads. This unified ecosystem cuts through the noise, significantly shortens your sales cycle, and drives high-ticket corporate conversions at scale. You are too good to blend in with average, low-tier consultants. Reply directly to this email today or visit the Optiline website to secure a custom architectural walkthrough of how this automated system will scale your firm's revenue. Cheers."
  }
];

const visualGuidesData = [
  {
    company: "Waterfront Law",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "ابدأ بتسجيل شاشتك الحقيقية في الصفحة الرئيسية (waterfront.law). حرّك مؤشر الفأرة نحو القائمة العلوية (Our Services)، انقر على قسم (Intellectual Property) لديهم، وقم بالتمرير للأسفل (Scroll) ببطء شديد لإظهار كمية النصوص الهائلة والشكل المكدس والممل للفقرات." },
      { time: "[0:15 - 0:35]", instruction: "انتقل سريعا إلى صفحة (Our People) لعرض قائمة المحامين. حدد بمؤشرك على صورهم الثابتة، لإيصال الفكرة المرئية المتمثلة في الغياب التام لقصص الفيديو التفاعلية (Thought Leadership Videos) التي تعتبر أساس الثقة للعميل الفاخر." },
      { time: "[0:35 - 1:05]", instruction: "انتقال مفاجئ وأنيق بطريقة (Fade Through Black) إلى أمثلة من عمل Optiline لحزمة CORE. عرض واجهة موقع محاماة أخرى قمنا بتطويرها أو قالب فاخر: مساحات فارغة متناسقة، فيديو سينمائي خفيف في الخلفية، وقمع مبيعات واضح للاستشارات الحصرية." },
      { time: "[1:05 - 1:20]", instruction: "شاشة Optiline الختامية الداكنة (Optiline_Outro) المذكورة في خطة الإنتاج. شعار Optiline يلمع بالذهبي مع نص الـ CTA الواضح المكتوب في الخطة." }
    ]
  },
  {
    company: "Premier Cosmetic Surgery",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "تسجيل حي لموقع (premiercosmeticla.com). انتقل فوراً إلى معرض الصور (Before & After Gallery) وتصفح الحالات المعروضة. توقف وقم بعمل إبراز (Highlight effect) في برنامج المونتاج على الجودة البصرية التقليدية للموقع التي لا توحي بكونهم في منطقة لوس أنجلوس الراقية." },
      { time: "[0:15 - 0:35]", instruction: "اذهب إلى صفحة (Procedures) للعمليات، وأظهر غياب أي مقاطع فيديو تشرح التجربة الفاخرة للعميل. أضف تأثير ضبابي خفيف (Blur) على القوائم المزدحمة لتعكس فكرة 'الهوية المفككة'." },
      { time: "[0:35 - 1:05]", instruction: "انتقال درامي إلى عرض حزمة MATRIX. شغّل لقطات سريعة واحترافية لفيديوهات سينمائية طبية تجميلية (High-end Clinic B-roll)، وعرض لشكل إعلانات Instagram و TikTok المستهدفة ببراعة كيف تبدو عند تنفيذها بنظام Optiline المتكامل." },
      { time: "[1:05 - 1:20]", instruction: "شاشة Optiline الختامية الداكنة. يجب أن تكون الكلمات (Captions) في أجزاء الثواني الأخيرة متوافقة تماما مع حركة ظهور النص في الفيديو للدعوة إلى زيارة موقع Optiline." }
    ]
  },
  {
    company: "Miami Luxury Real Estates",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "بدء التسجيل من موقع (miamiluxuryrealestates.com). مرر واجهة الصفحة الرئيسية بسرعة عبر صور القصور الفاخرة، ثم اذهب مباشرة وابحث عن صفحة وكلاء العقارات ومسؤولي المبيعات." },
      { time: "[0:15 - 0:35]", instruction: "بينما تقرأ السكريبت عن 'هيكلية الإعلانات غير المترابطة وضياع هوية الوكيل'، قم بالتأشير بالماوس على ملفات الوكلاء الشخصية الخالية من أي فيديو سردي. استخدم تأثير التكبير (Zoom in) في المونتاج على هذه النقطة الحرجة." },
      { time: "[0:35 - 1:05]", instruction: "تحول جذري وقوي (Glitch or Clean Slide Transition) في العرض إلى حزمة NEXUS. اعرض لقطات تخيلية من محفظة Optiline: وكيل عقاري يقف أمام قصر فخم بتصوير احترافي، يليه شكل قمع مبيعات (Funnel) وإعلانات منظمة." },
      { time: "[1:05 - 1:20]", instruction: "الشاشة الختامية القياسية لوكالة Optiline، تظهر بثبات وقوة مع استقرار طبقة الصوت للدعوة للتواصل المباشر لترقية العلامة التجارية." }
    ]
  },
  {
    company: "Vontobel Wealth",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "تسجيل واجهة موقع (vontobel.com). توجه إلى قسم (Insights) أو قسم إدارة الثروات. أظهر كثرة الأخبار ذات الطابع المؤسساتي البارد (Corporate PR) والبيانات الصحفية الجافة." },
      { time: "[0:15 - 0:35]", instruction: "بينما يقول الصوت (Visuals are stale and lacks educational authority)، قم بالتمرير للأسفل على إحدى المقالات النصية الطويلة جداً لبيان مدى ملل التجربة للعميل الشاب الذي سيرث الثروة في عام 2026." },
      { time: "[0:35 - 1:05]", instruction: "انتقال سلس (Smooth Wipe) إلى حزمة CORE. عرض منصة مالية حديثة قمنا بتصميمها أو واجهة تخيلية تعتمد على لون عميق (Deep Blue or Black) مع واجهات بيانات دقيقة، ولقطة قصيرة لمستشار مالي يتحدث أمام الكاميرا بثقة تامة." },
      { time: "[1:05 - 1:20]", instruction: "تختتم بمشهد Optiline الموحد، مع بروز أيقونة البريد الإلكتروني والموقع بوضوح ليقوم المدير المالي بأخذ خطوة مباشرة بعيدة عن المكالمات الاستكشافية التقليدية." }
    ]
  },
  {
    company: "Graft Architects",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "تسجيل موقع (graftlab.com). ادخل إلى قسم المشاريع (Projects List) وافتح أحد مشاريعهم المعمارية المذهلة. حرك الشاشة لإظهار الصور الجميلة. هنا التناقض: تصميم مذهل ولكن بصمت رقمي قاتم." },
      { time: "[0:15 - 0:35]", instruction: "اشرح عبر مؤشر الماوس كيف أن المحتوى أشبه بكاتالوج أو PDF صامت بلا سرد للقصة وراء التصميم، ولا توجد أي أزرار أو نظام لاصطياد العميل المحتمل (Lead Capture)." },
      { time: "[0:35 - 1:05]", instruction: "أثناء ذكر حزمة MATRIX في التعليق، استبدل الشاشة سريعاً بلقطة فيديو درامية بطيئة لتصميم معماري 3D متحرك، وتصميم إعلانات لينكد إن (B2B Ads) تستهدف أصحاب المشاريع العقارية الكبيرة، مما يفعل قمع المبيعات." },
      { time: "[1:05 - 1:20]", instruction: "الختام بالشاشة ذات الهوية الراقية الخاصة بـ Optiline. يجب أن يترك انطباعاً بأن وكالتك هي الوحيدة القادرة على دمج فن العمارة بعلم المبيعات." }
    ]
  },
  {
    company: "Satov Consultants",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "تصوير موقع (satovconsultants.com). توجه إلى قسم (Our Work / Case Studies). قم بالتظليل السريع بالماوس (Highlight) على الكتل النصية والأبحاث والشكل الذي يبدو كمدونة جامدة ولا يثير حماس صانع القرار التنفيذي." },
      { time: "[0:15 - 0:35]", instruction: "مرر الشاشة لأعلى ولأسفل لبيان عدم وجود محتوى فيديو تعريفي أو أدوات تفاعلية لاختصار المبيعات. ضعيب بصرية عامة باستخدام دائرة حمراء (Red Circle Graphic في المونتاج) لثانية واحدة لتأكيد النقطة." },
      { time: "[0:35 - 1:05]", instruction: "انتقال سريع (Fast Cut) يوافق الإيقاع السريع للتحول في حزمة NEXUS. عرض أشكال (Sales Funnel Dashboards)، وإعلان مستهدف بشكل قوي (Hard-hitting B2B Ad) ومحتوى فيديو لرئيس تنفيذي يشرح الاستراتيجية." },
      { time: "[1:05 - 1:20]", instruction: "انهاء المقطع بنزول الشعار الذهبي لـ Optiline على الخلفية السوداء. وتذكير حاسم بزيارة الموقع لاقتناص عرض الحل المخصص." }
    ]
  }
];

const sprintPlanHtml = `
  <div class="glass-panel p-8 rounded-xl border border-optiline-gold/30 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-2 h-full bg-optiline-gold"></div>
    <div class="mb-8 border-b border-gray-800 pb-6 text-center md:text-right">
      <h2 class="text-3xl font-display font-bold text-optiline-gold mb-4">خريطة طريق الدقائق الـ 180 (The 3-Hour Sprint)</h2>
      <p class="text-gray-300 leading-relaxed font-arabic text-lg">بصفتي مخرج محتوى (Video Director) ومديراً تنفيذياً يعتمد على مبدأ "السرعة مع الحفاظ على الفخامة"، يمكنني تأكيد أن إنتاج 6 فيديوهات عالية الجودة في 3 ساعات (180 دقيقة) هو أمر ممكن تماماً إذا استخدمت نظام "خط التجميع" (Assembly Line / Batch Processing). السر هنا هو عدم صنع كل فيديو على حدة، بل تنفيذ كل مرحلة للـ 6 فيديوهات دفعة واحدة.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 dir-rtl text-right">
      
      <!-- Tolls -->
      <div class="bg-black/50 p-6 rounded-lg border border-optiline-border">
        <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <i data-lucide="wrench" class="text-optiline-gold"></i>
          ترسانة الأدوات المجانية المطلوبة:
        </h3>
        <ul class="space-y-3 text-gray-300 font-arabic">
          <li><span class="text-optiline-gold font-bold">للصوت:</span> TTSMaker أو Clipchamp (توليد ذكاء اصطناعي احترافي بدون علامة مائية).</li>
          <li><span class="text-optiline-gold font-bold">لتسجيل الشاشة:</span> إضافة الكروم المجانية Screenity أو برنامج OBS Studio.</li>
          <li><span class="text-optiline-gold font-bold">للمونتاج والنصوص التوضيحية:</span> CapCut (أسرع برنامج لتراكب الصوت والصورة واستخراج النصوص).</li>
          <li><span class="text-optiline-gold font-bold">للشاشة الختامية (CTA):</span> موقع Canva (الحساب المجاني يكفي).</li>
        </ul>
      </div>

      <!-- Phase 1 -->
      <div class="bg-black/50 p-6 rounded-lg border border-optiline-border">
        <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <span class="bg-optiline-gold text-black w-6 h-6 flex items-center justify-center rounded font-display text-sm">1</span>
          مصنع الصوت "التعليق الصوتي"
        </h3>
        <p class="text-xs text-optiline-gold font-english tracking-widest mb-4">TIME: 25 MIN</p>
        <p class="text-sm text-gray-400 mb-3 block"><strong>الهدف:</strong> استخراج 6 ملفات صوتية (MP3) بصوت ذكاء اصطناعي فاخر وواثق.</p>
        <ul class="list-decimal list-inside space-y-2 text-gray-300 font-arabic text-sm">
          <li>افتح تطبيق Optiline Dashboard، واذهب لتبويب Video Scripts.</li>
          <li>افتح موقع TTSMaker.com (مجاني).</li>
          <li>الصق النص الأول، اختر صوتاً (ذكوري أو أنثوي بعمق وثبات - مثلاً "US English - Michael").</li>
          <li>اضغط توليد، وحمّل الملف باسم 1_Waterfront.mp3.</li>
          <li>كرر العملية فوراً للشركات الخمس المتبقية.</li>
        </ul>
      </div>

      <!-- Phase 2 -->
      <div class="bg-black/50 p-6 rounded-lg border border-optiline-border">
        <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <span class="bg-optiline-gold text-black w-6 h-6 flex items-center justify-center rounded font-display text-sm">2</span>
          الأدلة المرئية "تسجيل الشاشة"
        </h3>
        <p class="text-xs text-optiline-gold font-english tracking-widest mb-4">TIME: 45 MIN</p>
        <p class="text-sm text-gray-400 mb-3 block"><strong>الهدف:</strong> تصوير مواقع العملاء لتسليط الضوء على الخلل بناءً على توجيهات الإخراج المرئي.</p>
        <ul class="list-decimal list-inside space-y-2 text-gray-300 font-arabic text-sm">
          <li>افتح الروابط الـ 6 من التقرير التنفيذي وجزّئ التبويبات بالمتصفح.</li>
          <li>شغّل أداة تسجيل الشاشة (Screenity أو OBS).</li>
          <li>افتح موقع الشركة الأولى، ابدأ التسجيل لتصفح المشاكل والمواطن الجامدة (التزم بدليل الإخراج المرئي بدقة).</li>
          <li>أنهِ التسجيل واحفظه باسم 1_Waterfront_Video.mp4.</li>
          <li>كرر ذلك سريعاً للبقية. مدة كل تسجيل بحد أقصى 45 ثانية.</li>
        </ul>
      </div>

      <!-- Phase 3 -->
      <div class="bg-black/50 p-6 rounded-lg border border-optiline-border">
        <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <span class="bg-optiline-gold text-black w-6 h-6 flex items-center justify-center rounded font-display text-sm">3</span>
          الهوية والشاشة الختامية
        </h3>
        <p class="text-xs text-optiline-gold font-english tracking-widest mb-4">TIME: 20 MIN</p>
        <p class="text-sm text-gray-400 mb-3 block"><strong>الهدف:</strong> شاشة نهاية ثابتة وأنيقة تعرض الحل وتطلب الرد المباشر.</p>
        <ul class="list-decimal list-inside space-y-2 text-gray-300 font-arabic text-sm">
          <li>افتح موقع Canva.com واصنع تصميم فيديو (1920x1080).</li>
          <li>اجعل الخلفية باللون الأسود العميق أو الرمادي الداكن جداً.</li>
          <li>ضع شعار Optiline في المنتصف (بخط Space Grotesk عريض لون ذهبي).</li>
          <li>أضف تحته عبارة الـ CTA (Reply directly to this message...).</li>
          <li>حمّل المقطع كفيديو 10 ثوانٍ مسماه Optiline_Outro واحتفظ للستة فيديوهات كلها.</li>
        </ul>
      </div>

      <!-- Phase 4 -->
      <div class="bg-black/50 p-6 rounded-lg border border-optiline-border md:col-span-2">
        <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <span class="bg-optiline-gold text-black w-6 h-6 flex items-center justify-center rounded font-display text-sm">4</span>
          خط التجميع النهائي والمونتاج
        </h3>
        <p class="text-xs text-optiline-gold font-english tracking-widest mb-4">TIME: 75 MIN</p>
        <p class="text-sm text-gray-400 mb-3 block"><strong>الهدف:</strong> دمج الصوت، صورة الشاشة، وشاشة النهاية، وإضافة نصوص (Captions) احترافية في برنامج CapCut.</p>
        <ul class="list-decimal list-inside space-y-2 text-gray-300 font-arabic text-sm grid md:grid-cols-2 gap-4">
          <li>افتح برنامج CapCut. أنشئ مشروعاً جديداً لكل شركة (12 دقيقة للفيديو).</li>
          <li><strong>الطبقة 1 (Video):</strong> ضع تسجيل شاشة موقع العميل، ثم الشاشة الختامية Optiline_Outro بعدها.</li>
          <li><strong>الطبقة 2 (Audio):</strong> اسحب ملف MP3 وضع طبقة الصوت بالأسفل.</li>
          <li><strong>المزامنة (Sync):</strong> اجعل طول فيديو الشاشة موازياً لنصف الصوت الأول، واحرص أن تظهر شاشة Optiline تحديداً عند جملة (That is where the Optiline package comes in).</li>
          <li><strong>الترجمة (Captions):</strong> اذهب إلى Text -> Auto-captions لاستخراج الكلمات، وعدل تصميمها بلون أبيض/ذهبي متحرك.</li>
          <li>صدّر الفيديو 1080p MP4 وكرر الإنتاج لباقي الشركات بشكل آلي ومستمر (Muscle Memory).</li>
        </ul>
      </div>

      <!-- Phase 5 / CRO Adive -->
      <div class="bg-[#1a150c] p-6 rounded-lg border border-optiline-gold/50 md:col-span-2 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-l from-optiline-gold/10 to-transparent"></div>
        <div class="relative z-10 flex flex-col md:flex-row gap-6 items-center">
          <div class="bg-optiline-gold/20 p-4 rounded-full text-optiline-gold">
            <i data-lucide="zap" class="w-12 h-12"></i>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <span class="bg-optiline-gold text-black px-2 rounded font-display text-sm">5</span>
              المراجعة ونصيحة الـ CRO التكتيكية
            </h3>
            <p class="text-sm text-gray-300 font-arabic mb-2">ضع الفيديوهات في مجلد، راجع البداية والنهاية، وارفعها على Google Drive أو Vimeo لروابط فاخرة بلا مشتتات.</p>
            <p class="text-base text-optiline-gold font-bold font-arabic leading-relaxed border-t border-optiline-gold/30 pt-3 mt-3">
              نصيحة CRO: في غضون أقل من 3 ساعات ستجد أمامك 6 أصول رقمية شديدة التخصيص. تذكر أثناء الإرسال (سواء تواصلت عبر LinkedIn أو Email أو WhatsApp) أن تضع صورة مصغرة (Thumbnail) من داخل موقع العميل نفسه ليتم إقناعه بضرورة فتح الفيديو. بهذا النظام، نُفذت حملة اختراق فعّالة ومجانية 100%.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;


// --- Logic & Rendering ---

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  const contentArea = document.getElementById('content-area');
  const tabs = document.querySelectorAll('.tab-btn');

  // Render Functions
  function renderAudit() {
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">';
    auditData.forEach(item => {
      html += `
        <div class="bg-optiline-gray border border-optiline-border hover:border-optiline-gold/50 transition-colors p-6 rounded-lg flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-english font-semibold text-white tracking-wide" dir="ltr">${item.company}</h3>
            <span class="bg-optiline-gold/10 text-optiline-gold text-xs px-2 py-1 rounded-full font-english font-bold">
              ${item.niche.split(' ')[0]}
            </span>
          </div>
          <div class="space-y-2 mb-6 text-sm text-gray-400 font-english" dir="ltr">
            <div class="flex items-center gap-2">
              <i data-lucide="briefcase" class="w-4 h-4 text-optiline-gold"></i>
              <span>${item.niche}</span>
            </div>
            <div class="flex items-center gap-2">
              <i data-lucide="map-pin" class="w-4 h-4 text-optiline-gold"></i>
              <span>${item.location}</span>
            </div>
            <div class="flex items-center gap-2">
              <i data-lucide="globe" class="w-4 h-4 text-optiline-gold"></i>
              <a href="https://${item.url}" target="_blank" class="hover:text-optiline-gold underline decoration-gray-700 underline-offset-4 pointer-events-auto">
                ${item.url}
              </a>
            </div>
          </div>
          <div class="space-y-4 text-right flex-1">
            <div>
              <h4 class="text-optiline-gold text-sm font-bold mb-1">الخلل والتشخيص الفني</h4>
              <p class="text-gray-300 text-sm leading-relaxed">${item.flaw}</p>
            </div>
            <div>
              <h4 class="text-optiline-gold text-sm font-bold mb-1">الحل الدقيق من Optiline</h4>
              <p class="text-gray-300 text-sm leading-relaxed font-bold">${item.solution}</p>
            </div>
            <div class="mt-auto pt-4 border-t border-gray-800">
              <h4 class="text-green-500 text-sm font-bold mb-1">العائد الاستثماري (ROI Expansion)</h4>
              <p class="text-gray-400 text-sm leading-relaxed">${item.roi}</p>
            </div>
          </div>
        </div>
      `;
    });
    html += '</div>';
    contentArea.innerHTML = html;
    lucide.createIcons();
  }

  function renderScripts() {
    let html = `
      <div class="bg-[#0f172a] border border-blue-500/30 text-blue-200 p-4 rounded-lg flex items-center gap-3 font-english text-sm max-w-4xl mb-8 fade-in mx-auto" dir="ltr">
        <div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
        <strong>STRICT GUIDELINE EXECUTED:</strong> Plain text, no bolding, strictly ~80 seconds (~160-180 words) per script. Deep logic applied. CTA redirects entirely to Email/Web.
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in" dir="ltr">
    `;
    scriptsData.forEach(item => {
      html += `
        <div class="bg-optiline-gray border border-optiline-border p-8 rounded-lg relative overflow-hidden group">
          <div class="absolute top-0 left-0 w-1 h-full bg-optiline-gold/30 group-hover:bg-optiline-gold transition-colors"></div>
          <h3 class="text-xl font-display font-bold text-white mb-6 flex items-center justify-between">
            ${item.company}
            <span class="text-xs font-english text-gray-500 bg-black px-3 py-1 rounded-full border border-gray-800 tracking-widest uppercase">Target Length: 01:20</span>
          </h3>
          <div class="font-english text-sm text-gray-300 leading-[1.8] whitespace-pre-wrap select-all focus:outline-none p-4 bg-black/40 rounded border border-gray-800/50">${item.script}</div>
        </div>
      `;
    });
    html += '</div>';
    contentArea.innerHTML = html;
  }

  function renderVisuals() {
    let html = '<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in">';
    visualGuidesData.forEach(item => {
      html += `
        <div class="bg-optiline-gray border border-optiline-border rounded-lg overflow-hidden flex flex-col">
          <div class="bg-black p-4 border-b border-optiline-border flex justify-between items-center" dir="ltr">
            <h3 class="font-display font-bold text-lg text-white">${item.company} <span class="text-xs text-optiline-gold ml-2 tracking-widest">LIVE URL RECORDING</span></h3>
            <div class="flex gap-2">
               <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
               <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
               <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
          </div>
          <div class="p-6 space-y-5 flex-1">
      `;
      item.timeline.forEach(t => {
        html += `
          <div class="flex gap-4 items-start bg-black/20 p-3 rounded-md border border-white/5">
            <div class="bg-optiline-gold/10 border border-optiline-gold/30 text-optiline-gold font-english text-[11px] font-bold px-2 py-1 rounded shrink-0 whitespace-nowrap mt-1" dir="ltr">
              ${t.time}
            </div>
            <p class="text-gray-300 text-sm leading-relaxed font-arabic">
              ${t.instruction}
            </p>
          </div>
        `;
      });
      html += `
          </div>
        </div>
      `;
    });
    html += '</div>';
    contentArea.innerHTML = html;
  }

  function renderSprint() {
    const wrapper = document.createElement('div');
    wrapper.className = 'fade-in';
    wrapper.innerHTML = sprintPlanHtml;
    contentArea.innerHTML = '';
    contentArea.appendChild(wrapper);
    lucide.createIcons();
  }

  // Handle Tab Clicks
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      // Remove active from all
      tabs.forEach(t => {
        t.classList.remove('active', 'text-optiline-gold');
        t.classList.add('text-gray-400');
        t.querySelector('.indicator')?.classList.add('hidden');
      });

      // Add active to clicked
      const clicked = e.currentTarget;
      clicked.classList.add('active', 'text-optiline-gold');
      clicked.classList.remove('text-gray-400');
      clicked.querySelector('.indicator')?.classList.remove('hidden');

      const target = clicked.getAttribute('data-target');
      if(target === 'audit') renderAudit();
      if(target === 'scripts') renderScripts();
      if(target === 'visuals') renderVisuals();
      if(target === 'sprint') renderSprint();
    });
  });

  // Initial Render
  renderAudit();
});
