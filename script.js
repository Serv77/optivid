const auditData = [
  {
    company: "Waterhouse Young Clinic",
    url: "waterhouseyoung.com",
    niche: "عيادة تجميل طبية فائقة الفخامة",
    location: "لندن، المملكة المتحدة",
    flaw: "التحليل البصري الدقيق: العيادة فاخرة جداً، لكن الهوية الرقمية متناثرة. خطوط وألوان السوشيال ميديا لا تتطابق مع فخامة العيادة (Brand Identity Gap). المحتوى يعتمد على صور جافة ولا يوجد رزنامة محتوى استراتيجية (Content Strategy). إعدادات الإعلانات لديهم تفتقر للهيكلة الصحيحة لاستهداف طبقة الأثرياء.",
    solution: "حزمة MATRIX ($1,799): تسليم نظام كامل في 21 يوم. يشمل: بناء هوية بصرية متكاملة (12 لون و6 خطوط)، 30 أصل محتوى (25 تصميم احترافي + 5 سكريبتات فيديوهات)، مع تجهيز متقدم لحملات إعلانية مزدوجة مع التتبع (Purchase Tracking). تصميم لمرة واحدة بدون عقود احتكارية (No Retainers).",
    roi: "نظام دفع آمن 100% بالعملات الرقمية (Crypto). بمجرد استلام أصول الـ MATRIX الجاهزة، ستتحول واجهتهم الرقمية إلى صالة عرض فاخرة تغلق الصفقات الكبيرة ذاتياً، مما يعفيهم من رسوم الوكالات الإعلانية الشهرية الباهظة."
  },
  {
    company: "26 North Yachts",
    url: "26northyachts.com",
    niche: "وساطة وبيع اليخوت الفاخرة",
    location: "فلوريدا، الولايات المتحدة",
    flaw: "التحليل البصري الدقيق: اليخوت بملايين الدولارات لكن قوالب السوشيال ميديا الخاصة بهم بسيطة وعشوائية (Missing Social Templates). حسابات الوكلاء تفتقر للرسائل المكتوبة بعناية (Captions) التي تبرز السلطة. لا يملكون هيكل إعلاني مبني على إعادة الاستهداف (Retargeting) لجماهير دافئة.",
    solution: "حزمة NEXUS ($1,399): تسليم أصول نمو متسارعة في 14 يوم. يشمل: 5 أصول هوية بصرية، 12 منشور جاهز تماماً للنشر مع رزنامة مبدئية، وإعداد 4 أقسام رئيسية للحملات الإعلانية (Acquisition + Retargeting).",
    roi: "مقابل جزء بسيط جداً من عمولة بيع يخت واحد تدفع بالـ Crypto المريح والمشفر، سيحصلون على بنية تحتية للتسويق يمتلكونها بالكامل دون الحاجة لدفع آلاف الدولارات لشركات التسويق لإدارتها شهرياً."
  },
  {
    company: "Rene Dekker Design",
    url: "renedekker.co.uk",
    niche: "استوديو تصميم داخلي فاخر",
    location: "لندن، المملكة المتحدة",
    flaw: "التحليل البصري الدقيق: الأعمال مذهلة ولكن لا توجد هوية (Brand Guidelines) واضحة توحد شكل المحتوى الخاص بهم. ينشرون صورهم بلا محتوى مكتوب استراتيجي يخاطب المطورين العقاريين، وإعداد بيكسل التتبع (Tracking Pixel) لديهم إما مفقود أو بدائي جداً.",
    solution: "حزمة CORE ($799): الحزمة التأسيسية للماركات الحصرية في 7-10 أيام. تشمل: ضبط قواعد العلامة التجارية (Brand Sheet)، تسليم 6 منشورات جاهزة بالنصوص كبداية، وإعداد 3 ميزات إعلانية أساسية لإطلاق حملة منصة واحدة صحيحة.",
    roi: "الاستثمار في حزمة الـ CORE عبر العملات الرقمية يعطيهم المحرك الأساسي (Essential Engine). سيتمكنون من إطلاق عروضهم للمطورين العقاريين بشكل استثنائي يبدو احترافياً ويميزهم كاستوديو نخبة لا يتنافس على السعر."
  },
  {
    company: "Stratos Jet Charters",
    url: "stratosjets.com",
    niche: "تأجير طائرات خاصة",
    location: "أورلاندو، الولايات المتحدة",
    flaw: "التحليل البصري الدقيق: هويتهم البصرية تبدو تجارية أكثر منها 'نخبوية'. يفتقرون بشدة لتقويم محتوى متطور (Advanced Content Calendar) ولكتابة نصوص مقنعة (Persuasive Captions). إعدادات الإعلانات الحالية تحرق الميزانية على استهداف غير مبني على تقسيم الجمهور بناءً على الحرارة (Cold/Warm/Hot).",
    solution: "حزمة MATRIX ($1,799): إعادة تصنيف شاملة. نوفر لهم هوية علامة تجارية من المستوى المتقدم (10-16 page Brand Guidelines)، ونصنع 30 قطعة محتوى جاهزة للانطلاق الفوري، مع تجهيز (Ad Scale Setup) احترافي، يُنفذ ويسلم بالكامل في غضون 21 يوماً.",
    roi: "نموذجنا يعتمد على الدفع المباشر وغير المركزي (Decentralized Secure Payments). عبر هذا التسليم الثابت، يتخلصون من فوضى الوكالات التقليدية ويمتلكون ترسانة أدوات جاهزة لتوجيه إعلانات الطيران الخاص للمدراء التنفيذيين بكفاءة مطلقة."
  },
  {
    company: "Dege & Skinner",
    url: "degeandskinner.co.uk",
    niche: "خياطة رجالية مخصصة (Savile Row)",
    location: "لندن، المملكة المتحدة",
    flaw: "التحليل البصري الدقيق: إرث عظيم لكن لا يمتلكون قوالب مرئية (Social Templates) عصرية لجذب الجيل الجديد. تغيب عنهم استراتيجية المحتوى التي توضح القيمة، والـ (Tone of Voice) غير محدد رقمياً. لا توجد حملات إعلانية معدة بشكل جيد لاستقطاب جمهور شاب ميسور.",
    solution: "حزمة NEXUS ($1,399): دمج العراقة مع النظام الرقمي الحديث. تسليم 3 قوالب سوشيال ميديا مخصصة، إعداد 12 منشور جاهز يعبر عن العراقة بلمسة حديثة، وتجهيز حملات إعلانية مزدوجة لاستهداف الجماهير الجديدة.",
    roi: "بدل التورط في عقود احتكارية لإدارة حسابات تضر أسلوبهم الملكي، نعطيهم ماكينة عمل جاهزة بسعر ثابت وبطريقة دفع رقمية آمنة (ETH/BTC/USDT)، تجعلهم جاهزين للاستحواذ على الأثرياء الجدد."
  },
  {
    company: "Handel Group",
    url: "handelgroup.com",
    niche: "استشارات وتوجيه تنفيذي",
    location: "نيويورك، الولايات المتحدة",
    flaw: "التحليل البصري الدقيق: نصوص طويلة ومملة. لا يوجد دليل للون أو خطوط واضحة. يفتقرون للسكريبتات الفيديو العميقة (Video Scripts) التي تختصر أفكارهم. البيكسل وإعداد الحملات الإعلانية غير مصمم لاستهداف الشركات B2B بدقة عالية مما يهدر أموالهم.",
    solution: "حزمة MATRIX ($1,799): الهيمنة الاستشارية الرقمية. ملف تعريفي للهوية متكامل، 5 سكريبتات فيديوهات احترافية مدروسة + 25 تصميم معد للنشر. تجهيز كامل لاستراتيجية إعلانات تتضمن خريطة طريق للتوسع (Scaling Roadmap).",
    roi: "المدراء يكرهون التعقيد ويبحثون عن التنفيذ القاطع (Just execution). Optiline تقدم لهم ترسانة الأصول الجاهزة عبر دفعة واحدة حصرية بالعملات الرقمية، لتختصر دورة المبيعات وتبرزهم كقادة للسوق بلا منازع."
  }
];

const scriptsData = [
  {
    company: "Waterhouse Young Clinic",
    script: "Hi Waterhouse Young team. I’ve been auditing your digital footprint in London, and I noticed a significant gap. Your aesthetic expertise is world-class, but your digital growth assets don't reflect that premium status. Affluent clients make snap judgments based on brand identity and content quality. Right now, your branding feels fragmented, your social content relies on basic photos instead of structured narratives, and your ad campaigns seem to lack advanced targeting. At Optiline, we do things differently. We don't trap you in expensive monthly retainers. We deliver fixed-scope, high-impact growth assets. With our top-tier MATRIX package, we hand over a complete premium brand ecosystem, 30 ready-to-publish conversion assets, and a fully structured advanced ad campaign setup. Delivered in just 21 days, via a seamless, decentralized crypto-exclusive payment structure. You get the ultimate digital growth engine, handed directly to your team so you own it. Stop losing premium patients to clinics with inferior skills but better branding. Reply to this message to see your custom implementation plan."
  },
  {
    company: "26 North Yachts",
    script: "Hello 26 North Yachts. I was reviewing your digital presence today. While the multi-million dollar vessels you broker are incredible, your external brand ecosystem is disjointed. High-net-worth buyers invest in the confidence of the broker, but currently, your digital branding lacks a unified system. Your social templates are inconsistent, and your ad setups are missing crucial retargeting frameworks to capture warm leads. We built the Optiline NEXUS package for this exact reality. We refuse to sell monthly management retainers. Instead, we execute fixed-scope premium asset creation. We will seamlessly engineer your brand identity, deliver 12 hyper-targeted ready-to-publish posts, and professionally set up dual ad campaigns for acquisition and retargeting. This entire system is handed over to your team in 14 days, invoiced efficiently through our 100% crypto-exclusive gateway. You get complete ownership of a world-class growth system. Stop letting weak branding cost you massive yacht commissions. Reply directly to this email to see a tailored breakdown of your new brand ecosystem."
  },
  {
    company: "Rene Dekker Design",
    script: "Hi Rene Dekker Design team. Your interior design portfolio in London is visually incredible. However, your digital presence currently functions like a beautiful but silent museum, relying entirely on passive discovery. You lack clear brand guidelines, your social media is missing targeted written strategies, and your fundamental advertising setup is missing the infrastructure needed to capture high-end property developers. The Optiline CORE package fixes this immediately. We don’t do complex retainers. We deliver clear, quality, fixed-scope growth assets. We will hand over a foundational brand identity system, 6 highly strategic ready-to-publish posts, and the essential ad account tracking setups within 10 days. We operate exclusively on swift, decentralized crypto payments so you skip the agency bureaucracy. We take your incredible raw talent and package it into a functional growth engine that you own forever. It is time to shift from passive discovery to active acquisition. Reply directly to this message to see how we upgrade your digital authority today."
  },
  {
    company: "Stratos Jet Charters",
    script: "Hi Stratos Jet Charters. I was analyzing your brand's digital footprint today. Your private aviation services deliver profound luxury, but mathematically, your digital assets look more like a standard software booking company. You are missing a powerful brand voice, your content calendar lacks persuasive narratives, and your ad setups lack the advanced audience segmentation required to capture elite corporate executives affordably. The Optiline MATRIX package solves this permanently. We don't sell bloated monthly retainers. We provide complete, high-impact growth execution. In exactly 21 days, we hand over a 16-page brand guideline, 30 ready-to-post assets including 5 thought-leadership video scripts, and a fully scaled advanced ad campaign roadmap. All transactions are securely processed through our fast, crypto-exclusive gateways for total efficiency. You retain 100 percent full ownership of these massive digital assets to run in-house. Ensure you look as elite online as the jets you charter. Reply directly to this message to review exactly how this system scales your charter volume."
  },
  {
    company: "Dege & Skinner",
    script: "Hello Dege & Skinner. Your bespoke tailoring and Savile Row heritage are absolutely legendary. However, analyzing your visual branding shows that it's failing to capture the massive shift in the modern millionaire demographic. Your social templates look tired, your content strategy lacks modern pacing, and you are missing specialized ad tracking setups that actively capture the new generation of wealth before your modern competitors do. With the Optiline NEXUS package, we bridge this generational gap. We despise agency retainers, so we just build and deliver the engine. We will modernize your primary brand identity, hand over 12 premium crafted posts with a content calendar, and implement the necessary acquisition and retargeting ad structures. Delivered in 14 days via a seamless 100% crypto-exclusive payment model. We honor your immense history while installing a cutting-edge modern growth system for your team to dominate the young money market. Reply directly to this email today to secure a custom visual walkthrough of your new strategy."
  },
  {
    company: "Handel Group",
    script: "Hi Handel Group. I wanted to reach out because while your executive coaching is top-tier, your external brand assets are completely disorganized. Your current strategy's reliance on huge text blocks, missing brand guidelines, and lack of foundational ad setup is actively burning your budget and extending your sales cycle. Top executives demand visual authority instantly. We built the Optiline MATRIX package to provide absolute clarity. We do not offer restrictive monthly retainers; we simply deliver premium execution. In 21 days, we overhaul your complete brand ecosystem, deliver 30 conversion-focused items including 5 high-impact video scripts, and fully structure an advanced ad setup for your team to deploy. Processed rapidly via our secure, decentralized crypto-exclusive network. We give you a sophisticated, brand-safe machine that positions your consultants as undeniable market leaders. Stop blending in with standard business coaches and equip your team with world-class assets. Reply securely to this email right now to review exactly how this system accelerates your firm."
  }
];

const visualGuidesData = [
  {
    company: "Waterhouse Young Clinic",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "تصفح حساب العيادة على انستغرام أو الموقع. مرر الفأرة على الألوان والخطوط غير المتناسقة. استخدم أداة رسم دائرة لتبين غياب (Brand Guidelines) الواضحة التي تعتبر أساسية لأي ماركة فاخرة." },
      { time: "[0:15 - 0:35]", instruction: "ادخل إلى مكتبة الإعلانات أو أرشيف الصور، وأشر إلى الكتل النصية والألوان البسيطة. اذكر أن وكالة Optiline تقدم باقة MATRIX لتبني (Content Strategy) حقيقية وإعداد احترافي للإعلانات." },
      { time: "[0:35 - 1:05]", instruction: "انتقال إلى صفحة أسعار وكالة Optiline (أو قسم باقة MATRIX). أبرز بوضوح ميزات: 30 أصول محتوى، إعداد إعلانات متقدم، والدفع الحصري بالكريبتو (Crypto-Exclusive) بدون احتكار شهري." },
      { time: "[1:05 - 1:20]", instruction: "شاشة ختامية احترافية باسم Optiline تظهر عبارة (Fixed-Scope Execution) وتدعوهم للرد المباشر." }
    ]
  },
  {
    company: "26 North Yachts",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "ابدأ بتسجيل حسابات السوشيال لدى وساطة اليخوت. سلط الضوء على التصميم العشوائي للمنشورات بمرور الماوس السريع، للإشارة لغياب قوالب الهوية المؤسسية (Social Templates)." },
      { time: "[0:15 - 0:35]", instruction: "أثناء الحديث عن غياب إعدادات الإعلانات، قم بمحاكاة كود البيكسل المفقود أو عدم وجود إعلانات نشطة في مكتبة فيسبوك توحي بغياب استراتيجية إعادة الاستهداف (Retargeting)." },
      { time: "[0:35 - 1:05]", instruction: "انتقال مباشر لعرض جدول أسعار Optiline، والتركيز على حزمة (NEXUS Pack $1,399). الإشارة بالماوس إلى تسليم 12 منشور وإعداد الإعلانات المزدوجة." },
      { time: "[1:05 - 1:20]", instruction: "الشاشة السوداء الختامية. رسالة تحث على الرد لبرمجة جلسة أو استلام الأصول عبر بوابات الـ Crypto." }
    ]
  },
  {
    company: "Rene Dekker Design",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "استعرض صور مشاريع التصميم. التناقض: صور بملايين الجنيهات، لكن منشورة بنصوص (Captions) قصيرة وفقيرة بلا (Tone of Voice) أو دعوات اتخاذ إجراء (CTAs)." },
      { time: "[0:15 - 0:35]", instruction: "استخدم مؤشر الماوس لتوضيح أن الموقع لا يبدو مهيئاً بحملات إعلانية احترافية، وأنهم يعتمدون فقط على الانتظار (Passive Discovery)." },
      { time: "[0:35 - 1:05]", instruction: "انتقال وعرض باقة (CORE Pack $799). إبراز التسليم السريع (7-10 Days)، وأن النظام مبني على تسليم أصول الهوية بالكامل بدون أي تعقيدات وبدفع رقمي لا محدود." },
      { time: "[1:05 - 1:20]", instruction: "ثبات الشاشة على شعار وكالة Optiline ودعوة حصرية للاستفادة من الباقة التأسيسية." }
    ]
  },
  {
    company: "Stratos Jet Charters",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "تسجيل موقع الخطوط الخاصة. التظليل على التصاميم والألوان والخطوط (Typography). أظهر كيف تبدو بدائية (Basic Palette) وكأنها غير مصممة من وكالة متميزة." },
      { time: "[0:15 - 0:35]", instruction: "مرر على محتوى المدونة والسوشيال ميديا، وبيّن مدى حاجتهم لـ 30 منشوراً مصمماً وسكريبتات فيديو (Video Scripts) لجذب المدراء التنفيذيين." },
      { time: "[0:35 - 1:05]", instruction: "عبر الجرافيكس في المونتاج، أظهر مقارنة أسعار قوية لباقة (MATRIX Pack $1,799) والتي توفر خريطة توسع إعلاني (Scaling Roadmap) بدلاً من الوكالات التقليدية." },
      { time: "[1:05 - 1:20]", instruction: "اختتم بمشهد يؤكد على (Decentralized Secure Payments) والدفع الرقمي لاستلام أصولهم كاملة." }
    ]
  },
  {
    company: "Dege & Skinner",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "أظهر الانستغرام القديم. مرر الفأرة لإظهار كيف أن التمسك بالتراث بدون تحديث بصري (Color System & Typography) يفقدهم جيل الأثرياء الحديث." },
      { time: "[0:15 - 0:35]", instruction: "ركز على غياب المحتوى السريع وقوالب الإعلانات. أثناء قراءة (Bridging the generational gap)، أظهر كيف يحتاجون لترقية عاجلة." },
      { time: "[0:35 - 1:05]", instruction: "ركز الشرح المرئي على حزمة (NEXUS) وتسليم 12 بوست جاهز مع ضبط إعلانات إعادة الاستهداف، مؤكداً رفضنا للاحتكار الشهري (No Retainers)." },
      { time: "[1:05 - 1:20]", instruction: "شاشة ختامية لـ Optiline، نص صريح بتشجيعهم على اعتماد النقلة الرقمية بشكل مشفر وحديث." }
    ]
  },
  {
    company: "Handel Group",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "استعرض موقع الشركة وملفهم في LinkedIn. الإشارة بقوة وبطء إلى بحر النصوص الطويلة المملة (Huge text blocks) التي لا يملك أي CEO وقتاً لقراءتها." },
      { time: "[0:15 - 0:35]", instruction: "تظليل جزء 'الفيديو والتصميم' الغائب. أشر إلى الحاجة الملحة لوجود (Brand Guidelines) تمنع هذا التشتت المرئي، وتجهيز الإعلانات لاستهداف الأعمال B2B." },
      { time: "[0:35 - 1:05]", instruction: "قص سريع (Jump Cut) لعرض باقة الـ MATRIX من Optiline. التركيز على ميزة السكريبتات الجاهزة (5 Video Scripts) لبناء قيادة فكرية مقنعة." },
      { time: "[1:05 - 1:20]", instruction: "شاشة الاستقرار السوداء النهائية لوكالتك، مع تثبيت نص (100% Crypto-Exclusive) لتصفية العملاء وتعزيز القيمة الفاخرة." }
    ]
  }
];

const outreachData = [
  {
    company: "Waterhouse Young Clinic",
    englishMessage: "Subject: Missing visual assets for UHNW London patients\n\nHi [Name],\n\nI recorded a custom video audit of your current digital setup. Your aesthetic expertise at Waterhouse Young is clearly elite, but your external brand identity and social assets are presenting as overly clinical, causing you to blend in. \n\nWe operate differently—no monthly retainers. We deliver fixed-scope growth assets using a seamless crypto-exclusive gateway. I broke down exactly how a complete brand asset overhaul and structured ad campaign setup can capture high-net-worth patients who are currently booking elsewhere based purely on visual perception.\n\nWatch the 80-second breakdown here: [Video Link]\n\nLet me know your thoughts.",
    arabicTranslation: "الموضوع: غياب الأصول المرئية لمرضى لندن من كبار الأثرياء\n\nمرحباً [الاسم]،\n\nلقد قمت بتسجيل مراجعة فيديو مخصصة للإعداد الرقمي الحالي لديكم. خبرتكم لا غبار عليها، لكن هويتكم المرئية الخارجية تبدو طبية بشكل مفرط مما يفقدكم التميز.\n\nنحن نعمل بشكل مختلف—لا احتكار شهري. نقوم بتسليم أصول نمو ثابتة النطاق عبر بوابات دفع كريبتو حصرية. لقد قمت بشرح كيف أن الترقية الشاملة للهوية وتجهيز الإعلانات ستقنص المرضى الذين يتجهون لعيادات أخرى بناءً على الانطباع البصري فقط.\n\nشاهد التحليل القصير هنا: [رابط الفيديو]\n\nأخبرني برأيك."
  },
  {
    company: "26 North Yachts",
    englishMessage: "Subject: Brand authority gap in your yacht brokerage funnel\n\nHi [Name],\n\nI recorded a quick, custom video detailing a significant leak I found in your digital strategy. Your yacht inventory is world-class, but the brand authority assets for your brokers are severely under-represented.\n\nAt Optiline, we bypass messy retainer models and deliver strict, fixed-scope asset bundles via secure crypto-payments. I mapped out exactly how setting up dedicated social templates, ready-content, and targeted ad funnels can isolate you from standard brokerages immediately.\n\nWatch it here: [Video Link]\n\nReply and let me know if taking ownership of these assets aligns with your targets.",
    arabicTranslation: "الموضوع: فجوة السلطة المرئية في قمع وساطة اليخوت الخاص بكم\n\nمرحباً [الاسم]،\n\nسجلت فيديو مخصص وسريع يفصل مشكلة ضخمة في استراتيجيتكم. يخوتكم عالمية، لكن أصول الهوية الشخصية لوكلائكم غائبة.\n\nفي أوبتيلاين، لا نعمل بنظام الاحتكار الشهري المعقد، بل نسلم حزم أصول ثابتة ومدفوعة بالعملات الرقمية المشفرة. قمت بشرح كيف سيفصلكم بناء قوالب ومحتوى جاهز وإعداد قمع إعلاني عن الوكالات العادية فوراً.\n\nشاهده هنا: [رابط الفيديو]\n\nأخبرني إذا كان امتلاك هذه المنظومة يتوافق مع أهدافك."
  },
  {
    company: "Rene Dekker Design",
    englishMessage: "Subject: Digital silence costing you London lifestyle projects\n\nHi [Name],\n\nI put together a private video breakdown of Rene Dekker’s digital brand. Your interior design execution is stunning, but your current strategy functions like a silent museum—relying entirely on passive discovery.\n\nWe provide straightforward execution—zero retainers, 100% decentralized payments. I’ve outlined exactly how delivering foundational brand guidelines, highly strategic posts, and professional ad setup can actively capture high-end property developers before they even ask for bids.\n\nHere’s the private breakdown: [Video Link]\n\nLet me know how this looks to you.",
    arabicTranslation: "الموضوع: الصمت الرقمي يكلفك مشاريع نمط الحياة الفاخرة في لندن\n\nمرحباً [الاسم]،\n\nأعددت تحليل فيديو خاص. تصاميمكم مذهلة، لكن استراتيجتكم الحالية كالمتحف الصامت—تعتمد على الاكتشاف البطيء.\n\nنحن نقدم تنفيذاً مباشراً—صفر عقود شهرية ودفع لا مركزي %100. قمت بشرح كيف سيفيدكم تسليم قواعد هوية بصرية أساسية ومنشورات استراتيجية وضبط إعلاني محترف في استقطاب المطورين العقاريين قبل منافسيكم.\n\nإليك التحليل: [رابط الفيديو]\n\nأخبرني كيف يبدو هذا لك."
  },
  {
    company: "Stratos Jet Charters",
    englishMessage: "Subject: Missing growth ecosystem for exclusive members\n\nHi [Name],\n\nI analyzed your digital footprint and recorded a custom video regarding a crucial visual error. Your private aviation service is exceptional, but your brand assets and ad setup mirror a standard booking agency.\n\nOptiline specializes in fixed-scope delivery rather than ongoing agency relationships, running on an agile crypto-invoicing system. I break down exactly how handing your team 30 elite conversion assets and robust ad scale configurations will put you directly in front of corporate decision-makers.\n\nWatch the private video here: [Video Link]\n\nLooking forward to your thoughts.",
    arabicTranslation: "الموضوع: غياب منصة نمو للأعضاء الحصريين\n\nمرحباً [الاسم]،\n\nقمت بتحليل بصمتكم وسجلت فيديو بخصوص خطأ بصري حساس. طيرانكم الطائر متميز، لكن أصول علامتكم وإعدادكم للإعلانات يبدو كوكالة عادية.\n\nتختص وكالتنا بالتسليم الثابت للأصول بدلاً من العقود الشهرية بمرونة التعامل الرقمي المشفر. أشرح كيف أن تسليم فريقكم 30 أصل محتوى احترافي وإعداد إعداد إعلانات متقدم سيضعكم أمام صناع القرار مباشرة.\n\nشاهد الفيديو هنا: [رابط الفيديو]\n\nأتطلع لأفكارك."
  },
  {
    company: "Dege & Skinner",
    englishMessage: "Subject: Capturing the next generation of UHNW clients\n\nHi [Name],\n\nYour Savile Row heritage is legendary, but I recorded a private video detailing why your current digital asset library is vulnerable to modern brands actively stealing the next generation of clients.\n\nWe don't do complex retainers. We deliver fixed-cost aesthetic upgrades and ad campaigns using a strict crypto-payment protocol for privacy and speed. I outlined a strategy providing a fresh brand system, 12 crafted aesthetic posts, and dual-campaign setups to capture young business leaders seamlessly.\n\nWatch my breakdown here: [Video Link]\n\nLet me know your thoughts after reviewing it.",
    arabicTranslation: "الموضوع: الاستحواذ على الجيل القادم من كبار الأثرياء\n\nمرحباً [الاسم]،\n\nإرثكم أسطوري، لكني سجلت فيديو حول سبب انكشاف مكتبة أصولكم الرقمية الحالية أمام ماركات عصرية تسرق عملائكم المحتملين.\n\nنحن لا نقدم عقود احتكارية. نسلم تحديثات فنية وحملات إعلانية بمقدار ثابت مستخدمين بروتوكول دفع مشفر للسرعة. وضحت استراتيجية لاعتماد نظام هوية متجدد و12 منشور فني معد مسبقاً وتجهيز حملات مزدوجة لقنص القيادات الشابة.\n\nشاهده هنا: [رابط الفيديو]"
  },
  {
    company: "Handel Group",
    englishMessage: "Subject: Fixing content bottlenecks in executive coaching\n\nHi [Name],\n\nI made a brief, private video breakdown of your current branding setup. Your consulting expertise is undisputed, but your external brand leans heavily on massive text blocks and average templates, drastically extending your sales cycle.\n\nWe provide rapid execution without retainers, transacted securely via crypto networks. I showed specifically how injecting a fully realized brand ecosystem, 5 high-end video scripts, and a precision ad scale roadmap will position your partners as absolute, undeniable authorities instantly.\n\nSee the custom breakdown here: [Video Link]\n\nReply directly here if executing this system appeals to your current goals.",
    arabicTranslation: "الموضوع: إصلاح اختناق المحتوى في التدريب التنفيذي\n\nمرحباً [الاسم]،\n\nأعددت تحليلاً موجزاً بالفيديو للتأسيس الحالي لهويتكم. خبرتكم الاستشارية رائدة، لكن علامتكم تثقلها الكتل النصية الضخمة والقوالب العادية مما يطيل دورة المبيعات.\n\nنقدم تنفيذاً فورياً دون عقود عبر شبكات الدفع المشفرة. بيّنت على وجه الخصوص كيف أن حقن نظام علامة تجارية كامل و5 سكريبتات فيديو احترافية وتجهيز خارطة إعلانات دقيقة سيبرز شركائكم كقادة لا يمكن منافستهم.\n\nشاهد التحليل المخصص: [رابط الفيديو]"
  }
];

const sprintPlanHtml = `
  <div class="glass-panel p-8 rounded-xl border border-optiline-gold/30 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-2 h-full bg-optiline-gold"></div>
    <div class="mb-8 border-b border-gray-800 pb-6 text-center md:text-right">
      <h2 class="text-3xl font-display font-bold text-optiline-gold mb-4">خريطة طريق الدقائق الـ 180 (The 3-Hour Sprint)</h2>
      <p class="text-gray-300 leading-relaxed font-arabic text-lg">بصفتي مخرج محتوى، يمكنني تأكيد أن إنتاج 6 فيديوهات عالية الجودة لعملاء الـ High-Ticket في 3 ساعات (180 دقيقة) هو أمر ممكن تماماً بأسلوب "خط التجميع". ركز على عرض قيمة باقاتك: تسليم أصول رقمية بلا احتكار والدفع عبر الكريبتو.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 dir-rtl text-right">
      
      <!-- Tolls -->
      <div class="bg-black/50 p-6 rounded-lg border border-optiline-border md:col-span-2">
        <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <i data-lucide="wrench" class="text-optiline-gold w-5 h-5"></i>
          الأدوات وخطة التنفيذ (أدوات مجانية):
        </h3>
        <ul class="space-y-3 text-gray-300 font-arabic grid grid-cols-1 md:grid-cols-2 gap-4">
          <li class="bg-optiline-gray p-3 rounded border border-gray-800"><span class="text-optiline-gold font-bold">1. مصنع الصوت (25 دقيقة):</span> عبر موقع TTSMaker. استخدام الأصوات الجادة واستخراج 6 ملفات MP3.</li>
          <li class="bg-optiline-gray p-3 rounded border border-gray-800"><span class="text-optiline-gold font-bold">2. دليل الأدلة المرئية (45 دقيقة):</span> تصوير فيديو للشاشة (Screenity/OBS) لاستعراض هويتهم المفككة وضعف المحتوى.</li>
          <li class="bg-optiline-gray p-3 rounded border border-gray-800"><span class="text-optiline-gold font-bold">3. الشاشة الختامية (20 دقيقة):</span> صورة من موقع Canva، تحمل اللوغو للوكالة وكلمة (Fixed Scope / Crypto Exclusive).</li>
          <li class="bg-optiline-gray p-3 rounded border border-gray-800"><span class="text-optiline-gold font-bold">4. خط التجميع النهائي (75 دقيقة):</span> دمج الصور بنظام الدفعات (Batch) عبر تطبيق CapCut ووضع كابشن ذهبي.</li>
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
            <p class="text-sm text-gray-300 font-arabic mb-2">ضع الفيديوهات في مجلد، وارفعها على Google Drive أو Vimeo لروابط فاخرة بلا مشتتات.</p>
            <p class="text-base text-optiline-gold font-bold font-arabic leading-relaxed border-t border-optiline-gold/30 pt-3 mt-3">
              نصيحة الحسم: نقطة بيع وكالتك هي (الوضوح المنفذ). العملاء الأثرياء سئموا من الوكالات التي تستنزفهم بآلاف الدولارات شهرياً كـ 'Retainer' للقيام بمهام عادية. بيعك المباشر في هذه الفيديوهات يعتمد على أنك تسلمهم "محرك الجمال البيعي" الخاص بهم مرة واحدة، وبدفع مشفر وسري وسهل جداً عبر محافظ الـ (USDT/BTC). كن واضحاً جداً في هذه النقطة!
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

  // Delegated Copy Event Listener for Performance and Safety
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    
    // Find the closest text container to copy
    const targetElement = btn.closest('.group')?.querySelector('.copy-target');
    if (!targetElement) return;

    navigator.clipboard.writeText(targetElement.innerText);
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="check" class="w-3 h-3 text-green-500"></i> Copied';
    lucide.createIcons();
    
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      lucide.createIcons();
    }, 2000);
  });

  // Render Functions
  function renderAudit() {
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">';
    auditData.forEach(item => {
      html += `
        <div class="bg-optiline-gray border border-optiline-border hover:border-optiline-gold/50 transition-colors p-6 rounded-lg flex flex-col group relative">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-english font-semibold text-white tracking-wide" dir="ltr">${item.company}</h3>
            <span class="bg-optiline-gold/10 text-optiline-gold text-xs px-2 py-1 rounded-full font-english font-bold flex-shrink-0 mr-2 text-center h-fit">VIP</span>
          </div>
          <div class="space-y-2 mb-6 text-sm text-gray-400 font-english" dir="ltr">
            <div class="flex items-center gap-2">
              <i data-lucide="briefcase" class="w-4 h-4 text-optiline-gold"></i><span>${item.niche}</span>
            </div>
            <div class="flex items-center gap-2">
              <i data-lucide="map-pin" class="w-4 h-4 text-optiline-gold"></i><span>${item.location}</span>
            </div>
            <div class="flex items-center gap-2">
              <i data-lucide="globe" class="w-4 h-4 text-optiline-gold"></i>
              <a href="https://${item.url}" target="_blank" class="hover:text-optiline-gold underline decoration-gray-700 underline-offset-4 pointer-events-auto">${item.url}</a>
            </div>
          </div>
          <div class="space-y-4 text-right flex-1 copy-target">
            <div>
              <h4 class="text-optiline-gold text-sm font-bold mb-1">نقاط الضعف (البراند، المحتوى، الإعلانات)</h4>
              <p class="text-gray-300 text-sm leading-relaxed">${item.flaw}</p>
            </div>
            <div>
              <h4 class="text-optiline-gold text-sm font-bold mb-1">باقة الحل الدقيق للتسليم</h4>
              <p class="text-white text-sm leading-relaxed font-bold bg-black/50 p-2 border-r-2 border-optiline-gold">${item.solution}</p>
            </div>
            <div class="mt-auto pt-4 border-t border-gray-800">
              <h4 class="text-green-500 text-sm font-bold mb-1">المنفعة الكبرى والـ (Crypto ROI)</h4>
              <p class="text-gray-400 text-sm leading-relaxed">${item.roi}</p>
            </div>
          </div>
          <button class="absolute -top-3 -right-3 text-xs font-english text-gray-400 hover:text-optiline-gold bg-black px-2 py-1 rounded transition flex items-center gap-1 copy-btn border border-gray-700 opacity-0 group-hover:opacity-100 shadow-lg">
            <i data-lucide="copy" class="w-3 h-3"></i> Copy Audit
          </button>
        </div>
      `;
    });
    html += '</div>';
    contentArea.innerHTML = html;
    lucide.createIcons();
  }

  function renderScripts() {
    let html = `
      <div class="bg-optiline-gray border border-optiline-gold/30 text-gray-300 p-4 rounded-lg flex items-center gap-3 font-english text-sm max-w-4xl mb-8 fade-in mx-auto" dir="ltr">
        <div class="w-2 h-2 rounded-full bg-optiline-gold animate-pulse"></div>
        <strong>CRITICAL ANGLE:</strong> Texts explicitly state "No retainers", "Fixed-scope asset handover", "Brand/Content/Ad Setup", and mention exact package scope (e.g. 21 days, 30 assets).
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in" dir="ltr">
    `;
    scriptsData.forEach(item => {
      html += `
        <div class="bg-[#111111] border border-optiline-border p-8 rounded-lg relative overflow-hidden group">
          <div class="absolute top-0 left-0 w-1 h-full bg-optiline-gold/30 group-hover:bg-optiline-gold transition-colors"></div>
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-display font-bold text-white flex items-center gap-2">
              ${item.company}
              <span class="text-xs font-english text-gray-500 bg-black px-2 py-1 rounded border border-gray-800 tracking-wider">1:20s Target</span>
            </h3>
            <button class="text-xs font-english text-gray-400 hover:text-optiline-gold bg-optiline-gray hover:bg-black px-3 py-1.5 rounded transition flex items-center gap-2 copy-btn border border-gray-700">
              <i data-lucide="copy" class="w-3 h-3"></i> Copy Script
            </button>
          </div>
          <div class="font-english text-sm text-gray-300 leading-[1.9] whitespace-pre-wrap focus:outline-none p-5 bg-black/40 rounded border border-gray-800/50 shadow-inner copy-target">${item.script}</div>
        </div>
      `;
    });
    html += '</div>';
    contentArea.innerHTML = html;
    lucide.createIcons();
  }

  function renderVisuals() {
    let html = '<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in">';
    visualGuidesData.forEach(item => {
      html += `
        <div class="bg-optiline-gray border border-optiline-border rounded-lg overflow-hidden flex flex-col group relative">
          <button class="absolute top-3 left-20 z-10 text-[10px] font-english text-gray-400 hover:text-optiline-gold bg-black px-2 py-1 rounded transition flex items-center gap-1 copy-btn border border-gray-700 opacity-0 group-hover:opacity-100 hidden md:flex" dir="ltr">
            <i data-lucide="copy" class="w-3 h-3"></i>
          </button>
          <div class="bg-black p-4 border-b border-optiline-border flex justify-between items-center" dir="ltr">
            <h3 class="font-display font-bold text-lg text-white">${item.company}</h3>
            <div class="flex gap-2">
               <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
               <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
               <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
          </div>
          <div class="p-6 space-y-5 flex-1 copy-target">
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
    lucide.createIcons();
  }

  function renderSprint() {
    const wrapper = document.createElement('div');
    wrapper.className = 'fade-in';
    wrapper.innerHTML = sprintPlanHtml;
    contentArea.innerHTML = '';
    contentArea.appendChild(wrapper);
    lucide.createIcons();
  }

  function renderOutreach() {
    let html = `
      <div class="bg-optiline-dark/80 border border-optiline-border text-gray-300 p-6 rounded-lg text-center font-arabic mb-8 fade-in mx-auto w-full max-w-4xl relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        <h3 class="text-optiline-gold font-display font-bold text-2xl mb-4 relative z-10" dir="ltr"><i data-lucide="mail-check" class="inline-block w-6 h-6 mr-2 mb-1"></i> Executive Direct Messaging</h3>
        <p class="leading-relaxed relative z-10 text-sm">تم ضبط هذه الرسائل لتعكس قيم (الدفع بالعملات الرقمية، رفض عقود الاحتكار، التسليم الثابت للأصول). وهي مخصصة لإرسالها عبر <span class="text-white font-bold px-1">Email</span> أو <span class="text-white font-bold px-1">LinkedIn</span> لترفق معها روابط الفيديوهات المخصصة.</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in">
    `;
    outreachData.forEach(item => {
      html += `
        <div class="bg-[#111111] border border-optiline-border hover:border-optiline-gold/40 transition-colors p-6 rounded-lg relative group flex flex-col shadow-xl">
          <div class="flex justify-between items-center mb-6 border-b border-gray-800 pb-4" dir="ltr">
            <h3 class="font-display font-bold text-lg text-white truncate pr-4">${item.company}</h3>
            <button class="flex-shrink-0 text-xs font-english text-gray-400 hover:text-optiline-gold bg-optiline-gray hover:bg-black px-3 py-1.5 rounded transition flex items-center gap-2 copy-btn border border-gray-700 shadow-sm">
              <i data-lucide="copy" class="w-3 h-3"></i> Copy MSG
            </button>
          </div>
          
          <div class="mb-6 flex-1">
            <span class="text-xs text-optiline-gold uppercase tracking-widest font-english mb-3 block opacity-80">Pitch Copy (English)</span>
            <div class="font-english text-sm text-gray-200 leading-[1.8] whitespace-pre-wrap bg-black/60 p-5 rounded border border-gray-800/80 copy-target" dir="ltr">${item.englishMessage}</div>
          </div>
          
          <div class="mt-auto pt-4 border-t border-gray-800/50">
            <span class="text-[10px] text-gray-500 uppercase tracking-widest font-english mb-2 block text-right pr-2">Arabic Explanation</span>
            <div class="font-arabic text-xs text-gray-500 leading-relaxed whitespace-pre-wrap bg-optiline-dark/50 p-3 rounded border border-gray-800/30 text-right">${item.arabicTranslation}</div>
          </div>
        </div>
      `;
    });
    html += '</div>';
    contentArea.innerHTML = html;
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
      if(target === 'outreach') renderOutreach();
    });
  });

  // Initial Render
  renderAudit();
});
