/* Gurdwaras in France (a growing selection).
   Each Gurdwara: n name, c area, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From The Travelling Singh (Part 4, Europe) and Seine-Saint-Denis Tourisme (Oct 2026).
   Empty fields are simply left out. */
module.exports = {
  country: 'France', code: 'FR', dial: '33',
  division: 'Region', divisions: 'regions',
  banner: 'France’s Sikh community is small and centred on Bobigny, north-east of Paris. Tens of thousands of Sikh soldiers fought for France in the two World Wars.',
  provinces: [
    {
      name: 'Île-de-France', abbr: 'Île-de-France',
      intro: 'Most of France’s Sikhs live in the Paris suburbs, especially Bobigny in Seine-Saint-Denis.',
      list: [
        { n: 'Gurdwara Singh Sabha Bobigny', aka: 'Gurdwara Singh Sabha Paris', c: 'Bobigny', a: '16 rue de la Ferme', pc: '93000', ph: '01 41 50 28 25',
          p: 'Gurdwara Singh Sabha in Bobigny, about half an hour from central Paris, is the largest Gurdwara in France. It is built in the style of the newer British Gurdwaras, with a tall Nishan Sahib, and is a short walk from the La Ferme tram stop. It is big enough for the several thousand Sikhs who live nearby, and inside it honours the Sikhs of 1984 with portraits and a model of the Akal Takht. It is also where the Paris Vaisakhi Nagar Kirtan begins.' }
      ]
    }
  ]
};
