
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

const groupByAge = users.reduce((p, c) => {
    const ageValue = Math.floor(c.age / 10);
    const age = `${ageValue}0-${ageValue}9`;
    (p[age] = p[age] || []).push(c)
    return p;

    p[age].sort(function (a, b) {

        return a.age - b.age;
    });

}, {});
console.log(groupByAge)


//Every reduce
const every = users.every(user => user.age > 18);
console.log(every)

const reduceMethod = users.reduce((p, c) => p && c.age > 18);
console.log(reduceMethod)


//promises
const myPromise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise Resolved");
    }, 2000);
  });
};

const myPromise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise Rejected");
    }, 2000);
  });
};

const myPromise3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise Resolved");
    }, 3000);
  });
};

myPromise1()
  .then((fromResolve) => {
    console.log(fromResolve);
  })
  .catch((fromReject) => {
    console.log(fromReject); 
  });

myPromise2()
  .then((fromResolve) => {
    console.log(fromResolve);
  })
  .catch((fromReject) => {
    console.log(fromReject); 
  });
