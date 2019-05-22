const articleMock = {
  article: {
    id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
    title: 'my article',
    imageUrl: ['/path/to/image.png'],
    author: { fullName: 'Albert Einstein' },
    totalReadTime: 3,
    readCount: 100,
    tags: [],
    body: 'lorem ipsum',
    createdAt: new Date(),
    description: 'lorem desc'
  },

  articles: [
    {
      id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
      title: 'my article 1',
      imageUrl: '',
      author: 'Albert Einstein',
      totalReadTime: 3,
      readCount: 50,
      tags: ['tech'],
      body: 'lorem ipsum',
      createdAt: new Date(),
      averageRating: 4
    },

    {
      id: '10ba038e-48da-487b-96e8-8d3b99b6d18b',
      title: 'my article 2',
      imageUrl: '',
      author: 'Albert Einstein',
      readCount: 100,
      totalReadTime: 3,
      tags: ['fiction'],
      body: 'lorem ipsum',
      createdAt: new Date(),
      averageRating: 5
    }
  ],

  categories: ['tech', 'people', 'culture', 'fiction'],

  categoriesMap: {
    tech: [
      { id: '10ba038e-48da-487b-96e8-8d3b99b6d18b' }
    ],

    people: [],

    culture: [
      { id: '10ba038e-48da-487b-96e8-8d3b99b6d18d' }
    ],

    fiction: [
      { id: '10ba038e-48da-487b-96e8-8d3b99b6d18a' }
    ]
  }
};

export default articleMock;
