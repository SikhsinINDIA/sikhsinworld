/* Gurdwaras in Italy (a growing selection).
   Each Gurdwara: n name, c area, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From The Travelling Singh (Part 4, Europe) and the All About Sikhs Gurdwara directory (Oct 2026).
   Empty fields are simply left out. */
module.exports = {
  country: 'Italy', code: 'IT', dial: '39',
  division: 'Region', divisions: 'regions',
  banner: 'Italy has the second largest Sikh community in Europe, nearly 100,000 people, many working on the dairy farms of the Po Valley.',
  provinces: [
    {
      name: 'Emilia-Romagna', abbr: 'Emilia-Romagna',
      intro: 'The Po Valley around Parma and Reggio Emilia, home of Parmigiano Reggiano, has Italy’s largest Sikh community.',
      list: [
        { n: 'Gurdwara Singh Sabha Novellara', c: 'Novellara', a: 'Via Lorenzo Bandini 7', pc: '42017', ph: '0522 661656',
          p: 'Gurdwara Singh Sabha in Novellara, in the province of Reggio Emilia, was one of the first Gurdwaras built in Italy and is one of the largest in Europe. It serves the many Sikh families who work on the dairy farms of the Po Valley, and its Vaisakhi Nagar Kirtan draws Sikhs from all over Italy.' },
        { n: 'Darbar Sri Guru Granth Sahib Ji Parma', c: 'San Prospero, Parma',
          p: 'Darbar Sri Guru Granth Sahib Ji stands among the fields near the village of San Prospero, on the edge of Parma, and can be seen from the main road. Built by Sant Baba Baldev Singh Bulandpuri, it is far bigger than you expect, set in a large plot of land that makes it feel like a Gurdwara in Punjab. Its darbar is simple but striking, with a high ceiling and colourful drapes around Guru Granth Sahib, and in the cool of the evening, during Rehras Sahib, it is deeply peaceful. It is a short taxi or bike ride from Parma.' }
      ]
    }
  ]
};
