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
    }
    ]

    const group = users.sort((a,b) => {
return a.age - b.age
    });

    console.log(group);