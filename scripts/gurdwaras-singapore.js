/* Gurdwaras in Singapore, region by region.
   Each Gurdwara: n name, c neighbourhood, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   Names, addresses and phone numbers from SikhiWiki’s list of Singapore Gurdwaras, with
   history from Roots.sg, Asia Samachar, the Gurdwaras’ own histories (via All About Sikhs)
   and The Travelling Singh (Jan 2026). Empty fields are simply left out. */
module.exports = {
  country: 'Singapore', code: 'SG', dial: '65',
  division: 'Region', divisions: 'regions',
  banner: 'Sikhs came to Singapore in the 1800s, many as police and soldiers. The first Gurdwara opened on Queen Street in 1912, and today seven Gurdwaras serve the island’s Sikh community.',
  provinces: [
    {
      name: 'Central Region', abbr: 'Singapore',
      intro: 'All but one of Singapore’s Gurdwaras are in the Central Region, from the great Central Sikh Gurdwara on Towner Road to Silat Road, Little India, Katong and Geylang.',
      list: [
        { n: 'Central Sikh Gurdwara', aka: 'Central Sikh Temple', c: 'Kallang', a: '2 Towner Road', pc: '327804', ph: '+65 6299 3855', y: '1912', w: 'https://www.sikhs.org.sg/',
          p: 'The Central Sikh Gurdwara, also called the Wadda Gurdwara or Big Gurdwara, began in 1912 when Sikhs bought a bungalow on Queen Street with the help of a Sindhi merchant, Wassiamull. The present building on Towner Road was built from 1984 and opened in 1986. Run by the Central Sikh Gurdwara Board, it is known for the large pool that visitors walk past on the way to the darbar hall, and for a darbar where the sangat first walks around the edge of the hall to reach the Guru Granth Sahib.' },
        { n: 'Gurdwara Sahib Silat Road', c: 'Bukit Merah', a: '8 Jalan Bukit Merah', pc: '169543', ph: '+65 6222 2208', y: '1924', w: 'https://www.sikhs.org.sg/',
          p: 'Gurdwara Sahib Silat Road was built in 1924 by the Sikh contingent of the Straits Settlements Police. Beside it stands the shrine of Bhai Maharaj Singh, the Sikh saint-soldier who fought the British after the Anglo-Sikh wars and died in exile in Singapore in 1856; his samadh was brought here in 1966. The small, circular darbar of the shrine draws devotees from all over Singapore, and the Gurdwara, with its tall bunga, is run by the Central Sikh Gurdwara Board.' },
        { n: 'Sri Guru Singh Sabha', c: 'Dhoby Ghaut', a: '90/92 Wilkie Road', pc: '228086', ph: '+65 6337 6301', y: '1918', w: 'https://www.singhsabha.org/',
          p: 'Sri Guru Singh Sabha was registered on 25 June 1918 by Baba Karam Singh Hothi and first met at 178 Queen Street. In 1931 it bought a bungalow at 90 Wilkie Road, and the adjoining land in 1957. Built on a hill, it has entrances on two different levels, and its long, bright white darbar hall has screens showing English translations of Gurbani. It celebrated its centenary in 2018.' },
        { n: 'Khalsa Dharmak Sabha', c: 'Little India', a: '18 Niven Road', ph: '+65 6338 0731', y: '1924',
          p: 'Khalsa Dharmak Sabha was registered on 17 January 1924 and first met on Kampong Bahru Road. In 1936 it bought 18 Niven Road, and the old building was replaced in the 1990s by the present Gurdwara, which stands tall among the homes of Little India. It is one of the busiest Gurdwaras in Singapore, with the langar hall on the first floor, a traditional darbar hall above, and classes in Gurbani santhiya.' },
        { n: 'Gurdwara Sri Guru Nanak Satsang Sabha', aka: 'Gurdwara Sahib Katong', c: 'Katong', a: '17 Wilkinson Road', pc: '436673', ph: '+65 6348 5125', y: '1953',
          p: 'The Katong Gurdwara grew from a society registered in 1953. Sardar Inder Singh Bajaj bought a bungalow on Wilkinson Road for it in 1962, the neighbouring bungalow followed, and a permanent Gurdwara opened here in 1969. Its present building, with a glass front that blends Sikh and modern design, is full of families and young people, with a large langar hall below the darbar.' },
        { n: 'Pardesi Khalsa Dharmak Diwan', c: 'Geylang', a: '9 Lorong 29 Geylang', pc: '388078', ph: '+65 6741 7207', y: '1926',
          p: 'Pardesi Khalsa Dharmak Diwan was founded by Sikhs from the Doaba region of Punjab and registered on 11 August 1926. Its first home on Kirk Road was taken by the government in 1979, and the sangat moved to Norfolk Road and later to Lorong 29 Geylang, where the Gurdwara sits in a tall building with a beautiful takht. It marked its centenary in 2026.' }
      ]
    },
    {
      name: 'North Region', abbr: 'Singapore',
      intro: 'The north of the island has one Gurdwara, at Yishun, serving the Sikh families of the northern towns.',
      list: [
        { n: 'Gurdwara Sahib Yishun', c: 'Yishun', a: '601 Yishun Ring Road', ph: '+65 6753 4607', w: 'https://gsy.org.sg/',
          p: 'Gurdwara Sahib Yishun serves the Sikh families of northern Singapore. It is close to Khatib MRT station and holds daily prayers, kirtan and langar.' }
      ]
    }
  ]
};
