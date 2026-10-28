/* Gurdwaras in Spain (a growing selection).
   Each Gurdwara: n name, c area, a street address, pc postcode, ph phone,
   y year founded, w website, p one paragraph (our own words),
   aka another name its photos may be filed under.
   From The Travelling Singh (Part 4, Europe) (Oct 2026).
   Empty fields are simply left out. */
module.exports = {
  country: 'Spain', code: 'ES', dial: '34',
  division: 'Region', divisions: 'regions',
  banner: 'Spain’s Sikh community is young and growing fast, with about half of it in and around Barcelona, which also has about half of Spain’s Gurdwaras.',
  provinces: [
    {
      name: 'Catalonia', abbr: 'Catalonia',
      intro: 'Barcelona and its suburbs are home to most of Spain’s Sikhs and many of its Gurdwaras.',
      list: [
        { n: 'Gurdwara Gurdarshan Sahib Barcelona', aka: 'Gurdwara Guru Darshan Sahib', c: 'El Raval, Barcelona', a: 'Carrer de l’Hospital 97',
          p: 'Gurdwara Gurdarshan Sahib is in the heart of Barcelona, in the old streets of El Raval just off La Rambla. It is in a Catalan townhouse, marked only by its basanti yellow paint and Gurmukhi lettering on the gate, so it is easy to miss, but the darbar inside is surprisingly large. Children chatter in a mix of Punjabi and Spanish, travelling Sikhs and local people drop in, and yoga students come to meditate. The sangat also holds a Nagar Kirtan through the city.' }
      ]
    }
  ]
};
