// --- Data Structures ---

const auditData = [
  {
    company: "Waterhouse Young Clinic",
    url: "waterhouseyoung.com",
    niche: "عيادة تجميل طبية فائقة الفخامة",
    location: "لندن، المملكة المتحدة",
    flaw: "التحليل البصري الدقيق: العيادة تقع في واحدة من أرقى مناطق لندن وتستهدف نخبة المجتمع، لكن حساباتهم وبصمتهم المرئية تفتقر تماماً للقصة والمشاعر. المحتوى طبي وجاف يعتمد على صور تقليدية، مما يضعهم في مقارنة سعرية مع العيادات الأقل مستوى. الاستهداف الإعلاني غير مخصص وغير مصمم بدقة لجذب الطبقة الثرية (UHNW). لا يوجد محتوى فيديو سينمائي يعكس 'التجربة الفاخرة' التي يدفع العميل من أجلها.",
    solution: "حزمة MATRIX (البناء المرئي والإعلانات الدقيقة) - لن نقوم ببرمجة موقع. سنقوم بإعادة هندسة الهوية البصرية (Brand Identity)، إنتاج محتوى وثائقي سينمائي قصير لتجربة العميل، وإطلاق حملات إعلانية (Retargeting) صارمة وموجهة جغرافياً واهتمامياً للنخبة.",
    roi: "عندما تتوقف العيادة عن الظهور كـ'مقدم خدمة طبية' وتتحول عبر المحتوى إلى 'علامة تجارية فاخرة ونمط حياة'، ستتمكن من رفع الأسعار وتجاهل المنافسة، مما يضاعف العائد الإعلاني (ROAS) ويستقطب عملاء لا يناقشون السعر."
  },
  {
    company: "26 North Yachts",
    url: "26northyachts.com",
    niche: "وساطة وبيع اليخوت الفاخرة",
    location: "فلوريدا، الولايات المتحدة",
    flaw: "التحليل البصري الدقيق: القوارب واليخوت المعروضة تقدر بملايين الدولارات، ولكن الهوية المرئية للوكالة والوكلاء (Brokers) تبدو عادية جداً على منصات التواصل. لا توجد علامة تجارية شخصية قوية للوسطاء عبر مقاطع فيديو تبرز سلطتهم في هذا المجال. الحملات الإعلانية تعتمد على عرض اليخت، وليس على سرد قصة امتلاك اليخت لاستهداف المليونيرات بشكل صحيح.",
    solution: "حزمة NEXUS (استحواذ النظام البيئي) - ترقية الهوية المرئية بالكامل، وضع استراتيجية محتوى مكثفة تتمحور حول 'شخصية وخبرة الوسيط' (Broker Authority Videos)، وتنفيذ نظام إعلاني عالي التوجيه (High-Ticket Funnel) يصل حصرياً لأصحاب الثروات.",
    roi: "في عالم اليخوت، المستثمر يشتري الثقة في الوسيط قبل اليخت. بناء نظام محتوى وهوية مترابط سيبرر العمولات الضخمة ويضع الوكالة كخيار حتمي وغير قابل للمنافسة أمام المشترين الدوليين."
  },
  {
    company: "Rene Dekker Design",
    url: "renedekker.co.uk",
    niche: "استوديو تصميم داخلي فاخر",
    location: "لندن، المملكة المتحدة",
    flaw: "التحليل البصري الدقيق: الأعمال والتصاميم المنجزة مدهشة، ولكن الهوية الرقمية للاستوديو صامتة تماماً. المحتوى يعتمد على صور ثابتة (Photos) خالية من الحياة. لا يوجد أي محتوى فيديو (Thought Leadership) للمصمم يشرح فلسفته المعقدة، ولا يوجد تواجد إعلاني نشط لاستهداف أصحاب العقارات الفارهة والمطورين.",
    solution: "حزمة CORE (الهوية والمحتوى التأسيسي) - العمل يركز 100% على العلامة التجارية؛ تحديث النمط البصري، إخراج مقاطع فيديو سينمائية تتحدث عن فلسفة التصميم لجذب العملاء عاطفياً، وتحويل المعرض الصامت إلى آلة توليد ثقة.",
    roi: "التصميم الداخلي هو قرار عاطفي. المحتوى المرئي الفاخر سيسرّع عملية اتخاذ القرار للملاك، ويحوّل الاستوديو من مجرد خيار في قائمة، إلى رغبة حصرية للعميل تبرر التسعير المرتفع للخدمة."
  },
  {
    company: "Stratos Jet Charters",
    url: "stratosjets.com",
    niche: "تأجير طائرات خاصة (Private Aviation)",
    location: "أورلاندو، الولايات المتحدة",
    flaw: "التحليل البصري الدقيق: الهوية البصرية تبدو وكأنها وكالة سياحة وحجوزات عادية، وليست نادياً حصرياً للمدراء التنفيذيين والأثرياء. المحتوى ممل ويركز على المواصفات بدلاً من الحصرية والراحة. الأهم من ذلك، غياب استراتيجية إعلانات (B2B) موجهة لاصطياد المدراء التنفيذيين للشركات الضخمة وصناع القرار عبر منصات مثل LinkedIn.",
    solution: "حزمة MATRIX (المحتوى المرئي والإعلانات الدقيقة) - إعادة صياغة زاوية العلامة التجارية لتكون حصرية. إنتاج محتوى مرئي يعكس الفخامة القصوى، وإطلاق نظام إعلانات (Account-Based Marketing) يستهدف مدراء الشركات والمسؤولين التنفيذيين مباشرة.",
    roi: "رحلة طيران خاصة واحدة قد تغطي تكلفة الاستثمار. تغيير التموضع البصري والإعلاني لتحاكي (النوادي الخاصة) سيقلل من تكلفة الاستحواذ على العميل (CAC) ويزيد من معدلات الاحتفاظ (Retention) للرحلات المستقبلية."
  },
  {
    company: "Dege & Skinner",
    url: "degeandskinner.co.uk",
    niche: "خياطة رجالية مخصصة (Savile Row)",
    location: "لندن، المملكة المتحدة",
    flaw: "التحليل البصري الدقيق: علامة تجارية ذات إرث تاريخي عريق، لكنها تفشل حالياً في جذب الجيل الجديد من المليونيرات ورجال الأعمال الشباب. هويتهم الرقمية على السوشيال ميديا قديمة ومملة، وتغيب عنهم تماماً الإعلانات الموجهة التي تحول هذه الحرفة اليدوية إلى محتوى مبهر يخلق الطلب الفوري.",
    solution: "حزمة NEXUS (النظام البيئي الشامل) - الجمع بين الفخامة الكلاسيكية والآلة البيعية الحديثة. تصميم هوية رقمية شبابية وفاخرة، تصوير فيديوهات تظهر سحر الحرفة اليدوية بمونتاج سريع، وإطلاق قمع إعلاني موجه للنخبة الشابة الميسورة.",
    roi: "تحديث الشريحة المستهدفة دون فقدان الإرث. المحتوى الإعلاني المدمج سيجسر الفجوة بين الأجيال ويمكّن العلامة من استحواذ جيل جديد كامل من صُناع الثروات الذين يبحثون عن التفرد."
  },
  {
    company: "Handel Group",
    url: "handelgroup.com",
    niche: "استشارات وتوجيه تنفيذي عالي التأثير",
    location: "نيويورك، الولايات المتحدة",
    flaw: "التحليل البصري الدقيق: وكالة تمتلك خبرة استشارية قوية جدًا ورسوم اشتراك مرتفعة، ولكن العرض الخارجي (Brand Identity) مزدحم ويعتمد على النصوص بشكل مخيف. لا توجد مقاطع فيديو بإنتاج عالي (High-Production Value) لترسيخ القيادة الفكرية. الإعلانات تبدو مشتتة وتفشل في الوصول لصناع القرار بأسلوب النخبة.",
    solution: "حزمة CORE (بناء السلطة الرقمية) - تهميش النصوص الطويلة. تجديد الهوية البصرية لتكون حادة وخالية من التعقيد، والتركيز كلياً على إنتاج محتوى فيديو (Thought Leadership) يضع المستشارين في خانة 'الخبراء الذي لا يُعلى عليهم'.",
    roi: "في مجال الاستشارات، السلطة المعرفية (Authority) هي كل شيء. الفيديوهات المنتجة بعناية والمصممة بهوية بصرية قيادية ستختصر دورة المبيعات وتلغي أي اعتراض من العملاء المحتملين بشأن الأسعار."
  }
];

const scriptsData = [
  {
    company: "Waterhouse Young Clinic",
    script: "Hi Waterhouse Young team. I’ve been analyzing your digital footprint in London, and I noticed a significant gap that is actively costing you high-ticket clients. Your aesthetic treatments and medical expertise are undeniably world-class, but your external visual branding and social content simply do not reflect that premium status. When affluent clients look for top-tier aesthetic clinics, they make snap judgments based on luxury visual cues and emotional storytelling. Right now, your branding feels too clinical, your social media lacks high-end, cinematic video content, and your ad targeting is blending in with average local salons. That is exactly where the Optiline MATRIX package comes in. To be totally clear: we don’t build websites. We are a specialized growth agency that completely overhauls your digital brand identity, produces premium storytelling video content, and deploys hyper-targeted ads directly to ultra-high-net-worth communities. We synchronize your brand, content, and ads into one seamless, client-generating machine. Stop losing elite clients to clinics with less expertise but better marketing. Reply directly to this email, or visit the Optiline portal today to claim a customized preview of your new digital ecosystem."
  },
  {
    company: "26 North Yachts",
    script: "Hello 26 North Yachts. I was reviewing your digital presence today, and while the yachts you broker in Florida are absolutely incredible multi-million dollar assets, your digital ecosystem is completely fragmented. Ultra-high-net-worth buyers don't just buy a boat; they buy into the absolute authority and extreme confidence of the broker. Right now, your elite agents lack strong, narrative-driven personal branding videos, and your ad strategy is extremely reliant on basic images rather than high-ticket funnels. Because of this, you are visually blending in with standard brokerage firms. The Optiline NEXUS package is engineered specifically to fix this exact problem. Note that we do not do web development—we execute a full premium ecosystem takeover. We synchronize a complete visual brand upgrade, powerful agent-authority video content, and precisely targeted high-net-worth digital ads into a single machine. This positions your brokers as the undeniable luxury authorities in the international yacht market. Stop letting disjointed branding cost you massive commissions. Reply to this email today or visit the Optiline website to see a tailored, high-level preview of your new brand ecosystem."
  },
  {
    company: "Rene Dekker Design",
    script: "Hi Rene Dekker Design team. Your interior design portfolio is visually incredible—the raw talent and luxury execution in London are obvious. However, your digital presence currently functions like a beautiful, but perfectly silent, museum block. You have absolutely zero storytelling video content breaking down your unique design philosophy, and effectively zero targeted aesthetic presence to capture high-end property developers. Because of this structural gap, you are relying entirely on passive discovery rather than aggressive, high-ticket positioning. With the Optiline CORE package, we completely activate your high-end portfolio. To be clear, we don't code websites; we upgrade your entire visual brand identity. We deploy cinematic video case studies and synchronize them with a premium design language that captures attention instantly. We take your brand and your content, and synchronize them into a sophisticated, highly-tuned visual machine. It is time to shift your firm from being digitally quiet to being the inevitable choice for massive London lifestyle projects. Reply to this message via email or WhatsApp, or visit the Optiline website right now to see how we transform your digital authority."
  },
  {
    company: "Stratos Jet Charters",
    script: "Hi Stratos Jet Charters. I was studying your firm's digital footprint today and noticed a critical vulnerability. Your private aviation services are clearly built on profound logistics and luxury, but your external visual identity looks like a standard booking agency rather than an elite, exclusive members' club. In 2026, this means you are continually fighting on price rather than exclusivity, and you are missing out on corporate executives who demand immense visual trust before transferring large sums. We built the Optiline MATRIX package to fix this exact leak in your pipeline. Optiline does not do web development; we reconstruct your foundational brand identity and deploy high-end, lifestyle video content that instantly builds unshakeable digital trust. We synchronize this premium content with hyper-targeted B2B ads pointed directly at corporate decision-makers. We ensure you look as elite and untouchable online as the jets you charter. To see exactly how we can bridge this visual gap and radically modernize your trust factor for elite travelers, please reply to this message directly or visit Optiline online today."
  },
  {
    company: "Dege & Skinner",
    script: "Hello Dege & Skinner. Your bespoke tailoring and Savile Row heritage are absolutely legendary. However, I’ve been analyzing your external digital brand, and it is failing to capture the massive shift in the modern, young millionaire demographic. Your current reliance on outdated visual formats and lack of aggressive, high-end video content is actively allowing newer, less-experienced brands to steal the next generation of wealth. The Optiline NEXUS package changes this dynamic completely. We do not touch your website’s coding. Instead, we tear down and rebuild your digital authority funnel from the ground up—implementing a premium visual brand overhaul, a video-first lifestyle content strategy, and hyper-targeted digital ads aimed at high-income professionals. This unified ecosystem cuts through the noise, honors your heritage, but significantly modernizes your appeal to drive high-ticket bespoke conversions at global scale. You are too prestigious to fade into the background visually. Reply directly to this email today or visit the Optiline website to secure a custom visual walkthrough of how this targeted system will scale your firm’s revenue."
  },
  {
    company: "Handel Group",
    script: "Hi Handel Group. I wanted to reach out because while your executive coaching and consulting expertise in New York is clearly top-tier and highly transformative, your external brand identity is completely disjointed. Your current strategy's reliance on massive text blocks, standard social graphics, and broad-audience ad targeting is actively burning your marketing budget and drastically extending your client acquisition cycle. High-level executives do not have time to read; they need to be visually convinced in seconds. We built the Optiline CORE package specifically for this. Optiline does not build websites—we engineer complete visual authority. We synchronize a premium brand identity upgrade alongside high-production, aggressive thought-leadership video content. This positions your partners as absolute, undeniable experts in the feed, cutting your sales cycle in half and driving high-ticket corporate conversions at scale. Stop blending in with standard life-coaches and average consultants. Reply directly to this email today or visit the Optiline website right now to secure a custom architectural walkthrough of how this exact brand and content system will scale your consultancy."
  }
];

const visualGuidesData = [
  {
    company: "Waterhouse Young Clinic",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "ابدأ بتسجيل حساب الانستغرام الفعلي للعيادة (أو صفحة المعرض في الموقع). مرر الفأرة ببطء فوق الصور الطبية الباردة. توقف قليلاً واستخدم تأثير التقريب (Zoom-in) لإظهار كيف أن هذه الصور تفتقر إلى أي 'تجربة فاخرة' أو قصة." },
      { time: "[0:15 - 0:35]", instruction: "افتح مكتبة إعلانات فيسبوك (Ad Library) أو تخيل إعلاناتهم. أشر إلى كيف أن الاستهداف يبدو عاماً جداً. أثناء قراءة السكريبت عن 'الهوية المفككة'، ضع دائرة بصرية (Visual Highlight) لتبيان افتقارهم لمقاطع الفيديو السينمائية." },
      { time: "[0:35 - 1:05]", instruction: "انتقال ناعم (Fade Through White) إلى حزمة MATRIX الخاصة بنا. اعرض لقطات من هويات بصرية فاخرة قمنا بتطويرها لعيادات، ومقاطع فيديو احترافية تظهر الفخامة، ونماذج لاعلاناتنا الموجهة للنخبة (High-Ticket Ads)." },
      { time: "[1:05 - 1:20]", instruction: "شاشة Optiline الختامية الداكنة (Optiline_Outro). الشعار الذهبي يستقر بثبات، والمخرج يحرص على جعل النص الختامي (CTA) بارزاً بأننا نصنع الهوية ولا نبرمج المواقع." }
    ]
  },
  {
    company: "26 North Yachts",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "قم بتسجيل فيديو لقسم الوسطاء (Brokers) في موقعهم أو منصاتهم الاجتماعية. حرك الفأرة على صور الوسطاء الثابتة. المشهد يجب أن يبرز غياب المحتوى المرئي الذي يبني 'الثقة الشخصية'." },
      { time: "[0:15 - 0:35]", instruction: "انتقل إلى إعلاناتهم، وأبرز كيف يعتمدون على صور اليخوت فقط بدون بناء مسار مبيعات (Funnel) محكم. سرّع حركة التمرير للإيحاء بأن علامتهم تضيع وسط زحمة السوق." },
      { time: "[0:35 - 1:05]", instruction: "تغيير سريع للإيقاع (Hard Cut). عرض حزمة NEXUS. استعرض لقطات فيديو تخيلية لوكيل يخت يتحدث أمام الكاميرا بثقة عالية، مع استعراض أمثلة على (Branding) قوي وهيكلة إعلانية منظمة تستهدف الأثرياء." },
      { time: "[1:05 - 1:20]", instruction: "ظهور الشاشة الختامية السوداء بخطوط ذهبية لشعار Optiline. الحفاظ على الصمت البصري لثانيتين لتعزيز الفخامة مع التركيز على رسالة الرد المباشر." }
    ]
  },
  {
    company: "Rene Dekker Design",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "تسجيل حي لموقع أو انستغرام الاستوديو. تصفح صور المشاريع الرائعة جداً، ولكن أظهر 'الهدوء والصمت' المبالغ فيه. لا يوجد تفاعل، لا يوجد فيديو يعكس فلسفة المصمم." },
      { time: "[0:15 - 0:35]", instruction: "ركز الماوس على النصوص الجافة المرافقة للصور. الهدف هو إيصال فكرة التناقض: تصميم داخلي فاخر يقابله محتوى رقمي متجمد لا يساعد في اصطياد العملاء." },
      { time: "[0:35 - 1:05]", instruction: "انتقال (Wipe left) احترافي لاستعراض حزمة CORE. أظهر أمثلة على تصميم هويات العلامات التجارية الفاخرة (Brand Overhauls) ومقاطع فيديو مقابلات سينمائية مع المصممين (Thought Leadership)." },
      { time: "[1:05 - 1:20]", instruction: "استقرار الشاشة على صورة Optiline_Outro الداكنة القوية، مع استمرار الموسيقى الهادئة في الخلفية، ودعوة صريحة بأننا الحل المرئي والمحتوى، وليس كود الموقع." }
    ]
  },
  {
    company: "Stratos Jet Charters",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "تصفح موقع أو حسابات الطيران الخاص. أشر بمؤشرك على الهوية البصرية (اللوجو، الألوان، الصور) التي تبدو وكأنها 'شركة سياحة وتذاكر' بدلاً من 'نادي حصري للأثرياء'." },
      { time: "[0:15 - 0:35]", instruction: "بينما تقرأ عن 'ضعف استهداف الـ B2B'، قم بالإشارة إلى عدم وجود أي محتوى فيديو يخاطب وقت المدير التنفيذي وتجربة القوة والحصرية." },
      { time: "[0:35 - 1:05]", instruction: "تغيير مبهر في العرض (Glitch to Luxury). اعرض قدرات MATRIX: هوية بصرية ملكية، فيديوهات لايف ستايل (Lifestyle B-roll) راقية للطيران الخاص، وأشكال الإعلانات الموجهة بدقة (LinkedIn Ads) للمسؤولين." },
      { time: "[1:05 - 1:20]", instruction: "الشاشة الختامية الذهبية والسوداء. يجب أن تكون نبرة الصوت في التعليق هنا حاسمة وتدعوهم مباشرة للرد عبر الإيميل أو زيارة موقعنا." }
    ]
  },
  {
    company: "Dege & Skinner",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "ابدأ بصور البدلات الكلاسيكية على حسابهم. التظليل المستمر للماوس على شكل المنشورات القديمة وطريقة العرض المتواضعة التي تخفق في جذب الجيل الشاب الحديث من أصحاب الثروات." },
      { time: "[0:15 - 0:35]", instruction: "أظهر كيف يعتمدون بالكامل على 'التاريخ' بدون صياغة مسار إعلاني حديث. غياب مقاطع الـ (Reels) السريعة الفاخرة التي تبين سحر الحرفة." },
      { time: "[0:35 - 1:05]", instruction: "تفعيل قوة حزمة NEXUS: عرض سريع لعلامة تجارية مجددة (Rebrand) تحافظ على التاريخ، مصحوبة بمقطاع فيديو عصرية ومونتاج أجنبي إيقاعي يجسد الخياطة الراقية وإعلانات السوشيال ميديا الدقيقة." },
      { time: "[1:05 - 1:20]", instruction: "الختام الكلاسيكي الأنيق (Optiline_Outro)، يبرز أننا الوكالة التي ستعيد إحياء هويتهم المرئية وإعلاناتهم دون المساس بموقعهم البرمجي." }
    ]
  },
  {
    company: "Handel Group",
    timeline: [
      { time: "[0:00 - 0:15]", instruction: "تصفح منصة (LindkedIn) الخاصة بالشركة أو موقعهم. قم بالتظليل الدقيق على 'الكتل النصية الضخمة' (Walls of Text). أظهر كم هي مملة للرئيس التنفيذي المشغول." },
      { time: "[0:15 - 0:35]", instruction: "استخدم الفأرة لتسليط الضوء على المنشورات التي لا تحتوي على إنتاج فيديو احترافي، مؤكداً أن 'الخبراء الحقيقيين يخسرون الصدارة أمام مسوقين يمتلكون فيديو أفضل'." },
      { time: "[0:35 - 1:05]", instruction: "قص سريع (Jump Cut) لحزمة CORE. عرض نماذج لفيديوهات التوجيه التنفيذي ذات الإضاءة السينمائية الخلفية (Dark mood lighting)، والهوية البصرية القيادية المفرطة في الفخامة التي ننتجها." },
      { time: "[1:05 - 1:20]", instruction: "شاشة استقرار Optiline السوداء، مع كلمة (Reply directly...) تظهر مع نطق المعلق لها لتعزيز استجابة صانع القرار." }
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
        <p class="text-sm text-gray-400 mb-3 block"><strong>الهدف:</strong> تصوير مواقع وحسابات العملاء لتسليط الضوء على خلل الهوية بناءً على توجيهات الإخراج المرئي.</p>
        <ul class="list-decimal list-inside space-y-2 text-gray-300 font-arabic text-sm">
          <li>افتح الروابط الـ 6 من التقرير التنفيذي وجزّئ التبويبات بالمتصفح.</li>
          <li>شغّل أداة تسجيل الشاشة (Screenity أو OBS).</li>
          <li>تذكر أن تركز على (الهوية، المحتوى، غياب الفيديو)، لا تتحدث عن تصميم أزرار الموقع برمجياً.</li>
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
              نصيحة CRO: استراتيجيتنا هنا لا تبيع "مواقع إلكترونية". تذكر خلال الإرسال التأكيد للعميل أننا نعمل على هويتهم المرئية، إنتاج الفيديو السينمائي، وهيكلة الإعلانات. ضع مصغرة (Thumbnail) من داخل حسابهم نفسه ليتم إقناعه بضرورة فتح الفيديو. بهذا النظام، نُفذت حملة اختراق فعّالة ومجانية 100%.
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
            <span class="bg-optiline-gold/10 text-optiline-gold text-xs px-2 py-1 rounded-full font-english font-bold flex-shrink-0 mr-2 text-center h-fit">
              VIP
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
              <h4 class="text-optiline-gold text-sm font-bold mb-1">خلل الهوية والمحتوى</h4>
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
        <strong>STRICT GUIDELINE EXECUTED:</strong> Texts emphasize "NO WEB DEV - BRAND & CONTENT ONLY". Length strictly ~80 seconds (~170 words). CTA redirects entirely to Email/Web.
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
            <h3 class="font-display font-bold text-lg text-white">${item.company}</h3>
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
