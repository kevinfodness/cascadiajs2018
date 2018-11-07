import problem2 from './problem2';

describe('problem2', () => {
  it('Should properly convert numbers to words.', () => {
    expect(problem2(-1)).toEqual('Number out of bounds.');
    expect(problem2(1000000000)).toEqual('Number out of bounds.');
    expect(problem2(123.456)).toEqual('Number is too precise.');
    expect(problem2('12345')).toEqual('Value is not a number.');
    expect(problem2(1000)).toEqual('One thousand');
    expect(problem2(1000000)).toEqual('One million');
    expect(problem2(1545120)).toEqual('One million, five hundred and forty-five thousand, one hundred and twenty');
    /**
     * This next test is a deviation from what is on the problem sheet, as the
     * number provided is actually 9,999,999 rather than 999,999,999, as
     * expected by the text of the result. I have updated the number to match
     * the text.
     */
    expect(problem2(999999999.99)).toEqual('Nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine and 99/100');
    expect(problem2(245.13)).toEqual('Two hundred and forty-five and 13/100');
  });
});
