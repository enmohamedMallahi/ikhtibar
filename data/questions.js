const questions = [
	// openness
	{
		id: 1,
		text: 'أنا اجتماعي ومبادر.',
		trait: 'openness',
	},
	{
		id: 2,
		text: 'أستمتع بأن أكون محور الاهتمام.',
		trait: 'openness',
	},
	{
		id: 3,
		text: 'أشعر بالراحة عند بدء محادثات مع الغرباء.',
		trait: 'openness',
	},
	{
		id: 4,
		text: 'أنا حيوية في الحفلات والمناسبات الاجتماعية.',
		trait: 'openness',
	},
	{
		id: 5,
		text: 'أفضل قضاء الوقت وحدي بدلاً من التواجد مع مجموعة من الأشخاص.',
		trait: 'openness',
	},
	{
		id: 6,
		text: 'أستمتع بالتجمعات الاجتماعية والحفلات الكبيرة.',
		trait: 'openness',
	},
	{
		id: 7,
		text: 'أحصل على طاقة من قضاء وقت مع الآخرين.',
		trait: 'openness',
	},
	{
		id: 8,
		text: 'أتحدث في الغالب دون تفكير في مناقشات الجماعات.',
		trait: 'openness',
	},
	{
		id: 9,
		text: 'أنا قوي وقادر على الدفاع عن نفسي.',
		trait: 'openness',
	},
	{
		id: 10,
		text: 'أنا حيوية في الحفلات والمناسبات الاجتماعية.',
		trait: 'openness',
	},

	// Conscientiousness
	{
		id: 11,
		text: 'أنا أكمل المهام التي أبدأها، حتى إذا أصبحت مملة أو صعبة.',
		trait: 'conscientiousness',
	},
	{
		id: 12,
		text: 'أنا أعمل خططًا وألتزم بها.',
		trait: 'conscientiousness',
	},
	{
		id: 13,
		text: 'أنا دقيق وأولي انتباهًا للتفاصيل.',
		trait: 'conscientiousness',
	},
	{
		id: 14,
		text: 'أنا ألتزم بالوقت وأكره التأخر.',
		trait: 'conscientiousness',
	},
	{
		id: 15,
		text: 'أنا دائمًا أسعى لتحقيق التميز في عملي.',
		trait: 'conscientiousness',
	},
	{
		id: 16,
		text: 'أنا منضبط وأحب الالتزام بجدول زمني.',
		trait: 'conscientiousness',
	},
	{
		id: 17,
		text: 'أنا منهجي في نهجي لحل المشكلات.',
		trait: 'conscientiousness',
	},
	{
		id: 18,
		text: 'أنا مسؤول وموثوق به.',
		trait: 'conscientiousness',
	},
	{
		id: 19,
		text: 'أنا أقدر الترتيب والبنية في بيئتي.',
		trait: 'conscientiousness',
	},
	{
		id: 20,
		text: 'يمكن الاعتماد علي في الوفاء بالتزاماتي.',
		trait: 'conscientiousness',
	},

	// Openness
	{
		id: 21,
		text: 'أنا أستمتع بتجربة أنواع غذائية جديدة وغريبة.',
		trait: 'openness',
	},
	{
		id: 22,
		text: 'غالبًا ما أقترح حلاً إبداعيًا لحل المشكلات.',
		trait: 'openness',
	},
	{
		id: 23,
		text: 'أستمتع باكتشاف ثقافات وأفكار جديدة.',
		trait: 'openness',
	},
	{
		id: 24,
		text: 'أنا فضولي وأستمتع بتعلم مجموعة واسعة من الموضوعات.',
		trait: 'openness',
	},
	{
		id: 25,
		text: 'أنا مستعد لتجربة تجارب جديدة وغير تقليدية.',
		trait: 'openness',
	},
	{
		id: 26,
		text: 'أجد المناقشات الفلسفية والمجردة مثيرة.',
		trait: 'openness',
	},
	{
		id: 27,
		text: 'أستمتع بالتعبير عن نفسي من خلال الأنشطة الفنية أو الإبداعية.',
		trait: 'openness',
	},
	{
		id: 28,
		text: 'أنا مرتاح بتحدي الطرق التقليدية للتفكير.',
		trait: 'openness',
	},
	{
		id: 29,
		text: 'أستمتع بقراءة الكتب التي تتحدى وجهة نظري.',
		trait: 'openness',
	},
	{
		id: 30,
		text: 'أنا مهتم باستكشاف أساليب حياة بديلة.',
		trait: 'openness',
	},

	// Agreeableness
	{
		id: 31,
		text: 'أنا مهتم بتوخي احترام مشاعر الآخرين قبل اتخاذ القرارات.',
		trait: 'agreeableness',
	},
	{
		id: 32,
		text: 'أنا مستعد للتوصل إلى تسوية للحفاظ على الانسجام في العلاقات.',
		trait: 'agreeableness',
	},
	{
		id: 33,
		text: 'أنا لطيف ومتعاطف مع الآخرين.',
		trait: 'agreeableness',
	},
	{
		id: 34,
		text: 'كثيراً ما أسعى لمساعدة الآخرين بشكل فائق.',
		trait: 'agreeableness',
	},
	{
		id: 35,
		text: 'أجد صعوبة في رفض طلبات من الأصدقاء والعائلة.',
		trait: 'agreeableness',
	},
	{
		id: 36,
		text: 'أنا مباشر وصادق في تفاعلاتي مع الآخرين.',
		trait: 'agreeableness',
	},
	{
		id: 37,
		text: 'أنا حساس لاحتياجات ومشاعر الآخرين.',
		trait: 'agreeableness',
	},
	{
		id: 38,
		text: 'أنا أتجنب النزاعات والمشاحنات في كل الحالات إذا أمكن.',
		trait: 'agreeableness',
	},
	{
		id: 39,
		text: 'أنا مؤمن بالخير الكامن في البشر.',
		trait: 'agreeableness',
	},
	// neursos
	{
		id: 40,
		text: 'أنا وفي ومخلص في علاقاتي القريبة.',
		trait: 'agreeableness',
	},
	{
		id: 41,
		text: 'كثيراً ما أشعر بتقلبات المزاج أو بارتفاعات وانخفاضات عاطفية.',
		trait: 'neuroticism',
	},
	{
		id: 42,
		text: 'أشعر بالقلق كثيراً بشأن عدم اليقين في المستقبل.',
		trait: 'neuroticism',
	},
	{
		id: 43,
		text: 'أجد صعوبة في البقاء هادئاً في مواقف مجهدة.',
		trait: 'neuroticism',
	},
	{
		id: 44,
		text: 'عادةً ما أميل إلى تضخيم المشكلات الصغيرة لتصبح مشاكل أكبر.',
		trait: 'neuroticism',
	},
	{
		id: 45,
		text: 'كثيراً ما أشعر بالتوتر والعصبية.',
		trait: 'neuroticism',
	},
	{
		id: 46,
		text: 'عموماً، أنا شخص هادئ ومتزن.',
		trait: 'neuroticism',
	},
	{
		id: 47,
		text: 'نادراً ما أدع العواطف السلبية تؤثر على رفاهيتي العامة.',
		trait: 'neuroticism',
	},
	{
		id: 48,
		text: 'أنا مرون وقادر على التعافي بسرعة من الصدمات.',
		trait: 'neuroticism',
	},
	{
		id: 49,
		text: 'أنا مستقر عاطفياً ونادراً ما أشعر بالتحمل من قبل الإجهاد.',
		trait: 'neuroticism',
	},
	{
		id: 50,
		text: 'لدي منظور إيجابي ونادراً ما ألحق بأفكار سلبية.',
		trait: 'neuroticism',
	},
];

export default questions;
