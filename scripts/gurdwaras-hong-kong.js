/* The Gurdwara in Hong Kong.
   Each Gurdwara: n name, c district, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From the Khalsa Diwan’s own website (khalsadiwan.com, Oct 2026), with the 2022 reopening
   from the Hong Kong Government and RTHK. Empty fields are simply left out. */
module.exports = {
  country: 'Hong Kong', code: 'HK', dial: '852',
  division: 'District', divisions: 'districts',
  banner: 'Sikhs came to Hong Kong from the 1840s as soldiers and police. Their Gurdwara in Wan Chai, first built in 1901, is the only one in Hong Kong and serves langar to everyone, every day.',
  provinces: [
    {
      name: 'Wan Chai', abbr: '',
      intro: 'Hong Kong’s one Gurdwara stands on Queen’s Road East in Wan Chai, on Hong Kong Island, on land given to the Sikh community more than a century ago.',
      list: [
        { n: 'Khalsa Diwan Sikh Temple', aka: 'Gurdwara Khalsa Diwan Hong Kong', c: 'Wan Chai', a: '371 Queen’s Road East', ph: '+852 2572 4459', y: '1901', w: 'https://khalsadiwan.com/',
          p: 'The first Gurdwara in Hong Kong, Sri Guru Singh Sabha, was built in 1901 by Sikh soldiers of a British Army regiment, on land given by the government. It was bombed twice during the Pacific War; the granthi, Bhai Nand Singh, was killed while reading the Guru Granth Sahib, but the Guru Granth Sahib was unharmed, and Sikhs and non-Sikhs rebuilt the Gurdwara together after the war. When building work next door cracked the old Gurdwara in 2013, the Khalsa Diwan rebuilt it on the same site, and the new Gurdwara, five times larger, opened on 8 November 2022, Guru Nanak Dev Ji’s Gurpurab. It is open every day from 4:30 am to 8 pm, serves free langar to all, and runs a kindergarten, a library and free lodging for newcomers to Hong Kong.' }
      ]
    }
  ]
};
