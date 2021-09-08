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
(p[key]= p[key] || []).push(c);

// p[key].sort((a,b) => {
//     return a.age - b.age
//         });
for(let i=1; i<p[key].length; i++){
    if (p[key][i - 1].age > p[key][i].age) {
        var tmp = p[key][i - 1];
        p[key][i - 1] = p[key][i];
        p[key][i] = tmp;
      }
}
return p;
    }, {})

    console.log(group);