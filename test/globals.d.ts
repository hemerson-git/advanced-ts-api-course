declare global {
  //eslint-disable-next-line
  var testRequest: import("supertest").SuperTest<import("supertest").Test>;
}

export {};
