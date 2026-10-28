/* The Gurdwara in Mauritius.
   Each Gurdwara: n name, c area, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From the All About Sikhs Gurdwara directory, SikhiWiki and The Travelling Singh (Oct 2026).
   Empty fields are simply left out. */
module.exports = {
  country: 'Mauritius', code: 'MU', dial: '230',
  division: 'District', divisions: 'districts',
  banner: 'Mauritius has a small, long-settled Sikh community. Its Gurdwara, on the edge of Port Louis, welcomes Sikhs and visitors of every background.',
  provinces: [
    {
      name: 'Port Louis', abbr: 'Port Louis',
      intro: 'The island’s one Gurdwara is on the outskirts of the capital, Port Louis.',
      list: [
        { n: 'Sri Guru Singh Sabha Port Louis', aka: 'Gurdwara Singh Sabha Port Louis', c: 'Grand River North West', a: 'Behind Bala Garage', ph: '210 4285',
          p: 'Sri Guru Singh Sabha is the only Gurdwara in Mauritius, on the edge of Port Louis at Grand River North West. Built in the mid-1990s by a handful of Sikh families, it is a simple single-storey building with a darbar hall and a langar hall under a distinctive blue roof and golden dome. The sangat gathers on Sunday mornings from 10 am, followed by langar at noon, and many who come are Mauritians of Indian and other backgrounds.' }
      ]
    }
  ]
};
