let a = 6;
console.log(a)
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

    console.log(users);

    users.sort((a,b) =>  a.age-b.age)
    const _groupby = users.reduce((prev,curr) => {
        const arry = Math.floor(curr.age/10);
        let key =   `${arry}0-${arry}9`;
        (prev[key] = prev[key] || []).push(curr)
        return prev;
    })

    console.log(_groupby)
    