export const articleIsViewed = {
  data:{
    id: '52a573fc-f1f2-42ae-a734-1bd9b6d1f8b8',
    userId: '979eaa2e-5b8f-4103-8192-4639afae2ba9',
    title: 'Chike and the River by Chimua Achebe',
    slug: 'https://author-haven-stage.herokuapp.com/api/v1/articles/Chike-and-the-River-by-Chimua-Achebe-1558094506310',description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    slug: 'https://author-haven-stage.herokuapp.com/api/v1/articles/Chike-and-the-River-by-Chimua-Achebe-1558094506310',body: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    body: '',
    imageUrl:[
      'http://res.cloudinary.com/kobe/image/upload/v1558094433/979eaa2e-5b8f-4103-8192-4639afae2ba9/articles/354.jpg','http://res.cloudinary.com/kobe/image/upload/v1557738371/979eaa2e-5b8f-4103-8192-4639afae2ba9/articles/57531013_10210893961305408_174373778137022464_o.jpg',
      'http://res.cloudinary.com/kobe/image/upload/v1557738371/979eaa2e-5b8f-4103-8192-4639afae2ba9/articles/57531013_10210893961305408_174373778137022464_o.jpg',
      'http://res.cloudinary.com/kobe/image/upload/v1558094490/979eaa2e-5b8f-4103-8192-4639afae2ba9/articles/sign-up-4.png'
    ],
    published: true,
    tags: ['demo','test','simple'],
    favouritesCount: 500,
    readCount: 230,
    totalReadTime: 4,
    isDeletedByAuthor: false,
    createdAt: '2019-05-18T16:52:01.559Z',
    updatedAt: '2019-05-18T16:52:01.559Z',
    author: {
      id: '979eaa2e-5b8f-4103-8192-4639afae2ba9',
      fullName: 'Chike Ozulumba',
      username: 'chikeozulumba',
      imageUrl: 'https://res.cloudinary.com/dmq014llt/image/upload/v1557326099/people/beautiful-brunette-cute.jpg'
    },
    comments:[]
  },
  error: null,
};

export const mockStoreData = {
  articles: {
    allArticles: [],
    isArticleRequest: false,
  },
  createArticle: {
    error: {},
    article: {
      title: 'Testing',
      body: 'Testing',
      tags: ['test', 'testing'],
      published: true,
      imageUrl: ['https://res.cloudinary.com/dmq014llt/image/upload/v1557326099/people/beautiful-brunette-cute.jpg']
    }
  },
  article: {
    id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
    title: 'my article',
    imageUrl: [''],
    author: { fullName: 'Albert Einstein' },
    totalReadTime: 3,
    tags: [],
    body: 'lorem ipsum'
  },
  profile: {
    loadedData: {
      bio: "Hold on now, aren't there already specs for this kind of thing? - Well... no. While there are a few handy specifications for dealing with JSON data, most notably Douglas Crockford's JSONRequest proposal, there's nothing to address the problems of general application-level messaging. More on this later.",
      email: "chike@gmail.com",
      fullName: "Chike Ozulumba",
      imageUrl: "https://res.cloudinary.com/dmq014llt/image/upload/v1557326099/people/beautiful-brunette-cute.jpg",
      passwordResetToken: null,
      resetTokenExpires: null,
      username: "chikeozulumba",
      verificationToken: null,
      verified: true,
    },
    error: null,
    isLoading: true,
  },
  auth: {
    signin: {
      id: '979eaa2e-5b8f-4103-8192-4639afae2ba9',
      fullName: 'Chike Ozulumba',
      username: 'chikeozulumba',
      imgUrl: 'img_ur;'
    }
  }
};

export const JWT_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3OWVhYTJlLTViOGYtNDEwMy04MTkyLTQ2MzlhZmFlMmJhOSIsImZ1bGxOYW1lIjoiQ2hpa2UgT3p1bHVtYmEiLCJiaW8iOiJIb2xkIG9uIG5vdywgYXJlbid0IHRoZXJlIGFscmVhZHkgc3BlY3MgZm9yIHRoaXMga2luZCBvZiB0aGluZz8gLSBXZWxsLi4uIG5vLiBXaGlsZSB0aGVyZSBhcmUgYSBmZXcgaGFuZHkgc3BlY2lmaWNhdGlvbnMgZm9yIGRlYWxpbmcgd2l0aCBKU09OIGRhdGEsIG1vc3Qgbm90YWJseSBEb3VnbGFzIENyb2NrZm9yZCdzIEpTT05SZXF1ZXN0IHByb3Bvc2FsLCB0aGVyZSdzIG5vdGhpbmcgdG8gYWRkcmVzcyB0aGUgcHJvYmxlbXMgb2YgZ2VuZXJhbCBhcHBsaWNhdGlvbi1sZXZlbCBtZXNzYWdpbmcuIE1vcmUgb24gdGhpcyBsYXRlci4iLCJlbWFpbCI6ImNoaWtlQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiY2hpa2VvenVsdW1iYSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NTA4MTE3NCwiZXhwIjoxNTg2NjE3MTc0fQ.0jcdr45n6BGKM2nZ_C9_XMYw3vBq5V3XMbpeZm86Rfo';