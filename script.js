// Common Variables
let currentQuestion = 0;
let score = 0;

const quizData = [
    //...पहले वाले 5 प्रश्न
    {
        question: "भारत का राष्ट्रीय फल कौन सा है?",
        options: ["आम", "सेब", "अनार", "केला"],
        correct: 0
    },
    {
        question: "चंद्रमा पर पहुंचने वाला पहला व्यक्ति कौन था?",
        options: ["नील आर्मस्ट्रांग", "राकेश शर्मा", "कल्पना चावला", "यूरी गगारिन"],
        correct: 0
    },
    {
        question: "इंद्रधनुष में कितने रंग होते हैं?",
        options: ["5", "7", "6", "8"],
        correct: 1
    },
    {
        question: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        options: ["सरोजिनी नायडू", "इंदिरा गांधी", "प्रतिभा पाटिल", "सुषमा स्वराज"],
        correct: 1
    },
    {
        question: "गुरुत्वाकर्षण का सिद्धांत किसने दिया?",
        options: ["आइंस्टीन", "न्यूटन", "गैलीलियो", "आर्किमिडीज"],
        correct: 1
    },
    {
        question: "स्वतंत्र भारत के पहले गवर्नर जनरल कौन थे?",
        options: ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
        correct: 1
    },
    {
        question: "विश्व स्वास्थ्य संगठन का मुख्यालय कहाँ है?",
        options: ["न्यूयॉर्क", "जेनेवा", "पेरिस", "लंदन"],
        correct: 1
    },
    {
        question: "भारत की पहली 3D फिल्म कौन सी थी?",
        options: ["चेन्नई एक्सप्रेस", "हॉटी", "माय डियर कुट्टीचाथन", "रोबोट"],
        correct: 2
    },
    {
        question: "सांपों का राष्ट्रीय उद्यान कहाँ स्थित है?",
        options: ["काजीरंगा", "पेरियार", "साइलेंट वैली", "इम्फाल"],
        correct: 1
    },
    {
        question: "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        options: ["थार", "सहारा", "गोबी", "कालाहारी"],
        correct: 0
    },
    //...और 10 प्रश्न
    {
        question: "किस वेद को 'भारतीय संगीत का मूल' माना जाता है?",
        options: ["ऋग्वेद", "सामवेद", "यजुर्वेद", "अथर्ववेद"],
        correct: 1
    },
    {
        question: "भारत में सबसे लंबी तटरेखा वाला राज्य कौन सा है?",
        options: ["गुजरात", "आंध्र प्रदेश", "तमिलनाडु", "केरल"],
        correct: 0
    },
    {
        question: "ऐसा कौन सा फल है जो खाने से नहीं, बजाने से मिलता है?",
        options: ["केला", "झुनझुना", "आम", "नारियल"],
        correct: 1 
    },
    {
        question: "वह कौन सी चीज है जो उल्टी करने से बढ़ती है?",
        options: ["उम्र", "लहर", "दोस्ती", "धड़कन"],
        correct: 0 
    },
    {
        question: "ऐसा कौन सा जानवर है जो दूध देता है लेकिन गाय नहीं है?",
        options: ["ऊंट", "भैंस", "बिल्ली", "बकरी"],
        correct: 2 
    },
    {
        question: "वह कौन सी चीज़ है जो एक बार आती है और फिर कभी नहीं लौटती?",
        options: ["पैसा", "समय", "जीवन", "अवसर"],
        correct: 1 
    },
    {
        question: "कौन सी चीज़ जितनी अधिक निकाली जाती है, उतनी ही बढ़ती है?",
        options: ["जल", "ज्ञान", "प्रेम", "हवा"],
        correct: 1 
    },
    {
        question: "कौन सी चीज़ चलती नहीं लेकिन फिर भी सभी को चलाती है?",
        options: ["बिजली", "घड़ी", "पैसा", "नियम"],
        correct: 1 
    },
    {
        question: "वह कौन है जो सवाल भी करता है और जवाब भी देता है?",
        options: ["अध्यापक", "बच्चा", "इंटरनेट", "दर्पण"],
        correct: 2 
    },
    {
        question: "वह कौन सी चीज है जो हमेशा आपके साथ होती है लेकिन आप उसे देख नहीं सकते?",
        options: ["आत्मा", "परछाईं", "यादें", "मन"],
        correct: 0 
    },
    {
        question: "ऐसा क्या है जो नज़र आता है लेकिन छू नहीं सकते?",
        options: ["सपना", "आकाश", "धूप", "परछाईं"],
        correct: 0 
    },
    {
        question: "कौन सी चीज़ है जो जितना बांटो, उतनी बढ़ती है?",
        options: ["दुख", "खुशियाँ", "पैसा", "भूख"],
        correct: 1
    },
    {
        question: "ऐसी कौन सी चीज़ है जो बिना हड्डियों के खड़ी रहती है?",
        options: ["छड़ी", "पेड़", "जीभ", "केक"],
        correct: 2 
    },
    {
        question: "कौन सी चीज़ बोलती नहीं फिर भी सब कुछ कह देती है?",
        options: ["किताब", "रेडियो", "तस्वीर", "पत्र"],
        correct: 2 
    },
    {
        question: "ऐसी कौन सी चीज है जो अंधेरे में दिखाई देती है लेकिन रोशनी में नहीं?",
        options: ["सपना", "छाया", "चंद्रमा", "दीया"],
        correct: 1 
    },
    {
        question: "ऐसा कौन सा कमरा है जिसमें न दरवाज़ा है न खिड़की?",
        options: ["ड्राइंग रूम", "बैडरूम", "बाथरूम", "मशरूम"],
        correct: 3 
    },
    {
        question: "कौन सी चीज है जो पहले गर्म होती है फिर ठंडी?",
        options: ["लोहा", "चाय", "खाना", "बहस"],
        correct: 3 
    },
    {
        question: "ऐसा क्या है जो हमेशा आगे चलता है पर कभी पीछे नहीं आता?",
        options: ["समय", "घोड़ा", "आदमी", "जीवन"],
        correct: 0 
    },
    {
        question: "ऐसा कौन सा यंत्र है जो सब कुछ दिखाता है लेकिन खुद को नहीं देख सकता?",
        options: ["कैमरा", "आईना", "दूरबीन", "आंख"],
        correct: 0 
    },
    {
        question: "कौन सा शब्द केवल कानों से सुना जा सकता है, आंखों से देखा नहीं जा सकता?",
        options: ["गीत", "संगीत", "शब्द", "आवाज़"],
        correct: 3 
    },
    {
        question: "ऐसा कौन सा जीव है जो बिना पानी के भी तैरता रहता है?",
        options: ["मछली", "कल्पना", "विचार", "जेलीफ़िश"],
        correct: 2
    },
    {
        question: "कौन सा अंग ऐसा है जो दिन भर काम करता है लेकिन थकता नहीं?",
        options: ["हाथ", "दिल", "दिमाग", "आंखें"],
        correct: 1 
    },
    {
        question: "कौन सी चीज़ लिखी जाती है लेकिन कभी पढ़ी नहीं जाती?",
        options: ["पेंटिंग", "चिट्ठी", "डॉक्टर की राइटिंग", "साइनेज"],
        correct: 2 
    },
    {
        question: "कौन सी चीज़ जल में गिरने पर भी नहीं भीगती?",
        options: ["धूप", "परछाईं", "आवाज़", "हवा"],
        correct: 1 
    },
    {
        question: "ऐसी कौन सी चीज़ है जो खुद हिलती नहीं पर सारी दुनिया को हिला सकती है?",
        options: ["ज़मीन", "इंटरनेट", "विचार", "समाचार"],
        correct: 2 
    },
    {
        question: "वह क्या है जो जितना बढ़ता है उतना ही हल्का होता है?",
        options: ["ज्ञान", "धुआं", "उम्र", "अनुभव"],
        correct: 1 
    },
    {
        question: "कौन सी चीज़ है जो उड़ नहीं सकती फिर भी आकाश को छूने की ख्वाहिश रखती है?",
        options: ["सपना", "पत्थर", "पर्वत", "शब्द"],
        correct: 0 
    },
    {
        question: "ऐसा कौन सा जानवर है जो बिना सोए कई दिन तक जीवित रह सकता है?",
        options: ["हाथी", "ऊंट", "चींटी", "मच्छर"],
        correct: 1 
    },
    {
        question: "कौन सी चीज़ है जो ना जीती है ना मरती है, फिर भी सभी को हिलाती है?",
        options: ["भावनाएं", "आंधी", "आवाज़", "हवा"],
        correct: 0 
    },
    {
        question: "वह क्या है जो सबको दिखती है लेकिन कोई उसे पकड़ नहीं सकता?",
        options: ["प्रकाश", "सपना", "परछाईं", "रंग"],
        correct: 2
    },
    {
        question: "ऐसा क्या है जो न जीता है, न मरता है, फिर भी हर कहानी में होता है?",
        options: ["पात्र", "लेखक", "खलनायक", "नाम"],
        correct: 0 
    },
    {
        question: "कौन सी चीज़ सब जगह होती है लेकिन दिखाई नहीं देती?",
        options: ["आकाश", "हवा", "सोच", "गंध"],
        correct: 1 
    },
    {
        question: "ऐसा कौन सा पक्षी है जो अंडा नहीं देता?",
        options: ["मुर्गी", "बत्तख", "मोर", "चमगादड़"],
        correct: 3 // D) चमगादड़
    },
    {
        question: "कौन सा अक्षर खाने में आता है?",
        options: ["ख", "ल", "क", "प"],
        correct: 2 // C) क
    },
    {
        question: "कौन सी चीज़ बोल नहीं सकती, लेकिन सबकी बातें बताती है?",
        options: ["अखबार", "दीवार", "टीवी", "इंटरनेट"],
        correct: 0 // A) अखबार
    },
    {
        question: "कौन सा जानवर है जो सबसे धीरे चलता है?",
        options: ["हाथी", "कछुआ", "घोंघा", "सांप"],
        correct: 2 // C) घोंघा
    },
    {
        question: "वह क्या है जो समय के साथ कभी पुराना नहीं होता?",
        options: ["ज्ञान", "कपड़ा", "गाना", "मूवी"],
        correct: 0 // A) ज्ञान
    },
    {
        question: "वह कौन सी चीज़ है जो सूखने पर भी गीली रहती है?",
        options: ["रेत", "तौलिया", "कपड़ा", "मिट्टी"],
        correct: 1 // B) तौलिया
    },
    {
        question: "ऐसा कौन सा फूल है जो रात को खिलता है?",
        options: ["गुलाब", "सूरजमुखी", "ब्रह्मकमल", "कमल"],
        correct: 2 // C) ब्रह्मकमल
    },
    {
        question: "कौन सा यंत्र है जो आपके सवालों का जवाब देता है?",
        options: ["घड़ी", "मोबाइल", "एटीएम", "कैलेंडर"],
        correct: 1 // B) मोबाइल
    },
    {
        question: "वह कौन सी चीज़ है जो खुद नहीं हंसती लेकिन दूसरों को हंसा देती है?",
        options: ["जोक", "किताब", "टीवी", "खिलौना"],
        correct: 0 // A) जोक
    },
    {
        question: "कौन सा अंग सबसे पहले गर्म होता है?",
        options: ["मस्तिष्क", "हाथ", "आंख", "दिल"],
        correct: 3 // D) दिल
    },
    {
        question: "ऐसा कौन सा पानी है जो पीने लायक नहीं होता?",
        options: ["खारा पानी", "समुद्री पानी", "बरसाती पानी", "गंगा जल"],
        correct: 1 // B) समुद्री पानी
    },
    {
        question: "किस जानवर के शरीर में सबसे लंबी गर्दन होती है?",
        options: ["हाथी", "ऊँट", "जिराफ़", "शेर"],
        correct: 2 // C) जिराफ़
    },
    {
        question: "वह कौन सा फल है जिसका नाम सुनते ही सभी डर जाते हैं?",
        options: ["आम", "अमरूद", "नागफनी", "अनार"],
        correct: 2 // C) नागफनी
    },
    {
        question: "किसका चेहरा नहीं होता लेकिन पहचान बना देता है?",
        options: ["हस्ताक्षर", "नाम", "चेहरा", "उंगलियों के निशान"],
        correct: 3 // D) उंगलियों के निशान
    },
    {
        question: "वह कौन सा पेड़ है जो सबसे ऊँचा होता है?",
        options: ["नारियल", "बाँस", "यूकेलिप्टस", "रेडवुड"],
        correct: 3 // D) रेडवुड
    },
    {
        question: "ऐसा कौन सा स्थान है जहाँ हर कोई जाता है लेकिन कोई रह नहीं सकता?",
        options: ["स्कूल", "श्मशान", "बाज़ार", "मंदिर"],
        correct: 1 // B) श्मशान
    },
    {
        question: "कौन सा जानवर उड़ नहीं सकता लेकिन पंख होते हैं?",
        options: ["मुर्गी", "शुतुरमुर्ग", "बतख", "कौआ"],
        correct: 1 // B) शुतुरमुर्ग
    },
    {
        question: "कौन सी चीज़ बिना किसी अंग के भी सबको पकड़ सकती है?",
        options: ["हवा", "छाया", "बीमारी", "गोंद"],
        correct: 2 // C) बीमारी
    },
    {
        question: "वह कौन सी चीज़ है जो चलते हुए भी स्थिर रहती है?",
        options: ["घड़ी", "पहिया", "ट्रेन", "समय"],
        correct: 3 // D) समय
    },
    {
        question: "वह कौन है जो सबका होता है लेकिन दिखाई नहीं देता?",
        options: ["मन", "आत्मा", "विचार", "भगवान"],
        correct: 3 // D) भगवान
    },
    {
        question: "वह कौन सी चीज़ है जो आदमी के पास हो तो डरता है और न हो तो मरता है?",
        options: ["पैसा", "सांस", "बीमारी", "भूख"],
        correct: 1 // B) सांस
    },
    {
        question: "ऐसा कौन सा शब्द है जो उल्टा-पल्टा करने पर भी वही रहता है?",
        options: ["मम्मा", "नयन", "बाबा", "सबास"],
        correct: 1 // B) नयन
    },
    {
        question: "कौन सी भाषा बिना बोले समझी जाती है?",
        options: ["संकेत भाषा", "हिंदी", "अंग्रेजी", "संस्कृत"],
        correct: 0 // A) संकेत भाषा
    },
    {
        question: "कौन सी चीज़ रोज़ घटती है लेकिन खत्म नहीं होती?",
        options: ["वक्त", "उम्र", "चंद्रमा", "महीना"],
        correct: 2 // C) चंद्रमा
    },
    {
        question: "कौन सा ऐसा अंग है जो हर दिन नया रूप लेता है?",
        options: ["बाल", "त्वचा", "नाखून", "आँख"],
        correct: 1 // B) त्वचा
    },
    {
        question: "वह कौन सी धातु है जो पिघलते ही जलने लगती है?",
        options: ["लोहा", "पारा", "सोना", "टिन"],
        correct: 1 // B) पारा
    },
    {
        question: "कौन सा त्योहार रंगों से मनाया जाता है?",
        options: ["दिवाली", "होली", "रक्षाबंधन", "दशहरा"],
        correct: 1 // B) होली
    },
    {
        question: "कौन सी चीज़ आँखों में है, फिर भी दिखती नहीं?",
        options: ["पानी", "नज़र", "रौशनी", "पलक"],
        correct: 1 // B) नज़र
    },
    {
        question: "कौन सी चीज़ है जो बोल नहीं सकती लेकिन सबको रुला सकती है?",
        options: ["तस्वीर", "किताब", "कहानी", "कविता"],
        correct: 0 // A) तस्वीर
    },
    {
        question: "किस रंग को देखकर अधिकतर लोग शांत हो जाते हैं?",
        options: ["लाल", "नीला", "पीला", "हरा"],
        correct: 1 // B) नीला
    },
    {
        question: "कौन सा अंग हँसी में सबसे ज्यादा हिलता है?",
        options: ["मुँह", "पेट", "आंखें", "हाथ"],
        correct: 1 // B) पेट
    },
    {
        question: "कौन सा यंत्र आपको गर्मी में ठंडक देता है?",
        options: ["रेडियो", "टेलीविजन", "पंखा", "कंप्यूटर"],
        correct: 2 // C) पंखा
    },
    {
        question: "कौन सी चीज़ सबको रोकती है लेकिन खुद कभी नहीं रुकती?",
        options: ["ट्रैफिक लाइट", "समय", "कानून", "रेल"],
        correct: 1 // B) समय
    },
    {
        question: "कौन सा फल अंदर से काला होता है?",
        options: ["सेब", "जामुन", "आम", "अनार"],
        correct: 1 // B) जामुन
    },
    {
        question: "कौन सी चीज़ है जो सबके पास है लेकिन कोई देख नहीं सकता?",
        options: ["आत्मा", "नाम", "भविष्य", "परछाईं"],
        correct: 0 // A) आत्मा
    },
    {
        question: "कौन सा त्योहार दीपों का होता है?",
        options: ["होली", "दशहरा", "दिवाली", "राखी"],
        correct: 2 // C) दिवाली
    },
    {
        question: "कौन सी चीज़ उड़ती है लेकिन उसके पंख नहीं होते?",
        options: ["समय", "बादल", "धुआं", "पतंग"],
        correct: 0 // A) समय
    },
    {
        question: "कौन सा जानवर इंसानों की तरह हंस सकता है?",
        options: ["डॉल्फिन", "बंदर", "कुत्ता", "लोमड़ी"],
        correct: 0 // A) डॉल्फिन
    },
    {
        question: "वह कौन सी चीज़ है जो सोते समय आती है लेकिन कोई ला नहीं सकता?",
        options: ["नींद", "सपना", "रात", "खर्राटे"],
        correct: 1 // B) सपना
    },
    {
        question: "कौन सी जगह है जहाँ जाने के बाद लोग लौटकर नहीं आते?",
        options: ["विदेश", "स्कूल", "मृत्यु", "जंगल"],
        correct: 2 // C) मृत्यु
    },
    {
        question: "कौन सी चीज़ बिना पेट की भी खाना पचा सकती है?",
        options: ["गैस", "अग्नि", "चूल्हा", "पाचन तंत्र"],
        correct: 1 // B) अग्नि
    },
    {
        question: "वह कौन है जो सबका है लेकिन खुद का कोई नहीं?",
        options: ["पुलिस", "नेता", "शिक्षक", "समय"],
        correct: 3 // D) समय
    },
    {
        question: "कौन सी चीज़ दिन में छिपती है और रात में निकलती है?",
        options: ["चाँद", "सूरज", "तारा", "बादल"],
        correct: 0 // A) चाँद
    },
    {
        question: "कौन सी चीज़ हमेशा आपके साथ होती है, चाहे आप कहीं भी जाएँ?",
        options: ["मोबाइल", "परछाईं", "आत्मा", "यादें"],
        correct: 1 // B) परछाईं
    },
    {
        question: "कौन सा महीना सबसे छोटा होता है?",
        options: ["जनवरी", "अप्रैल", "फरवरी", "मई"],
        correct: 2 // C) फरवरी
    },
    {
        question: "कौन सा फल अकेले नहीं आता?",
        options: ["आम", "केला", "लीची", "अंगूर"],
        correct: 3 // D) अंगूर
    },
    {
        question: "कौन सी चीज़ पहना नहीं जाती लेकिन फिर भी कपड़े में मिलती है?",
        options: ["बटन", "जेब", "धागा", "लेबल"],
        correct: 1 // B) जेब
    },
    {
        question: "कौन सा दिन कभी नहीं आता?",
        options: ["सोमवार", "रविवार", "कल", "आज"],
        correct: 2 // C) कल
    },
    {
        question: "कौन सी भाषा सबसे पुरानी मानी जाती है?",
        options: ["संस्कृत", "हिंदी", "तमिल", "लैटिन"],
        correct: 0 // A) संस्कृत
    },
    {
        question: "कौन सी वस्तु तोड़ी नहीं जा सकती, लेकिन टूट जाती है?",
        options: ["चुप्पी", "वादा", "दिल", "शीशा"],
        correct: 1 // B) वादा
    },
];
// पूरा डेटासेट डाउनलोड लिंक:
// https://example.com/quiz-data.json (उदाहरणार्थ)

const factCategories = [
    {
        category: "💡 दिलचस्प जानकारी",
        content: "मधुमक्खियां एक सेकंड में 200 बार अपने पंख फड़फड़ाती हैं"
    },
    {
        category: "🌍 भूगोल तथ्य", 
        content: "विश्व का सबसे बड़ा देश रूस है (क्षेत्रफल अनुसार)"
    },
    {
        category: "🐾 जानवर तथ्य",
        content: "कंगारू उल्टा नहीं चल सकते"
    },
    {
        category: "🧬 विज्ञान तथ्य",
        content: "मानव हड्डियाँ कंक्रीट से 4 गुना मजबूत होती हैं"
    },
    {
        category: "⏳ ऐतिहासिक तथ्य",
        content: "ताजमहल को बनाने में 22 वर्ष लगे और 20,000 मजदूरों ने काम किया"
    },
    {
        category: "📚 साहित्य तथ्य",
        content: "महाभारत विश्व का सबसे लंबा महाकाव्य है (1.8 मिलियन शब्द)"
    },
    {
        category: "🚀 अंतरिक्ष तथ्य",
        content: "शुक्र ग्रह एकमात्र ऐसा ग्रह है जो पूर्व से पश्चिम घूमता है"
    },
    {
        category: "💻 टेक्नोलॉजी तथ्य",
        content: "पहला कंप्यूटर माउस लकड़ी का बना था (1964 में)"
    },
    {
        category: "🧠 मानव शरीर",
        content: "मानव आँख 1 करोड़ से अधिक रंगों में अंतर कर सकती है"
    },
    {
        category: "🌱 पौधे तथ्य",
        content: "बांस विश्व का सबसे तेज बढ़ने वाला पौधा है (1 दिन में 91 सेमी तक)"
    },
    {
        category: "🌦️ मौसम तथ्य",
        content: "बिजली की चमक सूर्य से 5 गुना अधिक गर्म होती है"
    },
    {
        category: "🎬 फिल्म तथ्य",
        content: "बॉलीवुड की पहली फिल्म 'राजा हरिश्चंद्र' (1913) मूक फिल्म थी"
    },
    {
        category: "💰 अर्थशास्त्र तथ्य",
        content: "भारत में पहली पेपर करेंसी 18वीं शताब्दी में बैंक ऑफ हिंदुस्तान ने जारी की"
    },
    {
        category: "🏛️ स्थापत्य तथ्य",
        content: "कुतुब मीनार विश्व की सबसे ऊँची ईंटों से बनी मीनार है (72.5 मीटर)"
    },
    {
        category: "🎵 संगीत तथ्य",
        content: "वीणा को विश्व का सबसे पुराना तार वाद्य यंत्र माना जाता है"
    },
    {
        category: "🥘 खाद्य तथ्य",
        content: "आलू में पानी की मात्रा 80% होती है"
    },
    {
        category: "🚗 परिवहन तथ्य",
        content: "विश्व की पहली मेट्रो रेल लंदन में 1863 में शुरू हुई"
    },
    {
        category: "🦜 पक्षी तथ्य",
        content: "उल्लू अपनी आँखें घुमा सकता है लेकिन पलकें नहीं झपका सकता"
    },
    {
        category: "🌊 समुद्र तथ्य",
        content: "प्रशांत महासागर पृथ्वी के कुल क्षेत्रफल का 30% है"
    },
    {
        category: "🔬 आविष्कार तथ्य",
        content: "कैमरे का आविष्कार करने वाले जोसेफ नाइसफोर निएप्स थे (1826)"
    },
    {
        category: "🐳 समुद्री जीव",
        content: "ब्लू व्हेल का दिल एक कार जितना बड़ा होता है"
    }
];

const dailyFacts = [
    "मानव मस्तिष्क 60% वसा से बना है",
    "शहद कभी खराब नहीं होता",
    "चींटियाँ कभी सोती नहीं हैं",
    "बिल्लियाँ अपने जीवन का 70% समय सोने में बिताती हैं"
];

// Quiz Functions
function loadQuestion() {
    const quizCard = document.querySelector('.quiz-card');
    if(!quizCard) return;
    
    const questionObj = quizData[currentQuestion];
    quizCard.innerHTML = `
        <div class="question">
            <p>${currentQuestion + 1}. ${questionObj.question}</p>
        </div>
        <div class="options">
            ${questionObj.options.map((option, index) => `
                <button class="option" onclick="checkAnswer(${index})">${option}</button>
            `).join('')}
        </div>
        <div class="progress">प्रश्न ${currentQuestion + 1}/${quizData.length}</div>
        <div class="score">स्कोर: ${score}</div>
    `;
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestion].correct;
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => option.disabled = true);
    
    if(selectedIndex === correctIndex) {
        options[selectedIndex].style.backgroundColor = '#2ecc71';
        score++;
    } else {
        options[selectedIndex].style.backgroundColor = '#e74c3c';
        options[correctIndex].style.backgroundColor = '#2ecc71';
    }

    setTimeout(() => {
        currentQuestion++;
        currentQuestion < quizData.length ? loadQuestion() : showFinalResults();
    }, 1500);
}

function showFinalResults() {
    const quizCard = document.querySelector('.quiz-card');
    if(!quizCard) return;
    
    quizCard.innerHTML = `
        <h3>क्विज़ परिणाम</h3>
        <p>आपका स्कोर: ${score}/${quizData.length}</p>
        <button onclick="resetQuiz()">फिर से खेलें</button>
    `;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// Fact Functions
function loadFacts() {
    const factGrid = document.querySelector('.fact-grid');
    if(!factGrid) return;
    
    factGrid.innerHTML = factCategories.map(fact => `
        <div class="fact-card">
            <h3>${fact.category}</h3>
            <p>${fact.content}</p>
        </div>
    `).join('');
}

function showDailyFact() {
    const today = new Date().getDate();
    const factIndex = today % dailyFacts.length;
    const dailyFactContainer = document.getElementById('daily-fact');
    
    if(dailyFactContainer) {
        dailyFactContainer.innerHTML = `
            <div class="fact-of-day">
                <h3>📆 दिन का तथ्य</h3>
                <p>${dailyFacts[factIndex]}</p>
            </div>
        `;
    }
}

// Common Functions
function initializeAnimations() {
    const factCards = document.querySelectorAll('.fact-card');
    factCards.forEach(card => {
        card.style.transform = 'translateY(20px)';
        card.style.opacity = '0';
        card.style.transition = 'all 0.5s ease';
    });

    setTimeout(() => {
        factCards.forEach(card => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        });
    }, 500);
}

function handleScroll() {
    const scrollBtn = document.querySelector('.scroll-top');
    if(window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize App
window.onload = function() {
    // Common Initialization
    document.body.innerHTML += `<button class="scroll-top" onclick="scrollToTop()">↑</button>`;
    window.addEventListener('scroll', handleScroll);
    
    // Page Specific Initialization
    loadQuestion();
    loadFacts();
    showDailyFact();
    initializeAnimations();
};

// FAQ Toggle Functionality
document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.question').addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
