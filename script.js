const auditData = [
  {
    company: "Waterhouse Young Clinic",
    url: "waterhouseyoung.com",
    niche: "عيادة تجميل طبية فائقة الفخامة",
    location: "لندن، المملكة المتحدة",
    flaw: "التحليل البصري الدقيق: العيادة فاخرة جداً، لكن الهوية الرقمية متناثرة. خطوط وألوان السوشيال ميديا لا تتطابق مع فخامة العيادة (Brand Identity Gap). المحتوى يعتمد على صور جافة ولا يوجد رزنامة محتوى استراتيجية (Content Strategy). إعدادات الإعلانات لديهم تفتقر للهيكلة الصحيحة لاستهداف طبقة الأثرياء.",
    solution: "حزمة MATRIX ($1,799): تسليم نظام كامل في 21 يوم. يشمل: بناء هوية بصرية متكاملة (12 لون و6 خطوط)، 30 أصل محتوى (25 تصميم احترافي + 5 سكريبتات فيديوهات)، مع تجهيز متقدم لحملات إعلانية مزدوجة مع التتبع (Purchase Tracking). تصميم لمرة واحدة بدون عقود احتكارية (No Retainers).",
    roi: "نظام تسليم أصول جاهزة بنسبة 100% بنطاق عمل ثابت (Fixed-Scope). بمجرد استلام أصول الـ MATRIX الجاهزة، ستتحول واجهتكم الرقمية إلى صالة عرض فاخرة تغلق الصفقات الكبيرة ذاتياً، مما يعفيكم تماماً من رسوم الوكالات الإعلانية الإدارية الشهرية الباهظة."
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
    roi: "المدراء يكرهون التعقيد ويبحثون عن التنفيذ القاطع (Just execution). Opti Line تقدم لهم ترسانة الأصول الجاهزة عبر دفعة واحدة حصرية بالعملات الرقمية، لتختصر دورة المبيعات وتبرزهم كقادة للسوق بلا منازع."
  }
];

const scriptsData = [
  {
    company: "Waterhouse Young Clinic",
    script: "Hi Waterhouse Young team. I’ve been closely following your work in London, and while your clinical expertise is undeniably elite, there is a significant misalignment between your actual authority and your current digital footprint. Right now, your brand identity feels fragmented, lacking the cohesive, high-end visual standard that ultra-high-net-worth patients expect when seeking premier aesthetic care. While looking at your presence, I noticed specific areas where your visual ecosystem isn't fully reflecting the prestige of your clinic, which essentially creates a trust gap for your target demographic. At Opti Line, we eliminate this gap with surgical precision. We don't believe in bloated monthly retainers or endless management fees; instead, we engineer a complete, premium visual infrastructure and conversion-focused content designed to speak directly to an affluent audience. We provide a definitive, fixed-scope solution that deploys a flawless ad framework and a unified identity in a matter of days, ensuring your digital perception finally matches your real-world excellence. Stop letting inferior clinics win the market share simply because they have a more polished digital appearance. Your expertise is your greatest asset, and it deserves a digital presence that commands authority. Are you open to a brief conversation this week to see the exact roadmap we’ve mapped out for Waterhouse Young to become the undeniable market leader?",
    arabicTranslation: "مرحباً فريق ووترهاوس يونغ. لقد كنت أتابع عملكم في لندن عن كثب، وبينما خبرتكم السريرية لا يعلى عليها، هناك سوء توافق كبير بين سلطتكم الحقيقية وبصمتكم الرقمية الحالية. في الوقت الحالي، تبدو هوية علامتكم التجارية متجزئة، وتفتقر إلى المعيار المرئي الفاخر والمتماسك الذي يتوقعه المرضى من ذوي الملاءة المالية العالية عند البحث عن رعاية تجميلية متميزة. أثناء اطلاعي على حضوركم، لاحظت مناطق محددة لا يعكس فيها نظامكم المرئي مكانة عيادتكم بشكل كامل، مما يخلق فجوة ثقة لدى جمهوركم المستهدف. في Opti Line، نقضي على هذه الفجوة بدقة جراحية. نحن لا نؤمن بالعقود الشهرية المرهقة أو رسوم الإدارة اللانهائية؛ بدلاً من ذلك، نصمم بنية تحتية مرئية متميزة ومحتوى يركز على التحويل مصمم لمخاطبة جمهور ثري بشكل مباشر. نحن نقدم حلاً نهائياً ثابتاً ينشر إطار عمل إعلاني لا تشوبه شائبة وهوية موحدة في غضون أيام، مما يضمن أن تصوركم الرقمي يتناسب أخيراً مع تميزكم في العالم الحقيقي. توقفوا عن ترك العيادات الأقل مستوى تفوز بحصة السوق لمجرد أنها تمتلك مظهراً رقمياً أكثر صقلاً. خبرتكم هي أعظم أصولكم، وتستحق حضوراً رقمياً يفرض سلطته. هل أنتم مستعدون لمحادثة قصيرة هذا الأسبوع للاطلاع على خارطة الطريق الدقيقة التي أعددناها لـ ووترهاوس يونغ لتصبح الرائدة في السوق بلا منازع؟"
  },
  {
    company: "26 North Yachts",
    script: "Hello 26 North Yachts. Reviewing your digital strategy reveals a massive missed opportunity. The multi-million dollar vessels you broker are flawless, but your brand ecosystem is actively working against you. The inconsistency in your visual templates and the absence of a highly structured retargeting pipeline means you are losing warm leads by the minute. At Opti Line, we engineer high-impact solutions without trapping you in endless retainers. We deliver a world-class, fixed-scope growth engine: a completely unified brand identity, targeted content assets, and advanced dual-campaign ad setups designed specifically to acquire and retarget high-net-worth buyers. Take full ownership of a marketing infrastructure that matches the caliber of your fleet. Reply directly to see how we can dominate your market.",
    arabicTranslation: "مرحباً 26 نورث لليخوت. تكشف مراجعة استراتيجيتكم الرقمية عن فرصة ضخمة ضائعة. اليخوت بملايين الدولارات التي تسوقونها خالية من العيوب، لكن نظام علامتكم التجارية يعمل ضدكم بوضوح. التناقض في قوالبكم المرئية وغياب مسار إعادة استهداف مهيكل بدقة يعني أنكم تفقدون عملاء محتملين دافئين في كل دقيقة. في Opti Line، نحن نصمم حلولاً عالية التأثير دون احتجازكم في عقود شهرية لا تنتهي. نحن نقدم محرك نمو عالمي بنطاق ثابت: هوية بصرية موحدة بالكامل، وأصول محتوى موجهة، وإعداد حملات إعلانية مزدوجة متطورة مصممة خصيصاً للاستحواذ على المشترين من كبار الأثرياء وإعادة استهدافهم. امتلكوا بنية تحتية تسويقية تناسب مستوى أسطولكم. الرد المباشر سيوضح لكم كيف يمكننا السيطرة على سوقكم."
  },
  {
    company: "Rene Dekker Design",
    script: "Hi Rene Dekker Design team. Your interior architecture portfolio is breathtaking, but your digital strategy operates like a silent gallery. Currently, relying purely on passive discovery is costing you exclusive contracts. You lack the unified brand guidelines and aggressive, targeted content strategies needed to secure elite property developers before your competitors do. Opti Line provides a definitive intervention. Our fixed-scope model abandons the outdated retainer process. Instead, we architect a complete digital foundation for you within days: premium brand unification, highly persuasive visual assets, and a razor-sharp ad setup designed to proactively capture high-end accounts. It's time to transform your remarkable talent into a predictable growth machine. Reply to this message to review your targeted implementation plan.",
    arabicTranslation: "فريق رينيه ديكر ديزاين. معرض أعمالكم للتصميم الداخلي يخطف الأنفاس، لكن استراتيجيتكم الرقمية تعمل كمعرض صامت. الاعتماد حالياً وبشكل بحت على الاكتشاف السلبي يكلفكم عقوداً حصرية. أنتم تفتقرون إلى أدلة الهوية الموحدة واستراتيجيات المحتوى الهجومية والموجهة واللازمة لتأمين كبار المطورين العقاريين قبل منافسيكم. تقدم مؤسسة Opti Line تدخلاً حاسماً. نموذج عملنا ثابت النطاق يتخلى عن عملية العقود الشهرية القديمة. بدلاً من ذلك، نؤسس لكم بنية رقمية متكاملة في غضون أيام: توحيد فاخر للعلامة، أصول مرئية مقنعة جداً، وإعداد إعلاني شديد الدقة مصمم للاستحواذ الاستباقي على الحسابات الكبرى. حان الوقت لتحويل موهبتكم الاستثنائية إلى آلة نمو يمكن التنبؤ بها. الرد على هذه الرسالة سيتيح لكم مراجعة خطة التنفيذ المخصصة لكم."
  },
  {
    company: "Stratos Jet Charters",
    script: "Hi Stratos Jet Charters. While analyzing your brand online, a structural weakness stood out. You provide profound luxury in aviation, but your current visual branding and ad deployment look distinctly average, failing to convey true exclusivity. Without advanced audience segmentation and persuasive, high-end narratives, your marketing spend is bleeding out on unqualified leads. Opti Line directly solves this inefficiency. We reject standard agency retainers to bring you a fixed-scope, elite execution model. In one rapid deployment, we upgrade your visual identity, hand over 30 conversion-optimized assets including high-impact video scripts, and build an advanced ad infrastructure meant only for targeting high-level corporate executives. Secure your position as the undisputed premier choice in private aviation. Let’s discuss the immediate execution.",
    arabicTranslation: "مرحباً ستراتوس لتأجير الطائرات. أثناء تحليل علامتكم، برز ضعف هيكلي. أنتم تقدمون رفاهية عميقة بالطيران، لكن هويتكم البصرية الحالية ونشر إعلاناتكم تبدو عادية جداً، وتفشل في إيصال التفرد الحقيقي. بدون تقسيم متقدم للجمهور وروايات مقنعة وعالية المستوى، فإن إنفاقكم التسويقي ينزف على عملاء غير مؤهلين. خدمة Opti Line تحل هذا الخلل. نحن نرفض العقود الشهرية للوكالات لنقدم نموذج تنفيذ نخبوي ثابت النطاق. نقوم بترقية هويتكم البصرية، وتسليم 30 أصل محتوى محسّن للتحويل تشمل سكريبتات فيديوهات فائقة التأثير، ونبني بنية إعلانية متقدمة مخصصة لاستهداف كبار المدراء التنفيذيين. عززوا مكانتكم كخيار أول في الطيران الخاص. دعونا نناقش التنفيذ الفوري."
  },
  {
    company: "Dege & Skinner",
    script: "Hello Dege & Skinner. Your bespoke legacy on Savile Row is unmatched, yet your digital ecosystem is critically disconnected from the modern wealth demographic. Today’s high-net-worth clients move fast, and your current aesthetic execution and lack of precise ad targeting systems are causing you to lose them to newer, louder competitors. Opti Line bridges this hazardous gap. We ignore messy retainers and deliver absolute, fixed-scope results. We will meticulously modernize your visual brand to respect your heritage while aggressively capturing the young elite. We hand you a suite of flawless aesthetic templates, modern pacing strategies, and dual-campaign ad funnels. Secure the next generation of legacy clients by owning a digital engine as refined as your tailoring. Reply to explore your custom roadmap.",
    arabicTranslation: "مرحباً ديغ وسكينر. إرثكم المخصص في شارع سافيل رو لا يُضاهى، ومع ذلك نظامكم الرقمي منفصل عن شكل الثروات الحديث. عملاء اليوم من كبار الأثرياء يتحركون بسرعة، والتنفيذ الجمالي الحالي وغياب أنظمة الاستهداف الإعلاني يتسببان في فقدانكم لهم لمنافسين أحدث. مؤسسة Opti Line تسد هذه الفجوة. نحن نتجاهل العقود الشهرية ونقدم نتائج ثابتة. سنقوم بتحديث هويتكم البصرية باحترام لإرثكم بينما نستحوذ بشراسة على النخبة الشابة. سنسلمكم قوالب جمالية خالية من العيوب، واستراتيجيات أداء عصرية، ومسارات إعلانية مزدوجة. اضمنوا الجيل القادم من العملاء بامتلاككم لمحرك رقمي يعكس فخامة خياطتكم. الرد على هذه الرسالة سيتيح لكم استكشاف خارطة الأعمال."
  },
  {
    company: "Handel Group",
    script: "Hi Handel Group. Your executive consulting is top-tier, but a quick audit of your digital presence reveals a severe conversion bottleneck. Your brand is suffocating under overwhelming blocks of text and uninspired visual design, alienating busy CEOs who demand instant, high-level clarity. Without razor-sharp video narratives and a hyper-targeted B2B ad scaling roadmap, your sales cycles are far longer than they should be. Opti Line delivers aggressive clarity. No retainers, just a complete, rapid execution. We will overhaul your entire brand identity, develop high-level video scripts designed to command authority, and structure an elite ad strategy. We transform your digital presence from a tedious read into a decisive, authoritative experience. Reply directly to see how this transition will instantly accelerate your firm.",
    arabicTranslation: "مرحباً مجموعة هاندل. استشاراتكم التنفيذية من الطراز الأول، لكن التدقيق في حضوركم الرقمي يكشف عن اختناق في التحويل. علامتكم تختنق تحت كتل نصية هائلة وتصميم يفتقر للإلهام، مما ينفر الرؤساء التنفيذيين المشغولين الذين يطلبون وضوحاً فورياً. بدون سكريبتات فيديوهات قاطعة وخارطة لتوسيع الإعلانات موجهة للشركات بدقة، فإن دورات مبيعاتكم ستظل أطول مما ينبغي. خدمة Opti Line تقدم وضوحاً هجومياً. لا عقود شهرية، بل تنفيذ سريع. سنقوم بتجديد هويتكم، ونطور سكريبتات فيديو رفيعة المستوى مصممة لفرض الهيمنة، ونهيكل استراتيجية إعلانية نخبوية. نحن نحول حضوركم الرقمي من قراءة مملة إلى تجربة حاسمة. الرد المباشر سيوضح لكم كيف سيسرع هذا من أداء شركتكم."
  }
];

const visualGuidesData = [
  {
    company: "Waterhouse Young Clinic",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "تصفح حساب العيادة على انستغرام أو الموقع. مرر الفأرة على الألوان والخطوط غير المتناسقة. استخدم أداة رسم دائرة لتبين غياب (Brand Guidelines) الواضحة التي تعتبر أساسية لأي ماركة فاخرة." },
      { time: "[0:15 - 0:35]", instruction: "ادخل إلى مكتبة الإعلانات أو أرشيف الصور، وأشر إلى الكتل النصية والألوان البسيطة. اذكر أن وكالة Opti Line تقدم باقة MATRIX لتبني (Content Strategy) حقيقية وإعداد احترافي للإعلانات." },
      { time: "[0:35 - 1:05]", instruction: "انتقال إلى صفحة أسعار وكالة Opti Line (أو قسم باقة MATRIX). أبرز بوضوح ميزات: 30 أصول محتوى، إعداد إعلانات متقدم، ونظام التسليم الثابت (Fixed-Scope) بدون احتكار شهري." },
      { time: "[1:05 - 1:20]", instruction: "شاشة ختامية احترافية باسم Opti Line تظهر عبارة (Fixed-Scope Execution) وتدعوهم للرد المباشر لطلب خارطة الطريق." }
    ]
  },
  {
    company: "26 North Yachts",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "ابدأ بتسجيل حسابات السوشيال لدى وساطة اليخوت. سلط الضوء على التصميم العشوائي للمنشورات بمرور الماوس السريع، للإشارة لغياب قوالب الهوية المؤسسية (Social Templates)." },
      { time: "[0:15 - 0:35]", instruction: "أثناء الحديث عن غياب إعدادات الإعلانات، قم بمحاكاة كود البيكسل المفقود أو عدم وجود إعلانات نشطة في مكتبة فيسبوك توحي بغياب استراتيجية إعادة الاستهداف (Retargeting)." },
      { time: "[0:35 - 1:05]", instruction: "انتقال مباشر لعرض جدول أسعار Opti Line، والتركيز على حزمة (NEXUS Pack $1,399). الإشارة بالماوس إلى تسليم 12 منشور وإعداد الإعلانات المزدوجة." },
      { time: "[1:05 - 1:20]", instruction: "الشاشة السوداء الختامية. رسالة تحث على الرد لبرمجة جلسة أو استلام الأصول عبر بوابات الـ Crypto." }
    ]
  },
  {
    company: "Rene Dekker Design",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "استعرض صور مشاريع التصميم. التناقض: صور بملايين الجنيهات، لكن منشورة بنصوص (Captions) قصيرة وفقيرة بلا (Tone of Voice) أو دعوات اتخاذ إجراء (CTAs)." },
      { time: "[0:15 - 0:35]", instruction: "استخدم مؤشر الماوس لتوضيح أن الموقع لا يبدو مهيئاً بحملات إعلانية احترافية، وأنهم يعتمدون فقط على الانتظار (Passive Discovery)." },
      { time: "[0:35 - 1:05]", instruction: "انتقال وعرض باقة (CORE Pack $799). إبراز التسليم السريع (7-10 Days)، وأن النظام مبني على تسليم أصول الهوية بالكامل بدون أي تعقيدات وبدفع رقمي لا محدود." },
      { time: "[1:05 - 1:20]", instruction: "ثبات الشاشة على شعار وكالة Opti Line ودعوة حصرية للاستفادة من الباقة التأسيسية." }
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
      { time: "[1:05 - 1:20]", instruction: "شاشة ختامية لـ Opti Line، نص صريح بتشجيعهم على اعتماد النقلة الرقمية بشكل مشفر وحديث." }
    ]
  },
  {
    company: "Handel Group",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "استعرض موقع الشركة وملفهم في LinkedIn. الإشارة بقوة وبطء إلى بحر النصوص الطويلة المملة (Huge text blocks) التي لا يملك أي CEO وقتاً لقراءتها." },
      { time: "[0:15 - 0:35]", instruction: "تظليل جزء 'الفيديو والتصميم' الغائب. أشر إلى الحاجة الملحة لوجود (Brand Guidelines) تمنع هذا التشتت المرئي، وتجهيز الإعلانات لاستهداف الأعمال B2B." },
      { time: "[0:35 - 1:05]", instruction: "قص سريع (Jump Cut) لعرض باقة الـ MATRIX من Opti Line. التركيز على ميزة السكريبتات الجاهزة (5 Video Scripts) لبناء قيادة فكرية مقنعة." },
      { time: "[1:05 - 1:20]", instruction: "شاشة الاستقرار السوداء النهائية لوكالتك، مع تثبيت نص (100% Crypto-Exclusive) لتصفية العملاء وتعزيز القيمة الفاخرة." }
    ]
  }
];

const outreachData = [
  {
    company: "Waterhouse Young Clinic",
    englishMessage: "Subject: Missing visual assets for UHNW London patients\n\nHi [Name],\n\nI’ve been closely following Waterhouse Young and recorded a custom video audit of your current digital setup. Your clinical expertise is clearly elite, but there is a significant misalignment with your external brand identity, creating a trust gap for high-net-worth patients.\n\nWe operate differently—no monthly retainers. We deliver a complete, premium visual infrastructure and conversion-focused content designed to speak directly to your target demographic. I broke down exactly how a fixed-scope roadmap can ensure your digital perception matches your real-world excellence.\n\nWatch the 80-second breakdown here: [Video Link]\n\nAre you open to a brief conversation this week to see the exact roadmap we’ve mapped out for you?",
    arabicTranslation: "الموضوع: غياب الأصول المرئية لمرضى لندن من كبار الأثرياء\n\nمرحباً [الاسم]،\n\nلقد كنت أتابع ووترهاوس يونغ عن كثب وسجلت فيديو مخصصاً لمراجعة إعدادكم الرقمي الحالي. خبرتكم السريرية نخبوية، ولكن هناك سوء توافق في هويتكم الخارجية يخلق فجوة ثقة لدى المرضى من ذوي الملاءة المالية العالية.\n\nنحن نعمل بشكل مختلف—لا عقود شهرية. نحن نسلم بنية تحتية مرئية متميزة ومحتوى يركز على التحويل مصمم لمخاطبة جمهوركم المستهدف. لقد وضحت كيف يمكن لخارطة طريق ثابتة النطاق أن تضمن تطابق تصوركم الرقمي مع تميزكم الحقيقي.\n\nشاهد التحليل لمدة 80 ثانية هنا: [رابط الفيديو]\n\nهل أنتم مستعدون لمحادثة قصيرة هذا الأسبوع للاطلاع على خارطة الطريق التي رسمناها لكم؟"
  },
  {
    company: "26 North Yachts",
    englishMessage: "Subject: Brand authority gap in your yacht brokerage funnel\n\nHi [Name],\n\nI recorded a quick, custom video detailing a significant leak I found in your digital strategy. Your yacht inventory is world-class, but the brand authority assets for your brokers are severely under-represented.\n\nAt Opti Line, we bypass messy retainer models and deliver strict, fixed-scope asset bundles via secure crypto-payments. I mapped out exactly how setting up dedicated social templates, ready-content, and targeted ad funnels can isolate you from standard brokerages immediately.\n\nWatch it here: [Video Link]\n\nReply and let me know if taking ownership of these assets aligns with your targets.",
    arabicTranslation: "الموضوع: فجوة السلطة المرئية في قمع وساطة اليخوت الخاص بكم\n\nمرحباً [الاسم]،\n\nسجلت فيديو مخصص وسريع يفصل مشكلة ضخمة في استراتيجيتكم. يخوتكم عالمية، لكن أصول الهوية الشخصية لوكلائكم غائبة.\n\nفي أوبتيلاين، لا نعمل بنظام الاحتكار الشهري المعقد، بل نسلم حزم أصول ثابتة ومدفوعة بالعملات الرقمية المشفرة. قمت بشرح كيف سيفصلكم بناء قوالب ومحتوى جاهز وإعداد قمع إعلاني عن الوكالات العادية فوراً.\n\nشاهده هنا: [رابط الفيديو]\n\nأخبرني إذا كان امتلاك هذه المنظومة يتوافق مع أهدافك."
  },
  {
    company: "Rene Dekker Design",
    englishMessage: "Subject: Digital silence costing you London lifestyle projects\n\nHi [Name],\n\nI put together a private video breakdown of Rene Dekker’s digital brand. Your interior design execution is stunning, but your current strategy functions like a silent museum—relying entirely on passive discovery.\n\nWe provide straightforward execution—zero retainers, 100% decentralized payments. I’ve outlined exactly how delivering foundational brand guidelines, highly strategic posts, and professional ad setup can actively capture high-end property developers before they even ask for bids.\n\nHere’s the private breakdown: [Video Link]\n\nLet me know how this looks to you.",
    arabicTranslation: "الموضوع: الصمت الرقمي يكلفك مشاريع نمط الحياة الفاخرة في لندن\n\nمرحباً [الاسم]،\n\nأعددت تحليل فيديو خاص. تصاميمكم مذهلة، لكن استراتيجتكم الحالية كالمتحف الصامت—تعتمد على الاكتشاف البطيء.\n\nنحن نقدم تنفيذاً مباشراً—صفر عقود شهرية ودفع لا مركزي %100. قمت بشرح كيف سيفيدكم تسليم قواعد هوية بصرية أساسية ومنشورات استراتيجية وضبط إعلاني محترف في استقطاب المطورين العقاريين قبل منافسيكم.\n\nإليك التحليل: [رابط الفيديو]\n\nأخبرني كيف يبدو هذا لك."
  },
  {
    company: "Stratos Jet Charters",
    englishMessage: "Subject: Missing growth ecosystem for exclusive members\n\nHi [Name],\n\nI analyzed your digital footprint and recorded a custom video regarding a crucial visual error. Your private aviation service is exceptional, but your brand assets and ad setup mirror a standard booking agency.\n\nOpti Line specializes in fixed-scope delivery rather than ongoing agency relationships, running on an agile crypto-invoicing system. I break down exactly how handing your team 30 elite conversion assets and robust ad scale configurations will put you directly in front of corporate decision-makers.\n\nWatch the private video here: [Video Link]\n\nLooking forward to your thoughts.",
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
      <p class="text-gray-300 leading-relaxed font-arabic text-lg">بصفتي مخرج محتوى، يمكنني تأكيد أن إنتاج 6 فيديوهات عالية الجودة لعملاء الـ High-Ticket في 3 ساعات (180 دقيقة) هو أمر ممكن تماماً بأسلوب "خط التجميع". ركز على عرض قيمة باقاتك: تسليم أصول رقمية بلا احتكار ونظام التسليم الثابت (Fixed-Scope).</p>
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
          <li class="bg-optiline-gray p-3 rounded border border-gray-800"><span class="text-optiline-gold font-bold">3. الشاشة الختامية (20 دقيقة):</span> صورة من موقع Canva، تحمل اللوغو للوكالة وكلمة (Fixed-Scope Execution / Premium Assets).</li>
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
  
  // State management for DONE tracking
  let doneState = JSON.parse(localStorage.getItem('optiline_done_state')) || {};

  // Delegated Event Listeners
  document.addEventListener('click', (e) => {
    // Done Toggle Handling
    const doneBtn = e.target.closest('.done-toggle');
    if (doneBtn) {
      const company = doneBtn.getAttribute('data-company');
      doneState[company] = !doneState[company];
      localStorage.setItem('optiline_done_state', JSON.stringify(doneState));
      
      const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-target');
      if(activeTab === 'audit') renderAudit();
      if(activeTab === 'scripts') renderScripts();
      if(activeTab === 'visuals') renderVisuals();
      if(activeTab === 'outreach') renderOutreach();
      return;
    }

    // Copy Event Listener
    const copyBtn = e.target.closest('.copy-btn');
    if (copyBtn) {
      const targetElement = copyBtn.closest('.group')?.querySelector('.copy-target');
      if (!targetElement) return;

      navigator.clipboard.writeText(targetElement.innerText);
      const originalHTML = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i data-lucide="check" class="w-3 h-3 text-green-500"></i> <span class="hidden sm:inline text-green-500">Copied</span>';
      lucide.createIcons();
      
      setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        lucide.createIcons();
      }, 2000);
    }
  });

  // Render Functions
  function renderAudit() {
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">';
    auditData.forEach((item, index) => {
      const letter = String.fromCharCode(65 + index); // A, B, C...
      const isDone = doneState[item.company];
      const cardClass = isDone ? 'bg-[#050505] border-gray-800 opacity-50 grayscale blur-[2px] transition-all duration-300 hover:blur-none hover:opacity-100 hover:grayscale-0' : 'bg-optiline-gray border-optiline-border hover:border-optiline-gold/50';
      const letterClass = isDone ? 'bg-gray-900 text-gray-600 border-gray-800' : 'bg-optiline-gold/20 text-optiline-gold border-optiline-gold/30';
      const btnClass = isDone 
        ? 'bg-green-500/10 text-green-500 border-green-500/30' 
        : 'bg-black text-gray-500 border-gray-700 hover:text-white hover:border-gray-500';

      html += `
        <div class="${cardClass} transition-all duration-500 p-6 rounded-lg flex flex-col group relative">
          <div class="flex justify-between items-start mb-5 gap-2">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-8 h-8 rounded ${letterClass} font-display font-bold text-lg border shrink-0">${letter}</span>
              <h3 class="text-xl font-english font-semibold text-white tracking-wide" dir="ltr">${item.company}</h3>
            </div>
            <button class="done-toggle flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold border transition-colors shrink-0 ${btnClass}" data-company="${item.company}">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
              <span class="hidden sm:inline">${isDone ? 'DONE' : 'MARK'}</span>
            </button>
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
              <a href="https://${item.url}" target="_blank" class="hover:text-optiline-gold underline decoration-gray-700 underline-offset-4 pointer-events-auto truncate block max-w-[180px]">${item.url}</a>
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
          <button class="absolute -top-3 -right-3 text-[10px] font-english text-gray-400 hover:text-optiline-gold bg-black px-2 py-1 rounded transition flex items-center gap-1 copy-btn border border-gray-700 opacity-0 group-hover:opacity-100 shadow-lg">
            <i data-lucide="copy" class="w-3 h-3"></i> <span class="hidden sm:inline">Copy Audit</span>
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
      <div class="bg-optiline-gray border border-optiline-gold/30 text-gray-300 p-4 rounded-lg flex items-center gap-3 font-english text-xs md:text-sm max-w-4xl mb-8 fade-in mx-auto" dir="ltr">
        <div class="w-2 h-2 rounded-full bg-optiline-gold animate-pulse shrink-0"></div>
        <strong>CRITICAL ANGLE:</strong> Texts explicitly state "No retainers", "Fixed-scope asset handover", "Brand/Content/Ad Setup", and mention exact package scope.
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in" dir="ltr">
    `;
    scriptsData.forEach((item, index) => {
      const letter = String.fromCharCode(65 + index);
      const isDone = doneState[item.company];
      const cardClass = isDone ? 'bg-[#050505] border-gray-800 opacity-50 grayscale blur-[2px] transition-all duration-300 hover:blur-none hover:opacity-100 hover:grayscale-0' : 'bg-[#111111] border-optiline-border';
      const letterClass = isDone ? 'bg-gray-900 text-gray-600 border-gray-800' : 'bg-optiline-gold/20 text-optiline-gold border-optiline-gold/30';
      const indicatorClass = isDone ? 'bg-gray-800' : 'bg-optiline-gold/30 group-hover:bg-optiline-gold';
      const btnClass = isDone 
        ? 'bg-green-500/10 text-green-500 border-green-500/30' 
        : 'bg-black text-gray-500 border-gray-700 hover:text-white hover:border-gray-500';

      html += `
        <div class="${cardClass} border p-5 md:p-8 rounded-lg relative overflow-hidden group transition-all duration-500">
          <div class="absolute top-0 left-0 w-1 h-full ${indicatorClass} transition-colors"></div>
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 pl-3">
            <h3 class="text-lg md:text-xl font-display font-bold text-white flex items-center gap-3 w-full">
              <span class="flex items-center justify-center w-8 h-8 rounded ${letterClass} border shrink-0">${letter}</span>
              <span class="truncate">${item.company}</span>
              <span class="text-[10px] font-english text-gray-500 bg-black px-2 py-1 rounded border border-gray-800 tracking-wider hidden sm:block">1:20s Target</span>
            </h3>
            <div class="flex gap-2 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
              <button class="done-toggle flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold border transition-colors ${btnClass}" data-company="${item.company}">
                <i data-lucide="check-circle" class="w-3 h-3"></i> <span>${isDone ? 'DONE' : 'MARK'}</span>
              </button>
              <button class="flex-1 sm:flex-none text-[11px] font-english text-gray-400 hover:text-optiline-gold bg-optiline-gray hover:bg-black px-3 py-1.5 rounded transition flex items-center justify-center gap-2 copy-btn border border-gray-700">
                <i data-lucide="copy" class="w-3 h-3"></i> <span>Copy Script</span>
              </button>
            </div>
          </div>
          <div class="font-english text-sm text-gray-300 leading-[1.8] whitespace-pre-wrap focus:outline-none p-4 md:p-5 bg-black/40 rounded border border-gray-800/50 shadow-inner copy-target ml-1">${item.script}</div>
          <div class="font-arabic text-sm text-gray-400 leading-relaxed bg-black/30 p-4 md:p-5 rounded border border-gray-800/50 mt-3 text-right" dir="rtl">${item.arabicTranslation}</div>
        </div>
      `;
    });
    html += '</div>';
    contentArea.innerHTML = html;
    lucide.createIcons();
  }

  function renderVisuals() {
    let html = '<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in">';
    visualGuidesData.forEach((item, index) => {
      const letter = String.fromCharCode(65 + index);
      const isDone = doneState[item.company];
      const cardClass = isDone ? 'bg-[#050505] border-gray-800 opacity-50 grayscale blur-[2px] transition-all duration-300 hover:blur-none hover:opacity-100 hover:grayscale-0' : 'bg-optiline-gray border-optiline-border';
      const headerBorderClass = isDone ? 'border-gray-800' : 'border-optiline-border';
      const letterClass = isDone ? 'bg-gray-900 text-gray-500 border-gray-700' : 'bg-optiline-gold/20 text-optiline-gold border-optiline-gold/30';
      const btnClass = isDone 
        ? 'bg-green-500/10 text-green-500 border-green-500/30' 
        : 'bg-optiline-gray text-gray-400 border-gray-700 hover:text-white hover:border-gray-500';

      html += `
        <div class="${cardClass} border rounded-lg overflow-hidden flex flex-col group relative transition-all duration-500">
          <div class="bg-black p-4 border-b ${headerBorderClass} flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" dir="ltr">
            <h3 class="font-display font-bold text-lg text-white flex items-center gap-3 w-full sm:w-auto">
              <span class="flex items-center justify-center w-7 h-7 rounded ${letterClass} border text-sm shrink-0">${letter}</span>
              <span class="truncate pr-2">${item.company}</span>
            </h3>
            <div class="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
               <button class="done-toggle flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold border transition-colors ${btnClass}" data-company="${item.company}">
                 <i data-lucide="check-circle" class="w-3 h-3"></i> <span>${isDone ? 'DONE' : 'MARK'}</span>
               </button>
               <button class="flex-1 sm:flex-none text-[10px] font-english text-gray-400 hover:text-optiline-gold bg-optiline-gray hover:bg-black px-2 py-1.5 rounded transition flex items-center justify-center gap-1 copy-btn border border-gray-700">
                 <i data-lucide="copy" class="w-3 h-3"></i> <span>Copy</span>
               </button>
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
      <div class="bg-optiline-dark/80 border border-optiline-border text-gray-300 p-4 md:p-6 rounded-lg text-center font-arabic mb-8 fade-in mx-auto w-full max-w-4xl relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        <h3 class="text-optiline-gold font-display font-bold text-xl md:text-2xl mb-4 relative z-10" dir="ltr"><i data-lucide="mail-check" class="inline-block w-6 h-6 mr-2 mb-1"></i> Executive Direct Messaging</h3>
        <p class="leading-relaxed relative z-10 text-xs md:text-sm">تم ضبط هذه الرسائل لتعكس قيم (الدفع بالعملات الرقمية، رفض عقود الاحتكار، التسليم الثابت للأصول). وهي مخصصة لإرسالها عبر <span class="text-white font-bold px-1">Email</span> أو <span class="text-white font-bold px-1">LinkedIn</span> لترفق معها روابط الفيديوهات المخصصة.</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in">
    `;
    outreachData.forEach((item, index) => {
      const letter = String.fromCharCode(65 + index);
      const isDone = doneState[item.company];
      const cardClass = isDone ? 'bg-[#050505] border-gray-800 opacity-50 grayscale blur-[2px] transition-all duration-300 hover:blur-none hover:opacity-100 hover:grayscale-0' : 'bg-[#111111] border-optiline-border hover:border-optiline-gold/40';
      const letterClass = isDone ? 'bg-gray-900 text-gray-600 border-gray-800' : 'bg-optiline-gold/20 text-optiline-gold border-optiline-gold/30';
      const btnClass = isDone 
        ? 'bg-green-500/10 text-green-500 border-green-500/30' 
        : 'bg-black text-gray-500 border-gray-700 hover:text-white hover:border-gray-500';

      html += `
        <div class="${cardClass} border transition-colors duration-500 p-5 md:p-6 rounded-lg relative group flex flex-col shadow-xl">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-gray-800 pb-4 gap-4" dir="ltr">
            <h3 class="font-display font-bold text-lg text-white flex items-center gap-3 w-full">
              <span class="flex items-center justify-center w-7 h-7 rounded ${letterClass} text-sm border shrink-0">${letter}</span>
              <span class="truncate">${item.company}</span>
            </h3>
            <div class="flex gap-2 w-full sm:w-auto shrink-0 mt-1 sm:mt-0">
               <button class="done-toggle flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold border transition-colors ${btnClass}" data-company="${item.company}">
                 <i data-lucide="check-circle" class="w-4 h-4"></i> <span>${isDone ? 'DONE' : 'MARK'}</span>
               </button>
               <button class="flex-1 sm:flex-none text-[11px] font-english text-gray-400 hover:text-optiline-gold bg-optiline-gray hover:bg-black px-3 py-1.5 rounded transition flex items-center justify-center gap-2 copy-btn border border-gray-700 shadow-sm">
                 <i data-lucide="copy" class="w-3 h-3"></i> <span>Copy MSG</span>
               </button>
            </div>
          </div>
          
          <div class="mb-6 flex-1">
            <span class="text-[10px] sm:text-xs text-optiline-gold uppercase tracking-widest font-english mb-3 block opacity-80">Pitch Copy (English)</span>
            <div class="font-english text-xs sm:text-sm text-gray-200 leading-[1.8] whitespace-pre-wrap bg-black/60 p-4 sm:p-5 rounded border border-gray-800/80 copy-target" dir="ltr">${item.englishMessage}</div>
          </div>
          
          <div class="mt-auto pt-4 border-t border-gray-800/50">
            <span class="text-[10px] text-gray-500 uppercase tracking-widest font-english mb-2 block text-right pr-2">Arabic Explanation</span>
            <div class="font-arabic text-[11px] sm:text-xs text-gray-500 leading-relaxed whitespace-pre-wrap bg-optiline-dark/50 p-3 rounded border border-gray-800/30 text-right">${item.arabicTranslation}</div>
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
