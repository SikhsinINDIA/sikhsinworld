/* The Gurdwara in Argentina.
   Each Gurdwara: n name, c town, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From Gurdwara Directory and the Proud To Be A Sikh group (Oct 2026), with history from
   Newsgram, Dawn and Sikh Global Village. Empty fields are simply left out. */
module.exports = {
  country: 'Argentina', code: 'AR', dial: '54',
  division: 'Province', divisions: 'provinces',
  banner: 'Sikhs came to Argentina in the early 1900s, many to work on the railways. Their one Gurdwara stands in Rosario de la Frontera, in the northern province of Salta.',
  provinces: [
    {
      name: 'Salta', abbr: 'Salta',
      intro: 'Salta, in Argentina’s far north-west, is home to the country’s small Punjabi Sikh community and its only Gurdwara.',
      list: [
        { n: 'Gurdwara Nanaksar', aka: 'Gurdwara Nanaksar Templo Sikh', c: 'Rosario de la Frontera', a: 'Avenida Palau',
          p: 'Gurdwara Nanaksar in Rosario de la Frontera, about 1,500 km north of Buenos Aires, was built by the small Sikh community of Salta province in the late 1980s or early 1990s, and is often called the only Gurdwara in South America. The first Punjabis came to the region in the early 1900s to work on the railways. Behind its white gate with golden-tipped domes, the sangat gathers for prayer, kirtan and langar, and welcomes Sikh visitors from around the world.' }
      ]
    }
  ]
};
