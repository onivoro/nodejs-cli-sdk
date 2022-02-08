import { exec } from './exec';

function main(one, two) { return one + two; }

describe('exec', () => {
  describe('when nothing provided', () => {
    it('logs main return value', () => {
      const args = [];      
      const log = jest.fn();
      exec(main, args, log)
      expect(log).toHaveBeenCalledWith(NaN);
    });
  });

  describe('when values provided', () => {
    it('logs main return value', () => {
      const args = ['--one', '1', '--two', '2'];      
      const log = jest.fn();
      exec(main, args, log)
      expect(log).toHaveBeenCalledWith('12');
    });
  });

  describe('when "--help" provided', () => {
    it('logs expected parameters', () => {
      const args = ['--help'];      
      const log = jest.fn();
      exec(main, args, log)
      expect(log).toHaveBeenCalledWith(expect.stringMatching(/one.*\ntwo/));
    });
  });
});