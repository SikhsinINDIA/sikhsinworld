/* Gurdwaras in Japan, prefecture by prefecture.
   Each Gurdwara: n name, c city or ward, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From worldgurudwaras.com, The Japan Times (2016), Wikipedia’s Sikhism in Japan and
   The Travelling Singh (Oct 2026). Empty fields are simply left out. */
module.exports = {
  country: 'Japan', code: 'JP', dial: '81',
  division: 'Prefecture', divisions: 'prefectures',
  banner: 'Sikhs have lived in Japan since the early 1900s, first as traders in Yokohama and Kobe. Today there are Gurdwaras in Kobe and Tokyo, where Punjabi families and Japanese friends share kirtan and langar.',
  provinces: [
    {
      name: 'Tokyo', abbr: 'Tokyo',
      intro: 'Tokyo’s small Sikh sangat gathers in Bunkyo ward, in a Gurdwara that is easy to miss from the street.',
      list: [
        { n: 'Guru Nanak Darbar Tokyo', aka: 'Gurudwara Sahib Tokyo', c: 'Bunkyo', a: 'Myogadani Heights, 3-5-4 Otsuka',
          p: 'Guru Nanak Darbar Tokyo began in the late 1990s, when a few Sikh families met for prayers in an Indian restaurant; in 2001 the sangat moved to Bunkyo ward, first renting rooms and later buying its own floor of an office building near Myogadani. There is no Nishan Sahib or dome outside, but inside the small darbar fills on Sunday mornings with Gurbani and the smell of langar, and the sangat is a warm mix of Punjabi, Indian and Japanese families.' }
      ]
    },
    {
      name: 'Hyogo', abbr: 'Hyogo',
      intro: 'Kobe, in Hyogo prefecture, has had a Sikh community since Indian traders moved here from Yokohama after the 1923 Great Kanto Earthquake.',
      list: [
        { n: 'Guru Nanak Darbar Kobe', c: 'Kobe', a: 'Nozaki-dori 2-chome, Chuo-ku',
          p: 'Guru Nanak Darbar Sahib in Kobe is Japan’s oldest Gurdwara. Sikh traders settled in Kobe after the 1923 Great Kanto Earthquake, and their prayer room in a family home grew into a full Gurdwara by the 1950s and 1960s. For many years it was the only Gurdwara in Japan, and it still stands in a quiet residential street of Chuo ward.' }
      ]
    }
  ]
};
