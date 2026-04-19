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
    roi: "مقابل جزء بسيط جداً من عمولة بيع يخت واحد، سيحصلون على بنية تحتية للتسويق يمتلكونها بالكامل بنظام التسليم الثابت (Fixed-Scope)، دون الحاجة لدفع آلاف الدولارات لشركات التسويق لإدارتها شهرياً."
  },
  {
    company: "Rene Dekker Design",
    url: "renedekker.co.uk",
    niche: "استوديو تصميم داخلي فاخر",
    location: "لندن، المملكة المتحدة",
    flaw: "التحليل البصري الدقيق: الأعمال مذهلة ولكن لا توجد هوية (Brand Guidelines) واضحة توحد شكل المحتوى الخاص بهم. ينشرون صورهم بلا محتوى مكتوب استراتيجي يخاطب المطورين العقاريين، وإعداد بيكسل التتبع (Tracking Pixel) لديهم إما مفقود أو بدائي جداً.",
    solution: "حزمة CORE ($799): الحزمة التأسيسية للماركات الحصرية في 7-10 أيام. تشمل: ضبط قواعد العلامة التجارية (Brand Sheet)، تسليم 6 منشورات جاهزة بالنصوص كبداية، وإعداد 3 ميزات إعلانية أساسية لإطلاق حملة منصة واحدة صحيحة.",
    roi: "الاستثمار في حزمة الـ CORE يعطيهم المحرك الأساسي (Essential Engine) بنظام تنفيذ نهائي. سيتمكنون من إطلاق عروضهم للمطورين العقاريين بشكل استثنائي يبدو احترافياً ويميزهم كاستوديو نخبة لا يتنافس على السعر."
  },
  {
    company: "Stratos Jet Charters",
    url: "stratosjets.com",
    niche: "تأجير طائرات خاصة",
    location: "أورلاندو، الولايات المتحدة",
    flaw: "التحليل البصري الدقيق: هويتهم البصرية تبدو تجارية أكثر منها 'نخبوية'. يفتقرون بشدة لتقويم محتوى متطور (Advanced Content Calendar) ولكتابة نصوص مقنعة (Persuasive Captions). إعدادات الإعلانات الحالية تحرق الميزانية على استهداف غير مبني على تقسيم الجمهور بناءً على الحرارة (Cold/Warm/Hot).",
    solution: "حزمة MATRIX ($1,799): إعادة تصنيف شاملة. نوفر لهم هوية علامة تجارية من المستوى المتقدم (10-16 page Brand Guidelines)، ونصنع 30 قطعة محتوى جاهزة للانطلاق الفوري، مع تجهيز (Ad Scale Setup) احترافي، يُنفذ ويسلم بالكامل في غضون 21 يوماً.",
    roi: "نموذجنا يعتمد على التسليم المباشر والنهائي للأصول. عبر هذا النطاق العملي الثابت (Fixed-Scope)، يتخلصون من فوضى الوكالات التقليدية ويمتلكون ترسانة أدوات جاهزة لتوجيه إعلانات الطيران الخاص للمدراء التنفيذيين بكفاءة مطلقة."
  },
  {
    company: "Dege & Skinner",
    url: "degeandskinner.co.uk",
    niche: "خياطة رجالية مخصصة (Savile Row)",
    location: "لندن، المملكة المتحدة",
    flaw: "التحليل البصري الدقيق: إرث عظيم لكن لا يمتلكون قوالب مرئية (Social Templates) عصرية لجذب الجيل الجديد. تغيب عنهم استراتيجية المحتوى التي توضح القيمة، والـ (Tone of Voice) غير محدد رقمياً. لا توجد حملات إعلانية معدة بشكل جيد لاستقطاب جمهور شاب ميسور.",
    solution: "حزمة NEXUS ($1,399): دمج العراقة مع النظام الرقمي الحديث. تسليم 3 قوالب سوشيال ميديا مخصصة، إعداد 12 منشور جاهز يعبر عن العراقة بلمسة حديثة، وتجهيز حملات إعلانية مزدوجة لاستهداف الجماهير الجديدة.",
    roi: "بدل التورط في عقود احتكارية لإدارة حسابات تضر أسلوبهم الملكي، نعطيهم ماكينة عمل جاهزة بسعر ثابت ونظام تسليم قاطع، تجعلهم جاهزين للاستحواذ على الأثرياء الجدد."
  },
  {
    company: "Handel Group",
    url: "handelgroup.com",
    niche: "استشارات وتوجيه تنفيذي",
    location: "نيويورك، الولايات المتحدة",
    flaw: "التحليل البصري الدقيق: نصوص طويلة ومملة. لا يوجد دليل للون أو خطوط واضحة. يفتقرون للسكريبتات الفيديو العميقة (Video Scripts) التي تختصر أفكارهم. البيكسل وإعداد الحملات الإعلانية غير مصمم لاستهداف الشركات B2B بدقة عالية مما يهدر أموالهم.",
    solution: "حزمة MATRIX ($1,799): الهيمنة الاستشارية الرقمية. ملف تعريفي للهوية متكامل، 5 سكريبتات فيديوهات احترافية مدروسة + 25 تصميم معد للنشر. تجهيز كامل لاستراتيجية إعلانات تتضمن خريطة طريق للتوسع (Scaling Roadmap).",
    roi: "المدراء يكرهون التعقيد ويبحثون عن التنفيذ القاطع (Just execution). Opti Line تقدم لهم ترسانة الأصول الجاهزة عبر دفعة واحدة بنطاق عمل ثابت، لتختصر دورة المبيعات وتبرزهم كقادة للسوق بلا منازع."
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
    script: "Hello 26 North Yachts team. I’ve been analyzing your digital presence, and while the multi-million dollar vessels you broker are absolutely flawless, there is a clear misalignment in your digital strategy. Right now, your brand ecosystem isn't fully reflecting the elite caliber of your fleet, creating a disconnect for high-net-worth buyers. At Opti Line, we eliminate this gap. We don't rely on bloated monthly retainers; we execute with precision. We deliver a world-class, fixed-scope growth engine: a completely unified brand identity, targeted content, and advanced dual-campaign ad setups designed specifically to acquire and retarget high-level investors. Your marketing infrastructure should match the luxury of your yachts. Are you open to a brief conversation this week to see the exact roadmap we’ve mapped out for you to dominate the luxury maritime market?",
    arabicTranslation: "مرحباً فريق 26 نورث لليخوت. لقد كنت أحلل حضوركم الرقمي، وبينما اليخوت التي تبلغ قيمتها ملايين الدولارات والتي تسوقونها خالية من العيوب تماماً، هناك سوء توافق واضح في استراتيجيتكم الرقمية. في الوقت الحالي، لا يعكس نظام علامتكم التجارية المستوى النخبوي لأسطولكم بشكل كامل، مما يخلق انفصالاً لدى المشترين من ذوي الملاءة المالية العالية. في Opti Line، نقضي على هذه الفجوة. نحن لا نعتمد على العقود الشهرية المرهقة؛ بل ننفذ بدقة. نحن نقدم محرك نمو عالمي المستوى ونطاق عمل ثابت: هوية علامة تجارية موحدة بالكامل، محتوى مستهدف، وإعدادات إعلانية متقدمة للحملات المزدوجة مصممة خصيصاً للاستحواذ على كبار المستثمرين وإعادة استهدافهم. يجب أن تتطابق بنيتكم التحتية التسويقية مع فخامة يخوتكم. هل أنتم مستعدون لمحادثة قصيرة هذا الأسبوع للاطلاع على خارطة الطريق الدقيقة التي رسمناها لكم للسيطرة على سوق الملاحة الفاخرة؟"
  },
  {
    company: "Rene Dekker Design",
    script: "Hi Rene Dekker Design team. Your interior architecture portfolio is breathtaking, but currently, your digital strategy operates more like a silent gallery rather than a growth engine. While your aesthetic expertise is elite, your brand guidelines and content strategy are missing the proactive edge needed to secure high-end property developers before your competitors do. Opti Line provides a definitive intervention. Our fixed-scope model abandons the outdated retainer process. Instead, we architect a complete digital foundation for you in days: premium brand unification, persuasive visual assets, and a razor-sharp ad setup designed to proactively capture elite accounts. It’s time to transform your remarkable talent into a predictable growth machine. Are you open to a quick chat to review the targeted implementation plan we have for your firm?",
    arabicTranslation: "مرحباً فريق رينيه ديكر ديزاين. إن سجل أعمالكم في التصميم الداخلي يخطف الأنفاس، ولكن استراتيجيتكم الرقمية حالياً تعمل كمعرض صامت أكثر منها كمحرك للنمو. بينما نجد خبرتكم الجمالية نخبوية، تفتقر أدلة هويتكم واستراتيجية المحتوى الخاصة بكم إلى الحسم الاستباقي اللازم لتأمين كبار المطورين العقاريين قبل منافسيكم. تقدم Opti Line تدخلاً حاسماً. نموذج عملنا ثابت النطاق يتخلى عن عملية العقود الشهرية القديمة. بدلاً من ذلك، نؤسس لكم قاعدة رقمية كاملة خلال أيام: توحيد فاخر للعلامة، أصول مرئية مقنعة، وإعداد إعلاني شديد الدقة مصمم للاستحواذ الاستباقي على الحسابات النخبوية. حان الوقت لتحويل موهبتكم الاستثنائية إلى آلة نمو يمكن التنبؤ بها. هل أنتم مستعدون لدردشة سريعة لمراجعة خطة التنفيذ المستهدفة التي أعددناها لشركتكم؟"
  },
  {
    company: "Stratos Jet Charters",
    script: "Hi Stratos Jet Charters. While analyzing your brand online, a structural weakness stood out. You provide profound luxury in aviation, but your current visual branding and ad deployment don’t quite convey that same level of exclusivity to high-level executives. Without advanced audience segmentation and a more persuasive narrative, your marketing spend is likely bleeding out on unqualified leads. Opti Line directly solves this inefficiency. We reject standard agency retainers to bring you an elite, fixed-scope execution model. In one rapid deployment, we upgrade your visual identity, deliver conversion-optimized assets including high-impact video scripts, and build an ad infrastructure meant only for elite travelers. Are you open to seeing the immediate execution roadmap we’ve designed to secure your position as the undisputed premier choice in private aviation?",
    arabicTranslation: "مرحباً ستراتوس لتأجير الطائرات. أثناء تحليل علامتكم التجارية عبر الإنترنت، برز ضعف هيكلي. أنتم تقدمون رفاهية عميقة في مجال الطيران، لكن هويتكم البصرية الحالية ونشر إعلاناتكم لا ينقلان نفس المستوى من الحصرية لكبار المدراء التنفيذيين. بدون تقسيم متقدم للجمهور وسرد أكثر إقناعاً، من المرجح أن يكون إنفاقكم التسويقي مستنزفاً على عملاء غير مؤهلين. تقوم Opti Line بحل هذا الخلل بشكل مباشر. نحن نرفض العقود الشهرية للوكالات التقليدية لنقدم لكم نموذج تنفيذ نخبوي ثابت النطاق. في عملية نشر سريعة واحدة، نقوم بترقية هويتكم البصرية، وتسليم أصول محسنة للتحويل بما في ذلك سكريبتات فيديو عالية التأثير، ونبني بنية تحتية إعلانية مخصصة للمسافرين النخبة فقط. هل أنتم مستعدون للاطلاع على خارطة طريق التنفيذ الفوري التي صممناها لتأمين مكانتكم كخيار أول لا ينافس في الطيران الخاص؟"
  },
  {
    company: "Dege & Skinner",
    script: "Hello Dege & Skinner. Your bespoke legacy on Savile Row is unmatched, yet there is a critical disconnect between your heritage and the modern digital wealth demographic. Today’s high-net-worth clients move fast, and your current aesthetic execution lacks the precise targeting systems needed to capture the younger elite. Opti Line bridges this gap. We ignore messy retainers and deliver absolute, fixed-scope results. We will meticulously modernize your visual brand to respect your heritage while aggressively capturing the next generation of legacy clients. We provide you with flawless aesthetic templates and a dual-campaign ad funnel as refined as your tailoring. Are you open to exploring the custom roadmap we’ve built to ensure your digital engine matches the caliber of your craftsmanship?",
    arabicTranslation: "مرحباً ديغ وسكينر. إرثكم في التفصيل المخصص في سافيل رو لا يُضاهى، ومع ذلك هناك انفصال حرج بين تراثكم والتركيبة السكانية للثروة الرقمية الحديثة. يتحرك عملاء اليوم من ذوي الملاءة المالية العالية بسرعة، ويفتقر تنفيذكم الجمالي الحالي إلى أنظمة الاستهداف الدقيقة اللازمة لجذب النخبة الشابة. تسد Opti Line هذه الفجوة. نحن نتجاهل العقود الشهرية المعقدة ونقدم نتائج ثابتة النطاق. سنقوم بتحديث هويتكم البصرية بدقة لتمجيد تراثكم مع الاستحواذ القوي على الجيل القادم من عملاء الإرث. نوفر لكم قوالب جمالية خالية من العيوب ومسار إعلاني مزدوج الحملات بدقة تضاهي جودة خياطتكم. هل أنتم مستعدون لاستكشاف خارطة الطريق المخصصة التي بنيناها لضمان تطابق محرككم الرقمي مع عيار حرفيتكم؟"
  },
  {
    company: "Handel Group",
    script: "Hi Handel Group. Your executive consulting is top-tier, but a quick audit of your digital presence reveals a severe conversion bottleneck. Your brand is currently overshadowed by overwhelming text and uninspired design, which can alienate busy CEOs who demand instant, high-level clarity. Without razor-sharp video narratives and a hyper-targeted B2B roadmap, your sales cycles are staying longer than they should be. Opti Line delivers aggressive clarity. No retainers, just a complete, rapid execution. We will overhaul your brand identity, develop high-level video scripts designed to command authority, and structure an elite ad strategy to accelerate your firm's growth. We transform your digital presence into a decisive, authoritative experience. Are you open to a brief chat to see how this transition will instantly accelerate your firm’s sales cycle?",
    arabicTranslation: "مرحباً مجموعة هاندل. استشاراتكم التنفيذية من الطراز الأول، لكن التدقيق السريع لحضوركم الرقمي يكشف عن اختناق شديد في التحويل. علامتكم التجارية حالياً تطغى عليها النصوص الهائلة والتصميم الذي يفتقر للإلهام، مما قد ينفر الرؤساء التنفيذيين المشغولين الذين يطلبون وضوحاً فورياً رفيع المستوى. بدون سكريبتات فيديو قاطعة وخارطة طريق موجهة للشركات بدقة، ستظل دورات مبيعاتكم أطول مما ينبغي. تقدم Opti Line وضوحاً هجومياً. لا عقود شهرية، بل تنفيذ سريع وكامل. سنقوم بتجديد هوية علامتكم التجارية، ونطور سكريبتات فيديو رفيعة المستوى مصممة لفرض الهيمنة، ونهيكل استراتيجية إعلانية نخبوية لتسريع نمو شركتكم. نحن نحول حضوركم الرقمي إلى تجربة حاسمة وموثوقة. هل أنتم مستعدون لدردشة قصيرة لمعرفة كيف سيسرع هذا التحول من دورة مبيعات شركتكم بشكل فوري؟"
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
      { time: "[1:05 - 1:20]", instruction: "الشاشة السوداء الختامية. رسالة تحث على الرد لبرمجة جلسة أو استلام الأصول بنظام التسليم الثابت." }
    ]
  },
  {
    company: "Rene Dekker Design",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "استعرض صور مشاريع التصميم. التناقض: صور بملايين الجنيهات، لكن منشورة بنصوص (Captions) قصيرة وفقيرة بلا (Tone of Voice) أو دعوات اتخاذ إجراء (CTAs)." },
      { time: "[0:15 - 0:35]", instruction: "استخدم مؤشر الماوس لتوضيح أن الموقع لا يبدو مهيئاً بحملات إعلانية احترافية، وأنهم يعتمدون فقط على الانتظار (Passive Discovery)." },
      { time: "[0:35 - 1:05]", instruction: "انتقال وعرض باقة (CORE Pack $799). إبراز التسليم السريع (7-10 Days)، وأن النظام مبني على تسليم أصول الهوية بالكامل بدون أي تعقيدات وبنطاق عمل ثابت." },
      { time: "[1:05 - 1:20]", instruction: "ثبات الشاشة على شعار وكالة Opti Line ودعوة حصرية للاستفادة من الباقة التأسيسية." }
    ]
  },
  {
    company: "Stratos Jet Charters",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "تسجيل موقع الخطوط الخاصة. التظليل على التصاميم والألوان والخطوط (Typography). أظهر كيف تبدو بدائية (Basic Palette) وكأنها غير مصممة من وكالة متميزة." },
      { time: "[0:15 - 0:35]", instruction: "مرر على محتوى المدونة والسوشيال ميديا، وبيّن مدى حاجتهم لـ 30 منشوراً مصمماً وسكريبتات فيديو (Video Scripts) لجذب المدراء التنفيذيين." },
      { time: "[0:35 - 1:05]", instruction: "عبر الجرافيكس في المونتاج، أظهر مقارنة أسعار قوية لباقة (MATRIX Pack $1,799) والتي توفر خريطة توسع إعلاني (Scaling Roadmap) بدلاً من الوكالات التقليدية." },
      { time: "[1:05 - 1:20]", instruction: "اختتم بمشهد يؤكد على احترافية التنفيذ ونظام التسليم النهائي لاستلام أصولهم كاملة." }
    ]
  },
  {
    company: "Dege & Skinner",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "أظهر الانستغرام القديم. مرر الفأرة لإظهار كيف أن التمسك بالتراث بدون تحديث بصري (Color System & Typography) يفقدهم جيل الأثرياء الحديث." },
      { time: "[0:15 - 0:35]", instruction: "ركز على غياب المحتوى السريع وقوالب الإعلانات. أثناء قراءة (Bridging the generational gap)، أظهر كيف يحتاجون لترقية عاجلة." },
      { time: "[0:35 - 1:05]", instruction: "ركز الشرح المرئي على حزمة (NEXUS) وتسليم 12 بوست جاهز مع ضبط إعلانات إعادة الاستهداف، مؤكداً رفضنا للاحتكار الشهري (No Retainers)." },
      { time: "[1:05 - 1:20]", instruction: "شاشة ختامية لـ Opti Line، نص صريح بتشجيعهم على اعتماد النقلة الرقمية بشكل احترافي وحديث." }
    ]
  },
  {
    company: "Handel Group",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "استعرض موقع الشركة وملفهم في LinkedIn. الإشارة بقوة وبطء إلى بحر النصوص الطويلة المملة (Huge text blocks) التي لا يملك أي CEO وقتاً لقراءتها." },
      { time: "[0:15 - 0:35]", instruction: "تظليل جزء 'الفيديو والتصميم' الغائب. أشر إلى الحاجة الملحة لوجود (Brand Guidelines) تمنع هذا التشتت المرئي، وتجهيز الإعلانات لاستهداف الأعمال B2B." },
      { time: "[0:35 - 1:05]", instruction: "قص سريع (Jump Cut) لعرض باقة الـ MATRIX من Opti Line. التركيز على ميزة السكريبتات الجاهزة (5 Video Scripts) لبناء قيادة فكرية مقنعة." },
      { time: "[1:05 - 1:20]", instruction: "شاشة الاستقرار السوداء النهائية لوكالتك، مع تثبيت نص (Fixed-Scope Execution) لتصفية العملاء وتعزيز القيمة الفاخرة." }
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
    englishMessage: "Subject: Brand authority gap in your yacht brokerage funnel\n\nHi [Name],\n\nI recorded a brief video audit detailing a significant leak in your digital strategy. Your yacht inventory is world-class, but your brand ecosystem isn’t fully reflecting this elite caliber, creating a trust gap for high-net-worth buyers.\n\nWe operate differently—no monthly retainers. We deliver strict, fixed-scope asset bundles designed specifically to acquire and retarget high-level investors. I mapped out a roadmap to ensure your marketing infrastructure finally matches the luxury of your yachts.\n\nWatch it here: [Video Link]\n\nAre you open to a brief conversation this week to review the roadmap I’ve mapped out for you?",
    arabicTranslation: "الموضوع: فجوة السلطة المرئية في قمع وساطة اليخوت الخاص بكم\n\nمرحباً [الاسم]،\n\nلقد سجلت مراجعة فيديو موجزة تفصل تسرباً كبيراً في استراتيجيتكم الرقمية. يخوتكم عالمية المستوى، لكن نظام علامتكم التجارية لا يعكس هذا المستوى النخبوي تماماً، مما يخلق فجوة ثقة لدى المشترين من ذوي الملاءة المالية العالية.\n\nنحن نعمل بشكل مختلف—لا عقود شهرية. نحن نسلم حزم أصول ثابتة النطاق مصممة خصيصاً للاستحواذ على كبار المستثمرين وإعادة استهدافهم. لقد رسمت خارطة طريق لضمان تطابق بنيتكم التحتية التسويقية مع فخامة يخوتكم.\n\nشاهده هنا: [رابط الفيديو]\n\nهل أنتم مستعدون لمحادثة قصيرة هذا الأسبوع لمراجعة خارطة الطريق التي أعددتها لكم؟"
  },
  {
    company: "Rene Dekker Design",
    englishMessage: "Subject: Digital silence costing you London lifestyle projects\n\nHi [Name],\n\nI put together a private video breakdown of your digital brand. Your interior execution is stunning, but currently, your strategy functions like a silent gallery rather than a growth engine, costing you exclusive contracts.\n\nWe provide straightforward execution—zero retainers. I’ve outlined exactly how delivering foundational brand unification, persuasive visual assets, and a professional ad setup can actively capture high-end property developers before they even ask for bids.\n\nHere’s the private breakdown: [Video Link]\n\nAre you open to a quick chat to review the targeted implementation plan I have for your firm?",
    arabicTranslation: "الموضوع: الصمت الرقمي يكلفك مشاريع نمط الحياة الفاخرة في لندن\n\nمرحباً [الاسم]،\n\nلقد أعددت تحليلاً خاصاً بالفيديو لعلامتكم الرقمية. تنفيذكم للتصاميم الداخلية مذهل، ولكن استراتيجيتكم حالياً تعمل كمعرض صامت بدلاً من محرك للنمو، مما يكلفكم عقوداً حصرية.\n\nنحن نقدم تنفيذاً مباشراً—بدون عقود شهرية. لقد وضحت كيف يمكن لتسليم توحيد الهوية الأساسية، والأصول المرئية المقنعة، والإعداد الإعلاني المحترف أن يستحوذ بنشاط على كبار المطورين العقاريين.\n\nإليك التحليل الخاص: [رابط الفيديو]\n\nهل أنتم مستعدون لدردشة سريعة لمراجعة خطة التنفيذ المستهدفة التي أعددتها لشركتكم؟"
  },
  {
    company: "Stratos Jet Charters",
    englishMessage: "Subject: Missing growth ecosystem for exclusive travelers\n\nHi [Name],\n\nI analyzed your digital footprint and recorded a custom video regarding a structural weakness I found. Your private aviation service is exceptional, but your current visual branding doesn’t quite convey that same level of exclusivity to high-level executives.\n\nOpti Line specializes in fixed-scope delivery rather than ongoing agency relationships. I broke down exactly how handing your team elite conversion assets and a robust ad infrastructure will secure your position as the undisputed premier choice in private aviation.\n\nWatch the private video here: [Video Link]\n\nAre you open to seeing the immediate execution roadmap I’ve designed for you?",
    arabicTranslation: "الموضوع: غياب منظومة نمو للمسافرين الحصريين\n\nمرحباً [الاسم]،\n\nلقد حللت بصمتكم الرقمية وسجلت فيديو مخصصاً بشأن ضعف هيكلي وجدته. خدمتكم في الطيران الخاص استثنائية، لكن هويتكم البصرية الحالية لا تنقل تماماً نفس المستوى من الحصرية لكبار المدراء التنفيذيين.\n\nتتخصص Opti Line في التسليم ثابت النطاق بدلاً من علاقات الوكالات المستمرة. لقد وضحت كيف أن تسليم فريقكم أصول تحويل نخبوية وبنية تحتية إعلانية قوية ستؤمن مكانتكم كخيار أول لا ينافس في الطيران الخاص.\n\nشاهد الفيديو الخاص هنا: [رابط الفيديو]\n\nهل أنتم مستعدون للاطلاع على خارطة طريق التنفيذ الفوري التي صممتها لكم؟"
  },
  {
    company: "Dege & Skinner",
    englishMessage: "Subject: Capturing the next generation of UHNW clients\n\nHi [Name],\n\nYour Savile Row heritage is legendary, but I recorded a private video detailing why there is a critical disconnect between your digital presence and the modern digital wealth demographic.\n\nWe provide absolute, fixed-scope results without messy retainers. I’ve outlined a roadmap to modernize your visual brand while respecting your heritage, ensuring you capture the next generation of legacy clients seamlessly.\n\nWatch my breakdown here: [Video Link]\n\nAre you open to exploring the custom roadmap I’ve built for you?",
    arabicTranslation: "الموضوع: الاستحواذ على الجيل القادم من كبار الأثرياء\n\nمرحباً [الاسم]،\n\nإرثكم في سافيل رو أسطوري، لكني سجلت فيديو خاصاً يفصل سبب وجود انفصال حرج بين حضوركم الرقمي والتركيبة السكانية للثروة الرقمية الحديثة.\n\nنحن نقدم نتائج مطلقة وثابتة النطاق بدون عقود شهرية معقدة. لقد رسمت خارطة طريق لتحديث علامتكم البصرية مع احترام تراثكم، لضمان جذب الجيل القادم من عملاء الإرث بسلاسة.\n\nشاهد التحليل هنا: [رابط الفيديو]\n\nهل أنتم مستعدون لاستكشاف خارطة الطريق المخصصة التي بنيتها لكم؟"
  },
  {
    company: "Handel Group",
    englishMessage: "Subject: Fixing conversion bottlenecks in executive consulting\n\nHi [Name],\n\nI made a private video breakdown regarding a severe conversion bottleneck I found in your current digital setup. Your expertise is top-tier, but the overwhelming text and uninspired design can alienate busy CEOs who demand instant clarity.\n\nWe provide rapid execution without retainers. I showed specifically how overhauling your brand identity and structuring an elite video and ad strategy will instantly accelerate your firm’s sales cycle.\n\nSee the custom breakdown here: [Video Link]\n\nAre you open to a brief chat to see how this transition will instantly accelerate your firm’s growth?",
    arabicTranslation: "الموضوع: إصلاح اختناقات التحويل في الاستشارات التنفيذية\n\nمرحباً [الاسم]،\n\nلقد أعددت تحليلاً خاصاً بالفيديو بخصوص اختناق شديد في التحويل وجدته في إعدادكم الرقمي الحالي. خبرتكم رائدة، لكن النصوص الكثيرة والتصميم غير الملهم قد ينفر الرؤساء التنفيذيين الذين يطلبون وضوحاً فورياً.\n\nنحن نقدم تنفيذاً سريعاً بدون عقود شهرية. لقد أوضحت كيف أن تجديد هوية علامتكم وهيكلة استراتيجية فيديو وإعلانات نخبوية سيسرع دورة مبيعات شركتكم بشكل فوري.\n\nشاهد التحليل المخصص هنا: [رابط الفيديو]\n\nهل أنتم مستعدون لدردشة قصيرة لمعرفة كيف سيسرع هذا التحول من نمو شركتكم بشكل فوري؟"
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
              نصيحة الحسم: نقطة بيع وكالتك هي (الوضوح المنفذ). العملاء الأثرياء سئموا من الوكالات التي تستنزفهم بآلاف الدولارات شهرياً كـ 'Retainer' للقيام بمهام عادية. بيعك المباشر في هذه الفيديوهات يعتمد على أنك تسلمهم "محرك الجمال البيعي" الخاص بهم مرة واحدة، بنظام تسليم الأصول النهائية القاطع. كن واضحاً جداً في هذه النقطة!
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
              <h4 class="text-green-500 text-sm font-bold mb-1">المنفعة الكبرى والـ ROI المستهدف</h4>
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
        <p class="leading-relaxed relative z-10 text-xs md:text-sm">تم ضبط هذه الرسائل لتعكس قيم (نظام التسليم الثابت للأصول، رفض عقود الاحتكار، التنفيذ المباشر). وهي مخصصة لإرسالها عبر <span class="text-white font-bold px-1">Email</span> أو <span class="text-white font-bold px-1">LinkedIn</span> لترفق معها روابط الفيديوهات المخصصة.</p>
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
