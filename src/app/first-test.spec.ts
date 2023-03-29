describe('my first test', () => {
  let sut;

  beforeEach(() => {
    sut = {}
  })

  it('should be true if true', () => {
    sut.a = false;
    
    sut.a = true;
    
    expect(sut.a).toBe(true);
  });
})

// 'user service getUser method should retrieve the correct user'
// describe('user service', () => {

//   describe('getUser method', () => {
//     it('should retrieve the correct user')
//   })
// })
