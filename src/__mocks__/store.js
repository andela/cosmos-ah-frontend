export const mockStoreData = {
  articles: {
    allArticles: [],
    isArticleRequest: false
  },
  createArticle: {
    error: {},
    article: {
      title: 'Testing',
      body: 'Testing',
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
  }
};

export const JWT_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3OWVhYTJlLTViOGYtNDEwMy04MTkyLTQ2MzlhZmFlMmJhOSIsImZ1bGxOYW1lIjoiQ2hpa2UgT3p1bHVtYmEiLCJiaW8iOiJIb2xkIG9uIG5vdywgYXJlbid0IHRoZXJlIGFscmVhZHkgc3BlY3MgZm9yIHRoaXMga2luZCBvZiB0aGluZz8gLSBXZWxsLi4uIG5vLiBXaGlsZSB0aGVyZSBhcmUgYSBmZXcgaGFuZHkgc3BlY2lmaWNhdGlvbnMgZm9yIGRlYWxpbmcgd2l0aCBKU09OIGRhdGEsIG1vc3Qgbm90YWJseSBEb3VnbGFzIENyb2NrZm9yZCdzIEpTT05SZXF1ZXN0IHByb3Bvc2FsLCB0aGVyZSdzIG5vdGhpbmcgdG8gYWRkcmVzcyB0aGUgcHJvYmxlbXMgb2YgZ2VuZXJhbCBhcHBsaWNhdGlvbi1sZXZlbCBtZXNzYWdpbmcuIE1vcmUgb24gdGhpcyBsYXRlci4iLCJlbWFpbCI6ImNoaWtlQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiY2hpa2VvenVsdW1iYSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NTA4MTE3NCwiZXhwIjoxNTg2NjE3MTc0fQ.0jcdr45n6BGKM2nZ_C9_XMYw3vBq5V3XMbpeZm86Rfo';