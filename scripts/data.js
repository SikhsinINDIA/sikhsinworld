/* ──────────────────────────────────────────────────────────────
   Regions and countries for sikhsinworld.com
   Every country sits in exactly one region. A country is one of:
     page      – has its own page on this site (needs an entry in COUNTRIES)
     external  – has its own sister site (India, UAE)
     soon      – listed, page not written yet
   ────────────────────────────────────────────────────────────── */
const INDIA = 'https://sikhsinindia.com/';
const UAE = 'https://sikhsinuae.com/';

const REGIONS = [
  {
    slug: 'south-asia', name: 'South Asia',
    intro: 'The homeland of Sikhi. Guru Nanak Dev Ji was born in Talwandi (today Nankana Sahib, Pakistan), and the Panth grew across the Punjab on both sides of today’s border.',
    countries: [
      ['India', 'external', INDIA],
      ['Pakistan', 'page'],
      ['Afghanistan', 'soon'], ['Nepal', 'page'], ['Bangladesh', 'page'], ['Sri Lanka', 'soon']
    ]
  },
  {
    slug: 'middle-east', name: 'Middle East',
    intro: 'Hundreds of thousands of Sikhs live and work across the Gulf, many of them families who have made the region home for two or three generations.',
    countries: [
      ['United Arab Emirates', 'external', UAE],
      ['Saudi Arabia', 'soon'], ['Qatar', 'soon'], ['Oman', 'page'], ['Kuwait', 'soon'], ['Bahrain', 'soon']
    ]
  },
  {
    slug: 'europe', name: 'Europe',
    intro: 'From Southall to Novellara, Europe is home to some of the largest Sikh sangats outside India, with Gurdwaras in almost every major city.',
    countries: [
      ['United Kingdom', 'page'], ['Italy', 'page'],
      ['Germany', 'page'], ['France', 'page'], ['Netherlands', 'page'], ['Belgium', 'page'],
      ['Spain', 'page'], ['Portugal', 'soon'], ['Austria', 'page'], ['Norway', 'page'], ['Ireland', 'page'],
      ['Russia', 'page'],
      ['Slovakia', 'page'],
      ['Poland', 'page'],
      ['Finland', 'page'],
      ['Switzerland', 'page']
    ]
  },
  {
    slug: 'north-america', name: 'North America',
    intro: 'Sikhs first reached the Pacific coast of North America more than a century ago. Today Canada and the United States have large, thriving sangats.',
    countries: [
      ['Canada', 'page'], ['United States', 'page'], ['Mexico', 'soon'],
      ['Panama', 'page']
    ]
  },
  {
    slug: 'south-america', name: 'South America',
    intro: 'Small but growing Sikh communities, with sangats gathering in the larger cities.',
    countries: [
      ['Argentina', 'page'], ['Peru', 'page'],
      ['Brazil', 'soon'], ['Chile', 'soon']
    ]
  },
  {
    slug: 'africa', name: 'Africa',
    intro: 'Sikh craftsmen and engineers helped build East Africa’s railways from the 1890s, and historic Gurdwaras still stand along the line.',
    countries: [
      ['Kenya', 'page'], ['Mauritius', 'page'],
      ['Uganda', 'soon'], ['Tanzania', 'page'], ['South Africa', 'soon'], ['Nigeria', 'soon'],
      ['Zambia', 'page']
    ]
  },
  {
    slug: 'east-southeast-asia', name: 'East & Southeast Asia',
    intro: 'Sikhs arrived in Southeast Asia in the late 1800s as police, soldiers and traders, and built Gurdwaras that are now well over a century old.',
    countries: [
      ['Malaysia', 'page'], ['Singapore', 'page'], ['Thailand', 'page'], ['Hong Kong', 'page'],
      ['Japan', 'page'], ['Philippines', 'page'], ['Indonesia', 'page'],
      ['Myanmar', 'page'],
      ['South Korea', 'page']
    ]
  },
  {
    slug: 'australia-nz', name: 'Australia & New Zealand',
    intro: 'Sikh hawkers and farmers reached Australia and New Zealand in the 1800s. Today these are some of the fastest-growing Sikh communities in the world.',
    countries: [
      ['Australia', 'page'], ['New Zealand', 'page'], ['Fiji', 'page']
    ]
  }
];

/* Country pages. Facts are kept short and well established; the full
   story, Gurdwara directory, events and community sections are filled in later. */
const COUNTRIES = {
  'Pakistan': {
    story: [
      'Pakistan holds many of the holiest places in Sikh history. Guru Nanak Dev Ji was born at Nankana Sahib and spent his final years at Kartarpur, on the banks of the Ravi.',
      'Since 2019 the Kartarpur Corridor has let pilgrims from India visit Gurdwara Darbar Sahib Kartarpur without a visa.'
    ],
    gurdwaras: [
      ['Gurdwara Janam Asthan', 'Nankana Sahib', 'Birthplace of Guru Nanak Dev Ji'],
      ['Gurdwara Darbar Sahib', 'Kartarpur', 'Where Guru Nanak Dev Ji spent his final years'],
      ['Gurdwara Panja Sahib', 'Hasan Abdal', 'Rock bearing the handprint of Guru Nanak Dev Ji'],
      ['Gurdwara Dera Sahib', 'Lahore', 'Place of the martyrdom of Guru Arjan Dev Ji']
    ]
  },
  'United Kingdom': {
    story: [
      'Sikhs have lived in Britain since the 19th century, when Maharaja Duleep Singh, the last ruler of the Sikh Empire, was brought to England. The first Gurdwara in Britain opened in London in 1911.',
      'Large numbers came from Punjab and East Africa from the 1950s onwards. The 2021 census counted about 524,000 Sikhs in England and Wales.'
    ],
    gurdwaras: [
      ['Gurdwara Sri Guru Singh Sabha', 'Southall, London', 'One of the largest Gurdwaras outside India'],
      ['Guru Nanak Gurdwara', 'Smethwick, Birmingham', 'Long-established sangat in the West Midlands']
    ]
  },
  'Ireland': {
    story: [
      'Sikhs began settling in Ireland in the 1970s, and more came in the 1980s and the 2000s.',
      'Dublin’s Gurdwara, Guru Nanak Darbar, opened in a former cinema in Ballsbridge in the late 1980s.'
    ],
    gurdwaras: [
      ['Guru Nanak Darbar', 'Ballsbridge, Dublin', 'The Gurdwara of Dublin, in a former cinema']
    ]
  },
  'Netherlands': {
    story: [
      'The Netherlands has a small Sikh community, mostly in and around Amsterdam, many of whom came from Afghanistan and Punjab.',
      'The Sikh Society of the Netherlands shares Sikhi in Dutch, and Amsterdam has several Gurdwaras.'
    ],
    gurdwaras: [
      ['Gurdwara Maan Sarovar Sahib', 'Amsterdam', 'The Gurdwara closest to the centre, in a canal-city townhouse']
    ]
  },
  'Spain': {
    story: [
      'Sikhs began settling in Spain in the 1990s, and the community is now about 25,000 strong and growing fast.',
      'About half live in and around Barcelona, which also has about half of Spain’s Gurdwaras.'
    ],
    gurdwaras: [
      ['Gurdwara Gurdarshan Sahib', 'El Raval, Barcelona', 'A townhouse Gurdwara just off La Rambla']
    ]
  },
  'France': {
    story: [
      'Tens of thousands of Sikh soldiers fought and fell in France in the two World Wars. Maharaja Duleep Singh spent his last years in Paris.',
      'Today’s small Sikh community is centred on Bobigny, north-east of Paris, which holds a Vaisakhi Nagar Kirtan each year.'
    ],
    gurdwaras: [
      ['Gurdwara Singh Sabha', 'Bobigny, Paris', 'The largest Gurdwara in France']
    ]
  },
  'Germany': {
    story: [
      'Sikhs began settling in Germany in the 1970s and 1980s, many of them as refugees from Punjab, and the community has grown steadily since.',
      'Today there are Gurdwaras in most large German cities, with the biggest sangats in Cologne, Frankfurt, Hamburg and Munich.'
    ],
    gurdwaras: [
      ['Gurdwara Singh Sabha Frankfurt am Main', 'Frankfurt am Main', 'One of the larger Gurdwaras in Germany']
    ]
  },
  'Philippines': {
    story: [
      'Punjabi Sikhs have lived in the Philippines since the early 20th century, many of them working in trade and business.',
      'Their Gurdwaras, often called Indian Sikh Temples, are found in Manila and in provincial cities across Luzon and the Visayas.'
    ],
    gurdwaras: [
      ['Khalsa Diwan Temple', 'Paco, Manila', 'The oldest Gurdwara in the Philippines']
    ]
  },
  'Fiji': {
    story: [
      'Sikhs came to Fiji in the early 1900s, some as free settlers and farmers, and built the islands’ first Gurdwaras in the 1920s.',
      'Today the sangat gathers at Gurdwaras in Suva, Lautoka and other towns.'
    ],
    gurdwaras: [
      ['Gurdwara Sahib Suva', 'Suva', 'Gurdwara in the capital']
    ]
  },
  'Bangladesh': {
    story: [
      'Guru Nanak Dev Ji visited Bengal on his travels in the early 1500s, and Guru Tegh Bahadur Ji stayed in Dhaka in the 1660s.',
      'Bangladesh has only a handful of Gurdwaras today, the best known being Gurdwara Nanak Shahi on the University of Dhaka campus.'
    ],
    gurdwaras: [
      ['Gurdwara Nanak Shahi', 'Dhaka', 'Honours Guru Nanak Dev Ji’s visit to Dhaka']
    ]
  },
  'Nepal': {
    story: [
      'Guru Nanak Dev Ji is remembered in Nepal from his travels in the Himalaya, and Sikhs have lived in the Kathmandu valley and the Terai for generations.',
      'Small sangats keep Gurdwaras in Lalitpur, Birgunj, Nepalgunj and other towns.'
    ],
    gurdwaras: [
      ['Gurudwara Lalitpur', 'Lalitpur', 'Gurdwara in the Kathmandu valley']
    ]
  },
  'Russia': {
    story: [
      'Russia’s small Sikh community grew in the 1990s, when many Sikh families from Afghanistan settled in Moscow.',
      'The sangat gathers at its Gurdwara in Moscow for diwan and langar.'
    ],
    gurdwaras: [
      ['Gurudwara Moscow', 'Moscow', 'Gurdwara in the capital']
    ]
  },
  'Myanmar': {
    story: [
      'Sikhs came to Burma in the 1800s as soldiers, police and traders under British rule, and many stayed on.',
      'Gurdwaras still serve small sangats in Yangon, Mandalay, Pyin Oo Lwin and other towns.'
    ],
    gurdwaras: [
      ['Sikh Temple Pyin Oo Lwin', 'Pyin Oo Lwin', 'Gurdwara in the old hill station']
    ]
  },
  'Austria': {
    story: [
      'Austria’s Sikh community is small and mostly lives in Vienna, where it has grown since the 1990s.',
      'There are Gurdwaras in Vienna and in Salzburg.'
    ],
    gurdwaras: [
      ['Gurdwara Guru Nanak Dev Ji', 'Vienna', 'Gurdwara in the capital']
    ]
  },
  'Belgium': {
    story: [
      'Many of Belgium’s Sikhs came from the 1980s to work in the fruit orchards of Limburg, around Sint-Truiden, which is still the heart of the community.',
      'Belgium remembers the Sikh soldiers who fought at Ypres in the First World War, and Gurdwaras now stand in Limburg, Flanders and Liège.'
    ],
    gurdwaras: [
      ['Gurudwara Sangat Sahib', 'Sint-Truiden', 'In the heart of Belgium’s Sikh community']
    ]
  },
  'Slovakia': {
    story: [
      'Slovakia has a small Sikh community, mostly in and around Bratislava.',
      'The sangat gathers at its Gurdwara in the capital.'
    ],
    gurdwaras: [
      ['Gurudwara Sri Guru Ramdas Ji', 'Bratislava', 'Gurdwara in the capital']
    ]
  },
  'Oman': {
    story: [
      'Many Sikhs live and work in Oman, most of them in and around the capital, Muscat.',
      'The sangat gathers for diwan and langar in Muscat.'
    ],
    gurdwaras: [
      ['Gurdwara Sikh Temple Muscat', 'Muscat', 'Gurdwara in the capital']
    ]
  },
  'Poland': {
    story: [
      'Poland has a small Sikh community, mostly in Warsaw.',
      'The sangat gathers at its Gurdwara in the capital.'
    ],
    gurdwaras: [
      ['Gurudwara Sri Guru Singh Sabha', 'Warsaw', 'Gurdwara in the capital']
    ]
  },
  'Tanzania': {
    story: [
      'Sikhs came to Tanzania in the early 1900s, many as craftsmen and engineers on the railways, and built Gurdwaras in the towns along the lines.',
      'Small sangats still gather at Gurdwaras in Dar es Salaam, Iringa and other towns.'
    ],
    gurdwaras: [
      ['Siri Guru Singh Sabha Iringa', 'Iringa', 'Gurdwara in the southern highlands']
    ]
  },
  'Finland': {
    story: [
      'Finland has a small Sikh community, mostly in the Helsinki area.',
      'The sangat gathers at its Gurdwara in Vantaa, near Helsinki.'
    ],
    gurdwaras: [
      ['Gurudwara Vantaa', 'Vantaa', 'Gurdwara near Helsinki']
    ]
  },
  'Switzerland': {
    story: [
      'Switzerland’s Sikh community is small and spread across the country.',
      'In 2006 the sangat opened the first purpose-built Gurdwara in Switzerland, at Langenthal in the canton of Bern.'
    ],
    gurdwaras: [
      ['Gurdwara Sahib Langenthal', 'Langenthal', 'The first purpose-built Gurdwara in Switzerland']
    ]
  },
  'Indonesia': {
    story: [
      'Sikhs settled in Sumatra from the late 1800s, many of them working as police, guards and traders, and later in Java.',
      'Medan and Jakarta have long-established Gurdwaras, and the community is small but close-knit.'
    ],
    gurdwaras: [
      ['Gurdwara Sri Guru Nanak Dev Ji', 'Medan', 'Historic Gurdwara in North Sumatra']
    ]
  },
  'Norway': {
    story: [
      'Norway’s Sikh community, mostly in and around Oslo, grew from the 1970s onwards.',
      'The sangat gathers at its Gurdwara in Oslo.'
    ],
    gurdwaras: [
      ['Gurdwara Oslo', 'Oslo', 'Gurdwara in the capital']
    ]
  },
  'Zambia': {
    story: [
      'Zambia has a small Sikh community, many of them in business, mostly in Lusaka.',
      'The sangat gathers at the Sikh Temple in Lusaka.'
    ],
    gurdwaras: [
      ['Lusaka Sikh Temple', 'Lusaka', 'Gurdwara in the capital']
    ]
  },
  'South Korea': {
    story: [
      'South Korea’s Sikh community is small and fairly recent, many of them working in factories and on farms.',
      'The sangat gathers at a Gurdwara in Gyeonggi Province, north of Seoul.'
    ],
    gurdwaras: [
      ['Gurudwara Shri Singh Sabha Sahib', 'Pocheon, Gyeonggi', 'Gurdwara north of Seoul']
    ]
  },
  'Panama': {
    story: [
      'Panama has a small, long-established Sikh community, many of them in trade in Panama City and Colón.',
      'The sangat gathers at its Gurdwara in Panama City.'
    ],
    gurdwaras: [
      ['Gurdwara Guru Nanak Sahib', 'Panama City', 'Gurdwara in the capital']
    ]
  },
  'Italy': {
    story: [
      'Sikhs began settling in northern Italy in the 1980s and 1990s, many working on dairy farms in Lombardy and Emilia-Romagna, the heartland of Parmigiano Reggiano.',
      'Today Italy has one of the largest Sikh communities in continental Europe.'
    ],
    gurdwaras: [
      ['Gurdwara Singh Sabha', 'Novellara (Reggio Emilia)', 'One of the largest Gurdwaras in Europe'],
      ['Darbar Sri Guru Granth Sahib Ji', 'San Prospero, Parma', 'A great Gurdwara among the fields']
    ]
  },
  'Canada': {
    story: [
      'Sikhs reached British Columbia in the early 1900s and opened their first Gurdwara in Vancouver in 1908. In 1914 the ship Komagata Maru, carrying mostly Sikh passengers, was turned away from Vancouver, a story Canada formally apologised for in 2016.',
      'The 2021 census counted about 771,000 Sikhs in Canada, the largest Sikh population outside India.'
    ],
    gurdwaras: [
      ['Gurdwara Sahib Dasmesh Darbar', 'Surrey, British Columbia', 'Large sangat in the Vancouver area'],
      ['Ontario Khalsa Darbar', 'Mississauga, Ontario', 'One of the largest Gurdwaras in the Toronto area']
    ]
  },
  'United States': {
    story: [
      'Sikhs arrived on the US west coast in the early 1900s. The Stockton Gurdwara in California, founded in 1912, was the first Gurdwara in the United States.',
      'In 1956 Dalip Singh Saund became the first Asian American, and the first Sikh, elected to the US Congress.'
    ],
    gurdwaras: [
      ['Sikh Temple Stockton', 'Stockton, California', 'First Gurdwara in the United States (1912)'],
      ['Gurdwara Sahib Fremont', 'Fremont, California', 'Large sangat in the San Francisco Bay Area']
    ]
  },
  'Kenya': {
    story: [
      'From 1896 Sikh craftsmen and engineers came to East Africa to build the Uganda Railway, and many stayed on and built Gurdwaras along the line.',
      'The historic Gurdwara at Makindu, on the old railway route, still serves langar to travellers today.'
    ],
    gurdwaras: [
      ['Gurdwara Makindu', 'Makindu', 'Historic railway-era Gurdwara on the Nairobi–Mombasa road'],
      ['Siri Guru Singh Sabha', 'Nairobi', 'Central Gurdwara of Kenya’s capital']
    ]
  },
  'Malaysia': {
    story: [
      'Sikhs came to Malaya from the 1870s, many serving in the police and armed forces under British rule, and later in business and the professions.',
      'Malaysia has many Gurdwaras that are more than a hundred years old.'
    ],
    gurdwaras: [
      ['Gurdwara Sahib Tatt Khalsa', 'Kuala Lumpur', 'One of the main Gurdwaras of the capital']
    ]
  },
  'Singapore': {
    story: [
      'In 1881 a Sikh police contingent was formed in Singapore, and Sikhs have been part of the city’s life ever since.',
      'Singapore’s Sikh community is small but very active, with Gurdwaras across the island.'
    ],
    gurdwaras: [
      ['Central Sikh Gurdwara', 'Towner Road', 'Main Gurdwara of Singapore']
    ]
  },
  'Thailand': {
    story: [
      'Sikhs came to Thailand from the 1880s, many by way of Burma, and opened the first Gurdwaras in Chiang Mai in 1907 and Bangkok in 1912.',
      'Most Thai Sikhs live in Bangkok, around the great Gurdwara in Phahurat, and there are Gurdwaras from Chiang Rai in the north to Phuket and Songkhla in the south.'
    ],
    gurdwaras: [
      ['Gurdwara Siri Guru Singh Sabha', 'Phahurat, Bangkok', 'Main Gurdwara of Thailand (1933)']
    ]
  },
  'Argentina': {
    story: [
      'Punjabi Sikhs came to Argentina in the early 1900s, many to work on the railways, and settled in the northern province of Salta.',
      'Their Gurdwara in Rosario de la Frontera, built around 1990, is often called the only Gurdwara in South America.'
    ],
    gurdwaras: [
      ['Gurdwara Nanaksar', 'Rosario de la Frontera, Salta', 'The only Gurdwara in Argentina']
    ]
  },
  'Peru': {
    story: [
      'Peru’s Sikh sangat is small and centred on Lima, made up of Punjabi families and Peruvians who have embraced the Sikh way of life.'
    ],
    gurdwaras: [
      ['Gurdwara Guru Nanak Sahib', 'Vargas Machuca 233, Lima', 'Run by the Sikh Simran Sewa Sabha']
    ]
  },
  'Japan': {
    story: [
      'Sikh traders settled in Yokohama and Kobe in the early 1900s, and Kobe’s Guru Nanak Darbar was for many years the only Gurdwara in Japan.',
      'Today a second Gurdwara in Tokyo serves a small sangat of Punjabi, Indian and Japanese families.'
    ],
    gurdwaras: [
      ['Guru Nanak Darbar', 'Chuo-ku, Kobe', 'Japan’s oldest Gurdwara'],
      ['Guru Nanak Darbar Tokyo', 'Bunkyo, Tokyo', 'Open on Sunday mornings']
    ]
  },
  'Mauritius': {
    story: [
      'Mauritius has a small Sikh community, many of them professionals in the capital, Port Louis.',
      'Its one Gurdwara, built in the 1990s, welcomes Mauritians of every background to Sunday prayers and langar.'
    ],
    gurdwaras: [
      ['Sri Guru Singh Sabha', 'Grand River North West, Port Louis', 'The only Gurdwara in Mauritius']
    ]
  },
  'Hong Kong': {
    story: [
      'Sikhs came to Hong Kong from the 1840s as soldiers and police, and built their Gurdwara in Wan Chai in 1901.',
      'The Khalsa Diwan rebuilt the Gurdwara on the same site, and the new building opened in 2022. It is the only Gurdwara in Hong Kong.'
    ],
    gurdwaras: [
      ['Khalsa Diwan Sikh Temple', 'Queen’s Road East, Wan Chai', 'The only Gurdwara in Hong Kong (1901)']
    ]
  },
  'Australia': {
    story: [
      'Sikhs came to Australia in the late 1800s as hawkers, cameleers and farm workers. The first Gurdwara was opened in Woolgoolga, New South Wales, in 1968.',
      'The 2021 census counted about 210,000 Sikhs, one of Australia’s fastest-growing communities.'
    ],
    gurdwaras: [
      ['First Sikh Temple', 'Woolgoolga, New South Wales', 'Australia’s first Gurdwara (1968)']
    ]
  },
  'New Zealand': {
    story: [
      'Sikhs have lived in New Zealand since the late 1800s, many working on farms in the Waikato and Bay of Plenty.',
      'Today the largest sangats are in Auckland, Hamilton and the Bay of Plenty.'
    ],
    gurdwaras: [
      ['Gurdwara Sri Kalgidhar Sahib', 'Takanini, Auckland', 'One of the largest Gurdwaras in New Zealand']
    ]
  }
};

module.exports = { REGIONS, COUNTRIES, INDIA, UAE };
