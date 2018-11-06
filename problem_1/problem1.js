/**
 * Given an array of person objects, returns an object that organizes people
 * into groups by programming language skill, where the programming language
 * is the key and the value is an array of names.
 * @param {array} people - The array of person objects to process.
 * @returns {object} - An object with programming languages as keys and an array
 *                     of names as the value.
 */
export default function problem1(people) {
  return people.reduce((acc, person) => {
    const {
      name,
      skills,
    } = person;

    // Loop over skills and add this person to each item.
    skills.forEach((skill) => {
      if (acc[skill]) {
        acc[skill].push(name);
      } else {
        acc[skill] = [name];
      }
    });

    return acc;
  }, {});
}
