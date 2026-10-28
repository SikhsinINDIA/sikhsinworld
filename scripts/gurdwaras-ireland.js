/* Gurdwaras in Ireland.
   Each Gurdwara: n name, c area, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From The Travelling Singh (Part 4, Europe) and the Gurdwara's own website (Oct 2026).
   Empty fields are simply left out. */
module.exports = {
  country: 'Ireland', code: 'IE', dial: '353',
  division: 'County', divisions: 'counties',
  banner: 'Ireland’s Sikh community is small and fairly recent, growing from the 1970s onwards. Dublin’s Gurdwara welcomes Sikhs and visitors of every background.',
  provinces: [
    {
      name: 'Dublin', abbr: 'Dublin',
      intro: 'Dublin’s Gurdwara is in Ballsbridge, close to the Aviva Stadium and a short bus or train ride from the city centre.',
      list: [
        { n: 'Guru Nanak Darbar Dublin', aka: 'Gurunanak Darbar Ireland', c: 'Ballsbridge', a: '78 Serpentine Avenue', pc: 'D04 NP44', y: '1986', w: 'https://gurunanakdarbar.ie/',
          p: 'Guru Nanak Darbar is the Gurdwara of Dublin, a former cinema bought by the Irish Sikh community in the late 1980s. Its brilliant white front stands behind a black gate on Serpentine Avenue, a few minutes’ walk from the Aviva Stadium, with a bus stop and a DART station close by. The darbar is small and almost square, which makes it feel unusually close and warm, and on Sundays children and adults take turns at kirtan. The Gurdwara runs Gurmukhi and Gurmat classes for young people.' }
      ]
    }
  ]
};
