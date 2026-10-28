/* Gurdwaras in Australia, state by state.
   Each Gurdwara: n name, c city or suburb, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   Names and addresses from the Sikh Youth Australia Gurdwara list (Oct 2026), with
   facts from SBS, Queensland Religious Places, State Library of SA and WA, and others.
   Empty fields are simply left out. */
module.exports = {
  country: 'Australia', code: 'AU', dial: '61',
  division: 'State', divisions: 'states and territories',
  banner: 'Sikhs first came to Australia in the late 1800s, and the country’s first Gurdwara opened in Woolgoolga in 1968. Today there are Gurdwaras in every mainland state.',
  provinces: [
    {
      name: 'New South Wales', abbr: 'NSW',
      intro: 'New South Wales has Australia’s oldest Gurdwaras, on the north coast at Woolgoolga, and its largest Sikh community in western and south-western Sydney. There are also sangats in Newcastle, Griffith and Murwillumbah.',
      list: [
        { n: 'Gurdwara Sahib Glenwood', aka: 'Australian Sikh Association', c: 'Glenwood', a: '10 Meurants Lane', pc: '2768', ph: '(02) 9622 6994',
          p: 'The Gurdwara Sahib at Glenwood, in Sydney’s north-west, is run by the Australian Sikh Association, which describes itself as the largest registered Sikh body in the Southern Hemisphere. It manages The Sikh Centre and serves the sangat of Greater Western Sydney, and on major Gurpurabs more than 5,000 people come for diwan and langar.' },
        { n: 'Sri Guru Singh Sabha', c: 'Revesby', a: '14-18 The River Road', pc: '2212', ph: '(02) 9785 0567', y: '1978',
          p: 'Sri Guru Singh Sabha in Revesby, in south-western Sydney, opened in 1978 in two houses bought from the Sydney City Mission. The sangat later added the neighbouring property for a Khalsa School and the Guru Nanak Library, and bought more land in 1982 and 1999 so the Gurdwara could grow.' },
        { n: 'Sikh Mission Centre', c: 'Austral', a: '170 Ninth Avenue', pc: '2171', ph: '(02) 9606 0270',
          p: 'The Sikh Mission Centre in Austral serves the fast-growing suburbs of south-western Sydney. Alongside daily prayers, kirtan and langar, it hosts community gatherings and prayer meetings, which local members of parliament have also joined.' },
        { n: 'Simran House', c: 'Minto', a: '23 Lincoln Street', pc: '2566', ph: '1300 541 116',
          p: 'Simran House on Lincoln Street in Minto serves the Sikh families of Campbelltown and Sydney’s outer south-west. A Gurdwara at this address, Gurdwara Mata Sahib Kaur Ji, was set up in 2007 for Sydney’s growing sangat, and the sangat gathers here for simran, kirtan and langar.' },
        { n: 'Ramgarhia Welfare Association of Australia', c: 'Wentworthville', a: 'Banksia Room, Wentworthville Community Centre, 2 Lane Street', pc: '2145',
          p: 'The Ramgarhia Welfare Association of Australia holds its diwan in the Banksia Room of the Wentworthville Community Centre, near Parramatta. Founded by Sikhs of the Ramgarhia community, it welcomes all sangat to its programmes of kirtan and langar.' },
        { n: 'Sikh Association of Australia, Penrith', c: 'Jamisontown (Penrith)', a: '15-27 Blaikie Road', pc: '2750', ph: '(02) 4702 1344', w: 'http://www.saapenrith.com.au/',
          p: 'The Sikh Association of Australia runs the Gurdwara on Blaikie Road in Jamisontown, Penrith, at the foot of the Blue Mountains. It serves Sikh families across Penrith and the outer west of Sydney with daily prayers, kirtan and langar.' },
        { n: 'Turramurra Gurdwara', c: 'Turramurra', a: '81 Kissing Point Road', pc: '2074',
          p: 'The Gurdwara on Kissing Point Road in Turramurra, also known as Guru Nanak Gurdwara, has served Sydney’s upper north shore since around 1979, making it one of the oldest Gurdwaras in Sydney. It is open from early morning to night, and welcomes visiting community groups.' },
        { n: 'Newcastle Sikh Association', c: 'Shortland (Newcastle)', a: '27 Marton Street',
          p: 'The Newcastle Sikh Association runs the Gurdwara on Marton Street in Shortland, serving Sikh families and University of Newcastle students in the Hunter region with prayer, kirtan and langar.' },
        { n: 'Sikh Association of Griffith', c: 'Yoogali (Griffith)', a: '13 Edon Street', pc: '2680', ph: '(02) 6964 6080',
          p: 'The Sikh Association of Griffith runs a Gurdwara in Yoogali, on the edge of Griffith in the Riverina. Many Punjabi Sikh families have settled here to farm the irrigated fruit and vegetable lands, and the Gurdwara is a centre of their community life.' },
        { n: 'Guru Nanak Sikh Temple', c: 'Woolgoolga', a: '13 River Street', pc: '2456', ph: '(02) 6654 1655',
          p: 'Guru Nanak Sikh Temple in Woolgoolga, on the New South Wales north coast, was the town’s second Gurdwara, built at the end of the 1960s. Woolgoolga is home to one of Australia’s oldest Sikh communities, whose families have farmed bananas and blueberries here for generations.' },
        { n: 'The First Sikh Temple', c: 'Woolgoolga', a: '14 Hastings Street', pc: '2456', ph: '(02) 6654 1655', y: '1968',
          p: 'The First Sikh Temple in Woolgoolga was officially opened on 8 June 1968 and is believed to be Australia’s first Gurdwara. The original building has been heritage-listed by the New South Wales government, and a new temple was built in 2019 to serve the sangat, with the old building set to become a Sikh museum.' },
        { n: 'Murwillumbah Sikh Temple', c: 'Murwillumbah', a: '29 Nullum Street', pc: '2484', ph: '(02) 6672 1104',
          p: 'Murwillumbah Sikh Temple serves the Sikh families of the Tweed Valley in far northern New South Wales, near the Queensland border. The Gurdwara offers prayer, kirtan and langar to locals and visitors.' }
      ]
    },
    {
      name: 'Victoria', abbr: 'VIC',
      intro: 'Victoria’s Sikh community, centred on Melbourne, is one of the fastest growing in Australia. Its Gurdwaras range from Blackburn in the east to Craigieburn, Tarneit and Cranbourne on the city’s edges, and Shepparton in the north of the state.',
      list: [
        { n: 'Sri Guru Nanak Satsang Sabha', c: 'Blackburn', a: '127 Whitehorse Road', pc: '3130', ph: '(03) 9894 1800',
          p: 'Sri Guru Nanak Satsang Sabha in Blackburn is often described as Melbourne’s first Gurdwara. The sangat came together in 1984 and moved to its present home on Whitehorse Road in 1993, and in 2018 the Victorian Government announced A$1 million to help refurbish the building.' },
        { n: 'Gurdwara Sri Guru Granth Sahib', c: 'Keysborough', a: '198-206 Perry Road', pc: '3173', ph: '(03) 9798 1313',
          p: 'Gurdwara Sri Guru Granth Sahib in Keysborough, in Melbourne’s south-east, is one of the largest Gurdwaras in Australia. Its traditional-style building with golden domes can be seen from a distance, and its langar hall serves free meals to visitors on most days.' },
        { n: 'Sri Guru Singh Sabha Craigieburn', aka: 'Sri Guru Granth Sahib Inc', c: 'Craigieburn', a: '344 Hume Highway', pc: '3064', ph: '(03) 9305 6511',
          p: 'This Gurdwara on the Hume Highway in Craigieburn, also known as Sri Guru Singh Sabha Melbourne, serves the large Sikh community of Melbourne’s northern suburbs. It holds daily prayers, kirtan and langar, and takes part in local interfaith tours.' },
        { n: 'Nanaksar Thath', c: 'Lynbrook', a: '430 Evans Road', pc: '3975', ph: '(03) 9799 1081',
          p: 'Nanaksar Thath on Evans Road, between Lynbrook and Cranbourne in Melbourne’s south-east, follows the Nanaksar tradition of continuous paath and kirtan. Sangat from across the south-eastern suburbs come here for prayer and langar.' },
        { n: 'Sri Guru Nanak Sabha', c: 'Hoppers Crossing', a: '417 Sayers Road', pc: '3029', ph: '(03) 9749 2639',
          p: 'Sri Guru Nanak Sabha on Sayers Road in Hoppers Crossing serves the Sikh families of the City of Wyndham in Melbourne’s west. It holds daily diwan and langar, and welcomes visitors on local interfaith tours.' },
        { n: 'Gurdwara Sahib Werribee', c: 'Tarneit', a: '560 Davis Road', pc: '3029', ph: '(03) 8015 4707',
          p: 'Gurdwara Sahib Werribee, on Davis Road in Tarneit, serves the fast-growing Sikh community of Melbourne’s outer west with daily prayers, kirtan and langar.' },
        { n: 'Gurdwara Sahib Shepparton', c: 'Shepparton', a: '240 Doyles Road', pc: '3630', ph: '(03) 5821 9309',
          p: 'Gurdwara Sahib Shepparton serves Sikh families in the Goulburn Valley of northern Victoria. It is a place of prayer, kirtan and langar for the town and nearby areas.' }
      ]
    },
    {
      name: 'Queensland', abbr: 'QLD',
      intro: 'Queensland’s sangats are centred on Brisbane, with Gurdwaras also on the Gold Coast and in Townsville in the north.',
      list: [
        { n: 'Brisbane Sikh Temple', aka: 'Queensland Sikh Association', c: 'Eight Mile Plains', a: '2679 Logan Road', pc: '4113', ph: '(07) 3841 1987',
          p: 'Brisbane Sikh Temple at Eight Mile Plains is run by the Queensland Sikh Association and is the main place of worship for Sikhs in South East Queensland. The congregation began meeting in 1981, the foundation stone was laid by the Panj Pyare on Vaisakhi in 1988, and the sangat moved into the new Gurdwara that December.' },
        { n: 'Guru Nanak Sikh Temple Inala', aka: 'Guru Nanak Sikh Education Centre', c: 'Inala', a: '16 Rosemary Street', pc: '4077', ph: '(07) 3714 9509', w: 'http://www.brisbanegurdwara.org.au/',
          p: 'Guru Nanak Sikh Temple in Inala, in Brisbane’s south-west, serves the Sikh families of Brisbane’s western suburbs. Alongside daily prayers, kirtan and langar, it runs the Guru Nanak Sikh Education Centre at the same address.' },
        { n: 'Gold Coast Sikh Temple', c: 'Robina', a: 'Robina Community Centre', ph: '(07) 5539 5995',
          p: 'The Gold Coast sangat holds its diwan at the Robina Community Centre. The Sikh community on the Gold Coast has grown steadily since the 1980s and gathers here for kirtan, Gurpurabs and langar.' },
        { n: 'Gurdwara Sahib Townsville', c: 'Railway Estate (Townsville)', a: '60 Railway Avenue', w: 'http://gncst.webs.com/',
          p: 'Gurdwara Sahib Townsville on Railway Avenue serves Sikh families and students in North Queensland. It offers prayer, kirtan and langar to locals and to travellers in the tropical north.' }
      ]
    },
    {
      name: 'South Australia', abbr: 'SA',
      intro: 'South Australia’s Sikh community lives mostly in Adelaide, with a long-established farming sangat in the Riverland along the River Murray.',
      list: [
        { n: 'Sikh Society of South Australia', c: 'Glen Osmond', a: '10 Mount Barker Road', pc: '5064', ph: '(08) 8379 4420', y: '2006',
          p: 'The Sikh Society of South Australia opened this Gurdwara in March 2006 in the former Colonial Hotel at Glen Osmond, a State Heritage building that dates from 1845. The Gurdwara is the focus of Adelaide’s Vaisakhi celebrations, and the society’s membership has grown quickly with the arrival of many international students.' },
        { n: 'Gurdwara Guru Nanak Darbar', c: 'Allenby Gardens', a: '7A Barham Street', pc: '5009', ph: '(08) 8346 6281',
          p: 'Gurdwara Guru Nanak Darbar in Allenby Gardens serves the Sikh families of Adelaide’s western suburbs with daily prayers, kirtan and langar.' },
        { n: 'Sarbat Khalsa Gurdwara Sahib', c: 'Prospect', a: '16-18 King Street', pc: '5082', ph: '0411 329 062',
          p: 'Sarbat Khalsa Gurdwara Sahib on King Street in Prospect serves the sangat of Adelaide’s inner north with prayer, kirtan and langar.' },
        { n: 'Riverland Sikh Society', c: 'Glossop', a: 'Sturt Highway', pc: '5344', ph: '(08) 8583 2149',
          p: 'The Riverland Sikh Society’s Gurdwara at Glossop was built by local families, who bought two shops for $36,000, took them down and put up a new building. In 1980 only 10 to 12 Sikh families lived in the Riverland, mostly as seasonal farm workers; today there are around 200 to 250 families, many with their own farms.' }
      ]
    },
    {
      name: 'Western Australia', abbr: 'WA',
      intro: 'Sikhs have lived in Western Australia for more than a century, and Perth’s sangat has grown from a dozen people in 1975 to many thousands today.',
      list: [
        { n: 'Sikh Association of Western Australia', c: 'Canning Vale', a: '280 Shreeve Road', pc: '6155', ph: '(08) 9256 1314', y: '2001',
          p: 'The Sikh Association of Western Australia was registered in 1975, when Perth had only about a dozen Sikhs. It met in homes and halls, bought a small church in Kensington in 1985, and in 1997 bought five acres at Canning Vale. The Gurdwara built there opened on 4 March 2001, and its Sunday langar now feeds hundreds of people.' },
        { n: 'Sikh Gurdwara Perth', c: 'Bayswater', a: '13 Murray Street', pc: '6053', ph: '(08) 9371 5850',
          p: 'Sikh Gurdwara Perth on Murray Street in Bayswater serves the Sikh families of Perth’s eastern suburbs. Its sangat has also taken part in the Australian Sikh Heritage Trail at Riverton, which remembers the early Sikh pioneers of Western Australia.' }
      ]
    },
    {
      name: 'Australian Capital Territory', abbr: 'ACT',
      intro: 'Canberra’s Sikh community gathers at the Gurdwara in Weston, in the Weston Creek area of the capital.',
      list: [
        { n: 'Canberra Sikh Association', c: 'Weston', a: '15 Hicket Court', pc: '2611',
          p: 'The Canberra Sikh Association runs the Gurdwara in Weston, which serves the sangat of the national capital. In 2019 the association put forward plans for a larger two-storey Gurdwara with gold domes, able to seat 400 people, built around its existing temple.' }
      ]
    }
  ]
};
