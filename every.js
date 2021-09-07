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

const every = users.every(user => user.age > 18);

console.log(every)

const reduceMethod = users.reduce((p, c) => p && c.age > 18);
console.log(reduceMethod)