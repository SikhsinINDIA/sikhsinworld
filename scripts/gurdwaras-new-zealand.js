/* Gurdwaras in New Zealand, region by region.
   Each Gurdwara: n name, c city or suburb, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   Names and addresses from the gurdwaras.com New Zealand directory (Oct 2026), with
   facts from Te Ara (the Encyclopedia of New Zealand), Indian Newslink and others.
   Empty fields are simply left out. */
module.exports = {
  country: 'New Zealand', code: 'NZ', dial: '64',
  division: 'Region', divisions: 'regions',
  banner: 'Sikhs first came to New Zealand in the early 1900s. The country’s first Gurdwara opened at Te Rapa, near Hamilton, in 1977, and today there are Gurdwaras from Auckland to Christchurch.',
  provinces: [
    {
      name: 'Auckland', abbr: 'Auckland',
      intro: 'Auckland is home to most of New Zealand’s Sikhs, and the great majority of its Gurdwaras are in the south of the city, around Takanini, Papakura, Manurewa and Papatoetoe.',
      list: [
        { n: 'Gurdwara Sri Kalgidhar Sahib', c: 'Takanini', a: '70 Takanini School Road', pc: '2112', ph: '+64 9 296 2376', y: '2005', w: 'https://www.supremesikhsociety.co.nz/',
          p: 'Gurdwara Sri Kalgidhar Sahib in Takanini is the largest Gurdwara in New Zealand. It is run by the Supreme Sikh Society, formed in 1982 as the New Zealand Sikh Society Auckland; its foundation stone was laid in 2002 and the complex was opened on 13 March 2005 in the presence of Prime Minister Helen Clark. It is open every day from 6 am to 9 pm.' },
        { n: 'Gurdwara Otahuhu', aka: 'Guru Nanak Sikh Sangat Gurdwara Sahib', c: 'Otahuhu', a: '120 Princes Street', pc: '1062', ph: '+64 9 276 9043',
          p: 'The Gurdwara on Princes Street in Otahuhu, known as Guru Nanak Sikh Sangat, was Auckland’s first Gurdwara. It was run by the New Zealand Sikh Society Auckland until the growing sangat outgrew it and the society built the larger Gurdwara at Takanini; the sangat still gathers here for prayer, kirtan and langar.' },
        { n: 'Gurdwara Dukh Niwaran Sahib', c: 'Papakura', a: '7/46 Broadway', pc: '2110', ph: '+64 9 298 5905', w: 'http://www.gdns.co.nz/',
          p: 'Gurdwara Dukh Niwaran Sahib on Broadway in Papakura serves the Sikh families of Auckland’s southern edge. It is open from sunrise to sunset and shares its programmes on Facebook and YouTube.' },
        { n: 'Begampura Gurudwara Sahib', c: 'Papakura', a: '1/9 Vernon Street', pc: '2110', ph: '+64 9 298 2811',
          p: 'Begampura Gurudwara Sahib in Papakura takes its name from Begampura, the city without sorrow described in the bani of Bhagat Ravidas Ji. The sangat gathers here for kirtan, paath and langar.' },
        { n: 'Nanaksar Sikh Temple', c: 'Manurewa', a: 'Great South Road', pc: '2102', ph: '+64 9 266 3590',
          p: 'Nanaksar Sikh Temple on Great South Road in Manurewa follows the Nanaksar tradition of continuous paath and kirtan. It is open every day from 5 am to 9 pm.' },
        { n: 'Nanaksar Thath Isher Darbar', c: 'Manurewa', a: '53 Grande Vue Road', pc: '2102',
          p: 'Nanaksar Thath Isher Darbar on Grande Vue Road in Manurewa is a Gurdwara of the Nanaksar sampardai, known for its peaceful atmosphere and steady Gurbani paath.' },
        { n: 'Gurdwara Sahib Shri Guru Teg Bahadur Ji', c: 'Papatoetoe', a: '24 Dunnotar Road', pc: '2025', ph: '+64 9 277 9455',
          p: 'This Gurdwara on Dunnotar Road in Papatoetoe is named after the ninth Guru, Guru Tegh Bahadur Ji. It serves the large Sikh community of Papatoetoe with daily prayers, kirtan and langar.' },
        { n: 'Gurudwara Sri Dasmesh Darbar', c: 'Papatoetoe', a: '166 Kolmar Road', pc: '2025', ph: '+64 9 279 9888', w: 'https://www.dasmeshdarbar.co.nz/',
          p: 'Gurudwara Sri Dasmesh Darbar on Kolmar Road in Papatoetoe takes its name from Guru Gobind Singh Ji, the tenth Guru. It holds daily diwan and langar and streams its programmes on YouTube.' },
        { n: 'Gurdwara Sri Guru Singh Sabha', c: 'Otara', pc: '2025',
          p: 'Gurdwara Sri Guru Singh Sabha serves the sangat of Otara and Papatoetoe in South Auckland. It is open every day from 5 am to 8 pm.' },
        { n: 'Gurdwara Sri Guru Hargobind Sahib Ji Patshahi 6', c: 'East Tamaki', a: '84 Lady Ruby Drive', pc: '2013', ph: '+64 21 962 400', w: 'http://www.sikhsangatnz.com/',
          p: 'This Gurdwara on Lady Ruby Drive in East Tamaki is named after the sixth Guru, Guru Hargobind Sahib Ji. It serves Sikh families in East Tamaki and the eastern suburbs with prayer, kirtan and langar.' },
        { n: 'Sri Guru Singh Sabha Auckland', c: 'Brookby', a: '96 Kimptons Road', pc: '2576',
          p: 'Sri Guru Singh Sabha Auckland has its Gurdwara on Kimptons Road in Brookby, in the rural hills south-east of the city. The sangat comes here for paath, kirtan and langar in a quiet country setting.' },
        { n: 'Gurdwara Sahib North Shore', c: 'Hillcrest (North Shore)', a: '128 Sunnybrae Road', pc: '0627', ph: '+64 9 444 4443',
          p: 'Gurdwara Sahib North Shore on Sunnybrae Road in Hillcrest is the Gurdwara for Sikhs on Auckland’s North Shore. It is open every day from 5 am to 10 pm.' },
        { n: 'Gurudwara Sri Guru Harkrishan Sahib', c: 'New Lynn', a: '4/3034 Great North Road', pc: '0600', ph: '+64 9 826 1300', w: 'https://gurudwara.co.nz/',
          p: 'Gurudwara Sri Guru Harkrishan Sahib on Great North Road in New Lynn serves the Sikh families of West Auckland. It is named after the eighth Guru, Guru Harkrishan Sahib Ji, and has opened its doors to the public through Auckland Council’s Exploring Sacred Spaces programme.' }
      ]
    },
    {
      name: 'Waikato', abbr: 'Waikato',
      intro: 'The Waikato is where New Zealand’s Gurdwaras began: the first opened at Te Rapa, on the edge of Hamilton, in 1977.',
      list: [
        { n: 'Sikh Temple Hamilton', c: 'Hamilton', pc: '3241',
          p: 'The Sikh Temple in Hamilton serves the Waikato sangat and is open every day from 5 am to 9 pm. Hamilton has a special place in New Zealand Sikh history, as the country’s first Gurdwara opened at Te Rapa, on the city’s edge, in 1977.' },
        { n: 'Babe Ke Gurudwara Sahib', c: 'Huntly', a: '193 Hetherington Road', pc: '3772',
          p: 'Babe Ke Gurudwara Sahib on Hetherington Road serves Sikh families in Huntly and the northern Waikato with prayer, kirtan and langar.' }
      ]
    },
    {
      name: 'Bay of Plenty', abbr: 'Bay of Plenty',
      intro: 'The Bay of Plenty has a large Sikh community, many of whom work in the region’s kiwifruit orchards, with Gurdwaras in Tauranga, Te Puke and Rotorua.',
      list: [
        { n: 'Gurudwara Kalgidhar Sahib', c: 'Tauranga', a: '342 Cheyne Road, Pyes Pa', pc: '3112', ph: '+64 7 543 4317',
          p: 'Gurudwara Kalgidhar Sahib on Cheyne Road in Pyes Pa, Tauranga, takes its name from Guru Gobind Singh Ji. It serves the Bay of Plenty sangat with daily prayers, kirtan and langar.' },
        { n: 'Gurudwara Sikh Sangat', c: 'Tauranga', a: '43 Burrows Street', pc: '3112', ph: '+64 7 578 4613',
          p: 'Gurudwara Sikh Sangat on Burrows Street in Tauranga South is a Gurdwara close to the centre of Tauranga, offering prayer, kirtan and langar to the city’s Sikh families.' },
        { n: 'Gurudwara Te Puke', c: 'Te Puke', a: '26 No 3 Road', pc: '3183', w: 'http://gurudwara-te-puke.jany.io/',
          p: 'Gurudwara Te Puke on No 3 Road serves the Sikh community of Te Puke, the kiwifruit capital of New Zealand. The town held its first Sikh parade (Nagar Kirtan) in recent years, giving locals a glimpse of the sangat’s life.' },
        { n: 'Gurdwara Sri Guru Amardas Sahib Ji', c: 'Rotorua', pc: '3010',
          p: 'Gurdwara Sri Guru Amardas Sahib Ji in Rotorua is named after the third Guru, Guru Amar Das Ji, who made langar central to Sikh life. It serves the Sikh families of Rotorua.' }
      ]
    },
    {
      name: 'Hawke’s Bay', abbr: 'Hawke’s Bay',
      intro: 'Hastings, in the fruit-growing heart of Hawke’s Bay, has two Gurdwaras serving the region’s Sikh families.',
      list: [
        { n: 'Sikh Temple Hastings', c: 'Hastings', a: '402 Eastbourne Street East', pc: '4122', ph: '+64 6 870 7039',
          p: 'The Sikh Temple on Eastbourne Street East serves the Sikh community of Hastings and Hawke’s Bay with prayer, kirtan and langar.' },
        { n: 'Gurudwara Guru Ravidas Temple', c: 'Hastings', a: '193 Havelock Road, Akina', pc: '4122',
          p: 'Gurudwara Guru Ravidas Temple on Havelock Road in Akina, Hastings, is devoted to the teachings of Bhagat Ravidas Ji, whose bani is part of Sri Guru Granth Sahib.' }
      ]
    },
    {
      name: 'Gisborne', abbr: 'Gisborne',
      intro: 'Gisborne, on the East Cape, is the first city in the world to see the sun each day, and has its own Gurdwara.',
      list: [
        { n: 'Gisborne Sikh Temple', c: 'Gisborne', a: 'Solander Street', pc: '4010',
          p: 'Gisborne Sikh Temple on Solander Street serves the Sikh families of Tairāwhiti. It is open every day from 6 am to 9 pm.' }
      ]
    },
    {
      name: 'Manawatū-Whanganui', abbr: 'Manawatū-Whanganui',
      intro: 'Palmerston North, a university city in the lower North Island, has two Gurdwaras.',
      list: [
        { n: 'Gurudwara Shri Fateh Sahib', c: 'Palmerston North', a: '444 Botanical Road, West End', pc: '4412', w: 'https://pnsikhsociety.org/',
          p: 'Gurudwara Shri Fateh Sahib on Botanical Road is run by the Palmerston North Sikh Society. It is open from 3 am to 11 pm from Monday to Saturday, and all day on Sundays.' },
        { n: 'Gurudwara Sri Guru Harkishan Sahib Ji', c: 'Palmerston North', a: 'Amesbury Street', pc: '4410',
          p: 'Gurudwara Sri Guru Harkishan Sahib Ji on Amesbury Street in Palmerston North is named after the eighth Guru, Guru Harkrishan Sahib Ji, and serves the city’s sangat with prayer, kirtan and langar.' }
      ]
    },
    {
      name: 'Wellington', abbr: 'Wellington',
      intro: 'The Wellington region’s Gurdwara is in Naenae, Lower Hutt. When it opened in 1997 it was the southernmost Gurdwara in the world.',
      list: [
        { n: 'Wellington Gurudwara Sahib', c: 'Lower Hutt', a: '4/10 Vogel Street, Naenae', pc: '5011', ph: '+64 4 577 2446', y: '1997', w: 'https://www.wellingtongurudwara.org/',
          p: 'Wellington Gurudwara Sahib in Naenae, Lower Hutt, is run by the New Zealand Sikh Society Wellington. When it opened in 1997 it was the southernmost Gurdwara in the world, a title it held until Christchurch’s Gurdwara opened in 2009. It is open 24 hours a day.' }
      ]
    },
    {
      name: 'Canterbury', abbr: 'Canterbury',
      intro: 'Christchurch, the largest city in the South Island, opened its first Gurdwara in 2009 and now has two.',
      list: [
        { n: 'Gurdwara Jagat Guru Nanak Sahib', c: 'Christchurch', a: '6 Branston Street, Hornby', pc: '8042', ph: '+64 27 661 1000',
          p: 'Gurdwara Jagat Guru Nanak Sahib on Branston Street in Hornby serves the Sikh families of Christchurch’s western suburbs with prayer, kirtan and langar.' },
        { n: 'Gurudwara Singh Sabha', c: 'Christchurch', a: 'Ferry Road', pc: '8023',
          p: 'Gurudwara Singh Sabha on Ferry Road serves the Christchurch sangat and shares its programmes on Facebook. It is one of the southernmost Gurdwaras in the world.' }
      ]
    }
  ]
};
