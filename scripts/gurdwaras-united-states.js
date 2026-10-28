/* Gurdwaras in the United States (a growing selection).
   Each Gurdwara: n name, c city, a street address, pc ZIP code, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From The Travelling Singh (Part 5, North America), Wikipedia, the UCSC Sikh Studies
   Gurdwara list and the Gurdwaras' own websites (Oct 2026).
   Empty fields are simply left out. */
module.exports = {
  country: 'United States', code: 'US', dial: '1',
  division: 'State', divisions: 'states',
  banner: 'Sikhs have lived in the United States for more than a century, since they came to work on California’s farms and railroads. We are adding Gurdwaras state by state.',
  provinces: [
    {
      name: 'California', abbr: 'CA',
      intro: 'California is the historic heartland of American Sikhs, from Stockton and Yuba City to the Bay Area.',
      list: [
        { n: 'Sikh Gurdwara San Jose', c: 'San Jose', a: '3636 Gurdwara Avenue', pc: '95148', ph: '(408) 274-9373', y: '1984', w: 'https://sanjosegurdwara.org/',
          p: 'Sikh Gurdwara San Jose is the largest Gurdwara in the United States, covering almost 100,000 square feet on the hills east of the city. First built in 1984, it is a campus of buildings linked by beautiful walkways and reflecting pools, with Gurbani carried across the grounds by speakers, so it feels like a Gurdwara in Punjab. Its large darbar is richly decorated, with English translations of Gurbani on screens, and the views over San Jose from the front are wonderful.' },
        { n: 'Gurdwara Sahib El Sobrante', aka: 'Sikh Center of San Francisco Bay Area', c: 'El Sobrante', a: '3550 Hillcrest Road', pc: '94803', y: '1979',
          p: 'Gurdwara Sahib El Sobrante, also called the Sikh Center of San Francisco Bay Area, is built into a hillside north-east of San Francisco, with wide views from its terraces. Opened in 1979, it has a good-sized darbar and a busy sangat of every age, with Gurmat classes teaching paath to young people. Public transport only goes part of the way, so most visitors finish the trip by taxi.' },
        { n: 'Gurdwara Sahib Stockton', aka: 'Sikh Temple Stockton', c: 'Stockton', a: '1930 South Grant Street', pc: '95206', y: '1912',
          p: 'The Stockton Gurdwara, founded in 1912, was the first Gurdwara in the United States and is a California Historical Landmark. It was a centre of the Ghadar movement against British rule in India, and Sikh farm and railroad workers from all over the West came here to pray. Its main building dates from 1929.' },
        { n: 'Gurdwara Sahib Fremont', c: 'Fremont', a: '300 Gurdwara Road', pc: '94536',
          p: 'Gurdwara Sahib Fremont sits on the hills above Fremont and serves one of the largest Sikh communities in the San Francisco Bay Area, with busy weekly programmes, langar and Punjabi and Gurmat classes.' }
      ]
    },
    {
      name: 'New York', abbr: 'NY',
      intro: 'New York has a large, well-organised sangat, especially in Queens, and holds a Vaisakhi Nagar Kirtan through Manhattan.',
      list: [
        { n: 'Sikh Center of New York', aka: 'Sikh Center Flushing', c: 'Flushing, Queens', a: '38-17 Parsons Boulevard', pc: '11354', ph: '(718) 359-9520',
          p: 'The Sikh Center of New York in Flushing, Queens, is close to LaGuardia Airport in one of the city’s great immigrant neighbourhoods. Its understated front recalls the Sikh architecture of 19th-century Punjab. Inside, the langar hall is in the basement and the long, narrow darbar has two large Nishan Sahibs before the Guru, a setup quite unlike other Gurdwaras.' }
      ]
    },
    {
      name: 'District of Columbia', abbr: 'DC',
      intro: 'The capital has a small but active sangat that takes part in city life, from its Vaisakhi Nagar Kirtan to Fourth of July parades.',
      list: [
        { n: 'Sikh Gurdwara Washington DC', aka: 'National Gurdwara', c: 'Washington', a: '3801 Massachusetts Avenue NW', pc: '20016', w: 'https://sikhgurdwaradc.org/',
          p: 'Sikh Gurdwara DC, on Massachusetts Avenue near Washington National Cathedral and the embassies, is also the US home of Pingalwara, the Amritsar charity for the sick and abandoned. It is fairly small, with an almost square darbar ringed by a balcony that gives it a special feel. It runs Gurmat and kirtan classes and langar for the wider community, and on busy Sundays many non-Sikh visitors come too.' }
      ]
    }
  ]
};
