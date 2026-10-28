/* Gurdwaras in the United Kingdom, region by region (a growing selection).
   Each Gurdwara: n name, c town, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From The Travelling Singh’s UK series (Parts 1-3: Midlands, more Midlands, London and the South East), with addresses from the Charity
   Commission, Sandwell Council and Wolverhampton Council, and history from Wikipedia.
   Empty fields are simply left out. */
module.exports = {
  country: 'United Kingdom', code: 'GB', dial: '44',
  division: 'Region', divisions: 'regions',
  banner: 'The UK has one of the largest Sikh communities outside India, with hundreds of Gurdwaras. We are adding them region by region, starting with the West Midlands, London and the South East, home of some of the oldest and largest.',
  provinces: [
    {
      name: 'West Midlands', abbr: 'West Midlands',
      intro: 'Birmingham, Smethwick, West Bromwich, Wolverhampton, Walsall and Leamington have some of the largest Sikh communities in Britain, and Gurdwaras on almost every high street.',
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
          p: 'Nanaksar Thath Isher Darbar, near Wolverhampton city centre, is one of the city’s three great Gurdwaras. Its darbar is unlike almost any other, with a cobalt-blue ceiling that gives a cool, peaceful feel and a palki enclosed in patterned glass on a raised platform, where the kirtanis sing facing the Guru, in the Nanaksar tradition.' },
        { n: 'Guru Nanak Gurdwara Sedgley Street', aka: 'Sedgley Street Gurdwara', c: 'Wolverhampton', a: 'Sedgley Street, Blakenhall', pc: 'WV2 3AJ', w: 'https://sedgleystgurdwara.com/',
          p: 'Guru Nanak Gurdwara on Sedgley Street is the heart of Sikh life in Wolverhampton, a city where Sikhs are the second largest faith and, as the saying goes, every Sikh has a relative. It is neither the oldest nor the grandest Gurdwara in the area, but on a Sunday or a Gurpurab its great upstairs darbar fills to the doors. It has a large langar hall, several car parks and a gym, runs Gurmat and Punjabi classes, and is a key stop on the Wolverhampton Vaisakhi Nagar Kirtan, one of the biggest outside South Asia.' },
        { n: 'Baba Deep Singh Gurdwara', aka: 'Yaadgar Baba Deep Singh Gurdwara', c: 'Handsworth, Birmingham', a: '6 Oakland Road', pc: 'B21 0NA', ph: '0121 554 8034', w: 'https://www.bdsgurdwara.com/',
          p: 'Baba Deep Singh Gurdwara, officially Yaadgar Baba Deep Singh, stands at the other end of Soho Road from the Nishkam Gurdwara. The large new building, with its taller tower on one side, replaced a much smaller Gurdwara that still stands on the same plot. It is known for its community work and for trusting its young people, who run regular Gurmat programmes. On quiet weekdays the big darbar is a peaceful place for simran, the langar hall seats everyone on the floor as equals, and it is a stop on the Handsworth Nagar Kirtan, the largest in the UK.' },
        { n: 'Guru Nanak Gurdwara Caldmore', aka: 'Caldmore Gurdwara', c: 'Walsall', a: '127 West Bromwich Street, Caldmore', pc: 'WS1 4DE', ph: '01922 649528', w: 'http://www.gnst.org.uk/',
          p: 'Guru Nanak Gurdwara in Caldmore began in 1962, when local Sikhs rented the British Lion Club as a Gurdwara. They bought the building later that decade, built a new Gurdwara in 1971 and the present one in 2007. Its kitchen is home base for the Midland Langar Seva Society, one of the UK’s largest community kitchens. Walsall’s Sikhs held the first large western Gurmat camp in the 1980s, and Caldmore keeps the tradition alive with Gurmat, Punjabi and computer classes. It is also a key stop on the Walsall Vaisakhi Nagar Kirtan.' },
        { n: 'Guru Har Rai Gurdwara', aka: 'Gurdwara Guru Har Rai Sahib', c: 'West Bromwich', a: '126-128 High Street', pc: 'B70 6JW', ph: '0121 553 7219', w: 'https://guruharrai.org/',
          p: 'Guru Har Rai Gurdwara was founded in 1979 by Baba Harbans Singh Domeli Wale and was among the first in Britain to hold evening diwans on weekdays. Its striking 2002 frontage, with red-brick columns, white balconies and domes, added a second darbar and langar hall, but the main programmes are still held in the older, more intimate darbar, close to the Guru. It is known for frequent Amrit Sanchars, santhiya classes and a well-loved annual Gurmat camp, and is home to Sangat TV and the Sikh Helpline.' },
        { n: 'Gurdwara Sahib Leamington and Warwick', aka: 'Leamington Gurdwara', c: 'Warwick', a: 'Tachbrook Park Drive', pc: 'CV34 6RH', ph: '01926 424297', w: 'https://www.leamingtongurdwara.org/',
          p: 'Gurdwara Sahib Leamington and Warwick is one of the largest Gurdwaras in Britain. Its domes rise over an industrial estate on the edge of Leamington Spa, and it is a landmark of the great Gurdwara building of the 2000s. It serves a large, long-settled Sikh community in Leamington, Warwick and the villages around them. The building is spotless and kept by devoted sevadars, who look after the gardens and shoes and welcome visitors. Its vast darbar holds the whole sangat, and paintings of Sikh history line its walls.' }
      ]
    },
    {
      name: 'London', abbr: 'London',
      intro: 'London’s Sikhs first settled near Heathrow in Southall and Hounslow, and today large sangats live across west and east London, from Southall to Ilford.',
      list: [
        { n: 'Gurdwara Sri Guru Singh Sabha Southall', aka: 'Southall Gurdwara', c: 'Southall', a: 'Guru Nanak Road (formerly Havelock Road)', pc: 'UB2 4NP', w: 'https://sgsss.org/',
          p: 'Sri Guru Singh Sabha, known to all as Southall Gurdwara, is the largest Gurdwara outside India. The Singh Sabha was started in the 1950s by Sikhs who came from Malaysia and Singapore, and the present building was opened in 2003. Around 15,000 people visit each week and some 20,000 meals are served from its langar. Its round darbar holds about 3,000 people under a high ceiling, designed so that kirtan carries evenly to everyone, and a stained-glass window glows behind the Guru’s throne. Portraits along its halls tell the Sikh story to the many visitors.' },
        { n: 'Central Gurdwara Khalsa Jatha', aka: 'Central Khalsa Jatha', c: 'Shepherd’s Bush', a: '62 Queensdale Road', pc: 'W11 4SG', w: 'http://khalsajatha.com/',
          p: 'The Central Gurdwara (Khalsa Jatha) is the oldest Gurdwara in Britain and Europe. The Jatha was founded in 1908 and opened its first Gurdwara in 1913, and it moved to this Victorian street in 1969. Its modern front, rebuilt in the early 2000s, sits neatly among the houses, and inside is a small, spotless darbar in claret and white. Being the closest Gurdwara to central London, it welcomes many visitors from abroad, and the nearest Underground stations are best because parking is hard.' },
        { n: 'Gurdwara Sikh Sangat Bow', aka: 'Harley Grove Gurdwara', c: 'Bow', a: '43 Harley Grove', pc: 'E3 2AT', ph: '020 8980 1379', w: 'https://www.gurdwarasikhsangat.org/',
          p: 'Gurdwara Sikh Sangat, known as Harley Grove Gurdwara, is a listed building at the end of a quiet street in Bow. It was built as a church in 1854, became a synagogue in 1927 and a Gurdwara in the late 1970s. In 2009 an arson attack destroyed most of the building and several saroops of Guru Granth Sahib, a loss felt by Sikhs across Britain. The sangat rebuilt it within four years. It has two darbars and two langar halls and is a short ride from the City and Canary Wharf. It opens for the morning and evening programmes.' },
        { n: 'Gurdwara Singh Sabha London East Barking', aka: 'Barking Gurdwara', c: 'Barking', a: '1 Gurdwara Way', pc: 'IG11 8UJ', w: 'http://singhsabhale.org/',
          p: 'Singh Sabha London East’s Gurdwara in Barking reopened in 2021 after a rebuild of about £14 million. It is a sister to the Seven Kings Gurdwara, and its white marble front and towering Nishan Sahib stand out on a busy road near Barking station. Nearly 900 tonnes of marble came from India, and the light, modern interior is hung with large paintings of Sikh history, including works by the Art of Punjab. It has two darbars and a langar hall for 700, and runs Punjabi, Gurmat and gatka classes.' }
      ]
    },
    {
      name: 'South East', abbr: 'South East',
      intro: 'Beyond the M25, Slough in the west and Gravesend in the east have large, long-settled Sikh communities.',
      list: [
        { n: 'Guru Nanak Darbar Gurdwara', aka: 'Gravesend Gurdwara', c: 'Gravesend', a: 'Guru Nanak Marg', pc: 'DA12 1AG', w: 'https://www.gurunanakdarbar.org/',
          p: 'Guru Nanak Darbar, known as Gravesend Gurdwara, opened in 2010 and is one of the largest and most beautiful Gurdwaras outside India. It was built in sandstone-coloured stone with five domes in the style of the Gurdwaras of Punjab, and through its carved marble gateway it is easy to forget you are in Kent. Inside, wooden staircases and marble landings rise to a painted dome with a great chandelier and lines of Gurbani. There are three darbars and two langar halls, and paintings of Sikh history line the walls. Coaches of sangat come from all over Britain.' }
      ]
    }
  ]
};
