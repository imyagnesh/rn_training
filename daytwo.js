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

age: 19,

gender: 'female'

},

{

name: 'Dipeeka',

age: 34,

gender: 'female'

},

{

name: 'Periyanka',

age: 38,

gender: 'female',

},

{

name: 'Baskar',

age: 48,

gender: 'male',

}

]

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
console.log(groupByAge);



//Every Reduce

const reduceAsEvery = users.reduce((p,c)=>p&c.age>20);

console.log(reduceAsEvery);


//Promisses

const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 1 Resolved')
        }, 1500);
    });
}

const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 2 Resolved')
        }, 1000);
    });
}

const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 3 Resolved')
        }, 2500);
    });
}

const allSettledPromise = async () => {
    try {
        const allSettledValues = await Promise.allSettled([promise1(), promise2(), promise3()]);
        console.log(`allSettledValues : ${allSettledValues}`);
    }
    catch (error) {
        console.log(error)
    }
}

const allPromise = async () => {
    try {
        const allValues = await Promise.all([promise1(), promise2(), promise3()]);
        console.log(`allValues : ${allValues}`)
    } catch (error) {
        console.log(error)
    }

}
const racePromise = async () => {
    try {
        const raceResult = await Promise.race([promise1(), promise2(), promise3()]);
        console.log(`RaceValues : ${raceResult}`)
    } catch (error) {
        console.log(error)
    }
}

const anyPromise = async () => {
    try {

        const anyResult = await Promise.any([promise1(), promise2(), promise3()]);
        console.log(`anyResult : ${anyResult}`)
    }
    catch (error) {
        console.log(error)
    }
}
allPromise();
allSettledPromise();
racePromise();
anyPromise(); 