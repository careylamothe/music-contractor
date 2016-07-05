
exports.seed = function(knex, Promise) {
  return knex('events').del().then(function() {
    return knex.raw('ALTER SEQUENCE events_id_seq restart with 4')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert({
          id: 1,
          title: '4th of July Spectacular',
          venue: 'Beneroya Hall',
          address: '200 University St, Seattle, WA 98101',
          date: 'July 3rd 2016',
          time: '4:00PM',
          notes: 'June 30th, 7:00pm; June 28th 7:00pm Roosevelt H.S',
          payment: '200'
        }),

        knex('events').insert({
          id: 2,
          title: 'Columbia City Opera presents La Traviata',
          venue: 'Paramont Theatre',
          address: '911 Pine St, Seattle, WA 98101',
          date: 'August 23rd 2016',
          time: '7:00PM',
          notes: 'July 30th, 7:00pm; August 4th 7:00pm North Seattle College',
          payment: '175'
        }),

        knex('events').insert({
          id: 3,
          title: 'Peter and the Wolf',
          venue: 'Meany Theatre',
          address: '4140 George Washington Lane Northeast, Seattle, WA 98105',
          date: 'September 9th 2016',
          time: '2:00PM',
          notes: 'Sept 1st, 7:00pm; Sept 3rd 7:00pm University of Washington Meany 200',
          payment: '150'
        })
      ]);
    });
  })
};
