/**
 * Given a number between 0 and 999,999,999.99 with no more than two decimal
 * points, returns a string representation of the number suitable for use in
 * the "amount" field on a check.
 * @param {number} number - The number to convert.
 * @returns {string} - The string representation of the number.
 */
export default function problem2(number) {
  // Ensure that number is actually a number.
  if ('number' !== typeof number) {
    return 'Value is not a number.';
  }

  // Ensure the number is in-bounds.
  if (0 > number || 999999999.99 < number) {
    return 'Number out of bounds.';
  }

  // Split the number into parts and ensure decimal is not too precise.
  const [baseNumber, decimal] = number.toString().split('.');
  if (decimal && 99 < decimal) {
    return 'Number is too precise.';
  }

  // Define words for various aspects of translation.
  const ranges = ['', 'thousand', 'million'];
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  // Split the number into segments of three in reverse order.
  const segments = [];
  const backwards = baseNumber.split('').reverse().join('');
  for (let i = 0; i < backwards.length; i += 3) {
    segments.push(backwards.substr(i, 3));
  }

  // Loop over the segments and build the response for each.
  const response = [];
  segments.forEach((segment, index) => {
    const segmentResponse = [];

    // Split the segment value into the hundreds and tens place.
    const tenSegment = parseInt(segment.substr(0, 2).split('').reverse().join(''), 10);
    const hundredSegment = parseInt(segment.substr(2, 1), 10);

    // If there is a hundreds place value, add it.
    if (hundredSegment) {
      segmentResponse.push(`${numbers[hundredSegment]} hundred`);
    }

    // If there is a hundreds place and tens place, separate with "and".
    if (hundredSegment && tenSegment) {
      segmentResponse.push('and');
    }

    // If there is a tens place, add it.
    if (0 < tenSegment && 20 > tenSegment) {
      segmentResponse.push(numbers[tenSegment]);
    } else if (20 <= tenSegment) {
      const tensPrimary = Math.floor(tenSegment / 10);
      const tensSecondary = tenSegment % 10;
      if (0 === tenSegment % 10) {
        segmentResponse.push(tens[tensPrimary]);
      } else {
        segmentResponse.push(`${tens[tensPrimary]}-${numbers[tensSecondary]}`);
      }
    }

    // Add the value for this range.
    if (segmentResponse.length && ranges[index]) {
      segmentResponse.push(ranges[index]);
    }

    // Compile the segment response into the response.
    if (segmentResponse.length) {
      response.push(segmentResponse.join(' '));
    }
  });

  // Invert the segment response so the numbers are in the correct order.
  response.reverse();

  // Compile a string containing the result from the main number.
  const rawResponseString = response.join(', ');

  // Capitalize the first letter.
  const responseString = `${rawResponseString.charAt(0).toUpperCase()}${rawResponseString.slice(1)}`;

  // If there are numbers after the decimal, add them.
  if (decimal) {
    return `${responseString} and ${decimal}/100`;
  }

  return responseString;
}
