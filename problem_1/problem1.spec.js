import problem1 from './problem1';

describe('problem1', () => {
  it('Should properly transform the data structure.', () => {
    expect(problem1([
      {
        id: 0,
        name: 'John',
        skills: ['javascript', 'html', 'css', 'c#'],
      },
      {
        id: 1,
        name: 'Brian',
        skills: ['javascript', 'java', 'c', 'c#', 'c++', 'html'],
      },
      {
        id: 2,
        name: 'Michael',
        skills: ['c', 'c++', 'go', 'rust'],
      },
    ])).toEqual({
      c: ['Brian', 'Michael'],
      'c#': ['John', 'Brian'],
      'c++': ['Brian', 'Michael'],
      css: ['John'],
      go: ['Michael'],
      html: ['John', 'Brian'],
      java: ['Brian'],
      javascript: ['John', 'Brian'],
      rust: ['Michael'],
    });
  });
});
