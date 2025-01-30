/* 
This file contains just the information about the demands, their salar and job nothing more
*/
// alt + 0128 -> euro sign

const arrEnglishBoys = [
	["\t\tDesignation / Job\t\t", "\t\tSalary\t\t", "\t\tRequired Age\t\t", "\t\tQuota\t\t", "\t\tAdditional Requirements\t\t"],
	// ["Head Chef", "Euro 1200 - Euro 1800"],
	// ["Italian Cook", "Euro 800 - Euro 1000"],
	// ["Continental Cook", "Euro 800 - Euro 1000"],
	// ["Sushi Cook", "Euro 800 - Euro 1000"],
	[
		"Pastry Cook", 
		"€800 - €1000", 
		"Above 20", 
		"As many as selected this season", 
		"1. Must have working experience (training will not do)"
	],
	[
		"Continental Cook", 
		"€800 - €1000", 
		"Above 20 (Best: Above 25-26)", 
		"As many as selected this season", 
		"1. Must have working experience (training will not do)"
	],
	[
		"Cook", 
		"€800 - €1000", 
		"Above 20", 
		"As many as selected this season", 
		"1. Must have working working experience (training will not do)"
	],
	[
		"Kitchen Helper / Assistant Cook", 
		"€700 - €800", 
		"Above 20", 
		"Very Few * Around 0 - 1", 
		"1. Must have good English and should be related to hospitality line."
	],
	// ["Baker", "Euro 750 - Euro 1000"],
	// ["Barista", "Euro 700 - Euro 800"],
	[
		"Bartender", 
		"€750 - €1000", 
		"Above 20", 
		"As many as selected this season", 
		"1. Must be good with English speaking.\n2. Must be experienced (training will not do)"
	],
	// ["Pizza Maker", "Euro 750 - Euro 800"],
	[
		"Waiter", 
		"€700 - €800", 
		"Above 20", 
		"As many as selected this season", 
		"1. Must be good with English speaking.\n\
		2. Must be good looking (tall, handsome and charming with words)\n\
		3. Should know how to serve."
	],
	// ["Welder", "Euro 750 - Euro 1000"],
	// ["Eletricial", "Euro 750 - Euro 900"],
	[
		"Butcher", 
		"€920",
		"Above 22",
		"Around 10", 
		"1. Must know English Language.\n\
		2. Should be fluent with meat cutting."
	],
	[
		"Janapese Chef (Sushi Chef) ", 
		"€900 - €1800",
		"Above 20",
		"As many as selected this season",
		"1. Must know his craft\n\
		2. Should be Experienced (trainig will not do).\n\
		3. (optional) Abroad experience is more viable."
	],
	[
		"Wok Chef (Chinese & Asian Cuisine)", 
		"€900 - €1800",
		"Above 20",
		"As many as selected this season",
		"1. Must know his craft\n\
		2. Should be Experienced (trainig will not do).\n\
		3. (optional) Abroad experience is more viable."
	],
	[
		"All Rounder Chef ", 
		"€900 - €1800",
		"Above 20",
		"As many as selected this season",
		"1. Must know his craft\n\
		2. Should be Experienced (trainig will not do).\n\
		3. (optional) Abroad experience is more viable."
	],
	[
		"Stonemason (person working with Marbels)", 
		"€900 - €1000",
		"Above -",
		"Around 10",
		"1. Must know crafting with stones.\n\
		2. Should know basic to normal English.\n"
	],
	[
		"Cowherd",
		"€500 - €600",
		"45 or Above 45",
		"1",
		"1. Must know how to work with machinery for farms.\n\
		2. Should know cow herding.\n\
		3. Should know basic to normal English speaking."
	]
]

const arrEnglishGirls = [
	[
		"\t\tDesignation / Job\t\t", "\t\tSalary\t\t", "\t\tRequired Age\t\t", "\t\tQuota\t\t", "\t\tAdditional Requirements\t\t"
	],
	[
		"Waitress", 
		"€700 - €800",
		"20 - 30 (Abroad Experienced: Above 30)",
		"As many as selected this season",
		"1. Must have good English speaking.\n\
		2. Should be good looking.\n\
		3. Should know how to serve or know waitress duties.\n"
	],
	[
		"Housekeeping / Chambermaid", 
		"€700 - €800",
		"20 - 30 (Abroad Experienced: Above 30)",
		"As many as selected this season",
		"1. Must have good English Speaking.\n\
		2. Should be good looking.\n\
		3. Should know duties and responsibilities of a housekeeper / chambermaid."
	],
	[
		"Bartender", 
		"€700 -  €800",
		"20 - 30 (Abroad Experienced: Above 30)",
		"As many as selected this season",
		"1. Must be experienced training will not cut it.\n\
		2. Should be good in English Speaking.\n"
	],
	[
		"Housemaid", 
		"€400",
		"Above 20 / Below 54",
		"As many as selected throughout the year",
		"1. Should know basic to average English.\n\
		2. May need to learn Basic Greek Language as well.\n"
	],
	// ["Receptionist", "Euro 800 - Euro 900"],
	// ["Cashier", "Euro 800 - Euro 900"],
	// ["Spa Therapist", "Euro 700 - Euro 1000"],
	// ["Barista", "Euro 700 - Euro 800"],
]



const arrNepaliBoys = [
	["\t\tपदनाम / काम\t\t", "\t\tतलब\t\t", "\t\tआवश्यक उमेर\t\t", "\t\tकोटा\t\t", "\t\tअतिरिक्त आवश्यकताहरू\t\t"],
	// ["हेद सेफ", "यूरो १२०० - यूरो १८००"],
	// ["इटालियन कुक", "यूरो ८०० - यूरो १००० "],
	// ["कन्टिनेन्टल कुक ", "यूरो ८०० - यूरो १००० "],
	// ["सुशी कुक", "यूरो ८०० - यूरो १०००"],
	[
		"पेस्त्री कुक", 
		"€८०० - €१००० ",
		"20 भन्दा माथि", 
		"यस सिजन जति छनोट भएका छन्", 
		"१. काम गर्ने अनुभव हुनुपर्दछ (प्रशिक्षणले गर्दैन)"
	],
	[
		"कन्टिनेन्टल कुक", 
		"€८०० - €१०००", 
		"20 भन्दा माथि (उत्तम: 25-26 माथि)", 
		"यस सिजन जति छनोट भएका छन्", 
		"१. काम गर्ने अनुभव हुनुपर्दछ (प्रशिक्षणले गर्दैन)"
	],
	[
		"कुक", 
		"€८०० - €१०००",
		"20 भन्दा माथि", 
		"यस सिजन जति छनोट भएका छन्", 
		"१. काम गर्ने अनुभव हुनुपर्दछ (प्रशिक्षणले गर्दैन)"
	],
	[
		"किचन हेल्पर / सहायक कुक", 
		"€७००- €८००", 
		"20 भन्दा माथि", 
		"धेरै थोरै * लगभग 0 - 1", 
		"1. राम्रो अंग्रेजी हुनुपर्दछ र आतिथ्यता लाइनसँग सम्बन्धित हुनुपर्छ।"
	],
	// ["बेकर", "यूरो ७५० - यूरो १०००"],
	// ["बारिस्ता", "यूरो ७०० - यूरो ८००"],
	[
		"बारटेन्डर", 
		"€७५०- €१०००", 
		"20 भन्दा माथि", 
		"यस सिजन जति छनोट भएका छन्", 
		"१. अंग्रेजी बोल्न राम्रो हुनुपर्दछ।\n२. अनुभवी हुनुपर्दछ (प्रशिक्षणले गर्दैन)"
	],
	// ["पिज्जा मेकर ", "यूरो ७५० - यूरो १००० "],
	[
		"वेटर", 
		"€७००- €८००", 
		"20 भन्दा माथि", 
		"यस सिजन जति छनोट भएका छन्", 
		"१. अंग्रेजी बोल्न राम्रो हुनुपर्छ।\n\
		2. राम्रो देखिनु पर्छ (अग्लो, सुन्दर र शब्दहरु संग आकर्षक)\n\
		३. सेवा गर्ने तरिका जान्नुपर्छ।"
	],
	// ["वेल्दर", "यूरो ७५० - यूरो १००० "],
	// ["एलेक्त्रिसियन", "यूरो ७५० - यूरो ९०० "],
	// ["कसै / मासु काट्ने", "यूरो ९२०"],
	[
		"कसाई", 
		"€९२०",
		"२२ भन्दा माथि",
		"करिब १०", 
		"१. अंग्रेजी भाषा जान्नु पर्छ।\n\
		2. मासु काटन मा धाराप्रवाह हुनुपर्छ।"
	],
	// ["जापनिज सेफ (सुशी सेफ)", "यूरो ८०० - यूरो १८००"],
	[
		"जापनिज शेफ (सुशी शेफ)", 
		"€९०० - €१८००",
		"20 भन्दा माथि",
		"यस सिजन जति छनोट भएका छन्",
		"१. उसको कला जान्नुपर्छ\n\
		2. अनुभवी हुनुपर्दछ (प्रशिक्षणले गर्दैन)।\n\
		3. (वैकल्पिक) विदेश अनुभव अधिक व्यवहार्य छ।"
	],
/* 	["वेाक सेफ (चाइनिज र एसियान कुजिन)", "यूरो ८०० - यूरो १८००"],
	["अल राउन्डर सेफ", "यूरो ८०० - यूरो १८००"],
	["Stonemason (मार्बल संग काम गर्ने व्यक्ति)", "यूरो ९०० - यूरो १०००"], */
	[
		"वोक शेफ (चिनियाँ र एशियाली खाना)", 
		"€९०० - €१८००",
		"20 भन्दा माथि",
		"यस सिजन जति छनोट भएका छन्",
		"१. उसको कला जान्नुपर्छ\n\
		2. अनुभवी हुनुपर्दछ (प्रशिक्षणले गर्दैन)।\n\
		3. (वैकल्पिक) विदेश अनुभव अधिक व्यवहार्य छ।"
	],
	[
		"अल राउन्डर शेफ", 
		"€९००- €१८००",
		"20 भन्दा माथि",
		"यस सिजन जति छनोट भएका छन्",
		"१. उसको कला जान्नुपर्छ\n\
		2. अनुभवी हुनुपर्दछ (प्रशिक्षणले गर्दैन)।\n\
		3. (वैकल्पिक) विदेश अनुभव अधिक व्यवहार्य छ।"
	],
	[
		"स्टोनमेसन (मार्बेलसँग काम गर्ने व्यक्ति)", 
		"€९००- €१०००",
		"माथि -",
		"करिब १०",
		"१. ढुङ्गाले शिल्प गर्न जान्नु पर्छ।\n\
		2. सामान्य अङ्ग्रेजी देखि आधारभूत जान्नु पर्छ।\n"
	],
	[
		"गोठालो",
		"€५००- €६००",
		"४५ वा ४५ भन्दा माथि",
		"१",
		"१. फार्महरूको लागि मेसिनरीसँग कसरी काम गर्ने भनेर जान्नुपर्छ।\n\
		2. गाई गोठालो जान्नु पर्छ।\n\
		3. सामान्य अंग्रेजी बोल्ने आधारभूत जान्नु पर्छ।"
	]
]

const arrNepaliGirls = [
	["\t\tपदनाम / काम\t\t", "\t\tतलब\t\t", "\t\tआवश्यक उमेर\t\t", "\t\tकोटा\t\t", "\t\tअतिरिक्त आवश्यकताहरू\t\t"],
	[
		"वेट्रेस", 
		"€७०० - €८००",
		"20 - 30 (विदेशमा अनुभवी: 30 भन्दा माथि)",
		"यस सिजन जति छनोट भएका छन्",
		"१. राम्रो अंग्रेजी बोल्ने हुनुपर्दछ।\n\
		2. राम्रो देखिनु पर्छ।\n\
		३. कसरी सेवा गर्ने वा वेट्रेसको कर्तव्य थाहा पाउनुपर्छ।\n"
	],
	[
		"हाउसकीपिङ / चेम्बरमेड", 
		"€७०० - €८००",
		"20 - 30 (विदेशमा अनुभवी: 30 भन्दा माथि)",
		"यस सिजन जति छनोट भएका छन्",
		"१. राम्रो अंग्रेजी बोल्ने हुनुपर्दछ।\n\
		2. राम्रो देखिनु पर्छ।\n\
		3. घरपरिवार / चेम्बरमेडको कर्तव्य र जिम्मेवारीहरू थाहा हुनुपर्छ।"
	],
	[
		"बारटेन्डर", 
		"€७०० - €८००",
		"20 - 30 (विदेशमा अनुभवी: 30 भन्दा माथि)",
		"यस सिजन जति छनोट भएका छन्",
		"१. अनुभवी हुनैपर्छ तालिमले काट्दैन।\n\
		२. अंग्रेजी बोल्नमा राम्रो हुनुपर्छ।\n"
	],
	[
		"घरेलु कामदार", 
		"€४००",
		"२० भन्दा माथि / ५४ भन्दा तल",
		"वर्षभरि चयन गरिएका जति धेरै",
		"१. आधारभूत देखि औसत अंग्रेजी जान्नु पर्छ।\n\
		२. आधारभूत ग्रीक भाषा पनि सिक्नु पर्ने हुन सक्छ।\n"
	],
	// ["रेसेप्सनीस्त", "यूरो ८०० - यूरो ९००"],
	// ["क्यसिएर", "यूरो ८०० - यूरो ९००"],
	// ["स्पा थेरापिस्ट", "यूरो ७०० - यूरो १०००"],
	// ["बारिस्ता", "यूरो ७०० - यूरो ८००"],
]
