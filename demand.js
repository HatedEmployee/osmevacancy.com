/* 
This file contains just the information about the demands, their salar and job nothing more
*/
// alt + 0128 -> euro sign

const arrEnglishBoys = [
	["\t\tDesignation / Job\t\t", "\t\tSalary\t\t", "\t\tRequired Age\t\t", "\t\tQuota\t\t", "\t\tAdditional Requirements\t\t", "\t\tBenefits\t\t"],
	// ["Head Chef", "Euro 1200 - Euro 1800"],
	// ["Italian Cook", "Euro 800 - Euro 1000"],
	// ["Continental Cook", "Euro 800 - Euro 1000"],
	// ["Sushi Cook", "Euro 800 - Euro 1000"],
	[
		"Pastry Cook", 
		"€800 - €1000", 
		"Above 20", 
		"As many as selected this season", 
		"1. Must have working experience (training will not do)",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	[
		"Continental Cook", 
		"€800 - €1000", 
		"Above 20 (Best: Above 25-26)", 
		"As many as selected this season", 
		"1. Must have working experience (training will not do)",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	[
		"Cook", 
		"€800 - €1000", 
		"Above 20", 
		"As many as selected this season", 
		"1. Must have working working experience (training will not do)",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	[
		"Kitchen Helper / Assistant Cook", 
		"€700 - €800", 
		"Above 20", 
		"Very Few * Around 0 - 1", 
		"1. Must have good English and should be related to hospitality line.",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	// ["Baker", "Euro 750 - Euro 1000"],
	// ["Barista", "Euro 700 - Euro 800"],
	[
		"Bartender", 
		"€750 - €1000", 
		"Above 20", 
		"As many as selected this season", 
		"1. Must be good with English speaking.\n2. Must be experienced (training will not do)",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	// ["Pizza Maker", "Euro 750 - Euro 800"],
	[
		"Waiter", 
		"€700 - €800", 
		"Above 20", 
		"As many as selected this season", 
		"1. Must be good with English speaking.\n\
		2. Must be good looking (tall, handsome and charming with words)\n\
		3. Should know how to serve.",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	// ["Welder", "Euro 750 - Euro 1000"],
	// ["Eletricial", "Euro 750 - Euro 900"],
	[
		"Butcher", 
		"€920",
		"Above 22",
		"Around 10", 
		"1. Must know English Language.\n\
		2. Should be fluent with meat cutting.",
		"1. Accommodation, Fooding should be paid by the employee."
	],
	[
		"Janapese Chef (Sushi Chef) ", 
		"€900 - €1800",
		"Above 20",
		"As many as selected this season",
		"1. Must know his craft\n\
		2. Should be Experienced (trainig will not do).\n\
		3. (optional) Abroad experience is more viable.",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	[
		"Wok Chef (Chinese & Asian Cuisine)", 
		"€900 - €1800",
		"Above 20",
		"As many as selected this season",
		"1. Must know his craft\n\
		2. Should be Experienced (trainig will not do).\n\
		3. (optional) Abroad experience is more viable.",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	[
		"All Rounder Chef ", 
		"€900 - €1800",
		"Above 20",
		"As many as selected this season",
		"1. Must know his craft\n\
		2. Should be Experienced (trainig will not do).\n\
		3. (optional) Abroad experience is more viable.",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	[
		"Stonemason (person working with Marbels)", 
		"€900 - €1000",
		"Above -",
		"Around 10",
		"1. Must know crafting with stones.\n\
		2. Should know basic to normal English.\n",
		"-"
	],
	[
		"Cowherd",
		"€500 - €600",
		"45 or Above 45",
		"1",
		"1. Must know how to work with machinery for farms.\n\
		2. Should know cow herding.\n\
		3. Should know basic to normal English speaking.",
		"1. Free shared accommodation\n\
		2. Free Food\n"
	],
	[
		"Labourer",
		"€650",
		"Above 23 and below 45",
		"Around 5",
		"1. Must be physically fit.\n\
		2. Must know basic to intermediate English.\n",
		"1. Free shared accomodation\n\
		2. Free Food\n"
	],
	[
		"Life Guard (Swimming Pool)", 
		"€700 - €800", 
		"Above 20", 
		"10", 
		"1. Must have working experience (training will not do).\n\
		2. Must be physically fit.\n\
		3. Incase of fatality, our office will not to be blamed.",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
]

const arrEnglishGirls = [
	[
		"\t\tDesignation / Job\t\t", "\t\tSalary\t\t", "\t\tRequired Age\t\t", "\t\tQuota\t\t", "\t\tAdditional Requirements\t\t", "\t\tBenefits\t\t"
	],
	[
		"Waitress", 
		"€700 - €800",
		"20 - 30 (Abroad Experienced: Above 30)",
		"As many as selected this season",
		"1. Must have good English speaking.\n\
		2. Should be good looking.\n\
		3. Should know how to serve or know waitress duties.\n",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	[
		"Housekeeping / Chambermaid", 
		"€700 - €800",
		"20 - 30 (Abroad Experienced: Above 30)",
		"As many as selected this season",
		"1. Must have good English Speaking.\n\
		2. Should be good looking.\n\
		3. Should know duties and responsibilities of a housekeeper / chambermaid.",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	[
		"Bartender", 
		"€700 -  €800",
		"20 - 30 (Abroad Experienced: Above 30)",
		"As many as selected this season",
		"1. Must be experienced training will not cut it.\n\
		2. Should be good in English Speaking.\n",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		(optional) Round Ticket during off-seasons"
	],
	[
		"Housemaid", 
		"€400",
		"Above 20 / Below 54",
		"As many as selected throughout the year",
		"1. Should know basic to average English.\n\
		2. May need to learn Basic Greek Language as well.\n",
		"1. Free shared accommodation\n\
		2. Free Food\n\
		3. Social Secrity Compensation\n\
		4. Private Medical Insurance\n\
		After Four years, ticket provided by employer."
	],
	// ["Receptionist", "Euro 800 - Euro 900"],
	// ["Cashier", "Euro 800 - Euro 900"],
	// ["Spa Therapist", "Euro 700 - Euro 1000"],
	// ["Barista", "Euro 700 - Euro 800"],
]



const arrNepaliBoys = [
	["\t\tपदनाम / काम\t\t", "\t\tतलब\t\t", "\t\tआवश्यक उमेर\t\t", "\t\tकोटा\t\t", "\t\tअतिरिक्त आवश्यकताहरू\t\t", "\t\tलाभहरू\t\t"],
	// ["हेद सेफ", "यूरो १२०० - यूरो १८००"],
	// ["इटालियन कुक", "यूरो ८०० - यूरो १००० "],
	// ["कन्टिनेन्टल कुक ", "यूरो ८०० - यूरो १००० "],
	// ["सुशी कुक", "यूरो ८०० - यूरो १०००"],
	[
		"पेस्त्री कुक", 
		"€८०० - €१००० ",
		"20 भन्दा माथि", 
		"यस सिजन जति छनोट भएका छन्", 
		"१. काम गर्ने अनुभव हुनुपर्दछ (प्रशिक्षणले गर्दैन)",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
	],
	[
		"कन्टिनेन्टल कुक", 
		"€८०० - €१०००", 
		"20 भन्दा माथि (उत्तम: 25-26 माथि)", 
		"यस सिजन जति छनोट भएका छन्", 
		"१. काम गर्ने अनुभव हुनुपर्दछ (प्रशिक्षणले गर्दैन)",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
	],
	[
		"कुक", 
		"€८०० - €१०००",
		"20 भन्दा माथि", 
		"यस सिजन जति छनोट भएका छन्", 
		"१. काम गर्ने अनुभव हुनुपर्दछ (प्रशिक्षणले गर्दैन)",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
	],
	[
		"किचन हेल्पर / सहायक कुक", 
		"€७००- €८००", 
		"20 भन्दा माथि", 
		"धेरै थोरै * लगभग 0 - 1", 
		"1. राम्रो अंग्रेजी हुनुपर्दछ र आतिथ्यता लाइनसँग सम्बन्धित हुनुपर्छ।",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
	],
	// ["बेकर", "यूरो ७५० - यूरो १०००"],
	// ["बारिस्ता", "यूरो ७०० - यूरो ८००"],
	[
		"बारटेन्डर", 
		"€७५०- €१०००", 
		"20 भन्दा माथि", 
		"यस सिजन जति छनोट भएका छन्", 
		"१. अंग्रेजी बोल्न राम्रो हुनुपर्दछ।\n२. अनुभवी हुनुपर्दछ (प्रशिक्षणले गर्दैन)",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
	],
	// ["पिज्जा मेकर ", "यूरो ७५० - यूरो १००० "],
	[
		"वेटर", 
		"€७००- €८००", 
		"20 भन्दा माथि", 
		"यस सिजन जति छनोट भएका छन्", 
		"१. अंग्रेजी बोल्न राम्रो हुनुपर्छ।\n\
		2. राम्रो देखिनु पर्छ (अग्लो, सुन्दर र शब्दहरु संग आकर्षक)\n\
		३. सेवा गर्ने तरिका जान्नुपर्छ।",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
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
		2. मासु काटन मा धाराप्रवाह हुनुपर्छ।",
		"१. आवास, खाना कर्मचारीले भुक्तानी गर्नुपर्छ।"
	],
	// ["जापनिज सेफ (सुशी सेफ)", "यूरो ८०० - यूरो १८००"],
	[
		"जापनिज शेफ (सुशी शेफ)", 
		"€९०० - €१८००",
		"20 भन्दा माथि",
		"यस सिजन जति छनोट भएका छन्",
		"१. उसको कला जान्नुपर्छ\n\
		2. अनुभवी हुनुपर्दछ (प्रशिक्षणले गर्दैन)।\n\
		3. (वैकल्पिक) विदेश अनुभव अधिक व्यवहार्य छ।",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
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
		3. (वैकल्पिक) विदेश अनुभव अधिक व्यवहार्य छ।",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
	],
	[
		"अल राउन्डर शेफ", 
		"€९००- €१८००",
		"20 भन्दा माथि",
		"यस सिजन जति छनोट भएका छन्",
		"१. उसको कला जान्नुपर्छ\n\
		2. अनुभवी हुनुपर्दछ (प्रशिक्षणले गर्दैन)।\n\
		3. (वैकल्पिक) विदेश अनुभव अधिक व्यवहार्य छ।",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
	],
	[
		"स्टोनमेसन (मार्बेलसँग काम गर्ने व्यक्ति)", 
		"€९००- €१०००",
		"माथि -",
		"करिब १०",
		"१. ढुङ्गाले शिल्प गर्न जान्नु पर्छ।\n\
		2. सामान्य अङ्ग्रेजी देखि आधारभूत जान्नु पर्छ।\n",
		"-"
	],
	[
		"गोठालो",
		"€५००- €६००",
		"४५ वा ४५ भन्दा माथि",
		"१",
		"१. फार्महरूको लागि मेसिनरीसँग कसरी काम गर्ने भनेर जान्नुपर्छ।\n\
		2. गाई गोठालो जान्नु पर्छ।\n\
		3. सामान्य अंग्रेजी बोल्ने आधारभूत जान्नु पर्छ।",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n"
	],
	[
		"मजदुर",
		"€६५०",
		"२३ माथि र ४५ भन्दा कम",
		"करिब ५",
		"१. शारीरिक रूपमा फिट हुनुपर्छ।\n\
		2. आधारभूत देखि मध्यवर्ती अंग्रेजी जान्नु पर्छ।\n",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n"
	],
	[
		"लाइफ गार्ड (स्विमिङ पुल)", 
		"€७०० - €८००", 
		"२० भन्दा माथि", 
		"१०", 
		"१. काम गर्ने अनुभव हुनुपर्छ (तालिमले काम गर्दैन)।\n\
		२. शारीरिक रूपमा तन्दुरुस्त हुनुपर्छ।\n\
		३. मृत्यु भएमा, हाम्रो कार्यालयलाई दोष दिइने छैन।",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		४. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनको समयमा राउन्ड टिकट"
	]
]

const arrNepaliGirls = [
	["\t\tपदनाम / काम\t\t", "\t\tतलब\t\t", "\t\tआवश्यक उमेर\t\t", "\t\tकोटा\t\t", "\t\tअतिरिक्त आवश्यकताहरू\t\t", "\t\tलाभहरू\t\t"],
	[
		"वेट्रेस", 
		"€७०० - €८००",
		"20 - 30 (विदेशमा अनुभवी: 30 भन्दा माथि)",
		"यस सिजन जति छनोट भएका छन्",
		"१. राम्रो अंग्रेजी बोल्ने हुनुपर्दछ।\n\
		2. राम्रो देखिनु पर्छ।\n\
		३. कसरी सेवा गर्ने वा वेट्रेसको कर्तव्य थाहा पाउनुपर्छ।\n",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
	],
	[
		"हाउसकीपिङ / चेम्बरमेड", 
		"€७०० - €८००",
		"20 - 30 (विदेशमा अनुभवी: 30 भन्दा माथि)",
		"यस सिजन जति छनोट भएका छन्",
		"१. राम्रो अंग्रेजी बोल्ने हुनुपर्दछ।\n\
		2. राम्रो देखिनु पर्छ।\n\
		3. घरपरिवार / चेम्बरमेडको कर्तव्य र जिम्मेवारीहरू थाहा हुनुपर्छ।",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
	],
	[
		"बारटेन्डर", 
		"€७०० - €८००",
		"20 - 30 (विदेशमा अनुभवी: 30 भन्दा माथि)",
		"यस सिजन जति छनोट भएका छन्",
		"१. अनुभवी हुनैपर्छ तालिमले काट्दैन।\n\
		२. अंग्रेजी बोल्नमा राम्रो हुनुपर्छ।\n",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		(वैकल्पिक) अफ-सिजनहरूमा राउन्ड टिकट"
	],
	[
		"घरेलु कामदार", 
		"€४००",
		"२० भन्दा माथि / ५४ भन्दा तल",
		"वर्षभरि चयन गरिएका जति धेरै",
		"१. आधारभूत देखि औसत अंग्रेजी जान्नु पर्छ।\n\
		२. आधारभूत ग्रीक भाषा पनि सिक्नु पर्ने हुन सक्छ।\n",
		"१. नि:शुल्क साझा आवास\n\
		२. नि:शुल्क खाना\n\
		३. सामाजिक सुरक्षा क्षतिपूर्ति\n\
		4. निजी चिकित्सा बीमा\n\
		चार वर्षपछि रोजगारदाताले टिकट उपलब्ध गराए "
	],
	// ["रेसेप्सनीस्त", "यूरो ८०० - यूरो ९००"],
	// ["क्यसिएर", "यूरो ८०० - यूरो ९००"],
	// ["स्पा थेरापिस्ट", "यूरो ७०० - यूरो १०००"],
	// ["बारिस्ता", "यूरो ७०० - यूरो ८००"],
]
