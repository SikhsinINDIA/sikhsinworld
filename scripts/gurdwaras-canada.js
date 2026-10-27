/* Gurdwaras in Canada, province by province.
   Each Gurdwara: n name, c city, a street address, pc postal code, ph phone,
   y year founded, w website, p one paragraph (our own words),
   wg the Gurdwara’s listing on worldgurudwaras.com (where its photos come from).
   Names and addresses from the public listings on worldgurudwaras.com and the
   Gurdwaras' own websites (Oct 2026). Empty fields are simply left out. */
module.exports = {
  country: 'Canada',
  provinces: [
    {
      name: 'Ontario', abbr: 'ON',
      intro: 'Ontario is home to Canada’s largest Sikh population. Brampton, Mississauga and the rest of Peel Region have the most Gurdwaras, and sangats stretch from Windsor and London in the south-west to Ottawa and Cornwall in the east.',
      list: [
        { n: 'Darbar Sri Guru Granth Sahib Ji', c: 'Brampton', wg: 'darbar-sri-guru-granth-sahib-ji-brampton', a: '187 Deerhurst Dr',
          p: 'Darbar Sri Guru Granth Sahib Ji is a neighbourhood Gurdwara on Deerhurst Drive in Brampton, the city with the largest Sikh community in Canada. It serves local families with daily prayers, kirtan and langar, and like every Gurdwara its doors are open to visitors of all backgrounds.' },
        { n: 'Gurdwara Dasmesh Darbar', c: 'Brampton', wg: 'gurdwara-dasmesh-darbar-brampton', a: '4555 Ebenezer Rd', pc: 'L6P 2K8', w: 'http://www.gurdwaradasmeshdarbar.com/',
          p: 'Gurdwara Dasmesh Darbar stands on Ebenezer Road on the eastern edge of Brampton. Its new building was raised through years of land seva and construction by the sangat. Programmes from the Darbar are broadcast on ATN Punjabi television and streamed on its website, YouTube and Facebook, so Sikhs across Canada can join the diwan from home.' },
        { n: 'Gurdwara Tapoban Sahib', c: 'Brampton', wg: 'gurdwara-tapoban-sahib-brampton', a: '9658 Goreway Dr', w: 'https://www.tapoban.org/',
          p: 'Gurdwara Tapoban Sahib on Goreway Drive follows a strict, traditional Khalsa maryada. Sri Guru Granth Sahib is kept in parkash in larivaar form, the sangat joins in Akhand Keertan, and langar is prepared in sarbloh (iron) utensils. The Gurdwara is known for its youth camps and seminars, where children learn Gurbani santhiya, keertan and gatka.' },
        { n: 'Nanaksar Thath Isher Darbar', c: 'Brampton', wg: 'nanaksar-thath-isher-darbar-brampton', a: '9954 The Gore Rd',
          p: 'Nanaksar Thath Isher Darbar is a Gurdwara of the Nanaksar tradition on The Gore Road in north-east Brampton. Nanaksar Gurdwaras are known for continuous Gurbani paath and kirtan and a peaceful, simple atmosphere, and the sangat here welcomes everyone to sit, listen and share langar.' },
        { n: 'Sikh Heritage Centre', c: 'Brampton', wg: 'sikh-heritage-centre-brampton', a: '11796 Airport Rd',
          p: 'The Sikh Heritage Centre is a Gurdwara on Airport Road at the northern edge of Brampton, near the Caledon border. It serves the fast-growing Sikh neighbourhoods of north Brampton with diwan, kirtan and langar, and hosts Gurpurab celebrations through the year.' },
        { n: 'Guru Nanak Mission Centre', c: 'Brampton', wg: 'guru-nanak-mission-centre-brampton', a: '585 Guru Nanak St',
          p: 'Guru Nanak Mission Centre is a Brampton Gurdwara on a street that itself carries Guru Nanak Dev Ji’s name. It offers a place for daily prayer, kirtan and langar for the local sangat, and shares news of its programmes through its Facebook page.' },
        { n: 'Nanaksar Gurughar', c: 'Brampton', wg: 'nanaksar-gurughar', a: '144 Kennedy Rd S, Unit 14',
          p: 'Nanaksar Gurughar is a small Gurdwara of the Nanaksar tradition on Kennedy Road South in Brampton. Set in a commercial unit, it keeps the Nanaksar way of steady paath and kirtan, and is a quiet place for the sangat to come for prayer and reflection.' },
        { n: 'Gurudwara Nanaksar', c: 'Brampton', wg: 'gurudwara-nanaksar-brampton-2', a: '64 Timberlane Dr',
          p: 'Gurudwara Nanaksar on Timberlane Drive is one of several Nanaksar Gurdwaras in the Brampton area. The sangat gathers here for continuous Gurbani, kirtan and langar in the simple, devotional style that the Nanaksar sampardai is known for.' },
        { n: 'Sri Guru Nanak Sikh Centre', c: 'Brampton', wg: 'sri-guru-nanak-sikh-center-brampton', a: '99 Glidden Rd',
          p: 'Sri Guru Nanak Sikh Centre is a Gurdwara on Glidden Road in central Brampton. It holds daily diwan and kirtan, serves langar to all who come, and is a busy centre for Gurpurab and Vaisakhi celebrations in the city.' },
        { n: 'Gurdwara Sikh Sangat', c: 'Brampton', wg: 'sikh-sangat-brampton', a: '32 Regan Rd',
          p: 'Gurdwara Sikh Sangat is a Gurdwara on Regan Road in Brampton’s north-west. It serves the local sangat with daily prayers, kirtan and langar, and is open to visitors who wish to learn about Sikhi.' },
        { n: 'Sri Gurduara Jot Parkash Sahib', c: 'Brampton', wg: 'sri-gurduara-jot-parkash-sahib-toronto', a: '135 Sun Pac Blvd',
          p: 'Sri Gurduara Jot Parkash Sahib is a Gurdwara on Sun Pac Boulevard in Brampton, close to the Toronto boundary. It is a place of daily diwan, kirtan and langar for Sikh families in the area, with programmes held for Gurpurabs and other important days in the Sikh calendar.' },
        { n: 'Ontario Khalsa Darbar', c: 'Mississauga', wg: 'ontario-khalsa-darbar-mississauga', a: '7080 Dixie Rd', pc: 'L5S 1B7', y: '1979', w: 'https://www.ontariokhalsadarbar.ca/',
          p: 'Ontario Khalsa Darbar is one of the largest and busiest Gurdwaras in North America. It began in 1979 in a small trailer at Dixie and Derry Roads, and its main building was completed in 1989 on a site of about 36 acres, later joined by an outdoor stadium and large parking grounds. Its Gurmat Academy teaches Punjabi and Gurmat music, and the Darbar hosts Akhand Paths, Sukhmani Sahib, Anand Karaj, funeral services and community events such as blood donation drives.' },
        { n: 'Sri Guru Singh Sabha Malton', c: 'Mississauga', wg: 'guru-singh-sabha-mississauga', a: '7280 Airport Rd', pc: 'L4T 2H3', w: 'https://www.srigurusinghsabhamalton.com/',
          p: 'Sri Guru Singh Sabha Malton serves the Malton neighbourhood of Mississauga, one of the earliest areas of the Greater Toronto Area to have a large Sikh community. The Gurdwara holds daily diwan and langar, and streams its programmes live on YouTube and its website for sangat who cannot attend in person.' },
        { n: 'Shiromani Sikh Sangat', c: 'Mississauga', wg: 'shiromani-sikh-sangat-mississauga', a: '2377 Dunwin Dr',
          p: 'Shiromani Sikh Sangat is a Gurdwara on Dunwin Drive in western Mississauga. It serves Sikh families in Mississauga and nearby Oakville with daily prayers, kirtan and langar, and welcomes visitors of every faith.' },
        { n: 'Sri Guru Singh Sabha Toronto', c: 'Toronto', wg: 'sri-guru-singh-sabha-toronto', a: '331 Old Weston Rd',
          p: 'Sri Guru Singh Sabha on Old Weston Road is a Gurdwara in Toronto’s west end. It serves the city’s sangat with daily diwan, kirtan and langar, and is a gathering place for Gurpurabs and other Sikh celebrations.' },
        { n: 'Shromani Sikh Society', c: 'Toronto', wg: 'shromani-sikh-society-toronto', a: '269 Pape Ave', ph: '(416) 463-3132',
          p: 'Shromani Sikh Society is a Gurdwara on Pape Avenue in Toronto’s east end. It keeps a regular programme of paath, kirtan and langar for local families and visitors.' },
        { n: 'North York Sikh Temple', c: 'Toronto (North York)', wg: 'north-york-sikh-temple', a: '2400 Finch Ave W', ph: '(416) 741-5029',
          p: 'North York Sikh Temple stands on Finch Avenue West in North York. It serves the Sikh community of north-west Toronto with daily prayers, kirtan and langar, and its doors are open to everyone.' },
        { n: 'Ramgarhia Sikh Society', c: 'Toronto (North York)', wg: 'ramgarhia-sikh-society-mississauga', a: '140 Rivalda Rd', ph: '(416) 748-9442',
          p: 'Ramgarhia Sikh Society runs a Gurdwara on Rivalda Road in north-west Toronto. Founded by Sikhs of the Ramgarhia community, it serves all sangat with daily diwan, kirtan and langar.' },
        { n: 'Rexdale Singh Sabha Religious Centre', c: 'Toronto (Rexdale)', wg: 'rexdale-singh-sabha-religious-centre', a: '47 Baywood Rd', ph: '(416) 746-2511',
          p: 'Rexdale Singh Sabha Religious Centre on Baywood Road serves the large Sikh community of Rexdale in Toronto’s north-west. It holds daily paath, kirtan and langar, and is a busy centre for Gurpurab and Vaisakhi programmes.' },
        { n: 'Sikh Spiritual Centre', c: 'Toronto (Etobicoke)', wg: 'sikh-spiritual-centre-etobicoke', a: '9 Carrier Dr', ph: '(416) 746-6666',
          p: 'Sikh Spiritual Centre on Carrier Drive is a Gurdwara in Etobicoke, near Toronto Pearson Airport. It serves the sangat of Rexdale and Etobicoke with daily diwan, kirtan and langar.' },
        { n: 'GurSikh Sabha Canada', c: 'Toronto (Scarborough)', wg: 'gursikh-sabha-canada-scarborough', a: '905 Middlefield Rd', ph: '(416) 299-4513',
          p: 'GurSikh Sabha Canada on Middlefield Road serves Sikhs in Scarborough, in Toronto’s east. It holds daily prayers, kirtan and langar, and serves families across Scarborough, Markham and Pickering.' },
        { n: 'Guru Ravidas Sabha', c: 'Burlington', wg: 'guru-ravidas-sabha-burlington', a: '2266 Queensway Dr', ph: '(905) 333-1924',
          p: 'Guru Ravidas Sabha in Burlington is a place of worship devoted to the teachings of Bhagat Ravidas Ji, whose bani is part of Sri Guru Granth Sahib. The sangat gathers for kirtan, paath and langar, with special programmes on Guru Ravidas Ji’s Gurpurab.' },
        { n: 'Sikh Cultural Association', c: 'Oakville', wg: 'sikh-cultural-association-oakville', a: '2403 Khalsa Gate', ph: '(905) 469-1313',
          p: 'The Sikh Cultural Association Gurdwara stands on Khalsa Gate in Oakville, a street named for the Khalsa. It serves Sikh families in Oakville and the western GTA with daily diwan, kirtan and langar, and is open to visitors of all faiths.' },
        { n: 'Gurdwara Dukh Nivaran Sahib', c: 'Hamilton', wg: 'gurdwara-dukh-nivaran-sahib-hamilton', a: '290 Lake Ave N', ph: '(905) 578-9938',
          p: 'Gurdwara Dukh Nivaran Sahib on Lake Avenue North serves the Sikh community of east Hamilton and Stoney Creek. It holds daily prayers, kirtan and langar, and is a gathering point for Gurpurab celebrations in the Hamilton area.' },
        { n: 'Sikh Society Hamilton', c: 'Hamilton', wg: 'sikh-society-hamilton', a: '86 Covington St', ph: '(905) 561-2806',
          p: 'Sikh Society Hamilton runs a Gurdwara on Covington Street, serving the city’s sangat with daily paath, kirtan and langar. It is one of several Gurdwaras that make Hamilton an important Sikh centre west of Toronto.' },
        { n: 'Gurdwara Shaheedgarh Sahib', c: 'Hamilton (Flamborough)', wg: 'shaheed-garh-sahib-west-flamborough', a: '200 Old Guelph Rd', ph: '(905) 525-5725',
          p: 'Gurdwara Shaheedgarh Sahib stands on Old Guelph Road in the Flamborough area of Hamilton. Its name honours the Sikh shaheeds (martyrs), and the sangat gathers here for daily prayers, kirtan and langar.' },
        { n: 'Sikh Association of Brantford', c: 'Brantford', wg: 'sikh-association-of-brantford', a: '483 Park Rd N', ph: '(519) 756-9585',
          p: 'The Sikh Association of Brantford runs the city’s Gurdwara on Park Road North. It serves Sikh families and students in Brantford with daily prayers, kirtan and langar, and celebrates the Gurpurabs through the year.' },
        { n: 'Fort Erie Khalsa Darbar', c: 'Fort Erie', wg: 'fort-erie-khalsa-darbar', a: '1767 Garrison Rd', w: 'http://www.forteriekhalsadarbar.com/',
          p: 'Fort Erie Khalsa Darbar on Garrison Road serves Sikhs in Fort Erie and the southern Niagara region, close to the Peace Bridge to Buffalo. Travellers crossing the border often stop here for prayer and langar.' },
        { n: 'Sikh Society of Niagara Falls', c: 'Niagara Falls', wg: 'sikh-society-of-niagara-falls', a: '8405 Lundy’s Ln', ph: '(289) 296-2475',
          p: 'The Sikh Society of Niagara Falls runs a Gurdwara on Lundy’s Lane, a short drive from the famous falls. It serves local Sikh families and international students, and welcomes visiting sangat from across Canada and the United States.' },
        { n: 'Siri Guru Singh Sabha', c: 'Cambridge', wg: 'siri-guru-singh-sabha-cambridge', a: '1070 Townline Rd', pc: 'N0B 2J0', ph: '(519) 658-1070', y: 'around 1980', w: 'https://cambridgegurdwara.ca/',
          p: 'Siri Guru Singh Sabha Cambridge was started around 1980 at Roseville Road and later moved to its present home on Townline Road. Along with daily diwan and langar, it performs Anand Karaj weddings, celebrates Gurpurabs and Vaisakhi, and hosts an annual Khed Mela (sports fair) for the community.' },
        { n: 'Guelph Sikh Society', c: 'Guelph', wg: 'guelph-sikh-society', a: '70 Stevenson St S', ph: '(519) 822-1112', w: 'http://www.guelphsikhsociety.ca/',
          p: 'Guelph Sikh Society runs the Gurdwara on Stevenson Street South in Guelph. It serves local families and the many Sikh students at the University of Guelph with daily prayers, kirtan and langar.' },
        { n: 'Golden Triangle Sikh Association', c: 'Kitchener area', wg: 'golden-triangle-sikh-association', a: '2070 Snyder’s Rd E', ph: '(519) 823-5743',
          p: 'Golden Triangle Sikh Association serves the “Golden Triangle” of Kitchener, Waterloo and Cambridge from its Gurdwara on Snyder’s Road East. It holds daily diwan, kirtan and langar for the region’s growing Sikh community.' },
        { n: 'Gurudwara Sri Guru Singh Sabha', c: 'Woodstock', wg: 'gurudwara-sri-guru-singh-sabha-woodstock', a: '745282 Oxford Road 17', ph: '(226) 228-8643', w: 'http://gurudwarawoodstock.com/',
          p: 'Gurudwara Sri Guru Singh Sabha serves the Sikh community of Woodstock and Oxford County. It provides a place for daily prayer, kirtan and langar for local families and for students and workers new to the area.' },
        { n: 'London Sikh Society', c: 'London', wg: 'london-sikh-society', a: '37 Clarke Rd', pc: 'N5W 5W5', y: '1971', w: 'https://londonsikhsociety.com/',
          p: 'London Sikh Society was formed in 1971 and runs the Gurdwara on Clarke Road. It is open every day from early morning to evening, and teaches Gurmukhi on Sundays along with kirtan classes for children and adults and gatka. The sangat can book Akhand Path, Sehaj Path, Sukhmani Sahib, Anand Karaj and langar sewa here.' },
        { n: 'Sarnia Sikh Society', c: 'Sarnia', wg: 'sarnia-sikh-society', a: '794 Sycamore Dr', ph: '(519) 542-2119',
          p: 'Sarnia Sikh Society runs the Gurdwara on Sycamore Drive, serving Sikhs in Sarnia and Lambton County near the Michigan border. It offers daily prayers, kirtan and langar to local families and students.' },
        { n: 'Gurdwara Sikh Lehar', c: 'Chatham', wg: 'gurdwara-sikh-lehar-chatham', a: '210 King St E', ph: '(519) 350-5182',
          p: 'Gurdwara Sikh Lehar on King Street East is the Gurdwara of Chatham-Kent in south-western Ontario. It serves a small but growing sangat with daily prayers, kirtan and langar.' },
        { n: 'Gurdwara Khalsa Parkash', c: 'Windsor', wg: 'gurdwara-khalsa-parkash-windsor', a: '7955 County Road 42', ph: '(519) 735-6938', w: 'http://gurdwarakhalsaparkash.com/',
          p: 'Gurdwara Khalsa Parkash on County Road 42 serves the Sikh community of Windsor and Essex County, across the river from Detroit. It holds daily diwan, kirtan and langar, and celebrates the Gurpurabs with the sangat of the Windsor area.' },
        { n: 'Gurdwara Sahib Ottawa Sikh Society', c: 'Ottawa', wg: 'gurdwara-sahib-ottawa-sikh-society', a: '25 Gurdwara Rd', ph: '(613) 225-8280', w: 'http://www.ottawasikhsociety.com/',
          p: 'The Ottawa Sikh Society’s Gurdwara stands on a road named after it, Gurdwara Road, in Canada’s capital. It serves Sikh families, students and public servants in Ottawa with daily prayers, kirtan and langar.' },
        { n: 'Kingston Sikh Cultural Association Gurudwara', c: 'Kingston', wg: 'kingston-sikh-cultural-association-gurudwara', a: '50 Hickson Ave', w: 'http://www.kscagurudwara.com/',
          p: 'The Kingston Sikh Cultural Association runs the Gurdwara on Hickson Avenue. Its new building has a darbar hall for more than 500 people, a langar hall for more than 200, a commercial kitchen and a Punjabi school and library, and it runs Gurmat and Punjabi classes for children.' },
        { n: 'Gurudwara Kendri Siri Guru Singh Sabha', c: 'Cornwall', wg: 'gurudwara-kendri-siri-guru-singh-sabha-cornwall', a: '108 Anthony St', pc: 'K6H 5K1', w: 'https://www.kendrisgss.com/',
          p: 'Kendri Siri Guru Singh Sabha is a non-profit in Cornwall that acquired the former Saint Croix Church on Anthony Street to make a home for the Gurdwara. It runs Gurmukhi santhiya and kirtan classes, holds talks on Sikhi, and helps international students settle in Canada.' }
      ]
    },
    {
      name: 'British Columbia', abbr: 'BC',
      intro: 'Canadian Sikh history began in British Columbia. Sikhs arrived in the early 1900s and opened the country’s first Gurdwara in Vancouver in 1908. Today the biggest sangats are in Surrey, Abbotsford and the rest of the Lower Mainland, with Gurdwaras as far north as Fort St. John and Terrace.',
      list: [
        { n: 'Gurdwara Dukh Nivaran Sahib', c: 'Surrey', wg: 'gurdwara-dukh-nivaran-sahib-vancouver', a: '15255 68 Ave',
          p: 'Gurdwara Dukh Nivaran Sahib on 68 Avenue is one of the main Gurdwaras of Surrey, the city with the largest Sikh community in British Columbia. It holds daily diwan, kirtan and langar, and is busy with sangat during Gurpurabs and Surrey’s Vaisakhi celebrations.' },
        { n: 'Gurdwara Amrit Parkash', c: 'Surrey', wg: 'gurdwara-amrit-parkash-vancouver', a: '7990 123a St', ph: '(604) 600-7413',
          p: 'Gurdwara Amrit Parkash on 123a Street serves the Sikh families of Newton in Surrey. It offers daily prayers, kirtan and langar, and welcomes visitors who want to learn about Sikhi.' },
        { n: 'Gurudwara Guru Teg Bahadur Sahib', c: 'Surrey (Cloverdale)', wg: 'gurudwara-guru-teg-bahadur-sahib-cloverdale', a: '5988 184 St', ph: '(604) 808-2451',
          p: 'Gurudwara Guru Teg Bahadur Sahib in Cloverdale, Surrey, is named after the ninth Guru, Guru Tegh Bahadur Ji. It serves the sangat of Cloverdale and east Surrey with daily diwan, kirtan and langar.' },
        { n: 'Satsang Baba Budha Ji', c: 'Delta', wg: 'satsang-baba-budha-ji-delta', a: '9493 120 St',
          p: 'Satsang Baba Budha Ji is a Gurdwara on 120 Street in North Delta, named after Baba Budha Ji, the revered Sikh elder who anointed five Gurus and was the first granthi of Sri Harmandir Sahib. The sangat gathers here for paath, kirtan and langar.' },
        { n: 'Gur Sikh Temple', c: 'Abbotsford', wg: 'gur-sikh-temple-abbotsford', a: '33089 S Fraser Way',
          p: 'The Gur Sikh Temple in Abbotsford is tied to one of the most important places in Canadian Sikh history: the temple built by Sikh mill workers on South Fraser Way and completed in 1911, the oldest surviving Gurdwara in North America and a National Historic Site of Canada. Today the Abbotsford sangat continues the tradition of daily prayers and langar on South Fraser Way.' },
        { n: 'Gurdwara Sachkhand Isher Darbar', c: 'Abbotsford', wg: 'gurdwara-sachkhand-isher-darbar-abbotsford', a: '32839 Downes Rd', ph: '(604) 755-2440',
          p: 'Gurdwara Sachkhand Isher Darbar on Downes Road is a Gurdwara in the farming country north of Abbotsford. It serves the large Sikh community of the Fraser Valley with daily paath, kirtan and langar.' },
        { n: 'Gurdwara Baba Banda Singh Bahadar', c: 'Abbotsford', wg: 'gurdwara-baba-banda-singh-bahadar-abbotsford', a: '31631 S Fraser Way', ph: '(604) 746-1700',
          p: 'Gurdwara Baba Banda Singh Bahadar on South Fraser Way is named after Baba Banda Singh Bahadur, the Sikh general who set up the first Khalsa rule in Punjab in the early 1700s. It serves Abbotsford’s sangat with daily prayers, kirtan and langar.' },
        { n: 'Gurdwara Kalgidhar Darbar Sahib', c: 'Abbotsford', wg: 'gurdwara-kalgidhar-darbar-sahib-abbotsford', a: '30640 Blueridge Dr', ph: '(604) 504-5530', w: 'http://kalgidhardarbar.org/',
          p: 'Gurdwara Kalgidhar Darbar Sahib on Blueridge Drive takes its name from “Kalgidhar”, a title of Guru Gobind Singh Ji. It serves the sangat of west Abbotsford with daily diwan, kirtan and langar.' },
        { n: 'Kamloops Gurudwara Sahib Society', c: 'Kamloops', wg: 'kamloops-gurudwara-sahib-society', a: '1345 Ord Rd', ph: '(250) 554-3871',
          p: 'Kamloops Gurudwara Sahib Society runs the Gurdwara on Ord Road in Kamloops, in BC’s interior. It serves local families and students with daily prayers, kirtan and langar.' },
        { n: 'Gurudwara Sahib Guru Darbar', c: 'Quesnel', wg: 'gurudwara-sahib-guru-darbar-quesnel', a: '400 Lewis Dr', ph: '(250) 992-3035',
          p: 'Gurudwara Sahib Guru Darbar on Lewis Drive serves the Sikh community of Quesnel in BC’s Cariboo region. It is a place of daily prayer, kirtan and langar.' },
        { n: 'Gurdwara Sahib Miri Piri Khalsa Darbar', c: 'Terrace', wg: 'gurdwara-sahib-miri-piri-khalsa-darbar-terrace-bc', a: '4634 Walsh Ave',
          p: 'Gurdwara Sahib Miri Piri Khalsa Darbar on Walsh Avenue serves Sikhs in Terrace in north-western British Columbia. Its name recalls Miri Piri, the balance of worldly and spiritual life taught by Guru Hargobind Ji.' },
        { n: 'Guru Nanak Sikh Temple', c: 'Fort St. John', wg: 'guru-nanak-sikh-temple-fort-st-john', a: '9915 90 St', ph: '(250) 785-7556', y: '1987',
          p: 'Guru Nanak Sikh Temple stands at the corner of 90 Street and 100 Avenue in Fort St. John, in BC’s far north-east. The Guru Nanak Sikh Temple and Cultural Society that runs it was founded in 1987, and it serves the Sikh families of the Peace region.' }
      ]
    },
    {
      name: 'Alberta', abbr: 'AB',
      intro: 'Alberta’s largest sangats are in Calgary and Edmonton, and Gurdwaras also serve smaller communities in the north such as Grande Prairie and Fort McMurray.',
      list: [
        { n: 'Gurdwara Dashmesh Culture Centre', c: 'Calgary', wg: 'dashmesh-culture-center-calgary', a: '135 Gurdwara Sahib Blvd NE', pc: 'T3J 2X5', ph: '(403) 590-0970', w: 'https://www.dashmesh.ca/',
          p: 'Dashmesh Culture Centre in north-east Calgary is one of the largest Gurdwaras in Alberta, open daily from 3 am to 9 pm. Alongside the Gurdwara it runs the Dashmesh Gurmat Centre and a Khalsa School, and its community work includes food security, a community garden and a transitional housing project for women and children.' },
        { n: 'Gurdwara Darbar Sri Guru Granth Sahib Ji', c: 'Calgary', wg: 'gurdwara-darbar-sri-guru-granth-sahib-ji-calgary', a: '3710 Westwinds Dr NE #24', ph: '(403) 351-3822',
          p: 'Gurdwara Darbar Sri Guru Granth Sahib Ji is a Gurdwara on Westwinds Drive in north-east Calgary, the heart of the city’s Sikh community. It holds daily paath, kirtan and langar for the local sangat.' },
        { n: 'Guru Ram Das Darbar', c: 'Calgary', wg: 'guru-ram-das-darbar-calgary', a: '5225 84 St NE', ph: '(403) 285-3035', w: 'http://www.gururamdasdarbar.com/',
          p: 'Guru Ram Das Darbar on 84 Street NE is named after the fourth Guru, Guru Ram Das Ji, founder of Amritsar. It serves Calgary’s sangat with daily diwan, kirtan and langar, and shares its kirtan on YouTube and SoundCloud.' },
        { n: 'Sikh Society of Calgary', c: 'Calgary', wg: 'sikh-society-of-calgary', a: '739 81 St SW', pc: 'T3H 4C6', ph: '(403) 246-1776', w: 'https://www.sikhsocietyofcalgary.org/',
          p: 'The Sikh Society of Calgary, on 81 Street SW, is one of the first Gurdwaras in the city and has served the community for more than 40 years. Prakash and Nitnem begin at 5 am each day, with a fuller programme of Asa Ki Vaar, katha and kirtan on Sundays. Its Guru Nanak Panjabi School teaches children on Friday evenings and Sunday mornings.' },
        { n: 'Guru Ravidass Community Centre', c: 'Calgary', wg: 'guru-ravidass-community-centre-calgary', a: '1835 40 St SE', ph: '(403) 272-7447',
          p: 'Guru Ravidass Community Centre in south-east Calgary is devoted to the teachings of Bhagat Ravidas Ji, whose bani is part of Sri Guru Granth Sahib. The sangat gathers for kirtan, paath and langar, with special celebrations on Guru Ravidas Ji’s Gurpurab.' },
        { n: 'Brahm Bunga Spiritual Fellowship', c: 'Calgary', wg: 'brahm-bunga-spiritual-fellowship-calgary', a: '9350 17 Ave SE', ph: '(403) 606-5732', w: 'http://brahmbungacalgary.org/',
          p: 'Brahm Bunga Spiritual Fellowship in south-east Calgary centres its sangat on Shabad, the Guru’s word, with a strong focus on kirtan. The fellowship holds weekly sangat in Calgary and also in Winnipeg, and shares recorded kirtan on its website.' },
        { n: 'Gurdwara Dukh Nivaran Sahib', c: 'Edmonton', wg: 'gurdwara-dukh-nivaran-sahib-edmonton', a: '430 66 St SW', ph: '(780) 244-3111',
          p: 'Gurdwara Dukh Nivaran Sahib on 66 Street SW serves the growing Sikh neighbourhoods of south Edmonton. It holds daily prayers, kirtan and langar, and is a busy place on Gurpurabs and at Vaisakhi.' },
        { n: 'Gurdwara Darbar Sri Guru Granth Sahib', c: 'Edmonton', wg: 'gurdwara-darbar-sri-guru-granth-sahib-edmonton', a: '9169 25 Ave NW', ph: '(587) 498-0722', w: 'https://darbarsrigurugranthsahibjiedmonton.ca/',
          p: 'Gurdwara Darbar Sri Guru Granth Sahib in south Edmonton describes itself as a community centre open to all. Alongside daily diwan and free langar, it runs the Gobind Sarvar Gurmat School, a Newcomer Centre, and youth, family and women’s programmes, including workshops against drug abuse.' },
        { n: 'Gurdwara Millwoods', c: 'Edmonton', wg: 'gurudwara-millwoods', a: '2606 Millwoods Rd E', ph: '(780) 450-3844', y: '1982', w: 'https://gurdwaramillwoods.com/',
          p: 'Gurdwara Millwoods is run by the Ramgarhia Gursikh Society of Edmonton, founded in 1982; building work began in 1985 and the Gurdwara was extended in 2006 and 2010. It runs the Ramgarhia Khalsa School and the Bhai Gurdas Library of more than 5,000 books, holds three diwans a day from 4 am to 8 pm, and has organised Edmonton’s Vaisakhi Nagar Kirtan since 1999.' },
        { n: 'Nanaksar Gurudwara', c: 'Edmonton', wg: 'gurdwara-nanak-sar-edmonton', a: '1410 Horse Hills Rd', ph: '(780) 472-6335',
          p: 'Nanaksar Gurudwara on Horse Hills Road, in north-east Edmonton, follows the Nanaksar tradition of continuous paath and kirtan. Its peaceful rural setting makes it a favourite place for the sangat to come for reflection and langar.' },
        { n: 'Sikh Temple Grande Prairie', c: 'Grande Prairie', wg: 'sikh-temple-grande-prairie', a: '9402 92c St', ph: '(780) 538-1921', w: 'http://www.gpsikhsociety.org/',
          p: 'The Sikh Temple in Grande Prairie is run by the Grande Prairie Sikh Society and serves Sikh families across north-western Alberta. It offers daily prayers, kirtan and langar, and is a welcome stop for travellers in the Peace Country.' },
        { n: 'Fort McMurray Sikh Society', c: 'Fort McMurray', wg: 'fort-mcmurray-sikh-society', a: '174 McConachie Cres',
          p: 'Fort McMurray Sikh Society runs the Gurdwara on McConachie Crescent, serving Sikhs who live and work in Alberta’s oil sands region. It is a home for prayer, kirtan and langar in the north.' }
      ]
    },
    {
      name: 'Manitoba', abbr: 'MB',
      intro: 'Almost all of Manitoba’s Gurdwaras are in and around Winnipeg, where the sangat has grown quickly over the last twenty years.',
      list: [
        { n: 'Guru Nanak Darbar', c: 'Winnipeg', wg: 'guru-nanak-darbar-winnipeg', a: '900 McLeod Ave', pc: 'R2G 2T7', ph: '(204) 668-4466', y: '1994', w: 'https://gndw.org/',
          p: 'Guru Nanak Darbar has served Winnipeg’s sangat since 1994 from a 14,400 square foot building on McLeod Avenue. It is a registered charity founded by 22 members of the community, and runs daily programmes from 5 am to 8:30 pm, Punjabi classes, kirtan and Gurmat camps for young people.' },
        { n: 'Khalsa Diwan Society Manitoba', c: 'Winnipeg', wg: 'khalsa-diwan-society-manitoba-inc', a: '807 McLeod Ave', ph: '(204) 668-5798',
          p: 'Khalsa Diwan Society Manitoba runs a Gurdwara on McLeod Avenue in north-east Winnipeg. It is a registered charity that serves the sangat with daily prayers, kirtan and langar.' },
        { n: 'Gurdwara Kalgidhar Darbar', c: 'Winnipeg', wg: 'gurdwara-kalgidhar-darbar', a: '2762 King Edward St', ph: '(204) 633-7777',
          p: 'Gurdwara Kalgidhar Darbar on King Edward Street serves Sikh families in north-west Winnipeg. Its name honours Guru Gobind Singh Ji, “the wearer of the plume”, and it holds daily diwan, kirtan and langar.' },
        { n: 'Singh Sabha of Winnipeg', c: 'Winnipeg', wg: 'singh-sabha-of-winnipeg-inc', a: '4000 Sturgeon Rd', ph: '(204) 885-5495',
          p: 'Singh Sabha of Winnipeg runs a Gurdwara on Sturgeon Road in the city’s west. It serves the sangat with daily prayers, kirtan and langar, and celebrates Gurpurabs and Vaisakhi with the wider community.' },
        { n: 'Gurdwara Nanaksar', c: 'Winnipeg', wg: 'gurdwara-nanaksar-winnipeg', a: '255 St David Rd', ph: '(204) 255-7503', y: '1982',
          p: 'Gurdwara Nanaksar in Winnipeg began in 1982, when the local sangat bought a church on St David Road, borrowing against their own homes, after a visit by Sant Baba Gurdev Singh Ji of Nanaksar. Kirtan began there in July 1982. The Gurdwara is known for its large dome and holds a monthly Pooranmashi programme.' },
        { n: 'Winnipeg South Sikh Centre', c: 'Winnipeg', wg: 'winnipeg-south-sikh-centre', a: '1248 Wilkes Ave', pc: 'R3S 0A1', ph: '(204) 488-7096', w: 'https://southsikhcentre.ca/',
          p: 'Winnipeg South Sikh Centre on Wilkes Avenue is a registered charity serving south Winnipeg. Parkash is at 5 am and Rehras at 5:30 pm each day, and the Sunday Kirtan Darbar runs through the morning, followed by langar in the hall downstairs. Its website explains Gurdwara etiquette for first-time visitors.' },
        { n: 'Gurdwara Sahib St. Norbert', c: 'Winnipeg (St. Norbert)', wg: 'gurdwara-sahab-st-norbert', a: '3511 Pembina Hwy',
          p: 'Gurdwara Sahib St. Norbert on Pembina Highway serves Sikh families and University of Manitoba students in south Winnipeg. It offers daily prayers, kirtan and langar.' },
        { n: 'Ramgarhia Association of Manitoba', c: 'Winnipeg', wg: 'deshmesh-darbar-gurdwara-manitoba', a: '566 Archibald St', ph: '(204) 237-7788',
          p: 'The Ramgarhia Association of Manitoba runs a Gurdwara on Archibald Street in Winnipeg. It serves all sangat with daily diwan, kirtan and langar.' },
        { n: 'Dukh Niwaran Sewa Society of Manitoba', c: 'West Pine Ridge', wg: 'dukh-niwaran-sewa-society-of-manitoba-inc', a: '4337 Ross Farm Rd', pc: 'R1C 0E5', ph: '(204) 481-5481',
          p: 'Dukh Niwaran Sewa Society of Manitoba is a registered charity with a Gurdwara on Ross Farm Road in West Pine Ridge, just east of Winnipeg. It serves the sangat with prayer, kirtan and langar in a quiet rural setting.' }
      ]
    },
    {
      name: 'Quebec', abbr: 'QC',
      intro: 'Most of Quebec’s Gurdwaras are on the island of Montreal and its suburbs, with one more in Quebec City.',
      list: [
        { n: 'Gurdwara Guru Nanak Darbar, Park Extension', c: 'Montreal (Park Extension)', wg: 'gurdwara-nanak-darbar-community-center-montreal', a: '430 Rue Saint-Roch', pc: 'H3N 1K2', ph: '(514) 270-6600', w: 'https://montrealgurudwara.com/',
          p: 'This Gurdwara on Rue Saint-Roch serves Park Extension, the Montreal neighbourhood where many South Asian families first settled. It is run by the same Guru Nanak Darbar sangat as the LaSalle Gurdwara and a third Gurdwara in Hudson, Quebec.' },
        { n: 'Shri Guru Ravidass Temple Gurbani Sagar', c: 'Montreal', wg: 'gurbani-sagar-montreal', a: '8205 Rue Durocher',
          p: 'Shri Guru Ravidass Temple Gurbani Sagar on Rue Durocher is devoted to the teachings of Bhagat Ravidas Ji, whose bani is part of Sri Guru Granth Sahib. The sangat gathers here for kirtan, paath and langar.' },
        { n: 'Nanaksar Montreal', c: 'Montreal (Verdun)', wg: 'nanaksar-montreal', a: '7325 Rue Ouimet',
          p: 'Nanaksar Montreal is a Gurdwara of the Nanaksar tradition on Rue Ouimet, serving sangat in Verdun and south-west Montreal with continuous paath, kirtan and langar.' },
        { n: 'Gurdwara Guru Nanak Darbar, LaSalle', c: 'Montreal (LaSalle)', wg: 'gurdwara-guru-nanak-darbar-lasalle', a: '7801 Rue Cordner', pc: 'H8N 2X2', y: '2001', w: 'https://montrealgurudwara.com/',
          p: 'Gurdwara Guru Nanak Darbar in LaSalle was built in 2001 and is known for its towering 172-foot Nishan Sahib. The day begins with Parkash at 4 am and closes with kirtan in the evening, and the Gurdwara runs Punjabi and kirtan classes and streams its programmes online. Thousands of students and other visitors have come here to learn about Sikhi, and the sangat has taken langar sewa as far as Quebec City.' },
        { n: 'Gurdwara Sahib Greater Montreal', c: 'Dollard-des-Ormeaux', wg: 'gurdwara-sahib-greater-montreal', a: '1155 Hyman St',
          p: 'Gurdwara Sahib Greater Montreal on Hyman Street serves Sikh families in Dollard-des-Ormeaux and Montreal’s West Island with daily prayers, kirtan and langar.' },
        { n: 'Gurdwara Brahm Bunga Sahib', c: 'Brossard', wg: 'gurdwara-brahm-bunga-sahib-brossard', a: '6255 Grande Allée',
          p: 'Gurdwara Brahm Bunga Sahib on Grande Allée serves Sikhs on Montreal’s South Shore in Brossard. The sangat gathers here for kirtan, paath and langar.' },
        { n: 'Gurdwara Sahib Vaudreuil-Dorion', c: 'Vaudreuil-Dorion', wg: 'gurdwara-sahib-vaudreuil-dorion', a: '2970 Route Harwood',
          p: 'Gurdwara Sahib Vaudreuil-Dorion on Route Harwood serves Sikh families west of Montreal island, offering daily prayers, kirtan and langar.' },
        { n: 'Gurdwara Sahib Quebec', c: 'Quebec City', wg: 'gurdwara-sahib-quebec', a: '2183 Rue Wellington',
          p: 'Gurdwara Sahib Quebec on Rue Wellington is the Gurdwara of Quebec City, the provincial capital. It serves a small sangat of families and students and welcomes visitors who want to learn about Sikhi.' }
      ]
    },
    {
      name: 'Saskatchewan', abbr: 'SK',
      intro: 'Saskatchewan’s sangats are centred on its two largest cities, Saskatoon and Regina.',
      list: [
        { n: 'Sikh Society of Saskatchewan', c: 'Saskatoon', wg: 'sikh-society-of-saskatchewan', a: '331 Lowe Rd',
          p: 'The Sikh Society of Saskatchewan runs the Gurdwara on Lowe Road in Saskatoon. It serves the city’s Sikh families and students at the University of Saskatchewan with daily prayers, kirtan and langar.' },
        { n: 'Gurdwara Corman Park', c: 'Corman Park (near Saskatoon)', wg: 'gurdwara-corman-park', a: '37042 Range Rd 3062',
          p: 'This Gurdwara stands in the Rural Municipality of Corman Park on the edge of Saskatoon, and shares its news as Gurudwara Shaheeda SK. It serves the growing sangat of the Saskatoon area with prayer, kirtan and langar.' },
        { n: 'Gurdwara Sahib Regina', c: 'Regina', wg: 'sikh-society-of-regina', a: '3905 Princess Dr', pc: 'S4S 0E8',
          p: 'Gurdwara Sahib Regina is the city’s long-established Gurdwara, which has moved to a new home on Princess Drive. It serves Regina’s sangat with daily prayers, kirtan and langar.' },
        { n: 'Gurudwara Guru Nanak Sikh Centre', c: 'Regina', wg: 'gurudwara-guru-nanak-sikh-centre-regina', a: '1208 McDonald St',
          p: 'Gurudwara Guru Nanak Sikh Centre on McDonald Street serves Sikh families in Regina, offering a place for paath, kirtan and langar.' }
      ]
    },
    {
      name: 'Nova Scotia', abbr: 'NS',
      intro: 'A small, close-knit sangat serves Sikhs in Halifax and the rest of Nova Scotia.',
      list: [
        { n: 'Maritime Sikh Society', c: 'Halifax', wg: 'maritime-sikh-society', a: '10 Parkhill Rd', ph: '(902) 477-0008',
          p: 'The Maritime Sikh Society runs the Gurdwara on Parkhill Road in Halifax, the main Sikh place of worship in Nova Scotia. It serves local families and the many Sikh students at Halifax’s universities with prayer, kirtan and langar.' }
      ]
    },
    {
      name: 'New Brunswick', abbr: 'NB',
      intro: 'New Brunswick’s Sikh community is small and growing, with a Gurdwara in the south-east of the province.',
      list: [
        { n: 'Atlantic Khalsa Darbar', c: '', wg: 'atlantic-khalsa-darbar', a: '17 MacArthur Lane, Route 133', ph: '(506) 875-4317',
          p: 'Atlantic Khalsa Darbar on Route 133 in south-eastern New Brunswick serves Sikh families and students in the Moncton–Shediac area and across Atlantic Canada. It shares its programmes on Facebook as Atlantic Khalsa.' }
      ]
    },
    {
      name: 'Newfoundland and Labrador', abbr: 'NL',
      intro: 'The sangat in Newfoundland and Labrador gathers in St. John’s, on Canada’s Atlantic edge.',
      list: [
        { n: 'Newfoundland Sikh Society', c: 'St. John’s', wg: 'new-foundland-sikh-society', a: '680 Logy Bay Rd', ph: '(709) 754-7454',
          p: 'The Newfoundland Sikh Society runs the Gurdwara on Logy Bay Road in St. John’s, on Canada’s Atlantic edge. It serves local families and Memorial University students with prayer, kirtan and langar.' }
      ]
    },
    {
      name: 'Yukon', abbr: 'YT',
      intro: 'Whitehorse, on the Alaska Highway, is home to one of the most northerly Sikh sangats in Canada. The city’s first Gurdwara opened in 2020.',
      list: [
        { n: 'Gurdwara Akaljot Sahib', c: 'Whitehorse', wg: 'gurdwara-akaljot-sahib-whitehorse-yukon', a: '91678 Alaska Hwy',
          p: 'Gurdwara Akaljot Sahib on the Alaska Highway serves the Sikh community of Whitehorse, one of the newest and most northerly sangats in Canada. The Gurdwara offers prayer, kirtan and langar to residents and to travellers on the highway north to Alaska.' }
      ]
    }
  ]
};
