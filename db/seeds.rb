airlines =
  Airline.create(
    [
      {
        name: 'United Machester',
        image_url:
          'https://www.logosurfer.com/wp-content/uploads/2018/03/united-airlines-logo_0.jpg',
      },
      {
        name: 'United Arab Airlines',
        image_url:
          'https://www.logosurfer.com/wp-content/uploads/2018/03/united-airlines-logo_0.jpg',
      },
      {
        name: 'United Russia Airlines',
        image_url:
          'https://www.logosurfer.com/wp-content/uploads/2018/03/united-airlines-logo_0.jpg',
      },
      {
        name: 'United Pinoy Airlines',
        image_url:
          'https://www.logosurfer.com/wp-content/uploads/2018/03/united-airlines-logo_0.jpg',
      },
      {
        name: 'United Biboy Airlines',
        image_url:
          'https://www.logosurfer.com/wp-content/uploads/2018/03/united-airlines-logo_0.jpg',
      },
      {
        name: 'United Arab Emirates',
        image_url:
          'https://www.logosurfer.com/wp-content/uploads/2018/03/united-airlines-logo_0.jpg',
      },
    ],
  )

reviews =
  Review.create(
    [
      {
        title: 'Great',
        description: 'Good',
        score: 5,
        airline: airlines.first,
      },
      { title: 'Great', description: 'Bad', score: 1, airline: airlines.first },
    ],
  )
