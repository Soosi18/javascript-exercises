const findTheOldest = function(people) {
    people = people.sort((person1, person2) => {
        let age1 = (person1.yearOfDeath ? person1.yearOfDeath : new Date().getFullYear()) - person1.yearOfBirth;
        let age2 = (person2.yearOfDeath ? person2.yearOfDeath : new Date().getFullYear()) - person2.yearOfBirth;
        return age1 < age2 ? 1 : -1;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
