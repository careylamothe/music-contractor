
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('musicians').del().then(function() {
    return knex.raw('ALTER SEQUENCE musicians_id_seq restart with 4')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('musicians').insert({
          id: 1,
          user_id: 1,
          first: 'Yo Yo',
          last: 'Ma',
          email: 'ma@yoyo.com',
          imageURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLrCKS6u95tS-oO8L31_jhC87JuxSjTS00ZdSOkBxGrhoqztHAXg',
          instrument: 'cello',
          bio: 'Yo-Yo Ma is one of the most prominent cellist of the modern era and is an inspiration to many in the musical world. He has produced dozens of albums and has won 15 Grammy awards throughout his lifetime. Yo-Yo Ma has recorded various styles of music including classical, American folk music, and traditional Chinese melodies. '
        }),
        knex('musicians').insert({
          id: 2,
          user_id: 2,
          first: 'Alison',
          last: 'Balsom',
          email: 'ali@trumpeter.com',
          imageURL: 'http://www.schilkemusic.com/wp-content/uploads/2014/11/A-Balsom-new1.jpg',
          instrument: 'trumpet',
          bio: 'Alison Balsom is a trumpet soloist, arranger, producer, music educator, curator and spokesperson for the importance of music education. Balsom was awarded Artist of the Year at the 2013 Gramophone Awards and has won three Classic BRIT Awards and three German Echo Awards, and was soloist at the BBC Last Night of the Proms in 2009. Balsom has been awarded Honorary Doctorates from the University of Leicester and the University of East Anglia, and is an Honorary Fellow of the Guildhall School of Music and Drama.'
        }),
        knex('musicians').insert({
          id: 3,
          user_id: 3,
          first: 'Phillip',
          last: 'Meyers',
          email:  'phil@philip.com',
          imageURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpTjFmI4WXsz1Kfh_xzOjDQIKu1BRZ1ZGWp6bOYzApthkWbTLvGg',
          instrument: 'French horn',
          bio: 'Since 1980, Myers has served as Principal Horn of the New York Philharmonic and frequently appears as soloist with the orchestra. Before arriving at the New York Philharmonic, Myers was principal horn of the Atlantic Symphony Orchestra in Halifax, Nova Scotia, 1971–1974, third horn with the Pittsburgh Symphony Orchestra from 1974–1977, and Principal Horn of the Minnesota Orchestra from 1978–1980.'
        })
      ]);
    });

  })

};
