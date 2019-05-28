const commentsMock = {
  comment: {
    articleId: '52a573fc-f1f2-42ae-a734-1bd9b6d1f8b8',
    body: 'Put simply, JSend is a specification that lays down some rules for how JSON responses from web servers should be formatted. JSend focuses on application-level (as opposed to protocol- or transport-level) messaging which makes it ideal for use in REST-style applications and APIs.',
    createdAt: new Date(),
    id: '979eaa2e-5b8f-4103-8192-4639afae2bb9',
    userId: '979eaa2e-5b8f-4103-8192-4639afae2ba9'
  },

  comments: [
    {
      articleId: '52a573fc-f1f2-42ae-a734-1bd9b6d1f8b8',
      body: 'Put simply',
      createdAt: new Date(),
      id: '979eaa2e-5b8f-4103-8192-4639afae2ce9',
      userId: '979eaa2e-5b8f-4103-8192-4639afae2ba9'
    },
    {
      articleId: '52a573fc-f1f2-42ae-a734-1bd9b6d1f8b8',
      body: 'Put simply, JSend is a specification.',
      createdAt: new Date(),
      id: '979eaa2e-5b8f-4103-8192-4639afae2bb9',
      userId: '979eaa2e-5b8f-4103-8192-4639afae2ba9'
    },
  ],
};

export default commentsMock;
