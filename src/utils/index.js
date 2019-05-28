export default {
  dropDownItems: [
    {
      key: 'Trending',
      text: 'Trending',
      value: 'Trending'
    },

    {
      key: 'Tech',
      text: 'Tech',
      value: 'Tech'
    },

    {
      key: 'Culture',
      text: 'Culture',
      value: 'Culture'
    },

    {
      key: 'Fiction',
      text: 'Fiction',
      value: 'Fiction'
    },

    {
      key: 'Romance',
      text: 'Romance',
      value: 'Romance'
    },

    {
      key: 'Self',
      text: 'Self',
      value: 'Self'
    },

    {
      key: 'Health',
      text: 'Health',
      value: 'Health'
    },

    {
      key: 'Politics',
      text: 'Politics',
      value: 'Politics'
    },
  ],
  navLinks: [
    { title: 'Home', url: '/' },
    { title: 'Culture', url: '/' },
    { title: 'Tech', url: '/' },
    { title: 'Fiction', url: '/' },
    { title: 'Politics', url: '/' },
    { title: 'Health', url: '/' },
    { title: 'Self', url: '/' },
    { title: 'Romance', url: '/' },
    { title: 'Arts', url: '/' },
    { title: 'Music', url: '/' },
    { title: 'Math', url: '/' }
  ],
  collections: {
    tech: {
      id: 1,
      storyCount: 20,
      image: 'https://res.cloudinary.com/dmq014llt/image/upload/v1557325101/tech/alex-knight-199368-unsplash.jpg',
      title: 'Tech'
    },

    fiction: {
      id: 2,
      storyCount: 22,
      image: 'https://picsum.photos/200/300',
      title: 'Fiction'
    },

    self: {
      id: 3,
      storyCount: 25,
      image: 'https://res.cloudinary.com/dmq014llt/image/upload/v1557439207/culture/andela.jpg',
      title: 'Culture'
    }
  }
};
