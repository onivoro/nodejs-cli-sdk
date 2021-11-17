import { argParser } from './arg-parser';

describe('argParser', () => {
  describe('when nothing provided', () => {
    it('returns empty object graph', () => {
      expect(argParser([])).toEqual({ _: [] });
    });
  });
  describe('when double-dash options/values provided', () => {
    it.each([
      [['--port', '1234']]
    ])('given %j', (args) => {
      expect(argParser(args)).toMatchSnapshot();
    });
  });
  describe('when double-dash options provided with no value', () => {
    it.each([
      [['--debug']],
      [['--debug', '--verbose']]
    ])('given %j', (args) => {
      expect(argParser(args)).toMatchSnapshot();
    });
  });
  describe('when args provided with no flags or options', () => {
    it.each([
      [['hot dogs', 'hamburgers', 'chicken']]
    ])('given %j', (args) => {
      expect(argParser(args)).toMatchSnapshot();
    });
  });

  describe('mixed cases', () => {
    it.each([      
      [['--find', 'caat', '--replace', 'cat', 'main.js']],
      [['--debug', '--verbose', '--', 'file1.txt']]
    ])('given %j', (args) => {
      expect(argParser(args)).toMatchSnapshot();
    });
  });
});