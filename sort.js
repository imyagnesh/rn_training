const users = [
  {
    name: "Yagnesh",
    age: 33,
    gender: "male",
  },
  {
    name: "Virat",
    age: 28,
    gender: "male",
  },
  {
    name: "Rohit",
    age: 26,
    gender: "male",
  },
  {
    name: "Alia",
    age: 19,
    gender: "female",
  },
  {
    name: "Dipeeka",
    age: 34,
    gender: "female",
  },
  {
    name: "Periyanka",
    age: 38,
    gender: "female",
  },
];
// console.log(users);

const groupByAge = users.reduce((p, c) => {
  const ageGroup = Math.floor(c.age / 10);
  const key = `${ageGroup}0-${ageGroup}9`;
  (p[key] = p[key] || []).push(c);
  p[key].sort((a, b) => a.age - b.age);
  return p;
}, {});
console.log(groupByAge)
