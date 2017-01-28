import cyclow from '../../src/cyclow';

describe('cyclow', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(cyclow, 'greet');
      cyclow.greet();
    });

    it('should have been run once', () => {
      expect(cyclow.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(cyclow.greet).to.have.always.returned('hello');
    });
  });
});
