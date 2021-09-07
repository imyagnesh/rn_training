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

    const group = users.reduce((p,c)=>{
const ageKey = Math.floor(c.age/10);
const key = `${ageKey}0-${ageKey}9`;
(p[key]=p[key] || []).push(c);
return p;
    }, {})

    console.log(group);