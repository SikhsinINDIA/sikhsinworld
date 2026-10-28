/* Gurdwaras in the Netherlands (a growing selection).
   Each Gurdwara: n name, c area, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From The Travelling Singh (Part 4, Europe) and SikhiWiki (Oct 2026).
   Empty fields are simply left out. */
module.exports = {
  country: 'Netherlands', code: 'NL', dial: '31',
  division: 'Province', divisions: 'provinces',
  banner: 'The Netherlands has a small Sikh community, mostly around Amsterdam, which shares Sikhi in Dutch through the Sikh Society of the Netherlands.',
  provinces: [
    {
      name: 'North Holland', abbr: 'North Holland',
      intro: 'Amsterdam has a few Gurdwaras, the closest to the centre in a classic canal-city townhouse.',
      list: [
        { n: 'Gurdwara Maan Sarovar Sahib', c: 'Amsterdam', a: 'Baarsjesweg 281', pc: '1058 AE',
          p: 'Gurdwara Maan Sarovar Sahib is the closest Gurdwara to the centre of Amsterdam, in one of the city’s typical townhouses in De Baarsjes. With no Nishan Sahib outside it is easy to walk past, yet it is a lovely example of a Gurdwara made at home in local architecture. The darbar is at street level, so kirtan can be heard from the pavement, and on Sundays it fills to standing room as the sangat listens to katha. A small langar hall is next door.' }
      ]
    }
  ]
};
