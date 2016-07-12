
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('musicians').del().then(function() {
    return knex.raw('ALTER SEQUENCE musicians_id_seq restart with 6')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('musicians').insert({
          id: 1,
          user_id: 1,
          first: 'Yo Yo',
          last: 'Ma',
          email: 'yoyo@careylamothe.com',
          imageURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLrCKS6u95tS-oO8L31_jhC87JuxSjTS00ZdSOkBxGrhoqztHAXg',
          instrument: 'cello',
          bio: 'Yo-Yo Ma is one of the most prominent cellist of the modern era and is an inspiration to many in the musical world. He has produced dozens of albums and has won 15 Grammy awards throughout his lifetime. Yo-Yo Ma has recorded various styles of music including classical, American folk music, and traditional Chinese melodies. '
        }),
        knex('musicians').insert({
          id: 2,
          user_id: 2,
          first: 'Alison',
          last: 'Balsom',
          email: 'ali@careylamothe.com',
          imageURL: 'http://www.schilkemusic.com/wp-content/uploads/2014/11/A-Balsom-new1.jpg',
          instrument: 'trumpet',
          bio: 'Alison Balsom is a trumpet soloist, arranger, producer, music educator, curator and spokesperson for the importance of music education. Balsom was awarded Artist of the Year at the 2013 Gramophone Awards and has won three Classic BRIT Awards and three German Echo Awards, and was soloist at the BBC Last Night of the Proms in 2009. Balsom has been awarded Honorary Doctorates from the University of Leicester and the University of East Anglia, and is an Honorary Fellow of the Guildhall School of Music and Drama.'
        }),
        knex('musicians').insert({
          id: 3,
          user_id: 3,
          first: 'Phillip',
          last: 'Meyers',
          email:  'phil@careylamothe.com',
          imageURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpTjFmI4WXsz1Kfh_xzOjDQIKu1BRZ1ZGWp6bOYzApthkWbTLvGg',
          instrument: 'French horn',
          bio: 'Since 1980, Myers has served as Principal Horn of the New York Philharmonic and frequently appears as soloist with the orchestra. Before arriving at the New York Philharmonic, Myers was principal horn of the Atlantic Symphony Orchestra in Halifax, Nova Scotia, 1971–1974, third horn with the Pittsburgh Symphony Orchestra from 1974–1977, and Principal Horn of the Minnesota Orchestra from 1978–1980.'
        }),
        knex('musicians').insert({
          id: 4,
          user_id: 4,
          first: 'Esther',
          last: 'Anaya',
          email: 'esther@careylamothe.com',
          imageURL: 'http://static1.squarespace.com/static/56710b7a9cadb635387ca8d3/5672c06f9cadb60e553eb1ab/5672c1075a566877a0571a3e/1450361101420/ESTHER+AND+VIOLIN+COLOR.jpg?format=2500w',
          instrument: 'violin',
          bio: "Esther calls Los Angeles her home, and it's where she's been called upon to perform with major super stars including Rhianna, Kanye West and Latin crooner Christian Castro."
        }),
        knex('musicians').insert({
          id: 5,
          user_id: 5,
          first: 'Mark',
          last: 'Miller',
          email: 'mmiller@careylamothe.com',
          imageURL: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/275/3dc/1971a06.jpg',
          instrument: 'trombone',
          bio: 'I am a professional trombonist, educator, and conductor. I specialize in private brass lessons for students of all ages and ability levels. I recently graduated from the University of Southern California, Thornton School of Music with a D.M.A. in Trombone Performance.'
        })
      ]);
    });

  })

};
