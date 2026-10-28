/* Gurdwaras in Thailand, province by province.
   Each Gurdwara: n name, c city or district, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   Names from the thaisikh.com Gurdwara list (Oct 2026), with addresses and history from
   the Thai Sikh community histories (via All About Sikhs), the Pattaya Mail and others.
   Empty fields are simply left out. */
module.exports = {
  country: 'Thailand', code: 'TH', dial: '66',
  division: 'Province', divisions: 'provinces',
  banner: 'Sikhs came to Thailand from the 1880s, many by way of Burma. The first Gurdwaras opened in Chiang Mai in 1907 and Bangkok in 1912, and today there are Gurdwaras from Chiang Rai to Songkhla.',
  provinces: [
    {
      name: 'Bangkok', abbr: 'Bangkok',
      intro: 'Most of Thailand’s Sikhs live in Bangkok, and the heart of the community is Phahurat, the city’s Little India, where the great Gurdwara Siri Guru Singh Sabha stands on Chakphet Road.',
      list: [
        { n: 'Gurdwara Siri Guru Singh Sabha', c: 'Phahurat', a: '565 Chakphet Road', pc: '10200', y: '1933',
          p: 'Gurdwara Siri Guru Singh Sabha in Phahurat is the main Gurdwara of Thailand. Bangkok’s Sikhs first rented a wooden house for a Gurdwara in 1912 and moved to the corner of Phahurat and Chakphet roads in 1913; in 1932 they bought the land, and the permanent building was finished in 1933. During the Second World War two Allied bombs aimed at the nearby Memorial Bridge fell through its roof while hundreds of people sheltered inside; neither exploded and no one was hurt. The present gold-domed building was raised on the same site between 1979 and 1981, and it serves langar to all visitors every day.' },
        { n: 'Namdhari Gurdwara Asoke', c: 'Asok',
          p: 'The Namdhari Gurdwara in the Asok area of central Bangkok serves the city’s Namdhari Sikhs, a sangat with deep roots in Thailand, where many of the first Sikh settlers were Namdharis. Its darbar, beneath an arch reading “Sri Satguru Ram Singh Ji Sahai”, is hung with portraits of Satguru Ram Singh Ji, and the sangat gathers here for kirtan, paath and the Namdhari observances.' },
        { n: 'Maharaja Garden City Gurdwara', c: 'Bangkok',
          p: 'This Gurdwara at Maharaja Garden City serves Sikh families living away from the old centre at Phahurat, in the wider Bangkok area. The Guru Granth Sahib is installed in a richly decorated palki, and the sangat gathers here for kirtan and paath.' }
      ]
    },
    {
      name: 'Chiang Mai', abbr: 'Chiang Mai',
      intro: 'Chiang Mai, the great city of the north, was where Sikhs first settled in Thailand, coming over the hills from Burma in the early 1900s.',
      list: [
        { n: 'Gurdwara Sri Guru Singh Sabha Chiang Mai', c: 'Chiang Mai', a: '134 Charoenrat Road', pc: '50000', y: '1907',
          p: 'This is the oldest Gurdwara in Thailand. The first Sikh in Chiang Mai, Ishar Singh, came from India through Burma in 1905, and in 1907 he and a few other families set up a Gurdwara on Charoenrat Road, near the Ping River. It was enlarged in 1908 with teak bought from Doi Saket, and in 1975 the sangat rebuilt it in concrete on the same spot, where it still stands.' }
      ]
    },
    {
      name: 'Chiang Rai', abbr: 'Chiang Rai',
      intro: 'Chiang Rai, in the far north near the borders with Laos and Myanmar, has a small but long-settled Sikh community.',
      list: [
        { n: 'Gurdwara Sri Guru Singh Sabha Chiang Rai', c: 'Chiang Rai', pc: '57000',
          p: 'The Gurdwara in Chiang Rai serves the small Sikh community of Thailand’s northernmost province. It shares its grounds with a Hindu mandir, a sign of how closely the Sikh and Hindu families of the north live together.' }
      ]
    },
    {
      name: 'Lampang', abbr: 'Lampang',
      intro: 'Lampang, south-east of Chiang Mai, has had a Gurdwara since the 1930s.',
      list: [
        { n: 'Gurdwara Sri Guru Singh Sabha Lampang', c: 'Lampang', a: '106/1-3 Thip Chang Road', pc: '52000', y: '1933',
          p: 'Lampang’s first Gurdwara was on Sai Klang Road, on land given by Wariaam Singh in 1933, and was one of the oldest in Thailand. As the sangat grew, a larger Gurdwara was built on Thip Chang Road; its foundation stone was laid on 24 September 1992 before Sikhs from nearby provinces and Bangkok.' }
      ]
    },
    {
      name: 'Phuket', abbr: 'Phuket',
      intro: 'Sikhs came to Phuket to work in tin mining and on the railways, and later in tailoring and tourism.',
      list: [
        { n: 'Gurdwara Sri Guru Singh Sabha Phuket', c: 'Phuket', a: '8 Suthat Road', pc: '83000', y: '1939',
          p: 'The first Gurdwara in Phuket was built in 1939 by Sikhs who had come to the island for tin mining and railway work under the British. As Phuket became one of Thailand’s main tourist centres, more Sikhs arrived to open tailoring shops and hotels, and the sangat built a new Gurdwara on Suthat Road, in the heart of Phuket Town, opened on 22 January 2001.' }
      ]
    },
    {
      name: 'Chonburi', abbr: 'Chonburi',
      intro: 'Chonburi province, on the Gulf of Thailand, includes the beach city of Pattaya.',
      list: [
        { n: 'Gurdwara Sri Guru Singh Sabha Pattaya', aka: 'Gurdwara Sri Guru Singh Sabha Cholburi', c: 'Pattaya', a: 'Soi 17, South Pattaya', pc: '20150', y: '1990',
          p: 'In 1975 there were only three or four Sikh families in Pattaya, but more came as the town grew into a tourist centre and as the American bases closed after the Vietnam War. The sangat met in rented buildings from 1979, bought land in South Pattaya in 1985, and opened this three-storey Gurdwara with its golden dome on 28 October 1990. It is the only Gurdwara in Pattaya.' }
      ]
    },
    {
      name: 'Songkhla', abbr: 'Songkhla',
      intro: 'Songkhla, in the far south near the Malaysian border, has a Sikh sangat in Thailand’s deep south.',
      list: [
        { n: 'Gurdwara Sri Guru Singh Sabha Songkhla', c: 'Songkhla',
          p: 'The Gurdwara in Songkhla province serves the Sikhs of southern Thailand, close to the Malaysian border. The sangat gathers here for kirtan, paath and langar on Sundays and Gurpurabs.' }
      ]
    },
    {
      name: 'Khon Kaen', abbr: 'Khon Kaen',
      intro: 'Khon Kaen is the main city of Isan, Thailand’s north-east.',
      list: [
        { n: 'Gurdwara Sri Guru Singh Sabha Khon Kaen', c: 'Khon Kaen', a: '157-159 Ruamchit Road', pc: '40000', y: '1972',
          p: 'Sikhs began coming to Khon Kaen for business in 1932, and for forty years they held prayers in their homes in turn. In 1972 the sangat built this two-storey Gurdwara on Ruamchit Road, with the langar hall and office on the ground floor and the darbar hall, with its red carpet, upstairs.' }
      ]
    },
    {
      name: 'Nakhon Ratchasima', abbr: 'Nakhon Ratchasima',
      intro: 'Nakhon Ratchasima, better known as Korat, is the gateway to Isan.',
      list: [
        { n: 'Gurdwara Sri Guru Singh Sabha Korat', aka: 'Gurdwara Sri Guru Singh Sabha Nakorn Ratchsima', c: 'Nakhon Ratchasima (Korat)', a: '3 Soi Sahaphan, Chomphon Road', pc: '30000', y: '1984',
          p: 'Sikhs began settling in Korat for business in 1947 and held prayers in their homes until the sangat was large enough to build a Gurdwara. It opened on 23 December 1984 with a parade through the town. The two-storey building has a golden gate and a small garden in front, the langar hall downstairs and the darbar hall above.' }
      ]
    }
  ]
};
