/* The Gurdwara in Peru.
   Each Gurdwara: n name, c city, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From the All About Sikhs Gurdwara directory (Oct 2026), with the Lima sangat from SikhNet.
   Empty fields are simply left out. */
module.exports = {
  country: 'Peru', code: 'PE', dial: '51',
  division: 'Region', divisions: 'regions',
  banner: 'Peru has a small Sikh sangat, centred on Lima, made up of Punjabi families and Peruvians who have embraced the Sikh way of life.',
  provinces: [
    {
      name: 'Lima', abbr: 'Lima',
      intro: 'Lima, the capital, is where Peru’s Sikhs gather for prayer and kirtan.',
      list: [
        { n: 'Gurdwara Guru Nanak Sahib', aka: 'Sikh Simran Sewa Sabha', c: 'Lima', a: 'Calle Vargas Machuca 233',
          p: 'Gurdwara Guru Nanak Sahib is run by the Sikh Simran Sewa Sabha and is listed at Vargas Machuca 233 in Lima. Peru’s Sikh sangat is small, made up of Punjabi families and Peruvians who have embraced the Sikh way of life, and much of its kirtan and simran is also held in members’ homes, where visiting Sikh musicians and travellers are warmly welcomed. Please contact the sangat before visiting, as this is an older listing.' }
      ]
    }
  ]
};
