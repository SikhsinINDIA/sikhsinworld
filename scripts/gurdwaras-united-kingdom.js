/* Gurdwaras in the United Kingdom, region by region (a growing selection).
   Each Gurdwara: n name, c town, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From The Travelling Singh’s UK series (Part 1, Midlands), with addresses from the Charity
   Commission, Sandwell Council and Wolverhampton Council, and history from Wikipedia.
   Empty fields are simply left out. */
module.exports = {
  country: 'United Kingdom', code: 'GB', dial: '44',
  division: 'Region', divisions: 'regions',
  banner: 'The UK has one of the largest Sikh communities outside India, with hundreds of Gurdwaras. We are adding them region by region, starting with the West Midlands, home of some of the oldest and largest.',
  provinces: [
    {
      name: 'West Midlands', abbr: 'West Midlands',
      intro: 'Birmingham, Smethwick, Wolverhampton and the Black Country have some of the largest Sikh communities in Britain, and Gurdwaras on almost every high street.',
      list: [
        { n: 'Guru Nanak Nishkam Gurdwara', aka: 'Soho Road Gurdwara', c: 'Handsworth, Birmingham', a: '18-20 Soho Road', pc: 'B21 9BH', w: 'https://www.gnnsj.org/',
          p: 'Guru Nanak Nishkam Gurdwara, known to all as Soho Road Gurdwara, was built in the late 1970s under the leadership of Baba Puran Singh and was then the largest Gurdwara outside the subcontinent. Run by the Guru Nanak Nishkam Sewak Jatha, whose focus is selfless service of humanity, it has five darbar halls, three langar halls and nearly a hundred rooms for visitors, as well as the Nishkam Centre, schools and interfaith work. It stands at one end of Soho Road, the heart of British Punjabi life.' },
        { n: 'Guru Nanak Gurdwara Smethwick', c: 'Smethwick', a: '128-130 High Street', pc: 'B66 3AP',
          p: 'Guru Nanak Gurdwara Smethwick opened in 1958 in a former church on the High Street and is one of the oldest and largest Gurdwaras in the Midlands. Its gleaming refurbished front, statue honouring Sikh soldiers of the two World Wars, halls, lecture theatre and gym make it a landmark between Birmingham and the Black Country. The raised palki in its main darbar is unusual, and the Gurdwara is the starting point of the great Birmingham Vaisakhi Nagar Kirtan.' },
        { n: 'Gurdwara Akaal Bunga Sahib', c: 'Smethwick', pc: 'B67 6BJ',
          p: 'Gurdwara Akaal Bunga Sahib, in the streets behind Smethwick High Street, is a former church that still looks like one, with a tall fortress-like tower crowned by the Nishan Sahib. Inside, narrow passages lead to a darbar under high wooden beams and stained-glass windows, where the Guru’s shastar rest beside the palki: a striking meeting of east and west.' },
        { n: 'Guru Nanak Gurdwara Wednesfield', c: 'Wednesfield', a: 'Well Lane', pc: 'WV11 1XT', ph: '01902 730774',
          p: 'Guru Nanak Gurdwara Wednesfield is one of the large Gurdwaras built in the Black Country around the turn of the millennium, with several darbar halls and classes in Punjabi, Gurmat and gatka. In 2021 the sangat unveiled the Saragarhi Memorial beside it, a statue of a Sikh soldier on a tall plinth honouring the 21 soldiers of the 36th Sikh Regiment who fought at Saragarhi in 1897, the first memorial of its kind in the UK.' },
        { n: 'Nanaksar Thath Isher Darbar Wolverhampton', c: 'Wolverhampton', a: 'Mander Street', pc: 'WV3 0JU',
          p: 'Nanaksar Thath Isher Darbar, near Wolverhampton city centre, is one of the city’s three great Gurdwaras. Its darbar is unlike almost any other, with a cobalt-blue ceiling that gives a cool, peaceful feel and a palki enclosed in patterned glass on a raised platform, where the kirtanis sing facing the Guru, in the Nanaksar tradition.' }
      ]
    }
  ]
};
