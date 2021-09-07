const users = [
    {
        name: 'Yagnesh',
        age: 33,
        gender: 'male',
    },
    {
        name: 'Virat',
        age: 28,
        gender: 'male'
    },
    {
        name: 'Rohit',
        age: 26,
        gender: 'male'
    },
    {
        name: 'Alia',
        age: 18,
        gender: 'female'
    },
    {
        name: 'Dipeeka',
        age: 34,
        gender: 'female'
    },
    {
        name: 'Periyanka',
        age: 19,
        gender: 'female',
    },
    {
        name: 'Periyanka',
        age: 38,
        gender: 'female',
    }
]

// GroupBy Age 10-19, 20-29, 30-39
// Sort by Age
const groupByAge = users.reduce((p, c) => {
   const ageGroup = Math.floor(c.age / 10);
   const ageArray = `${ageGroup}0-${ageGroup}9`;
    if (!p[ageArray]) {
        p[ageArray] = []
    }
    const index = p[ageArray].findIndex(obj => obj.age < c.age)
    index === 0 ? p[ageArray].push(c) : p[ageArray].unshift(c);
    return p

}, {});
console.log(groupByAge)

//using redude loop impemement same functionality as Every
const everyGender = users.reduce((p, c) => {
    if(c.gender !== 'female'){
        return false;
    }
    return p
},true);
console.log(everyGender)
console.log(users.every(obj => obj.gender === 'female'))
